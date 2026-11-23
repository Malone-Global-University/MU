<#
.SYNOPSIS
  Dry-run-first reconciliation of six Data Systems Level 5 article paths.
.DESCRIPTION
  Run without -Apply to print planned changes. Run with -Apply to move files and update
  ABSOLUTE encyclopedia links, canonical metadata and og:url for the six moved articles.
  Creates timestamped backups outside the Computer Science volume before modifications.
  Does NOT deploy files, change web server redirects or blindly overwrite destinations.
  Review relative links and external navigation separately.
.EXAMPLE
  .\reorganize-data-systems.ps1
.EXAMPLE
  .\reorganize-data-systems.ps1 -Apply
#>
[CmdletBinding()]
param(
  [string] $Root = 'C:\MGU\library\encyclopedia\computer-science\data-systems',
  [switch] $Apply
)
$ErrorActionPreference = 'Stop'
$rootPath = [IO.Path]::GetFullPath($Root)
$volume = Split-Path -Parent $rootPath
$publicBase = '/library/encyclopedia/computer-science/data-systems/'
$moves = [ordered]@{
  'data-transformation.html' = 'data-engineering-articles\data-transformation.html'
  'database-indexing.html' = 'databases-articles\database-indexing.html'
  'database-transactions.html' = 'databases-articles\database-transactions.html'
  'distributed-databases.html' = 'databases-articles\distributed-databases.html'
  'relational-database-model.html' = 'databases-articles\relational-database-model.html'
  'structured-query-language.html' = 'databases-articles\structured-query-language.html'
}
if (-not (Test-Path -LiteralPath $rootPath -PathType Container)) {
  throw "Data Systems root does not exist: $rootPath"
}
$plans = New-Object System.Collections.Generic.List[object]
foreach ($from in $moves.Keys) {
  $source = Join-Path $rootPath $from
  $target = Join-Path $rootPath $moves[$from]
  if (Test-Path -LiteralPath $target) { throw "Refusing destination collision: $target" }
  if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { throw "Missing source: $source" }
  $fromSlug = [IO.Path]::GetFileNameWithoutExtension($from)
  $toSlug = ($moves[$from] -replace '\\','/' -replace '\.html$','')
  $plans.Add([pscustomobject]@{Source=$source; Destination=$target; Old=$publicBase+$fromSlug; New=$publicBase+$toSlug})
}
Write-Host 'Data Systems Level 5 article relocation plan:'
$plans | Format-Table Old,New -AutoSize
if (-not $Apply) {
  Write-Host 'DRY RUN only. Re-run with -Apply after backing up your MGU repository and reviewing this plan.'
  return
}
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path 'C:\MGU\_migration-backups' "data-systems-$stamp"
New-Item -ItemType Directory -Force -Path $backupRoot | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($p in $plans) {
  $backup = Join-Path $backupRoot ([IO.Path]::GetFileName($p.Source))
  Copy-Item -LiteralPath $p.Source -Destination $backup
  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $p.Destination) | Out-Null
  Move-Item -LiteralPath $p.Source -Destination $p.Destination
  Write-Host "Moved $($p.Source) -> $($p.Destination)"
}
$changed = 0
Get-ChildItem -LiteralPath $volume -Filter '*.html' -File -Recurse | ForEach-Object {
  $f = $_.FullName
  $raw = [IO.File]::ReadAllText($f)
  $next = $raw
  foreach ($p in $plans) {
    # Match only full old public route, optionally .html, not longer filenames.
    $pattern = [regex]::Escape($p.Old) + '(?:\.html)?(?=$|["''\s?#<])'
    $next = [regex]::Replace($next, $pattern, [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $p.New })
  }
  foreach ($p in $plans) {
    if ($f -ne $p.Destination) { continue }
    $canonicalTag = '<link rel="canonical" href="https://maloneuniversity.org' + $p.New + '">'
    $ogTag = '<meta property="og:url" content="https://maloneuniversity.org' + $p.New + '">'
    $canonicalRe = '(?is)<link\b(?=[^>]*\brel\s*=\s*["'']canonical["''])[^>]*>'
    $ogRe = '(?is)<meta\b(?=[^>]*\bproperty\s*=\s*["'']og:url["''])[^>]*>'
    if ([regex]::IsMatch($next,$canonicalRe)) {$next=[regex]::Replace($next,$canonicalRe,$canonicalTag)}
    else {$next=[regex]::Replace($next,'(?is)</head>',$canonicalTag+"`n"+'</head>')}
    if ([regex]::IsMatch($next,$ogRe)) {$next=[regex]::Replace($next,$ogRe,$ogTag)}
    else {$next=[regex]::Replace($next,'(?is)</head>',$ogTag+"`n"+'</head>')}
  }
  if ($next -cne $raw) {
    $relative = $f.Substring($volume.Length).TrimStart('\')
    $backup = Join-Path $backupRoot ('html-before-edit\'+$relative)
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $backup) | Out-Null
    Copy-Item -LiteralPath $f -Destination $backup
    [IO.File]::WriteAllText($f,$next,$utf8)
    $changed++
  }
}
Write-Host "Updated HTML files: $changed"
Write-Host "Backups: $backupRoot"
Write-Host 'NEXT: update relative links and any external menus/sitemaps, add HTTP 301 redirects in hosting, install delivered indexes, test routes.'
