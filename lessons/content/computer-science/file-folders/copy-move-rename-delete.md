Basic Computer Skills / File and Folder Skills

## Lesson 5: Copy, Move, Rename, Delete

A student saves a report in Downloads, makes a second copy in Documents, gives it a clearer name, and removes a draft that is no longer needed. These ordinary tasks may seem similar because they all involve files, but they have very different results. Copying keeps the original and creates another item. Moving changes an item's location. Renaming changes its label. Deleting removes it from its current location and may start a recovery countdown. Understanding these differences is essential when the file contains work that cannot easily be recreated.

This fifth lesson in **File and Folder Skills** brings together what you have learned about [[file|files]], [[folder|folders]], storage locations, folder creation, and clear naming. You will practice choosing the correct operation, using the Windows 11 [[file-explorer|File Explorer]] controls, checking the result, and recovering from ordinary mistakes. The same underlying decisions apply to macOS, Chromebook, smartphones, USB drives, and cloud services, although specific controls and recovery policies differ.

The lesson uses **invented, disposable practice files**. You may complete every activity on paper or mentally; changing a real device is optional. If you practice on a computer, work only in a folder you own or have permission to use. Do not experiment with operating-system files, application installation folders, school records, employer documents, other people's files, or the only copy of a valuable document. A file-management skill includes knowing when to stop.

**Level:** Beginner · **Estimated study time:** 90–120 minutes · **Prerequisites:** File and Folder Skills Lessons 1–4 recommended · **Practice equipment:** Windows 11 computer preferred; Mac, Chromebook, phone, tablet, or written alternatives accepted · **Safety:** Prefer disposable samples; check source and destination before changing an item; never assume deleted cloud files are private, recoverable, or limited to one device.

> **Essential idea:** **Copy = keep the original and add another. Move = change the location. Rename = change the name. Delete = remove the item, with recovery depending on where and how it was deleted.** Decide what result you need, carry out one operation carefully, and verify the result before proceeding.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain the difference between copy, move, rename, and delete using everyday examples.
1. Identify a file's source location and intended destination before changing it.
1. Describe how **Copy**, **Cut**, and **Paste** work in Windows 11 File Explorer, including common keyboard shortcuts.
1. Explain why copying is often safer than moving when transferring important files to removable media or cloud storage.
1. Rename a practice file without accidentally changing its file extension or breaking its purpose.
1. Describe the usual Windows Recycle Bin workflow and important cases where deletion may not be recoverable.
1. Recognize how synchronization affects a file changed or deleted inside OneDrive, iCloud Drive, and Google Drive.
1. Distinguish a second file copy from a true backup, a shortcut, or a shared cloud link.
1. Use a deliberate **select → act → verify** workflow and respond appropriately to permission, duplicate-name, or interrupted-transfer warnings.
1. Compare the same four operations on Mac, Chromebook, iPhone, iPad, and Android, then complete five safe guided activities.

### On this page

