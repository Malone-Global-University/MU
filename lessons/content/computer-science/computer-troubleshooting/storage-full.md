Basic Computer Skills / Computer Troubleshooting Basics

## Lesson 7: Storage Full

A computer may warn that its storage is nearly full just as you try to save a school assignment, download a document, install an update, or record a video. A phone may refuse to take another photograph. A Chromebook may display a message that some locally stored data could be removed to make room. These warnings can be inconvenient, but they do not mean you must immediately purchase a new computer, erase important files, or download a mysterious cleaning program.

This lesson teaches a careful way to investigate a storage problem. You will learn how to see **how much space is available**, identify what is occupying it, distinguish files that can be replaced from files that are irreplaceable, and choose a low-risk remedy. You will also learn why a cloud account, an external drive, a backup, and a computer's internal storage are not interchangeable. Practice activities are designed to work as written exercises; you do not have to delete anything to complete this lesson.

**Level:** Beginner · **Estimated study time:** 65–90 minutes · **Prerequisites:** Lessons 1–6 recommended · **Practice equipment:** Optional Windows 11 computer, Mac, Chromebook, iPhone, iPad, or Android device; paper and pencil are sufficient. No file deletion, purchase, or new software is required.

> **Essential idea:** A [[storage-warning|storage warning]] is a signal to **measure, protect, inspect, and then act**. Start by identifying where space is low. Protect important information before deleting or relocating it. Make one reversible change at a time, and confirm that it helped.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference between [[storage|storage]], [[memory-ram|memory (RAM)]], and [[cloud-storage|cloud storage]].
1. Read basic used-space and available-space indicators without confusing them with file counts or network speed.
1. Identify common sources of storage use, including photos, videos, downloaded files, apps, and offline media.
1. Locate built-in storage information on Windows 11, macOS, ChromeOS, and mobile devices.
1. Plan a low-risk cleanup that protects important files, backups, cloud-synced material, and shared information.
1. Recognize dangerous shortcuts such as indiscriminate deletion, untrusted cleanup tools, and removing system files.
1. Record what was checked, which action was taken, and whether the available space changed.

### On this page

