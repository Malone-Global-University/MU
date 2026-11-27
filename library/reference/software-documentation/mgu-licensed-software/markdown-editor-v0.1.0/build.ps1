$ErrorActionPreference = 'Stop'
$Root = 'C:\MGU'
$Project = $PSScriptRoot
Push-Location $Root
try {
    $Esbuild = Join-Path $Root 'node_modules\.bin\esbuild.cmd'
    if (-not (Test-Path $Esbuild)) { throw 'Missing root esbuild. Install the required dependencies first.' }
    & node --test (Join-Path $Project 'tests\renderer.test.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Renderer tests failed.' }
    & $Esbuild (Join-Path $Project 'src\editor.mjs') --bundle --platform=browser --format=esm --target=es2022 ("--outfile=" + (Join-Path $Project 'public\editor.js'))
    if ($LASTEXITCODE -ne 0) { throw 'Bundle failed.' }
} finally { Pop-Location }
