Basic Computer Skills / File and Folder Skills

## Lesson 2: Where Files Are Saved

You finish typing a letter, select **Save**, close the program, and return the next day. Where did the letter go? Perhaps it appears in **Documents**. Perhaps the application saved it in **OneDrive**, on the **Desktop**, or in a folder you selected earlier. Sometimes the program has not created a separate computer file at all: the work remains in an online service. Knowing *where* information has been saved is the difference between reliably continuing your work and repeatedly starting over.

In Lesson 1, you learned that a [[file|file]] is a saved item and that a [[folder|folder]] organizes files. This second lesson asks a more precise question: **Which storage location actually holds the saved item, and how can you recognize that location?** You will explore the meaning of saving, the standard places people encounter, the Windows 11 File Explorer interface, the destination shown in a Save dialog, browser downloads, cloud accounts, and external drives. You will also learn why a file shown in *Recent* is not necessarily stored in a folder named Recent.

This is a beginning computer-literacy lesson, not a troubleshooting or data-recovery class. Its exercises are [[observation-first|observation-first]]: you can examine locations and example paths without editing, downloading, moving, or deleting anything. Windows 11 is the principal example, with corresponding guidance for Mac, Chromebook, iPhone, iPad, and Android users. If you cannot use a computer, every exercise can be completed with the written scenarios provided.

**Level:** Beginner · **Estimated study time:** 80–110 minutes · **Prerequisites:** File and Folder Skills Lesson 1 recommended · **Practice equipment:** Windows 11 computer preferred; Mac, Chromebook, phone, tablet, or paper is acceptable · **Safety:** Examine before changing; never move, delete, upload, or open unfamiliar files as part of the required practice

> **Essential idea:** A file's **name** tells you what it is called; its **location** tells you where it is stored or managed. A folder shown in an application may point to a local drive, a removable drive, or a cloud service. When saving work, identify the destination, the filename, and whether the application has actually finished saving.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain what it means for a file to be saved and distinguish saving from simply viewing or editing something.
1. Recognize common save destinations, including Desktop, Documents, Downloads, Pictures, internal drives, removable drives, and cloud folders.
1. Use Windows 11 File Explorer to inspect familiar locations without changing their contents.
1. Read an illustrative file path and identify the drive or service, parent folder, subfolder, and filename.
1. Identify the destination in a typical **Save** or **Save As** dialog and distinguish the destination from the filename and file type.
1. Explain where a browser download or email attachment may go, without assuming all applications use the same default folder.
1. Recognize the difference between a locally stored file, an online-only file, a synchronized file, a shortcut, and a recent-item listing.
1. Describe how saving and viewing locations differ across Windows, macOS, ChromeOS, iPhone/iPad, and Android.
1. Apply safe methods for confirming a save location and for handling shared devices, sensitive files, and missing access.
1. Complete location-reading activities and explain how you would check a save destination before trusting it.

### On this page

