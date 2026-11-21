# MGU Technical Report
## Development, Architecture, and Operation of `backup-mgu.ps1`

**Report date:** November 21, 2026  
**Backup event:** November 20, 2026  
**System:** Malone Global University (MGU) website project  
**Script location:** `C:\MGU\scripts\backup-mgu.ps1`  
**Source:** `C:\MGU`  
**Destination:** `D:\2026-11-20\MGU`  
**Explicit exclusion:** `C:\MGU\desk`  
**Reported operational status:** Backup executed successfully; independent file-by-file verification not performed for this report.

## 1. Executive Summary

`backup-mgu.ps1` is a Windows PowerShell wrapper around Microsoft's Robocopy utility. It was developed to establish a dated, broad-coverage working-file baseline of the MGU project before planned website modernization, including possible changes to backend logic. Unlike MGU's customary selective monthly backups of principal areas such as `department` or `library`, this procedure copies the entire accessible project tree under `C:\MGU` except for `C:\MGU\desk` and junctions excluded by the copy configuration.

The script provides two modes: a non-destructive preview that generates a CSV inventory and Robocopy dry-run log, and a copy mode that creates or updates the destination tree. It does not move or delete source files, does not mirror deletions into the destination, and does not itself create a database, system image, or transactional snapshot. The operator reported successfully completing the backup on November 20, 2026. Accordingly, the backup is a completed operational milestone, subject to ordinary post-copy verification.

## 2. Origin and Development

The utility was created in response to the need for a full project-wide checkpoint before substantial architectural work. The original requirements were to copy `C:\MGU` into a date-stamped directory on drive `D:`, recursively include subfolders, and omit the internal working directory `C:\MGU\desk`. A preliminary preview function was subsequently extended because a large file listing exceeded practical PowerShell scrollback capacity. The revised script exports a filterable CSV inventory for spreadsheet review.

The resulting script is a single `.ps1` file intended for execution from `C:\MGU\scripts`. It depends on standard PowerShell filesystem commands and Windows `robocopy.exe`; no Python runtime, external PowerShell module, or third-party backup product is required. Comments in the source identify compatibility with Windows PowerShell 5.1 and newer PowerShell versions.

## 3. Configuration and Scope

| Parameter | Configured value | Function |
|---|---|---|
| `$Source` | `C:\MGU` | Root of the project tree to scan and copy |
| `$BackupRoot` | `D:\2026-11-20` | Parent directory for snapshot and reports |
| `$Destination` | `D:\2026-11-20\MGU` | Destination retaining source-relative hierarchy |
| `$ExcludedDir` | `C:\MGU\desk` | Excludes the complete desk subtree |
| `$CsvFile` | `D:\2026-11-20\MGU-backup-preview.csv` | Preview inventory output |
| `$LogFile` | `MGU-backup-preview.log` or `MGU-backup.log` under `$BackupRoot` | Mode-specific Robocopy log |

The dated destination is configured directly in the script, not generated dynamically per run. The file covers the MGU filesystem tree only. Files located elsewhere, externally hosted databases, credentials, active services, and system configuration outside the source directory are outside its defined scope.

## 4. Operational Sequence

**Preflight.** The script sets `$ErrorActionPreference = 'Stop'` and checks that the source directory exists, drive `D:` is accessible, and `robocopy.exe` can be found. It then creates the backup root directory if necessary. A missing prerequisite stops execution with an error.

**Preview mode.** With `-Preview`, the script first walks the source recursively using an explicit stack and `Get-ChildItem -Force`. It avoids entering `C:\MGU\desk` and skips reparse-point directories and files in the inventory. For every included file it streams a record with relative path, full source path, intended destination path, size in bytes, and local modification time. Records are written as UTF-8 CSV through a `.partial` staging file, then moved to the final filename after the inventory succeeds. It subsequently executes Robocopy with `/L`, generating a dry-run log without copying project files. The CSV covers all eligible scanned source files; the Robocopy log separately shows the proposed copy operations and comparisons.

**Copy mode.** Without `-Preview`, the script invokes Robocopy with the configured source, destination, exclusion, preservation, retry, and logging options. Since `-Preview` is absent, `/L` is not added. On a fresh destination, eligible files are copied into the corresponding directory paths. On subsequent runs, Robocopy may update changed or new files, while destination-only files are not purged.

**Completion and errors.** The script captures Robocopy's exit code in `$LASTEXITCODE`. Codes below 8 are treated as nonfatal; codes 8 or higher trigger an exception directing the operator to the log. The script displays the output directory and log location after a nonfatal completion. An interrupted or failed copy is not automatically rolled back.

## 5. Robocopy Implementation

