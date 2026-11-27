# Centralized MGU dependency build. Compatible with Windows PowerShell 5.1.
param([switch]$Serve, [switch]$Minify, [string]$Root = 'C:\MGU', [int]$Port = 8000)
$ErrorActionPreference = 'Stop'
$App = $PSScriptRoot
$Root = (Resolve-Path -LiteralPath $Root).Path
$Bundler = Join-Path $Root 'node_modules\.bin\esbuild.cmd'
if (-not (Test-Path -LiteralPath $Bundler)) { throw "Missing centralized esbuild: $Bundler" }
$prefix = $Root.TrimEnd('\') + '\'
if (-not $App.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) { throw 'Application must be inside the specified MGU repository.' }
$relative = $App.Substring($prefix.Length).Replace('\','/')
$buildArgs = @((Join-Path $App 'src\editor.js'), '--bundle', '--format=esm', '--legal-comments=eof', "--outfile=$(Join-Path $App 'public\editor.js')")
if ($Minify) { $buildArgs += '--minify' }
if ($Serve) {
    $buildArgs += @("--servedir=$Root", "--serve=127.0.0.1:$Port")
    Write-Host "Launch: http://127.0.0.1:$Port/$relative/public/advanced-code-editor.html"
    Write-Host 'Local-only server; Ctrl+C to stop. Keep it stopped when not in use.'
}
Push-Location -LiteralPath $Root
try {
    & $Bundler @buildArgs
    if ($LASTEXITCODE -ne 0) { throw "esbuild failed with exit code $LASTEXITCODE" }
} finally { Pop-Location }
