Basic Computer Skills / File and Folder Skills

## Lesson 8: USB Drives and External Storage

You have a completed application form on a computer, but the place receiving the form needs it on another computer. A family member wants a copy of vacation photographs. A student needs to carry a presentation to a classroom that may not have reliable internet access. A small business wants an extra copy of records in case a laptop stops working. In each situation, someone may reach for a small USB flash drive or a larger external storage device. These tools are convenient, but the convenience creates questions: Which device should you use? How do you know that the correct drive is connected? Did the file really copy? Is it safe to unplug the device? And would you still have the information if the device were lost?

This eighth lesson in **File and Folder Skills** introduces [[external-storage|external storage]] through ordinary decisions rather than technical repair procedures. Windows 11 is the primary example. You will also see how external drives appear on Mac and Chromebook computers, what to expect on supported phones and tablets, and why device compatibility varies. The central habit is **connect deliberately, identify the correct drive, transfer a copy, verify it, and safely disconnect**. You will also learn that a portable drive is not automatically a [[backup|backup]] and that putting confidential records on an unprotected device can create serious risks.

Activities use a **blank or personally owned practice drive** and disposable sample files when available. You can complete every activity on paper without inserting a USB device. Never use an unknown drive found in a public place, initialize or format a drive containing information, or change settings on a school or employer device without authorization. A warning about a drive needing to be formatted is a reason to stop and investigate—not permission to erase it.

**Level:** Beginner · **Estimated study time:** 95–125 minutes · **Prerequisites:** File and Folder Skills Lessons 1–7 recommended · **Practice equipment:** Windows 11 computer and an authorized, nonessential USB drive optional; Mac, Chromebook, supported mobile device, or paper-only alternative permitted · **Safety:** Use practice files only, never format a populated drive, verify copies before relying on them, and eject storage safely before unplugging.

> **Essential idea:** A USB drive provides a **separate place to store information**, not an automatic guarantee of safety. Before copying, confirm the destination; after copying, confirm the result; before disconnecting, stop activity and eject. Keep an independent copy of important work somewhere else.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain how external storage differs from a computer's internal storage and from cloud storage.
1. Identify USB flash drives, external SSDs, external hard drives, SD cards, and readers by their typical roles.
1. Distinguish physical connector shape, data cable capability, file system, drive letter, and storage capacity.
1. Connect an authorized USB storage device, locate it in Windows 11 File Explorer, and check that it is the intended destination.
1. Copy a practice file to a removable drive and verify the file on the destination without deleting the original.
1. Explain why a transfer progress indicator is not the same as verifying the copied contents.
1. Safely eject removable storage in Windows 11, including what to do when the device is still in use.
1. Recognize risks from unknown devices, harmful files, physical damage, theft, and weak handling of sensitive information.
1. Describe common compatibility issues involving FAT32, exFAT, NTFS, APFS, adapters, and device power.
1. Compare relevant external-storage workflows on Mac, Chromebook, iPhone, iPad, and Android.
1. Distinguish a transfer copy from an independent backup and prepare a basic storage checklist.

### On this page