- [1. Recognizing the warning](#1-what-does-storage-full-mean)
- [2. Sources of storage use](#2-what-uses-storage-space)
- [3. Protecting information first](#3-protect-important-files-before-cleanup)
- [4. Checking storage by device](#4-find-storage-information-on-your-device)
- [5. Safe ways to free space](#5-use-safe-cleanup-methods-in-the-right-order)
- [6. Practical troubleshooting workflow](#6-follow-a-repeatable-storage-troubleshooting-workflow)
- [7. Guided practice](#7-guided-practice-seven-activities)
- [8. Common mistakes](#8-common-mistakes-and-misconceptions)
- [9. Vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-further-learning-and-next-steps)

## 1. What does storage full mean?

### Storage holds files and software over time

[[storage|Storage]] is the place where a device keeps information that needs to remain after it is switched off. This includes the operating system, installed [[application|applications]], documents, photographs, videos, and other files. Many computers use a [[solid-state-drive|solid-state drive (SSD)]] or another type of [[storage-device|storage device]]. Phones and Chromebooks often use built-in flash storage. Some computers also use [[hard-disk-drive|hard disk drives (HDDs)]]. Although their hardware differs, the basic idea is the same: a device has a finite amount of space for saved information.

An example: Imagine a computer with 256 [[gigabyte|gigabytes (GB)]] of advertised storage. The operating system, installed apps, reserved areas, and personal files occupy part of it. The amount left for new information is the [[available-space|available space]]. The total shown by an operating system may differ slightly from the number printed on a product box because of differences in how capacity is counted, formatting, recovery areas, and other overhead. This is not necessarily a defect.

A nearly full drive can prevent additional files from saving. It can also complicate updates, downloads, installations, temporary work, and certain app operations. How much free space is enough depends on the device and task. A single percentage is **not** a reliable universal threshold for every computer. An operating-system update may require substantially more working room than saving a short text document.

### Storage is not the same as memory

People often say, “My computer is out of memory,” when they really mean that storage is full. In everyday speech that is understandable, but the distinction matters during troubleshooting. [[memory-ram|RAM]] is fast, temporary working memory used while apps run. Storage retains documents and installed programs after shutdown. A shortage of RAM can make a computer sluggish or cause apps to struggle, but deleting a photograph does not physically add RAM. Conversely, closing browser tabs may free some RAM without making a meaningful difference to saved-file storage.

| Resource | Primary purpose | Typical warning or symptom | Example response |
| --- | --- | --- | --- |
| Internal storage | Keeps saved files, apps, and operating-system data | Cannot save a file or install an update | Inspect storage use and safely reclaim space |
| RAM | Holds active work while programs run | Apps become slow or stop responding | Close unneeded apps or restart normally after saving |
| Cloud storage quota | Limits how much data a cloud account can store | Upload, cloud backup, or synchronization fails | Review the cloud account's usage and plan |
| Network connection | Transfers data between devices and online services | Uploads or downloads time out | Check connection and service availability |
| Battery or power | Supplies electrical energy | Device shuts off or will not start | Check charging and power safely |

These problems sometimes occur together. For instance, an app downloading large files may use network bandwidth and fill local storage. A system with very little free disk space may also become less responsive. Still, fixing the right problem requires identifying which resource is actually constrained.

### Used space, free space, and total space

A storage screen may show a colored chart or text such as **200 GB used of 256 GB**. In this simplified example, about **56 GB** remains. The exact figures displayed on your device may use decimal or binary units and may update after the system recalculates file categories. Treat the screen as the best available starting point, not as a promise that every byte is directly available for personal files.

For another example, a 128 GB device with 122 GB used has only about 6 GB available. That may be enough for a small letter, but insufficient for a large app, a media recording, or certain updates. You should not assume that another device with 6 GB available has the same practical needs: device type and workload differ.

> **Rule:** Record **used**, **available**, and **total** space when possible. A statement such as “My disk is red” is less useful than “The internal drive has about 4 GB free, and the warning appeared during a system update.”

### Recognize the exact message

Storage problems may appear in different forms:

- “Low disk space” or “Not enough space” when installing or saving.
- “Your startup disk is almost full” on a Mac.
- “Device is low on space” on a Chromebook.
- “iPhone Storage Full” or a similar warning about local device storage.
- “Cloud storage full” or “Account storage nearly full” from a synchronization or backup service.
- An app refusing to save, export, download, or update until more storage becomes available.

The message's wording and location matter. A cloud-storage warning concerns an online account, not automatically the computer's internal drive. A USB drive can be full while the computer's main storage still has substantial room. A phone's photo library can use local storage, cloud storage, or both depending on settings.

### Think in terms of location

When storage is reported as full, ask: **Which storage?** A folder on the computer, the main internal drive, an SD card, a USB drive, a cloud account, an external backup disk, or an organizational network location may each have separate limits. The device may display more than one capacity. Cleanup must target the location that is actually constrained.

Do not treat “storage” as one universal bucket. Moving a file from one folder to another **on the same drive** generally does not increase free space on that drive. Copying a file to another device without removing the original does not free space either. Moving a verified, safely backed-up file to a separate destination can free local space, but only after the original is no longer on the constrained drive and any applicable Trash or Recycle Bin has been handled.

### When low space becomes urgent

A full drive can interfere with important work. If the computer cannot save an active document, avoid unnecessary software installations or broad cleanup experiments. Save a copy to a trusted location if possible, and contact authorized support when the device is managed by a school or employer. If you are in the middle of an operating-system update, do not abruptly interrupt the process just to recover space. Follow the platform's official instructions.

If the problem follows a suspicious message urging payment for a “disk cleaning license,” close the prompt rather than accepting the claim as genuine. Verify storage status in the device's built-in settings. Storage warnings are common targets for deceptive advertisements and unwanted software.

## 2. What uses storage space?

### A drive is shared by many categories

Storage is consumed by more than personal documents. The [[operating-system|operating system]] occupies space, as do installed applications, app data, system updates, temporary files, user profiles, browser data, downloaded music or films, photos, videos, and email attachments saved locally. Some categories are visible as folders, while others are managed internally by the system.

A storage summary may show labels such as **Apps**, **Documents**, **Pictures**, **Temporary files**, **System**, **Other users**, or **System Data**. Different manufacturers and software versions group these categories differently. The categories are helpful clues, not an invitation to erase an unfamiliar folder.

| Category | Typical contents | Beginner-friendly investigation | Important caution |
| --- | --- | --- | --- |
| Photos and videos | Camera files, screen recordings, edits | Review size and whether originals are protected | Cloud-synced deletion may affect other devices |
| Downloads | Documents, installers, ZIP files, media | Sort by date and inspect recognizable names | A download may be the only remaining copy |
| Applications and games | Installed programs and supporting files | Check built-in app-size listings | Uninstalling can remove settings or local app data |
| Offline media | Saved music, video, maps, lessons | Review each app's download controls | Offline access may disappear |
| Browser data | Cached web content, site data, downloads | Check browser storage carefully | Clearing site data can sign you out or remove offline work |
| Temporary files | Working files and cached system content | Use built-in cleanup recommendations | Some selections are not reversible |
| Backups and archives | Device backups, duplicates, ZIP archives | Confirm age, usefulness, and another verified copy | An old backup may be the only recovery option |
| System and reserved space | OS components, updates, recovery information | Observe the category and consult support | Do not manually delete system folders |

### Large files and large numbers of small files

One video recording may occupy several GB. Thousands of small photographs, PDFs, chat attachments, and app files can also add up. A folder that looks small because it contains only a few items can still be large if those files are high-resolution videos or installers. A folder containing hundreds of text documents may occupy relatively little space.

A [[file-size|file size]] is a more useful indicator than the number of filenames alone. A short plain-text note is generally far smaller than a movie. The amount used by a photo varies with image format, resolution, and compression. Two videos of identical length may have different sizes depending on recording settings and encoding.

### Downloads are a common starting point, not a guaranteed trash pile

The [[downloads-folder|Downloads folder]] often contains items that were needed once, such as software installers, copies of tax forms, exported documents, or attachments. It is sensible to inspect this folder early because its contents are usually easy to recognize. However, it is unsafe to delete everything automatically. A file called `final-application.pdf` or `family-photos.zip` may be valuable even if it is old.

A browser's **download history** is a list of downloads performed. Clearing that list does not necessarily remove the downloaded files themselves. Conversely, deleting a downloaded file can make it unavailable even though the browser history still shows its earlier download. Learn which operation you are performing.

### Apps include more than their visible program icon

An [[application|app]] may install program files and also store [[app-data|app data]]: downloads, databases, saved projects, game progress, local drafts, or account settings. A removal operation may erase some of that material. Do not assume that signing in again will restore every locally stored file. Many apps synchronize some information, but not all apps do so and synchronization can fail.

If an app appears unusually large, first ask whether it stores offline media or work. A streaming app with downloaded movies may let you delete those downloads individually without uninstalling the app. A photo-editing app may store projects you should export before removal. A learning app may have offline lessons you need for travel or unreliable internet access.

### Temporary files and caches have real purposes

A [[cache|cache]] is stored material intended to make repeated operations faster or more convenient. A browser may cache page content; an app may cache images or media; an operating system may keep temporary installation or diagnostic files. Some cached data is safe to regenerate, but other locally stored information may hold offline changes, sessions, or unsent work. Be cautious about tools that label all “junk” as safe to erase.

Use approved, built-in cleanup features that show what category is being removed and allow review. Do not manually delete unknown hidden directories, application-support folders, or system files to chase a few gigabytes. A technical guide for an advanced administrator is not automatically appropriate for a beginner using a shared computer.

### Other users may consume storage

On a shared computer, multiple [[user-account|user accounts]] can each have local files, downloads, app data, and other information. You may have permission to inspect your own files but not permission to delete someone else's data. On a Chromebook, other user profiles may occupy storage. On a work computer, an administrator may manage storage allocation, security software, and retention requirements.

If another person's data appears to occupy space, do not remove their profile or files without authorization. Explain the situation to the owner or support team. Even when deleting a profile leaves the online account intact, local information that was not synchronized may be lost.

### A change in space is a clue, not proof

Suppose a computer had 40 GB available last week and only 8 GB today. A large game update, a newly imported video collection, a local backup, or offline downloads might explain the change. But do not immediately blame the newest app. Check the built-in storage categories and recent files. Measurements help prioritize which area to inspect. They do not independently establish responsibility.

## 3. Protect important files before cleanup

### The first objective is preventing data loss

Freeing storage is useful only if you do not lose information that matters. A document representing hours of work can be more valuable than the small amount of space it occupies. A family photograph may be irreplaceable; a downloaded installer may be obtainable again. Before using any Delete, Uninstall, Erase, Empty, or Reset command, ask what could be lost and how you would recover it.

A [[backup|backup]] is a separate copy kept so that a lost or damaged original can be restored. Merely having an item appear inside a cloud-synced folder does not necessarily mean you have a separate recovery copy. A [[sync|synchronization service]] is designed to keep information aligned between locations, and deleting a synced file can propagate that deletion. Services may provide version history or a recovery bin, but their policies and retention periods vary.

> **Safety checkpoint:** Before deleting important information, confirm that there is a usable second copy in a separate location and, for truly important information, that you can open or restore it. If you cannot verify recovery, postpone deletion.

### Distinguish backup, sync, and transfer

| Operation | Basic meaning | What it accomplishes | What it does not prove |
| --- | --- | --- | --- |
| Backup | Keep a separate restorable copy | Can support recovery after loss | That the copy is complete unless tested |
| Synchronize | Keep information aligned across locations | Keeps files available across approved devices | That deleted or overwritten files will remain recoverable |
| Copy | Make a second file in another location | Creates an additional instance | That the copy is readable or independent of the same failing device |
| Move | Relocate the file, often removing its old location | May reclaim space on the original drive | That a separate recovery copy still exists |
| Online-only file | Keep cloud content without the full local copy | Can reduce local storage use | That the file is usable without internet access |
| Archive | Package or retain information for future use | Helps organize older records | That an archive is a reliable or verified backup |

A **copy on the same failing drive** is not adequate protection against that drive failing. External drives, secure cloud backup services, and organizational backup systems may serve as additional destinations, but each has limitations. You should protect backups with appropriate account security and, where needed, encryption and access controls.

### Think about what the file represents

Not all files have equal replacement cost. Consider three examples:

- A training video downloaded from a trusted service may be easily downloaded again, subject to account access and rights.
- A completed résumé saved in only one local folder may be difficult to reconstruct exactly.
- An original family video may be impossible to replace once deleted and removed from every backup.

Sort uncertain files into **keep**, **review**, and **replaceable only after verification**. Do not let a storage warning rush you into treating every old file as disposable. Where legal, school, or business retention rules apply, those rules take priority over convenience.

### Understand the Recycle Bin and Trash

On many Windows computers, deleting ordinary local files through File Explorer places them in the [[recycle-bin|Recycle Bin]], from which they may be restored until permanently removed. On a Mac, files moved to [[trash|Trash]] generally remain there until Trash is emptied. The actual behavior depends on the location, file size, app, settings, and deletion method. Some deletions bypass these recovery areas entirely.

Putting files into the Recycle Bin or Trash is **not** the same as permanently freeing all their occupied space. On a Mac, space typically does not become available until the Trash is emptied. Windows may likewise count many deleted items as occupying disk space while they remain in the Recycle Bin. Emptying or permanently deleting is harder or impossible to undo. Review the contents first, especially if you have been moving files there during several days of work.

### Cloud-synced folders require special care

Services such as OneDrive, iCloud Drive, and Google Drive can provide ways to keep some items online and reduce locally downloaded copies. But **deleting** a synced document is not the same action as making a verified cloud file **online-only** or **removing its local download**. The first may delete the document from other connected devices; the second may preserve it in the cloud while reducing local use.

For example, OneDrive Files On-Demand can keep cloud files visible in File Explorer without downloading their full contents. Its **Free up space** command may make an appropriately synchronized file online-only. Before using this function, verify that the file is fully uploaded and available through the account. An item marked **Always keep on this device** is intended to remain available offline and may consume local storage.

On a Mac, iCloud's storage optimization may keep full-resolution originals in iCloud while managing local copies when needed. This is not a substitute for understanding iCloud storage limits and recovery. Deleting a photo from a synchronized photo library can remove it from other synchronized devices. The safest approach is to review the service's own settings and verify valuable items before changing where originals are stored.

### Check permissions and ownership

A school or employer may require that files remain within approved storage locations. A cloud service may not be authorized for student records, customer documents, or confidential business data. Do not transfer work files to a personal account just to create space. Use the approved backup, storage, and support policies for managed devices.

A family-shared device deserves similar respect. Ask before removing another person's applications, downloaded media, accounts, or folders. Low storage does not override privacy and ownership obligations.

### A safe three-question gate

Before deleting or moving a file, answer these questions:

1. **Do I know what it is?** Identify its source, contents, and whether an app depends on it.
1. **Can I recover it?** Confirm a separate verified copy or a reliable, authorized way to replace it.
1. **Am I authorized?** Make sure it belongs to you or that the owner or organization has approved the change.

If any answer is **no** or **I am not sure**, inspect more carefully or ask for help. A storage problem usually permits measured action; it rarely justifies guessing with someone else's data.

## 4. Find storage information on your device

### Start with built-in controls, not advertisements

Windows, macOS, ChromeOS, iPhone, iPad, and Android provide ways to inspect storage. Their labels and exact locations may change with software versions, languages, manufacturer customizations, or device management. If a step looks different on your device, search the device's **Settings** for *storage* or consult its official support page. Observation is the objective here. You do not need to select a cleanup button, grant an app permission, or install anything to learn what is using space.

### Windows 11: identify the affected drive

On Windows 11, open **Start → Settings → System → Storage**. Windows displays information about the main system drive and categories such as apps, temporary files, and other storage use. Depending on your version, you may find **Cleanup recommendations**, **Storage Sense**, and links to additional drives. You can also open **File Explorer → This PC** to inspect drives and their available space. Some devices have more than one drive or partition, so note the name and capacity of the drive that the warning concerns.

Use this observation-first procedure:

1. Open Settings and navigate to System → Storage.
1. Note the drive being summarized. Write down its approximate total, used, and free space if shown.
1. Review which storage categories are largest without selecting anything for deletion.
1. Look for the built-in **Cleanup recommendations** area if available, but do not confirm removal during the learning exercise.
1. If the warning refers to another drive, inspect that drive rather than assuming the main drive is the problem.
1. Close Settings after recording the result.

[[storage-sense|Storage Sense]] is a Windows feature for managing certain temporary data and, depending on configuration, some local copies of cloud files. Microsoft's official guidance notes that the normal configuration does not automatically clean the Downloads folder unless you specify it. This is a **settings-dependent behavior**, not a guarantee that every computer is configured the same way. Check the selections and time periods before enabling or changing automated cleanup.

**Windows caution:** The Temporary files or cleanup screens may include **Downloads**, **Recycle Bin**, and **Previous Windows installation(s)**. These categories can contain valuable files or recovery options. Removing a previous Windows installation can eliminate the ability to roll back to that version. The label “recommended” does not replace reading the selection carefully. Do not delete Windows folders, hidden system files, or update components manually.

### macOS: read the storage categories

On current macOS versions, open the **Apple menu → System Settings → General → Storage**. The Storage area displays used space, available space, and a breakdown by content category. Depending on the installed macOS version, additional information or recommendations may be available for applications, documents, photos, and other categories. Earlier versions can place the storage summary under **About This Mac → Storage**.

Use these steps for a safe inspection:

1. Open the Apple menu and select System Settings.
1. Choose General and then Storage.
1. Allow the categories to finish calculating if the system is still updating the display.
1. Record available space and the largest listed category.
1. Inspect recommended options as descriptions, not automatic actions.
1. If you choose to investigate documents or applications later, verify ownership and backup status before removing anything.

[[system-data|System Data]] is a broad category that may include caches, logs, temporary content, and files not assigned to a more specific category. Its size can fluctuate. A large System Data figure does **not** mean that you should find and delete whatever is inside the system's private folders. Storage summaries are not precise maps of which files are safe to erase.

**Mac caution:** Moving files to Trash generally does not provide the final space benefit until Trash is emptied. Emptying Trash is a deletion action, not a harmless “refresh.” If an app or photo library uses iCloud, understand synchronization and optimization before changing files or settings. Follow Apple's official guidance for moving large photo or video libraries; dragging an unknown library folder into the Trash is not a safe shortcut.

### Chromebook: protect locally stored files

On a Chromebook, select the **time → Settings → System preferences → Storage management**. The storage information may describe usage in Downloads, offline files, browsing data, Android storage, and other users. Google advises that, when space becomes severely limited, a Chromebook may automatically remove some local downloaded files or other local data. This is one reason important downloads should not be kept only in an unprotected Downloads folder.

Use this inspection sequence:

1. Open Settings from the time area.
1. Navigate to Storage management; use the Settings search function if the interface differs.
1. Note the total and available local space.
1. Compare Downloads, offline files, browsing data, and app-related storage.
1. Identify any valuable local files that have not been backed up or moved to an authorized durable location.
1. Stop before deleting local files, clearing browser data, or removing another user's account.

A Chromebook is not necessarily “cloud-only.” It may store real local documents, pictures, app data, and offline materials. Even if you often work in Google Drive, a newly downloaded file may remain in Downloads until you move or save it elsewhere. A file available through Google Drive may be marked for offline use, which can consume local space. Always verify that a valuable file is safely stored and accessible through the intended service before relying on local cleanup.

**Chromebook caution:** Deleting local files or a local user profile may not be reversible. Removing a profile from a device does not delete the entire Google Account, but local data that was not synchronized can be lost. Do not use **Powerwash** or other factory reset processes as a beginner-level space-cleanup technique.

### iPhone and iPad: separate apps from photos

On an iPhone or iPad, open **Settings → General → iPhone Storage** or **iPad Storage**. The device may display a storage chart, recommendations, and an app list. Some recommendations require confirmation. Large app entries may include an app and its documents or data, not only the software needed to launch it.

You may encounter two different actions:

- **Offload App:** Removes the app itself while generally retaining its documents and data for later reinstallation. Exact behavior depends on the app and conditions; verify before proceeding.
- **Delete App:** Removes the app and associated local data. Data that was safely synchronized to an account may still exist there, but do not assume all content is recoverable.

These actions are not equivalent. For practice, locate the options without choosing them. Photos and videos may also occupy significant space. If iCloud Photos is used, deleting an image from the photo library can synchronize the deletion. Optimization features can reduce local space used by full-resolution items, but depend on cloud storage, settings, and connectivity. Confirm that originals are safe before changing photo storage arrangements.

### Android: look at storage and app details

On many Android devices, open **Settings → Storage** or search Settings for *storage*. Manufacturer versions differ; some show categories such as images, videos, apps, audio, documents, and system files. You may also be able to open **Settings → Apps → [app name] → Storage** to see the space attributed to a specific app. These paths are examples, not universal menu names.

Some apps offer **Clear cache** and **Clear storage**, **Clear data**, or similar operations. These are not interchangeable. Clearing an app's cache may remove temporary files, although you might need to redownload content. Clearing app storage/data can reset the app and remove accounts, settings, drafts, downloads, or other local information. Never treat a prompt containing the word “clear” as automatically low risk.

Android devices may also use an [[sd-card|SD card]], but not every device supports one, and not every app or system function can be moved there. Internal storage can still be low even if an SD card has free space. Removing an SD card abruptly while it is in use can damage files, and memory cards can fail. A separate card does not substitute for a verified backup.

### A cross-device comparison

| Device | Where to start | What to record | Do not do as a first step |
| --- | --- | --- | --- |
| Windows 11 | Settings → System → Storage | Free space, affected drive, large category | Delete system folders or select all cleanup options |
| macOS | System Settings → General → Storage | Free space and category breakdown | Empty Trash without reviewing its contents |
| Chromebook | Settings → System preferences → Storage management | Free local space, Downloads and offline usage | Powerwash or erase other users' data |
| iPhone or iPad | Settings → General → iPhone/iPad Storage | Available space and largest apps/categories | Delete apps or photos without recovery plan |
| Android | Settings → Storage, or Settings search | Available internal space and major categories | Clear all app data or use unknown cleaner apps |

### Reading a chart correctly

A category graphic may be color-coded, but do not guess solely from the color. Read the accompanying number and label. A category could include files that are not individually shown in a file manager. A storage chart can take time to refresh after changes. If the number changes slightly between checks, that does not necessarily mean a mistake; apps and systems generate temporary files in normal use.

Also distinguish **GB** (gigabytes) from **MB** (megabytes). In everyday decimal units, approximately 1,000 MB equals 1 GB. Operating systems may use slightly different counting conventions. For beginner troubleshooting, you only need to recognize that hundreds of MB usually represent less space than several GB.

## 5. Use safe cleanup methods in the right order

### Begin with decisions, not deletion

The goal is not to achieve the largest possible number of free gigabytes at any cost. The goal is to restore enough functional space for your current work while preserving data, settings, privacy, and access. A useful order is **observe → prioritize → verify → use built-in controls → test**.

An appropriate first improvement may be modest. Removing an unnecessary, easily replaced 2 GB offline video through its own app may solve a 1 GB shortage without touching important documents. Conversely, erasing 20 GB of unverified photographs may create serious permanent loss without addressing the actual location that is full.

### Level 1: close or finish unnecessary downloads

Check for large files you deliberately downloaded and no longer need. Open or identify the file before deciding. A completed installer for an app you have already installed may be replaceable from the developer's official website, but the installer may also be needed for offline deployment or a specific older version. Make the decision based on context, not file extension alone.

If an app is actively downloading or updating, allow the operation to finish or use the application's normal cancel procedure rather than deleting files it is currently using. Repeated failed downloads can produce partial files. Check the app's own download history and storage controls to determine whether a failed download left removable temporary content.

### Level 2: review media downloads in their original apps

Streaming and educational apps often maintain a list of downloaded movies, episodes, lessons, podcasts, music, or maps. These may be large and relatively easy to download again. Use the app's built-in **Manage downloads**, **Offline content**, or similar option when available. Confirm that the content is available for future download and that any offline access needs are understood.

Removing an offline movie from a streaming app generally does not cancel a subscription or delete the entire online library. However, availability and licensing may change. For school courses or work travel, offline materials may be critical. Keep what you need before a trip or deadline; defer unneeded content after the trip.

### Level 3: inspect duplicates deliberately

[[duplicate-file|Duplicate files]] are separate files containing the same information or apparent copies. A document named `notes (1).docx` may be a copy, but it could also have newer edits. Two photographs can look identical while having different image quality or metadata. Similar filenames alone do not prove duplicate content.

Compare file size, dates, location, and contents where feasible. Do not delete duplicates automatically with an unverified utility. If you discover a real redundant copy, ensure an intended master file and backup remain. Where software uses a managed photo library or catalog, use that software's own duplicate review rather than deleting files behind its back.

### Level 4: review built-in temporary-file recommendations

Operating systems provide cleanup interfaces that classify temporary data. For Windows, use **Settings → System → Storage → Cleanup recommendations** or review Storage Sense options carefully. On macOS, examine Storage recommendations or specific categories. On ChromeOS, inspect Storage management and app-level cleanup options. Each system's interfaces and labels can evolve, so use the currently displayed explanation.

A [[temporary-file|temporary file]] is not guaranteed to be worthless. In particular, **Downloads** may contain your only copy of something important; **Recycle Bin** and **Trash** may contain files you planned to restore; **Previous Windows installation(s)** may be necessary if you intend to roll back an update. Never click all checkboxes just because they appear under a cleanup heading.

### Level 5: uninstall applications you recognize and no longer need

A large game or unused application can occupy many GB. Before uninstalling, check whether its account, projects, save files, or locally stored information will be preserved. Some applications offer built-in export or backup tools. A managed computer may require administrator permission. For school and business devices, use approved installation and removal channels.

Uninstalling a program should not be confused with deleting a document created in that program. You may still need the program later to open the document. Before removing specialized software, confirm that required files will remain usable or that an approved replacement is available.

### Level 6: transfer older files after verified backup

An [[external-drive|external drive]] can provide additional physical storage, and an approved network or cloud service may be an appropriate destination. The transfer should follow a careful process:

1. Identify a file or folder to archive and confirm you are authorized to relocate it.
1. Choose a trusted destination with enough capacity and appropriate privacy protections.
1. **Copy** a small test item first, when practical, rather than immediately moving an entire library.
1. Confirm the copy completed and the destination copy opens successfully.
1. Confirm that a separate recovery copy exists if the file is important.
1. Only then consider removing the original local copy through an appropriate method.
1. Record the new location so that you can find it later.

External storage has its own risks: damage, theft, loss, accidental unplugging, and device failure. When data is sensitive, use organization-approved encrypted storage and access rules. Do not place business or academic records on an unauthorized personal account or portable device.

### Level 7: consider online-only content carefully

If your system and cloud service support [[files-on-demand|files on demand]] or [[online-only|online-only files]], you may be able to reclaim local space while preserving content in a synchronized service. Examples include OneDrive's Free up space operation and platform-supported optimization features. However, the correct procedure depends on the provider and whether upload/synchronization is complete.

Before reducing a local copy, check:

- The file has successfully uploaded to the correct account or authorized shared workspace.
- You can open it from that destination.
- You have reliable internet access when you expect to need it.
- You understand any offline-access setting and whether it may redownload automatically.
- Confidential material is stored in a location approved by its owner.
- Valuable information has an independent backup where appropriate.

A file that appears in a cloud folder while the account is out of space or synchronization is paused may **not** be safely uploaded. Check the actual status, not just the icon or folder name.

### Actions beginners should avoid

| Tempting shortcut | Why it is risky | Better action |
| --- | --- | --- |
| Delete everything in Downloads | Important originals may be present | Review file names and contents individually |
| Select every temporary-file checkbox | Some selections may remove recovery options or downloads | Read each category and deselect anything uncertain |
| Empty Trash or Recycle Bin immediately | Restorable items become harder or impossible to recover | Inspect contents and confirm another copy |
| Delete folders called System, Windows, Library, or AppData | Can damage the operating system or applications | Use official cleanup tools, or get support |
| Install a pop-up “PC cleaner” | May introduce malware, fees, or harmful changes | Use built-in storage controls and trusted vendor guidance |
| Delete synchronized cloud files | May delete them from all connected devices | Use verified online-only/local-copy controls instead |
| Run a factory reset | Can erase accounts and files | Escalate after low-risk checks; back up first if a reset is ever authorized |
| Remove another user's profile | Local data may be lost | Ask the owner or administrator |
| Clear all app data | May delete drafts, settings, and offline content | Examine cache and data descriptions separately |
| Buy more storage before diagnosing | May not address the constrained drive or cloud quota | Identify which location is full first |

### What about third-party disk analyzers?

Advanced tools can visualize which folders occupy a drive, but they can also expose private data or require permissions. This beginner lesson does not require an analyzer. Prefer built-in settings and approved support procedures. If your organization provides an authorized tool, follow its instructions and privacy rules. Never download a cleaner because of a website advertisement claiming your computer is in danger.

## 6. Follow a repeatable storage troubleshooting workflow

### The six-step method

Use the same process whenever storage becomes a problem. It works on a laptop, a phone, or a shared desktop, although exact controls differ.

1. **Recognize and record.** Write down the message, application, action attempted, and when the problem appeared.
1. **Locate the constraint.** Determine whether local internal storage, an external disk, or a cloud account is full.
1. **Measure.** Use the device's built-in storage interface to record available space and the largest categories.
1. **Protect.** Identify valuable or shared information and confirm permissions and recovery copies before cleanup.
1. **Change one low-risk item.** Prefer a recognized, replaceable offline download or a clearly understood built-in recommendation.
1. **Verify and document.** Recheck available space, retry the original task, and stop if the problem is resolved.

**Important:** A safe test may consist entirely of observation. When data ownership, backup status, or deletion impact is unclear, the next correct step is asking for help rather than experimenting.

### A decision guide for common symptoms

| What happened | Next question | Low-risk next step | Escalate when |
| --- | --- | --- | --- |
| Cannot save a document | Is the destination local, cloud, or removable? | Inspect that destination and try an approved alternate save location | No safe destination or backup exists |
| Update says insufficient space | How much space does the updater request? | Review official platform cleanup recommendations | Update is managed or space cannot be reclaimed safely |
| Photo or video cannot be captured | Is device storage low or is the app failing? | Inspect storage and recent media without deletion | Valuable media or sync status is uncertain |
| Cloud says quota exceeded | Which account and plan is affected? | Open that service's official quota screen | Account is managed or storage changes require payment approval |
| Computer is suddenly much slower | Is there also a low-space warning? | Check free space plus active app and resource use | Crashes, drive errors, or repeated freezing occur |
| External USB drive is full | Which drive is the saving destination? | Inspect its capacity and identify files already archived | Drive is damaged or contains protected information |
| Device repeatedly reports full space | Does free space quickly disappear again? | Compare categories over time and record the pattern | Problem persists after one verified safe action |
| App update will not install | Is there a specific storage error? | Check app/system requirements and available space | Error continues or data could be lost |

### Walkthrough: a laptop cannot install an update

Imagine a Windows laptop displaying an update notice: **Not enough free space**. A learner opens Settings → System → Storage and sees that the main drive has 3 GB available. The learner notices that downloaded training videos occupy several GB inside a trusted learning application. They confirm that these videos are no longer needed offline and can be downloaded again from their account. They remove one unneeded video using the app's official download control, then revisit Storage to see whether free space increased.

Next they retry the authorized update. If the update still requires more room, they return to official cleanup recommendations and ask for help if the remaining candidates are uncertain. They do **not** select Previous Windows installation(s) merely because it appears in a list. This response is systematic: observe, identify, make one understood change, measure, and retry.

### Walkthrough: a shared Chromebook displays a warning

A student using a family Chromebook receives a low-space message. The storage screen shows a large Downloads category and additional use by other profiles. The student first opens their own Files app to identify recognizable downloads. Some are school assignments that have not been uploaded anywhere, while others are public worksheets that can be downloaded again. They verify that their assignments are safely stored in the intended school account and can be opened there. Only then do they consider removing a clearly replaceable local worksheet copy.

They do not remove another person's profile. They avoid clearing browser data because their offline work status is uncertain. If available space remains low, they record the storage figures and ask the device owner or school support team. The fact that Chromebook is associated with cloud services does not make every local file expendable.

### Walkthrough: a phone reports storage full

An iPhone owner receives a storage warning while taking pictures. The Settings storage screen shows that local media and a video-editing application occupy substantial space. The owner considers deleting old family videos but has not confirmed that the originals exist in a separate backup. Instead, they inspect downloads kept inside an entertainment app and identify a movie they can obtain again later. After removing that movie through the app, they confirm whether the phone now has sufficient space for the needed task. Their family videos remain protected while the immediate problem is addressed.

On Android, the same reasoning applies, but the settings may appear under different names. The owner should not select **Clear storage** on the video app merely to free space without understanding whether this will erase unfinished projects.

### Walkthrough: a cloud quota is full but the laptop has space

A learner's cloud service reports that uploads are blocked because their account storage is full. Their laptop itself has 90 GB free. Running the laptop's temporary-file cleanup will not necessarily resolve the quota problem, because the restriction is in the online account. The learner checks the correct service account's quota dashboard, reviews its contents and retention requirements, and asks for approval before changing a managed account. The key skill is **diagnosing the storage location**, not equating every storage warning with one disk.

### Document the outcome

A [[troubleshooting-log|troubleshooting log]] does not need to be technical. It should say what happened, what you measured, what action you took, and whether it helped. Consider this simple example:

| Field | Example entry |
| --- | --- |
| Date and device | Friday, laptop used for homework |
| Symptom | Update would not begin; reported insufficient space |
| Affected location | Main internal drive |
| Before | Approximately 3 GB available |
| Check performed | Reviewed Storage and app downloads |
| Action | Removed one replaceable offline lesson video with app control |
| After | Approximately 5 GB available |
| Result | Update retried; requested more space |
| Next step | Review official update guidance or ask authorized support |

Notice that the example does not invent success. If the update still fails, the log says so. A support team can act more effectively when it knows which location is constrained and which steps were already tried.

### Know when to stop

Stop and ask for help if you encounter unfamiliar system folders, encryption or access restrictions, repeated disk errors, a managed device requiring administrator permission, a suspected hardware failure, or files that may belong to someone else. Stop if cleanup options require deleting a recovery partition, removing an operating-system rollback option, or resetting the device. Ask for advice if you cannot confirm a backup of irreplaceable information.

A persistent or rapidly recurring low-space condition may have a more complex cause, including unexpected app behavior, damaged files, or a failing drive. Repeatedly deleting random data is not a suitable long-term remedy. Preserve evidence and seek support appropriate to the device and organization.

## 7. Guided practice: seven activities

The activities below are intentionally [[observation-first|observation-first]]. You can complete them with a pencil, a screenshot of an ordinary settings screen, or a computer you have permission to use. **Do not delete files, clear app data, change synchronization settings, make purchases, or remove accounts as part of these exercises.** If you are using a shared or managed device, limit yourself to information you are authorized to view. Each activity has an expandable explanation for self-checking.

### Activity 1: Identify which resource is constrained

**Scenario:** Four people report difficulties:

- **A:** A laptop refuses to save a video and says its internal drive is almost full.
- **B:** A cloud service refuses to upload a document because the account quota has been reached.
- **C:** A computer slows down when 40 browser tabs are open, but its drive has plenty of free space.
- **D:** A student cannot download a class file because the network connection has disconnected.

**Your task:** For each person, identify the first resource to investigate: internal storage, cloud account quota, RAM or other active resources, or network connection. Then write one **non-destructive** question you would ask before changing anything.

**Success criterion:** You distinguish all four resources and propose a practical diagnostic question for each.

:::answer Show Activity 1 sample answers

- **A:** Internal storage. Ask which drive is the saving destination and how much space it has available.
- **B:** Cloud storage quota. Ask which account or cloud service displayed the limit and whether local space is also low.
- **C:** RAM or other active performance resources. Ask whether the slowdown occurs when many apps or browser tabs are open.
- **D:** Network connection. Ask whether the device can reach other known trusted sites or services.

A shortage in one resource can affect another, but diagnosing starts with the actual symptom. Deleting personal documents will not directly increase RAM or restore a disconnected network.
:::

### Activity 2: Read a storage summary

**Scenario:** Three fictional devices report these simplified measurements:

| Device | Total storage | Used storage | Approximate available storage |
| --- | --- | --- | --- |
| Library laptop | 256 GB | 236 GB | ? |
| Family tablet | 128 GB | 121 GB | ? |
| Workstation | 512 GB | 382 GB | ? |

**Your task:** Subtract used space from total space. Rank the devices from least to most available space. Then answer: Which one is necessarily defective? Which one can definitely install an unspecified large operating-system update?

**Success criterion:** You calculate the example values, avoid assuming a defect, and recognize that update requirements are unknown.

:::answer Show Activity 2 sample answers

- **Library laptop:** Approximately 20 GB available (256 minus 236).
- **Family tablet:** Approximately 7 GB available (128 minus 121).
- **Workstation:** Approximately 130 GB available (512 minus 382).
- **Least to most free:** Family tablet, library laptop, workstation.

None is **necessarily defective** just because it uses substantial space. You cannot guarantee that an unspecified update will install on any of them without knowing the update's requirements, device configuration, and other constraints. These figures are educational simplifications; device menus may use different counting conventions.
:::

### Activity 3: Observe your device without cleaning it

**Equipment:** An optional device you own or have permission to inspect. A fictional device is acceptable if you prefer not to share real storage figures.

**Procedure:**

1. Select the device type: Windows 11, Mac, Chromebook, iPhone/iPad, or Android.
1. Find the built-in storage summary using the instructions in Section 4.
1. Write down the affected local drive, card, or device storage location.
1. Record its approximate total and available space if visible.
1. Identify one or two largest categories shown.
1. Close the screen without selecting any removal, reset, or cleanup commands.

**Your task:** Write a three-sentence storage summary describing **where**, **how much**, and **which category**. If you cannot locate the storage screen, record which step failed instead of changing unrelated settings.

**Success criterion:** You produce an observation rather than making a guess about causes.

:::answer Show Activity 3 sample answer

“My Windows 11 laptop has one internal drive shown in the Storage settings. The drive displays approximately 17 GB of available space. Apps and installed games are the largest visible category, but I have not determined which specific application accounts for the usage.”

Other operating systems and measurements are equally valid. It is appropriate to say that a menu label differs from the lesson or that a managed device prevents access. Do not write down confidential filenames or account details in a shared assignment.
:::

### Activity 4: Sort files by risk before cleanup

**Scenario:** A computer has little free space. Its owner finds these items:

- A 4 GB downloaded television episode that the owner may be able to download again.
- A folder of original photographs with no confirmed backup.
- A 900 MB installer for a trusted program already installed.
- A document edited today that exists only in Downloads.
- An application cache directory with an unfamiliar name.
- An older backup archive whose restore value has not been checked.

**Your task:** Place each into one of three groups: **candidate for review after verification**, **protect and keep until safely backed up**, or **do not alter without expert/owner guidance**. Explain why the downloaded episode is a more promising first candidate than the original photographs.

**Success criterion:** You do not equate file size or age with permission to delete.

:::answer Show Activity 4 sample answers

- **Downloaded episode:** Candidate for review after confirming it can be downloaded again and is not needed offline.
- **Original photographs:** Protect until a separate usable backup has been verified.
- **Installer:** Candidate for review after confirming the installer is unnecessary and can be obtained again, if needed.
- **Document edited today:** Protect and back up; it may be the only copy.
- **Unfamiliar cache directory:** Do not manually alter. Use the official app/system controls or request support.
- **Unverified backup archive:** Keep until its contents, recovery role, and replacement are understood.

The episode is a stronger candidate because its replacement path may be clear, whereas losing unbacked originals could be permanent. A promising candidate is not automatic permission to delete it.
:::

### Activity 5: Decide what a cloud command actually means

**Scenario:** A student keeps class notes in a synchronized cloud folder. The laptop is running out of local space, but the notes must remain available to the student and classmates. The student sees three possible actions:

- **Option A:** Delete the synchronized notes.
- **Option B:** After verifying cloud upload and access, use an officially supported operation to make eligible notes online-only or remove their local download.
- **Option C:** Turn off synchronization and erase the local folder without checking status.

**Your task:** Choose the most appropriate general approach. State two requirements that must be satisfied before using it. Then describe one case where the student should **not** make the notes online-only.

**Success criterion:** You distinguish deleting synchronized content from keeping cloud originals while removing eligible local copies.

:::answer Show Activity 5 sample answers

**Option B** is the appropriate approach when the specific service supports it and its conditions have been verified. The student must confirm that files have fully uploaded to the intended account and can be opened there. They must also have authorized access, a suitable backup for important work, and understand their offline needs.

They should not make notes online-only if they must open them during an upcoming period without connectivity, if uploads are pending, if the account is out of cloud space, or if organizational policy disallows the change. Deleting synchronized files may affect every connected device and collaborator.
:::

### Activity 6: Choose a safe first response

**Scenario A:** A Windows update reports insufficient space. Cleanup recommendations list temporary data, Downloads, Recycle Bin, and a previous Windows installation. The learner is unsure what is inside Downloads and may need to roll back the last update.

**Scenario B:** An Android app occupies several GB. Its Storage settings offer **Clear cache** and **Clear storage**, and the learner has unsent work in that app.

**Scenario C:** A shared Chromebook has low space; the largest category belongs to another user profile.

**Your task:** For each scenario, write one action the learner **should** take and one action the learner **should not** take. Explain what makes the rejected action risky.

**Success criterion:** Every recommendation protects important or shared information and avoids unfamiliar destructive controls.

:::answer Show Activity 6 sample answers

- **A:** Should inspect safe, clearly understood categories and consult official update guidance. Should **not** select all removal categories; Downloads can contain important files, and removing a previous Windows installation may remove rollback capability.
- **B:** Should check whether the app offers a safe export, backup, or downloads manager and preserve unsent work. Should **not** use Clear storage/data without understanding the potential loss of local app content.
- **C:** Should record the low-space measurement and ask the device owner or administrator for help. Should **not** remove the other user profile, because unsynchronized local files may be lost.

A sensible first step can be a question, a measurement, or a pause. That is not a failure to troubleshoot.
:::

### Activity 7: Write a support handoff

**Scenario:** A person using a shared Mac reports that a photo project cannot export because the startup disk is almost full. The Storage panel shows 5 GB available. There are several large video files, but their owner and backup status are uncertain. The person has not deleted anything. They need the project for a class tomorrow.

**Your task:** Prepare a short support message containing: device and problem, affected storage location, available-space observation, what has been checked, what has not been changed, the deadline, and the requested assistance. Avoid revealing private filenames or photographs.

**Success criterion:** Another person can continue from your report without repeating all checks or assuming data was deleted.

:::answer Show Activity 7 sample answer

“On a shared Mac, a class photo project cannot export because the startup disk is almost full. System Settings → General → Storage shows approximately 5 GB available. I reviewed the storage categories and noticed that videos occupy substantial space, but I have not confirmed the files' owners or backups. I have not deleted files, emptied Trash, or changed iCloud settings. The class deadline is tomorrow. Could the device owner or authorized support person help identify approved cleanup options and a safe place to save the project?”

This report communicates useful facts, avoids speculation, and requests a specific safe next action. If the storage numbers change, update the handoff before sending it.
:::

## 8. Common mistakes and misconceptions

### “If the computer says full, I must delete everything old.”

False. Old files can be important, and recently downloaded files can be replaceable. Use content, ownership, recovery, and actual space used to make a decision. The objective is sufficient functional space—not an empty drive.

### “A cloud icon means I definitely have a backup.”

False. A cloud icon may indicate a synchronization relationship, online status, or a pending transfer. A file may not have uploaded successfully. Deletions can be synchronized. A backup is a separate recoverable copy that you can reasonably verify.

### “Moving a file to another folder on the same drive frees space.”

Normally false. A move within the same volume changes the file's location, not the total amount of occupied data. Copying to an external drive also does not free the original drive until the local copy is properly removed.

### “A bigger RAM number means I can save more photographs.”

False. RAM is temporary working memory. Persistent storage is what retains saved photos and applications. The two resources have different functions, although both can affect performance.

### “The Downloads folder contains only disposable files.”

False. It may contain signed forms, assignments, exported archives, and the only copies of documents. Inspect before removing anything. Do not enable automated Downloads cleanup without understanding its consequences.

### “Emptying the Recycle Bin or Trash is always harmless.”

False. These locations may contain files that someone intends to restore. Permanent removal may be difficult or impossible to reverse. Inspect contents and verify recoverability first.

### “System Data is large, so I should delete system folders manually.”

False. System categories include information needed for operation and may fluctuate. Use built-in recommendations and authorized support. Do not use internet instructions that direct beginners to erase hidden system paths.

### “Deleting an app and clearing its cache are the same.”

False. Clearing temporary cache files may be less disruptive than removing app data, but it can still affect offline use or sign-in. Clearing storage/data or uninstalling may remove locally saved work and settings. Read each option separately.

### “A new external drive is automatically a backup.”

False. An empty drive offers storage capacity. A backup requires actually creating and checking a usable copy, preferably with an appropriate recovery plan. A drive can fail, be lost, or be stolen; one external copy is not a guarantee of recovery.

### “Online-only files work exactly like local files without internet.”

False. Online-only files usually require a connection to download their contents when opened. Offline availability settings can consume local space. Plan for travel and outages before optimizing valuable content.

### “A cleaning advertisement knows my device is in danger.”

False. A webpage may display deceptive warnings without having inspected your computer. Verify the storage condition through built-in system settings. Avoid unsolicited cleaners, remote-support offers, and payment demands.

### “All storage measurements should match the product box.”

False. Capacity counting methods, formatted storage, system partitions, reserved space, and normal software usage can produce different displayed values. A difference does not alone indicate damage or missing hardware.

### “Deleting photos from the phone cannot affect the cloud.”

False. If photo synchronization is enabled, deletion may propagate to the cloud library and other devices. Check the actual service behavior and backup arrangements before deleting irreplaceable photos.

### “I should reset the computer if the storage graph looks confusing.”

False. A factory reset may erase local data and settings. It is disproportionate for a beginner investigating space usage. Record the uncertainty and consult authorized support instead.

### “If one cleanup action does not solve the problem, I should keep deleting random items.”

False. Revisit the exact error, destination, available space, and task requirements. A rapidly refilling drive or repeated disk error may require professional diagnosis. Random deletion creates unnecessary risk and obscures the troubleshooting history.

## 9. Essential vocabulary

The underlined interactive terms in the main lesson can be selected to reveal short definitions. The terms below summarize what you should understand after completing this module.

- **Storage:** Capacity for saved files, installed software, and other information retained after shutdown.
- **Available space:** Room the device currently reports as free for additional information.
- **Used space:** Storage occupied by files, apps, operating-system material, and other data.
- **SSD:** A storage device that uses solid-state electronic memory rather than a spinning disk.
- **HDD:** A storage device that stores data on rotating magnetic disks.
- **RAM:** Working memory used by active programs; different from long-term storage.
- **Cloud storage:** File storage provided through an online account or service.
- **Cloud quota:** The storage limit attached to an account, plan, or managed service.
- **Backup:** A separate copy kept to support recovery from accidental loss or damage.
- **Synchronization:** A process intended to keep data consistent across connected locations.
- **Offline file:** Information kept on a device so it can be used without a live internet connection.
- **Online-only file:** An item listed on a device while its contents are mainly stored remotely.
- **Downloads folder:** A common location for files downloaded from websites or applications.
- **Cache:** Stored content used to speed access or support normal software operation.
- **Temporary file:** A file created for an interim task; its deletion safety depends on context.
- **Uninstall:** Remove an application through an operating system or approved management process.
- **Offload app:** A mobile feature that can remove an application while retaining associated documents and data.
- **Recycle Bin or Trash:** A holding area for some deleted files before permanent removal.
- **Storage Sense:** A Windows feature that helps manage selected temporary and local data based on configured rules.
- **System Data:** A broad macOS category for content not assigned to other listed categories.
- **Files On-Demand:** A cloud synchronization approach allowing some cloud content to be represented without the full local file.
- **External drive:** A separately connected storage device, such as a USB SSD or hard drive.
- **Archive:** Information retained for later reference or recovery, subject to its own integrity and access rules.
- **File size:** The amount of storage data occupied by a file, often described in MB or GB.
- **Troubleshooting log:** A record of symptoms, observations, actions, results, and next steps.
- **Managed device:** Equipment controlled partly by an employer, school, or other organization.
- **Factory reset:** A disruptive restoration process that can erase local data and settings.
- **Verification:** Checking whether a file, copy, action, or result is actually usable or correct.

A learner does not need to memorize every menu label, which may change with updates. More important is a consistent set of questions: **Which storage location is constrained? What is occupying it? Which information matters? What can be changed safely? Did the change actually solve the problem?**

## 10. Knowledge check

Choose the **one best answer** for each question. Select **Check answers** in the dashboard to review your score and explanations. This assessment is for self-study: it does not require that you delete files or change device settings. If a question refers to an unfamiliar device, reason from the safety principles instead of guessing the location of a button.

:::quiz
? What does internal storage primarily retain?
- [ ] Only information being processed for a few seconds
- [x] Saved files and installed software after shutdown
- [ ] Only data stored in an online account
! Internal storage holds persistent data such as files and programs.

? What is the main difference between RAM and storage?
- [x] RAM supports active work; storage keeps saved information
- [ ] RAM is an external USB drive; storage is internet speed
- [ ] RAM permanently stores all photographs
! RAM is temporary working memory and storage is persistent.

? A cloud service says its account quota is full, but the laptop has 80 GB free. What should you investigate first?
- [ ] The laptop Recycle Bin only
- [ ] The Wi-Fi password only
- [x] That cloud account and its storage usage
! The cloud quota is independent of the laptop's available internal drive space.

? What is the best first response to a low-storage warning?
- [ ] Immediately purchase a larger drive
- [ ] Delete all older files without inspecting them
- [x] Identify the affected location and measure available space
! Location and measurement help avoid ineffective or destructive actions.

? If a 256 GB drive reports 220 GB used, approximately how much is available in this simplified example?
- [ ] 220 GB
- [x] 36 GB
- [ ] 476 GB
! Subtracting used from total gives about 36 GB.

? Which Windows 11 area can show storage use?
- [x] Settings → System → Storage
- [ ] The browser address bar only
- [ ] The keyboard language selector
! The Windows Storage settings show drives and categories.

? Where can you usually inspect storage on a current Mac?
- [x] System Settings → General → Storage
- [ ] The display brightness control
- [ ] A random cleaning advertisement
! Mac storage categories are displayed in the built-in settings.

? What is a useful Chromebook storage category to inspect?
- [ ] The mouse pointer color
- [ ] The clock format alone
- [x] Downloads and offline files
! Downloads and offline content can occupy substantial local storage.

? Which iPhone action generally removes an app while preserving its documents and data?
- [ ] Delete App
- [x] Offload App
- [ ] Erase All Content and Settings
! Offloading differs from deleting an app and its associated local data.

? What is a serious risk of selecting Clear storage or Clear data for an Android app?
- [ ] The phone receives unlimited storage
- [x] Local app settings, drafts, and other app data may be erased
- [ ] The device becomes permanently waterproof
! Clear storage/data may reset the app and remove local information.

? Why inspect a Downloads folder before deleting files?
- [ ] All downloads are automatically fake
- [ ] Downloads never use storage
- [x] It may contain the only copy of an important file
! Downloads can include unique documents and valuable work.

? Which statement about a cloud-synced file is accurate?
- [x] Deleting it may synchronize the deletion to other devices
- [ ] Its icon proves that a separate backup exists
- [ ] It is always available offline without a local copy
! Synchronization can propagate deletion; it is not automatically independent backup.

? What does an online-only cloud file generally require when opening its contents?
- [ ] A printer connected by USB
- [ ] An unused DVD drive
- [x] A working connection to retrieve the content
! Online-only content generally needs network access to download its data.

? Which action does not ordinarily free space on the same drive?
- [x] Moving a file to another folder on that same drive
- [ ] Removing a verified replaceable local download
- [ ] Using a supported method to make a fully synced file online-only
! Relocating within the same drive does not remove the data from that drive.

? What should be checked before deleting irreplaceable photographs?
- [ ] Only whether the photographs are several years old
- [x] A separate recoverable backup and deletion effects
- [ ] Only their color and resolution
! Important originals must be recoverable; synchronized deletions may affect other devices.

? What does a backup mean in this lesson?
- [ ] Any folder with a cloud icon
- [x] A separate copy kept to support recovery
- [ ] A newly created shortcut to the original
! A recoverable separate copy protects against loss of the original.

? Why can emptying Trash or Recycle Bin be risky?
- [x] It can permanently remove files someone may need to restore
- [ ] It always increases RAM
- [ ] It repairs all storage hardware
! Permanent deletion can remove a recovery opportunity.

? Which task is most appropriate for a beginner?
- [ ] Manually delete unfamiliar system folders
- [ ] Follow an unknown pop-up cleanup utility
- [x] Use built-in storage information before removing anything
! Built-in controls provide a safer starting point than hidden folders or ads.

? What is a cache?
- [x] Stored content used to support or speed operations
- [ ] A computer cable for charging
- [ ] A remote drive that always counts as a backup
! Caches can support normal application behavior and should not be erased blindly.

? Why should you hesitate before deleting a previous Windows installation?
- [ ] It makes the monitor permanently dim
- [x] It may remove the option to roll back the upgrade
- [ ] It erases only web-browser bookmarks
! Previous installations can be part of operating-system recovery.

? Which statement about Storage Sense is correct?
- [ ] It always deletes the entire Downloads folder immediately
- [ ] It replaces the need for backups
- [x] Its behavior depends on configured cleanup options
! Storage Sense is configurable and selections must be reviewed.

? What is a sound first candidate for review when freeing space?
- [ ] Unverified family photographs with no backup
- [x] A large offline movie confirmed replaceable and no longer needed
- [ ] Another person's unsynced schoolwork
! Replaceable downloaded media often provides a lower-risk opportunity.

? A shared computer shows another person's account using space. What should you do?
- [ ] Remove the profile without permission
- [ ] Reset the device and announce it afterward
- [x] Ask the owner or administrator before changing that account
! Other users may have unsynchronized or private local information.

? Which statement best describes an external drive?
- [x] It provides separate storage but can fail or be lost
- [ ] It automatically backs up every file without any setup
- [ ] It cannot hold copies of photos
! External drives need an actual backup and verification process.

? Which change best confirms a cleanup action helped?
- [x] Recheck available space and retry the original task
- [ ] Trust a success animation without measuring
- [ ] Assume any deleted file fixed the error
! Verification should compare measurements and the task's actual outcome.

? What should a useful support handoff include?
- [ ] Only the phrase computer broken
- [ ] Every private filename and password
- [x] The message, affected location, checks, actions, and results
! Specific observations and actions help support continue safely.

? How should a student handle a managed school device?
- [ ] Move confidential records to a personal cloud account
- [x] Use authorized locations and support procedures
- [ ] Erase another student's downloads
! Organizational permissions and data-handling policies still apply.

? What is a possible cause when a drive refills quickly after cleanup?
- [ ] Proof that every old file is malware
- [ ] Proof that a new device is mandatory
- [x] An ongoing app or system process that needs further diagnosis
! Persistent recurrence warrants measurement and appropriate escalation.

? Which option usually carries the greatest risk for a beginner responding to full storage?
- [x] A factory reset before verifying backups
- [ ] Reading the built-in storage chart
- [ ] Writing down the warning text
! A factory reset can erase local data and is disproportionate as a first response.

? What is the safest general troubleshooting sequence?
- [ ] Delete, reset, purchase, and guess
- [x] Measure, protect, make one understood change, and verify
- [ ] Ignore the warning and erase folders at random
! Systematic observation and verification limit unnecessary risk.

:::

:::answer Review the knowledge-check answer key

**Correct-answer positions:** These 30 questions contain ten correct answers in each of positions A, B, and C. The explanations displayed after checking answers explain why each correct option applies.

**Review the most important principles:** Identify which location is full; do not confuse RAM with storage or a cloud quota; inspect the built-in storage summary; protect important or shared files; use one understood cleanup action; measure and retry; document unresolved results.

**Scenario reminder:** A cloud-synced deletion may affect other devices. A verified online-only/local-copy operation is different from deleting the original. Downloads and app data may be valuable; keep them until their purpose and recovery are understood.
:::

## 11. Further learning and next steps

### What you should now be able to do

Before completing this lesson, review the following checklist. You should be able to explain every statement in your own words.

- I can tell the difference between local storage, RAM, and cloud account quota.
- I can locate a storage summary on at least one familiar device or explain how I would find it.
- I can describe how used and available space are related.
- I can identify promising cleanup candidates without assuming older files are disposable.
- I understand that synchronization alone is not a verified independent backup.
- I know why deleting synchronized files differs from making eligible files online-only.
- I know when Trash, Recycle Bin, clearing app data, and uninstalling could cause loss.
- I can make one cautious change, measure its result, and record what happened.
- I can explain when to involve a device owner or authorized support person.

### A simple storage-maintenance habit

Once in a while, check how much free space is available on devices you rely on. Notice large or recent changes, keep important files backed up to authorized locations, and review downloaded media you no longer need offline. Check official storage and update requirements before a major software installation. Avoid setting aggressive automatic deletion rules without understanding them. The purpose of routine maintenance is to make emergencies less likely, not to maximize how much you delete.

### Official guidance

The following vendor resources provide current procedures and important limitations. Menus can change, so use the version appropriate to your device:

- [Microsoft Support: Free up drive space in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/free-up-drive-space-in-windows)
- [Microsoft Support: Manage drive space with Storage Sense](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/manage-drive-space-with-storage-sense)
- [Microsoft Support: OneDrive Files On-Demand](https://support.microsoft.com/en-us/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows)
- [Apple Support: Free up storage space on Mac](https://support.apple.com/en-us/102624)
- [Apple Support: Check storage on iPhone and iPad](https://support.apple.com/en-la/108429)
- [Google Chromebook Help: Free up space on your Chromebook](https://support.google.com/chromebook/answer/1061547)
- [Google Android Help: Free up storage on your Android device](https://support.google.com/android/answer/7431795/)

### Continue learning

This lesson is part of [Computer Troubleshooting Basics](https://maloneuniversity.org/department/computer-science/basic-computer-skills/computer-troubleshooting/), a course in the MGU Basic Computer Skills curriculum. Review Lesson 3, **Frozen Apps and Slow Computers**, when performance rather than free storage is the central concern. Review Lesson 4, **Internet Not Working**, when a file fails to download or synchronize because of connectivity.

**Next lesson: Lesson 8 — Reading Error Messages** (`reading-error-messages.md`). It will focus on interpreting messages, recording useful clues, recognizing misleading warnings, and deciding when an error requires assistance.

> **Final reminder:** A storage warning is a problem to diagnose, not permission to erase uncertain information. Measure, protect, select a safe step, and confirm the result.

:::terms
storage | Storage | Persistent capacity for saved files, installed software, and other information.
storage-warning | Storage warning | A notice that a particular storage location may not have enough free capacity for a task.
storage-device | Storage device | Hardware that retains digital information, such as an SSD, hard drive, or flash storage.
solid-state-drive | Solid-state drive (SSD) | Storage hardware that retains information electronically without a spinning disk.
hard-disk-drive | Hard disk drive (HDD) | Storage hardware that uses rotating magnetic disks.
operating-system | Operating system | Core software that manages device resources and provides a working environment for applications.
application | Application | Software that helps a person perform a task, such as editing a document or playing media.
app-data | App data | Files, drafts, settings, downloads, or other information stored by an application.
available-space | Available space | Storage capacity that the system reports as free for additional data.
used-space | Used space | Storage capacity currently occupied by files and other information.
total-capacity | Total capacity | The overall storage capacity reported for a particular drive or device.
gigabyte | Gigabyte (GB) | A unit commonly used to describe file sizes and storage capacity, approximately a billion bytes in decimal usage.
megabyte | Megabyte (MB) | A unit of file size smaller than a gigabyte, approximately a million bytes in decimal usage.
memory-ram | Memory (RAM) | Temporary working memory used while apps and the operating system are running.
cloud-storage | Cloud storage | File storage made available through an online service or account.
cloud-quota | Cloud storage quota | A limit on data permitted in a particular online account or plan.
backup | Backup | A separate, restorable copy kept to protect against the loss of original data.
backup-verification | Backup verification | Confirming that a protected copy exists and can be accessed or restored.
sync | Synchronization | A process for keeping data consistent across connected devices or locations.
sync-status | Synchronization status | An indication of whether transfers between local and online locations are complete, paused, or pending.
offline-file | Offline file | Content kept locally so that it can be used without live internet connectivity.
online-only | Online-only file | A cloud-associated item whose contents are not fully stored locally and normally need retrieval when opened.
files-on-demand | Files On-Demand | A cloud-file feature that lets selected items remain visible without their entire contents occupying local storage.
downloads-folder | Downloads folder | A common local location for files obtained from the web or applications.
download-history | Download history | A browser or app record of downloads that may differ from the files still stored on the device.
file-size | File size | The amount of digital data occupied by a file, expressed in units such as MB or GB.
duplicate-file | Duplicate file | An additional copy of file content, requiring verification before either copy is removed.
cache | Cache | Stored material used to improve speed or support repeated operations.
temporary-file | Temporary file | Information created for interim system or application work.
recycle-bin | Recycle Bin | A Windows holding location for some deleted files before permanent removal.
trash | Trash | A macOS and other platform holding location for some files pending permanent removal.
uninstall | Uninstall | Remove an installed application using the system or approved software-management controls.
offload-app | Offload App | A mobile feature that removes eligible app software while generally retaining its documents and data.
storage-sense | Storage Sense | A Windows feature that manages selected disk content according to settings and cleanup rules.
cleanup-recommendations | Cleanup recommendations | Built-in suggestions to review selected content that may be removable to recover space.
system-data | System Data | A macOS category covering content not placed into more specific storage groups.
system-files | System files | Operating-system files needed for operation, maintenance, or recovery.
rollback | Rollback | Returning a system to a previous software version where supported.
external-drive | External drive | A separately connected storage device used for additional capacity or copies.
usb-drive | USB drive | A portable storage device connected through a USB interface.
sd-card | SD card | A small removable memory card supported by some devices.
user-account | User account | A profile used to access a device or online service, sometimes with its own local data.
managed-device | Managed device | A device whose settings and permissions are controlled partly by an organization.
permission | Permission | Authorization to access data or perform a device or account action.
retention-policy | Retention policy | A rule requiring information to be kept or disposed of according to established requirements.
encryption | Encryption | Protecting information by encoding it so authorized access is needed to read it.
archiving | Archiving | Retaining information for later use according to an organized plan.
archive-file | Archive file | A file that packages other data, often for storage, transfer, or distribution.
compression | Compression | Representing information using less storage space where feasible.
file-extension | File extension | A suffix on a filename that can suggest its type or intended application.
partition | Partition | A defined region of a storage device managed as a logical storage area.
file-system | File system | A structure used by software to organize stored files and directories.
recovery-partition | Recovery partition | Reserved storage that may support device restoration or repair.
factory-reset | Factory reset | A major reset operation that can remove local accounts, settings, and files.
low-space-condition | Low-space condition | A state where available storage is insufficient for intended tasks or system needs.
settings | Settings | Operating-system or app controls used to view and configure behavior.
troubleshooting | Troubleshooting | A structured process of observing and investigating a problem.
troubleshooting-log | Troubleshooting log | Notes of the symptom, measurements, tests, outcomes, and next step.
observation-first | Observation-first | A troubleshooting method that inspects and records evidence before making changes.
reversible-step | Reversible step | An action that can be readily undone with little risk of data loss.
destructive-action | Destructive action | A change that may permanently erase information or remove recovery options.
verification | Verification | Checking whether a presumed fact, transfer, copy, or fix is genuinely correct.
cloud-provider | Cloud provider | An organization that offers remotely accessible storage or computing services.
offline-download | Offline download | A local copy of media or information for use without an internet connection.
restore | Restore | Recovering information from a saved copy or supported recovery mechanism.
owner | Owner | A person or organization authorized to decide how information or equipment is used.
escalation | Escalation | Referring an unresolved or higher-risk problem to suitable support.
support-handoff | Support handoff | A concise report allowing another person to continue troubleshooting safely.
status-message | Status message | A system or application notice about conditions or operations.
file-manager | File manager | An application used to browse and organize files, such as File Explorer or Finder.
file-location | File location | The folder, drive, device, or service where information is stored.
app-cache | App cache | Temporary or reusable information kept by a particular application.
background-task | Background task | Work that software performs while other activities continue.
system-update | System update | An authorized software change to the operating system or related components.
cloud-sync-deletion | Cloud-synced deletion | A deletion that may propagate across connected locations through synchronization.
:::
