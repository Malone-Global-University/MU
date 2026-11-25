# PowerShell Essential Commands — Cheat Sheet

**Malone Global University | Library — Quick Reference**  
**Environment:** Windows PowerShell 5.1 and PowerShell 7 on Windows  
Replace example paths, filenames, and search terms with your own. Commands use full cmdlet names for readability.

## 1. Navigation and discovery

| Task | Command |
|---|---|
| Show current directory | `Get-Location` |
| Change directory | `Set-Location 'C:\MGU'` |
| Move up one directory | `Set-Location ..` |
| List files and folders | `Get-ChildItem` |
| Include hidden items | `Get-ChildItem -Force` |
| List files only | `Get-ChildItem -File` |
| List folders only | `Get-ChildItem -Directory` |
| Find HTML files recursively | `Get-ChildItem -Recurse -File -Filter '*.html'` |
| Check whether a path exists | `Test-Path '.\index.html'` |
| Show full path | `Resolve-Path '.\index.html'` |

## 2. File and folder management

| Task | Command |
|---|---|
| Create folder | `New-Item -ItemType Directory -Path '.\reports'` |
| Create empty file | `New-Item -ItemType File -Path '.\notes.txt'` |
| Copy file | `Copy-Item '.\index.html' '.\index-backup.html'` |
| Copy directory and contents | `Copy-Item '.\reports' '.\reports-backup' -Recurse` |
| Move file | `Move-Item '.\notes.txt' '.\reports\'` |
| Rename file | `Rename-Item '.\old.html' -NewName 'new.html'` |
| Preview file deletion | `Remove-Item '.\old.html' -WhatIf` |
| Preview directory deletion | `Remove-Item '.\old-folder' -Recurse -WhatIf` |

## 3. Reading, writing, and searching

| Task | Command |
|---|---|
| Read a text file | `Get-Content '.\notes.txt'` |
| Read file as one string | `Get-Content '.\index.html' -Raw` |
| Read first 10 lines | `Get-Content '.\notes.txt' -TotalCount 10` |
| Read last 10 lines | `Get-Content '.\notes.txt' -Tail 10` |
| Write or replace text | `Set-Content '.\notes.txt' 'New text' -Encoding UTF8` |
| Append text | `Add-Content '.\notes.txt' 'More text' -Encoding UTF8` |
| Find literal text in a file | `Select-String -Path '.\index.html' -Pattern 'canonical' -SimpleMatch` |
| Search HTML files recursively | `Get-ChildItem -Recurse -File -Filter '*.html' \| Select-String -Pattern 'canonical' -SimpleMatch` |

**Encoding caution:** `-Encoding UTF8` writes UTF-8 with a BOM in Windows PowerShell 5.1 and without a BOM in PowerShell 7. Do not apply bulk transcoding or text replacement to files of unknown encoding without backups and verification. `Set-Content` replaces existing content.

## 4. Filtering, sorting, and counting

| Task | Command |
|---|---|
| Count HTML files | `(Get-ChildItem -Recurse -File -Filter '*.html').Count` |
| Sort files by size | `Get-ChildItem -File \| Sort-Object Length -Descending` |
| Show selected properties | `Get-ChildItem -File \| Select-Object Name, Length, LastWriteTime` |
| Find files larger than 1 MiB | `Get-ChildItem -Recurse -File \| Where-Object { $_.Length -gt 1MB }` |
| Group files by extension | `Get-ChildItem -Recurse -File \| Group-Object Extension` |
| Find ten newest files | `Get-ChildItem -Recurse -File \| Sort-Object LastWriteTime -Descending \| Select-Object -First 10` |
| List unique file extensions | `Get-ChildItem -Recurse -File \| Select-Object -ExpandProperty Extension -Unique` |

## 5. Inventories, reports, and archives

```powershell
# Export an HTML file inventory (overwrites the destination CSV)
Get-ChildItem 'C:\MGU' -Recurse -File -Filter '*.html' |
    Select-Object FullName, Length, LastWriteTime |
    Export-Csv 'C:\MGU\html-inventory.csv' -NoTypeInformation -Encoding UTF8

# Import a CSV report
Import-Csv '.\html-inventory.csv'

# Create and extract a ZIP archive
Compress-Archive -Path '.\reports' -DestinationPath '.\reports.zip'
Expand-Archive -Path '.\reports.zip' -DestinationPath '.\restored'

# Calculate a SHA-256 file hash
Get-FileHash '.\reports.zip' -Algorithm SHA256
```

`Compress-Archive` skips hidden files and folders; it is not a complete backup solution for every directory. Existing destination archives or extracted files may require explicit overwrite options.

## 6. Essential syntax

| Syntax | Meaning |
|---|---|
| `$name = 'MGU'` | Assign a variable |
| `$files = Get-ChildItem -File` | Store command output |
| `$files.Count` | Read a property |
| `\|` | Send output to the next command |
| `$_` | Current pipeline object inside a script block |
| `@('one', 'two')` | Array |
| `# comment` | Comment |
| `*` / `?` | Wildcards: multiple characters / one character (where supported) |
| `-eq` / `-ne` | Equal / not equal |
| `-gt` / `-lt` | Greater than / less than |
| `-ge` / `-le` | Greater than or equal / less than or equal |
| `-like` / `-match` | Wildcard comparison / regular expression comparison |
| `-and` / `-or` / `-not` | Logical operators |
| `'text'` / `"text $name"` | Literal string / variable-expanding string |

```powershell
# Basic loop: display the name of each HTML file
foreach ($file in (Get-ChildItem -File -Filter '*.html')) {
    $file.Name
}
```

## 7. Help, diagnostics, and safe execution

| Task | Command |
|---|---|
| Display PowerShell version | `$PSVersionTable` |
| Discover commands | `Get-Command '*Item*'` |
| Read command help | `Get-Help Get-ChildItem -Full` |
| See command examples | `Get-Help Get-ChildItem -Examples` |
| Inspect available properties and methods | `Get-ChildItem -File \| Get-Member` |
| Clear screen | `Clear-Host` |
| View session history | `Get-History` |
| Run a trusted local script | `.\script.ps1` |
| Inspect execution policy | `Get-ExecutionPolicy -List` |
| Preview supported changes | `Rename-Item '.\old.html' 'new.html' -WhatIf` |

**Safety rules:** Quote paths containing spaces. Use `-LiteralPath` for exact paths containing wildcard characters when the cmdlet supports it. Inspect target files before recursive modifications; use `-WhatIf` where supported, keep backups, and verify results. Run only trusted scripts and respect the system's execution policy.

## Official reference

Microsoft Learn — [PowerShell documentation](https://learn.microsoft.com/powershell/).