- [1. Four operations and their results](#1-what-do-copy-move-rename-and-delete-mean)
- [2. Prepare before changing a file](#2-how-do-you-prepare-for-a-safe-file-operation)
- [3. Copying files](#3-how-do-you-copy-files-and-folders)
- [4. Moving files](#4-how-do-you-move-files-and-folders)
- [5. Renaming files](#5-how-do-you-rename-a-file-or-folder-safely)
- [6. Deleting and recovering](#6-how-do-you-delete-and-recover-files)
- [7. Guided practice](#7-guided-practice-four-operations-without-risk)
- [8. Troubleshooting and misconceptions](#8-common-misconceptions-and-troubleshooting)
- [9. Vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-mgu-library-connections-and-next-steps)

## 1. What do copy, move, rename, and delete mean?

The four operations are ways to manage information that is already saved. Each can act on one file or on a selected group of files or folders. However, their consequences are not interchangeable. The crucial question is **what should be true afterward?** If you answer that question first, choosing a command becomes much easier.

### Copy: create another instance while preserving the original

A [[copy|copy]] operation creates a second stored item containing the selected file's data. Suppose `Report.docx` is in a folder called `Assignments`. You copy it to `Submission Copies`. When the operation completes successfully, the original remains in `Assignments` and a new copy is in `Submission Copies`. The two copies can subsequently be edited separately, unless an application or service has its own sharing or synchronization behavior.

The copied file may have the same name in a different folder. Its created, modified, ownership, or permission information may differ from the source depending on the destination and tool. Copying file data does not guarantee that every property, link, permission, version history, or special file feature travels with it. **Verify the specific properties that matter for your task.**

Copying is useful when you want to provide a copy for submission, arrange material in a second location, test an edit without touching the original, or begin a transfer to an external device. A copy on the same device is not automatically a reliable [[backup|backup]]; a device failure or accidental account-wide deletion could affect both versions.

### Move: change where an item belongs

A [[move|move]] operation relocates a file or folder from one location to another. Imagine `Meeting Agenda.docx` currently appears in `Downloads`. You move it into `Documents/Meetings`. The intended result is that the same working item is now organized under the Meetings folder and no longer appears at its former location.

The underlying technical method can vary. On one storage volume, a move may largely change directory information. Across drives, services, or devices, moving may require copying data and then removing the source when the transfer is successful. Because those processes have different risks, you should avoid interrupting a move in progress and **confirm the destination before assuming the source is gone or safe to remove**.

Moving is useful for filing a finished report into the correct folder, consolidating project materials, or relocating downloaded files to a better long-term location. Moving is not the best first choice when the source is the only valuable copy and the destination is an unreliable removable drive.

### Rename: change the identifying label

A [[rename|rename]] operation changes a file or folder name within its location. For example, `Report.docx` becomes `Science Report - 2026-11.docx`. When done correctly, it does not intentionally alter the document contents, its storage location, or its valid format. The filename and, in some systems, its path have changed, so references that depend on the old name may stop working.

Renaming a folder can affect every contained file's path, even when those files themselves have not been renamed. It is therefore reasonable to rename your own practice folder but not to rename a shared organization folder without considering other people's links or applications.

A [[file-extension|file extension]] such as `.docx`, `.pdf`, or `.jpg` is part of the file's identifying name in many systems. Renaming the suffix does not convert the content to a new format. Normally you should preserve it while changing the descriptive base name.

### Delete: remove an item from its current location

A [[delete|delete]] operation tells the system to remove an item. Some systems first place the item in a [[recycle-bin|Recycle Bin]], [[trash|Trash]], or **Recently Deleted** area; others delete it without an ordinary restore step. Cloud services can also delete a synchronized file from multiple devices, even when the deletion was initiated on only one device.

Deleting a file is different from removing its desktop shortcut or unpinning it from a navigation list. Likewise, removing a local downloaded copy is not always the same as deleting the cloud original. The result depends on the location, application, and command. **Never treat the word Delete as a guarantee that recovery will be available.**

### Compare the four outcomes

| Operation | Original at source afterward | What changes | Typical reason | Important caution |
| --- | --- | --- | --- | --- |
| Copy | Usually remains | Another copy is stored at destination | Keep source and provide a second file | Two copies can diverge; not necessarily a backup |
| Move | Normally no longer there after success | Location changes | Organize or transfer an item | Destination and source must be verified |
| Rename | Remains in the same folder under new name | Name changes | Make an item easier to identify | Links and extensions may be affected |
| Delete | Removed from ordinary source view | Item may go to recovery area or be removed directly | Discard unneeded material | Recovery varies by drive, app, service, and policy |

This table describes typical intended results, not a promise that every application behaves identically. A shared document, cloud-native file, virtual shortcut, or locked system item may follow additional rules.

### Worked example: preparing a school submission

A learner has one draft named `Essay draft.docx` in `Documents/School`. They want to preserve a working original, produce a submission copy, label that copy clearly, and remove an earlier *disposable* test file.

1. **Copy** `Essay draft.docx` to a separate `Submissions` folder so the working original remains in `School`.
1. **Rename** the new copy `History Essay - Submission - 2026-11.docx`, keeping the `.docx` extension.
1. **Verify** that the newly named file opens and contains the intended final text.
1. **Delete** only the unused test item after confirming it is not the submission copy or the only surviving draft.

Moving the original would have removed it from the working folder. Renaming the original would have changed its label but not created a submission copy. Deleting the original first would have introduced unnecessary risk. The goal determines the correct combination of operations.

### File trees make changes visible

A simplified folder tree can show the difference without needing a computer:

```text
Documents/
  School/
    Essay draft.docx
  Submissions/
```

After copying and renaming the second file:

```text
Documents/
  School/
    Essay draft.docx
  Submissions/
    History Essay - Submission - 2026-11.docx
```

The two file entries now exist in different folders. They are not necessarily synchronized with one another; editing one generally will not update the other automatically. That is useful for preserving a distinct submission, but it also means you must know which copy is current.

> **Decision test:** Do you need a second instance? **Copy.** Do you need the same item in a different location? **Move.** Do you need a better label? **Rename.** Do you no longer need the item and understand the consequences? **Delete.**

## 2. How do you prepare for a safe file operation?

A beginner often focuses on the command icon: scissors for Cut, two pages for Copy, or a trash can for Delete. Yet most costly mistakes happen *before* that command: the wrong item was selected, the wrong folder was open, the file was still in use, a cloud location was mistaken for local storage, or an important original had not been protected. Preparation is part of the skill.

### Identify the source, destination, and intended result

The [[source-location|source location]] is where the item is currently stored. The [[destination|destination]] is where you intend to place it if copying or moving. The intended result describes whether the source should still contain a file when the task is complete.

For example: **Source** = `Downloads/Practice Invoice.pdf`; **Destination** = `Documents/Invoices`; **Action** = Copy; **Expected result** = one copy in each place. Write this sentence before working with any unfamiliar or valuable file. It takes a moment and can prevent a much longer search for misplaced work.

If you are using Windows 11, open File Explorer with **Windows key + E**, then check the folder name and address or breadcrumbs before selecting a file. A familiar label such as Documents may refer to a local or cloud-backed location depending on the computer's configuration. The icon and folder label alone do not establish where the data is stored.

### Check the actual selection

A [[selection|selection]] is the item or group of items that will receive the command. In a file manager, a highlighted file usually means it is selected. A careless press of Delete when an entire folder is selected can affect everything inside it. Before copying or moving several items, count what has been selected and check whether you unintentionally selected a parent folder.

On Windows, selecting one item and then **Ctrl + A** can select everything in the current list. Holding **Ctrl** while selecting distinct files can build a multiple selection; **Shift** can select a range in many views. These tools are useful, but they increase the scale of an accidental action. Use one safe practice file when first learning an operation, not a large folder.

Do not confuse **selection** with **opening**. A single click may select an item; double-clicking commonly opens it, depending on the file manager's settings. Touch devices use taps or touch-and-hold menus. Be aware of the difference before trying to drag an item.

### Check permissions and file ownership

Having the ability to view a file does not guarantee permission to move, rename, or delete it. A [[permission|permission]] may limit editing, deletion, or access in a school account, company drive, shared folder, or system directory. Do not try to bypass those limits or change them merely to complete a classroom exercise. If an item is under institutional control, ask its owner or administrator.

A file marked **read-only**, a file that is open in another app, or a file being synchronized may also produce a warning or refuse a change. A warning can be useful information. Rather than repeatedly pressing an unfamiliar confirmation button, identify which file and location the message refers to.

### Protect valuable originals

If a document cannot be easily recreated, start with a separate verified backup under the applicable rules, not a one-off test move. A backup differs from a convenience copy because it is intentionally retained for recovery, ideally outside the failure or deletion path of the original. A second file in the same synchronized folder may be deleted together with the original if someone removes that folder.

For a classroom exercise, make a new text document containing only `MGU file practice — disposable sample`. If your app or operating system offers a built-in text editor, create one such item in a personal folder and save it. Use a plain invented name such as `practice-note.txt`. No personal address, password, medical record, financial statement, or other sensitive information is necessary.

### Know what a successful operation looks like

Before acting, decide how you will verify completion. A copied file should be present at the destination **and** its original should remain in the source. A moved file should appear at the destination and should not remain as the original at the source, unless you intentionally made another copy or the transfer was incomplete. A renamed file should show the new label without losing the intended extension. A deleted file may appear in a recovery area if that location supports one.

A file shown in a list is not necessarily fully transferred, uploaded, or usable. For important files, wait for progress indicators to finish, check the size where meaningful, open the destination version when safe, and inspect any synchronization status. Do not unplug a USB drive or shut down a computer during an active transfer.

### Use a safe seven-step routine

1. **Define the outcome.** Write whether the original should remain, move, be relabeled, or be discarded.
1. **Locate the source.** Confirm the folder and inspect the actual filename.
1. **Check access.** Make sure the item belongs to you or that the task is authorized.
1. **Protect the original.** For important data, confirm a separate appropriate backup first.
1. **Select carefully.** Confirm the item count and that you did not select its entire parent folder.
1. **Execute one action.** Use a visible menu or known shortcut; stop at warnings you do not understand.
1. **Verify the result.** Check the source, destination, file contents when appropriate, and cloud or device status.

For disposable practice material, this routine may feel deliberate. For real work, it becomes a habit and reduces avoidable errors. The same habit will help when you learn backups and external-storage management later in the course.

### A simple risk table

| Situation | Recommended approach | Why |
| --- | --- | --- |
| You are sorting your own disposable practice notes | Use a test folder and one file at a time | Mistakes have limited consequences |
| You are transferring the only current report to a USB drive | Copy, verify, then decide whether to remove the original | The USB transfer might fail or be interrupted |
| You are working in a shared department folder | Confirm permissions, dependencies, and team rules first | Other people may use the file or its path |
| You are changing a OneDrive-synced folder | Review sync status and the effect across connected devices | Changes may propagate beyond this PC |
| You found a file of uncertain origin | Do not execute or open it just to test the transfer | Moving or copying does not establish the file is safe |
| A deletion warning mentions permanent removal | Cancel unless you are authorized and have a recovery plan | Ordinary Recycle Bin recovery may not apply |

> **Safety rule:** If you are uncertain whether something is the only remaining copy, treat it as valuable. Do not delete it to make a lesson exercise more realistic.

## 3. How do you copy files and folders?

Copying is often the best operation to learn first because its intended result preserves the source. You can practice in two ordinary folders, observe two file entries afterward, and compare them. A successful copy does not require you to edit or remove the original. Even so, a copy should be handled carefully when a destination already contains an item with the same name.

### Windows 11: Copy and Paste in File Explorer

Windows 11 offers Copy and Paste through the File Explorer command bar, context menus, and keyboard shortcuts. The layout varies with updates and window size; icons may show without labels, so check a tooltip or accessible name if uncertain.

1. Open **File Explorer** with **Windows key + E**.
1. Browse to a folder containing a disposable practice file such as `practice-note.txt`.
1. Select the file once and confirm the highlighted filename.
1. Choose **Copy** from the command bar or right-click menu, or press **Ctrl + C**.
1. Navigate to the destination folder, such as `Documents/MGU Practice/Copies`.
1. Choose **Paste** or press **Ctrl + V**.
1. Wait for copying to finish. Confirm the file appears at the destination.
1. Return to the source and confirm the original still exists.

**Ctrl + C does not by itself create the destination copy.** It places a reference to the selected item on the computer's [[clipboard|clipboard]] for a later Paste action. The file can remain in its original folder while the clipboard holds the instruction. The actual transfer occurs when you paste and the system completes the requested operation.

You can copy an entire folder using the same general steps. The new folder can contain copies of its files and subfolders. Before copying a large folder, examine its approximate size, destination free space, and whether it includes material you do not intend to duplicate. A folder copy is much broader than a single-file copy.

### Choose the destination deliberately

A destination can be another folder on the same drive, a different internal drive, removable storage, or a supported cloud-synced folder. A destination shown as **OneDrive** in File Explorer may perform a local file operation followed by synchronization to the cloud account. A copy onto a removable USB device may depend on the connection staying stable until the transfer finishes.

A file may be automatically renamed by a program when a similarly named item already exists, or the system may present options to replace, skip, compare, or keep both. Do not assume the same conflict choices appear everywhere. If a name conflict occurs, stop and decide whether the existing destination file is important. **Replacing** a file can overwrite information. When uncertain, cancel and inspect both files before trying again.

### Copying within the same folder

Sometimes you want a second version of a document in the same folder. Copy followed by Paste into the same folder can create a second item with an automatically adjusted name, depending on the file manager. For example, `practice-note.txt` might produce a name such as `practice-note - Copy.txt`, although the exact label is not guaranteed. Rename the duplicate descriptively if it will become a separate working version.

A duplicate is not automatically safer than the original. If the files remain on the same failing storage device, both can be lost. If they are in the same synced folder, a mistake affecting that folder may affect both. Treat duplication as a convenience or editing safeguard, not an independent data-recovery strategy.

### Verify the data, not just the icon

After making an important copy, locate it at the destination. Compare the expected filename, file type, and approximate size, bearing in mind that some storage services show cloud-native documents differently. When appropriate, open the copied item using the program associated with its format and confirm that the expected content is present. Check that the source still exists.

When a file is large, a transfer can take noticeable time. The appearance of a progress dialog or destination entry does not necessarily mean the full operation is complete. If the system reports an error, do not discard the original or assume the destination is complete. A partially transferred file should not be trusted until the transfer has been redone or verified.

### Copying versus downloading or exporting

A web browser's **Download** command obtains data from a website or online service and stores a local file. It is not necessarily the same as copying an existing item between two folders. A cloud document editor may use **Download** or **Export** to create a `.docx` or `.pdf` file from a cloud-native document. The exported file may be a separate representation and may not continue updating with the online original.

The practical question is whether you now have an independently stored file, a synchronized local representation, or merely a link. An internet shortcut or shared URL is not a file copy containing the whole document. You will encounter these differences again in the courses on downloads, cloud services, and backups.

### Worked example: copying a receipt for a project folder

Suppose `Receipt-November.pdf` was downloaded to `Downloads`, and you want to retain it there temporarily while placing a copy in `Documents/Project Expenses`. Copy the file, paste it in the project folder, and confirm both entries. Later, after checking your organization's records policy, you might choose to remove a redundant Downloads copy. That later cleanup is a separate decision, not part of the Copy command.

**Expected result:** Two locations contain the receipt data. The operation did not rename the file, change its format, or create a backup by itself.

> **Remember:** Copy first when you need the original to remain. Paste in the correct destination, then confirm **both** the source and the new copy before relying on the result.

## 4. How do you move files and folders?

Moving is useful when a file is in the wrong place. For instance, a finished assignment may have been saved accidentally in Downloads when it belongs in the class folder under Documents. After a move, the goal is **one correctly located working item**, not two independent copies. This is the central difference between Move and Copy.

### Windows 11: Cut and Paste

In File Explorer, the ordinary keyboard sequence for a move is **Ctrl + X**, navigate to the new folder, then **Ctrl + V**. The first command is often called [[cut|Cut]]. Unlike cutting selected text in a document editor, cutting a file in File Explorer generally marks it for movement rather than immediately deleting its stored data. The change in location occurs when you paste and the operation completes.

1. Open File Explorer and locate a **disposable** file in your practice folder.
1. Write down the current location, such as `Documents/MGU Practice/Unsorted`.
1. Create or identify its intended destination, such as `Documents/MGU Practice/Organized`.
1. Select only the practice file, then choose **Cut** or press **Ctrl + X**.
1. Open the destination and choose **Paste** or press **Ctrl + V**.
1. Wait until the move operation has finished; respond cautiously to any warning or filename conflict.
1. Verify that the file is accessible in the destination, and check the original folder afterward.

After a normal successful move, the source folder no longer contains that original file. Do not panic if the item looks dimmed after Cut in File Explorer; the visual indicator is not proof of permanent deletion. If you change your mind before pasting, cancel the pending action or select something else as appropriate, and confirm that the file is still present before continuing.

### Why not just drag the file?

Many file managers support [[drag-and-drop|drag and drop]]. However, dragging a file may copy or move it depending on the source and destination volumes, modifier keys, application, and configuration. In Windows File Explorer, dragging within the same drive commonly moves an item; dragging to another drive commonly copies it. Those are typical defaults, not universal guarantees. Cloud folders, virtual locations, and unusual devices can behave differently.

Beginners may find a visible **Cut → Paste** or **Copy → Paste** sequence more predictable. If you choose to drag, read the label or indicator displayed during the drag, release only over the intended destination, and verify afterward. Do not rely on the appearance of a folder icon or a memorized rule when the operation matters.

### A move between drives may involve more work

Moving a file between directories on the same storage volume can be quick because the file's directory entry changes while the data may remain physically in place. Moving it to a different drive can involve transferring its contents and then removing the original. The destination might lack space, disconnect, or reject the file. The operation may also change permissions or metadata.

For an important document going to a USB drive, a safer beginner workflow is **Copy → verify destination → decide separately whether the source should be removed**. This gives you a chance to check that the copied data arrived correctly before losing the original. Do not unplug the drive while progress is ongoing, and use the device's safe-eject procedure when appropriate.

### Moving a folder moves its contents too

A folder can contain dozens of files and nested subfolders. Selecting and moving the parent folder generally relocates the entire tree of contained items. This may be exactly what you want when organizing a project, but it may also surprise you if you intended to move only one document.

Consider this structure:

```text
Documents/
  Class Project/
    Notes.txt
    Draft.docx
    Images/
      chart.png
```

If you move **Class Project** into an Archive folder, the Notes, Draft, Images folder, and chart are all part of the relocation. If you move only `Draft.docx`, Notes and Images stay where they were. Practice reading the indentation of a folder tree and counting files before relocating a parent folder.

### Moves can change links and the way people find files

A [[path|path]] identifies a file's location in a hierarchy. Moving `Draft.docx` from `Documents/Class Project/` to `Documents/Class Project/Archive/` changes the path. Some recently used lists and applications may locate the file automatically, but other shortcuts, scripts, document references, and shared links can break. Moving a shared cloud file can also change inherited access rules or link behavior, depending on the platform.

On a school or employer system, check whether the file belongs to an active workflow before moving it. If a teammate expects to find the original in a shared folder, a move performed without coordination could make the file appear lost or inaccessible to that person.

### Check whether you need a move at all

Sometimes the only problem is that a file is hard to find. You might solve that by renaming it clearly, adding it to an approved organizational folder, or creating a shortcut where supported. A shortcut points to an item; it does not itself relocate or preserve the original data. Moving the only original merely to improve convenience may be unnecessary when a searchable or accessible link will meet the need.

| Goal | Better first operation | Verify afterward |
| --- | --- | --- |
| Put your own draft into the correct project folder | Move | New location contains it; old source no longer does |
| Give another person a separate working copy | Copy | Both source and destination exist |
| Transfer the only valuable copy to a USB drive | Copy first | Destination data is usable before considering cleanup |
| Change the title without relocating the document | Rename | Correct name and extension appear in same folder |
| Make a shared item easier to reach without changing location | Approved shortcut or link | Shortcut points to intended item and access remains valid |

### Worked example: cleaning Downloads responsibly

You discover `Community-Event-Flyer.pdf` in Downloads and decide it belongs in `Documents/Community Events`. First confirm the PDF is yours, and that you are not trying to preserve a temporary download as the only archive copy. If it is an ordinary personal file and a proper backup exists where needed, use Cut and Paste to relocate it. Verify that it opens in the target folder and that the original Downloads entry is gone. The next day, use the target path when attaching or opening the flyer.

**Expected result:** The same intended document is located in the organized folder, not duplicated as two separate working versions. Do not delete another file with a similar name until you confirm which one is needed.

> **Remember:** A move is a change of location. It is not always a copy, not always instantaneous, and not automatically reversible across devices or cloud services.

## 5. How do you rename a file or folder safely?

Renaming is often the least disruptive of the four operations because the intent is to change only the label. It is also easy to misuse. A change in the filename can cause a document to be mistaken for an approved version, break a link that referred to the old name, or accidentally alter the file-extension suffix. Lesson 4 introduced clear naming conventions; this section applies them to existing items.

### Windows 11: selecting Rename

The simplest Windows workflow uses File Explorer's **Rename** command. On an ordinary keyboard, **F2** is a common shortcut. Some compact laptops require the function key to be used with another key, so the visible command is always a reasonable alternative.

1. Open File Explorer and navigate to a practice folder.
1. Select a disposable file named, for example, `note1.txt`.
1. Choose **Rename** from the command bar or right-click menu, or press **F2**.
1. Enter a clearer name such as `Volunteer Meeting Notes.txt`.
1. Press **Enter** to accept or **Esc** to cancel the edit before committing.
1. Confirm the renamed file remains in the same folder and opens with its intended application.

If Windows is configured to hide known file extensions, the initial edit selection may not include the extension; if extensions are visible, the selection behavior may vary. Do not assume you can always rename the entire string safely without inspecting it. The `View → Show → File name extensions` setting is available in Windows 11 File Explorer, though menu placement can vary with updates.

### Preserve the file extension

In `Volunteer Meeting Notes.txt`, the extension `.txt` signals a plain-text file. It does not belong in the descriptive subject part of the name. Changing `notes.docx` to `notes.pdf` by typing new letters does **not** perform a valid format conversion. It may only cause an application-association problem or a misleading label.

When you need a different format, open the file in an appropriate application and use its supported **Export**, **Save As**, or conversion workflow. Then verify that the resulting file can be opened. A renamed extension is not a substitute for actual conversion.

### Rename does not copy or move

Suppose `budget-rough.xlsx` is in `Documents/Finance Practice`. Renaming it to `budget-2026-11.xlsx` does not create a new workbook in another folder, and it does not preserve a separate prior draft. If you want to retain an earlier working state, use a separate file copy or an approved version-history feature first. The right approach depends on the task and your organization's rules.

Likewise, a renamed item may retain the same content but acquire a different full path because the filename is part of the path. Any saved reference to `budget-rough.xlsx` can become out of date. Renaming a frequently linked document should therefore be coordinated with people or programs that use its existing name.

### Name the item honestly

A filename should identify what the file *is*, not what you hope it might be. Do not rename a rough draft to `Approved Contract.pdf` unless it actually is an approved contract in a PDF format. Do not label a generic copy `Backup` if it is the only version stored beside the original. Avoid using sensitive personal information unnecessarily in filenames because names can appear in shared lists, previews, attachment histories, and notifications.

For ordinary documents, a descriptive subject plus a period or revision label often works well. A date such as `2026-11-19` is useful when it describes a real event or reporting period. A sequence number such as `v02` is useful when a team actually follows that versioning convention. As discussed previously, ambiguous labels such as `new`, `final-final`, or `latest2` are weak substitutes for disciplined recordkeeping.

### Renaming folders changes paths below them

If you rename `Photos 2025` to `Family Photos 2025`, the folder's contents normally remain inside it. However, files in that folder now have different paths. A shortcut, application, saved script, or shared link based on the old path could stop finding them. This is one reason to avoid renaming system-managed, app-managed, or shared folders in the name of tidying up.

If you are asked to rename a folder under organizational control, confirm who depends on it and what the required naming scheme is. A technically successful rename can still be a workflow mistake if it violates the team's agreed location or breaks access.

### A short renaming checklist

| Question | Safe response |
| --- | --- |
| Is this the exact item I intend to rename? | Verify its current location and, if needed, contents |
| Do I own or have authority to modify it? | If not, stop and seek permission |
| Is the new name truthful and descriptive? | Include useful subject or date information |
| Am I keeping the original extension? | Yes, unless performing a separately supported conversion |
| Could other people or programs use the old path? | Coordinate before changing shared or referenced names |
| Can I verify the outcome? | Check the new label, location, and ability to open the item |

### Worked example: renaming an image for an assignment

A photo file is named `IMG_0204.jpg`. You want a clearer name for a class project. If the contents show a garden bed, you might rename it `School Garden - Raised Bed - 2026-05.jpg`. Keep `.jpg` unchanged, verify the date accurately reflects the image's content, and open the renamed photo to confirm it still works. If the file is an important original photograph, first preserve the original according to the applicable backup plan.

> **Remember:** Renaming changes identification, not content, format, or location. Preserve extensions, respect dependencies, and verify important items after the change.

## 6. How do you delete and recover files?

Deleting is the most sensitive operation in this lesson because its purpose is to remove data from an active location. A file that merely seems unnecessary today may be required for a class submission, a work process, or a record-retention obligation tomorrow. Recovery also depends on where the file lives. The best beginner skill is not deleting quickly; it is **knowing exactly what will be removed, from where, and whether a trustworthy recovery path exists**.

### The usual Windows Recycle Bin experience

For many ordinary files stored on a local Windows drive, using **Delete** in File Explorer sends the selected item to the [[recycle-bin|Recycle Bin]]. The Recycle Bin temporarily holds many deleted items so that they can be restored before it is emptied or automatic cleanup occurs. It is a convenience for recovery from common mistakes, not a substitute for a backup.

To understand the ordinary procedure without deleting anything, locate the Recycle Bin from the desktop or Windows search. Review its available columns and the **Restore** command, if present. If you have permission to create a disposable sample, practice only with that sample after saving it in a personal folder, and verify the result. Do not use a real assignment, photo collection, or shared document.

When a local file is restored from the Windows Recycle Bin, it usually returns to its original location if that location can be used. A restore may fail or require a different decision if the original path or permissions have changed. Verify that the file is accessible after restoring it rather than relying only on the disappearance of its Recycle Bin entry.

### Not every deletion uses the Recycle Bin

Windows has a **Shift + Delete** command that bypasses the normal Recycle Bin process. Some removable media, network shares, applications, and system-managed locations may remove files without using the local Recycle Bin, or may have their own deletion and recovery rules. The exact outcome varies by file system and configuration. When the interface warns that an item will be **permanently deleted**, treat the warning as meaningful. Cancel if you are uncertain.

Do not use Shift + Delete as part of this beginner lesson's hands-on tasks. Also do not empty the Recycle Bin merely to prove that you understand it. Emptying a bin can make ordinary restoration unavailable, and technical recovery after permanent deletion may be uncertain, time-sensitive, or impossible.

### A file can disappear without being deleted

Before concluding that something was deleted, ask whether it might have been moved, renamed, hidden by a filter, sorted differently, or opened from another location. A folder could have been renamed; a file might be in Downloads instead of Documents; a cloud account might be showing a different signed-in identity. These are distinct problems and should be investigated before attempting recovery.

An item that appears missing after Cut but before Paste has not necessarily been removed. A document that appears missing after a rename may simply be indexed under its new label. A file missing from your desktop could be stored in a OneDrive-backed Desktop folder. The next lesson, **Finding Lost Files**, will teach a systematic search process.

### Cloud deletion is not local-only deletion

If a file is inside a [[synchronized-folder|synchronized folder]] such as a OneDrive-managed folder, deleting it in File Explorer may synchronize that deletion to the cloud and other connected devices. A user might expect to free space only on one computer and unintentionally remove the item from their account instead. To preserve a cloud item while reducing local disk use, supported services provide separate **online-only** or **free up space** controls. Those are not the same as deleting the cloud file.

OneDrive maintains its own web-based recycle bin for eligible account content; Windows may also show a local Recycle Bin entry for some sync operations. These are distinct recovery paths and are not interchangeable. Recovery availability, time limits, and organizational policy can differ between personal and work or school accounts.

Google Drive has a **Trash** area for many deleted files. Google documents a 30-day period before items in Trash are automatically deleted, though ownership, shared-drive rules, and account policy can affect who can restore them. iCloud Drive deletion can propagate across devices signed into the same Apple Account, with a **Recently Deleted** recovery period commonly available for 30 days. Do not generalize these examples to every app or assume that a file can be recovered after permanent removal.

### Deleting a shortcut is different from deleting its target

A [[shortcut|shortcut]] or link typically points to another item. Deleting only a properly identified shortcut usually removes the pointer, not the target file. However, file managers can display shortcuts and actual files with similar icons or labels, and cloud services may implement links differently. Inspect the item type and destination before deleting anything. Do not assume every item called “shortcut” behaves identically across systems.

A related distinction applies to shared cloud files. **Removing access** to a file from your own view is not always the same as deleting the underlying item for its owner; deleting a file you own can affect everyone with whom you shared it. Review who owns the item and which action the service is actually offering.

### Recovery is time-sensitive and never guaranteed

The recovery path for an ordinary mistake depends on how the file was deleted:

| Where deletion happened | Possible first place to check | Caution |
| --- | --- | --- |
| Typical local Windows folder | Windows Recycle Bin | Some deletes bypass it; it may have been emptied |
| OneDrive synced content | OneDrive recycle bin on the web, and possibly Windows Recycle Bin | Deletion can synchronize to other devices |
| Mac Finder local file | macOS Trash | Emptying Trash can prevent normal recovery |
| iCloud Drive | Recently Deleted or supported iCloud recovery location | Sync can remove content from all connected devices |
| Google Drive | Google Drive Trash | Ownership, retention, and policy matter |
| Chromebook local Files app | Files app Trash where supported | Some locations and workflows differ |
| USB drive, network share, or app-specific storage | Provider's own recovery process, if one exists | Do not assume a local Recycle Bin catches the deletion |

The table identifies possible places to investigate, not guaranteed recovery. If a valuable file was permanently removed, stop writing new data to the affected storage when appropriate, consult a qualified administrator or recovery professional, and preserve existing backups. Repeated attempts to “fix” the problem can complicate recovery.

### What should you do immediately after a mistaken deletion?

1. **Stop further changes.** Avoid additional deletion, emptying trash, or moving more files until the situation is understood.
1. **Identify the exact item.** Record the filename, approximate time, and original location.
1. **Identify the storage service.** Was it local Windows storage, OneDrive, a USB drive, Google Drive, iCloud Drive, or a shared drive?
1. **Check the appropriate recovery area.** Use the service's official Restore command when the item appears there.
1. **Verify after recovery.** Confirm that the expected contents open in the appropriate location.
1. **Escalate if necessary.** For shared, managed, legally retained, or valuable records, notify the responsible owner or IT support rather than improvising.

In some Windows contexts **Ctrl + Z** may undo a recent file-management action. That shortcut is useful but not a guaranteed recovery plan: it may not work after switching contexts, closing windows, or performing unrelated actions, and it cannot be relied upon for every deletion or cloud operation. Prefer the system's documented recovery method for the relevant location.

### The difference between deleting and maintaining records

A computer may allow you to delete a file even though a school, employer, or organization expects the document to be retained. A learner should distinguish technical ability from authorization and records policy. If a file is a signed agreement, accounting record, employee document, research dataset, or officially issued report, ask how long it must be kept and whether a controlled archive is required. Do not delete an item merely because it looks old or a newer draft exists.

> **Deletion rule:** When uncertain, **do not delete**. Learn using disposable files. Preserve important originals and comply with the applicable permission and retention requirements.

## 7. Guided practice: four operations without risk

The five activities use a hypothetical personal workspace. They can be completed on paper or with an authorized device. If you choose device-based practice, create a new folder such as `Documents/MGU File Practice` and use **only disposable sample files** containing invented text. Keep all tasks within that practice area; do not change shared, protected, synced, or important documents. You may describe what you would do rather than carrying out a step that could affect someone else's data.

### Activity 1: Choose the correct operation

**Goal:** Select the action that produces a specified result, and explain what happens to the original.

Consider five independent situations:

1. A student wants a second copy of a worksheet in a `Submissions` folder but must keep the original in `Working Drafts`.
1. A photograph appears in `Downloads`, but it belongs in `Pictures/School Project` and a second copy is not needed.
1. A document's current name is `doc7.docx`; its content and location are correct, but its name does not describe the assignment.
1. A personal disposable test note is no longer needed and the student has confirmed it contains no unique work.
1. A report must be transferred to a USB drive, but the original on the computer is valuable and the transfer has not yet been verified.

For each situation, write **Copy**, **Move**, **Rename**, or **Delete** as the best first action. If more than one action might eventually be needed, identify the safest first one. Then write a sentence explaining what should remain at the original location after the action succeeds. Do not perform these operations on actual school assignments or valuable photographs.

**Reflect:** Why is the correct choice for Situation 5 different from the choice for Situation 2? The answer should refer to the risk of the destination rather than simply to the word “USB.”

:::answer Show Activity 1 solutions
1. **Copy.** Keep the working original in `Working Drafts` and create another file in `Submissions`.
1. **Move.** Relocate the photo to the Pictures folder after checking that the selected file is the intended one.
1. **Rename.** Use a truthful descriptive name such as `Biology Assignment - Unit 2.docx`, preserving the `.docx` suffix.
1. **Delete**, after verifying that it is genuinely disposable, owned by the student, and not subject to a retention rule. Observe the system's recovery behavior rather than assuming deletion is reversible.
1. **Copy first.** Verify the copied report opens on the USB drive; decide separately whether to remove the original. A drive or connection can fail during a transfer.

Situation 2 is a routine organization problem within an appropriate accessible location. Situation 5 introduces transfer risk and the possibility that the source is the only trustworthy copy. That makes source preservation more important than minimizing the number of file entries.
:::

### Activity 2: Trace source and destination before copying

**Goal:** Practice the full Copy → Paste → Verify sequence and predict a file tree.

Imagine this initial structure:

```text
Documents/
  MGU File Practice/
    Source/
      reading-list.txt
    Copies/
```

Perform these paper steps, or use disposable sample files inside your own practice folder:

1. Identify the source folder, the selected filename, and the destination folder.
1. State whether the original should remain after completion.
1. In Windows 11, describe how you would use File Explorer to select `reading-list.txt`, press **Ctrl + C**, browse to `Copies`, and press **Ctrl + V**.
1. Write the resulting folder tree after a successful copy.
1. List two checks that distinguish a successful copy from an incomplete transfer or an accidental move.
1. If a file called `reading-list.txt` already exists in `Copies`, state how you should respond rather than blindly choosing Replace.

**Optional on-device variation:** Open the practice file in a text editor first and record a harmless phrase such as `Practice copy 1`. After copying, open the destination file and confirm the phrase is present. You do not need to share the file or upload it anywhere.

:::answer Show Activity 2 solutions
The source is `Documents/MGU File Practice/Source/reading-list.txt`. The destination is `Documents/MGU File Practice/Copies/`. **Copy** means the original should remain.

```text
Documents/
  MGU File Practice/
    Source/
      reading-list.txt
    Copies/
      reading-list.txt
```

The two most important checks are that the destination file appears with the expected contents and that the source file remains in the Source folder. If a name conflict occurs, examine the existing destination item and decide whether both files are needed. Do not overwrite a file merely because the new one has the same name.
:::

### Activity 3: Organize a practice folder by moving

**Goal:** Decide when movement is appropriate and verify that a file does not remain misplaced.

Start with this imagined folder tree:

```text
Documents/
  MGU File Practice/
    Unsorted/
      field-notes.txt
      supplies.txt
    Organized/
      Project A/
      Project B/
```

The field notes belong in Project A; the supplies list belongs in Project B. Using paper or disposable practice files:

1. Identify the source and destination for `field-notes.txt`.
1. Explain why **Move** is appropriate if the goal is to organize one working file rather than create a new independent copy.
1. Write the Windows key sequence used to begin a move and complete it in the destination.
1. Repeat the reasoning for `supplies.txt` and Project B.
1. Draw the final folder tree, showing both files in their intended destinations.
1. Explain how you would verify that the Unsorted folder no longer contains the two original items.
1. Suppose Project A is on a disconnected USB drive rather than the same computer. Explain why you should use a more cautious method.

**Reflection:** Why is the presence of the same filename in both source and destination not sufficient proof that a move completed correctly? Consider whether an older copy might already exist.

:::answer Show Activity 3 solutions
For `field-notes.txt`, select the item in `Unsorted`, press **Ctrl + X**, open `Organized/Project A`, then press **Ctrl + V**. For `supplies.txt`, repeat the sequence with `Organized/Project B` as destination.

```text
Documents/
  MGU File Practice/
    Unsorted/
    Organized/
      Project A/
        field-notes.txt
      Project B/
        supplies.txt
```

After the moves, open each target file and inspect its contents where appropriate. Verify that the original Unsorted entries are absent and that no unintended files moved. If a target is an unreliable or removable device, copy first, wait for the transfer to finish, verify the destination, and only then consider a separately authorized cleanup of the source. An existing similarly named destination file may be an older or unrelated item, so names alone do not verify identity.
:::

### Activity 4: Rename a file without changing its type

**Goal:** Produce a useful new filename while preserving its extension and location.

Your practice folder contains these imaginary files:

- `note.txt` — a plain-text summary of a volunteer meeting on November 19, 2026.
- `paper.docx` — a word-processing draft for a history assignment.
- `IMG_1008.jpg` — a picture of a classroom plant, photographed in May 2026.
- `spending.xlsx` — a spreadsheet recording a November 2026 household spending exercise.

1. Propose one truthful, descriptive new name for each file.
1. Circle the extension of each and confirm that the extensions remain unchanged.
1. Describe how you would select the first disposable file in Windows File Explorer and invoke Rename with **F2** or the visible menu.
1. Explain why typing `.pdf` after the history document's name would not convert its contents to PDF.
1. State whether the rename should change the file's contents or folder location.
1. Imagine the history document is used by a team through a link containing its existing path. What must be checked before renaming it?

**Optional on-device variation:** Rename only `note.txt` in a personal temporary folder, then open it to check the content. Restore its old name if you wish. Do not rename an original course assignment or an official record.

:::answer Show Activity 4 solutions
Possible descriptive names include `Volunteer Meeting Summary - 2026-11-19.txt`, `History Essay - Draft v01.docx`, `Classroom Plant - 2026-05.jpg`, and `Household Spending - 2026-11.xlsx`. Other truthful names are acceptable.

The preserved extensions are `.txt`, `.docx`, `.jpg`, and `.xlsx`. In Windows File Explorer, select a disposable item, press **F2** or choose **Rename**, edit the descriptive name, and press **Enter**. An ordinary rename changes the label, not the saved contents or intended location. Relabeling `.docx` as `.pdf` does not perform a valid conversion; use the appropriate application's export or save function. A team must consider links, permissions, and document-control rules before a shared filename changes.
:::

### Activity 5: Decide whether to delete and how to recover

**Goal:** Identify deletion risks and select an appropriate recovery path without deleting any real data.

Study these hypothetical scenarios:

1. A disposable text file in a normal local Windows practice folder was deleted and now appears in Recycle Bin.
1. A document was deleted from a OneDrive-synced folder, and the person also uses that OneDrive account on another computer.
1. A removable USB drive displays a warning that deleting a selected file will permanently remove it.
1. A shared project folder contains an older report that someone else might still need.
1. A Google Drive document was moved to Trash yesterday by a user who has permission to restore it.

For each situation, write a prudent action: **Restore**, **investigate the cloud recycle bin**, **Cancel**, **ask the responsible owner**, or **check the service's Trash**. You may use a phrase more than once if justified. Then explain why an ordinary Windows Recycle Bin is not a universal answer.

**Optional written extension:** Write a five-sentence response plan for a person who accidentally deleted an important document. Include what to stop doing, what facts to record, which location to check, how to verify recovery, and when to involve IT support.

:::answer Show Activity 5 solutions
1. **Restore** from Windows Recycle Bin if the correct file is present, then verify that it returned to the intended folder and opens correctly.
1. **Investigate OneDrive's recovery area** and the sync state. Deletion may propagate to other devices, so do not assume it was limited to the computer where it began.
1. **Cancel**. Some removable locations do not use the usual Recycle Bin recovery path. Important files should not be deleted in a beginner exercise.
1. **Ask the responsible owner** or follow the organization's records and permissions policy. Age alone does not make a shared document disposable.
1. **Check Google Drive Trash** using the appropriate account and restore it there if available and authorized; then verify the returned document.

The normal Windows Recycle Bin applies to many local File Explorer deletions, but cloud services, removable drives, network shares, and app-managed files may have different deletion rules. A recovery area is only useful while the item is eligible for restoration, and recovery is not guaranteed after permanent removal.
:::

### Five-minute review: check the intended outcome

Use the following quick review to test your understanding of all five activities:

| If you want to... | Choose... | Check... |
| --- | --- | --- |
| Keep the source and send a separate copy | Copy | Both locations contain the correct content |
| Put a working document in its proper folder | Move | Correct destination, no unintended original at source |
| Make an item easier to recognize without relocating it | Rename | Correct descriptive name and unchanged extension |
| Remove an unneeded disposable file | Delete, only when appropriate | Scope, authority, and recovery conditions |
| Transfer important work to unreliable storage | Copy first, then verify | File completed transfer and still exists at original source |

If you cannot explain one of these outcomes, return to the corresponding instructional section rather than repeating a risky action on real files.

## 8. Common misconceptions and troubleshooting

This section connects the four operations to problems you may encounter outside a classroom. Use the guidance to identify likely causes; interfaces can vary by operating-system version, administrator policy, cloud service, file format, and device. Where an official warning provides specific instructions, that warning takes priority over a generic tutorial.

### Why the storage location and file status matter

The same command can have different consequences in different environments. [[local-storage|Local storage]] means data saved on the current device; an [[external-drive|external drive]] or [[usb-drive|USB drive]] may have a different file system and connection risks. A [[transfer|transfer]] of a large folder can take time, so watch the [[progress-indicator|progress indicator]] and follow the device's [[device-eject|safe-eject]] procedure when appropriate. A displayed filename does not prove all data has finished writing.

A [[shared-folder|shared folder]] introduces responsibilities beyond the person clicking a command. [[ownership|Ownership]], [[access-control|access control]], and the applicable [[retention-policy|retention policy]] can determine whether an item should be changed or removed. A [[read-only|read-only]] restriction can prevent edits, while file [[metadata|metadata]] such as modified dates can help distinguish candidates without guaranteeing which document is correct.

When a [[name-conflict|name conflict]] appears, the option to [[overwrite|overwrite]] an existing item should trigger a review, not an automatic confirmation. A [[duplicate|duplicate]] can be useful, but its existence is not proof of a reliable recovery strategy. A [[file-format|file format]] differs from a typed filename suffix, and an [[export|export]] operation is not always the same as saving in place through [[save-as|Save As]]. A [[cloud-native|cloud-native document]] may maintain [[version-history|version history]] while an [[online-only|online-only]] placeholder may not contain a full local copy. These differences affect what it means to copy, move, rename, or delete an item safely.

### Misconception: Cut immediately deletes the source file

In ordinary Windows File Explorer use, **Ctrl + X** marks a selected file for movement; it does not normally destroy the file the moment you press the keys. The intended relocation occurs after you paste to a destination and the operation completes. However, do not treat the clipboard as permanent storage. The safe approach is still to verify both folders after a move.

### Misconception: Copy always creates a backup

A duplicate in the same folder is not sufficient protection from device failure, malicious changes, accidental folder deletion, or an account-level problem. A backup must be planned as a recoverable copy in an appropriate separate location, with restoration verified when possible. Copy is a necessary building block of some backups, but it is not proof that a recovery process exists.

### Misconception: A file must be deleted if it disappeared

A [[missing-file|missing file]] may have been moved, renamed, sorted out of view, hidden by a filter, saved to a different folder, or stored under another account. Before trying to recover a supposedly deleted item, check the search location and storage account. This distinction prepares you for the next course lesson on finding lost files.

### Misconception: Moving files is always the same as copying and deleting

Across storage volumes, a move may effectively transfer data and then remove the source; within one volume, it may primarily change directory information. The visible result can look the same, but the risks differ. Do not assume every move is instantaneous, every operation preserves metadata, or an interrupted transfer is harmless.

### Misconception: Rename changes the file's format

A document renamed from `.docx` to `.pdf` is not converted into a usable PDF. The bytes inside have not been transformed simply because the ending letters changed. Preserve the appropriate extension during normal renames and use an application's supported export or conversion procedure for a genuine format change.

### Misconception: Delete always means permanent destruction

Some items enter a recovery area first; others can be removed directly. A Recycle Bin, Trash, or Recently Deleted area is not a reliable long-term archive, and contents may be removed automatically or by policy. Conversely, permanent deletion from one location does not necessarily prove that all other copies, backups, sync history, or shared versions are gone. The operation's scope matters.

### Troubleshooting table

| Symptom | Possible explanation | Safer next step |
| --- | --- | --- |
| Paste is unavailable | Nothing appropriate is on the clipboard, or destination rejects the operation | Reselect the practice item, choose Copy or Cut, and inspect destination permissions |
| Two files share the same name in different folders | Copies are allowed across distinct paths | Check content and location rather than relying on names alone |
| Windows asks to replace a destination file | A conflicting item already exists | Cancel and inspect both files before deciding |
| The file appears faded after Cut | File Explorer may visually mark a pending move | Complete or cancel deliberately and confirm location |
| A move to USB fails midway | Connection, storage space, device condition, or format problem | Keep the source; check the device and retry a copy only when safe |
| Rename is refused | Permissions, invalid filename, file in use, or system protection | Read the warning; do not bypass administrative restrictions |
| A document stops opening after rename | The extension may have changed or the file may have another problem | Restore the original valid extension if appropriate; do not guess a format |
| Item is missing after dragging | It may have moved or copied to an unintended folder | Search source and likely destination; do not start deleting duplicates |
| Delete warns about permanent removal | Location may bypass ordinary Trash or Recycle Bin | Cancel unless removal is specifically intended and authorized |
| OneDrive file disappears from another device | A deletion or move may have synchronized | Check OneDrive web account, sync status, and recovery options |
| A cloud file cannot be moved | Permissions, ownership, or workspace restrictions may apply | Verify account and ask the owner or administrator |
| A restored file is not where expected | Original path may be changed or another folder is open | Search by filename and inspect the destination before continuing |

### Equivalent controls on macOS

On a Mac, the file manager is called [[finder|Finder]]. It provides a familiar selection-and-destination workflow, but the commands differ from Windows. **Command + C** copies selected files, while **Command + V** pastes copies in a destination. Apple's documented **Option + Command + V** moves the files currently represented in Finder's clipboard to the destination. Holding **Option** while dragging commonly copies an item. Selecting a file and pressing **Return** starts renaming in Finder.

For deletion, Finder offers **Move to Trash**, and **Command + Delete** is a common shortcut. Items typically remain in the Mac Trash until removed, but cloud-managed and policy-controlled locations can have additional timelines or effects. A Mac with iCloud Drive enabled may synchronize removal to other devices. Do not confuse deleting a Finder file with merely removing its item from a sidebar or Dock.

The most important cross-platform difference is that **Windows Ctrl + X** is a standard file move preparation command, while Finder normally uses copying to its clipboard followed by **Option + Command + V** for movement. Memorize the result you want rather than assuming every keyboard behaves the same.

### Equivalent controls on ChromeOS

A Chromebook uses the **Files** app to browse supported locations such as Downloads, My files, Google Drive, and external devices. Depending on the location, you can use Copy, Paste, Cut, Move, Rename, and Delete through available menus or shortcuts. Google documents a Trash area for many local Files-app deletions, but exceptions and storage-specific behaviors matter. A Google Drive item follows Drive's service and ownership rules; an external device may behave differently.

A cloud-native Google document might appear as an item within Google Drive, but copying it to an offline device or another service may require **Download** or **Export** in a suitable format. Do not assume that dragging every cloud-native item to USB produces a fully self-contained editable document. Verify the resulting content before considering any source removal.

### Equivalent controls on iPhone and iPad

Apple's [[ios-files|Files app]] provides supported locations such as **On My iPhone**, **On My iPad**, and **iCloud Drive**, plus compatible third-party services. Typically you locate a file, touch and hold it, and choose an action such as **Copy**, **Move**, **Rename**, or **Delete** from the available menu. Exact commands vary by version, location, file type, and permissions.

A **Recently Deleted** location is often available for recoverable Files-app deletions. Deleting content from iCloud Drive can affect every device using that account. A photo in the Photos app may follow a different system from a document in Files. Distinguish the application and storage service before deciding where recovery should happen.

### Equivalent controls on Android

Android devices often have a file manager provided by the manufacturer or Google's **Files by Google** app. Users can browse internal folders and supported external storage, select a file, then choose **Move to**, **Copy to**, **Rename**, or **Move to Trash** where available. The exact interface and recovery retention depend on the app, device, and location. Some cleanup or deletion functions may permanently remove data.

Moving a file from internal storage to a microSD card, where supported, is a cross-device or cross-volume transfer. Prefer Copy first for important originals, verify the destination, and do not remove storage while a transfer is active. A file manager's menu may not offer identical commands in every Android app folder or cloud integration.

### Google Drive, OneDrive, and iCloud Drive are not the same as ordinary folders

Cloud services are especially important because they can show the same logical file on multiple devices. A [[synchronization|synchronization]] service propagates changes according to its design; copying a local item into a synced folder may upload it, renaming it may update the online name, moving it may change access or organization, and deleting it may remove it from the online account. A local **online-only** placeholder can be an authorized representation of a cloud file rather than a full independent copy.

Google Drive also has shared ownership and permission rules. You may have the right to view or edit a shared file without having the right to delete it for the owner. Moving a cloud document can change who inherits access from a folder, depending on the service. In school and business environments, administrator settings may control recovery periods and allowed operations.

| Environment | Common file manager | Typical copy or move workflow | Recovery location to investigate |
| --- | --- | --- | --- |
| Windows 11 local storage | File Explorer | Ctrl + C or Ctrl + X, then Ctrl + V | Windows Recycle Bin where applicable |
| macOS local storage | Finder | Command + C, Command + V or Option + Command + V | Mac Trash where applicable |
| Chromebook | Files app | Select file, use Copy or Move controls | Files app Trash or provider area |
| iPhone and iPad | Files app | Touch and hold, then select available action | Recently Deleted or provider recovery |
| Android with Files by Google | Files by Google | Select file, use Copy to or Move to | Files by Google Trash where supported |
| OneDrive or SharePoint | Web interface or synced File Explorer | Service and permission-aware operations | Service recycle bin or IT-approved recovery |
| Google Drive | Drive web or app interface | Move, organize, or make copies when supported | Google Drive Trash |
| iCloud Drive | Files, Finder, or iCloud interface | Copy, move, rename with synchronization | Recently Deleted or iCloud recovery |

### Accessibility and keyboard-first control

The same workflow can be performed without drag-and-drop. On Windows, navigate folders through File Explorer and use a keyboard to select the intended item, then choose Copy, Cut, Paste, or Rename. Screen readers can announce filenames, folder locations, and controls. If a visual icon is not clear, use menu labels, keyboard focus, or an accessible tooltip rather than guessing.

On touchscreens, a **touch-and-hold** menu often offers more reliable control than dragging a small icon. On a shared or managed device, a read-only observation exercise is acceptable when permissions prevent changes. Accessibility does not require taking risks with real data; it means providing multiple ways to achieve the same learning goal.

### A final troubleshooting decision rule

When something unexpected happens, **stop → record what you see → identify source and destination → identify the owning account or storage device → use the documented recovery or support channel**. Do not continue moving files in the hope that a mysterious error will disappear. File management should be deliberate, inspectable, and reversible where the system permits it.

## 9. Essential vocabulary

The lesson uses clickable terms throughout. Select or focus a dotted-underlined word in the dashboard to view its definition. When a verified MGU reference is available, the tooltip may also provide an encyclopedia link. These core terms are listed here for review; additional definitions appear in the lesson's vocabulary registry.

- **Copy:** Create another instance of selected data while normally retaining the original at its source.
- **Move:** Relocate a file or folder to another place so the original working item is no longer in its former location after a successful operation.
- **Rename:** Change a stored item's identifying name without intentionally changing its content or format.
- **Delete:** Remove an item from its active location; recovery depends on the storage location and operation.
- **Source location:** The folder or service from which an operation begins.
- **Destination:** The folder, drive, or service receiving a copied or moved item.
- **Clipboard:** Temporary workspace for copied or cut selections and other kinds of data.
- **Cut:** Mark selected material for movement or removal depending on the application; in File Explorer, typically prepare a file move.
- **Paste:** Apply clipboard contents or a pending file operation to the current destination.
- **Recycle Bin:** Windows recovery area for many ordinary deleted items, not a universal recovery system.
- **Trash:** A recovery area used by various file managers and cloud services, with service-specific behavior.
- **Restore:** Return an eligible deleted item from an available recovery location.
- **File extension:** Suffix commonly used to indicate a file's type, such as `.txt` or `.pdf`.
- **Path:** A sequence of directories that identifies a file's location.
- **Permission:** A rule controlling whether someone can view, copy, change, move, or delete an item.
- **Synchronization:** Coordination of file changes between a local device, an online account, or other connected devices.
- **Backup:** A separately managed recoverable copy intended to protect against data loss.
- **Name conflict:** A situation in which the intended destination already has an item using the proposed name.
- **Overwrite:** Replace existing saved data with other data under an application or storage system's rules.
- **Shortcut:** A pointer to an item or location rather than a second independent copy of the underlying data.
- **Verification:** Checking the destination, source, and actual file contents to confirm the intended result.

> **Vocabulary check:** Explain aloud why *copy* and *backup* are related but not equivalent, and why *delete* and *permanent delete* must not be treated as synonyms in every storage system.

## 10. Knowledge check

Choose one answer for each question. The dashboard grades your responses locally in your browser and presents explanatory feedback after you select **Check answers**. This is a self-study assessment, not a secure examination or a permanent grade record. An expandable answer key is provided for offline or accessibility-oriented review.

:::quiz
? What is the intended result of copying a file to a different folder?
- [ ] The source is immediately erased
- [x] The source usually remains and another copy appears at the destination
- [ ] The filename extension changes
! Copying normally preserves the source and creates another item at the destination.

? Which action is best for reorganizing a disposable file into another folder without needing a second copy?
- [x] Move
- [ ] Rename
- [ ] Delete
! Move changes the location of the selected item.

? What does an ordinary rename primarily change?
- [ ] The contents of the file
- [ ] The storage device's capacity
- [x] The file's identifying name
! Rename changes the item's label, not its contents or file format.

? What should you identify before copying or moving an item?
- [ ] Only the file's color
- [x] The source and intended destination
- [ ] The fastest internet browser
! Knowing both locations helps prevent misfiling and unintended changes.

? Which Windows 11 shortcut copies a selected file for later Paste?
- [x] Ctrl + C
- [ ] Ctrl + X
- [ ] Alt + F4
! Ctrl + C copies the selected item reference to the clipboard for Paste.

? Which Windows 11 shortcut is commonly used to prepare a selected file for moving?
- [ ] Ctrl + P
- [ ] Ctrl + A
- [x] Ctrl + X
! Ctrl + X is Cut, used with Paste to move files in File Explorer.

? In File Explorer, what does Ctrl + V ordinarily do after Copy?
- [ ] Permanently erase the source
- [x] Paste a copy into the current destination
- [ ] Change the file's extension
! Paste performs the copy into the destination folder.

? After a successful copy, which verification is most important?
- [x] Source and destination both contain the intended data
- [ ] The source folder becomes empty
- [ ] The destination copy must have a new extension
! Successful copying should leave the original while adding the expected destination item.

? After a successful move, what is the intended change?
- [ ] The item gains an automatic backup
- [ ] The item becomes an internet shortcut
- [x] The item is at the new location and no longer at the original one
! A move relocates the working item rather than intentionally creating two independent copies.

? Why is copying first prudent when transferring the only important report to a USB drive?
- [ ] It guarantees the USB drive will never fail
- [x] It preserves the source while the destination is transferred and verified
- [ ] It automatically encrypts the report
! Copying leaves the original available if a removable-media transfer fails.

? Which keyboard shortcut commonly starts Rename for a selected item in Windows File Explorer?
- [x] F2
- [ ] F5
- [ ] Windows + L
! F2 is a common Rename shortcut in Windows File Explorer.

? What happens if you rename a .docx document to end in .pdf without converting it?
- [ ] The file turns into a valid PDF
- [ ] The file is uploaded to the cloud
- [x] The name changes, but the contents are not converted
! Renaming an extension does not change the actual stored file format.

? Why can renaming a shared folder create problems?
- [ ] It always deletes its contents
- [x] Paths and links that use its old name may stop working
- [ ] It turns every file inside into a shortcut
! References based on the old folder path may break even though contents remain.

? What should you do when Windows asks to replace an existing destination file and you are unsure?
- [x] Cancel and inspect both items before deciding
- [ ] Always replace the older-looking item
- [ ] Remove the original without checking
! Replacing can overwrite important destination data; inspect before confirming.

? Which statement about dragging files is safest?
- [ ] Dragging always moves files on every device
- [ ] Dragging always copies files on every device
- [x] Its result may vary by drive and application, so verify the operation
! Drag-and-drop defaults can vary; a deliberate Copy or Cut followed by Paste is often clearer.

? What is the main risk of selecting an entire parent folder before moving it?
- [ ] Only its name will change
- [x] The contained files and subfolders may move too
- [ ] The drive will become read-only
! Operations on a folder can include its entire contained tree.

? What is the ordinary Windows recovery area for many local files deleted through File Explorer?
- [x] Recycle Bin
- [ ] Task Manager
- [ ] Device Manager
! Many typical local deletions go to Windows Recycle Bin, although exceptions exist.

? What does Shift + Delete commonly do in Windows?
- [ ] Create a second backup
- [ ] Rename a file without an extension
- [x] Bypass the normal Recycle Bin for the selected item
! Shift + Delete is a permanent-delete shortcut and is not appropriate for these practice exercises.

? What is a prudent response if a USB drive warns that a file will be permanently deleted?
- [ ] Ignore the warning if the file looks old
- [x] Cancel unless the deletion is clearly intended, authorized, and protected
- [ ] Assume it will appear in the Windows Recycle Bin
! Do not assume removable storage uses the same recovery path as local Windows folders.

? Which statement about deleting a OneDrive-synced file is correct?
- [x] Deletion may synchronize to the cloud and other connected devices
- [ ] Deletion affects only the computer where it was clicked
- [ ] Every deleted OneDrive item remains recoverable forever
! A delete in a synced folder can propagate across locations.

? Where might you first seek a recently deleted eligible Google Drive file?
- [ ] Windows Device Manager
- [ ] The Mac Dock
- [x] Google Drive Trash
! Google Drive provides a Trash area for eligible deleted items.

? Why is a copy stored beside its source not automatically a complete backup?
- [ ] Two names can never exist on one device
- [x] The copies may share the same device or deletion risks
- [ ] A copied file is always unreadable
! Backup reliability requires a separate recovery strategy, not only duplicate entries.

? What does a shortcut usually provide?
- [x] A pointer to another item rather than its full independent data
- [ ] A guaranteed independent backup
- [ ] A replacement for checking a file's contents
! Shortcuts normally reference a target item rather than duplicate its data.

? What is the correct Mac Finder shortcut for moving a copied Finder file to the current location?
- [ ] Ctrl + X
- [ ] Command + A
- [x] Option + Command + V
! Apple documents Option + Command + V for moving Finder files in the clipboard.

? How do you ordinarily start renaming a selected file in Mac Finder?
- [ ] Press the Windows key
- [x] Press Return
- [ ] Hold the power button
! Finder commonly uses Return to begin editing the selected item's name.

? A file is missing from the expected folder. What should you check before concluding it was deleted?
- [x] Whether it was moved, renamed, or stored under another location/account
- [ ] Only the computer's volume level
- [ ] Whether the mouse batteries are new
! A missing item may be misfiled or renamed rather than deleted.

? Which practice is appropriate when a shared older report might still be required?
- [ ] Delete it without notifying anyone
- [ ] Change its extension to hide it
- [x] Confirm ownership and retention rules before removing it
! Shared files and official records can have retention obligations or users depending on them.

? Why should you wait for a large transfer to finish before unplugging a USB drive?
- [ ] A file icon guarantees transfer completion
- [x] Interrupting a write can leave incomplete or damaged data
- [ ] USB drives require the internet to operate
! Wait for the operation to complete, verify files, and eject safely where appropriate.

? Which result best demonstrates a successful rename?
- [x] Same content and location, clearer name with correct extension
- [ ] Original deleted and new file automatically backed up
- [ ] File moved to an unrelated folder
! A normal rename alters identification while preserving intended contents and location.

? What is the safest general workflow for important file changes?
- [ ] Select many items, act quickly, and assume success
- [ ] Delete source first and check destination later
- [x] Identify source and destination, act deliberately, then verify
! The select-act-verify routine reduces errors and makes problems easier to diagnose.

:::

:::answer Show the 30-question answer key with explanations
1. **B.** Copying normally preserves the source and creates another item at the destination.
1. **A.** Move changes the location of the selected item.
1. **C.** Rename changes the item's label, not its contents or file format.
1. **B.** Knowing both locations helps prevent misfiling and unintended changes.
1. **A.** Ctrl + C copies the selected item reference to the clipboard for Paste.
1. **C.** Ctrl + X is Cut, used with Paste to move files in File Explorer.
1. **B.** Paste performs the copy into the destination folder.
1. **A.** Successful copying should leave the original while adding the expected destination item.
1. **C.** A move relocates the working item rather than intentionally creating two independent copies.
1. **B.** Copying leaves the original available if a removable-media transfer fails.
1. **A.** F2 is a common Rename shortcut in Windows File Explorer.
1. **C.** Renaming an extension does not change the actual stored file format.
1. **B.** References based on the old folder path may break even though contents remain.
1. **A.** Replacing can overwrite important destination data; inspect before confirming.
1. **C.** Drag-and-drop defaults can vary; a deliberate Copy or Cut followed by Paste is often clearer.
1. **B.** Operations on a folder can include its entire contained tree.
1. **A.** Many typical local deletions go to Windows Recycle Bin, although exceptions exist.
1. **C.** Shift + Delete is a permanent-delete shortcut and is not appropriate for these practice exercises.
1. **B.** Do not assume removable storage uses the same recovery path as local Windows folders.
1. **A.** A delete in a synced folder can propagate across locations.
1. **C.** Google Drive provides a Trash area for eligible deleted items.
1. **B.** Backup reliability requires a separate recovery strategy, not only duplicate entries.
1. **A.** Shortcuts normally reference a target item rather than duplicate its data.
1. **C.** Apple documents Option + Command + V for moving Finder files in the clipboard.
1. **B.** Finder commonly uses Return to begin editing the selected item's name.
1. **A.** A missing item may be misfiled or renamed rather than deleted.
1. **C.** Shared files and official records can have retention obligations or users depending on them.
1. **B.** Wait for the operation to complete, verify files, and eject safely where appropriate.
1. **A.** A normal rename alters identification while preserving intended contents and location.
1. **C.** The select-act-verify routine reduces errors and makes problems easier to diagnose.
:::

### Exit task: Explain it in your own words

Without looking back at the lesson, complete these four sentences:

1. **Copy** is best when I need __________.
1. **Move** is best when I need __________.
1. **Rename** is best when I need __________.
1. **Delete** is only appropriate after I confirm __________.

Then describe how you would safely copy an important document to a USB drive, verify the transfer, and avoid confusing the two versions. If you can explain the results and the precautions, you are prepared for the next lesson on finding files that appear to be lost.

## 11. MGU Library connections and next steps

The MGU course resources provide continuity with earlier lessons. The official operating-system and cloud-service references explain common commands and recovery distinctions. Their interfaces and policies may change over time; always read the current warning or support guidance for your actual device.

### MGU resources

- [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) — overview of all nine lessons.
- [MGU Encyclopedia: Data Storage Methods](/library/encyclopedia/computer-science/data-systems/data-storage-methods) — technical context for storage and persistence.
- [Computer Science Foundations, Chapter 11: Data Structures at an Introductory Level](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-11) — optional study of structured organization.

### Official platform instructions

- [Microsoft: File Explorer in Windows](https://support.microsoft.com/en-us/windows/experience/fileexplorer/file-explorer-in-windows) — browsing, Copy, Cut, Paste, Rename, and Delete controls.
- [Microsoft: Keyboard shortcuts in Windows](https://support.microsoft.com/en-us/accessibility/windows/keyboard-shortcuts-in-windows) — common keyboard commands and permanent-delete warning.
- [Microsoft: Work with synced files in File Explorer](https://support.microsoft.com/en-us/sharepoint/sync/work-with-synced-files-in-file-explorer) — synced-folder file management.
- [Microsoft: Delete files or folders in OneDrive](https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive) — online deletion and synchronization cautions.
- [Microsoft: Restore deleted OneDrive files](https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files) — account recovery possibilities.
- [Apple: Mac keyboard shortcuts](https://support.apple.com/en-us/102650) — Finder commands for copying and moving.
- [Apple: Rename files, folders, and disks on Mac](https://support.apple.com/guide/mac-help/rename-files-folders-and-disks-on-mac-mchlp1144/mac) — Finder naming steps.
- [Apple: Delete files and folders on Mac](https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac) — Trash behavior and limitations.
- [Apple: Organize files and folders in Files on iPhone](https://support.apple.com/guide/iphone/iphab82e0798/ios) — touch-based file operations.
- [Apple: Recover deleted files on iCloud.com](https://support.apple.com/guide/icloud/recover-deleted-files-mmae56ea1ca5/icloud) — iCloud recovery information.
- [Google: Chromebook files and deletion](https://support.google.com/chromebook/answer/1700055?hl=en) — Files app management and Trash behavior.
- [Google: Organize files in Google Drive](https://support.google.com/drive/answer/2375091?hl=en) — Drive organization and moving items.
- [Google: Delete files in Google Drive](https://support.google.com/drive/answer/2375102?hl=en) — Drive Trash and retention.
- [Google: Move or copy files to a storage card](https://support.google.com/files/answer/9712028?hl=en) — Files by Google on compatible Android devices.

### Continue the File and Folder Skills course

[← Previous lesson: Naming Files Clearly](/department/computer-science/basic-computer-skills/file-and-folder-skills/naming-files-clearly/) · [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) · [Next lesson: Finding Lost Files →](/department/computer-science/basic-computer-skills/file-and-folder-skills/finding-lost-files/)

> **Lesson completion checklist:** I can distinguish copy, move, rename, and delete; identify source and destination; use Copy, Cut, and Paste carefully; explain F2 and extensions; recognize ordinary Recycle Bin limitations; protect valuable originals; understand cloud-synchronized changes; respond to warnings; and verify file operations before relying on their results.

:::terms
file | File | A named item of stored information such as a document or photograph | 
folder | Folder | A container used to organize files and other folders | 
file-explorer | File Explorer | Windows file manager for viewing and organizing files and folders | 
copy | Copy | Create another stored instance of selected data while ordinarily retaining the source | 
move | Move | Relocate an item from its current location to a new location | 
rename | Rename | Change an item identifying name without intentionally changing its data | 
delete | Delete | Remove an item from its active location subject to the storage system rules | 
backup | Backup | A separately managed recoverable copy intended to restore data after loss | /library/encyclopedia/computer-science/data-systems/data-storage-methods
recycle-bin | Recycle Bin | Windows recovery location for many ordinarily deleted files | 
trash | Trash | A recovery location used by some file managers and cloud services | 
file-extension | File extension | A suffix such as .txt or .pdf that commonly identifies a file type | 
source-location | Source location | Folder drive or service where a file operation begins | 
destination | Destination | Folder drive or service where copied or moved data is intended to go | 
clipboard | Clipboard | Temporary workspace holding information or selected file references for paste operations | 
cut | Cut | A command used to prepare selected files for movement in Windows File Explorer | 
paste | Paste | Place clipboard contents or perform a pending file operation in the destination | 
selection | Selection | Item or group of items chosen for a file command | 
permission | Permission | Rule determining whether a user may view change or remove an item | 
drag-and-drop | Drag and drop | Move a pointer-held item over a target and release it to invoke an operation | 
path | Path | Sequence of folders and names identifying a file location | 
synchronized-folder | Synchronized folder | Folder whose changes can be coordinated with an online account or another device | 
shortcut | Shortcut | Reference directing a user or program to another item or location | 
missing-file | Missing file | An item not found in the place where someone expected it | 
finder | Finder | The macOS file manager for browsing and organizing files and folders | 
ios-files | Files app | Apple file manager for supported iPhone and iPad storage locations | 
synchronization | Synchronization | Coordinating changes between connected copies or views of a file | 
verification | Verification | Checking a result against the source destination and expected file contents | 
restore | Restore | Return an eligible deleted item from a system recovery location | 
cloud-storage | Cloud storage | Data storage provided through an online service account | /library/encyclopedia/computer-science/data-systems/data-storage-methods
local-storage | Local storage | Persistent storage on or directly attached to the computer in use | /library/encyclopedia/computer-science/data-systems/data-storage-methods
external-drive | External drive | Removable or separately connected storage device | 
usb-drive | USB drive | Portable flash or other storage device connected through USB | 
file-manager | File manager | Software for browsing and managing files folders and storage locations | 
name-conflict | Name conflict | Collision when a destination already has an item with a proposed name | 
overwrite | Overwrite | Replace or modify previously stored data with new data | 
duplicate | Duplicate | Additional copy or similar item that may be mistaken for another | 
read-only | Read only | Setting or permission that restricts modifications to an item | 
metadata | Metadata | Information about a file such as its size timestamps or owner | 
file-format | File format | Representation of data according to a particular specification | 
export | Export | Create a file in a supported format using an application feature | 
save-as | Save As | A command for saving content with selected location name or supported format | 
online-only | Online only | Cloud-backed item whose full content may not be stored locally until requested | 
cloud-native | Cloud-native document | Document primarily managed by a cloud editing service | 
version-history | Version history | Service feature that may retain older states of a document | 
shared-folder | Shared folder | Folder accessible to multiple users under permissions | 
ownership | Ownership | Account or role responsible for a stored item under service rules | 
retention-policy | Retention policy | Rule prescribing whether and how long records should be kept | 
permanent-deletion | Permanent deletion | Removal that bypasses or exhausts ordinary recovery options | 
recovery | Recovery | Process of regaining access to data that was lost or removed | 
folder-tree | Folder tree | Indented representation of a hierarchy of folders and contained items | 
windows-11 | Windows 11 | Microsoft operating system used as this lesson main example | 
macos | macOS | Apple desktop operating system used on Mac computers | 
chromeos | ChromeOS | Google operating system for Chromebooks | 
android | Android | Mobile operating system available on many phones and tablets | 
onedrive | OneDrive | Microsoft cloud storage service integrated with supported apps and Windows | 
google-drive | Google Drive | Google service for storing organizing and sharing files | 
icloud-drive | iCloud Drive | Apple cloud file storage and synchronization service | 
transfer | Transfer | Process of sending or relocating stored data from one location to another | 
progress-indicator | Progress indicator | Display of how much of a pending file operation is completed | 
device-eject | Safe eject | Procedure for disconnecting removable storage without interrupting active writes | 
file-recovery | File recovery | Attempt to restore data after mistaken deletion damage or loss | 
access-control | Access control | Rules determining who may open modify move or delete data | 
:::
