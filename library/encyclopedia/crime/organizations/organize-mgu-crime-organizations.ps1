#requires -version 5.1
<#
.SYNOPSIS
  Preview or apply a 40-file classification for MGU Crime Encyclopedia organization pages.
.DESCRIPTION
  Preview by default. -Apply copies originals into a timestamped backup folder
  before moving them to type/city subdirectories. No existing file is overwritten.
  IMPORTANT: Moving HTML breaks published relative links and URLs until you update
  the /organizations/index.html navigation and add redirects for prior public URLs.
  This plan only moves the 40 loose HTML files, not existing directories or index.html.
#>
param(
  [string]$Root = "C:\MGU\library\encyclopedia\crime\organizations",
  [string]$BackupRoot = "C:\MGU\_reorganization-backups\crime-organizations",
  [switch]$Apply
)
$ErrorActionPreference = "Stop"
$Pairs = @(
  @("philadelphia-black-mafia.html", "african-american-organized-crime/syndicates/philadelphia-black-mafia.html")
  @("junior-black-mafia.html", "african-american-organized-crime/syndicates/junior-black-mafia.html")
  @("the-council.html", "african-american-organized-crime/syndicates/the-council.html")
  @("black-mafia-family.html", "african-american-organized-crime/syndicates/black-mafia-family.html")
  @("bmf-atlanta-distribution-hub.html", "african-american-organized-crime/syndicates/bmf-atlanta-distribution-hub.html")
  @("atkinson-jackson-heroin-import-network.html", "african-american-organized-crime/drug-trafficking-enterprises/transnational/atkinson-jackson-heroin-import-network.html")
  @("country-boys.html", "african-american-organized-crime/drug-trafficking-enterprises/new-york-city/country-boys.html")
  @("lorenzo-nichols-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/new-york-city/lorenzo-nichols-organization.html")
  @("mcgriff-enterprise-later-period.html", "african-american-organized-crime/drug-trafficking-enterprises/new-york-city/mcgriff-enterprise-later-period.html")
  @("freeway-rick-ross-distribution-network.html", "african-american-organized-crime/drug-trafficking-enterprises/los-angeles/freeway-rick-ross-distribution-network.html")
  @("jemeker-thompson-trafficking-network.html", "african-american-organized-crime/drug-trafficking-enterprises/los-angeles/jemeker-thompson-trafficking-network.html")
  @("rayful-edmond-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/washington-dc/rayful-edmond-organization.html")
  @("melvin-williams-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/baltimore/melvin-williams-organization.html")
  @("meredith-ricks-king-heroin-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/baltimore/meredith-ricks-king-heroin-organization.html")
  @("tommy-canty-drug-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/baltimore/tommy-canty-drug-organization.html")
  @("chambers-brothers-organization.html", "african-american-organized-crime/drug-trafficking-enterprises/detroit/chambers-brothers-organization.html")
  @("young-boys-incorporated.html", "african-american-organized-crime/drug-trafficking-enterprises/detroit/young-boys-incorporated.html")
  @("dog-pound-detroit.html", "african-american-organized-crime/drug-trafficking-enterprises/detroit/dog-pound-detroit.html")
  @("69-mob-the-mob.html", "african-american-organized-crime/drug-trafficking-enterprises/oakland/69-mob-the-mob.html")
  @("the-family-oakland.html", "african-american-organized-crime/drug-trafficking-enterprises/oakland/the-family-oakland.html")
  @("funktown-usa.html", "african-american-organized-crime/drug-trafficking-enterprises/oakland/funktown-usa.html")
  @("the-family-newark.html", "african-american-organized-crime/drug-trafficking-enterprises/newark/the-family-newark.html")
  @("williams-group-newark.html", "african-american-organized-crime/drug-trafficking-enterprises/newark/williams-group-newark.html")
  @("new-york-boys-boston.html", "african-american-organized-crime/drug-trafficking-enterprises/boston/new-york-boys-boston.html")
  @("bebos.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-york-city/bebos.html")
  @("supreme-team.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-york-city/supreme-team.html")
  @("preacher-crew.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-york-city/preacher-crew.html")
  @("cash-money-brothers.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-york-city/cash-money-brothers.html")
  @("columbia-point-dawgs.html", "african-american-organized-crime/neighborhood-gangs-and-crews/boston/columbia-point-dawgs.html")
  @("orchard-park-trailblazers.html", "african-american-organized-crime/neighborhood-gangs-and-crews/boston/orchard-park-trailblazers.html")
  @("39ers.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-orleans/39ers.html")
  @("hankton-enterprise.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-orleans/hankton-enterprise.html")
  @("young-melph-mafia.html", "african-american-organized-crime/neighborhood-gangs-and-crews/new-orleans/young-melph-mafia.html")
  @("brick-city-brim-ncc-drug-organization.html", "african-american-organized-crime/neighborhood-gangs-and-crews/newark/brick-city-brim-ncc-drug-organization.html")
  @("pennington-court-drug-organization.html", "african-american-organized-crime/neighborhood-gangs-and-crews/newark/pennington-court-drug-organization.html")
  @("black-disciples.html", "african-american-organized-crime/street-gangs/chicago/black-disciples.html")
  @("gangster-disciples.html", "african-american-organized-crime/street-gangs/chicago/gangster-disciples.html")
  @("black-p-stone-nation-and-el-rukn.html", "african-american-organized-crime/street-gangs/chicago/black-p-stone-nation-and-el-rukn.html")
  @("falcon-magluta-organization.html", "other-drug-trafficking-enterprises/miami/falcon-magluta-organization.html")
  @("griselda-blanco-trafficking-network.html", "other-drug-trafficking-enterprises/miami/griselda-blanco-trafficking-network.html")
)
if (-not (Test-Path -LiteralPath $Root -PathType Container)) { throw "Missing directory: $Root" }
$Issues = @()
foreach ($Pair in $Pairs) {
  $Source = Join-Path $Root $Pair[0]
  $Destination = Join-Path $Root ($Pair[1].Replace("/", [IO.Path]::DirectorySeparatorChar))
  if (-not (Test-Path -LiteralPath $Source -PathType Leaf)) { $Issues += "Missing source: $Source" }
  if (Test-Path -LiteralPath $Destination) { $Issues += "Destination already exists: $Destination" }
}
if ($Issues.Count) { $Issues | ForEach-Object { Write-Error $_ }; throw "Preflight failed; no files moved." }
Write-Host "Preflight passed for $($Pairs.Count) files. Existing directories and index.html are untouched."
if (-not $Apply) {
  foreach ($Pair in $Pairs) { Write-Host "$($Pair[0])  ->  $($Pair[1])" }
  Write-Host "DRY RUN ONLY. To apply, rerun with -Apply after reviewing links and redirects."
  return
}
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$Backup = Join-Path $BackupRoot $Stamp
New-Item -ItemType Directory -Path $Backup -Force | Out-Null
foreach ($Pair in $Pairs) { Copy-Item -LiteralPath (Join-Path $Root $Pair[0]) -Destination (Join-Path $Backup $Pair[0]) -ErrorAction Stop }
Write-Host "Backed up all source files to $Backup"
foreach ($Pair in $Pairs) {
  $Source = Join-Path $Root $Pair[0]
  $Destination = Join-Path $Root ($Pair[1].Replace("/", [IO.Path]::DirectorySeparatorChar))
  $DestinationDir = Split-Path -Path $Destination -Parent
  New-Item -ItemType Directory -Path $DestinationDir -Force | Out-Null
  Move-Item -LiteralPath $Source -Destination $Destination -ErrorAction Stop
  Write-Host "Moved $($Pair[0])"
}
Write-Warning "NEXT: Update index links, article cross-links, and old public URL redirects before deployment."
