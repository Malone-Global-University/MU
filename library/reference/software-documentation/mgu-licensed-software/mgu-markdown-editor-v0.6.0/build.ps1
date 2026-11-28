$ErrorActionPreference = 'Stop'
$Root = 'C:\MGU'
$Project = $PSScriptRoot
Push-Location $Root
try {
    $Esbuild = Join-Path $Root 'node_modules\.bin\esbuild.cmd'
    if (-not (Test-Path $Esbuild)) { throw 'Missing root esbuild. Install required dependencies first.' }
    $Tests = @(Get-ChildItem (Join-Path $Project 'tests') -Filter '*.test.mjs' | ForEach-Object { $_.FullName })
    & node --test @Tests
    if ($LASTEXITCODE -ne 0) { throw 'Tests failed.' }
    & $Esbuild (Join-Path $Project 'src\editor.mjs') --bundle --platform=browser --format=esm --target=es2022 ("--outfile=" + (Join-Path $Project 'public\editor.js'))
    if ($LASTEXITCODE -ne 0) { throw 'Editor bundle failed.' }
    & $Esbuild (Join-Path $Project 'src\renderer-entry.mjs') --bundle --platform=browser --format=esm --target=es2022 ("--outfile=" + (Join-Path $Project 'public\renderer.mjs'))
    if ($LASTEXITCODE -ne 0) { throw 'Standalone renderer bundle failed.' }
    & node (Join-Path $Project 'examples\verify-bundle.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Standalone renderer smoke test failed.' }
    Write-Host 'Build complete: public/editor.js and public/renderer.mjs' 
} finally { Pop-Location }