- [1. Understand external storage](#1-understand-external-storage)
- [2. Identify drives and connections](#2-identify-drives-and-connections)
- [3. Connect and inspect a drive in Windows 11](#3-connect-and-inspect-a-drive-in-windows-11)
- [4. Copy and verify files safely](#4-copy-and-verify-files-safely)
- [5. Eject and protect your storage](#5-eject-and-protect-your-storage)
- [6. Compatibility, other devices, and backups](#6-compatibility-other-devices-and-backups)
- [7. Guided practice](#7-guided-practice)
- [8. Common misconceptions and troubleshooting](#8-common-misconceptions-and-troubleshooting)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. MGU Library connections and next steps](#11-mgu-library-connections-and-next-steps)

## 1. Understand external storage

Everyday computer work creates information that needs a home. A word processor can save an application, a camera can save photographs, and a web browser can download a PDF. The computer typically holds these items on [[internal-storage|internal storage]], such as an internal solid-state drive. **External storage** is a separate storage device connected from outside the computer. Common examples include a USB flash drive, a portable solid-state drive, a portable hard disk, and a memory card inserted through an appropriate reader.

The word *external* describes the device's relationship to the computer, not whether it is always physically removable. An external hard drive might remain on the same desk for months; a tiny USB flash drive might travel on a key ring. Both store [[file|files]] outside the computer's internal drive. The computer generally needs a compatible connector, file system, permission, and sufficient power to access the device. Connection alone does not guarantee all of these conditions have been met.

### Three different storage questions

Beginners often combine three separate questions. **Where is the file saved?** concerns location. **Can I take or share a copy?** concerns transfer. **Can I recover the file after something goes wrong?** concerns backup. One external drive may support all three goals, but the goals should not be confused. A USB stick that holds your *only* copy of a completed application is portable storage, not a reliable recovery plan. If that stick is lost or fails, so does your only copy.

A [[local-copy|local copy]] lives on a device such as a laptop or attached drive. [[cloud-storage|Cloud storage]] stores information through an account and network-connected service. Cloud files may also be kept offline on a computer, depending on settings. An external drive generally works without internet once connected to a compatible device, but it may be subject to physical loss or damage. Both approaches require deliberate organization, access control, and verification.

| Storage location | Typical example | Main benefit | Important limitation |
| --- | --- | --- | --- |
| Internal storage | Laptop's built-in SSD | Convenient everyday access | Damage, loss, or failure of the laptop may affect it |
| USB flash drive | Removable thumb drive | Easy to carry selected files | Small size makes it easy to lose; durability varies |
| External SSD | Portable solid-state drive | Fast transfers on compatible equipment | More expensive per unit of capacity in many situations |
| External hard drive | Portable or desktop HDD | Large-capacity storage | Moving parts and physical impacts can cause damage |
| SD or microSD card | Camera or mobile storage card | Fits small devices and cameras | Requires compatible reader or slot; easy to misplace |
| Cloud storage | Files in an online account | Access across supported signed-in devices | Depends on account access, connectivity, and service settings |

### Files are not moved just because a drive is attached

When you plug a drive into a computer, existing files usually remain wherever they were. You can view or copy them, but merely connecting the device does not automatically transfer your Downloads, Desktop, or Documents. Some software can be configured for automatic backup or import; do not assume those features are running. Look for an actual copy task or verified backup result. You studied this difference in the lesson on [Copy, Move, Rename, Delete](/department/computer-science/basic-computer-skills/file-and-folder-skills/copy-move-rename-delete/).

A good transfer starts with naming the **source** and the **destination**. If `Documents/School/report.pdf` is on the laptop and `ClassUSB/Presentations/` is on a flash drive, the document starts at the source and the duplicate should end at the destination. You should know which one is which even if the windows appear side by side. A click in the wrong window can send an item to an unintended location.

### Transfer and backup are different kinds of copies

A [[transfer-copy|transfer copy]] allows you to use data somewhere else. A [[backup-copy|backup copy]] is maintained so you can recover information after accidental deletion, drive failure, theft, or another problem. A single copy on a flash drive can serve as a transfer copy; it is not a robust backup if the laptop copy is deleted and the flash drive is the only remaining location. Effective backups have more than one copy, use independent storage locations, and are periodically tested.

Consider the class presentation example. The student might save the working presentation on a computer, keep an independent copy in approved cloud storage, and carry a third copy on a USB drive. The USB copy helps with delivery; the other copies help with recovery. The student should still check that the presentation opens on the classroom computer and that fonts, media, and linked resources work. **A file's presence does not prove it is usable.**

### External storage is neither a replacement for permission nor a security barrier

A physical drive can be used to copy material quickly, which is exactly why it demands care. Files may contain private information, company records, confidential photographs, or proprietary work. Having physical possession of a device does not mean you have permission to copy its contents or take them off-site. Organizations may disable USB storage, require approved encrypted devices, or block unapproved transfer destinations. These rules can be part of protecting staff, clients, students, and systems.

A newly purchased storage device should be treated as a device to identify and manage, not as magical protection against malware, viruses, or data loss. It can be damaged by physical stress, unsafe disconnection during a write, theft, or ordinary hardware failure. Avoid using it as a single point of failure. If the device is not yours, ask its owner or administrator before using it.

### Deciding whether to use a portable drive

Before reaching for a USB device, ask four practical questions. **What needs to be transferred?** A single PDF may fit on almost any functioning drive. **What destination device must read it?** A Windows-only workplace computer may use different rules than a Mac or phone. **How sensitive is the information?** Confidential records may require an organization-approved encrypted device or another approved method. **Is there another verified copy?** If not, creating one should come before any risky operation.

> **Decision rule:** Use external storage when it solves a defined transfer or recovery need. Choose the correct device for the destination, copy rather than move when safety matters, verify the result, and keep independent copies of essential information.

## 2. Identify drives and connections

External storage devices can look similar while behaving differently. A USB flash drive is generally a small device with built-in flash memory and a USB connector. An external SSD uses electronic memory and often connects through a cable. An external hard disk uses mechanical rotating disks and may require extra care when being moved. SD and microSD cards use slots or card readers rather than a conventional USB plug on the card itself. The common purpose is to preserve information when not in use; their portability, speed, capacity, durability, and connection requirements vary.

### USB flash drives

A [[usb-flash-drive|USB flash drive]], sometimes called a thumb drive or memory stick, can store documents, photographs, presentations, and other files. It usually appears as a removable volume in a file manager when compatible and connected. Small drives are convenient for exchanging selected files, but they are easy to leave in a public computer or lose in transit. Their quality and longevity vary. A flash drive is not the same as computer [[ram|RAM]]: its saved contents normally remain after power is disconnected.

Avoid choosing a drive solely by its advertised capacity. Capacity is the space available for storing data, not a measure of data security or guaranteed transfer speed. Some devices advertise unusually large capacities at implausibly low prices; counterfeit drives can misreport usable space. Purchase through reputable channels, test the device with nonessential files, and keep independent copies. Do not trust a device just because it appears in a familiar shape.

### External solid-state drives

An [[external-ssd|external SSD]] uses solid-state electronic storage and is often designed for faster or larger transfers than an inexpensive flash drive. Real performance depends on the device, cable, computer port, file sizes, and workload. It generally has no spinning disk, but it can still suffer electronic failure, connector damage, or data corruption. Some portable SSDs offer encryption through software or hardware; the availability and actual security depend on the model and configuration. A product claim alone does not mean protection is enabled.

For example, an instructor transferring a large set of course video files between approved computers may prefer a portable SSD. The same instructor still needs another backup and an approved way to protect any information about students. Speed does not replace governance.

### External hard drives

An [[external-hdd|external HDD]] stores data on rotating magnetic platters. Many models provide high capacity for the price and are useful for archival copies or regular computer backups, but mechanical components can be harmed by impacts, especially during operation. Some larger drives need a separate power adapter; smaller portable drives may draw power through USB. If a drive makes repeated unusual clicking sounds, disappears intermittently, or seems physically damaged, do not keep performing risky write operations. Stop, protect other copies, and seek qualified assistance.

A desktop backup drive that remains plugged in all the time is convenient but may share some of the same risks as the computer: theft, electrical damage, ransomware, or accidental deletion. Disconnecting a completed backup and storing it securely elsewhere can reduce some risks, while an appropriately managed automated backup provides other benefits. The right choice depends on the information and the recovery plan.

### SD cards, microSD cards, and readers

An [[sd-card|SD card]] is a removable memory card commonly used by cameras and some computers. A [[microsd-card|microSD card]] is a smaller related form. To use a memory card on a computer without a matching slot, insert it into a compatible [[card-reader|card reader]]. Some adapters convert microSD to an SD-size form, but an adapter does not automatically make an unsupported card compatible with every device. Cameras, phones, readers, and storage capacities may each have specific requirements.

A card's plastic write-protect slider, where available, is not full data encryption or guaranteed protection from deletion in all circumstances. Always verify the destination before importing photographs or formatting a card. If a camera offers its own card-formatting procedure, follow the camera manufacturer's directions *after* independent copies have been verified. Formatting is not part of this beginner lesson's hands-on activities.

### Connector shapes are not performance guarantees

USB describes a family of connection technologies, but the shape of a connector does not tell the whole story. **USB-A** is a familiar rectangular plug. **USB-C** is a smaller reversible connector used on many modern computers and phones. Older equipment may use other styles. A connector and port must physically match, directly or through a suitable adapter, but matching shapes alone do not guarantee sufficient data speed, power delivery, or support for an external device.

Some USB-C cables are intended mainly for charging and support little or no useful data transfer; others support high-speed data and different power capabilities. A drive can appear to malfunction when the cable is unsuitable. A [[usb-hub|USB hub]] can add ports but may share available bandwidth or power. If a device is not recognized, first check the simple physical requirements rather than changing partitions or erasing the drive.

| Term or feature | What it tells you | What it does not guarantee |
| --- | --- | --- |
| USB-A | Shape of a common USB connector | Particular transfer speed or encryption |
| USB-C | Small, reversible connector shape | Every cable or port supports the same functions |
| Capacity | Approximate quantity of data a device can store | How fast files will transfer or how long it will last |
| File system | Method for organizing data on a storage volume | That every device can read or write it |
| Drive letter | Windows label such as `E:` for an accessible volume | Permanent identity of that physical device |
| Volume label | User-readable name such as `CLASS_USB` | Unique, secure identity of the device |
| Encryption | Protection that can restrict access to stored information | Automatic backup or protection from every threat |

### Understand capacity without memorizing storage engineering

You may see capacities such as 32 GB, 128 GB, 1 TB, or 2 TB. In general, a larger capacity can hold more data. Capacity advertisements and the numbers shown by an operating system may differ because manufacturers and operating systems use different units or display conventions, and formatting consumes some space. This difference is not by itself proof of fraud. However, unusually large discrepancies or repeated copy failures justify caution.

The space available on a drive also depends on what is already stored there. A 64 GB drive that has 60 GB used may not fit a 10 GB video. Windows File Explorer shows a device's approximate available space, and **Properties** can provide more detail. A beginner should check free space and the destination file size before starting a large transfer instead of assuming a drive can accept any file simply because it is connected.

### Name the device without relying on the name alone

External volumes often have labels such as `USB Drive`, `Untitled`, `PortableSSD`, or a manufacturer's name. Two drives can share the same label. Windows drive letters may change after reconnecting, and a different computer may assign a different letter. When the stakes are significant, confirm the device by **label, reported capacity, connector or physical identity, and intended contents** rather than trusting one clue. Avoid exposing confidential details in a public-facing volume name.

> **Important distinction:** A `USB-C` plug identifies a connector shape. An `E:` drive letter identifies a Windows volume at that moment. Neither is a guarantee that the device is the one you intended or that it is appropriate for confidential data.

## 3. Connect and inspect a drive in Windows 11

Windows 11 commonly makes an authorized USB storage device available through [[file-explorer|File Explorer]]. The correct first step is **inspection**, not copying. Inspection establishes that the computer recognizes the device, that you have found the intended volume, and that the folder or drive appears accessible. Some devices may ask for a password, administrator permission, or another action; others may be restricted by workplace policy. You do not need to override any of these protections to complete this lesson.

### Prepare before inserting a device

Choose a drive you own or have explicit permission to use. Do not plug in an unknown USB device found on the ground or given by an untrusted source. A device that resembles storage can potentially behave as something else, and files on ordinary storage media can be malicious. Use a computer you are authorized to operate. If that computer belongs to a school or employer, follow the rules for removable media and confidential material. Make sure you are not handling the only copy of important information.

If you are performing the hands-on exercise, prepare one small disposable file on the computer, such as `usb-practice-note.txt`. In Windows 11, you may create a harmless text file with an authorized editor or use another sample you already own. Give it a recognizable name and record where it lives. It should contain no real passwords, account numbers, personal records, or other sensitive details. If you cannot make a practice file, draw a folder diagram on paper instead.

### Connect the drive carefully

Insert the compatible connector without forcing it. If the drive uses a cable, verify that the cable is suitable for data and sufficiently powered for the device. A drive that requires external power must have it connected according to its instructions. Do not force a USB-A plug into the wrong orientation or use an improvised adapter. A drive may take several moments to become available. An indicator light or sound, if present, is not proof that the file system has been mounted successfully.

Windows may display a notification, a [[notification|notification]] about storage, or an [[autoplay|AutoPlay]] prompt asking what to do with the device. You can dismiss such a prompt and navigate with File Explorer. Do not automatically launch an unfamiliar executable or installer simply because the drive asks you to do so. If Windows Security or the organization blocks an action, do not work around that protection. For this lesson, the objective is to inspect files and folders, not run software.

### Find the device in File Explorer

1. Press **Windows key + E** to open File Explorer, or select File Explorer from the taskbar or Start menu.
1. In the left navigation area, choose **This PC**. Depending on your view, the drive may also appear directly in the navigation pane.
1. Look under devices and drives for an additional volume. Examples of display names include `USB Drive (E:)`, `CLASS_USB (F:)`, or `Portable SSD (D:)`. These are examples, not promised names.
1. Compare its volume label and approximate capacity with the device you intended to use. If more than one external device is connected, proceed only after identifying the correct one.
1. Double-click the intended drive to view its folders. Do not delete or replace existing items; a drive can contain valuable information even if its top folder appears disorganized.
1. If you are allowed to inspect properties, right-click the drive and choose **Properties**. Review the reported used and free space and, where shown, the [[file-system|file system]]. Close the dialog without changing settings.

If **This PC** does not show the drive, do not guess a letter and type an arbitrary path. Verify that it is correctly connected and recognized before attempting file operations. Some organizational devices may intentionally restrict removable storage. A drive can also be absent because the cable is not carrying data, the device is not receiving enough power, or the file system is unsupported. More detailed troubleshooting appears in Section 8.

### Learn what the drive letter means

Windows often assigns a [[drive-letter|drive letter]] such as `E:` to a volume. A path might read `E:\School\Presentation.pptx`. The letter is part of how Windows refers to a volume **on that computer at that time**. It can change when you connect different devices, attach more drives, or use another computer. A Mac typically does not use the same drive-letter system. If a colleague says “put it on E,” verify that E is actually the intended USB volume before copying anything.

An individual external physical device can sometimes contain more than one volume, and each accessible volume may have its own identity. Conversely, a reader with no card inserted might display differently from a drive holding usable media. The beginner's priority is not analyzing partition layouts; it is finding the correct usable volume without modifying anything.

### Locate a folder within the device

Once a drive is visible, navigate it much like a folder on the computer. A USB drive may contain `Photos`, `School`, or `Transfers`; you may also see an empty root. The [[root-folder|root]] is the top accessible folder of a particular volume. A folder named `School` might contain a subfolder named `Presentations`. If you have permission and the device is reserved for practice, you can create a new folder, such as `MGU-Practice`, instead of putting every file at the root.

The choice of folder matters. A flat drive full of files may be difficult to navigate. A simple hierarchy allows you to separate practice, personal documents, and other collections. Use descriptive names and avoid complicated layers that you cannot explain. On a shared drive, follow the owner's existing structure rather than reorganizing it without authorization.

### Understand what you are seeing

A drive can appear in File Explorer even when you should not write to it. It might be [[read-only|read-only]], have an [[encryption|encryption]] requirement, lack free space, or be subject to a policy. The drive label may be visible while files are inaccessible. Do not interpret an access error as a signal to disable security. If Windows asks to **format** a device that you believe contains important data, cancel the prompt and stop; formatting may erase the file system and existing information. If you need the files, consult the owner or qualified support. Never experiment on the only copy.

Likewise, an unexpected prompt asking you to **initialize** a disk or choose a [[partition|partition]] style is beyond this lesson. Do not accept it as a routine setup step on a used drive. These operations can alter how existing data is organized or accessed. This beginner course focuses on **recognized, authorized, already prepared storage devices**.

### Inspect without introducing new risks

Opening a file from an external drive may launch an application and sometimes run active content or prompt for additional permissions. If you do not trust a file, do not open it. Recognize the difference between an ordinary document and a program. A filename extension such as `.exe` can indicate a Windows executable; other formats can also contain active content or links. Even if the document name looks familiar, source and context matter. Use trusted security tools and organizational guidance instead of assuming a visible icon guarantees safety.

You do not have to unplug and reconnect the device repeatedly as a test. Keep the test simple: identify the drive, inspect an allowed folder, note the drive's name and available space, and later eject it. An observation-only learner can complete the same sequence using a mock example: “A flash drive labeled `MGU_USB` appears in This PC as `F:` and contains `Practice/`.” The correct next step is to verify that `F:` is the intended drive before any copy operation.

### Worked example: identify the destination

A learner sees three storage locations: `Local Disk (C:)` with lots of folders, `MGU_USB (E:)` with a `Class` folder, and `FamilyArchive (F:)` with a very large capacity. The assigned task is to copy `usb-practice-note.txt` to the class USB drive. The learner should select `MGU_USB (E:)`, open the intended class folder, and confirm the destination. Copying to `FamilyArchive (F:)` merely because it has more free space would be an error; choosing `C:` would leave the copy on the internal system volume.

> **Before every transfer:** State the source, state the destination, confirm the drive label and path, verify you have permission, and decide whether copying rather than moving better protects the original.

## 4. Copy and verify files safely

Copying transfers information without deliberately removing the original from its current location. Moving changes the item's location and may involve deleting the source after transfer. For beginners practicing on external storage, **copy first, verify, and preserve the original** is the safer baseline. That approach is especially valuable because cables can disconnect, storage can run out of space, and an unexpected dialog can interrupt a transfer.

### The four-stage transfer routine

A reliable routine has four stages: **prepare**, **copy**, **verify**, and **disconnect**. Preparation means checking the correct files, source folder, destination, free space, permissions, and acceptable content. Copying means initiating and completing the transfer. Verification means checking that the expected files exist on the destination and are usable. Disconnecting means closing any relevant files and safely ejecting the device. Skipping verification is a common cause of frustration when the USB drive is opened on another computer.

Do not copy confidential records to an unapproved or unencrypted device. Do not transfer other people's files merely because they are visible in a shared folder. If the exercise involves important work, create independent protection before starting. Some applications save working documents across multiple files or rely on fonts, linked resources, or specialized software; copying the main file may not guarantee the whole project will function on the destination computer.

### A beginner-safe Windows 11 copy walkthrough

Use an authorized practice drive and a small disposable practice file. The steps below assume the drive is accessible and the computer permits file transfers. Exact toolbar appearance may differ by Windows release and display configuration.

1. Open **File Explorer** with **Windows key + E**.
1. Navigate to the practice file on your computer, such as `Documents\MGU-Practice\usb-practice-note.txt`.
1. Select the file once. Verify that you selected the intended file rather than its neighboring folder or a similarly named draft.
1. Press **Ctrl + C** or use **Copy** from the File Explorer toolbar or context menu.
1. Open a second File Explorer window if helpful, then navigate to **This PC → your verified USB volume → MGU-Practice** or another permitted destination folder.
1. Confirm that the destination's drive name and folder path match your plan. Do not rely on the window's visual position alone.
1. Press **Ctrl + V** or choose **Paste** to create a copy in the destination.
1. Allow the transfer to complete. If a conflict, insufficient-space warning, permission prompt, or security alert appears, read it carefully; cancel if unsure rather than overwriting something valuable.
1. Open the destination folder and confirm that the expected filename appears. If it is a safe practice file, open it and confirm its contents match the original.
1. Return to the original folder and confirm that the source file remains there. Complete the ejection sequence in Section 5 before disconnecting the drive.

A copy operation typically leaves both original and destination files intact. Windows may adjust file timestamps or properties, so identical creation dates are not always the best measure of a successful transfer. Use a sensible combination of filename, location, size, and ability to open the file. For critical or large collections, a more advanced integrity check may be appropriate, but it is not necessary for a beginner's first small text-file exercise.

### What a transfer progress indicator can and cannot tell you

Windows may show a progress bar and a completed message. These are useful signs that the operating system finished the requested operation, but a progress bar is not an independent guarantee that the target file is complete, correctly named, in the right folder, readable on another computer, or free from damage. The storage medium could have a problem, the wrong destination might have been selected, or the receiving computer might lack the required application.

Therefore, **verify the destination directly**. After copying a harmless text file, read it from the USB drive. After copying a presentation, check that it opens and contains the intended slides. After copying photographs, inspect an appropriate sample and confirm the number of files or folder structure. Avoid opening untrusted documents solely for testing; use known-safe practice content or an organization's approved scanning process.

### Comparing copies without overwriting

A file with the same name may already exist in the destination. Windows may offer to replace, skip, or decide for each file. Replacing an older file can be correct in some workflows, but it can also destroy valuable work. **Never choose Replace automatically when the folder contains information you have not reviewed.** Compare the expected content, date, size, version, and ownership. If unsure, cancel and decide how to distinguish versions, such as a clearly dated filename or a separate practice folder.

If a folder contains many files, copying the folder can preserve its internal structure. But do not assume a folder transfer automatically includes information outside that folder, such as linked images or files referenced from elsewhere on the computer. A software application installed on a computer also generally cannot be made portable merely by copying its program folder to a USB drive. Applications may require installation, licensing, configuration, or other dependencies.

### What happens when the destination is too small?

A drive that reports 2 GB free cannot usually accept an 8 GB movie file. A drive can also have a limitation on the maximum size of one file. For example, the widely used [[fat32|FAT32]] file system does not support an individual file of 4 GiB or larger; a large video can fail even when total free space appears sufficient. This is a file-system limitation, not necessarily a broken drive. Section 6 explains other formats. **Do not reformat the device as an improvised fix**, because formatting can destroy existing files.

If a transfer fails because of space, return to the source and confirm it is still intact. On a practice device, the options may include choosing a different approved drive, selecting a smaller file, or consulting the owner about cleanup after independently verifying existing contents. Do not delete unfamiliar files merely to make room. If the drive is damaged or its capacity is unreliable, stop using it for important information.

### Why moving can be riskier than copying

A [[move|move]] may be convenient when you are permanently reorganizing files. But when the destination is removable, moving can create unnecessary risk if the original is removed and the external copy has not been tested. A drag-and-drop operation between drives may behave differently from a drag within the same drive, and modifiers can change its behavior. Beginners should use explicit **Copy** and **Paste** commands rather than relying on assumptions about dragging behavior.

For important work, the correct sequence is **copy → verify → preserve a separate backup → consider deleting an unwanted duplicate only when authorized**. Do not treat deletion as a required last step of every transfer. A simple assignment can be completed with the original still in Documents and a second copy on the USB drive.

### Verify on the receiving device when practical

A USB file can open successfully on the original computer yet fail on the receiving computer because the second machine lacks the necessary software, a video depends on an unsupported format, a drive is encrypted, or a folder contains shortcuts instead of actual files. If you know the device you will use for a presentation or submission, test the copy there **with permission** and without making unauthorized changes. A PDF may be easier to view widely than a specialized editable format, but use whatever format the recipient specifically requires.

When multiple people will use the device, understand their responsibilities. A file passed to a public computer could leave traces in recent-file lists or temporary locations. If it includes sensitive information, ask whether a secure transfer channel would be more appropriate. Avoid plugging personally owned storage into unknown or untrusted shared computers.

### Worked example: send a class handout safely

A learner has `Documents\MGU\Unit8\safety-handout.pdf` and a trusted empty flash drive. The goal is to take the handout to class. The learner finds the drive in This PC, confirms its capacity, creates an authorized `ClassHandouts` folder, copies the PDF into it, and confirms the PDF opens from that folder. The original PDF remains in Documents. The learner closes the PDF viewer, ejects the drive, and stores it safely. The result is a verified **transfer copy**. A separate backup is still needed if the original handout is important.

### A short transfer log

For school or business files, a simple written log can prevent confusion: `2026-11-19 — Source: Documents/MGU/Unit8 — Destination: CLASS_USB/ClassHandouts — 1 practice PDF copied and opened — Original retained`. This is not necessary for every casual file but shows a useful way to document an important transfer. For sensitive files, do not put passwords or confidential content in an unprotected log.

> **Verification rule:** Seeing a file icon is a starting clue, not the end of the task. Confirm the right folder and a readable, complete copy; retain the source until you have an independent recovery option.

## 5. Eject and protect your storage

After a successful transfer, a USB storage device should not simply be yanked from its port while software is still using it. Computers may temporarily hold changes in memory, finish background tasks, or continue updating a file even after the most obvious progress dialog closes. **Ejecting** asks the operating system to finish relevant storage activity and prepare the volume for disconnection. This reduces the risk of lost or damaged data, although it cannot prevent every possible hardware failure.

### Windows 11: the recommended ejection routine

1. Save and close any documents or media opened from the removable drive. Check for file-copy or backup processes still running.
1. Close File Explorer windows showing the drive if they are keeping files open; close editing programs that use it.
1. Locate the **Safely Remove Hardware and Eject Media** control in the Windows taskbar notification area, sometimes within the hidden-icons menu.
1. Select the specific external device you intend to disconnect. If more than one device appears, verify the correct name; do not eject someone else's active drive.
1. Wait for Windows to indicate that it is safe to remove the device, or otherwise confirm that the drive has been successfully ejected.
1. Only then unplug it gently by the connector or manufacturer's recommended grip, not by pulling sharply on the cable.

Some File Explorer configurations also provide an **Eject** command for a removable device through the appropriate context menu. Exact command placement and available methods vary by device and Windows release. Use a supported method shown by your computer. If you cannot find an ejection command, consult Microsoft's official instructions instead of guessing, especially when important files are involved.

A useful habit is to stop, check the selected device, and wait for feedback before touching the connector. Closing a copy progress box is not the same as ejecting. A drive that lights up is not necessarily still writing, nor does a dark indicator prove it is safe to remove. The operating system's feedback is the relevant signal.

### What if Windows says the device is in use?

If the system says a device cannot be ejected because it is still in use, **do not force removal**. Save and close files being edited on the drive. Close preview panes, open folders, applications playing media, and backup or synchronization jobs that may be reading or writing. Wait for legitimate transfers to finish. Try ejecting again. An administrator or technical support person may be needed if an organizational service holds the device open.

Avoid repeatedly unplugging and reinserting the drive as a way to make the warning disappear. Do not terminate unfamiliar system processes, disable security software, or alter device policies merely to get an Eject button. When safe removal remains unavailable, a normal computer shutdown may offer a safer path after all applications and writing activity have stopped; ensure the computer is fully shut down before disconnecting and follow manufacturer or organization instructions. This is a fallback, not a universal guarantee.

### What about Windows “Quick removal”?

Some Windows removable-storage policies can reduce caching behavior and may affect whether ejection is technically required under particular conditions. Beginners should not treat the existence of a **Quick removal** policy as permission to unplug a busy device. Microsoft still recommends safely removing devices, and copying may continue in the background. The conservative, reliable beginner routine remains **complete the work, verify it, close the files, eject, and then disconnect**. Do not change storage policies for this lesson.

### Why files can become corrupted

A [[corrupted-file|corrupted file]] is data that has been damaged or changed so that an application may be unable to read it correctly. Corruption can happen for many reasons, including hardware faults, unstable connections, power interruptions, or interrupted writes. Not every unsafe removal damages a file, but the risk is real. Some file systems are designed to recover more gracefully from certain interruptions; none makes a drive immune to loss.

Imagine that a photo is being copied in pieces. If a connection stops while the destination file is being written, a name or partial file may remain even though the contents are incomplete. A later attempt to open it can fail or display a damaged image. The correct recovery step is often to return to a verified original, reconnect to a healthy destination, and copy again—not to keep editing the damaged copy. If the original is missing or the device shows signs of physical failure, minimize further writes and seek appropriate help.

### Care for physical devices

Protect connectors from bending, dirt, liquid, and excessive force. Keep drives away from damaging heat, moisture, and strong impact. Handle a portable hard drive gently, particularly when it is running. Do not leave removable storage in a borrowed computer, in an unlocked public space, or in a hot vehicle. Label your own drive clearly enough to identify it without publicly advertising the sensitive nature of its contents.

Where a drive uses a removable cable, store the cable so it is not pinched or strained. A loose connector or damaged cable can interrupt transfers even when the drive itself is healthy. An external device that becomes abnormally hot, smells of burning, or shows visible damage should be disconnected according to safe equipment procedures and examined by qualified support. Do not disassemble sealed devices or attempt electrical repair as part of a file-management class.

### Protect the information, not just the plastic device

Portable storage can disappear without warning: the owner might drop it, leave it on a bus, or have it stolen. If the device contains sensitive information, the risk is not just losing the file but exposing it to someone else. [[device-encryption|Device encryption]] may protect data at rest by requiring the appropriate key or password before content is accessible. Microsoft offers [[bitlocker-to-go|BitLocker To Go]] for removable data drives in supported Windows environments, while other systems and products have their own tools. Availability depends on edition, administrator policy, device, and compatibility with the receiving computer.

Encryption is **not** a backup. If the only copy of a file is encrypted and the key is lost, the user may lose access. Securely preserve recovery information according to applicable instructions and policy; do not store the only recovery secret on the same removable device. For business, medical, school, or legal records, use an explicitly approved storage method. A beginner should not experiment with encrypting someone else's drive.

### Physical write protection and malware

Some media use a write-protection switch or software-defined read-only setting. These can reduce certain changes when supported, but they are not a substitute for encryption, careful handling, or malware prevention. A file may be malicious even if it was stored on a familiar drive. The safest routine is to use a trusted device, avoid unexpected executable programs and macros, and follow security prompts rather than disabling them. If you discover an unknown USB stick in a school, office, or parking lot, turn it over through an authorized lost-property or security process without connecting it.

### Shared computers and public access

Using a portable drive on a library or classroom computer can be convenient, but public or shared computers may have stricter policies or higher privacy concerns. Do not assume that deleting a file from the USB drive clears copies, thumbnails, recent-file histories, or temporary data the computer may have created. Do not save private passwords or confidential records on unknown devices. If you must submit a document, follow the institution's designated submission route. A secure online upload may be preferable to physical media when available and authorized.

### When to retire a drive

No storage medium lasts indefinitely. Replace or stop relying on a device that frequently disconnects, loses files, shows repeated errors, has damaged connectors, or produces unusual mechanical noises. Before replacing it, preserve recoverable data using approved methods while avoiding unnecessary writes to a potentially failing device. If sensitive material is involved, follow secure disposal and data-sanitization procedures appropriate to the organization. Moving a file to Recycle Bin does not necessarily securely erase it from the physical device.

> **Safety routine:** **Finish → verify → close → eject → wait → unplug → store securely.** A portable drive is only as reliable as the way it is used and the independent copies kept elsewhere.

## 6. Compatibility, other devices, and backups

A flash drive that works on one computer may fail to appear or may open in read-only mode on another. That does not necessarily mean the drive is defective. Several separate conditions must line up: the physical connector, the availability of appropriate power, the device's file system, the operating system's support, and any permissions or encryption requirements. Beginners should investigate these categories before assuming the data is lost.

### What is a file system?

A [[file-system|file system]] is the method used to organize files and folders on a storage volume. Different devices may support different file systems. You may encounter **FAT32**, **exFAT**, **NTFS**, and **APFS**. Their names are technical, but the everyday lesson is simple: a drive needs a format the receiving system can understand. When you prepare a device for sharing, choose a compatible, authorized method *before storing essential files*, not by erasing a populated drive when transfer time arrives.

| File system | Typical context | Important beginner consideration |
| --- | --- | --- |
| FAT32 | Older removable media and broad legacy compatibility | Individual files of 4 GiB or more cannot be stored |
| exFAT | Removable media shared across many modern devices | Often useful for large files and cross-platform transfer; support still depends on device |
| NTFS | Common Windows storage format | Other systems may offer different read or write support |
| APFS | Modern Apple storage environments | Not a general-purpose format for every Windows or Chromebook device |

This table is a practical orientation rather than an exhaustive compatibility chart. Particular cameras, televisions, phones, consoles, vehicles, and managed computers may impose stricter requirements. Some systems can read but not write a format without additional software. A drive may also be encrypted, which creates an additional compatibility requirement. Confirm the actual receiving device and its official specifications before choosing a transfer format.

### Formatting is a destructive operation

[[formatting|Formatting]] prepares a storage volume with a file system. Depending on the operation, it can erase access to existing files and may make recovery difficult or impossible. On a drive with valuable information, clicking **Format**, **Erase**, **Initialize**, or changing partitions can cause serious loss. This is why formatting is **excluded** from all hands-on activities in this lesson. A warning that says “You need to format the disk before you can use it” is not proof that the files are unnecessary. It may indicate unsupported formatting, corruption, hardware failure, or another problem.

If a newly purchased blank device needs preparation, follow the manufacturer's and operating-system's official instructions only after confirming it contains no data worth keeping. If it is borrowed or organizational property, obtain authorization first. Never format someone else's memory card to satisfy a school assignment. If you are not certain, stop and ask for support.

### Work with a drive on a Mac

macOS generally shows attached external volumes through **Finder**, subject to system configuration and device compatibility. Open Finder and look in the sidebar under **Locations** for the connected storage device. Its name may differ from the Windows drive label or may appear similarly. Select the device and navigate its folders. To copy a file, use an approved drag-and-drop method or the normal copy-and-paste controls, then verify the destination. Before unplugging, select the drive's **Eject** control in Finder or another supported ejection method and wait until it has been ejected.

A Mac may be able to read an NTFS-formatted drive without offering normal write access in the same way as a Windows computer. Do not assume an inability to paste means the drive is broken or empty. macOS offers Apple-specific formatting and encryption options, but their suitability depends on the destination devices. Reformatting to APFS for a Mac can reduce compatibility with other equipment and can erase existing data. Changing the format is a planning decision, not a troubleshooting reflex.

If the Mac says the disk is in use, save open documents, close applications accessing it, allow background transfers to finish, and follow Apple's supported ejection guidance. If a drive is connected through a hub or adapter, the hub's suitability and power may matter. Do not force unplugging because Finder is unresponsive.

### Work with a drive on a Chromebook

ChromeOS uses a **Files** app that can display compatible USB drives, SD cards, and supported external storage. Open the Files app, select the connected device in the sidebar, and navigate its content. Copy files between supported locations and verify the result. When finished, select the **Eject** control associated with the external drive before disconnecting it. The visual placement of this control can vary with updates and device layout.

Some storage formats and devices are unsupported or read-only in specific circumstances. A Chromebook may also use organizational rules that restrict file transfers. A user should not change the format of an important drive because it is missing from the Files app. Consult Google's compatibility guidance, examine the connector and power, and ask the device owner or administrator when necessary.

### Work with a drive on an iPhone or iPad

On supported iPhone and iPad models, a compatible external drive may be accessible through the **Files** app under **Browse → Locations** or an equivalent view. Adapters or a powered hub may be required, depending on the model and accessory. External storage compatibility depends on the device model, connector, power needs, file system, and software version. Some devices can read certain formats but cannot use every feature of the drive.

If the drive appears, you may be able to copy or save files into it using the Files app or another supported application. Not every app stores data as an ordinary exposed file, and a cloud-only file may need to download before it can be copied for offline use. Confirm that the target file actually arrived. Follow Apple's instructions on proper disconnection, ensure transfers are complete, and avoid removing a device while an app is still accessing it. Do not assume phone charging connectors automatically support all external storage accessories.

### Work with a drive on Android

Some Android phones and tablets support external USB storage through USB-C or an appropriate adapter and [[usb-otg|USB On-The-Go]] or related host capability. **Files by Google** and manufacturer-specific file managers may show compatible connected storage. The details vary by Android version and hardware. On supported devices, locate the USB device in the file-management application, copy a test file, confirm the destination, then use the available safe-eject or unmount procedure before disconnecting.

Do not assume every Android phone has an identical Eject menu or that every cable supports data. If a storage notification or file-manager option is missing, use the phone manufacturer's instructions. Some portable hard drives may require more power than a phone can provide; do not bypass device protections or overload a port. If the drive is encrypted in a system-specific way, the phone may not be able to unlock it.

### What if you are sharing between platforms?

Begin with the receiving device: what physical port does it have, which file systems can it read, and which document types can it open? A USB-C drive that plugs into a phone may still use an unsupported format. An exFAT-formatted drive may support large files and work across many current platforms, but that is not a universal promise. A presentation exported as PDF may be easier to display across different computers, but it is not an editable replacement if the recipient expects a slide deck. Test with a harmless file before transferring anything important.

If the systems cannot share the device directly, use an **approved** alternative such as a trusted cloud account, network transfer, or a properly compatible intermediary computer. Do not install unknown drivers or bypass restrictions on managed equipment. If the content is sensitive, the organization may require a specific transfer service rather than removable media.

### External storage and backup strategy

A single USB drive is not a complete backup strategy. You need a plan that can recover information after loss or failure. A commonly taught approach is the **3-2-1 rule**: maintain three copies of important information, on at least two types of storage, with at least one copy separate from the primary location. It is a useful planning heuristic, not a guarantee and not a complete security policy. Modern organizations may also use versioned, offline, or immutable backups to resist deletion and malicious changes.

For a simple personal example, a student might keep an assignment in `Documents` on a laptop, maintain a separate automatic or manual backup in an approved service, and periodically copy important course work to a trusted external drive stored securely. An external drive kept beside the laptop can help with device failure but may not protect against a fire or theft affecting both. The plan must address where copies live, how often they are updated, and how to restore them.

### A backup you cannot restore is not fully verified

[[restore-test|Restore testing]] means confirming that information can be recovered from a backup. Simply seeing a backup folder or a successful progress message does not prove every file will restore when needed. For practice, select a disposable document, make a copy to an authorized backup location, then open that copy as a test. Do not test restoring sensitive or business data without an approved procedure. A backup plan should also consider lost encryption keys and the possibility that an online synchronized deletion affects multiple devices.

The next lesson, **Basic Backups**, will develop these ideas further. For now, remember the fundamental distinction: **portable storage helps you carry data; a verified backup system helps you recover data**. One device may participate in both workflows, but the workflows have different goals.

### Comparison of everyday platform workflows

| Platform | Typical way to locate removable storage | Common file-management tool | Safe-disconnection approach |
| --- | --- | --- | --- |
| Windows 11 | This PC or navigation pane | File Explorer | Safely Remove Hardware or supported Eject command |
| macOS | Finder sidebar under Locations | Finder | Eject volume in Finder before unplugging |
| ChromeOS | Files app sidebar | Files | Eject connected storage in Files |
| iPhone or iPad | Files app under Browse and Locations on supported models | Files | Complete transfers and follow device-specific removal guidance |
| Android | Supported USB-storage view or notification | Files by Google or manufacturer app | Use supported eject or unmount control before removal |

> **Compatibility rule:** Match the *receiving device*, not just the plug. File systems, cable capability, available power, permissions, and encryption may decide whether an external drive works.

## 7. Guided practice

These five activities give you structured opportunities to apply the lesson. You may use a **nonessential, authorized practice drive**, inspect settings without changing them, or answer from a fictional scenario. The paper-based versions meet the same learning objectives as the hands-on versions. Do not use your only copy of a document, another person's drive, confidential data, or a storage device asking to be formatted. Record what you *observed*, not what you expected to see.

### Activity 1: Choose the correct storage device

**Scenario:** Three people need storage: a student wants to take one PDF to class; a photographer wants to copy a large folder of photos for an authorized project; and a family wants an independent copy of important household files kept away from the main laptop. You can choose from a reputable small flash drive, a portable SSD, and an external hard drive. The examples are illustrative, not exclusive purchasing recommendations.

**Your task:** For each person, identify a possible storage device, the main reason for choosing it, and one limitation that must still be managed. Also explain why the word *backup* requires more than simply owning a second device. If you own a permitted USB device, note its connector type and approximate capacity without changing any files.

1. Write the purpose for each of the three tasks: transfer, larger active-file transfer, or backup.
1. Select a device and state one practical advantage.
1. State a risk such as physical loss, damage, insufficient capacity, compatibility, or missing copies.
1. Describe where another independent copy should exist if the information matters.
1. Give a one-sentence rule for avoiding unauthorized use of someone else's storage.

**Check your work:** A good answer distinguishes a convenient transport device from an independently tested recovery copy. There can be more than one reasonable device choice depending on capacity, security, budget, and equipment.

:::answer Show Activity 1 model solution
- A small flash drive is convenient for carrying a PDF to class, provided the receiving computer can use it. The main risk may be losing the tiny device or forgetting it after class.
- A portable SSD can suit a large authorized photo transfer when capacity and speed are useful. The user should check the cable and destination computer and still keep another copy.
- An external hard drive can provide capacity for a separate copy of household records, but a dependable backup plan must include regular updates, storage in a separate safe location when appropriate, and restoration tests.
- A transfer copy is not automatically a backup. Important files should have an independent recovery copy, not simply move from one device to another.
- A good permission rule is: use only storage and files that you own or have been explicitly authorized to access.
:::

### Activity 2: Identify a drive before copying

**Scenario:** You open This PC on a Windows 11 computer and see `Local Disk (C:)`, `COURSE_USB (E:)`, and `ARCHIVE (F:)`. The task says to put `practice-outline.txt` into `COURSE_USB` inside a folder named `Unit8`. You are not allowed to edit the family archive.

**Your task:** State the correct drive and destination, and explain why the other two locations are inappropriate. Describe the information you would check before proceeding. For hands-on practice on an authorized device, open **This PC** and inspect the relevant device label and free space without making changes.

1. Identify the source file's folder on the computer.
1. Identify the intended destination as a complete path on the example computer.
1. Explain why `C:` and `F:` should not be selected.
1. Name two facts besides the drive letter that help identify the intended device.
1. Describe what you should do if the device says it needs to be formatted.

**Check your work:** Correct answers show awareness that drive letters may change and that a formatting prompt can endanger data.

:::answer Show Activity 2 model solution
- The intended destination is `E:\Unit8\practice-outline.txt`, assuming `Unit8` exists or can be created with permission.
- `C:` is the computer's internal system volume in this example, not the removable destination. `F:` is the family archive, which the task forbids changing.
- Confirm the volume label, expected capacity, and visible folder contents before copying. The letter `E:` is a useful clue but not a permanent identity.
- If the computer requests formatting, cancel and stop. Contact the owner or qualified support; do not erase a device containing unknown or important information.
:::

### Activity 3: Copy a file and verify the result

**Scenario:** You created a harmless text file named `mgu-usb-check.txt` in an authorized practice folder. The file contains the sentence “This is my USB practice document.” You want to carry a copy to another computer while retaining the original.

**Hands-on option:** Use a personally owned, nonessential, recognized USB drive and your disposable practice file. **Paper option:** Write the steps and expected source/destination state. Do not use any personal or sensitive content.

1. Write down the source folder and the destination drive and folder.
1. In File Explorer, select the practice file and use **Ctrl + C**.
1. Navigate to the verified practice folder on the USB drive and use **Ctrl + V**.
1. Wait for any transfer to finish; do not unplug the drive during copying.
1. In the USB folder, verify that `mgu-usb-check.txt` exists and safely opens with the intended sentence.
1. Return to the source folder and confirm the original remains there.
1. Record whether the two files are in distinct locations. Close the text file before ejecting.

**Check your work:** The strongest evidence is not the progress indicator. It is a recognizable copy that can be opened from the correct destination, with the original still present.

:::answer Show Activity 3 model solution
The original remains in the computer's practice folder. A second file with the same intended content appears in the verified practice folder on the USB drive. The learner can identify both full locations, can read the test sentence from the USB copy, and has not intentionally deleted or moved the source. After the practice, the learner saves and closes any open file, ejects the correct drive, waits for confirmation, and then disconnects it. If the target copy fails to open, the learner should preserve the original and repeat the transfer only after identifying the problem.
:::

### Activity 4: Decide whether it is safe to unplug

**Scenario A:** Windows displays a file-copy progress window showing that a transfer is still in progress. **Scenario B:** The copy window has closed, but a spreadsheet is open from the USB drive. **Scenario C:** All USB files are closed, no transfer appears active, and Windows has confirmed that the selected drive was safely ejected. **Scenario D:** Windows says that the drive cannot be ejected because it is in use.

**Your task:** For each scenario, decide whether to unplug, wait, close an app, try ejecting, or seek assistance. State the consequences of a wrong decision. If using a real drive, practice locating the appropriate **Safely Remove Hardware and Eject Media** control, but do not force an actual disconnection while software uses the device.

1. Evaluate scenario A and explain why it is unsafe to unplug.
1. Evaluate scenario B and identify the next action.
1. Evaluate scenario C and identify the correct action.
1. Evaluate scenario D and describe safe troubleshooting steps.
1. Summarize the full disconnection sequence in six short verbs.

**Check your work:** The operating system should finish access to the device before physical removal. A taskbar confirmation matters more than an indicator light.

:::answer Show Activity 4 model solution
- **A:** Do not unplug. Allow the transfer to finish, then verify the destination, close open files, and eject.
- **B:** Save and close the spreadsheet and any other programs using the drive, then eject it and wait for confirmation.
- **C:** It is generally appropriate to disconnect gently after successful ejection and confirmation.
- **D:** Do not force removal. Close files and programs using the device, allow background tasks to finish, and retry ejecting. Seek approved support if the warning persists.
- Six verbs: **Finish, verify, close, eject, wait, unplug.**
:::

### Activity 5: Diagnose compatibility and backup decisions

**Scenario:** A student has a 6 GB video that must go from a Windows laptop to a compatible Mac. The student's USB flash drive reports plenty of free space, but copying the video fails. Inspection shows that the drive uses FAT32. Separately, the student's only completed essay exists on that same flash drive. The Mac has a different USB port than the drive's connector, and the student considers formatting the drive as a quick fix.

**Your task:** Identify at least four distinct issues, propose a safer order of operations, and decide which actions should *not* be taken before protecting the essay. You do not need to perform any formatting or file-system changes.

1. Explain why the 6 GB file may fail even when the FAT32 drive has enough total free space.
1. Explain the role of an appropriate data-capable connector or adapter.
1. Identify the risk of formatting a drive holding the only essay copy.
1. Propose a transfer alternative that does not endanger the essay.
1. State what evidence would show the video can be used on the Mac.
1. Draft a one-sentence plan for creating and testing an independent essay backup.

**Check your work:** The solution should distinguish free capacity, per-file size limits, connector compatibility, and recovery planning. A destructive format change is not an appropriate first response.

:::answer Show Activity 5 model solution
- FAT32 has a maximum individual file size smaller than 6 GB, so the copy may fail despite adequate free space. Total capacity and the size limit of one file are different constraints.
- The student needs a supported connector or data-capable adapter; matching the shape is necessary but does not guarantee format or power compatibility.
- Formatting can erase the only essay copy. The student must not format the drive with important contents.
- First save and independently verify another copy of the essay in an approved location. For the video, use a separate compatible, authorized device or another approved transfer method that supports the video size and receiving Mac.
- On the Mac, verify that the intended complete file appears and opens correctly in an appropriate media player. If the media depends on an unsupported codec, file transfer alone will not solve playback.
- A strong backup plan retains a primary essay copy, stores another independent copy in an approved separate location, and opens the restored or copied file to verify it.
:::

### Consolidated performance task: A safe transfer plan

Write a short plan for transferring a harmless file to another authorized computer. Identify the **original file**, **intended external device**, **receiving device**, **compatibility checks**, **copy procedure**, **verification method**, **safe removal steps**, and **independent backup location**. A plan is complete when another student could follow it without having to guess which drive to use or whether it is safe to disconnect. Avoid passwords, confidential names, and actual personal account information in the written plan.

If an activity reveals an unfamiliar warning, stop at the observation stage and record the warning's meaning in plain language. You will not lose credit for choosing the safer, non-destructive action instead of proceeding with a risky operation.

## 8. Common misconceptions and troubleshooting

Portable drives are simple in appearance, yet errors often come from assumptions rather than advanced technical failures. This section helps you distinguish an ordinary usage mistake from a problem that calls for qualified help. The priority is always **preserving existing data**.

### Misconception 1: If I plugged in the USB drive, my files copied automatically

Usually false. Connecting the drive makes it available for access; it does not automatically copy Documents or other folders. Some backup or import applications are configured to run automatically, but they must be verified. Look for an actual transfer operation and confirm the destination contents. If the USB contains nothing, the first question is whether the files were actually copied, not whether the computer “lost” them.

### Misconception 2: E is always the USB drive

False. Windows may use `D:`, `E:`, `F:`, or another letter, depending on the machine and other volumes. A drive's label can also be changed. Verify the intended physical device, label, reported size, and expected contents. On a Mac or Chromebook, do not expect Windows-style drive letters at all.

### Misconception 3: A USB-C cable always transfers data quickly

False. USB-C identifies the connector shape, while data capabilities depend on the cable, port, device, and relevant standards. If an external SSD is very slow or not recognized, inspect the cable and connection requirements. Avoid unsupported adapters and physically forcing a connector. Check the manufacturer's documentation for device-specific needs.

### Misconception 4: A drive that has enough free space can store any file

False. Available capacity and file-system limits are separate. A FAT32-formatted drive can have ample free space yet reject an individual file of 4 GiB or more. The safe response is to assess compatible transfer options and preserve existing information. Formatting a drive without confirmed independent copies is a dangerous shortcut.

### Misconception 5: A completed progress bar proves the destination copy is perfect

False. It indicates that a requested operation appears complete, but you should verify the target location and contents. For a practice document, open the copy and check its content. For important projects, also consider whether associated media, references, and required applications are present on the receiving computer.

### Misconception 6: Moving a file to a USB drive is always the same as copying it

False. Copying preserves the source, while moving changes its location and may remove the source. Dragging behavior can vary with context and keyboard modifiers. Use explicit Copy and Paste during beginner practice. Keep the original until you have checked the external copy and have a separate recovery option.

### Misconception 7: A physical drive is automatically private

False. An ordinary unencrypted USB drive may expose its files to a person who finds it. The drive's small size increases the chance of loss. Use approved protection for sensitive material and follow organizational policies. Encryption can help with confidentiality but can also make data inaccessible if recovery credentials are lost.

### Misconception 8: If a computer asks to format a drive, clicking Yes is a repair

False and potentially destructive. Formatting prepares a file system and may erase existing data. The message may mean the computer does not recognize the format, that the file system has a problem, or that the device has failed. Cancel, do not initialize or partition it, and seek appropriate support if it may contain important files.

### Misconception 9: If I deleted a USB file, I can always recover it from Recycle Bin

False. Deleting from removable media does not always send files to the ordinary Windows Recycle Bin, and recovery depends on the device, software, settings, and what happened afterward. Do not rely on Recycle Bin as your backup. If a valuable file is unexpectedly missing, stop writing to the drive to avoid overwriting recoverable data and seek appropriate help.

### Misconception 10: One external drive is a complete backup plan

False. A single copy can be lost, stolen, damaged, or affected by malicious activity. A sound backup approach preserves independently stored copies and periodically verifies restoration. The next lesson teaches Basic Backups in greater detail.

### If the drive does not appear

Start with **read-only checks**. Confirm the drive is authorized, the correct port is used, the connector fits, and any necessary power is supplied. Open File Explorer and review **This PC**. On a Mac use Finder; on Chromebook use Files. If a cable is detachable, a known-good data-capable cable may resolve a connection issue when safe and permitted. If the drive requires encryption credentials or approval, contact the appropriate person rather than trying to bypass access restrictions.

Do not immediately open Disk Management and select Initialize, Format, Clean, or Delete Volume. These operations can modify or destroy data. If it is a new blank practice device, ask the owner or manufacturer what setup is required. If it is an existing drive that previously worked and contains important information, stop experimenting and seek qualified advice.

### If copying is slow or stops

Large numbers of small files, a slow flash drive, a limited hub, a low-quality cable, or competing computer activity can make transfers slower. Check that the destination has adequate free space and that the selected file is permitted by the file system. If a transfer stops unexpectedly, verify the source remains intact. Do not unplug in the middle of a write or repeatedly restart transfers on a device showing signs of failure.

### If the drive is read-only or access is denied

A device can be write-protected, encrypted, mounted in a mode that does not permit changes, or restricted by policy. A Mac may treat some NTFS-formatted drives differently from Windows. Do not alter permission settings or turn off security controls to bypass an access restriction. Determine whether a read-only view is acceptable for the task or ask the owner or administrator for an approved method.

### If the drive cannot be ejected

Save and close open files and programs, then wait for background work to finish. Retry the supported eject method. Do not force disconnection or end unfamiliar system processes to make the warning disappear. If necessary, seek approved support or safely shut down the computer after all work is finished before disconnecting, subject to the device manufacturer's instructions.

### If files are missing after copying

First identify whether you are viewing the **correct drive** and **correct folder**. Search the intended destination and compare filenames. The copy might have gone into a similarly named folder or an alternate volume. Verify the original remains. If the USB is failing, avoid additional writes. If files were deleted, the recovery options may be limited; the best protection is an independently stored copy created beforehand.

### If the device becomes hot, damaged, or makes unusual sounds

Stop normal use. Do not continue transferring important files or subject the device to more stress. Some warmth is normal for certain electronics, but abnormal heat, a burning smell, repeated disconnects, or mechanical clicking deserves caution. Seek qualified technical support and prioritize existing independent copies. Physical repair and data recovery are not beginner file-management exercises.

> **Troubleshooting priority:** Identify the device, protect the source, avoid destructive changes, seek qualified help when necessary, and document what happened. The correct beginner response is often to **stop safely**, not to keep trying random commands.

## 9. Essential vocabulary

Selecting a dotted-underlined vocabulary term earlier in this lesson displays its definition in the dashboard. Terms with a verified MGU Encyclopedia reference may include a link for further reading. Use this glossary to review the concepts before attempting the assessment.

- **External storage:** A storage device that is connected outside the computer's internal storage system and used to hold files.
- **Internal storage:** Built-in storage, often an SSD, used for the computer's operating system, applications, and files.
- **USB flash drive:** A small portable device using flash memory, commonly used to transport files.
- **External SSD:** An externally connected solid-state drive with electronic storage and no spinning disk.
- **External hard drive:** A storage device containing a hard disk with moving mechanical parts.
- **SD card:** A removable memory card used by many cameras and selected computers.
- **microSD card:** A smaller memory card used by selected phones, cameras, and devices.
- **Card reader:** Hardware that connects a memory card to a compatible computer or device.
- **USB-A:** A common rectangular USB connector shape.
- **USB-C:** A small reversible USB connector shape; supported functions vary.
- **USB hub:** A device that provides additional ports and may share bandwidth or power.
- **Data cable:** A cable that can carry data between compatible devices, rather than serving only a charging role.
- **Capacity:** The amount of data storage a device can provide, usually expressed in GB or TB.
- **Free space:** The amount of available storage remaining on a volume.
- **File:** A named collection of data saved on a storage device.
- **Folder:** A container used to organize files and other folders.
- **Root folder:** The top-level folder of an accessible storage volume.
- **Volume:** A logical storage area that an operating system can present for file access.
- **Volume label:** A readable name assigned to a volume, such as `CLASS_USB`.
- **Drive letter:** A Windows identifier such as `E:` assigned to a storage volume.
- **File Explorer:** Windows software used to browse, organize, and inspect files and drives.
- **Finder:** The macOS application used to navigate files, folders, and connected volumes.
- **Files app:** A file-management application on supported devices such as Chromebooks and iPhones.
- **File system:** The system used to organize files and directories on a storage volume.
- **FAT32:** A file system with wide historical compatibility but an individual file-size limit below 4 GiB.
- **exFAT:** A file system often used for removable media and large files on many modern devices.
- **NTFS:** A file system commonly used by Windows, with support that varies on other platforms.
- **APFS:** Apple's modern file system used in many macOS and Apple-device contexts.
- **Formatting:** Preparing a storage volume with a file system; it can erase existing access to data.
- **Partition:** A defined area of a physical drive that may be used as a separate logical storage region.
- **Mounting:** Making a storage volume accessible to an operating system.
- **Read-only:** A state in which data can be read but not modified through the current access method.
- **Source:** The original location from which a file is copied or moved.
- **Destination:** The location where a copy or moved file is intended to arrive.
- **Copy:** An operation that creates another instance of information without intentionally removing the source.
- **Move:** An operation that relocates a file or folder and may remove it from the source location.
- **Transfer copy:** A copy created so a file can be used at a different destination.
- **Backup copy:** An independent recovery copy kept to restore data after loss or damage.
- **Verification:** Checking that an operation produced the intended, usable result.
- **Eject:** An operating-system action preparing a removable storage device for disconnection.
- **Unmount:** Ending the operating system's active access to a storage volume, often before physical removal.
- **Corrupted file:** A file whose data is damaged or changed so it may not function as intended.
- **Cloud storage:** Storage accessed through a networked service and account, often with local synchronization options.
- **Synchronization:** Coordinating changes across selected devices or storage locations; not necessarily independent backup.
- **Encryption:** Encoding information so that authorized access requires an appropriate key or credential.
- **BitLocker To Go:** A Microsoft removable-drive encryption capability available in supported Windows environments.
- **Write protection:** A setting or physical control intended to restrict changes to storage media.
- **USB On-The-Go:** A USB capability used by supported devices to act as a host for connected accessories.
- **AutoPlay:** A Windows feature that can offer actions when a device or media is connected.
- **Notification:** An operating-system message that may report new devices, security concerns, or completed actions.
- **Restore test:** A test showing whether saved information can be recovered from a backup.
- **3-2-1 backup rule:** A planning heuristic recommending three copies, two kinds of storage, and one copy separate from the primary location.
- **Device policy:** Organizational rules that may control storage devices, data transfers, and security settings.
- **Malware:** Software designed or used to harm, disrupt, steal, or gain unauthorized access.
- **Data recovery:** Attempts to retrieve data after a file is lost, deleted, damaged, or made inaccessible.

### Vocabulary in a practical sentence

“I will **identify** the correct USB **volume**, **copy** my practice file from the **source** to the **destination**, **verify** the result, **eject** the drive, and preserve a separate **backup**.”

These are connected actions, not interchangeable terms. The glossary gives names to the decisions that make a transfer safe and repeatable. If you can explain the sentence to someone else without looking it up, you have learned the core of this lesson.

## 10. Knowledge check

Choose one answer for each of the 30 questions. Select **Check answers** in the dashboard to review your score and explanations. Answers are graded in the browser for self-study; they are not a secure examination and are not automatically stored as an official grade. After the quiz, use the separate expandable answer key for a written or accessible review. Questions test both facts and decisions in ordinary scenarios.

:::quiz
? What best describes external storage?
- [x] A separate connected device used to hold files
- [ ] The screen of a computer
- [ ] A temporary keyboard shortcut
- [ ] An internet-only account
! External storage is separate from built-in storage and commonly connects through USB or a card reader.

? Which device is generally a small, portable flash-memory device for transferring selected files?
- [ ] A monitor
- [x] A USB flash drive
- [ ] A printer cartridge
- [ ] A mouse
! A USB flash drive stores files in nonvolatile flash memory.

? Which statement about a flash drive carrying the only copy of a file is correct?
- [ ] It is automatically a verified backup
- [ ] The copy cannot be lost
- [x] The only copy is vulnerable to loss or failure
- [ ] It can never become corrupted
! A single copy, wherever stored, is a single point of failure.

? Which of the following best describes a typical external hard drive?
- [ ] It always connects wirelessly
- [ ] It stores only links to cloud accounts
- [ ] It cannot hold photographs
- [x] It may have spinning mechanical components
! Traditional hard disk drives use moving mechanical components.

? What does USB-C primarily identify?
- [x] A connector shape
- [ ] A guarantee of the fastest speed
- [ ] A file-system format
- [ ] A password requirement
! The USB-C shape does not by itself specify cable speed, power, or functions.

? Which tool can connect an SD card to a computer without a matching card slot?
- [ ] A monitor stand
- [x] A compatible card reader
- [ ] A printer driver
- [ ] An HDMI-only screen
! A suitable card reader connects an SD or microSD card to the computer.

? What is the safest first action after plugging in an authorized USB drive in Windows 11?
- [ ] Delete any unfamiliar files
- [ ] Immediately run every program on it
- [x] Open File Explorer and identify the correct device
- [ ] Format the drive
! Identify and inspect the intended storage before taking actions.

? Where can you commonly look for connected drives in Windows 11?
- [ ] Only in the web browser history
- [ ] Inside Recycle Bin only
- [ ] Only in the Start menu search bar
- [x] File Explorer under This PC
! This PC shows the commonly accessible local and removable volumes.

? What should you assume about an external drive assigned E: on your laptop?
- [x] Its drive letter may differ on another computer
- [ ] It is necessarily encrypted
- [ ] Every E: drive is physically the same device
- [ ] It is always your school drive
! Drive letters depend on the system and volume assignments.

? Which combination is best for confirming the correct removable destination?
- [ ] Icon color alone
- [x] Label, expected capacity, and intended contents
- [ ] Whether the icon is on the left
- [ ] The first drive alphabetically
! Use several grounded clues rather than trusting a single letter or label.

? You must retain the original file and put a second instance on USB. What should you choose?
- [ ] Format the drive
- [ ] Rename the source to USB
- [x] Copy and paste
- [ ] Delete the source first
! Copy creates a second instance without intentionally removing the original.

? What does the destination mean in a file-transfer operation?
- [ ] The file extension
- [ ] The last application opened
- [ ] The original folder
- [x] The place the copied file is intended to arrive
! The destination is the target location for the transfer.

? Which step provides stronger verification after copying a harmless practice document?
- [x] Open the copied document from the intended USB folder and compare its content
- [ ] Assume the progress bar guarantees content
- [ ] Only look at the color of the drive icon
- [ ] Delete the original immediately
! Open and inspect the intended destination copy when it is safe to do so.

? What should you do when a USB destination already contains an important file with the same name?
- [ ] Always replace it
- [x] Stop and compare versions before deciding
- [ ] Delete the whole folder
- [ ] Disconnect without ejecting
! Replacing without review can destroy valuable older work.

? A 6 GB file fails to copy to a FAT32 drive with plenty of space. What is a likely explanation?
- [ ] The keyboard is broken
- [ ] The file name is too short
- [x] FAT32 cannot store an individual file of that size
- [ ] The monitor is too small
! FAT32 has a per-file size limit below 4 GiB, independent of total available space.

? A USB drive that contains important files prompts you to format it. What is the safest response?
- [ ] Click Format immediately
- [ ] Click Initialize instead
- [ ] Erase the contents to make it compatible
- [x] Cancel and seek appropriate help without modifying it
! Formatting can erase or make existing data inaccessible; protect it first.

? What is the best beginner routine before physically removing a USB drive?
- [x] Finish, verify, close files, eject, wait, unplug
- [ ] Unplug during writing if the light is off
- [ ] Delete the folder and pull it out
- [ ] Start a new transfer then disconnect
! Safe ejection follows completion and verification, after files are closed.

? Windows reports that the USB drive is in use. What is a good next action?
- [ ] Force the connector out
- [x] Save and close programs using the drive, then retry ejecting
- [ ] Disable security software
- [ ] Format the drive
! An open file or background process may prevent safe removal.

? What is one reason to use an encrypted external drive for sensitive information?
- [ ] It replaces backups
- [ ] It makes the drive indestructible
- [x] It can restrict access to data without the proper key
- [ ] It guarantees every phone can read the files
! Encryption can protect confidentiality but requires key management and does not replace backup.

? What should you do with an unknown USB device found in a public parking lot?
- [ ] Plug it into a school computer
- [ ] Open it to find the owner
- [ ] Run its installer
- [x] Turn it over through an authorized lost-property or security process
! Unknown devices can pose security risks, so do not connect them to test ownership.

? Where can connected external volumes usually be found on a Mac?
- [x] In Finder under Locations
- [ ] Only in the Windows Recycle Bin
- [ ] Only in a browser downloads page
- [ ] Inside the keyboard settings
! Finder presents accessible connected storage, often under Locations.

? Which app commonly manages external storage on a Chromebook?
- [ ] Photos only
- [x] Files
- [ ] Calculator
- [ ] Calendar
! The ChromeOS Files app supports compatible external drives and their ejection.

? On a supported iPhone, where might an external drive appear?
- [ ] In the Windows Device Manager
- [ ] Only inside Settings > Wallpaper
- [x] In the Files app under Browse and Locations
- [ ] Only in the camera flash menu
! Supported devices can access attached storage through Files under Locations.

? What should an Android user check before expecting an attached USB drive to work?
- [ ] Only the wallpaper color
- [ ] The device name's first letter
- [ ] Whether Wi-Fi is always enabled
- [x] Device support, connector, power, and a compatible file manager
! Android external storage support varies by device, cable, power, and file system.

? Which file system is often used for cross-platform removable media and large files, subject to device support?
- [x] exFAT
- [ ] A spreadsheet program
- [ ] Bluetooth
- [ ] A browser bookmark
! exFAT is commonly used for modern removable media, but compatibility must still be verified.

? Which statement about NTFS and APFS is most accurate?
- [ ] Both are guaranteed writable on every device
- [x] Support differs among operating systems and devices
- [ ] Both identify USB port shapes
- [ ] Neither can store folders
! Different platforms do not necessarily provide identical read and write support.

? Why is a single always-connected external drive not a complete recovery plan?
- [ ] It cannot store any file
- [ ] It always uses the internet
- [x] It may share risks such as theft, ransomware, or damage with the computer
- [ ] It automatically verifies every restore
! Backups require independent protection, not merely a second device beside the first.

? What does a restore test demonstrate?
- [ ] That the file icon is blue
- [ ] That a USB plug is reversible
- [ ] That an advertised capacity is correct
- [x] That saved information can be recovered and used
! A tested restore offers stronger evidence that a backup can serve its recovery purpose.

? What is the safest reaction to repeated disconnects and unusual clicking from an external hard drive?
- [x] Stop using it for important writes and seek qualified help
- [ ] Keep retrying every minute
- [ ] Immediately format it
- [ ] Put the only backup on it
! Repeated failures or mechanical sounds can indicate hardware trouble; reduce further risk.

? Which statement best summarizes this lesson?
- [ ] USB devices always back up every folder automatically
- [x] Confirm the destination, copy, verify, safely eject, and keep independent copies
- [ ] Unplugging during writes is an efficient workflow
- [ ] Changing file systems is the best beginner troubleshooting step
! A safe storage workflow is deliberate, verified, non-destructive, and supported by independent backup.

:::

:::answer Show the 30-question answer key and explanations
1. **A. A separate connected device used to hold files** — External storage is separate from built-in storage and commonly connects through USB or a card reader.
2. **B. A USB flash drive** — A USB flash drive stores files in nonvolatile flash memory.
3. **C. The only copy is vulnerable to loss or failure** — A single copy, wherever stored, is a single point of failure.
4. **D. It may have spinning mechanical components** — Traditional hard disk drives use moving mechanical components.
5. **A. A connector shape** — The USB-C shape does not by itself specify cable speed, power, or functions.
6. **B. A compatible card reader** — A suitable card reader connects an SD or microSD card to the computer.
7. **C. Open File Explorer and identify the correct device** — Identify and inspect the intended storage before taking actions.
8. **D. File Explorer under This PC** — This PC shows the commonly accessible local and removable volumes.
9. **A. Its drive letter may differ on another computer** — Drive letters depend on the system and volume assignments.
10. **B. Label, expected capacity, and intended contents** — Use several grounded clues rather than trusting a single letter or label.
11. **C. Copy and paste** — Copy creates a second instance without intentionally removing the original.
12. **D. The place the copied file is intended to arrive** — The destination is the target location for the transfer.
13. **A. Open the copied document from the intended USB folder and compare its content** — Open and inspect the intended destination copy when it is safe to do so.
14. **B. Stop and compare versions before deciding** — Replacing without review can destroy valuable older work.
15. **C. FAT32 cannot store an individual file of that size** — FAT32 has a per-file size limit below 4 GiB, independent of total available space.
16. **D. Cancel and seek appropriate help without modifying it** — Formatting can erase or make existing data inaccessible; protect it first.
17. **A. Finish, verify, close files, eject, wait, unplug** — Safe ejection follows completion and verification, after files are closed.
18. **B. Save and close programs using the drive, then retry ejecting** — An open file or background process may prevent safe removal.
19. **C. It can restrict access to data without the proper key** — Encryption can protect confidentiality but requires key management and does not replace backup.
20. **D. Turn it over through an authorized lost-property or security process** — Unknown devices can pose security risks, so do not connect them to test ownership.
21. **A. In Finder under Locations** — Finder presents accessible connected storage, often under Locations.
22. **B. Files** — The ChromeOS Files app supports compatible external drives and their ejection.
23. **C. In the Files app under Browse and Locations** — Supported devices can access attached storage through Files under Locations.
24. **D. Device support, connector, power, and a compatible file manager** — Android external storage support varies by device, cable, power, and file system.
25. **A. exFAT** — exFAT is commonly used for modern removable media, but compatibility must still be verified.
26. **B. Support differs among operating systems and devices** — Different platforms do not necessarily provide identical read and write support.
27. **C. It may share risks such as theft, ransomware, or damage with the computer** — Backups require independent protection, not merely a second device beside the first.
28. **D. That saved information can be recovered and used** — A tested restore offers stronger evidence that a backup can serve its recovery purpose.
29. **A. Stop using it for important writes and seek qualified help** — Repeated failures or mechanical sounds can indicate hardware trouble; reduce further risk.
30. **B. Confirm the destination, copy, verify, safely eject, and keep independent copies** — A safe storage workflow is deliberate, verified, non-destructive, and supported by independent backup.
:::

### Exit task: Explain the safety routine

Complete the following statements from memory and compare them with the lesson if necessary:

1. Before copying, I confirm the source file and the __________ drive or folder.
1. After copying, I __________ the destination copy before relying on it.
1. Before unplugging a drive, I save and close files, then __________ the device.
1. A drive containing my only copy of important work is __________ a dependable backup plan.
1. If Windows offers to format a drive containing valuable data, I __________ and seek appropriate advice.

:::answer Show the exit-task model responses
1. **Correct destination** or **intended external**.
1. **Verify**, such as by opening a safe practice document and checking its contents.
1. **Eject** and wait for confirmation.
1. **Not**. Another independent recovery copy and testing are necessary.
1. **Cancel or stop** rather than formatting.
:::

## 11. MGU Library connections and next steps

External storage connects several skills you have already learned: locating files, creating folders, using descriptive names, copying without deleting originals, and confirming destination locations. It also prepares you for the course's final lesson about recovery copies. The sources below are official device guidance or verified MGU course navigation pages. Platform menu wording may change with software updates, policies, and device models.

### MGU course review

- [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) — the complete sequence of nine lessons.
- [Files vs Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/files-vs-folders/) — foundational difference between data items and organizational containers.
- [Where Files Are Saved](/department/computer-science/basic-computer-skills/file-and-folder-skills/where-files-are-saved/) — how to identify storage locations.
- [Creating Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/creating-folders/) — preparing an organized destination.
- [Naming Files Clearly](/department/computer-science/basic-computer-skills/file-and-folder-skills/naming-files-clearly/) — naming files and versions meaningfully.
- [Copy, Move, Rename, Delete](/department/computer-science/basic-computer-skills/file-and-folder-skills/copy-move-rename-delete/) — understanding and choosing file operations.
- [Finding Lost Files](/department/computer-science/basic-computer-skills/file-and-folder-skills/finding-lost-files/) — locating files and making safer recovery decisions.
- [Downloads, Desktop, and Documents](/department/computer-science/basic-computer-skills/file-and-folder-skills/downloads-desktop-and-documents/) — preparing sources and filing destinations.

### Official platform guidance

- [Microsoft Support: Safely remove hardware in Windows](https://support.microsoft.com/en-us/windows/hardware/safely-remove-hardware-in-windows) — official Windows safe-removal guidance.
- [Microsoft Support: Move your files to a new Windows PC using an external storage device](https://support.microsoft.com/en-us/windows/experience/backup-recovery/move-your-files-to-a-new-windows-pc-using-an-external-storage-device) — transferring and verifying copies.
- [Microsoft Support: File Explorer in Windows](https://support.microsoft.com/en-us/windows/experience/fileexplorer/file-explorer-in-windows) — opening and navigating Windows storage locations.
- [Microsoft Learn: BitLocker device encryption](https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview) — background on removable-drive encryption and its limitations.
- [Apple Support: Connect and use other storage devices with Mac](https://support.apple.com/en-lamr/guide/mac-help/mchl027f1d66/mac) — locating and ejecting external storage on Mac.
- [Apple Support: Connect external storage devices to iPhone](https://support.apple.com/en-lamr/guide/iphone/iph95baac91f/ios) — supported accessories and Files app navigation.
- [Google Chromebook Help: Open, save, or delete files on your Chromebook](https://support.google.com/chromebook/answer/1700055?hl=en) — using Files and ejecting external drives.
- [Google Chromebook Help: File types and external devices that work on Chromebooks](https://support.google.com/chromebook/answer/183093?hl=en) — supported removable media and compatibility.
- [Files by Google Help: Use USB storage devices](https://support.google.com/files/answer/9301516?hl=en-SL) — external USB storage in supported Android environments.

### Continue the course

[← Previous lesson: Downloads, Desktop, and Documents](/department/computer-science/basic-computer-skills/file-and-folder-skills/downloads-desktop-and-documents/) · [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) · [Next lesson: Basic Backups →](/department/computer-science/basic-computer-skills/file-and-folder-skills/basic-backups/)

> **Lesson completion checklist:** I can identify common external storage devices; check the correct drive before copying; explain source and destination; copy and verify a practice file; safely eject removable storage; recognize formatting as potentially destructive; account for other-platform compatibility; and explain why one portable drive is not a complete backup plan.

:::terms
external-storage | External storage | A device connected outside a computer’s internal storage system that can hold files. |
backup | Backup | An independent copy maintained to help restore information after loss or damage. |
internal-storage | Internal storage | Built-in storage used for a computer’s operating system, programs, and files. |
file | File | A named collection of information stored in a computer-readable form. |
cloud-storage | Cloud storage | Information held in a network-accessible service and account, possibly also synchronized to devices. |
local-copy | Local copy | A copy kept on a directly accessible device such as a laptop or attached drive. |
transfer-copy | Transfer copy | A copy prepared so a file can be used at another device or location. |
backup-copy | Backup copy | An independent recovery copy stored and maintained for restoring lost or damaged data. |
usb-flash-drive | USB flash drive | A small portable storage device using nonvolatile flash memory. |
ram | RAM | Temporary working memory used for active programs and data; unlike flash storage, typical RAM loses contents without power. |
external-ssd | External SSD | A portable solid-state drive that uses electronic storage rather than spinning platters. |
external-hdd | External hard drive | A portable or desktop-connected hard drive that uses spinning magnetic media. |
sd-card | SD card | A removable memory card used in many cameras and selected computers. |
microsd-card | microSD card | A smaller memory card used by selected cameras, phones, and embedded equipment. |
card-reader | Card reader | Hardware that allows a compatible computer to access a memory card. |
usb-hub | USB hub | A device providing additional USB connections, potentially sharing power or bandwidth. |
file-system | File system | The scheme an operating system uses to organize files and directories on storage. |
drive-letter | Drive letter | A Windows identifier such as E: assigned to a storage volume. |
root-folder | Root folder | The top folder of a given accessible volume. |
file-explorer | File Explorer | Windows software for browsing drives, files, and folders. |
notification | Notification | A system message about a status, event, or requested action. |
autoplay | AutoPlay | Windows functionality that can offer actions when media or a device is connected. |
read-only | Read-only | A condition allowing inspection of data but preventing writes by the present method. |
encryption | Encryption | Encoding information to restrict access without the appropriate key or credential. |
partition | Partition | A defined part of storage that can support a logical volume and file system. |
fat32 | FAT32 | A file system with broad historical compatibility and an individual file-size limit below 4 GiB. |
move | Move | Relocating a file or folder; the original location may no longer hold it afterward. |
corrupted-file | Corrupted file | A file damaged or altered so an application may not be able to use it correctly. |
device-encryption | Device encryption | Protection of stored data so that access generally requires an authorized key or credential. |
bitlocker-to-go | BitLocker To Go | A Microsoft capability for encrypting removable storage on supported Windows systems. |
usb-otg | USB On-The-Go | USB functionality allowing supported devices to connect to external accessories as hosts. |
formatting | Formatting | Preparing a storage volume with a file system, which can erase access to existing information. |
restore-test | Restore test | A controlled demonstration that backup information can be recovered and used. |
:::
