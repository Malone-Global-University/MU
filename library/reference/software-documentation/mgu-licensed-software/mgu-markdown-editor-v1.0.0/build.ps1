$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    & node .\tools\build.mjs
    if ($LASTEXITCODE -ne 0) { throw 'Build failed. Review the output above.' }
} finally { Pop-Location }