- [1. What happens when you save a file?](#1-what-happens-when-you-save-a-file)
- [2. What are common places to save files?](#2-what-are-common-places-to-save-files)
- [3. Finding locations in Windows 11](#3-how-do-you-inspect-file-locations-in-windows-11)
- [4. Choosing a destination when saving](#4-how-do-applications-choose-a-save-location)
- [5. Downloads, attachments, and app files](#5-where-do-downloads-attachments-and-app-files-go)
- [6. Cloud, external, and other devices](#6-how-do-storage-locations-differ-across-devices-and-services)
- [7. Guided practice](#7-guided-practice-read-and-confirm-save-locations)
- [8. Common misconceptions](#8-common-misconceptions-and-avoidable-problems)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-mgu-library-connections-and-next-steps)

## 1. What happens when you save a file?

To [[save|save]] a file generally means to record its contents in a [[storage-location|storage location]] so the information can be accessed later. Some programs save a new file to your device. Others update an existing file. An online application may save changes in an account without creating a normal downloadable file on your computer. The details differ, but the practical goal is the same: **preserve your work for later use**.

Imagine writing a short letter in a document editor. While you type, the application displays your words and works with them in memory. That alone does not guarantee that a durable copy exists. If you use a program that requires manual saving, selecting Save creates or updates a stored file at a chosen destination. Some modern applications save automatically; others need a manual command or a confirmation step. A program may also keep temporary recovery information that is not the same as a deliberately saved, named document.

### A name, a location, and a completed save

Three details must come together for you to know what happened:

1. **Filename:** What is the item called, such as `reading-notes.docx`?
1. **Destination:** Where is it stored, such as Documents, a class folder, OneDrive, or a USB drive?
1. **Save status:** Did the application finish writing or synchronizing the change, or is it still working or reporting an error?

A fourth detail, the **file type**, matters when another application will need to open the file. A document named `reading-notes.pdf` is not the same editable format as `reading-notes.docx`, even if both show similar words. This lesson concentrates on destination; later lessons address filenames and file-management operations in greater depth.

### Saving is different from looking at a file

Opening a file to view it is not a new save. Reading an online page does not, by itself, place an ordinary document in your Documents folder. Viewing a photograph in a browser does not necessarily create an image file that you can find in Pictures. An attachment displayed inside an email message may be previewed online without being downloaded to your computer. A [[download|download]] or **Save As** action may be needed when you intend to keep a local copy, and the applicable website or program may choose a default destination.

Likewise, **printing** sends material to a printer or print service; it is not the same as saving a computer file. Choosing **Print to PDF** can create a PDF file, but only if that option is available and you complete the destination and save steps. A screen showing the document is not evidence that the requested file was created.

### Save, Save As, and automatic saving

**Save** commonly updates the working file at its current location. If a new document has not been saved before, Save may open a dialog that asks for a destination and filename. **Save As** usually asks you to select a name, location, or file format; it can create a separate copy. The exact behavior depends on the program, and some cloud-based applications use commands such as **Make a copy**, **Download**, or **Export** instead. A file with the same name may be replaced if you choose an existing destination and approve an overwrite; therefore, examine the destination and any warning carefully.

[[autosave|Autosave]] refers to software saving changes without needing you to select Save each time. Do not assume that every application uses autosave, that it is always enabled, or that synchronization has completed just because the app shows a save icon. If a service is offline or an account is full, changes may be pending or fail. Programs differ in their indicators: look for words such as *Saved*, *Saving*, *Pending*, *Syncing*, *Upload failed*, or *Offline*. If an application is important to your work, learn the meaning of its status message.

| Situation | What you can conclude | What you still need to check |
| --- | --- | --- |
| You can see words you typed | The editor is displaying your work | Whether it has been saved successfully |
| You selected Save | You requested that the application save | Which location it used and whether the save finished |
| A file appears in a Recent list | A program or system knows about the item | Its actual storage location and whether it remains available |
| A cloud app says Saved | Its saving process reports success | Which account and document you are using; any relevant sync status |
| A browser shows a downloaded item | A download may have completed | Its filename, final destination, and whether it is safe to open |
| You printed a page | A printed output was requested | Whether a separate digital file was also created |

> **Save-location habit:** Before closing an important document for the first time, know its name and destination and look for a successful save indication. A familiar filename without a known location is an incomplete record.

### Worked example: one letter, three destinations

Suppose Maya writes `request-letter.docx` using the same word-processing application on three occasions. On Monday she saves to **Documents** on her personal computer. On Tuesday she creates a different file on her employer's **shared drive**. On Wednesday she uploads another copy to a **cloud account**. The filenames can be identical, but the destinations and access rules differ. Opening one does not prove that the others are up to date. To identify the intended version, Maya must know which location and account she is working in.

This example illustrates a principle that will recur throughout the course: **a filename does not uniquely identify a file across all storage locations**. The folder path, account, drive, and sometimes version information are part of knowing which item is which.

## 2. What are common places to save files?

A personal computer normally offers several familiar folders. Their names describe typical uses, but they do not force applications to store particular kinds of content there. You can save a letter in a folder named Pictures, or a photograph in Documents, although that may make your organization confusing. A sensible location is one you are allowed to use, can identify again, and can reliably access when needed.

### Documents

The **[[documents-folder|Documents]]** folder is a common place for letters, essays, forms, notes, PDF files, and other written work. It is often shown in the File Explorer navigation pane on Windows or the Finder sidebar on Mac. Some programs choose Documents automatically; others reuse the most recently used location or save directly into a cloud account. **Documents is a common convention, not a universal rule.**

For example, a learner may have a main Documents folder and a subfolder named `Course Notes`. The file `week-1-notes.txt` could be saved inside that subfolder. A different file with the same name could exist in Downloads. To determine which one is intended, compare both the filename and the full path.

### Desktop

The [[desktop-folder|Desktop]] is the folder whose items can normally appear as icons on the desktop workspace. People sometimes save files here because they can see them immediately. A crowded desktop, however, makes items hard to recognize and does not guarantee that the files are backed up. A desktop shortcut is not necessarily the stored file itself; it may simply point somewhere else. A Windows or Mac Desktop may also be synchronized with OneDrive or iCloud Drive depending on settings.

### Downloads

The **[[downloads-folder|Downloads]]** folder commonly receives files downloaded through a browser or certain apps. It can contain installers, attachments, PDF documents, images, ZIP archives, and miscellaneous files. A browser can use another location if configured, and may ask you to select a destination. The fact that something was downloaded does not make it safe to open. On some devices, especially Chromebooks, the local Downloads area should not be treated as a permanent archival location.

### Pictures, Music, and Videos

**Pictures** is a common location for images; **Music** for sound files; and **Videos** for recordings or movies. These folders may be visible under a user account or through File Explorer links. A camera application might store photographs in its own library or app-specific directory instead of the Pictures folder. Phone photo libraries likewise have their own storage and presentation systems, so not every photograph appears as a separate file inside the device's general-purpose file browser.

### The internal drive and user account

Most Windows laptops and desktops have an internal storage device, often represented by **Local Disk (C:)** in File Explorer. A [[drive-letter|drive letter]] such as `C:` identifies a Windows volume, not a particular kind of content. Personal folders commonly reside under an account-specific area, often illustrated as `C:\Users\Maya\Documents`. Actual paths can be different due to account setup, organizational policies, network resources, or OneDrive folder redirection. Do not assume your username is the same as the folder name shown in every example.

The term [[user-profile|user profile]] refers to the collection of settings and personal locations associated with a signed-in account. On a shared computer, signing in to a different account may show a different Documents folder. Files associated with one account may require permission to access from another. Never bypass a permission warning or browse someone else's private directories as a class exercise.

### USB drives and external storage

A [[usb-drive|USB flash drive]], portable SSD, or external hard disk can appear as another location after being connected. Windows might assign a letter such as `E:`; on a Mac, the drive may appear under Locations in Finder. Drive letters are **not permanent identifiers**: the same USB device could receive a different letter on another PC or even a later connection. A label such as `CLASS-USB` helps, but you should still verify the intended device before copying or saving sensitive work. External devices can be lost, damaged, disconnected, or infected; they are not automatically safe backups.

### Network drives and shared folders

A school or workplace may provide a [[network-drive|network drive]] or shared folder managed by a server. In Windows, it might appear under **This PC** with a drive letter, or be reached through a network path. Access may depend on a signed-in account, company network, VPN, or permission. Network storage is not necessarily stored on the computer in front of you. You should use only locations authorized for your work; a shared directory is not a suitable place for private information unless its permissions and policies are appropriate.

### Cloud storage

A [[cloud-storage|cloud-storage service]] stores files under an online account, sometimes with a computer folder that integrates the service into File Explorer or Finder. OneDrive, Google Drive, and iCloud Drive are examples. A cloud folder can look much like a local folder, but availability can depend on sign-in, internet access, service status, and whether a particular item has been downloaded for offline use. The cloud may also synchronize deletions or changes, so it should not be treated as an independent backup merely because its content is online.

| Common location | Why learners encounter it | Important qualification |
| --- | --- | --- |
| Documents | Letters, assignments, forms, reports | It may be stored locally or redirected to cloud storage |
| Desktop | Easily visible working items | Visible icons may be shortcuts; the folder may sync to cloud |
| Downloads | Browser downloads and saved attachments | Defaults differ by browser and device; inspect unfamiliar files |
| Pictures | Photographs and image files | Photo apps may use separate libraries |
| Music or Videos | Audio or video content | Apps can maintain their own media libraries |
| Internal drive | Operating system, apps, personal files | System folders are not for beginner exploration or editing |
| USB or external drive | Transfer or portable storage | May be removed, lost, or assigned a new drive letter |
| Network share | Authorized team or classroom work | Access and permissions can change |
| Cloud account or synced folder | Online and cross-device access | Sync, account, connectivity, and offline status matter |

### Common does not mean guaranteed

If you cannot find a file in Documents, that alone says nothing about whether the file exists elsewhere. It might be under Downloads, a project folder, another user account, a connected drive, or an online service. The appropriate first question is **“Which application handled the file, and where did that application tell me it saved it?”** A later lesson, *Finding Lost Files*, covers systematic searching in greater depth. Here the focus is learning what locations mean before anything goes missing.

> **For this lesson:** Do not move a real file just to make it appear in a standard folder. We are learning to inspect destinations; creating, renaming, and moving items are separate skills taught later in the course.

## 3. How do you inspect file locations in Windows 11?

Windows 11 provides **[[file-explorer|File Explorer]]**, a built-in application for browsing files, folders, and connected storage. This lesson uses File Explorer as an observation tool. You do not need to create or change a file to learn where storage locations appear. Your task is to recognize the *name of the current place*, its relationship to other folders, and whether it appears to be on this computer or connected to another service.

### Open File Explorer

On a Windows 11 computer you own or are permitted to use:

1. Press **Windows key + E**, or select the folder-shaped File Explorer icon if it is present on the taskbar.
1. Observe the opening view. It may show **Home**, **Quick access**, recently used items, favorite items, or suggested content, depending on version and account settings.
1. Look for the left-hand [[navigation-pane|navigation pane]]. Common entries include Home, Desktop, Documents, Downloads, Pictures, This PC, drives, and OneDrive if configured.
1. Select **Documents** to display that location if available. This is normally a viewing action. Observe the name of the location and any items shown without opening or modifying them.
1. Select **This PC** to see available local drives and, where applicable, removable or mapped network locations.
1. Close File Explorer when finished. Nothing needs to be changed.

You might see slightly different labels or layout because Windows updates, administrator policies, and connected services change the display. The goal is **recognition**, not reproducing one particular screenshot.

### The navigation pane is not itself the destination

File Explorer is like a map. The navigation pane lists routes or links to places. Selecting **Downloads** takes you to the Downloads location; it does not create or move downloaded files. Selecting **OneDrive** may show an online-synchronized folder on the computer; it does not mean your Documents folder must also be in OneDrive. A pinned location is a convenient entry point, not proof of where every visible item physically resides.

The main content area shows the files and folders at the selected location. Depending on the view, Windows may display columns such as **Name**, **Date modified**, **Type**, and **Size**. Those properties may help distinguish two items with similar names. Seeing a file in File Explorer is useful evidence, but you should also note the folder or service shown in the location bar.

### The address bar and breadcrumbs

Near the top of File Explorer, the [[address-bar|address bar]] or location display identifies the current folder. Windows may show a chain such as **This PC > Documents > Course Notes**, or a path using a drive name. Each part of that chain is often called a [[breadcrumb|breadcrumb]]. Clicking a breadcrumb may take you to that level; for now, just read it.

A [[path|path]] is the sequence of locations leading to a file. The following paths are illustrative, not commands to type:

- `C:\Users\Maya\Documents\Courses\notes.txt`
- `C:\Users\Maya\Downloads\handout.pdf`
- `E:\Classwork\presentation.pptx`

In the first example, `C:` identifies a Windows volume; `Users` is an account-directory area; `Maya` represents a user-profile folder; `Documents` and `Courses` are folders; and `notes.txt` is the file. In the second, the file is inside Downloads. In the third, `E:` is a hypothetical drive that might be a removable device, but the letter alone cannot prove that it is a USB drive. A name ending in `.txt` or `.pdf` is part of a filename, not another folder level.

### A location can appear in more than one form

The same Documents folder might appear as a pinned navigation item, a breadcrumb destination, a full path, and a location selectable in an application Save dialog. These are different ways to reach the same place. However, you cannot assume **every** item called Documents is the same place: a computer might have a local Documents folder, a OneDrive Documents folder, and a Documents folder within an external or shared drive.

For example, these hypothetical destinations are not interchangeable:

- **Local folder:** `C:\Users\Maya\Documents\Reports`
- **OneDrive-related folder:** a `Documents` folder shown underneath a signed-in OneDrive account
- **Shared folder:** `Reports` shown underneath an employer-managed network location

On a system with OneDrive folder backup enabled, the familiar Documents entry may itself point to a OneDrive-managed location. Do **not** assume that the first example must represent the actual active Documents path on every Windows 11 system. Check the visible folder hierarchy, account label, and application save destination rather than inferring the result from its name.

### Home, Recent, Quick access, and search

The terms **Home**, **Recent**, and **Quick access** can describe collections, start pages, or saved shortcuts. A [[recent-items|Recent list]] usually helps you locate items recently opened or edited; it is not generally a permanent folder into which those files are copied. Quick access and favorites can point to actual directories elsewhere. Searching from File Explorer may also return results from multiple places, depending on your search scope and configuration.

Suppose you select `budget.xlsx` under Recent. That selection does not prove the file is stored in `C:\Recent` or in Documents. It may live in Downloads, OneDrive, or a shared folder. When the destination matters, inspect the item's available details or its actual location rather than treating the Recent listing as the storage path.

### Properties and file location

For a file you own or are authorized to inspect, File Explorer may offer a **Properties** command from the context menu (sometimes under **Show more options**) or by using **Alt + Enter** after selecting the file. Depending on the item and storage service, the Properties window may show the type, size, and a **Location** value. Other services have different ways to display a location. **Do not select an unfamiliar executable or open a suspicious downloaded file to check where it is stored**; safe properties inspection does not require running the file.

When an application offers **Open file location**, **Show in folder**, or a similarly named action, it may take you to the containing directory. That can help verify where a file is stored. But a shortcut, cloud placeholder, or search result may behave differently, so always read the destination shown after opening the containing location.

### What if an item is missing from the navigation pane?

A folder's absence from the sidebar does not mean it is gone. A link may be unpinned; a drive may be disconnected; a cloud account may be signed out; a shared location may require network access; or a folder may be inside another directory. Because this lesson is about identifying destinations, stop at the observation stage when a location requires credentials or elevated permissions. Never change account settings or attach an unknown drive merely to complete a classroom exercise.

| File Explorer feature | What it tells you | What it does not establish |
| --- | --- | --- |
| Navigation pane | Available links to locations | That all listed places are stored locally |
| Address bar or breadcrumbs | Current folder hierarchy | That every visible item is fully downloaded offline |
| This PC | Available drives and devices as exposed by Windows | That every disk is removable or personally owned |
| Home or Recent | Items shown for quick discovery | The files' original storage folders |
| File properties | Descriptive details, sometimes Location | Whether content is trustworthy or properly backed up |
| OneDrive entry | A connected OneDrive location, if configured | That every folder on the PC syncs to OneDrive |
| Search results | Matching files or documents in the selected search scope | That all matching items are stored in one folder |

> **Core Windows skill:** Open File Explorer, select a known location, and say aloud or write down **which folder or service is being viewed**. That is the foundational skill; moving files can wait for a later lesson.

## 4. How do applications choose a save location?

A document editor, drawing program, spreadsheet application, or web browser may choose its own starting folder when you request a save. Some reuse the last destination. Others use Documents, Downloads, a folder defined by your account settings, or a cloud workspace. A **[[save-dialog|Save dialog]]** is the moment to verify the location before the file is created or updated.

### Read a typical Save As dialog

Imagine a word processor displaying a window with the following fields:

- **Destination:** Documents > Classwork
- **File name:** `practice-letter.docx`
- **Save as type:** Word document
- **Action button:** Save

The destination is the folder where the file would be placed. The filename is what that new file would be called. The file type describes the format or extension being produced. The button performs the requested save. These elements are related, but none substitutes for the others: choosing a filename without checking the destination can leave the file somewhere unexpected.

A typical Windows 11 desktop application may display a **Save As** or **Save a Copy** workflow with a cloud service, local folders, and a Browse option. The exact words depend on the application and version. Some programs show an initial simplified view, followed by a full Windows file picker if you choose **Browse**. A browser, design application, or enterprise app may have a completely different save interface. The transferable skill is to identify **where**, **under what name**, **in what format**, and **with what save status**.

### A safe six-question check

Before using Save for an important item, ask:

1. **Which file am I working on?** Confirm its title and, where shown, its existing location.
1. **Which destination is selected?** Is it Documents, a project folder, cloud account, network drive, or removable device?
1. **Which account or drive is involved?** Personal OneDrive and school OneDrive are separate destinations even if both show familiar folder names.
1. **What filename is proposed?** Does it clearly identify the item without changing an unrelated file?
1. **What format is being saved?** Will the intended reader or application recognize it?
1. **Did the save succeed?** Check for an application confirmation, saved indicator, or appropriate completion status.

As a beginner, do not enter a colleague's folder or replace an existing file to practice. You can read an example Save dialog on paper, or open your own application's file picker and cancel without saving anything.

### Existing file versus first-time save

For a file you already opened, **Save** commonly writes updates to the existing destination. If you opened `minutes.docx` from a USB drive, merely pressing Save may update that external copy rather than creating a local one. If you opened a cloud-hosted document, an integrated application may write changes back to that account. A visible file does not automatically migrate to Documents just because you edited it on this computer.

For a new unsaved document, **Save** may behave similarly to **Save As** and ask you to supply a filename and destination. **Save As** is often useful when you intentionally need another named file, location, or output format. Some web applications use **Download** or **Export** to create a separate local copy of an online document. When a service offers **Make a copy**, the new item may remain in the same online account rather than be downloaded to the PC.

### Autosave and synchronization are two distinct processes

In an online word processor, autosave may record edits in the service's account. In a desktop program with a synced cloud folder, autosave may write locally while a [[synchronization|synchronization]] system uploads the change later. A sync indicator that says **Pending** or **Error** is a reason not to claim that all devices have the latest version. Conversely, a file available offline may be a downloaded copy of an online original. The details depend on the application and service configuration.

**Scenario:** A student edits a presentation on a laptop while offline. The application says the changes are saved locally. This can be true even though the school cloud drive has not received the newest version. The student should not assume the file is available on a second computer until the service has synchronized successfully. In another app, offline editing may not be supported at all. Always read the product's actual status rather than generalizing from one program.

### Overwrite warnings and duplicate names

If you save `report.docx` in a folder that already contains a different file with that name, the application may ask whether you want to replace the existing file, prevent the collision, or automatically propose another name. The correct response depends on your intention. **For this lesson, cancel the action rather than practicing replacement.** Overwriting can destroy work, and synchronization can distribute the unwanted change.

Sometimes people save a file and then save another copy to a different folder. The resulting files may appear identical until one is edited. A name such as `final-final.docx` is not reliable version control. Future lessons on naming and copying will cover a more systematic approach. For now, record the destination and avoid making unnecessary duplicates.

| Application action | Typical result | Beginner question |
| --- | --- | --- |
| Save a new document | Creates a stored item after destination is selected or inferred | Where will the new item go? |
| Save an existing document | Updates that item's current location | Which original am I updating? |
| Save As or Save a Copy | Often creates a separately named or located copy | Is the new location the intended one? |
| Export or Download | May create a file outside the app's normal workspace | Where will the exported or downloaded copy be stored? |
| Make a copy in a web app | Often creates another item in the online account | Is this a cloud copy rather than a local download? |
| Autosave | Saves changes according to app and account settings | Has it actually completed, and where? |
| Synchronize | Transfers or reconciles changes between connected locations | Is synchronization finished or still pending? |

### A worked scenario: the wrong account

An instructor has a personal Microsoft account and a school account. Both offer OneDrive. The instructor saves `unit-plan.docx` to a OneDrive folder listed under the personal account, then later signs into the school's computer and cannot find it in the school account. The document may have saved successfully; the problem is that **the two accounts have different storage spaces**. Before deciding the file is missing, the instructor should verify which account was selected. They should not transfer institutional records to personal storage without permission.

> **Key control:** Choosing **Save** answers *whether you want to save*. Identifying **the selected destination** answers *where the information will be stored*. Both matter.

## 5. Where do downloads, attachments, and app files go?

Many files first arrive through a browser, email application, messaging service, scanner, or phone camera. These workflows can look different from saving a document you wrote yourself. The decisive distinction is between an item that remains in its original service and a copy deliberately placed into a storage destination.

### Browser downloads

A browser such as Microsoft Edge, Chrome, Firefox, or Safari may store downloaded files in a designated **Downloads** folder. Its settings may instead specify another location or ask for a destination each time. A browser's Downloads panel or history can often show recent downloads and, for completed items, provide a way to view the file's containing folder. This is useful for checking the destination without opening the downloaded item itself.

For example, imagine downloading an authorized course worksheet called `lesson-handout.pdf`. The browser may save it to `Downloads`, but it could instead place it in a folder chosen through **Save As**. If the download history says complete, that is stronger evidence than merely seeing the worksheet previewed in a tab. If it reports failed or canceled, do not assume a usable file exists. Never repeatedly download suspicious items just because a web page claims that a file is needed.

### Viewing versus downloading

When a website displays a PDF inside the browser, you may be viewing content served from a website or temporarily cached by the browser. The fact that it renders on screen does not necessarily mean you created a named PDF in your Documents folder. A separate download control may save a file that you can later locate. A browser may also automatically handle files through an application or default preference. **Read what the browser actually reports** instead of relying on one universal rule.

### Email attachments

An attachment inside an email message is associated with the email service. **Preview** may show its contents without saving an ordinary copy to a chosen folder. **Download** may save an independent local copy to the browser's default location. **Save to Drive**, **Save to OneDrive**, or a similar service command may instead place the item in a cloud account. The attachment can therefore exist in multiple places—or remain only in the original message if you never save another copy.

For instance, an invoice named `invoice-042.pdf` might remain attached to an email while a downloaded copy appears in `Downloads` and an uploaded copy appears in a business drive. These should not be assumed to be the same working file. A change to a local copy normally does not rewrite the original email attachment.

**Security principle:** Do not open, run, or enable editing/macros in unexpected attachments merely to see whether they saved. Inspect the sender and context, avoid untrusted downloads, and follow the security policies of your school or workplace. An apparent filename or familiar extension is not proof of safety.

### Images from cameras and messaging apps

A smartphone camera normally stores photographs within a photo library managed by the device and, depending on settings, a cloud photo service. That library is not necessarily identical to the phone's general-purpose Files or file-manager app. Photos received through messaging or email may remain in the message until you explicitly save them, although some apps automatically store or display media in a device library. The exact location and whether an original-size copy exists depend on the app and the user's settings.

On a Windows PC, an imported photograph may go to Pictures, a selected import folder, or a cloud-synchronized photo library. Do not assume the image was imported simply because you can see a thumbnail of it on a connected phone. A visible preview might still refer to the original device or online service.

### Where do app-specific files belong?

Some applications manage information in dedicated workspaces rather than ordinary Documents folders. A note-taking app may keep notes under the user's account; a drawing app may save projects in its library; a game might store save data in a special directory. These application-specific places may not be obvious from the standard File Explorer sidebar. The correct beginner approach is to learn the app's **File**, **Open**, **Save**, **Export**, or account-location options without manually editing internal application-data directories.

A web-native document, such as an online collaborative document, may be stored as an item in the service instead of as a normal `.docx` file on the computer. A user may need to use a download or export command to produce a local file. Exported formats may change how collaborative features or editing behave. The presence of the online document in the service does not guarantee a local file was created.

### Temporary files and cache are not a filing system

Computers may create [[temporary-file|temporary files]] and [[cache|cached]] content to speed operations or support recovery. These are not reliable substitutes for files deliberately saved in an identified destination. The system or application may remove them automatically. Do not browse system cache directories, recover deleted temporary data, or change hidden folders for this lesson. If an application did not clearly save your work, treat that as a question to resolve in the application rather than assuming the operating system has a usable backup.

### A short decision guide

| Source of information | What you saw | Where to look first for a deliberately saved copy |
| --- | --- | --- |
| Word processor | You selected Save or Save As | The destination shown in the app's file information or Save dialog |
| Web browser | Completed download | Browser's downloads view and configured download folder |
| Email service | Attachment preview | The email message; no local file should be assumed |
| Email service | Downloaded attachment | Browser or email app's download destination |
| Cloud document editor | Saved or autosaved online document | Correct account and online document location |
| Smartphone camera | Took a photo | Device's photo library and relevant cloud settings |
| Messaging application | Viewed received image | The conversation or media library until a separate save is confirmed |
| Scanner or printer app | Scanned a document | The destination chosen in the scanning application |
| USB device | Opened a file directly from the drive | The connected device, unless a separate copy was made |

> **Practical takeaway:** A preview, a recent-item entry, and a saved copy are three different ideas. The command you chose—and the destination it reported—determines which one you have.

## 6. How do storage locations differ across devices and services?

A file location answers **where the information is managed and how you access it**. That answer may involve physical storage, a signed-in account, a removable device, or a network service. Modern computer interfaces often hide the technical details to make saving simpler. Your goal is not to memorize disk technology; it is to notice which *kind of place* you have selected and what conditions must be met to reach your files again.

### Local storage: associated with the device

[[local-storage|Local storage]] means storage on or directly associated with the current computer, commonly its internal SSD or hard drive. A file saved only on an internal drive is usually available without an internet connection, provided you can sign in and the device is working. It does not automatically appear on another computer. If the original drive is lost or damaged and no independent recoverable copy exists, the file may be lost.

One common misunderstanding is that turning a computer off deletes files. Ordinary persistent storage is designed to retain saved data after shutdown, unlike the temporary working contents of RAM. Another misunderstanding is that simply saving locally creates an external backup. Local saving protects against losing unsaved edits; it does not by itself protect against device failure, theft, ransomware, or accidental deletion.

### External storage: connected separately

[[external-storage|External storage]] includes USB flash drives, portable SSDs, memory cards, and external hard drives. A file saved on an external device usually stays with that device rather than automatically moving to the computer's internal drive. Once unplugged, that specific location is normally unavailable until it is reconnected. Operating systems provide an appropriate **Eject** or **Safely Remove** workflow to reduce the risk of interrupting writes. Do not disconnect a drive during an active save or transfer.

External media may have different folder layouts, labels, and file systems. For this beginning lesson, it is enough to recognize its name in the storage list and understand that removal affects access. More detailed device handling is part of the later **USB Drives and External Storage** lesson.

### Network storage: accessible over a connection

A [[network-share|network share]] may be administered by a school, business, library, or household server. You might be able to open its folders from File Explorer without knowing the precise machine that stores the data. Unlike a purely local file, access may depend on network connectivity and account permissions. A file that fails to open while disconnected has not necessarily been deleted. Do not attempt to bypass organizational controls; if access is denied, ask the responsible administrator or account owner.

### Cloud storage: associated with a service and account

A cloud service stores data under a provider-managed account. You may interact with it through a browser, desktop sync application, or mobile app. Examples include **OneDrive**, **Google Drive**, and **iCloud Drive**. The visible folder may be integrated with your computer's file manager, but the underlying storage and synchronization rules are service-specific.

Two related ideas matter:

- **[[online-only|Online-only]]:** A file's listing or placeholder may be visible on the computer while the full contents still require a network connection to download.
- **[[offline-available|Available offline]]:** A local copy or cached data may be available without an internet connection, subject to the app's settings and limitations.

A third status is a **synchronized local file**, for which a copy exists on the device and the service keeps a corresponding cloud version in step. Icons and status labels can help distinguish these states, but their shapes vary by product and release. Do not make decisions from a green checkmark or cloud picture without learning what that specific service says it means.

### Sync is not always backup

[[sync|Synchronization]] is a process that keeps selected copies or versions consistent. If a synchronized file is edited on one device, a service may distribute the changes to others. If a synchronized file is deleted, that deletion may also be reflected on other devices. Some services provide a recycle bin, version history, retention period, or recovery features, but availability and rules differ. A [[backup|backup]] is a recoverable copy intended to preserve information after a problem. A synchronized folder can contribute to data protection, but it should not be assumed to be an independent backup without verifying the actual recovery policy.

**Scenario:** A learner stores `term-paper.docx` in a synchronized folder on a laptop and sees it on a second computer. That is convenient access. It does not prove a second independent archival copy exists. If an accidental change synchronizes everywhere, the learner may need version history or a separate backup to recover a previous version. Later in the course, **Basic Backups** covers deliberate recovery planning.

### OneDrive and the Windows folder-redirect question

Windows 11 can integrate OneDrive into File Explorer. Depending on how a computer is configured, **Desktop**, **Documents**, and **Pictures** may be included in OneDrive folder backup or redirect to OneDrive-managed paths. That means a normal-looking Documents folder may be part of a sync workflow. Other computers retain these folders as local-only locations. An employer may further redirect them to managed network resources. The correct approach is to **inspect your own system's displayed location and account configuration**; there is no single universal location that applies to every Windows installation.

For example, saving an assignment to a Documents entry while signed into a school OneDrive account may have different privacy, ownership, quota, and retention implications than saving to a personal Documents location. If you are unsure, do not move confidential information to another account merely to test the distinction.

### Mac: Finder and iCloud Drive

On a Mac, the built-in file-management application is **[[finder|Finder]]**. The sidebar commonly offers Desktop, Documents, Downloads, iCloud Drive, connected drives, and other familiar locations. A file can also be identified using Finder's path information or Get Info details. **Recents** helps locate recently used items; it is not necessarily the physical folder containing them.

If [[icloud-drive|iCloud Drive]] is enabled, documents may be stored and synchronized under the user's Apple Account. Some configurations include Desktop and Documents in iCloud Drive; others do not. A cloud item may require download before it is available offline. When you sign into a different Apple Account, you should not expect the same cloud files to appear automatically. Follow the Mac's actual storage settings instead of assuming it behaves exactly like Windows.

### Chromebook: Files app, My files, and Google Drive

On a Chromebook, **[[chromeos-files|Files]]** is the usual app for browsing stored content. It commonly exposes **My files**, **Downloads**, **Google Drive**, and attached devices when available. Google distinguishes the Chromebook's local Downloads area from cloud-hosted Drive content. ChromeOS may automatically remove some local downloaded data to recover space, especially when storage is limited; therefore, the local Downloads folder should not be treated as the only safe long-term copy of important work. A dedicated Drive location or another appropriate durable destination may be preferable, subject to account access and offline requirements.

Chrome browser settings can alter the usual download folder or ask for a destination on each download. A Google Docs document edited in a browser may remain in Google Drive as an online document; **Download** or **Export** may be needed to create a conventional local file in a selected format. Do not confuse the Files app's Google Drive view with the Chromebook's limited local drive capacity.

### iPhone and iPad: Files app versus Photos

On supported iPhone and iPad devices, the **[[ios-files|Files app]]** may show **On My iPhone**, **On My iPad**, **iCloud Drive**, and locations made available by other supported providers. The exact items shown depend on installed apps and settings. The phrase *On My iPhone* points to on-device locations accessible through that app, while *iCloud Drive* refers to account-managed cloud storage with applicable offline behavior. A provider may also expose its own app or a location inside Files.

The **Photos** app manages the photo library and does not display every item as though it were an ordinary document in Files. A photo visible in Photos may be stored, optimized, or synchronized according to the device's photo settings. An image saved from a browser or message may go to Photos or Files depending on the selected command and application. Before choosing **Save to Files**, read the folder and service offered in the location picker; do not assume that saving to the phone and saving to iCloud Drive are equivalent.

### Android: file manager, Downloads, and app storage

Android devices commonly provide a **Files** or **My Files** application, with names depending on the manufacturer and version. Available locations may include Downloads, Documents, Pictures, internal storage, and connected devices. Google Drive or another cloud service may appear separately or through a provider integration. Photos taken by the camera are often shown in a gallery or photo app; other apps may keep their data inside app-specific storage inaccessible through ordinary browsing.

Do not rely on a single universal Android folder path or attempt to change protected application directories. For beginner practice, use the file manager's visible locations and the save destination actually shown in the app you are using.

### Comparing the platforms

| Platform | Typical file browser | Locations you may see | What to verify |
| --- | --- | --- | --- |
| Windows 11 | File Explorer | Documents, Downloads, Desktop, This PC, OneDrive, USB or network drives | Actual folder path, account, and sync status |
| macOS | Finder | Documents, Downloads, Desktop, iCloud Drive, external disks | Finder location and whether iCloud settings are enabled |
| Chromebook | Files | My files, Downloads, Google Drive, connected media | Local versus Drive storage and offline availability |
| iPhone or iPad | Files and Photos | On My iPhone/iPad, iCloud Drive, app providers, Photos library | Whether the item belongs to Files, Photos, or a cloud account |
| Android | Files or manufacturer file manager; gallery or photos app | Downloads, Documents, internal storage, cloud provider | App-specific behavior and actual selected save destination |

### Shared computers, privacy, and work records

Knowing where a file is saved also helps you manage confidentiality. A document left on the desktop of a shared account might be visible to other users. A file in a team folder may inherit access rules that differ from a private folder. A cloud document can sometimes be shared by link even when the user never emailed a separate attachment. A personal account may not be approved for employer or school records. **Location and permission are related but separate questions:** a folder's name alone does not tell you who may access it.

Before storing sensitive work, confirm the organization's rules, the account or drive, and the expected audience. Avoid entering passwords, opening other users' materials, or sending personal information into an unapproved cloud service for this lesson. When in doubt, complete the same exercise using fictional filenames and locations.

> **Cross-platform principle:** A computer may display a cloud file, local file, and remote file through similar folder interfaces. Look for the **service or drive name, account, offline status, and actual destination** instead of assuming every visible item is stored in the same place.

## 7. Guided practice: Read and confirm save locations

These five activities are designed to reinforce the difference between a file's name, the location in which it is stored, and a shortcut or interface that merely displays it. They require **no file modification**. Each activity has a paper alternative and an expandable solution. Do not upload private documents, open unknown attachments, or alter cloud settings just to finish the lesson.

### Activity 1: Identify five everyday locations

**Objective:** Distinguish a standard folder, device, and cloud destination.

**Scenario:** You are looking at a computer that offers these locations: Documents, Downloads, Pictures, `CLASS-USB (E:)`, and OneDrive - School.

1. Write down which location is ordinarily associated with written documents.
1. Identify the location most likely to contain recent browser downloads under common settings.
1. Identify the location suggesting a separately connected storage device.
1. Identify the location managed under a school cloud account.
1. Explain whether the list proves that the Pictures folder is local rather than synchronized.
1. For an extra observation, open File Explorer on your authorized computer and locate any two of these labels. Do not open their files.

:::answer Show Activity 1 solution
1. **Documents** is the conventional location for written work, although a program can save elsewhere.
1. **Downloads** is a common browser-download destination, subject to browser settings.
1. `CLASS-USB (E:)` suggests a connected device, but you should verify the device identity; the drive letter alone is not permanent proof.
1. **OneDrive - School** identifies a cloud-service location associated with a school account.
1. **No.** Pictures can be local, synchronized, redirected, or otherwise managed according to the system's configuration.

The teaching point is to identify plausible destinations while recognizing what their labels **do not** prove.
:::

### Activity 2: Read a path without changing anything

**Objective:** Interpret a Windows file path.

Consider the fictional path `C:\Users\Maya\Documents\Training\week-2-notes.txt`.

1. Identify the volume or drive at the start of the example.
1. Identify the account-folder name used in the illustration.
1. Identify the general personal-document folder.
1. Identify the subfolder holding the file.
1. Identify the filename, including its extension.
1. Explain whether this example proves that your own Documents folder is stored at the same path.

:::answer Show Activity 2 solution
1. **`C:`** is the Windows volume shown in the example.
1. **`Maya`** is the illustrative user-account folder name.
1. **`Documents`** is the common personal-document directory in the path.
1. **`Training`** is the subfolder that directly contains the file.
1. **`week-2-notes.txt`** is the filename, with `.txt` as its extension.
1. **No.** Your Windows account name and configured Documents destination may differ, and OneDrive or organizational redirection may change the actual path.

A path is useful because it describes the chain of locations, not just the final filename.
:::

### Activity 3: Inspect a Save As scenario

**Objective:** Separate filename, file type, and destination.

Imagine a Save As window that shows **Save in: Documents > Workshops**, **File name: attendance-notes.docx**, and **Save as type: Word Document**.

1. State which folder is selected as the destination.
1. State the proposed filename.
1. Explain why the words *Word Document* are not the destination.
1. The user originally intended to save on a USB drive. Has that intention been satisfied by the current selection?
1. What should the user do before pressing Save?
1. Optional observation: In an application with a file picker, inspect but **cancel** the dialog; do not write or replace a file.

:::answer Show Activity 3 solution
1. **Workshops within Documents** is the selected folder.
1. **`attendance-notes.docx`** is the proposed filename.
1. **Word Document** describes the file format or type, not a storage location.
1. **No.** The dialog currently shows a Documents subfolder, not the requested USB drive.
1. They should identify and deliberately select the authorized USB destination, confirm the device identity and filename, and only then save if the task requires it. For this lesson, simply explain the action; do not perform it.

The most important skill is recognizing a mismatch **before** creating or overwriting a file.
:::

### Activity 4: Sort five storage statements

**Objective:** Decide what each statement proves.

For each statement, answer **Yes**, **No**, or **Not enough information**, and explain your reasoning:

1. An online document opens in a web browser. Does that prove a copy exists in the laptop's Documents folder?
1. An email attachment is previewed. Does that prove it was downloaded?
1. A Windows file is visible under Recent. Does that prove the file is stored in a folder named Recent?
1. A synchronized folder shows a file, but its status is Online-only. Can you assume it is fully available without internet access?
1. A document saved directly on a local internal drive is still visible after a normal restart. Is that consistent with persistent storage?

:::answer Show Activity 4 solution
1. **No.** Opening an online document does not establish that a local Documents copy was created.
1. **No.** Attachment preview and download are distinct actions.
1. **No.** Recent is generally a convenient view or collection, not the original file's folder.
1. **No.** Online-only indicates that full local content may not be present without downloading it first.
1. **Yes.** Persistent storage ordinarily retains saved files after shutdown or restart.

Do not generalize from an icon or interface view when the evidence does not establish a storage location.
:::

### Activity 5: Make a safe location decision

**Objective:** Choose an appropriate initial question in a real workflow.

**Scenario A:** A student is using a school computer and has finished a confidential class report. The Save dialog offers **Downloads**, **Personal OneDrive**, and **School OneDrive**. The instructor has told students to submit work through the school system.

**Scenario B:** Someone says a photo is gone because it is not in the Windows Pictures folder, but they can still view the photo in a phone gallery.

**Scenario C:** An employee finds an invoice in the File Explorer Recent view while disconnected from the company network. Opening it fails.

For each scenario, write (a) what is already known, (b) what remains uncertain, and (c) the safest next verification step. Avoid supplying real account details or confidential document names.

:::answer Show Activity 5 solution
**Scenario A:** The school workflow requires an authorized institutional destination. The user should verify the school's stated submission or save location and select the correct school account or system. They should not assume that Personal OneDrive is approved merely because it is available. The course task does not require any real upload.

**Scenario B:** The photo is visible in the phone's photo library, so it may still exist there or in an associated cloud service. That does not establish a copy in Windows Pictures. Check the photo app and its approved export/import workflow before claiming that a Windows file has been created. Do not delete or move the photo as a test.

**Scenario C:** Recent identifies an item that was used previously but not necessarily its current physical location. The missing connection or permission could explain the failure. The employee should verify the actual location and approved network access with workplace guidance; the file's absence from an offline computer does not by itself prove it was erased.

**Shared principle:** Identify the intended destination, account, connection, and permission before acting. Where information is sensitive, verify policy before making a copy.
:::

### Practice reflection

Without consulting the solutions, complete these sentences:

1. The name of a saved item is its __________, while its __________ tells me where it is stored.
1. A browser's Downloads page is useful because it may show __________ and the containing folder for a completed download.
1. Seeing a file in Recent does not prove it is stored __________.
1. Before saving to the cloud, I should check the __________ and the selected folder.
1. If a cloud item is online-only, I should not assume __________ is possible.

:::answer Show the practice reflection answers
1. **Filename; location.**
1. **Download status or history.**
1. **In a folder named Recent.**
1. **Account or service.**
1. **Offline access without first downloading or otherwise making the content available offline.**
:::

## 8. Common misconceptions and avoidable problems

### “I selected Save, so it must be in Documents.”

An application may use Documents, its last-used folder, an account workspace, a removable drive, or a configured cloud destination. **Save** describes an action, not a guaranteed folder. The correct response is to inspect the destination and save status, especially the first time a document is created.

### “Everything I see in File Explorer is on my computer.”

File Explorer can show local storage, connected devices, network shares, and cloud-integrated content. A visible cloud item may be online-only. A network folder may be unavailable when disconnected. The interface presents a navigable view; it does not mean every item is physically located on the internal disk.

### “Recent is the folder where Windows saves work.”

Recent usually lists files recently opened or used. It does not ordinarily relocate them. If you need to know where an item lives, consult its actual location or the app's file information.

### “The Desktop is always safe because I can see the file.”

Visibility is not protection. The Desktop can contain real files and shortcuts, may be shared or synchronized depending on settings, and may not have an independent backup. A crowded Desktop can also make duplicate files difficult to distinguish.

### “Cloud storage means there must be a second protected backup.”

Cloud synchronization can improve availability but may also propagate deletions or mistakes. Some services maintain version history or recovery windows, but rules vary. A recovery plan requires verifying how independent copies are kept and restored.

### “Saving a document to OneDrive means every device already has it.”

Account sign-in, connectivity, sync progress, file permissions, and offline configuration affect availability. If a sync client says **Pending** or **Error**, do not promise that the newest version exists on another device.

### “A USB drive always uses the letter E.”

Windows assigns drive letters based on current configuration. A device's letter may differ across computers or sessions. Read the drive label, context, and known device identity before selecting a destination.

### “If I preview an email attachment, I have downloaded it.”

A preview might show a remote or temporary representation. Downloading or saving a separate copy is a distinct action. A file downloaded from email may then be stored in the browser's chosen folder, not in the email program's apparent location.

### “If I cannot find it, it has been deleted.”

A missing item may be in another folder, another account, an offline network share, a disconnected drive, or a cloud workspace. Do not immediately recover, replace, reset, or reinstall software. First verify the original saving workflow and intended location. The course's later **Finding Lost Files** lesson teaches a more complete search process.

### “The same filename means the files are identical.”

Two folders or accounts can hold files with the same name but different contents. Likewise, the same working file may appear in multiple application lists. The path, storage service, account, and applicable version information help establish which file you are working with.

### “The program closed, so my work must have saved.”

Some applications autosave; others ask you to save; some offer recovery after a crash. Program closure by itself does not prove a durable save occurred. Learn the app's indicator and, if necessary, verify the document by returning to the known location rather than trusting memory.

### “I can save private documents anywhere that appears in the menu.”

Technical access does not establish authorization. A personally accessible cloud account may be inappropriate for school, employer, client, or family records. Choose the approved destination and confirm who may access it. Do not use real private data for practice.

> **Troubleshooting rule:** First identify the app, filename, account, destination, and save status. Do not respond to uncertainty by deleting files, changing system folders, or installing unknown recovery utilities.

## 9. Essential vocabulary

Select the dotted-underlined vocabulary terms earlier in the lesson to view quick definitions. When an encyclopedia reference is available, the popover can provide a route to additional academic reading. The summary below is also available without using any interactive controls.

- **File:** A named item of stored information, such as a document, image, or recording.
- **Folder:** A container that groups files and other folders.
- **Save:** Record or update information so it remains available later.
- **Save As:** A command often used to choose a different name, destination, or format.
- **Filename:** The identifying name assigned to a file.
- **Storage location:** The drive, folder, service, or managed place in which an item is kept.
- **Destination:** The specific place selected to receive a saved item.
- **Path:** A sequence of location and folder names identifying where a file resides.
- **Drive letter:** A Windows designation such as `C:` for a storage volume.
- **User profile:** The account-associated settings and personal file locations on a computer.
- **Documents folder:** A conventional place to store letters, assignments, and other documents.
- **Downloads folder:** A common destination for files downloaded by browsers and apps.
- **Desktop folder:** The location whose items can normally appear on the desktop workspace.
- **File Explorer:** The Windows application used to browse files and folders.
- **Address bar:** The part of a file manager that identifies the current location.
- **Breadcrumb:** One part of a displayed folder-navigation path.
- **Save dialog:** An interface for choosing a filename, folder, and often file type.
- **Local storage:** Storage associated with the current computer, typically its internal disk.
- **External storage:** A connected device such as a USB flash drive or portable SSD.
- **Network share:** A file location provided over a network and subject to access permissions.
- **Cloud storage:** File storage accessed through a remote service and account.
- **Online-only file:** A visible cloud item that may require download before it can be opened offline.
- **Offline access:** Ability to use a file without an active internet or network connection.
- **Synchronization:** Keeping corresponding file versions or changes aligned across locations.
- **Backup:** A recoverable copy intended to protect against information loss.
- **Recent items:** A view that lists items recently used without necessarily storing them there.
- **Download:** Transfer of content into a receiving device or selected destination.
- **Autosave:** A feature that stores changes automatically according to app settings.
- **Cache:** Temporary stored data that helps a system or application operate.
- **Permissions:** Rules that determine who may read, edit, or manage a file or location.
- **Finder:** The macOS file-management application.
- **Files app:** A file browser used on Chromebooks or supported phones and tablets.

The central distinction is simple but important: the **same filename** can exist in multiple destinations, and the **same destination name** can refer to different underlying locations when accounts, devices, or cloud services differ.

## 10. Knowledge check

Choose **one answer** for each question, then select **Check answers** in the dashboard to see your score and explanations. The quiz is a local self-study assessment; no secure test proctoring or persistent gradebook is implied. The expandable key below offers manual review when interactive grading is unavailable.

:::quiz
? What is the most complete description of a saved file?
- [ ] A name shown in a Recent list
- [x] Recorded information kept at an identifiable location
- [ ] Only information visible on a screen
! Saving preserves information at a storage destination; a screen view alone is not proof of a completed save.

? Which detail identifies where a file is stored?
- [x] Its destination or path
- [ ] Its font size
- [ ] Its icon color
! The storage destination or path identifies the location; appearance does not.

? What does Save commonly do for an existing file?
- [ ] Always moves it to Downloads
- [ ] Always uploads it to a new account
- [x] Updates the file at its current location
! Save generally updates an existing working file; behavior varies by application.

? Which item is a conventional place to store written assignments?
- [x] Documents
- [ ] Recycle Bin
- [ ] Taskbar
! Documents is a familiar folder for written work, though apps can use other destinations.

? What is a common starting location for browser downloads?
- [ ] System32
- [x] Downloads
- [ ] Recently Deleted
! Downloads is common, but the browser may be configured differently.

? What is File Explorer in Windows 11?
- [ ] A cloud account that everyone shares
- [ ] A hardware drive
- [x] An application for browsing files and locations
! File Explorer displays files, folders, drives, and integrated storage locations.

? Which keyboard shortcut normally opens File Explorer in Windows 11?
- [x] Windows key + E
- [ ] Ctrl + P
- [ ] Alt + F4
! Windows key + E opens File Explorer.

? What does the address bar or breadcrumb chain help identify?
- [ ] A document's grammar
- [x] The current folder location
- [ ] Whether a file is trustworthy
! A breadcrumb chain indicates the current directory hierarchy; it is not a security verdict.

? In C:\Users\Maya\Documents\Course\notes.txt, what is the filename?
- [ ] Documents
- [ ] Course
- [x] notes.txt
! The last part of the path, notes.txt, is the file.

? What does a Windows drive letter such as E: establish by itself?
- [x] That it is a particular Windows volume at that time
- [ ] That the drive must be an approved USB device
- [ ] That the device can never change its letter
! Drive letters identify volumes in the current configuration; they do not permanently identify a device.

? What is the safest statement about File Explorer Recent?
- [ ] It always creates a duplicate in a Recent folder
- [x] It lists items used recently without necessarily moving them
- [ ] It guarantees those files are available offline
! Recent is a view or collection and does not ordinarily relocate the original files.

? Which pair of fields should you check in a Save As dialog?
- [ ] Screen brightness and cursor speed
- [ ] Window color and mouse button
- [x] Selected destination and proposed filename
! The destination and filename identify where the file will be created and what it will be called.

? A Save dialog shows Documents > Workshops, but you need an approved USB location. What should you do?
- [x] Verify and select the intended USB destination before saving
- [ ] Save immediately because the filename is correct
- [ ] Replace an unrelated file to test the result
! A correct filename does not compensate for selecting the wrong destination.

? What does Save as type usually describe?
- [ ] The account owner
- [x] The file format
- [ ] The USB drive label
! Save as type identifies the format of the saved output, not its location.

? What can an autosave or syncing indicator marked Pending mean?
- [ ] The file is guaranteed on every other device
- [ ] The computer must be broken
- [x] Some saving or synchronization remains incomplete
! Pending indicates that a process may not yet be finished.

? Which action may create a local copy of an online document?
- [x] Using an available Download or Export command
- [ ] Only reading its title
- [ ] Opening the online document in a browser
! Download or Export often creates a separate file; simply viewing an online document does not.

? What does an email attachment preview establish?
- [ ] That it has been placed in Documents
- [x] That the attachment can be viewed in the email environment
- [ ] That a USB copy was made
! Preview does not automatically mean a separate file was downloaded to your chosen folder.

? Which method is useful for checking a completed browser download location without running the file?
- [ ] Opening a suspicious installer
- [ ] Deleting the downloads history
- [x] Using the browser downloads list to show its containing folder
! Browser download managers commonly help identify a completed file and its containing folder.

? Which statement about Windows Documents is most accurate?
- [x] Its actual location may be local or redirected through OneDrive or another managed service
- [ ] It is always C:\Documents
- [ ] It always contains every saved document
! Documents is a standard folder name, but its physical or account-managed destination may vary.

? A cloud document is marked Online-only. What should you infer?
- [ ] It has been permanently erased
- [x] Its full content may require an internet connection to download
- [ ] It is necessarily backed up on a USB drive
! Online-only items may need a network connection before the full file can be used.

? What does synchronization typically try to do?
- [ ] Guarantee an independent archival backup
- [ ] Convert every file to PDF
- [x] Keep selected file changes consistent across locations
! Synchronization aligns versions or changes, sometimes including deletions.

? Why should synchronization not automatically be treated as an independent backup?
- [x] Changes or deletions may be propagated to other synchronized copies
- [ ] It can never involve the internet
- [ ] Synchronized files cannot have names
! Sync can spread accidental edits or deletions; a backup requires a reliable recovery arrangement.

? What happens when an external drive holding the only copy is disconnected?
- [ ] The computer copies it automatically to Documents
- [x] That location is normally unavailable until reconnected
- [ ] The original file moves into Recent
! A disconnected external device is not ordinarily available to the computer.

? Which is the built-in file-management application on a Mac?
- [ ] OneNote
- [ ] Paint
- [x] Finder
! Finder is the macOS file manager.

? Where should a Chromebook learner distinguish local Downloads from account-managed cloud files?
- [x] In the Files application, including My files and Google Drive
- [ ] Only in a word processor font menu
- [ ] In Windows Registry Editor
! The Chromebook Files app exposes local and connected Drive locations.

? Which description fits the iPhone or iPad Files app?
- [ ] It always contains the entire Photos library as ordinary files
- [x] It may show On My iPhone/iPad, iCloud Drive, and supported providers
- [ ] It can store files only on USB drives
! Files offers device and provider locations; Photos maintains a distinct photo-library experience.

? A file is visible on the work computer only when the company network is connected. Which explanation is plausible?
- [ ] The filename disappeared after every shutdown
- [ ] It was automatically deleted by Recent
- [x] It may be in a network share requiring connectivity
! Network shares depend on a connection and may also require permissions.

? What does a folder named Desktop always prove?
- [x] Nothing about whether the folder is synced or backed up without checking configuration
- [ ] That all files in it are backed up independently
- [ ] That every icon is a complete file rather than a shortcut
! A Desktop view can include shortcuts and may be local or synchronized.

? A student has personal and school cloud accounts with similar folder names. What should they verify?
- [ ] The screen resolution
- [x] The specific account and approved destination
- [ ] The shape of the folder icon alone
! Account identity and permission determine whether the chosen cloud location is appropriate.

? Which is the safest first response when a saved item is not where expected?
- [ ] Install an unknown recovery utility
- [ ] Delete similar files and try again
- [x] Check the original application, selected destination, account, and save status
! Start by verifying the known save workflow rather than making potentially destructive changes.

:::

:::answer Show the 30-question answer key with explanations
1. **B.** Saving preserves information at a storage destination; a screen view alone is not proof of a completed save.
1. **A.** The storage destination or path identifies the location; appearance does not.
1. **C.** Save generally updates an existing working file; behavior varies by application.
1. **A.** Documents is a familiar folder for written work, though apps can use other destinations.
1. **B.** Downloads is common, but the browser may be configured differently.
1. **C.** File Explorer displays files, folders, drives, and integrated storage locations.
1. **A.** Windows key + E opens File Explorer.
1. **B.** A breadcrumb chain indicates the current directory hierarchy; it is not a security verdict.
1. **C.** The last part of the path, notes.txt, is the file.
1. **A.** Drive letters identify volumes in the current configuration; they do not permanently identify a device.
1. **B.** Recent is a view or collection and does not ordinarily relocate the original files.
1. **C.** The destination and filename identify where the file will be created and what it will be called.
1. **A.** A correct filename does not compensate for selecting the wrong destination.
1. **B.** Save as type identifies the format of the saved output, not its location.
1. **C.** Pending indicates that a process may not yet be finished.
1. **A.** Download or Export often creates a separate file; simply viewing an online document does not.
1. **B.** Preview does not automatically mean a separate file was downloaded to your chosen folder.
1. **C.** Browser download managers commonly help identify a completed file and its containing folder.
1. **A.** Documents is a standard folder name, but its physical or account-managed destination may vary.
1. **B.** Online-only items may need a network connection before the full file can be used.
1. **C.** Synchronization aligns versions or changes, sometimes including deletions.
1. **A.** Sync can spread accidental edits or deletions; a backup requires a reliable recovery arrangement.
1. **B.** A disconnected external device is not ordinarily available to the computer.
1. **C.** Finder is the macOS file manager.
1. **A.** The Chromebook Files app exposes local and connected Drive locations.
1. **B.** Files offers device and provider locations; Photos maintains a distinct photo-library experience.
1. **C.** Network shares depend on a connection and may also require permissions.
1. **A.** A Desktop view can include shortcuts and may be local or synchronized.
1. **B.** Account identity and permission determine whether the chosen cloud location is appropriate.
1. **C.** Start by verifying the known save workflow rather than making potentially destructive changes.
:::

### Exit task: Explain the destination
Answer in your own words: **(1)** What information must you know to locate an intentionally saved file? **(2)** Why might a file visible in Recent not be available offline? **(3)** What are two reasons the wrong cloud account might cause confusion? **(4)** What will you check before you close an important document after its first save?

If you can identify a file's proposed filename and destination, recognize common local and cloud locations, and distinguish a saved file from a preview or Recent listing, you are prepared for the next lesson on creating folders.

## 11. MGU Library connections and next steps

These resources provide deeper treatment of storage organization and practical vendor instructions. Technical material is optional; the beginner activities and knowledge check above are sufficient for this lesson.

### MGU Encyclopedia and textbooks

- [Data Storage Methods — MGU Encyclopedia](/library/encyclopedia/computer-science/data-systems/data-storage-methods) — how storage technologies and organizational methods preserve information.
- [Operating Systems — MGU Encyclopedia](/library/encyclopedia/computer-science/software-systems/operating-systems) — how operating systems manage files, storage, accounts, and resources.
- [Computer Science Foundations, Chapter 14: Files, Tables, and Data Processing](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-14) — files, paths, folders, and persistent data.
- [Computer Science Foundations, Chapter 16: Operating Systems](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-16) — directory trees, file systems, permissions, and user interfaces.

### Official platform instructions

- [Microsoft: File Explorer in Windows](https://support.microsoft.com/en-us/windows/experience/fileexplorer/file-explorer-in-windows) — familiar folders and how Windows displays available storage.
- [Microsoft: Find your files and apps in Windows](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/find-your-files-and-apps-in-windows) — locating files from Windows and File Explorer.
- [Microsoft Edge: Find where your browser is saving downloads](https://support.microsoft.com/en-us/edge/find-where-your-browser-is-saving-downloads) — inspecting a browser download destination.
- [Microsoft: Change the default save location in OneDrive for Windows](https://support.microsoft.com/en-us/onedrive/how-to-change-the-default-save-location-in-onedrive-for-windows) — choosing OneDrive or This PC in supported save workflows.
- [Apple: Organize your files in Finder on Mac](https://support.apple.com/guide/mac-help/organize-your-files-in-the-finder-mchle9f0a1b2/mac) — Mac file locations and the Finder sidebar.
- [Apple: Add Desktop and Documents files to iCloud Drive](https://support.apple.com/109344) — why Mac Desktop and Documents may be synchronized.
- [Google: Open, save, or delete files on your Chromebook](https://support.google.com/chromebook/answer/1700055?hl=en) — local Downloads, Google Drive, and the Files app.
- [Apple: Find and view files and folders on iPhone](https://support.apple.com/guide/iphone/find-and-view-files-and-folders-iphe4bff8827/ios) — exploring supported Files app locations.

### Continue the File and Folder Skills course

[← Previous lesson: Files vs Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/files-vs-folders/) · [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) · [Next lesson: Creating Folders →](/department/computer-science/basic-computer-skills/file-and-folder-skills/creating-folders/)

> **Lesson completion checklist:** I can explain what saving accomplishes; distinguish a filename from its destination; recognize Documents, Downloads, Desktop, drives, and cloud locations; read a simple Windows path; identify the destination in a Save dialog; distinguish browser previews from downloaded copies; recognize online-only files and synchronization; and verify the correct account before storing sensitive work.

:::terms
file | File | A named collection of stored information such as a document, photograph, or recording | 
folder | Folder | A container used to organize files and other folders | 
save | Save | Record or update data in a storage destination for later use | 
storage-location | Storage location | A folder, drive, service, or managed area in which saved information resides | /library/encyclopedia/computer-science/data-systems/data-storage-methods
observation-first | Observation-first | A learning approach that begins by identifying and inspecting things without modifying them | 
filename | Filename | The name assigned to a file, including its extension when applicable | 
destination | Destination | The specific folder, drive, account, or service selected to receive a saved item | 
path | Path | A sequence of drives and folders identifying where a file or folder is located | 
save-as | Save As | An application command commonly used to choose a new name, location, or output format | 
save-dialog | Save dialog | A window or interface for choosing a storage destination, filename, and often file type | 
file-type | File type | A description of the format or content category of a file | 
download | Download | Transfer information from a service or source into a receiving destination | 
autosave | Autosave | An application feature that stores edits without requiring a separate manual Save action each time | 
documents-folder | Documents folder | A conventional location for written work and other document files | 
downloads-folder | Downloads folder | A conventional destination for files received through browsers or applications | 
desktop-folder | Desktop folder | The location whose contents can normally appear as icons on the desktop workspace | 
pictures-folder | Pictures folder | A conventional folder for image files, subject to application and account settings | 
drive-letter | Drive letter | A Windows designation such as C: or E: for a currently assigned storage volume | 
user-profile | User profile | The settings and personal file locations associated with a signed-in computer account | 
usb-drive | USB drive | A separately connected storage device that can hold files and folders | 
network-drive | Network drive | A storage location reached over a network, sometimes assigned a Windows drive letter | 
network-share | Network share | A folder or storage resource made available over a network under access rules | 
cloud-storage | Cloud storage | Remote account-managed storage accessed through network services, apps, or browsers | /library/encyclopedia/computer-science/data-systems/data-storage-methods
file-explorer | File Explorer | The built-in Windows application for browsing and managing files and storage locations | 
navigation-pane | Navigation pane | An interface region containing links to accessible folders, drives, and locations | 
address-bar | Address bar | The area of a file manager that shows or accepts a current location | 
breadcrumb | Breadcrumb | A label in a sequence that shows a location within a folder hierarchy | 
recent-items | Recent items | A list of previously used files that does not necessarily store the files itself | 
quick-access | Quick access | A File Explorer area offering convenient links to folders and recent items | 
local-storage | Local storage | Storage associated with the current device, typically its internal SSD or hard drive | /library/encyclopedia/computer-science/data-systems/data-storage-methods
external-storage | External storage | Storage connected separately from the main device, such as a USB drive | /library/encyclopedia/computer-science/data-systems/data-storage-methods
online-only | Online-only | A visible cloud-file state in which complete local content may need downloading for access | 
offline-available | Available offline | A state in which file content can be used without an active network connection | 
offline-access | Offline access | The ability to open or work with a file without a current network connection | 
synchronization | Synchronization | Keeping selected data or changes consistent between connected locations | 
sync | Sync | Short form of synchronization, which coordinates data or changes between locations | 
backup | Backup | A recoverable copy maintained to reduce the consequences of loss or damage | /library/encyclopedia/computer-science/data-systems/data-storage-methods
temporary-file | Temporary file | A file created for short-term processing or recovery rather than deliberate long-term storage | 
cache | Cache | A temporary store that helps software access or reuse information efficiently | 
permissions | Permissions | Rules that determine which users may read, edit, share, or manage an item | 
finder | Finder | The built-in file-management application in macOS | 
icloud-drive | iCloud Drive | An Apple cloud-storage service associated with an Apple Account | 
chromeos-files | Chromebook Files app | The app for browsing local and supported cloud files on a Chromebook | 
ios-files | iPhone and iPad Files app | An app for accessing supported on-device, iCloud Drive, and provider folders | 
android-files | Android file manager | An app for browsing accessible device and supported provider files on Android | 
file-extension | File extension | A suffix that often indicates a file format, such as .pdf or .txt | 
shortcut | Shortcut | A reference that points to another file, application, or folder without necessarily holding its content | 
file-manager | File manager | An app used to navigate and manage folders, files, and available storage | 
persistent-storage | Persistent storage | Storage designed to retain saved content when the power is off | /library/encyclopedia/computer-science/data-systems/data-storage-methods
cloud-account | Cloud account | A user or organization account through which online files and services are accessed | 
sync-status | Synchronization status | An indicator describing whether a cloud or local update has finished transferring | 
overwrite | Overwrite | Replace existing file content with a newer save or another item at the same destination | 
export | Export | Produce data in a chosen format or file, often separately from an app-managed original | 
mobile-photo-library | Mobile photo library | An app-managed collection of photographs and videos that is not identical to general Files storage | 
network-connection | Network connection | A connection used to reach local network resources or online services | 
:::