| Switch | Purpose |
|---|---|
| `/E` | Copy all subdirectories, including empty directories |
| `/XJ` | Exclude directory junctions |
| `/R:2` and `/W:2` | Retry failed operations twice, waiting two seconds between retries |
| `/MT:8` | Use eight concurrent copy threads |
| `/COPY:DAT` | Preserve file data, attributes, and timestamps |
| `/DCOPY:DAT` | Preserve directory data, attributes, and timestamps |
| `/XD C:\MGU\desk` | Exclude the `desk` directory and its descendants |
| `/NP` | Suppress per-file percentage progress |
| `/LOG:<path>` | Write detailed Robocopy output to a mode-specific text log |
| `/L` (preview only) | List intended actions without performing file copies |

The script deliberately does not specify `/MIR` or `/PURGE`: destination-only files are not deleted. Nor does `/COPY:DAT` provide comprehensive preservation of NTFS security permissions, ownership, and auditing data. Accordingly, this is a project-file copy and should not be described as a complete system or security-metadata image.

## 6. Generated Outputs

**Snapshot directory:** `D:\2026-11-20\MGU\` — a copy of eligible files, preserving their project-relative directory hierarchy.

**Preview CSV:** `D:\2026-11-20\MGU-backup-preview.csv` — one row per eligible source file with the fields `RelativePath`, `SourcePath`, `BackupPath`, `SizeBytes`, and `LastModifiedLocal`. It provides a sortable review inventory, not a checksum manifest or a list limited to files Robocopy would actually transfer.

**Preview log:** `D:\2026-11-20\MGU-backup-preview.log` — Robocopy's dry-run plan and summary.

**Execution log:** `D:\2026-11-20\MGU-backup.log` — Robocopy's actual copy record and summary, including any errors. Because `/LOG:` uses fixed filenames, rerunning the same mode can replace an earlier report; retain separate copies if longitudinal evidence is required.

## 7. Safety and Recovery Characteristics

The source is read for copying, never moved or intentionally modified. The `desk` exclusion prevents the working-directory subtree from entering the destination. Non-mirroring behavior protects files that exist only at the destination from automatic deletion. Preview mode permits review before execution, and the copy log supports post-run inspection. Limited retry counts prevent indefinitely long waits on persistently inaccessible files.

These controls do not make the backup immutable or automatically restorable. A subsequent copy run targeting `D:\2026-11-20\MGU` may overwrite destination files with newer source versions, changing the original baseline. The script contains no restore command, cryptographic integrity verification, capacity preflight, or cross-system dependency inventory. Live file changes during copying can also yield a non-atomic snapshot assembled from different moments.

## 8. Execution Status and Verification

**Confirmed by operator:** The PowerShell backup was run and reported successful completion. The intended destination was the first backup to this dated folder, with `C:\MGU\desk` excluded.

**Confirmed by source inspection:** The final script contains the path configuration, preview/CSV logic, Robocopy switches, error handling, and logging behavior documented in this report.

**Not independently inspected:** Actual contents of drive `D:`, the execution log, copied-file counts, error statistics, completeness of each transferred file, and the restorability of any dependent services. Those items should not be presented as externally verified findings.

A practical acceptance review should confirm that the execution log shows no failed copies, that critical subdirectories and representative files exist under `D:\2026-11-20\MGU`, and that the excluded desk directory is absent from the intended snapshot. The copy can then be designated the protected pre-modernization reference.

## 9. Maintenance and Change-Control Recommendations

1. Preserve `D:\2026-11-20\MGU` unchanged as the November 20, 2026 pre-modernization baseline; use new dated destination paths for future backups.
2. Retain `MGU-backup.log` alongside the corresponding snapshot, and retain the preview CSV and log when needed as an audit trail.
3. For a more formal recovery assurance process, generate a separate file-hash manifest and perform a sample restore to a different location. Neither check is implemented by the current script.
4. Before major backend work, separately inventory and protect any database, environment settings, service configuration, or assets that reside outside `C:\MGU`.

## 10. Conclusion

`backup-mgu.ps1` converted MGU's pre-modernization backup requirement into a repeatable, reviewable Windows workflow. Its strongest design characteristics are a defined source/destination boundary, explicit exclusion of `desk`, non-destructive preview and CSV inventory, Robocopy-based recursive copying, protective non-purge behavior, and mode-specific logs. The November 20, 2026 successful run represents completion of the initial project-file backup operation. Final acceptance as a fully recoverable baseline depends on reviewing the execution evidence and any external backend dependencies.

**Document classification:** MGU technical operations report  
**Prepared from:** Final `backup-mgu.ps1` source available in the project conversation and the operator's reported execution outcome.  
**Status:** Issued November 21, 2026.
