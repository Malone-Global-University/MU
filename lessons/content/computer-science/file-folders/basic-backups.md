Basic Computer Skills / File and Folder Skills

## Lesson 9: Basic Backups

Imagine finishing an important application on Monday, editing it on Tuesday, and discovering on Wednesday that the laptop will no longer start. The original document might still be inside the computer, but you cannot reach it. Now imagine that an independent copy from Tuesday can be opened on another device. That copy changes the situation from a possible loss into a manageable interruption. This is the practical purpose of a [[backup|backup]]: to preserve information so that it can be recovered after something goes wrong.

A backup is not a promise that accidents will never happen. It is a deliberate plan for recovering from accidents. Files can disappear because someone deletes or overwrites them, an external drive fails, a computer is stolen, an account becomes unavailable, a fire or flood damages equipment, or malicious software changes accessible files. A reliable plan considers what you need, where the independent copies live, whether they are current, who can access them, and whether you have actually tried restoring a file. **A backup that cannot be located or restored when needed has not achieved its purpose.**

This ninth and final lesson in **File and Folder Skills** brings together the first eight lessons: recognizing files, finding where they are saved, creating folders, naming items, copying without moving originals, locating missing files, and understanding external storage. Windows 11 is the primary platform; Mac, Chromebook, iPhone, iPad, and Android approaches are also introduced. All hands-on activities use newly created, nonessential practice files, or written simulations. You do not need to connect a personal drive, upload confidential material, purchase a subscription, or change backup settings to complete the lesson.

**Level:** Beginner · **Estimated study time:** 95–125 minutes · **Prerequisites:** File and Folder Skills Lessons 1–8 recommended · **Practice equipment:** Windows 11 computer and an authorized external drive optional; a Mac, Chromebook, mobile device, or paper-only alternative is acceptable · **Safety:** Preserve all originals, use disposable sample data, never format a drive containing valuable files, and do not change managed-device settings without permission.

> **Essential idea:** A reliable backup is an **independent, recoverable copy**. Choose what matters, keep a protected copy separate from the working files, confirm that the backup finished, and periodically restore a harmless sample to prove it works. Cloud synchronization can be useful, but it is not automatically the same as an independent, versioned backup.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference among an original file, a synchronized file, a transfer copy, and a recovery backup.
1. Name common causes of data loss and explain why a second location matters.
1. Apply the [[three-two-one-rule|3-2-1 backup principle]] to an everyday example without assuming any one technology is perfect.
1. Choose which personal files and folders are most important to protect, including data outside default folders.
1. Perform a controlled manual backup of a harmless practice file in Windows 11 without moving or deleting the original.
1. Explain the basic roles and limits of Windows File History, Windows Backup, and OneDrive.
1. Describe a safe procedure for restoring a single file to an alternate location and comparing it with the original.
1. Identify useful Mac, Chromebook, iPhone, iPad, and Android backup options without confusing device backup with file synchronization.
1. Recognize the significance of encryption, account access, disconnected copies, storage capacity, and malware.
1. Develop a realistic backup schedule and a simple, repeatable verification checklist.

### On this page

- [1. Why backups matter](#1-why-backups-matter)
- [2. Build a simple backup plan](#2-build-a-simple-backup-plan)
- [3. Make a manual backup in Windows 11](#3-make-a-manual-backup-in-windows-11)
- [4. Understand Windows backup tools and cloud syncing](#4-understand-windows-backup-tools-and-cloud-syncing)
- [5. Restore, verify, and maintain backups](#5-restore-verify-and-maintain-backups)
- [6. Other devices, privacy, and emergency decisions](#6-other-devices-privacy-and-emergency-decisions)
- [7. Guided practice](#7-guided-practice)
- [8. Common misconceptions and troubleshooting](#8-common-misconceptions-and-troubleshooting)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. Why backups matter

### A file is only useful if you can get it back

A [[file|file]] can be a letter, photograph, spreadsheet, audio recording, PDF, presentation, or another saved collection of information. Normally you open a file from a working location: a laptop's Documents folder, a desktop, a phone, or a cloud account. That working file is the [[primary-copy|primary copy]]. It may be perfectly safe today but vulnerable to a problem tomorrow. A backup provides a separate opportunity to recover it.

Consider two students who each have one finished essay. Student A saves it only in `Documents/School/`. Student B saves it in the same working folder and maintains an independent, dated copy on an external drive that is disconnected after the copy completes. If either student's laptop becomes unusable, Student B has a clearer recovery route. Student A might still recover the original through technical service, but that recovery is uncertain and may be costly. A backup reduces dependence on emergency repair or good luck.

**Data loss** does not always mean the storage device is physically broken. A document can be accidentally replaced with a blank version. A person may save the wrong changes over the correct version, empty the Recycle Bin, forget which account contains a file, or delete a synchronized item that then disappears from several devices. A useful backup strategy therefore protects against **different kinds of failure**, not just a damaged laptop.

### A copy is not necessarily a backup

Suppose a learner transfers a file to a USB flash drive and then deletes the computer copy to make room. The USB drive now holds the *only* copy. The operation was a transfer, not a lasting recovery strategy. Similarly, a file synchronized among three devices may appear in three places while all three reflect the same accidental deletion. Their convenience does not prove their independence.

A [[backup-copy|backup copy]] should be maintained for recovery and should not be the only remaining copy. Independence may come from an external drive kept disconnected between backup sessions, a separate backup service with retained versions, or another appropriately protected location. A backup can be a simple manual file copy for a beginner, but the habit must include keeping the source, preserving the destination, and periodically checking it.

| Method | What it usually accomplishes | Main question to ask |
| --- | --- | --- |
| Save | Writes the current version of a document to a chosen location | Is this where I expect my working file to live? |
| Copy | Creates a second instance at another location | Will both copies remain available afterward? |
| Move | Changes the file's location | Did I accidentally remove the original from its former location? |
| Sync | Keeps selected information aligned across devices or an account | Could a deletion or unwanted change spread to every connected copy? |
| Backup | Preserves information for later recovery | Can I restore a known-good version after the original is lost? |
| Restore | Brings backed-up information into a usable location | Did the restored file open with the expected contents? |

This table describes goals rather than rigid software categories. A service named “Backup” may also synchronize data; a synchronization service may provide recycle-bin and version-history features. Always review the actual configuration and retention policy instead of trusting the product name alone.

### Different accidents require different protections

A dropped laptop may still have an intact external backup on another shelf. A stolen backpack may contain both the laptop and a flash drive kept beside it, defeating the intended independence. A burst water pipe can damage a computer and the external drive stored on the same floor. Malware that encrypts files may also reach a backup drive left connected to an infected computer. An account problem may prevent access to cloud-only files even while a local offline copy remains usable.

A [[failure-scenario|failure scenario]] is a concrete way something might go wrong. Instead of asking only “Do I have another copy?”, ask “What would happen if this laptop failed, this account were locked, or this room were damaged?” Your answers reveal which copies are truly independent. No beginner needs to predict every disaster. A modest plan that protects the most important files against ordinary problems is far better than relying on a single device.

### What should be protected first?

Start with information that is difficult or impossible to reproduce: original family photographs, schoolwork, completed forms, personally created documents, small-business records you are authorized to handle, creative projects, scanned records, and other unique files. Software installation files and public material downloaded from the internet may be replaceable, although some people still choose to preserve them. Your personal priorities and legal obligations matter.

Separate files you **created** from programs you can simply reinstall. A backup of `budget.xlsx` is not the same thing as reinstalling the spreadsheet program. Likewise, a cloud photo album might not be part of an ordinary phone *device backup* if it is already synchronized through another service. To judge coverage, identify the actual file or data category you would need to recover.

> **Think about it:** If your computer stopped working tonight, which three specific items would be hardest to replace? Write the names or broad categories on paper without disclosing private details. Those are candidates for your highest-priority recovery copies.

### The backup has to be recoverable by you

A file copied to a drive that no longer works, an archive protected by a forgotten password, or a cloud account with inaccessible recovery information may not help during an emergency. Backup work has two halves: **creating a copy** and **proving you can recover it**. The proof can be small. Restoring a harmless sample to a separate folder and opening it is a much safer test than wiping or replacing a real working folder.

Do not assume that seeing a file name is enough. A filename can exist while the content is incomplete, corrupted, the wrong version, or inaccessible to the intended program. For critical records, verification may include opening the file, checking a distinguishing sentence or photo, and comparing the file's name and meaningful date. Experts may use automated integrity checks; beginners can begin with deliberate inspection.

## 2. Build a simple backup plan

### Start with an inventory rather than a purchase

A [[backup-plan|backup plan]] is a short statement identifying **what** you will protect, **where** the copies will go, **when** you will update them, and **how** you will test recovery. It does not begin with a brand name or a complicated settings screen. Before choosing a drive, list the folders and account locations containing irreplaceable items. Include Documents, Desktop, Pictures, Downloads if relevant, special project folders, and cloud locations. A file saved only inside an application or managed workspace may require that application's own export or approved backup method.

For example, a learner might decide: “My most important files are the application forms in Documents, photographs in Pictures, and class reports in a project folder. I will copy those to an authorized external drive every Friday, disconnect it after safe ejection, and once a month restore a test document to a temporary verification folder.” This is a starting plan, not a guaranteed solution for every risk. Adding an independently controlled offsite or protected cloud backup would make it more resilient.

### A memorable framework: 3-2-1

The [[three-two-one-rule|3-2-1 rule]] is a common backup design principle: **three copies of important information in total**, **two different storage media or approaches**, and **one copy stored separately offsite**. A conventional example is one working copy on a laptop, one recovery copy on a disconnected external drive, and one further protected copy in a separate location or appropriate cloud backup service. The “three” is not three folders on the same hard drive; the “two” is not two differently named files that share one failure point.

This is a framework, not an exact number required of every individual file by law, and not a promise of immunity. A separate location helps with fire or theft, while an offline or otherwise isolated copy can help with a destructive sync event or ransomware. The plan should account for whether each backup is protected from an attacker with access to your current computer or online account. Organizations may require more specialized controls, retention schedules, and independent testing.

| Copy | Illustrative location | Distinct risk it helps address | What still needs checking |
| --- | --- | --- | --- |
| 1: working copy | Laptop Documents folder | Everyday editing and access | Save the right file and version |
| 2: independent local backup | External drive disconnected after use | Laptop failure or accidental replacement | Drive health, completed transfer, restore test |
| 3: separate backup | Approved cloud backup or offsite drive | Local theft, flood, or fire | Access, version retention, privacy, and recoverability |

A family might not be able to implement all three copies immediately. Begin with an authorized second location and a restore test; then improve physical separation and resilience as practical. Do not describe two folders on the same laptop as two independent backup locations.

### Decide which location is actually separate

A USB drive sitting in the same bag as the laptop might provide protection from some internal hardware failures, but not from losing the bag. A drive that remains connected while malware attacks may be exposed to the same threat as the primary device. A different cloud account or remote service might provide separation from local disasters, but you must still consider password security, recovery access, storage limits, sharing permissions, and whether the service truly keeps earlier versions.

[[offline-backup|Offline backup]] refers to a copy not actively accessible from the computer or network during ordinary use, such as an unplugged and safely stored external drive. [[offsite-backup|Offsite backup]] means a copy kept in a different physical location. These properties are related but not identical. An external drive in a desk drawer is offline but not offsite; an online cloud copy is remote but not necessarily isolated from account compromise or synchronized deletion. Some sophisticated backup systems provide immutable or restricted copies, but beginners can use simple separation and deliberate testing as first steps.

### Set a schedule according to how often files change

[[backup-frequency|Backup frequency]] is how often new recovery copies are made. If you make one new document each month, a weekly manual backup might be sufficient for your preferences; if you edit records throughout the day, that schedule could allow too much potential work to be lost. Ask: **How much recent work could I afford to recreate?** A backup from Friday will not contain a new Tuesday document unless it was included in a more recent run.

A schedule can combine automatic and manual approaches. You might rely on a trusted automated system for frequent revisions and maintain a separate disconnected copy on a regular calendar. Automatic backups are useful because they reduce forgetting, but only if their destination remains available and the job succeeds. A reminder to check a failed backup is as important as the reminder to start a manual one.

### Write down the scope and its exclusions

[[backup-scope|Backup scope]] means exactly which files, folders, accounts, devices, or data categories a method covers. A program that protects Documents may not include a special folder on a second internal drive. Phone device backup may not include large downloaded videos or content already synchronized elsewhere. A service may cover photos but not documents. Write down these exclusions because the unknown gaps are often where irreplaceable information is lost.

Do not rely exclusively on default locations. Check whether Documents, Desktop, Pictures, Downloads, project folders, and approved removable media are included as intended. A backup job that points to the wrong account or empty folder can complete successfully while preserving little of value. If you use a school or business device, follow the institution's approved storage and retention rules rather than copying restricted records into a personal account.

### Understand versions and retention

A [[version|version]] is a state of a file at a particular time. If you accidentally erase a paragraph and save, yesterday's version may be more useful than today's synchronized version. [[version-history|Version history]] and [[retention|retention]] describe how earlier copies are kept and for how long. Some backup systems maintain many dated versions; a single manual copy can be overwritten by the next run unless you preserve an earlier dated copy. A service may delete older versions or trash items after a defined period, or when storage limits are reached.

For manual practice, a folder named `Backup-2026-11-19` makes the creation date visible, but the date alone does not prove that every included file was successfully copied or that its content was current. A name such as `Backup-Final-FINAL` is harder to audit. Treat the folder name as a label, not as evidence of completeness. Avoid changing your computer clock or renaming old folders to imply that a backup is newer than it really is.

> **Plan checkpoint:** Identify the information, define two genuinely separate locations, decide how frequently the files change, and write a recovery-test method. A plan you can explain in four sentences is more useful than an elaborate process you will not maintain.

## 3. Make a manual backup in Windows 11

### The safe beginner approach: copy, verify, preserve

Manual backup is a useful first skill because it exposes the difference between [[source-folder|source folder]] and [[destination-folder|destination folder]]. To practice, do not use taxes, medical records, actual client data, or irreplaceable photographs. Create a small text document you are comfortable discarding. Its contents might be “MGU practice backup — original version.” Save it in `Documents/MGU-Backup-Practice/` with a clear name such as `practice-note.txt`. On a device without a text editor, select any harmless sample file you own.

The example below assumes you are using a Windows 11 computer and a known, authorized external drive. If a drive is not available, use two named practice folders on the same computer to **rehearse the mechanics only**. Two folders on one drive are not a disaster-resistant backup. The distinction must remain explicit in the exercise and in any record of completion.

### Step-by-step: create the working file and destination

1. Sign in to your own computer or an authorized practice account. Open **File Explorer** with **Windows key + E**, or use its taskbar icon.
1. Open **Documents** and create a folder named `MGU-Backup-Practice`. You can use **New → Folder** or **Ctrl + Shift + N** when File Explorer is active.
1. Open that folder and create a harmless practice document named `practice-note.txt`; save the content and close the editor so changes have finished writing.
1. Confirm the source document opens and contains the expected practice sentence. If you cannot open it now, resolve that before claiming to make a useful recovery copy.
1. Connect a personally owned or institution-approved external drive, if available. Open **This PC** in File Explorer and identify the drive by more than its letter: check its label, approximate capacity, and expected contents.
1. On the external drive, create a destination folder such as `MGU-Practice-Backup`. Do not use a location containing someone else's data. If a removable drive is unavailable, create a temporary destination under a different practice folder, and label the result a *copying rehearsal*.
1. Keep the original `practice-note.txt` in Documents. You will use **Copy** rather than **Cut** or **Move**.

A Windows [[drive-letter|drive letter]] such as `E:` is temporary and can change when devices are connected differently. It is not enough to say “my backup is always E.” Confirm the device each time. If Windows offers to format the drive or says it is unreadable, **stop**. Formatting can destroy access to existing data and is not part of this lesson.

### Step-by-step: copy the practice file

1. In File Explorer, select `Documents/MGU-Backup-Practice/practice-note.txt`.
1. Use **Ctrl + C**, or right-click and choose **Copy**. This puts a copy operation on the clipboard without deleting the original.
1. Browse to your confirmed destination folder on the external drive.
1. Press **Ctrl + V**, or right-click and choose **Paste**. If prompted about a conflicting file name, stop and inspect the existing file rather than blindly replacing it.
1. Wait until the file operation finishes. If there is an error or the drive disconnects, do not assume the destination is complete.
1. Confirm that `practice-note.txt` still exists in the original folder and appears in the destination folder.
1. Open the destination copy and check the practice sentence. Close it after inspection.
1. If using a removable drive, close any files or programs accessing it, select **Eject** through File Explorer or the relevant Windows safe-removal control, wait for confirmation when required, and only then unplug it.

| Question | Correct evidence | What is not enough |
| --- | --- | --- |
| Is the original still present? | File is visible and opens from its original folder | Assuming Copy was selected correctly |
| Is the destination correct? | Drive identity and destination path were checked | Relying only on a familiar drive letter |
| Has transfer finished? | Copy operation ended without error | Seeing a progress bar begin |
| Is the recovery copy usable? | Destination file opens and contains expected sample data | Seeing the filename alone |
| Is it safe to disconnect? | File handles closed and safe removal completed | Unplugging immediately after Paste |

### Do not confuse the rehearsal with a production backup

A second practice folder on the same laptop teaches safe copying but does not protect against theft, internal storage failure, or the loss of that entire laptop. For real resilience, a destination needs a separate failure boundary: a properly maintained external device, an authorized backup location, or another suitable service. Similarly, manually copying one practice note does not prove that every important folder on the computer is protected.

Once you are comfortable, map the same workflow to a **small, approved group of important files**: identify the source, identify the independent destination, copy rather than move, verify, and log the date. Avoid bulk copying unknown folders without reviewing whether they contain private information, hidden application state, protected data, or files whose permissions restrict copying.

### Keep a simple backup log

A [[backup-log|backup log]] records what the backup was supposed to cover and whether it succeeded. It can be a note on paper. A useful entry reads: “Date: [actual date]. Source: Practice documents. Destination: Approved external drive. Method: Copy. Result: Completed without errors. Tested: One sample opened successfully. Next check: [date].” Keep the log separate from the backup if possible, and do not include passwords, encryption recovery keys, confidential filenames, or account secrets.

If a planned backup was skipped or incomplete, write **incomplete** rather than recording a false success. A successful backup is an observable result, not a button press. If you later change your folder structure, revisit the scope list; a job covering the former folder may no longer protect a newly created location.

### A worked example: four files, one missing from the plan

Suppose the computer contains `Documents/School/essay.docx`, `Documents/Forms/application.pdf`, `Pictures/Family/photo.jpg`, and `Desktop/Work/notes.txt`. The user copies only `Documents` to an external drive. Afterward, the two documents have destination copies; the photograph and desktop notes do not necessarily have any backup from this operation. The word “Documents” on the drive's folder label cannot make the excluded folders appear. A good backup inventory names the *actual scope* and the exclusions.

A second problem occurs if `Documents` is being synchronized into OneDrive and you assume that copying some files from an on-screen view means every cloud-only placeholder was downloaded. Availability can vary. Test the copies you depend on and verify that any required cloud-only items are actually accessible before disconnecting or deleting source material. Never treat a placeholder icon as proof of a usable offline recovery copy.

> **Windows practice rule:** The most important step is not pressing **Ctrl + C**. It is showing that the correct source remains and that an independently stored, readable destination copy exists.

## 4. Understand Windows backup tools and cloud syncing

### One goal, several Windows features

Windows 11 includes or supports several ways to preserve and recover information, but they are not interchangeable. Three tools commonly encountered by beginners are **File History**, **Windows Backup**, and **OneDrive**. The names can make them sound like different buttons for the same job. In practice, they serve different scopes and may require different accounts, destinations, settings, and recovery procedures. A fourth category, system recovery or restore features, addresses operating-system problems and should not be assumed to replace personal-file backups.

Before using any of these tools, answer: “Which files are included? Where does the copy go? Does it retain earlier versions? What happens when a source file is deleted? How do I check the last successful operation?” A tool may operate automatically and still omit your most important folder. The right backup method is the one whose actual behavior meets your specific recovery need.

| Windows-related method | Typical destination | Primary purpose | Beginner caution |
| --- | --- | --- | --- |
| Manual File Explorer copy | Another verified folder or external device | Make selected file copies deliberately | May omit files and may not preserve older versions |
| File History | External drive or configured network location | Periodically back up selected personal-file libraries and restore versions | Drive must be available when backups run; scope must be checked |
| Windows Backup | Microsoft account and OneDrive-supported settings | Help carry selected files, settings, and supported preferences to recovery or a new PC | Not a full image of everything on the computer |
| OneDrive sync | Cloud account and selected synchronized device folders | Keep designated files available across devices | Deletes and unwanted changes can sync; retention and versions vary |
| Windows recovery tools | Local recovery features or designated recovery environment | Address certain system or startup problems | Not a stand-in for a tested copy of personal files |

### File History: keeping previous versions of personal files

[[file-history|File History]] is a Windows feature intended to make periodic versions of personal files available for recovery. In current Microsoft guidance for Windows 11, it is accessed through **Control Panel → System and Security → File History**, and it uses a configured external drive or network location. Its normal scope includes Windows libraries such as Documents and Pictures, with options or configuration requirements for additional locations. Exact included folders can vary by configuration and Windows version; verify what yours will protect.

For **observation-only exploration**, search Windows for **Control Panel**, open **System and Security**, and inspect **File History**. Do not select **Turn on** on a managed device or connect an unknown drive. If you own the computer and have an authorized backup destination, you may review Microsoft's instructions and select the appropriate drive. Use the interface to confirm whether the destination is recognized, whether the feature is enabled, and whether it has completed a backup. Where an option appears to include additional locations, confirm the operating system's currently supported method rather than assuming all folders are protected.

File History is especially useful because it can preserve earlier states of files. Suppose a report was correct on Monday and accidentally changed on Tuesday. If a Monday backup exists, you may be able to recover the earlier content instead of simply retrieving the latest version. **A historical version exists only if the backup system actually captured and retained it.** Do not infer that every edit produces a permanent version or that the backup runs while the destination is disconnected.

### File History: examining previous versions safely

Microsoft describes a recovery workflow through File Explorer: open the folder that contained the item, right-click the file or folder as appropriate, choose **Restore previous versions**, and inspect the available versions. The interface may allow you to open a previous version in File History or restore to another location. If you choose an ordinary **Restore** action, it may **replace the current file**, potentially discarding recent changes. For a beginner, the safest exercise is to **preview** or use **Restore to...** with a separate practice folder, if available.

If no previous versions are listed, do not assume the feature is broken or that the file is hidden. The file may never have been covered, the backup drive may not have been connected, backups may never have completed, or the retention period may not include the date required. Check the status and scope without making destructive changes. For valuable files, use non-destructive inspection and ask an authorized administrator or trusted technician before overwriting any present data.

### Windows Backup: settings and selected files

[[windows-backup|Windows Backup]] is a Microsoft-supported Windows 11 experience that integrates selected file protection with OneDrive and helps preserve certain settings or preferences through a Microsoft account. Depending on device and account, it can support backup options for folders and selected Windows settings. It is not a full copy of every installed program, every program's data, every external drive, or every account. Some features are unavailable or managed differently on work and school devices.

You can inspect **Settings → Accounts → Windows backup** on Windows 11 or locate the **Windows Backup** app through Start, where available. Read the listed categories and their status before changing anything. If you see a control for **OneDrive folder syncing**, understand that enabling it may move designated folders into an account-based synchronization workflow. Check for account, storage, privacy, permissions, and institutional-policy implications. If you already use OneDrive to protect Documents or Desktop, do not count that same synchronized account copy twice in a 3-2-1 inventory simply because Windows Backup also displays it.

Microsoft's recovery workflow can help restore certain settings and make your OneDrive files accessible after signing into the appropriate account. However, restoring one settings category does not ensure that an unrelated local folder, saved game, specialized application database, or file on a removable card returns. Keep a written list of important exceptions and consult the affected program's own backup instructions when needed.

### OneDrive: helpful access, but examine sync behavior

[[onedrive|OneDrive]] is a Microsoft cloud file service that can synchronize selected folders and store online files. A file may appear in File Explorer even if its data is not fully stored on the computer. A [[cloud-placeholder|cloud placeholder]] indicates that an item can be represented locally while its content may need downloading. If you depend on a file during an internet outage or need to make a separate manual copy, confirm that the content is available and opens as expected.

A synchronized file often offers useful protection from the loss of one computer because an accessible cloud copy can remain. However, synchronization means a deletion or mistaken edit may be replicated to the cloud and other signed-in devices. OneDrive also offers recycle-bin and version-history capabilities, but those controls have eligibility, retention, and account-specific limits. They should be understood as recovery features, not assumed to be unlimited independent archives. For irreplaceable content, maintain an additional independent recovery copy consistent with your storage policy.

### Example: the difference between sync and an independent backup

Suppose an essay is in a Documents folder that syncs through OneDrive. On Tuesday, a user deletes the essay from the synchronized folder. The deletion may also affect the online account and connected devices. If the file is still within the service's recovery window, it may be retrievable from a recycle bin; if a retained earlier version exists, the original text may be restorable. Neither outcome is guaranteed indefinitely. Separately, a disconnected external backup from Monday may still contain Monday's essay regardless of what the synced account now shows.

This illustrates a practical principle: **different recovery paths should fail differently**. Cloud sync helps with one device being lost; an independent disconnected copy helps with certain mistakes or destructive events propagated through sync. You can use both, but label them accurately in your backup plan.

### System Restore and a recovery drive are different matters

[[system-restore|System Restore]] and other Windows recovery methods may help with operating-system problems, updates, or startup failures. Their behavior varies with system version and setup. A recovery USB drive can help start troubleshooting or reinstall Windows, but a standard recovery drive is not inherently a backup of every personal photograph and document. Do not rely on system repair features as the sole place where personal-file recovery copies exist.

A [[system-image|system image]] is a broader snapshot of a computer or disk used by specialized backup tools. It can be useful for some environments, but it is more complex than a beginner's targeted file-copy routine. For this lesson, the goal is to recover **specific valuable personal files**, understand exclusions, and prove the recovery steps. Full-system recovery belongs in a more advanced course or supported institutional procedure.

### Checking backup status without making changes

On a computer you are allowed to inspect, answer these questions without clicking **Reset**, **Format**, **Delete**, or **Restore over original**:

1. Is a backup or sync feature enabled, or is the page only offering setup?
1. Which account or external drive is the destination?
1. What date or status indicates the last successful backup, if shown?
1. Which folders or data categories are included?
1. Is there enough space to continue storing future copies?
1. Is there a way to view or restore an older file without overwriting the working version?
1. Who controls the credentials and permissions needed to recover the data?

> **Do not infer success from a toggle:** An enabled setting means the feature is configured or active in some way. It does not, by itself, prove that a recent backup completed, that every important folder is included, or that recovery will succeed.

## 5. Restore, verify, and maintain backups

### Recovery is the outcome you are buying with your effort

A [[restore|restore]] retrieves a saved copy from a backup and makes it usable again. The purpose of backup is not to collect drives or accumulate folders; the purpose is to return to work after accidental loss, unwanted changes, or device problems. A responsible routine tests that result before an emergency. The safest beginner test uses a disposable practice file and a new destination folder. It does **not** delete the original, reinstall the operating system, or restore an entire account.

A good test answers four questions. Can you identify the correct backup location? Can you locate the intended file and version? Can you copy or restore it without damaging the current original? Can you open it and confirm meaningful content? If the answer to any question is no, mark the backup as needing attention. Fixing a missed destination during a practice exercise is much easier than discovering the gap after a laptop failure.

### Step-by-step: restore a manual practice backup

1. Open **File Explorer** and navigate to the authorized external backup or the harmless copying-rehearsal destination from Section 3.
1. Locate `practice-note.txt` and confirm that you are looking at the backup copy, not the original Documents file.
1. Create a new folder in Documents named `MGU-Restore-Test`. It should be empty and used only for disposable sample files.
1. Select the backup copy and choose **Copy** with **Ctrl + C**. Do **not** cut, move, or delete the backup.
1. Open `MGU-Restore-Test` and choose **Paste** with **Ctrl + V**.
1. Open the restored practice document from `MGU-Restore-Test` and read the distinctive sentence you wrote earlier.
1. Confirm that the original in `MGU-Backup-Practice` and the backup in the destination still exist. You should now have three sample instances if the practice succeeded.
1. Record the result: source tested, backup location, date, successful opening, and any unexpected differences. If the test fails, mark it as a failed test rather than checking a success box.
1. If using an external drive, close files and safely eject it before unplugging. Leave real backup files untouched.

This procedure proves that **this particular practice file** could be restored from **this particular destination**. It does not guarantee that all files in a larger backup are recoverable. Periodically test representative documents, pictures, and other important formats using approved methods, especially after changing equipment or applications.

### Why use a different restore destination?

An [[alternate-restore-location|alternate restore location]] keeps testing from overwriting a newer or irreplaceable original. Suppose a Monday backup contains a report with ten paragraphs and today's original contains twelve. If you restore Monday's copy over today's original, you may lose the two newer paragraphs. Restoring Monday's copy into `MGU-Restore-Test` lets you inspect or compare versions first. Only after careful review and a preserved current copy should you intentionally replace a working file.

When software offers **Restore**, **Restore to**, **Replace existing**, **Keep both**, or **Open previous version**, read the exact action. Their effects differ, and wording may change across services. If the interface offers no non-destructive route, stop the beginner exercise and use a written scenario instead. Never practice a real account-wide restore or a system reset without a genuine need and appropriate authorization.

### A backup test should include usability

A document that opens as expected provides better evidence than a filename alone. A PDF may exist but have missing pages; a photograph may be truncated; an archive may be password-protected by an unavailable key; a spreadsheet may contain links to external workbooks that were not included. For an ordinary class exercise, opening and reading the distinguishing content is sufficient. For a higher-stakes project, an authorized team may need formal validation, hashes, application-specific database recovery, or a documented restoration drill.

[[integrity|Integrity]] refers to information remaining accurate and uncorrupted. A file's extension, size, name, and modification date may provide useful clues, but none independently guarantees integrity. Testing the file in the program that must use it is a practical beginner method. Some workflows also use checksums or hashes to compare files byte-for-byte, but those tools are not required here and may not identify every application-level dependency.

### Prevent silent backup failure

Automatic backups can stop because the drive is disconnected, the storage destination becomes full, an account has an authentication problem, a folder moves outside the backup scope, network connectivity changes, or the backup application reports an error. A successful run last month is not proof of a successful run today. Review notifications and status periodically, and check that the schedule matches the value of recent work.

| Symptom | Possible cause | Non-destructive first response |
| --- | --- | --- |
| No recent backup date | Drive absent, job disabled, or unsuccessful run | Check status, destination, and error message |
| “Not enough space” warning | Target storage is full or quota is exceeded | Review available space and approved retention choices |
| Important folder missing | Scope excludes location or location changed | Inspect backup selection before changing anything |
| File appears online but not offline | Cloud-only content not downloaded | Confirm account, connectivity, and availability |
| Wrong version restored | Backup date or version selection was incorrect | Return to versions list; preserve current file |
| Backup file will not open | Incomplete transfer, corruption, or unsupported application | Do not delete original; try a known-good alternative copy |
| Restore asks to replace existing file | Destination contains another file with same name | Choose separate folder or stop for review |

### Rotation, capacity, and retention

[[rotation|Backup rotation]] is the practice of maintaining more than one historical copy or more than one backup medium rather than continuously replacing the same data. For some users, an automated versioned backup is simpler than manually managing dozens of dated folders. For others, separate dated practice folders make the concept easier to learn. Either way, older copies must be retained long enough to meet recovery needs while respecting storage capacity and records policies.

An external drive can be physically healthy yet too small for a growing photo library. A cloud account can be correctly configured but have no remaining quota. A backup plan should account for total data size, expected growth, and version retention. Do not delete older backups just because a storage warning appears: first confirm that newer valid backups exist and review any applicable legal, educational, or organizational retention requirements. On managed devices, the owner or administrator sets those policies.

### Recovery time and acceptable loss

Two useful planning questions are: **How much recent work could I afford to recreate?** and **How soon would I need it back?** A student with a deadline tomorrow may need a more frequent backup and a rapid alternate-device restore path than someone preserving a rarely used family recipe. These ideas are sometimes described as recovery-point and recovery-time objectives, but you do not need to memorize the technical names to make a sound decision.

Consider a weekly backup completed Friday evening. If a failure occurs Wednesday afternoon, the copies may not include changes made on Saturday through Wednesday. The backup may be valid but insufficiently recent for your needs. The remedy is not simply another drive; it may be a shorter backup interval and a second protected route for recovering work. The right schedule follows the value and pace of changes, not a universal number of days.

### A weekly and monthly maintenance routine

A manageable routine might include a short weekly check: “Did the designated backup run? Is the target available? Were the latest important folders included? Were errors reported?” Once a month, restore a harmless sample into an alternate folder and open it. After a major change such as replacing a laptop, moving cloud accounts, rearranging folders, or changing operating systems, check the full scope and test again. The cadence is illustrative; adjust it to how much potential work loss you can accept.

Avoid recording secrets in a visible backup log. If your recovery depends on an account or encrypted device, use an approved, secure method to keep required access credentials or recovery information available. A copy that cannot be decrypted is not recoverable merely because the drive still works. At the same time, keeping the encryption key taped to the drive undermines the protection encryption is meant to provide.

> **The success criterion is recovery, not storage volume:** A small, current, independently protected backup that you can restore may be more valuable than a huge archive that was never tested and cannot be opened.

## 6. Other devices, privacy, and emergency decisions

### Mac: Time Machine and iCloud are related but different

Apple's [[time-machine|Time Machine]] is a built-in Mac backup tool designed to retain recoverable copies, commonly using an external storage device. It can protect files and support recovery of older states, depending on available backups and configuration. On an authorized Mac, inspect **System Settings → General → Time Machine** to review or select a backup disk; menu details can vary by macOS version. If using an external device, confirm that the disk is appropriate and has no data that could be affected by setup before approving prompts. Do not erase or reformat a populated disk during practice.

To restore an individual file, Apple describes opening the folder where the file belonged, entering Time Machine, choosing a snapshot or date, selecting the item, and restoring it. For a safe classroom exercise, work with a disposable file and protect any current version before restoring. If the destination already contains a file with that name, review the offered options and do not overwrite an irreplaceable original. Time Machine may also be used in larger recovery scenarios, but the goal of this lesson is restoring an individual file safely.

[[icloud-drive|iCloud Drive]] synchronizes designated documents across signed-in Apple devices. Apple offers other iCloud services for photos and device backup. iCloud does not automatically constitute a complete independent backup of an entire Mac. A deletion or change in a synced iCloud item may affect other signed-in devices. A Mac user can sensibly combine iCloud synchronization for convenient access with Time Machine or another independent recovery method. As on Windows, verify the scope and test an actual restore.

### Chromebook: protect local Downloads separately

A [[chromebook|Chromebook]] can save files locally, including in **Downloads**, or to an account-linked service such as Google Drive. Google warns that local Chromebook storage is limited and downloaded files may be removed in some cleanup situations. Before relying on a local-only folder, inspect the **Files** app and decide whether important items also need a separate protected copy. Uploading a selected document to an approved Google Drive account, or copying to a compatible external device, can give you another access route.

In the Chromebook Files app, identify **My files → Downloads** for local items and **Google Drive → My Drive** for account-based items, where those locations are present. You may copy a disposable document to an authorized drive folder or external device, then confirm that it opens from the destination. A file that was never uploaded will not magically appear in Google Drive because you used a Chromebook. Also, a Google Drive file made available offline is still generally part of the same synchronized file workflow, not necessarily an independent recovery archive.

Google Drive has a Trash and may provide version-history features for selected file types or circumstances. Such features are useful but subject to service rules, account permissions, and retention limits. Keep an independent backup when the data is irreplaceable and the organizational policy allows it. School-managed Chromebooks may enforce restrictions on external storage or sharing; do not bypass those restrictions.

### iPhone and iPad: understand what device backup includes

An [[iphone-backup|iPhone or iPad device backup]] helps preserve specified device information and settings for later restoration. Apple provides iCloud Backup and computer-based backup methods. The device-backup categories are **not identical** to a simple folder-by-folder file backup. Data already synchronized to iCloud, such as certain photos or documents, may be handled by those synchronization services instead of being duplicated in the device backup.

On an authorized iPhone or iPad, you can inspect the iCloud Backup section under the Apple Account's iCloud settings, though wording may vary by software version. On a computer, Finder on supported Macs or Apple's Windows device-management tools can provide device-backup options. Review the account, destination, estimated space, and status before enabling or changing settings. Some computer backups can be encrypted; losing the required password may prevent recovery of their protected content.

**Important distinction:** A device backup intended for restoring a phone is not necessarily a browsable folder containing every individual photograph. If iCloud Photos is active, photo content may synchronize separately; deleting a photograph from the synchronized library can affect other devices. For especially important photographs or documents, review a separate export or archive approach appropriate to your privacy and storage requirements. Do not assume that switching on iCloud Backup creates permanent independent copies of everything visible in every app.

### Android: device backup, photos, and downloaded files

Many Android devices can back up selected device data and settings through a Google Account. The exact categories and screens vary with the Android version, manufacturer, and account policy. Under **Settings**, search for **Backup**, or review the system's backup area without changing its state. Look for the account, included data types, current backup status, and most recent successful completion. Phone backups may not include every downloaded PDF, app-created file, or third-party application's data.

[[google-photos|Google Photos]] can protect selected photographs and videos when its backup function is enabled and completed, but its library behavior and deletion rules need to be understood separately from Android device settings. Google Drive may hold documents you intentionally upload. These are distinct services and data categories; having one enabled does not mean that all content on the phone is covered. For an irreplaceable local recording or downloaded document, inspect its actual location in the file manager and plan an approved extra copy.

When replacing a phone, restoring an Android device backup can depend on the account, the device's software version, supported categories, and app-specific recovery. Do not erase the old device solely because a backup icon appears. Confirm successful access to important files and accounts on the new device before retiring or resetting the old one, following any applicable device-transfer instructions.

### Security: recovery copies can also expose private information

A backup of sensitive documents is valuable and may also be dangerous if stolen. [[encryption|Encryption]] helps protect information by requiring suitable credentials or keys to decode it. An encrypted external drive may be appropriate for records containing private information, but the owner must know how to unlock it during recovery. If an employer or school provides approved encryption and storage policies, follow them. Do not upload organization-owned records to a personal cloud account without authorization.

For online backups, use a strong unique account password and enable [[multi-factor-authentication|multi-factor authentication]] where supported. Review sharing permissions, ensure recovery contact methods are current, and avoid placing recovery keys in the same bag or folder as the protected drive. A backup is not private just because its folder is named “Personal.” Physical access, shared accounts, link-sharing settings, and device security all influence confidentiality.

### Ransomware and the importance of separation

[[ransomware|Ransomware]] is malicious software that may encrypt or otherwise obstruct access to data. If a backup device remains accessible to an affected computer, it may be exposed to the same damage. A disconnected backup or an appropriately isolated, protected versioned service can reduce this exposure. Do not attempt to use a potentially infected device to copy files onto a clean backup or reconnect your only reliable recovery drive before the incident has been assessed.

If you suspect malware, ransomware, or a failing drive, stop routine backup experiments and seek qualified, authorized help. For a business or school device, use the organization's incident-response channel. Do not erase, reformat, reset, or restore over evidence or important originals without a clear authorized recovery plan. A backup lesson teaches preparation and cautious restoration, not emergency forensic repair.

### What to do first after a real loss

When a real file is missing, establish whether it was moved, renamed, deleted, overwritten, or merely inaccessible. The earlier lesson on [Finding Lost Files](/department/computer-science/basic-computer-skills/file-and-folder-skills/finding-lost-files/) gives a methodical search process. Before restoring, determine which source still contains the best available version. If the file exists but the computer has failed, preserve backup media and avoid unnecessary writes to the affected disk. If a cloud deletion is involved, inspect the relevant service's recovery options promptly; retention may be limited.

Choose the **least destructive** recovery method that can solve the problem: locate the original, check a recycle bin or trash, view retained file versions, restore a single item to a safe alternate location, and only then consider broader recovery methods if needed. Do not run a full device restore simply to retrieve one forgotten practice note. The narrower action usually provides more control over the working data you want to preserve.

### A plan appropriate to the person and the context

There is no single storage purchase or backup brand that everyone needs. A student may prioritize a collection of school documents; a photographer may require large-capacity image archives; a small business may have retention and confidentiality obligations; a mobile-only learner may rely on approved account-based backup plus carefully exported important files. Costs, connection speed, device accessibility, and the ability to follow the routine matter. **Choose a plan that can be maintained and tested, then improve it as needs grow.**

> **Cross-platform reminder:** The existence of a cloud account, backup toggle, or second device does not guarantee that a particular file is covered. Identify the specific item, verify its protected location, and practice recovering a harmless representative sample.

## 7. Guided practice

These five activities make the skills measurable without risking genuine data. Use an authorized device and a harmless sample file, or complete the written alternative. Each activity has an expandable model solution. Do not format storage, change live synchronization settings, erase a phone, intentionally infect a device, or restore over an existing important file. A successful written simulation meets the learning goal when hands-on equipment is unavailable.

### Activity 1 — Inventory three items worth protecting

**Goal:** Distinguish unique personal information from replaceable programs and locate the likely storage location.

**Scenario:** A student uses a Windows laptop to write a semester report, stores family photographs from a camera, and downloads a public brochure from a website. The report is in `Documents/School/`, the photos are in `Pictures/Family/`, and the brochure is in `Downloads/`. The student has a limited amount of backup space.

**Your task:** Write a list with the filename or category, current location, whether losing it would be difficult to remedy, and the backup priority. Explain why the report and original photographs may deserve protection before the downloaded brochure. Then identify one other important category that might exist outside Documents. Consider the possibility that a folder name does not reveal whether its contents are local, synchronized, or cloud-only.

**Optional hands-on step:** In File Explorer, navigate to your own Documents, Pictures, and Downloads folders and identify their names without opening private items. If an organization manages the device, use the written scenario instead. Do not copy any actual personal information during this activity.

**Evidence of success:** Your inventory identifies both the *location* and the *reason* each item matters, and it does not assume that every necessary file lives in Documents. You can explain that different data categories may require different methods of backup.

:::answer Show Activity 1 model solution
A suitable priority list is: semester report in `Documents/School/` — high priority because substantial original work may be difficult to recreate; family photographs in `Pictures/Family/` — high priority because irreplaceable images may have no alternative source; public brochure in `Downloads/` — lower priority if the same publication remains available from a trusted source. A fourth example could be a project folder on the Desktop, a digital drawing stored in an application's workspace, or a video recorded on a phone. The best priorities depend on individual circumstances, but the student should not assume that one Documents-folder copy protects all these locations.
:::

### Activity 2 — Design a 3-2-1 plan on paper

**Goal:** Select independent recovery locations and recognize shared failure points.

**Scenario:** A learner owns a laptop, has an authorized external drive, and can use an approved cloud account. They propose this plan: `Documents/School/report.docx` on the laptop; `Documents/School/Copy/report.docx` on the same laptop; and `Documents/School/Backup/report.docx` in another folder on the same internal drive. They call it 3-2-1 because there are three file names or locations.

**Your task:** Explain what is wrong with the claim. Then propose three copies with two different storage approaches and a location physically separate from the laptop. Identify one threat your plan handles well and one threat that still needs attention. Include who can sign in to the cloud account and whether the external drive is disconnected after backup. If you cannot use cloud storage or an external drive, describe a feasible first improvement rather than inventing resources.

**Evidence of success:** You count *copies and independent failure locations* rather than folder names; you understand that a connected external drive and a laptop can share malware exposure; and your plan does not rely on a single account that you cannot recover.

:::answer Show Activity 2 model solution
The original proposal has three copies but only **one physical storage device**; theft or failure of that device could destroy them all. One improved example is: the working report on the laptop; a backup on an approved external drive that is safely disconnected and stored securely; and another protected backup maintained in a separate physical location or suitable cloud backup service. This better addresses laptop hardware failure and a local incident. Cloud account compromise, deletion propagation, insufficient retention, and outdated backup copies remain risks to check. A learner with limited resources can begin with a second independent device or approved service, test recovery, and document a plan to improve separation over time.
:::

### Activity 3 — Copy a harmless file and verify the destination

**Goal:** Perform the essential Windows 11 manual-backup routine safely.

**Equipment:** An authorized computer and, optionally, a known practice USB drive. A paper simulation is sufficient if a drive is unavailable.

1. Create `Documents/MGU-Backup-Practice/practice-note.txt` containing the sentence “Recovery practice: this is the original note.” Save it.
1. On a known practice drive, create a folder named `MGU-Practice-Backup`. If no external device is available, create a separate temporary folder on the same computer solely to rehearse copying.
1. Confirm the correct source and destination; write both locations down.
1. Use **Copy** and **Paste**, not **Cut**, to put `practice-note.txt` in the destination.
1. Verify that the source still opens. Open the destination copy and read the sentence.
1. If you used a removable drive, close the file and safely eject the device before unplugging it.
1. Make a record of whether the operation was a real independent-device backup or only a same-computer rehearsal.

**Evidence of success:** The original and the destination copy both exist and contain the expected sentence. A student completing the paper version can correctly describe all seven steps and identify what would be missing without an independent destination.

:::answer Show Activity 3 model solution
The source is `Documents/MGU-Backup-Practice/practice-note.txt`; the target is `MGU-Practice-Backup/practice-note.txt` on the confirmed authorized drive. After **Ctrl + C** and **Ctrl + V**, both files should exist, and both should open with the expected practice sentence. The student must wait for the copy to finish and safely eject any removable drive. Two folders on the same laptop may demonstrate copying but do **not** constitute an independent recovery backup against laptop loss or drive failure. A completed copy should be recorded as verified only after inspection.
:::

### Activity 4 — Restore one version without overwriting the original

**Goal:** Demonstrate safe recovery and learn why the destination matters.

**Scenario:** On Monday a student saved `report.docx` with the sentence “The first draft contains three sections.” On Tuesday they added two more sections. An older backup contains Monday's version. The student now wants to compare Monday and Tuesday without losing either one.

**Your task:** Choose between **Restore over original** and **Restore to a different folder**, and explain your decision. If using practice files, create a fresh `MGU-Restore-Test` folder, copy the harmless backed-up note from Activity 3 into that folder, open it, and verify its content. Do not replace the real report in Documents. State what evidence shows that the backup can be recovered.

**Paper-only alternative:** Draw three folders named `Working`, `Backup`, and `Restore-Test`. Write which copy belongs in each after recovery and explain how to avoid editing the wrong one. Identify why a file's visible name alone is not proof of a correct restore.

**Evidence of success:** The learner chooses a non-destructive restore, verifies its content, preserves the current working version, and distinguishes a demonstrated test from an unsupported claim that all possible files are protected.

:::answer Show Activity 4 model solution
Choose **Restore to a different folder**, such as `MGU-Restore-Test`. Keep the Tuesday version in `Working` and the Monday recovery copy in `Backup`; place a copy of Monday's file in `Restore-Test` for inspection. Verify that it opens and contains Monday's identifying text. An ordinary restore over the current report could replace the newer five-section document with the older three-section document. Successfully restoring the sample provides evidence about that specific file and destination, not necessarily every file in the whole backup set.
:::

### Activity 5 — Diagnose a backup warning and revise the plan

**Goal:** Respond to incomplete backups without making the situation worse.

**Scenario:** A learner sees **“Reconnect your File History drive”** after a week of work. Their external drive is not currently plugged in. They also realize a folder named `Desktop/Project-Art/` was created after they last checked the backup scope. The cloud account has only a small amount of free space left.

**Your task:** Identify at least four questions to investigate **before** deleting anything. Explain whether the backup from last week should be assumed current. Propose a safe plan to confirm the external drive's identity, inspect scope, run or schedule the appropriate backup when authorized, verify a harmless sample restore, and improve the storage-space situation without indiscriminately removing older backups.

**Optional extension:** Explain how your response would change if you suspected ransomware rather than an ordinary disconnected-drive warning. Consider whether connecting the only clean external backup to a potentially infected computer is wise.

**Evidence of success:** Your response includes verification of status and scope, avoids destructive cleanup, and distinguishes a routine missed run from a security incident.

:::answer Show Activity 5 model solution
Questions include: When did the last backup **successfully complete**? Is the drive the correct one and in working order? Does File History include `Desktop/Project-Art/`? Is there enough destination capacity? Does the cloud quota affect the data intended for that account? Can a sample be restored from the existing backup? A week-old backup is not assumed current after a new folder and more edits. On a known-clean authorized computer, inspect the drive and settings, reconnect the right device as appropriate, address capacity and scope deliberately, and perform a test restore to a separate location. Do not delete older copies until a valid retained backup and the applicable policy are confirmed. If malware or ransomware is suspected, do not connect the clean recovery drive to that potentially infected system; use authorized incident-response support.
:::

### Consolidated performance task — Your personal backup statement

Write a four-sentence statement using broad file categories, not private details: **(1)** “My highest-priority files are ...”; **(2)** “My working copies are located ... and my independent recovery destination is ...”; **(3)** “I will create or verify copies ...”; **(4)** “I will test recovery by restoring a harmless sample into ... and checking ...”. If no independent destination is available yet, write “not yet established” and state the next realistic step. Honesty about an incomplete plan is better than claiming protection that does not exist.

:::answer Show a model four-sentence backup statement
My highest-priority files are original school reports, family photographs, and completed forms. My working copies are in designated computer folders, with an independent backup planned on an authorized external drive and a separate protected location. I will check backups regularly and update them whenever important work changes. I will restore a harmless sample to `MGU-Restore-Test`, open it, confirm the expected contents, and record the test result.
:::

## 8. Common misconceptions and troubleshooting

### “I copied it to another folder, so I have a complete backup.”

A second folder on the same device does not protect against loss of that device. It may protect against some editing mistakes if the second folder stays untouched, but it shares a storage-failure risk. Also, a copy of one file cannot protect the unselected files elsewhere. **Remedy:** identify the actual source list, choose a genuinely independent destination, and verify at least one representative restore. Keep the original and backup distinct.

### “If it is in the cloud, it cannot be lost.”

Cloud services can be very useful, but account lockouts, sharing mistakes, full storage quotas, synchronized deletions, unwanted edits, policy changes, and limited version retention can still create recovery problems. Some services may offer recycle bins or retained versions, but they are not unlimited guarantees. **Remedy:** understand the service's scope and retention and keep a protected independent copy of critical content when permissible.

### “My phone is backed up, so every downloaded file and photograph is inside the device backup.”

Phone backup and photo or document synchronization may be separate services. Some data types are excluded, managed by individual apps, or held in accounts that require a different restore process. **Remedy:** review the official coverage for the device, check where the important item actually lives, and verify the relevant recovery method rather than guessing based on a general backup status message.

### “A backup is finished when I click the Backup button.”

A command may begin an operation without completing it. The destination may fill up, disconnect, or report an error. A visible backup folder could contain only a subset of intended files. **Remedy:** check the reported completion status, inspect the intended scope, and perform a harmless restore test. Record an incomplete run accurately if it did not finish.

### “I should overwrite the current file with the old backup to test it.”

Overwriting a current document can destroy newer work. A restore operation may not offer an easy Undo. **Remedy:** restore or copy to an alternate practice folder first, compare the versions, and make a deliberate decision only after preserving necessary originals. If you do not see a safe alternate path, use a written simulation.

### “My external drive stays connected, so backup is always safer.”

A continuously connected drive can be useful for scheduled backups but may also share exposure to malware, power problems, physical incidents, and accidental deletions. A disconnected or otherwise isolated copy can add resilience. **Remedy:** balance automation with independent protection, follow your drive's safe-removal procedure, and consider offsite separation consistent with your responsibilities.

### “A larger drive guarantees a better backup.”

Capacity is important but does not replace correct selection, reliable operation, privacy controls, and recovery testing. A drive with abundant free space can still contain stale or wrong files. **Remedy:** evaluate the actual content, completion date, storage condition, and ability to restore useful versions—not just the number of gigabytes.

### “The Recycle Bin is my backup system.”

Recycle Bin or Trash can recover certain deleted files but may exclude permanently deleted items, data from some external locations, or information outside a retention window. It is a convenient recovery tool, not a controlled independent copy. **Remedy:** use the bin when appropriate, but maintain a separate backup for irreplaceable information.

### “System Restore or a recovery USB always brings back all my documents.”

System recovery features differ in what they recover. They should not be assumed to contain a personal-file archive. **Remedy:** confirm the actual tool's coverage and maintain verified backups of personal documents separately. Do not reset or reinstall a computer as an experiment in this lesson.

### “A backup test is unnecessary because the filenames look correct.”

A copied item can have the expected name while containing the wrong version, incomplete data, or an unreadable format. **Remedy:** open a restored sample with the intended application and check identifying content. For essential institutional systems, follow the organization's documented technical testing requirements.

### “If backup fails, I should erase the destination and try again.”

Erasing can destroy the last recoverable copy. A failure may be due to space, permissions, account status, a disconnected drive, or a changed folder path. **Remedy:** stop, read the error, preserve existing copies, and troubleshoot the specific cause. A format or reset action is not a normal first response.

### “My backup only matters after my computer breaks.”

A backup is most useful when prepared and tested while everything still works. If a device has already failed, creating new copies may be impossible or unsafe. **Remedy:** establish a simple regular routine now and review it after major changes. If you suspect failing hardware or malicious activity, avoid repeated writes and seek qualified help.

### Practical decision table

| What happened? | First safe action | Avoid |
| --- | --- | --- |
| Accidentally removed a file | Check its original location, Recycle Bin or cloud Trash, and available versions | Permanently emptying trash before recovery |
| Saved unwanted changes | Inspect version history or an earlier backup without overwriting current work | Blindly restoring over a newer file |
| Backup destination is full | Review capacity, scope, and approved retention options | Randomly deleting the oldest recoverable copy |
| Backup drive not recognized | Confirm cable, power, and identity; seek support if warnings persist | Formatting or initializing a valued drive |
| Laptop stolen | Use a separate secured backup and follow account-security steps | Assuming the drive in the same bag survived |
| Suspected malware or ransomware | Preserve independent copies and use authorized incident-response help | Attaching clean backup media to an infected system |
| Cloud account inaccessible | Use supported account recovery and preserved independent copies | Giving anyone unverified recovery codes or passwords |
| A sample restore failed | Mark the test failed, preserve source, inspect the failure | Claiming the backup is verified because the folder exists |

> **Troubleshooting principle:** Preserve evidence and surviving copies; identify the actual problem; choose the narrowest non-destructive remedy; and test recovery before trusting the result.

## 9. Essential vocabulary

The following vocabulary supports the dotted-underlined terms throughout the lesson. Select a contextual term to open a definition. Some words have an everyday meaning and a more precise meaning in data management, so the distinction matters.

- **Backup:** An independent copy kept so information can be recovered after loss, damage, deletion, or unwanted changes.
- **Primary copy:** The everyday working version of a file in its current location.
- **Backup copy:** A maintained recovery copy intended to survive at least some failures affecting the primary file.
- **Backup plan:** A statement of which files are protected, where copies are stored, how often they are updated, and how recovery is tested.
- **3-2-1 rule:** A common guideline recommending three copies, two storage approaches or media, and one offsite copy.
- **Offline backup:** A recovery copy not routinely accessible to an ordinary computer or network connection.
- **Offsite backup:** A recovery copy kept at a physically different location.
- **Backup scope:** The files, folders, devices, and data types actually included in a backup method.
- **Backup frequency:** How often new recovery copies are made or updated.
- **Retention:** The period or policy determining which backup versions remain available.
- **Version:** A recorded state of a file from a particular time.
- **Version history:** A feature for viewing or recovering earlier versions where they were retained.
- **File History:** A Windows feature for backing up personal files and recovering earlier versions from a configured destination.
- **Windows Backup:** A Windows feature supporting selected account-based files, preferences, and settings, subject to its scope.
- **Sync:** A service behavior that keeps selected information aligned across locations and may propagate edits or deletions.
- **Cloud placeholder:** A file entry that appears in a local file manager even when its data may need to be downloaded.
- **Restore:** The act of retrieving backed-up information into a usable location.
- **Restore test:** A controlled attempt to recover a sample and verify it opens correctly.
- **Integrity:** A condition in which information remains sufficiently accurate, complete, and usable for its purpose.
- **Encryption:** Protection of stored information using a method that requires authorized access to decode it.
- **Multi-factor authentication:** A sign-in method requiring an additional proof beyond a password, when supported.
- **Ransomware:** Malware that can block access to files, including by encrypting them, and may affect reachable backup devices.
- **Time Machine:** Apple's built-in Mac backup and restore capability.
- **iCloud Drive:** Apple's cloud file synchronization service, which does not automatically back up the entire Mac.
- **Alternate restore location:** A different folder or destination used to inspect recovered data without replacing current files.
- **Backup log:** A record of backup scope, destination, completion status, and test results.

### One final distinction to remember

**Storage** answers “Where is my file?” **Synchronization** answers “How does this selected file stay aligned across devices?” **Backup** answers “How can I recover a useful version if my working information is lost or changed?” **Restoration** answers “Can I actually retrieve and use it?” A complete beginner workflow is to locate files, choose independent protection, perform or confirm backups, and test the return path.

## 10. Knowledge check

Choose **one answer** for each question, then use **Check answers** in the MGU dashboard to review the explanatory feedback. This is a self-study assessment; its answers are checked locally in your browser. The separate expandable answer key is provided for learners completing the lesson without an interactive device.

:::quiz
? What is the primary purpose of a backup?
- [ ] To make a folder look organized
- [x] To preserve a recoverable copy if working data is lost
- [ ] To increase internet speed
- [ ] To change a file extension
! A backup provides a recovery path after loss, damage, or unwanted changes.

? Which is a primary copy?
- [x] The version normally edited in Documents
- [ ] A disconnected external archive
- [ ] An old version stored for emergencies
- [ ] A sample recovered to a test folder
! The primary copy is the everyday working file.

? Which action usually leaves the original in place?
- [ ] Cut and paste
- [ ] Move
- [x] Copy and paste
- [ ] Permanently delete
! Copying creates another instance without intentionally removing the source.

? Why are three folders on one internal drive not a full 3-2-1 plan?
- [ ] Folders cannot contain documents
- [x] They share the same physical drive failure risk
- [ ] Windows disallows three folders
- [ ] They automatically become encrypted
! Three folders on one device are not separate media or failure locations.

? In a common 3-2-1 approach, what does the 1 represent?
- [ ] One file extension
- [ ] One online password
- [x] One offsite copy
- [ ] One folder named Backup
! The 1 refers to a copy kept in a different physical location.

? Which situation best illustrates an offline backup?
- [ ] A synced folder currently open on the laptop
- [x] An authorized external drive disconnected after a verified copy
- [ ] A second open tab showing the same cloud account
- [ ] A Desktop shortcut to Documents
! An unplugged protected drive is not normally reachable by the active computer.

? Which question determines backup scope?
- [ ] Which wallpaper is visible?
- [ ] Which keyboard layout is selected?
- [x] Which exact files and folders are included?
- [ ] Which browser tab is active?
! Scope identifies the actual data categories and locations protected.

? What can happen when a synced file is deleted?
- [x] Deletion can propagate to cloud and other synced devices
- [ ] The cloud always rejects deletion
- [ ] The file automatically converts to a PDF
- [ ] All offline backups are erased instantly
! Synchronization can propagate deletions; independent backups may remain unaffected.

? Which Windows feature uses an external drive or configured network location to preserve personal-file versions?
- [ ] Calculator
- [x] File History
- [ ] Notepad
- [ ] Screen Snipping Tool
! File History supports personal-file backups and recovery of earlier versions.

? Where does Microsoft document inspecting File History settings on Windows 11?
- [x] Control Panel under System and Security
- [ ] Only inside a web browser
- [ ] The mouse properties dialog
- [ ] The Recycle Bin properties dialog
! Microsoft describes File History through Control Panel and System and Security.

? What is an important limitation of Windows Backup?
- [ ] It always formats the system drive
- [ ] It creates a perfect full copy of every app and local file
- [ ] It only works on cameras
- [x] Its account-based scope does not include every file, app, or external drive
! Windows Backup helps preserve selected settings and files; it is not a complete image of all content.

? How should a beginner respond to a request to format a drive containing valued files?
- [ ] Approve immediately
- [x] Cancel and investigate without formatting
- [ ] Rename the drive to Backup
- [ ] Delete the original files first
! Formatting may erase access to existing information and is not part of ordinary backup practice.

? Which shortcut opens File Explorer on Windows 11?
- [ ] Ctrl + P
- [ ] Alt + F4
- [x] Windows key + E
- [ ] Ctrl + Shift + Escape
! Windows key + E opens File Explorer.

? What must you confirm before copying to a removable drive?
- [ ] Only its assigned drive letter
- [x] Drive identity, label or capacity, and intended destination
- [ ] Only its color
- [ ] Only the last folder you opened
! Drive letters can change; verify the device and destination.

? What is the strongest basic evidence that a copied practice file is usable?
- [x] The destination file opens and shows the expected sentence
- [ ] A transfer progress bar started
- [ ] The destination folder has a reassuring name
- [ ] The drive has a large capacity
! Opening and inspecting the recovered content provides direct evidence of usability.

? What is a safe way to test restoring an older file?
- [ ] Delete every newer version first
- [ ] Restore over your only current copy
- [x] Restore into an empty practice folder and compare content
- [ ] Reset the entire computer
! An alternate restore folder avoids destroying current work.

? What does a backup log help record?
- [ ] Passwords and recovery codes
- [x] Completion status, scope, destination, and restore-test results
- [ ] Only the computer model
- [ ] A guarantee that a device can never fail
! A log documents verifiable backup activity; secrets should be stored securely elsewhere.

? A backup last completed Friday and work was edited on Tuesday. What should you conclude?
- [ ] Tuesday edits are certainly included
- [x] Friday backup may lack later changes
- [ ] All versions are automatically retained forever
- [ ] The file is definitely corrupted
! Recovery copies can only contain changes actually captured by a completed backup.

? Which is a common reason automatic backups may stop?
- [ ] Too many desktop icons
- [x] The backup drive is disconnected or full
- [ ] A file has a short name
- [ ] The laptop is using a trackpad
! Availability and capacity of the destination matter.

? What is Time Machine primarily associated with?
- [ ] Windows File Explorer search
- [x] Apple Mac backup and restoration
- [ ] Google Chrome bookmarks only
- [ ] Android screen rotation
! Time Machine is Apple's Mac backup tool.

? Which statement about iCloud Drive is accurate?
- [ ] It automatically archives every Mac system file indefinitely
- [x] It is a file syncing service, not automatically a complete independent Mac backup
- [ ] It is a Windows-only program
- [ ] It cannot synchronize documents
! iCloud Drive can sync documents but does not equal a full Mac backup.

? Which local Chromebook location may need an independent backup?
- [ ] Only the recycle-bin icon
- [x] Downloads under My files
- [ ] A printer settings screen
- [ ] The keyboard language menu
! Important items in local Downloads need deliberate protection beyond local device storage.

? Why should phone device backup and photo synchronization be checked separately?
- [ ] All mobile devices have identical storage
- [x] A device backup may exclude data handled by a syncing photo service
- [ ] Photos cannot be stored in cloud accounts
- [ ] Device backup always contains all online photos in duplicate
! Different services cover different phone data categories.

? What protects against some damage caused by ransomware to reachable backup drives?
- [ ] Leaving every drive permanently connected
- [ ] Relying on a file name that says secure
- [x] Maintaining a disconnected or otherwise isolated recovery copy
- [ ] Turning off all file extensions
! Separating backups from everyday system access reduces shared exposure.

? What should happen when ransomware is suspected?
- [ ] Connect the only clean backup drive to the affected computer
- [x] Seek authorized help and keep clean copies isolated
- [ ] Format all drives without review
- [ ] Delete every backup log
! Protect clean recovery media and follow appropriate incident-response procedures.

? What is the role of encryption in a backup plan?
- [ ] Guarantee that no file can be lost
- [x] Protect stored information from unauthorized access when keys are controlled
- [ ] Replace the need for recovery tests
- [ ] Increase the storage drive capacity
! Encryption can protect confidentiality; access credentials must also be recoverable.

? Which set of items belongs in a basic backup verification?
- [x] Destination, scope, last success, and sample restore
- [ ] Wallpaper, taskbar color, and speaker volume
- [ ] Only the number of folders
- [ ] Only the advertised drive speed
! The verification should check coverage, status, and a recoverable sample.

? Why should older backups not be deleted automatically when space is low?
- [ ] Older copies always contain viruses
- [x] They might be the only retained useful version
- [ ] All external drives have unlimited space
- [ ] Deleting backup files improves Wi-Fi
! Retention and the availability of newer valid backups must be confirmed first.

? Which response is appropriate if a restore test fails?
- [ ] Mark the entire backup as verified anyway
- [ ] Delete all original documents
- [x] Record the failure, preserve remaining copies, and investigate
- [ ] Immediately wipe the device
! A failed test is useful evidence that recovery is not yet confirmed.

? Which sequence best summarizes a dependable beginner backup routine?
- [ ] Delete, rename, assume, forget
- [x] Choose files, copy independently, verify completion, test restore
- [ ] Move all files to one USB drive and erase the laptop
- [ ] Enable one sync setting and stop checking
! A realistic routine chooses data, protects independent copies, checks completion, and demonstrates recovery.

:::

:::answer Show the quiz answer key with explanations
1. **B. To preserve a recoverable copy if working data is lost** — A backup provides a recovery path after loss, damage, or unwanted changes.
2. **A. The version normally edited in Documents** — The primary copy is the everyday working file.
3. **C. Copy and paste** — Copying creates another instance without intentionally removing the source.
4. **B. They share the same physical drive failure risk** — Three folders on one device are not separate media or failure locations.
5. **C. One offsite copy** — The 1 refers to a copy kept in a different physical location.
6. **B. An authorized external drive disconnected after a verified copy** — An unplugged protected drive is not normally reachable by the active computer.
7. **C. Which exact files and folders are included?** — Scope identifies the actual data categories and locations protected.
8. **A. Deletion can propagate to cloud and other synced devices** — Synchronization can propagate deletions; independent backups may remain unaffected.
9. **B. File History** — File History supports personal-file backups and recovery of earlier versions.
10. **A. Control Panel under System and Security** — Microsoft describes File History through Control Panel and System and Security.
11. **D. Its account-based scope does not include every file, app, or external drive** — Windows Backup helps preserve selected settings and files; it is not a complete image of all content.
12. **B. Cancel and investigate without formatting** — Formatting may erase access to existing information and is not part of ordinary backup practice.
13. **C. Windows key + E** — Windows key + E opens File Explorer.
14. **B. Drive identity, label or capacity, and intended destination** — Drive letters can change; verify the device and destination.
15. **A. The destination file opens and shows the expected sentence** — Opening and inspecting the recovered content provides direct evidence of usability.
16. **C. Restore into an empty practice folder and compare content** — An alternate restore folder avoids destroying current work.
17. **B. Completion status, scope, destination, and restore-test results** — A log documents verifiable backup activity; secrets should be stored securely elsewhere.
18. **B. Friday backup may lack later changes** — Recovery copies can only contain changes actually captured by a completed backup.
19. **B. The backup drive is disconnected or full** — Availability and capacity of the destination matter.
20. **B. Apple Mac backup and restoration** — Time Machine is Apple's Mac backup tool.
21. **B. It is a file syncing service, not automatically a complete independent Mac backup** — iCloud Drive can sync documents but does not equal a full Mac backup.
22. **B. Downloads under My files** — Important items in local Downloads need deliberate protection beyond local device storage.
23. **B. A device backup may exclude data handled by a syncing photo service** — Different services cover different phone data categories.
24. **C. Maintaining a disconnected or otherwise isolated recovery copy** — Separating backups from everyday system access reduces shared exposure.
25. **B. Seek authorized help and keep clean copies isolated** — Protect clean recovery media and follow appropriate incident-response procedures.
26. **B. Protect stored information from unauthorized access when keys are controlled** — Encryption can protect confidentiality; access credentials must also be recoverable.
27. **A. Destination, scope, last success, and sample restore** — The verification should check coverage, status, and a recoverable sample.
28. **B. They might be the only retained useful version** — Retention and the availability of newer valid backups must be confirmed first.
29. **C. Record the failure, preserve remaining copies, and investigate** — A failed test is useful evidence that recovery is not yet confirmed.
30. **B. Choose files, copy independently, verify completion, test restore** — A realistic routine chooses data, protects independent copies, checks completion, and demonstrates recovery.
:::

### Exit task: Explain what makes a backup dependable

Without looking back, complete these five statements:

1. A backup is an __________ copy kept for recovery.
1. Three differently named folders on one internal disk do __________ satisfy the spirit of 3-2-1.
1. A synchronized cloud file may share __________ and unwanted edits among devices.
1. During a safe restore test, I select a __________ folder to avoid overwriting current work.
1. I know my backup works only after verifying completion and successfully __________ a sample.

:::answer Show the exit-task model responses
1. **Independent** or **protected recovery**.
1. **Not**; the folders share one device-failure risk.
1. **Deletions** or **changes**.
1. **Separate** or **alternate practice**.
1. **Restoring and opening**.
:::

## 11. MGU Library connections and next steps

This lesson completes the nine-part **File and Folder Skills** course. The central objective is practical competence: learners should know where valuable files live, how to make copies without deleting originals, and how to prove that an independent recovery copy can be used. The following links provide course review and official platform documentation. Follow the guidance for your own device edition and account; school and workplace policies can differ.

### Review the full MGU course

- [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) — overview of the complete nine-lesson sequence.
- [Files vs Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/files-vs-folders/) — identify the items you want to protect.
- [Where Files Are Saved](/department/computer-science/basic-computer-skills/file-and-folder-skills/where-files-are-saved/) — check working locations and cloud destinations.
- [Creating Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/creating-folders/) — create safe practice and restore destinations.
- [Naming Files Clearly](/department/computer-science/basic-computer-skills/file-and-folder-skills/naming-files-clearly/) — choose understandable names for dates and versions.
- [Copy, Move, Rename, Delete](/department/computer-science/basic-computer-skills/file-and-folder-skills/copy-move-rename-delete/) — copy without unintentionally relocating or deleting originals.
- [Finding Lost Files](/department/computer-science/basic-computer-skills/file-and-folder-skills/finding-lost-files/) — use a systematic recovery search before restoring.
- [Downloads, Desktop, and Documents](/department/computer-science/basic-computer-skills/file-and-folder-skills/downloads-desktop-and-documents/) — inspect locations that may or may not be backed up.
- [USB Drives and External Storage](/department/computer-science/basic-computer-skills/file-and-folder-skills/usb-drives-and-external-storage/) — identify external drives and transfer files safely.

### Official backup and recovery documentation

- [Microsoft Support: Backup and restore with File History](https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history) — Windows 11 setup, covered folders, and restoring earlier file versions.
- [Microsoft Support: Back up and restore with Windows Backup](https://support.microsoft.com/en-us/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup) — selected Windows settings and OneDrive-related backup capabilities.
- [Microsoft Support: Backup, restore, and recovery in Windows](https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-restore-and-recovery-in-windows) — distinguishes file backup from system-recovery methods.
- [Microsoft Support: Restore a previous version of a file stored in OneDrive](https://support.microsoft.com/en-us/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive) — version history for eligible OneDrive files.
- [Apple Support: How to back up your Mac](https://support.apple.com/en-us/102307) — Time Machine and other Mac approaches.
- [Apple Support: Restore items backed up with Time Machine](https://support.apple.com/guide/mac-help/restore-files-mh11422/mac) — recovery of an individual item.
- [Apple Support: Backup methods for iPhone or iPad](https://support.apple.com/en-us/108771) — iCloud versus computer backups and key differences.
- [Google Chromebook Help: Open, save, or delete files](https://support.google.com/chromebook/answer/1700055?hl=en) — local files, Google Drive, and external storage.
- [Google Android Help: Back up or restore data on your Android device](https://support.google.com/android/answer/2819582?hl=en) — supported device-data backup and restoration.
- [Google Drive Help: Recover a deleted file](https://support.google.com/drive/answer/1716222?hl=en) — cloud Trash and recovery limitations.
- [CISA: Data Backup Options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf) — plain-language 3-2-1 guidance and backup choices.

### Course completion and next steps

Completing the knowledge check is an instructional milestone, not proof that any device has been backed up. Before relying on your own backup arrangement, carry out these steps in the real environment with proper permission: identify your important folders; configure an approved independent destination; verify the latest successful copy; restore a harmless sample to an alternate folder; and document what is still excluded.

[← Previous lesson: USB Drives and External Storage](/department/computer-science/basic-computer-skills/file-and-folder-skills/usb-drives-and-external-storage/) · [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) · [Basic Computer Skills program](/department/computer-science/basic-computer-skills/)

> **Final lesson completion checklist:** I can explain why backups matter; distinguish copies, sync, and backup; name priorities and scope; outline a 3-2-1 strategy; perform a harmless verified copy; interpret Windows and other-device backup options; restore into a separate location; check date and status; protect private information; and maintain a realistic testing schedule.

:::terms
backup | Backup | A separate, maintained copy of information intended to make recovery possible after loss or damage. |
file | File | A named unit of stored information, such as a document, photograph, or recording. |
primary-copy | Primary copy | The working version of a file that someone normally edits or uses. |
backup-copy | Backup copy | A separate recovery copy maintained to replace or inspect lost or damaged information. |
failure-scenario | Failure scenario | A specific event that could interrupt access to information, such as theft, deletion, or disk failure. |
backup-plan | Backup plan | A written or understood procedure explaining what is protected, where copies are stored, when backups run, and how recovery is tested. |
three-two-one-rule | 3-2-1 rule | A common framework recommending three total copies, two different storage media or approaches, and one offsite copy. |
offline-backup | Offline backup | A backup that is not routinely connected or accessible to the working device or network. |
offsite-backup | Offsite backup | A recovery copy kept in a physically different place from the primary device or location. |
backup-frequency | Backup frequency | How often a backup is run or a new recovery copy is created. |
backup-scope | Backup scope | The exact files, folders, locations, accounts, or categories that a backup covers. |
version | Version | The saved state of a file at a particular point in time. |
version-history | Version history | A feature providing access to earlier retained states of a file when available. |
retention | Retention | The rule or duration governing how long backed-up copies and previous versions remain available. |
source-folder | Source folder | The location from which files are copied or transferred. |
destination-folder | Destination folder | The location to which a file is copied, moved, or restored. |
drive-letter | Drive letter | A Windows label such as E: assigned to a storage volume and potentially changed later. |
backup-log | Backup log | A record of backup dates, scope, destinations, completion results, and recovery tests. |
file-history | File History | A Windows feature for keeping recoverable copies of personal-file versions on configured external or network storage. | https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history
windows-backup | Windows Backup | A Windows feature supporting selected account-based file and settings protection, often with OneDrive integration. | https://support.microsoft.com/en-us/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup
onedrive | OneDrive | A Microsoft cloud file service that can synchronize designated folders and offer file recovery features subject to limits. |
cloud-placeholder | Cloud placeholder | A file entry shown locally whose contents may still require downloading from a cloud account. |
system-restore | System Restore | A Windows recovery feature affecting selected system changes; it is not a personal-file backup. |
system-image | System image | A broad saved snapshot of a computer or disk used in supported full-system recovery workflows. |
restore | Restore | To retrieve saved data from a backup or recovery source into a usable location. |
alternate-restore-location | Alternate restore location | A different folder or device used to recover and inspect data without replacing the current working version. |
integrity | Integrity | The property of information remaining accurate, complete, and usable for its intended purpose. |
rotation | Backup rotation | Maintaining multiple backup versions or media rather than relying on a single overwritten copy. |
time-machine | Time Machine | The built-in Apple Mac backup and restore tool, commonly used with external storage. | https://support.apple.com/en-us/102307
icloud-drive | iCloud Drive | Apple's cloud file synchronization service for selected documents and folders. |
chromebook | Chromebook | A computer running ChromeOS, with local files and optional account-based cloud storage. | https://support.google.com/chromebook/answer/1700055?hl=en
iphone-backup | iPhone or iPad backup | A backup of supported mobile-device information and settings, which may differ from separately synchronized content. | https://support.apple.com/en-us/108771
google-photos | Google Photos | A service for organizing and, when enabled, backing up selected photos and videos to an account. |
encryption | Encryption | The use of protective encoding that requires an appropriate key or credential to access stored content. |
multi-factor-authentication | Multi-factor authentication | Sign-in protection that requires an additional verification factor alongside a password. |
ransomware | Ransomware | Malware that can lock or encrypt access to files and may affect accessible backups. |
:::
