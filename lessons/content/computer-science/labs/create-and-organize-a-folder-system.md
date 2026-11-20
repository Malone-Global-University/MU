Beginner Practice Labs / Lab 1

## Lesson introduction

A new folder can be created in a few seconds. Building a **folder system that you can actually use** takes a little more thought. This lab combines several basic computer skills into one complete project: plan a safe workspace, create a useful set of folders, add harmless practice files, put each file in its proper location, find the files again, and check that nothing was misplaced. The finished folder system is the lab's practical deliverable.

Imagine that you are helping organize an upcoming community event while also managing coursework and household reference material. Notes, checklists, and drafts are arriving in several places. A random collection of files may be workable for one afternoon, but it quickly becomes difficult to know which file is current or where to save the next one. In this lab you will create an orderly [[folder-hierarchy|folder hierarchy]] that answers three questions: **Where does a file belong? How do I put it there? How do I find it again?**

This is a **practice lab**, not an instruction to reorganize your real computer. Use only invented, nonsensitive text files in a folder you own. A paper-based simulation is also valid if you do not have permission to modify the device. Windows 11 is the primary walkthrough; equivalent approaches for Mac, Chromebook, and common cloud storage systems appear later.

> **The lab objective:** Build one predictable practice folder tree, organize six harmless sample files inside it, and demonstrate that you can locate each file without searching through unrelated material.

### Learning objectives

After this lab, you should be able to:

1. Plan a small folder system with meaningful top-level categories and limited nesting.
2. Create one [[practice-workspace|practice workspace]] and a series of [[parent-folder|parent folders]] and [[subfolder|subfolders]] in Windows 11.
3. Create and save six safe practice files while confirming their names and locations.
4. Organize practice files with deliberate [[cut|Cut]], [[copy|Copy]], and [[paste|Paste]] operations, and explain the difference between copying and moving.
5. Trace a folder [[path|path]] and locate a file by navigation or searching in the correct location.
6. Identify common issues, including similarly named folders, a wrong destination, duplicate files, and [[cloud-sync|cloud synchronization]] delays.
7. Audit your own work against a stated completion checklist and explain how to maintain the folder system.

### What you need

- A Windows 11 computer with access to File Explorer and Notepad, or another device with a file manager and simple text editor.
- Permission to work inside your own Documents area or another approved personal location.
- A few minutes of uninterrupted time for each activity. The lab can be completed in multiple sessions.
- No downloads, payments, account registrations, personal records, or administrator privileges.
- A sheet of paper or a document for the alternative activities if changing files is not appropriate.

### On this page

- [1. Understand the lab deliverable](#1-what-will-you-build-and-why)
- [2. Plan the folder structure](#2-how-should-you-plan-the-folder-system)
- [3. Create the hierarchy in Windows 11](#3-how-do-you-build-the-folder-tree-in-windows-11)
- [4. Make the practice files](#4-how-do-you-create-safe-practice-files)
- [5. Organize and locate the files](#5-how-do-you-place-and-find-each-file)
- [6. Adapt the lab to other platforms](#6-how-does-the-lab-work-on-other-devices-and-cloud-services)
- [7. Complete the six guided activities](#7-guided-practice-build-test-and-audit-your-system)
- [8. Troubleshoot and work safely](#8-how-do-you-prevent-and-correct-common-mistakes)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Wrap-up and further learning](#11-completion-review-and-further-learning)

## 1. What will you build and why?

A [[folder|folder]] groups files and sometimes more folders. A [[file|file]] is a stored item such as a text document, photograph, or spreadsheet. A [[file-manager|file manager]] lets you view those items and organize them. In Windows 11 the file manager is [[file-explorer|File Explorer]]. A useful folder system is an arrangement of named folders that helps you save, locate, maintain, and protect information in a consistent way.

Creating folders is only the beginning. A system works when ordinary decisions are easy: a learner can save an assignment, find a project checklist, identify last month's notes, and distinguish current material from an old reference without guessing. Many successful systems are simple. The purpose is not to create the largest possible number of folders.

### The lab workspace

For the exercise, create one top-level folder called `MGU-Practice-Files`. This is the **only area you need to organize**. Under that folder, use five main destinations: an arrival area, learning material, projects, personal reference material, and an archive. The arrival area is a temporary holding space for harmless files that have not yet been organized.

The completed folder outline should look like this. Read each indented line as being inside the folder above it.

```text
Documents
└── MGU-Practice-Files
    ├── 00-Inbox
    ├── 01-Learning
    │   └── Computer-Skills
    ├── 02-Projects
    │   └── Community-Event
    │       ├── Planning
    │       └── Materials
    ├── 03-Personal
    │   └── Home-Records
    └── 90-Archive
```

This is a **text diagram of intended folders**. It is not a command to enter and does not create anything automatically. If Documents is redirected to OneDrive or another service, the folder tree may be synchronized. Confirm the chosen location before proceeding; an authorized local practice area is equally acceptable.

### What makes this an effective small system?

| Design feature | What it does | Example from this lab |
| --- | --- | --- |
| One recognizable root | Keeps practice material together | `MGU-Practice-Files` |
| Clear top-level categories | Separates different purposes | `01-Learning` and `02-Projects` |
| A temporary arrival area | Provides a predictable place for new practice files | `00-Inbox` |
| Limited nesting | Adds detail only when useful | `02-Projects/Community-Event/Planning` |
| Descriptive names | Reduces guessing | `Home-Records` |
| A separate archive | Holds older practice material away from active work | `90-Archive` |
| A review routine | Catches files in the wrong place | Check file name, destination, and count |

The numbers at the beginning are an optional [[naming-convention|naming convention]] that groups the top-level folders in a stable order when sorted by name. They do not establish a security level, make the folders more important, or force a file manager to display items in that order under every sort setting. The `90-Archive` label merely keeps that category later in a name-sorted list.

### The six practice files

You will create the following files using **fictional text only**. All six begin in `00-Inbox`. Their intended final destinations are shown here so you can plan ahead.

| Practice file | Intended destination after organizing | Reason |
| --- | --- | --- |
| `study-plan.txt` | `01-Learning/Computer-Skills` | Coursework planning |
| `event-agenda.txt` | `02-Projects/Community-Event/Planning` | Event planning |
| `event-checklist.txt` | `02-Projects/Community-Event/Planning` | Event planning |
| `poster-ideas.txt` | `02-Projects/Community-Event/Materials` | Event materials |
| `home-reference.txt` | `03-Personal/Home-Records` | Household reference example |
| `completed-note.txt` | `90-Archive` | Finished reference note |

A `.txt` file is a simple [[plain-text|plain-text]] document. The names above are chosen to make the exercises easy to understand; they contain no real personal data. A file called `home-reference.txt` might contain the fictional words *Example home record — no personal information*, not a real address, account number, or document.

### The finish line

At the end, all of the planned folders will exist. Each of the six files will be inside its planned destination. `00-Inbox` will be empty because every practice file has been sorted. You will then demonstrate how to navigate to a file and how to check its [[location|location]] using the address bar or folder path. This result, not the speed at which you click, is the basis for completing the lab.

## 2. How should you plan the folder system?

Before making any changes to a device, describe the work. A simple plan avoids a common problem: creating many folders with overlapping names and then wondering where each file belongs. Ask what the files are *for*, not merely whether they are text files or pictures. In this lab, `event-agenda.txt` belongs with event planning even though it is the same file type as `study-plan.txt`.

### Identify the main categories

For a small mixed-purpose practice workspace, five categories are sufficient. The `00-Inbox` is for temporary intake. `01-Learning` is for study or instruction. `02-Projects` is for projects with an identifiable objective. `03-Personal` is for personal reference materials, but will contain only a fictional example during this lab. `90-Archive` is for material that should remain available but no longer requires active work.

There is no universal numbering system. You can remove the numbers in a real system when alphabetic order is sufficient. This lab keeps them to help you see which level of the structure you are navigating.

### Distinguish parents, children, and siblings

A [[parent-folder|parent folder]] contains another folder directly. A [[subfolder|subfolder]], or child folder, lives inside a parent. Two folders that share one parent are [[sibling-folders|sibling folders]]. In the diagram, `Planning` and `Materials` are sibling folders inside `Community-Event`. `Community-Event` is a subfolder of `02-Projects`. `MGU-Practice-Files` is the [[root-folder|root folder]] for this exercise, even though Documents is above it in the computer's larger storage hierarchy.

A [[path|path]] names the route to an item through successive containers. You can describe the route to the agenda as `MGU-Practice-Files / 02-Projects / Community-Event / Planning / event-agenda.txt`. The slashes in this teaching example mark levels. Windows often displays actual locations with backslashes in full paths; a Mac commonly uses slashes. You do not need to type a path to complete the lab.

### Make a clear placement rule

| If the material is about... | Put it under... | Avoid putting it under... |
| --- | --- | --- |
| A study plan or class activity | `01-Learning` | `02-Projects` merely because it is a task |
| Planning an event | `02-Projects/Community-Event/Planning` | `03-Personal` |
| Artwork, draft posters, or event handouts | `02-Projects/Community-Event/Materials` | `Planning` unless the content is actually planning material |
| A home reference example | `03-Personal/Home-Records` | A folder containing unrelated coursework |
| A finished practice note retained for reference | `90-Archive` | `00-Inbox` indefinitely |
| Newly created practice files awaiting a decision | `00-Inbox` briefly | Multiple unsorted folders |

One file should have one clear *primary* location for the lab. A real file may legitimately be relevant to more than one project, but making many uncontrolled copies can produce different versions. Prefer a clear authoritative original and, when appropriate, a shortcut or authorized shared link rather than multiplying copies indiscriminately.

### Choose names that remain meaningful

Use recognizable terms such as `Community-Event`, `Planning`, and `Materials`. Avoid `Stuff`, `Misc-1`, `Final-Final`, or names consisting only of an unexplained date. Dates are useful when there are many recurring items, but they should support a meaningful description rather than replace it. A consistent pattern such as `2026-11-event-notes.txt` may help for dated material, provided the precise date is relevant to the work.

On Windows, folder names cannot include certain characters such as the backslash, forward slash, colon, asterisk, question mark, quotation mark, angle brackets, or vertical bar. Other platforms and services have their own rules. The hyphens and ordinary letters used in this lab avoid common naming issues. Do not intentionally rename extensions such as `.txt` to a different extension; changing the letters does not convert the file's actual format.

### Decide where the practice happens

The Documents area under your account is convenient, but its actual storage may be local, cloud-synchronized, or controlled by an organization. Before doing this lab, confirm that the chosen folder is your own or that you have permission. Avoid your operating system's installation directories, another user's files, a shared employer drive, a school's production folder, or an active business records directory. If you cannot identify a safe writable location, **do the lab on paper** and describe the actions you would take.

> **Planning checkpoint:** If you cannot say where `poster-ideas.txt` and `event-agenda.txt` will go, refine the plan before creating real folders.

## 3. How do you build the folder tree in Windows 11?

Windows 11 includes File Explorer to view and manage your files. You do not need programming, PowerShell, or administrator permission for folders in an approved personal workspace. The method below uses visible menus so learners can follow along even if they do not know keyboard shortcuts.

### Step A: Open File Explorer and choose a safe location

1. Select the **File Explorer** folder icon on the taskbar, or press **Windows logo key + E**.
2. In the left navigation area, select **Documents** or the authorized practice location you selected.
3. Look at the window title, navigation pane, or [[address-bar|address bar]] to verify where you are. A Documents location associated with OneDrive may synchronize to your cloud account.
4. Confirm that you are not browsing shared or system files. You should be able to create a temporary folder here without disrupting anyone else's work.

If Documents is missing from the left side, choose **Home** or **This PC** and browse to the appropriate personal Documents location. The exact sidebar arrangement can vary across Windows updates and account configurations. Do not guess at a location solely because it looks similar.

### Step B: Create the root folder

1. While viewing the approved Documents location, select **New** in the File Explorer command bar, then **Folder**. Some configurations also allow right-clicking an empty area and choosing **New → Folder**.
2. Enter the name `MGU-Practice-Files` and press **Enter**.
3. Check that the new folder appears once in the selected location.
4. Open `MGU-Practice-Files` with a double-click or the appropriate keyboard action.
5. Confirm that the open folder is empty. If you see unrelated existing work, stop and verify that you entered the correct folder.

The keyboard shortcut **Ctrl + Shift + N** creates a new folder in appropriate File Explorer contexts. The menu method is preferred for this first attempt because it helps you see which command you selected.

### Step C: Create the five top-level subfolders

While inside `MGU-Practice-Files`, use **New → Folder** separately for each of these exact names:

1. `00-Inbox`
2. `01-Learning`
3. `02-Projects`
4. `03-Personal`
5. `90-Archive`

After creating them, look at the folder names rather than relying on icons alone. There should be **five** top-level folders and no practice files at this level. If an extra `New folder` remains, determine whether it is an accidental practice item; do not delete anything until you are confident it is yours and unneeded.

### Step D: Create the nested subfolders

1. Open `01-Learning` and create `Computer-Skills` inside it. Return to `MGU-Practice-Files` using the Back control or the [[breadcrumb|breadcrumb]] path.
2. Open `02-Projects` and create `Community-Event` inside it.
3. Open `Community-Event` and create `Planning` and `Materials` as two separate folders. These should be beside each other inside `Community-Event`, not one inside the other.
4. Return to `MGU-Practice-Files`, open `03-Personal`, and create `Home-Records`.
5. Return to the root and check that `90-Archive` and `00-Inbox` remain directly beneath `MGU-Practice-Files`.

You have now created ten folders inside the root: five immediate children and five deeper folders. Specifically, the deeper folders are `Computer-Skills`, `Community-Event`, `Planning`, `Materials`, and `Home-Records`. Counting `MGU-Practice-Files` itself, the new lab structure contains **eleven folders**. This count is useful for checking your work, not a rule that every real system must have eleven folders.

### Step E: Verify the structure before adding files

| Location you open | What should appear there |
| --- | --- |
| `MGU-Practice-Files` | `00-Inbox`, `01-Learning`, `02-Projects`, `03-Personal`, `90-Archive` |
| `01-Learning` | `Computer-Skills` |
| `02-Projects` | `Community-Event` |
| `Community-Event` | `Planning` and `Materials` |
| `03-Personal` | `Home-Records` |
| `00-Inbox` | No files yet |
| `90-Archive` | No files yet |

If a nested folder is in the wrong place, use File Explorer to move it **only after confirming it is a folder you just created for this lab**. An alternative is to create the missing folder in the proper location and leave cleanup for a careful review. Do not experiment with moving folders containing real work, and do not assume that Undo will always restore an action after other changes.

### A keyboard-accessible alternative

Use the keyboard to open File Explorer, navigate with Tab and arrow keys as supported in the current view, and activate the New Folder command through an available menu or **Ctrl + Shift + N** once the desired folder is active. Press **Enter** to accept a name and use the Back or breadcrumb navigation to change locations. Keyboard layouts, assistive technology, and system settings vary; the goal is to create and verify the correct folder, not to use one mandatory input method.

## 4. How do you create safe practice files?

You now need a small collection of harmless files to sort. Creating the files in a single temporary arrival area lets you see the organizational process clearly. In the real world, an inbox might receive downloaded attachments, notes saved from applications, or scans from a device. In this controlled lab, you will create your own short text files so there are no unexpected downloads or sensitive documents.

### Step A: Open the practice inbox

1. Return to `MGU-Practice-Files`.
2. Open `00-Inbox`.
3. Verify that the folder is empty before you start.
4. Keep this File Explorer window available so you can confirm where the files are saved.

### Step B: Create the first text file in Notepad

1. Open **Notepad** from the Windows Start menu.
2. Type this harmless sample text: `Practice study plan: Review file and folder organization.`
3. Select **File → Save As** (or the equivalent save command for the version of Notepad you use).
4. In the save dialog, navigate to `Documents / MGU-Practice-Files / 00-Inbox`, or your approved alternative root location.
5. In the File name field, enter `study-plan.txt`. If a file-type field is available, choose a plain text format. Do not add a second `.txt` if the application supplies it automatically.
6. Save the file. Return to File Explorer and check that `study-plan.txt` appears inside `00-Inbox`.
7. Open it once and confirm that the words match what you typed, then close the document.

The difference between **Save** and **Save As** depends on the application and whether the document has already been saved. When an application asks for a name and location, choosing the destination correctly matters more than memorizing the command label. Modern Notepad may offer tabs or autosave behavior; verify the actual file in File Explorer rather than assuming that visible unsaved text has become a stored file.

### Step C: Create the remaining five text files

Use a new blank document in Notepad for each entry. Save **all six** files to `00-Inbox`, using the listed text as sample content. Do not put any real information in these examples.

| Save this filename | Type this sample sentence |
| --- | --- |
| `study-plan.txt` | Practice study plan: Review file and folder organization. |
| `event-agenda.txt` | Sample event agenda: Welcome, discussion, and closing. |
| `event-checklist.txt` | Sample checklist: Confirm room, supplies, and volunteers. |
| `poster-ideas.txt` | Sample poster notes: Use a clear title and readable lettering. |
| `home-reference.txt` | Fictional household reference: No personal records included. |
| `completed-note.txt` | Practice note completed and ready for archiving. |

After the sixth save, the `00-Inbox` should contain **six files** and no subfolders. If you see names such as `event-agenda.txt.txt`, determine what the application added. On Windows, file extensions may be hidden by default; use **View → Show → File name extensions** in File Explorer if you need to check the full names. A double extension does not necessarily prevent opening a text file, but it makes naming less clear. Rename only the practice file after confirming its actual full name.

### Why the inbox is temporary

An inbox is helpful only when it has a purpose. It is a place to collect work that has not yet been classified. If files remain there for months, the inbox becomes another cluttered folder. In this exercise the sorting step empties `00-Inbox`. In everyday use, you might review a work inbox at the end of a session or on a predictable schedule.

### Never substitute real records

Avoid using real identification documents, health information, passwords, tax records, bank statements, school records, employer documents, or photographs of other people as lab examples. The purpose is to practice file-management mechanics. Invented content is sufficient. If you later adapt the skill to real work, follow the relevant privacy and retention rules for that work.

## 5. How do you place and find each file?

The core activity is to move the sample files from `00-Inbox` to their planned destinations. This requires understanding the difference between **moving** and **copying**. A [[move|move]] changes the file's location. A [[copy|copy]] creates another instance of the file while leaving the original, provided the operation succeeds. A [[shortcut|shortcut]] points to another item rather than necessarily containing a full duplicate. These operations can behave differently across storage devices and cloud services.

### Step A: Move one file by Cut and Paste

1. In File Explorer, open `MGU-Practice-Files / 00-Inbox`.
2. Select `study-plan.txt` once. Confirm that only that file is selected.
3. Choose **Cut** from the File Explorer command bar or press **Ctrl + X**.
4. Navigate to `MGU-Practice-Files / 01-Learning / Computer-Skills`.
5. Choose **Paste** or press **Ctrl + V**.
6. Confirm `study-plan.txt` appears in `Computer-Skills`.
7. Return to `00-Inbox` and confirm `study-plan.txt` is no longer there.

The file should exist at its intended destination after the move. A cut file may look faded before you paste it; this is a visual cue, not proof that the file has already been moved. Confirm the final result. If you choose the wrong destination, stop, identify both locations, and carefully move only the affected practice file to the correct folder.

### Step B: Move the remaining practice files

Repeat the method with each sample. You can select two related event-planning files together for efficiency, but beginners may prefer moving them one at a time to reduce mistakes.

| File or group | Move to folder | Expected count there |
| --- | --- | --- |
| `study-plan.txt` | `Computer-Skills` | 1 file |
| `event-agenda.txt` and `event-checklist.txt` | `Planning` | 2 files |
| `poster-ideas.txt` | `Materials` | 1 file |
| `home-reference.txt` | `Home-Records` | 1 file |
| `completed-note.txt` | `90-Archive` | 1 file |
| `00-Inbox` after all moves | Keep empty | 0 files |

If you are uncertain whether two items were selected, check the selection before cutting. Do not drag real files casually across drive boundaries: dragging may produce a move or a copy depending on the source, destination, and application. Explicit Cut/Paste or Copy/Paste is easier to reason about during training.

### Step C: Demonstrate copying without creating permanent clutter

Select `event-agenda.txt` inside `Planning`, choose **Copy**, and paste it inside `00-Inbox`. You should temporarily have **two copies**: one still in `Planning`, and a second in `00-Inbox`. This demonstrates that copying differs from moving. Verify both locations.

For the final clean system, return `00-Inbox` to an empty state. Delete **only the extra practice copy in `00-Inbox`** after confirming that the original `event-agenda.txt` remains safely inside `Planning`. If you cannot verify which is which, do not delete either item; ask an instructor or describe the cleanup on paper. Deleting a file is not always reversible, especially in network and cloud environments. On a personal system, the Recycle Bin may help in some cases, but it must not be relied on as a complete recovery plan.

### Step D: Navigate to a file without searching

Start from `MGU-Practice-Files` and follow a path one level at a time. To find `poster-ideas.txt`, open `02-Projects`, then `Community-Event`, then `Materials`. Read the file name and confirm the contents. Navigate Back and repeat with `home-reference.txt` and `study-plan.txt`.

Use the breadcrumb display or Back control to orient yourself. If you are in `Planning` but looking for `poster-ideas.txt`, do not assume the file is lost. The file belongs in the sibling folder `Materials`. Navigate to the common parent `Community-Event` and choose the appropriate branch.

### Step E: Use search carefully

If you have trouble finding `event-checklist.txt`, first navigate to `MGU-Practice-Files` and search from that location using File Explorer's search field. Depending on settings, the search may include subfolders. Review the result's location rather than accepting the first matching name. Do not start by searching the entire computer if you already know the project root. Search is a helpful backup, but a good folder system reduces reliance on search.

### Step F: Verify contents and location

A correct filename alone is not enough: `event-agenda.txt` could exist in two locations. Verify the **name, expected contents, and containing folder**. The final check should show five populated destinations and an empty inbox. You can record the completed paths in a simple checklist or explain them aloud.

> **Operational habit:** Move intentionally, verify both sides, and count the resulting files. A successful move is confirmed by the file appearing at the destination and no longer appearing at the source.

## 6. How does the lab work on other devices and cloud services?

The organizational principles are transferable. The main actions are choosing an authorized location, creating a root folder, adding subfolders, creating practice documents, placing files into the correct destinations, and checking the results. Menus and available features differ by device; you do not have to follow Windows-only commands on another platform.

### Mac: Finder

On a Mac, open [[finder|Finder]], navigate to a personal folder such as Documents, and use **File → New Folder** or **Shift + Command + N**. Build the same root and nested hierarchy. Use TextEdit in plain-text mode if appropriate to create the six example notes, and confirm their names and paths in Finder. When organizing items, use Finder's available move or copy commands and confirm what happened to the original. On macOS, duplicating, dragging, copying, and moving may differ depending on whether locations are on the same volume, so verify the outcome instead of assuming a drag always moves a file.

### Chromebook: Files app

Open the [[chromeos-files|Files app]], choose **My files** or an authorized Google Drive area, and create a new folder using the app's available New Folder control. The exact controls depend on ChromeOS version and destination. Use a simple text-editing or document app to make practice files if it allows storing them as plain text. A Google Docs document is not automatically the same file format as `.txt`; if using Docs, keep the same descriptive base names and record that the format is different. Verify which storage location the Files app or document app uses.

### Google Drive in a browser

Open [Google Drive](https://drive.google.com/) using an approved account. Within a folder you have permission to edit, choose **New → New folder** or the currently labeled equivalent, and build the hierarchy. Files can be moved with the service's **Organize → Move** control or by other supported methods. Take extra care with shared drives and files you do not own: permissions may prevent a normal move or change who can access an item. Do not upload practice files to a shared organization folder without authorization. Synchronization and website changes may take time to appear across devices.

### OneDrive and cloud-synchronized Documents

Windows may show OneDrive folders inside File Explorer, including a Documents area that is backed up or synchronized. The same root and subfolders can be created there with normal folder controls, but changes may propagate to another signed-in device or online account. Confirm the intended account and workspace; do not assume that an item visible in File Explorer is local-only. A successful cloud sync is not the same as an independent [[backup|backup]].

### iPhone, iPad, and Android

On iPhone or iPad, Apple's Files app can browse supported locations such as On My iPhone, iCloud Drive, or connected providers. Where the chosen location supports it, create folders and move compatible sample files there. On Android, a file-management app such as Files by Google may offer internal-storage folders and an option to move files. Availability varies with device, Android version, service, and permissions. Use an approved location and the platform's visible controls rather than copying Windows keyboard commands.

### A paper-based alternative is fully acceptable

Draw the folder tree, write the six filenames on separate paper slips, place each slip under its intended destination, and point to the complete route for two files. To simulate a copy, write the same filename on another slip; to simulate a move, relocate the existing slip. The written version tests the same decision-making skill without risking unauthorized changes to a device. If the lab is being graded, make clear whether the evidence represents actual file operations or a simulation.

| Environment | Main organizing tool | Recommended verification |
| --- | --- | --- |
| Windows 11 | File Explorer | Check address bar, parent folder, and file count |
| macOS | Finder | Check Finder location and visible file list |
| Chromebook | Files app | Check My files or cloud account location |
| Google Drive | Browser file list | Check folder breadcrumb and permissions |
| OneDrive | Browser or File Explorer | Check account, folder path, and sync status |
| iPhone or iPad | Files app | Check selected storage location and nested folders |
| Android | Device file manager | Check storage source and file destination |
| Paper simulation | Drawn tree and labeled slips | Check every slip against the answer table |

## 7. Guided practice: build, test, and audit your system

Complete these six activities in order. They are deliberately cumulative: the result of one becomes the starting point of the next. All use fictional materials. Each activity includes an expandable check so that you can compare your work with a model answer. You can complete activities on paper when the device is unavailable or restricted.

### Activity 1: Draw and explain the folder map

**Scenario:** A volunteer needs a place for class notes, event-planning materials, household reference examples, and finished work. Create a sketch of the lab folder tree and describe the role of `00-Inbox` and `90-Archive`.

1. Write the root name `MGU-Practice-Files` at the top.
2. Add its five immediate children exactly as shown in Section 1.
3. Place `Computer-Skills` under `01-Learning`.
4. Place `Community-Event` under `02-Projects`, then draw `Planning` and `Materials` under `Community-Event`.
5. Place `Home-Records` under `03-Personal`.
6. Circle the parent of `Planning` and the two folders that are siblings within it.

**Deliverable:** A correct folder diagram or spoken description with one root, five immediate child folders, and the five deeper folders.

:::answer Show Activity 1 model answer
**Expected:** `Community-Event` is the immediate parent of `Planning` and `Materials`. The two are siblings. `00-Inbox` is a temporary place for files not yet sorted; `90-Archive` holds completed practice material. The root contains five immediate folders, and the entire new lab tree has eleven folders including the root.

**Check:** A sketch is correct only if `Planning` and `Materials` share the same parent rather than being nested inside one another. A paper diagram counts as valid evidence for the planning objective.
:::

### Activity 2: Create the root and nested folders

**Scenario:** Build the planned structure in File Explorer without changing any other files.

1. Locate an approved personal Documents area or equivalent.
2. Create the `MGU-Practice-Files` root.
3. Create the five top-level folders.
4. Create `Computer-Skills`, `Community-Event`, `Planning`, `Materials`, and `Home-Records` in the correct parent locations.
5. Return to the root and verify all five top-level names.
6. Open the deepest branches to check that none was created accidentally at the root.

**Deliverable:** Eleven correctly placed folders in total, including the root; no sample text files yet.

:::answer Show Activity 2 verification checklist
**Expected:** `MGU-Practice-Files` has precisely the five immediate subfolders in the model. `01-Learning` contains `Computer-Skills`, `02-Projects` contains `Community-Event`, `Community-Event` contains `Planning` and `Materials`, and `03-Personal` contains `Home-Records`.

**Self-check:** If `Planning` appears directly inside `02-Projects`, it is one level too high. If `Materials` appears inside `Planning`, it is one level too deep. Correct only your new practice folders after checking the destination.
:::

### Activity 3: Create and inspect the six files

**Scenario:** Add a small set of fictional text files to the temporary inbox before organizing them.

1. Open `00-Inbox` and confirm it is empty.
2. Use Notepad or a comparable tool to create `study-plan.txt` with the example text from Section 4.
3. Save it inside `00-Inbox` and reopen it to verify the contents.
4. Create the other five files from the sample file table.
5. Confirm that each filename is distinct and that none has an accidental duplicate extension.
6. Count the files in `00-Inbox` without moving them yet.

**Deliverable:** Six readable, fictional practice text files in `00-Inbox`.

:::answer Show Activity 3 expected result
**Expected files:** `study-plan.txt`, `event-agenda.txt`, `event-checklist.txt`, `poster-ideas.txt`, `home-reference.txt`, and `completed-note.txt`.

**Check:** All six should be in the same `00-Inbox` before sorting. The folder tree does not need any other files. If an app saved a different document format, document the format in your evidence and use the corresponding tool consistently rather than renaming the extension to pretend it is `.txt`.
:::

### Activity 4: Sort the files into their destinations

**Scenario:** Process the inbox using a planned placement rule.

1. Move `study-plan.txt` into `01-Learning/Computer-Skills`.
2. Move `event-agenda.txt` and `event-checklist.txt` into `02-Projects/Community-Event/Planning`.
3. Move `poster-ideas.txt` into `02-Projects/Community-Event/Materials`.
4. Move `home-reference.txt` into `03-Personal/Home-Records`.
5. Move `completed-note.txt` into `90-Archive`.
6. Return to `00-Inbox` and check whether any practice file remains.

**Deliverable:** Six files placed in five final destinations; empty `00-Inbox`.

:::answer Show Activity 4 sorting answer
**Expected:** `Computer-Skills` has one text file, `Planning` has two, `Materials` has one, `Home-Records` has one, and `90-Archive` has one. `00-Inbox` contains zero files.

**Reasoning:** A file's purpose determines its destination. Both event-planning documents belong together, while the draft poster material has a distinct subfolder. The root should not contain loose `.txt` files.
:::

### Activity 5: Prove that you can find, copy, and check

**Scenario:** Someone asks for the event agenda and the sample study plan.

1. Begin at `MGU-Practice-Files` and navigate to `event-agenda.txt` without using search.
2. State its complete route from the lab root.
3. Copy that file into `00-Inbox`; verify that the original remains in `Planning`.
4. After confirming both copies, remove only the temporary copy in the inbox, or stop and describe the intended cleanup if your device is restricted.
5. Navigate from the root to `study-plan.txt`, open it, and verify its sample sentence.
6. If you cannot find a file by navigation, search within the lab root and inspect the result's location.

**Deliverable:** Two verified file paths and a clear explanation of Copy versus Move.

:::answer Show Activity 5 answer and safety check
**Agenda route:** `MGU-Practice-Files / 02-Projects / Community-Event / Planning / event-agenda.txt`.

**Study plan route:** `MGU-Practice-Files / 01-Learning / Computer-Skills / study-plan.txt`.

**Copy result:** A copy pasted into `00-Inbox` leaves the original agenda in `Planning`, resulting in two instances until the temporary practice copy is removed. Moving would instead remove the file from the original source when the operation succeeds.

**Safety:** Remove a temporary copy only after checking which instance is the correct original. Recovery options differ by system and are not guaranteed.
:::

### Activity 6: Conduct the final folder-system audit

**Scenario:** A coworker or instructor needs confidence that the workspace is ready for future use.

1. Count the folders and confirm the parent-child relationships.
2. Check each of the six sample filenames against the destination table in Section 1.
3. Confirm that `00-Inbox` is empty after any temporary copying exercise has been cleaned up.
4. Confirm that there are no loose practice files directly inside `MGU-Practice-Files`.
5. State one rule for future incoming files and one rule for archived material.
6. Explain what you would do if an unfamiliar file or a private document appeared in the workspace unexpectedly.

**Deliverable:** A completed audit report that gives the counts, identifies each destination, and describes at least two maintenance habits.

:::answer Show Activity 6 model audit report
**Folder count:** Eleven including `MGU-Practice-Files` itself, provided you used the exact model.

**File count:** Six sample text files across five final destination folders. `Planning` has two files; each other populated destination has one. The temporary inbox and root contain no loose files.

**Maintenance rule:** Classify new files promptly, keep names meaningful, and archive genuinely completed items rather than accumulating them in the intake folder.

**Unexpected file:** Do not open, share, move, rename, or delete an unfamiliar file reflexively. First verify ownership, origin, location, and whether you have authority to handle it. In a managed environment, seek appropriate staff guidance.
:::

### Optional extension: Design a variation without extra clutter

Imagine this structure must support three different classes or two separate community projects. Sketch a revised tree that adds only the subfolders necessary to prevent ambiguity. Explain when you would add a new category and when you would use an existing one. You do not need to modify the completed lab to demonstrate this extension.

:::answer Show optional extension model
**Possible response:** Under `01-Learning`, create named class folders only when there is material for more than one class. Under `02-Projects`, create a distinct project folder for each genuinely separate project. Keep the temporary inbox, archive, and personal categories unchanged unless a demonstrated need emerges. The best design is the smallest one that consistently answers where a file belongs.
:::

### Lab performance rubric

Use this rubric as a self-check or instructor evaluation guide. It does not require special dashboard grading features.

| Criterion | Successful evidence | Needs correction if... |
| --- | --- | --- |
| Planning | The tree shows one root, five top-level branches, and proper nested folders | A child is placed under the wrong parent |
| Folder creation | Eleven folders total, including the root | A planned folder is missing or misplaced |
| Safe file creation | Six fictional, readable practice files | A file is missing, unreadable, or uses sensitive content |
| Sorting | All six files appear in the right destinations | A file remains in Inbox or is misclassified |
| Navigation | Learner can state and follow two complete file routes | Learner finds a same-named file but cannot verify location |
| Operational safety | Learner distinguishes Copy and Move and verifies cleanup | Learner assumes a copy is a move or deletes without confirming |
| Maintenance | Learner states a useful intake and archive routine | Learner has no clear rule for new or completed work |

This lab can be considered complete when all seven criteria are satisfied in the actual workspace or in a correctly labeled paper simulation. If one criterion fails, correct that part and repeat the verification; the entire exercise does not need to be restarted.

## 8. How do you prevent and correct common mistakes?

Mistakes in beginner file management usually involve location, naming, or assumptions about what a command did. A calm verification process is more reliable than trying commands repeatedly. First identify the item, the current parent folder, and the intended destination. Then choose a suitable action. Make one controlled change at a time.

### Troubleshooting guide

| Symptom | Likely explanation | Safe next step |
| --- | --- | --- |
| New folder appears in the wrong place | You created it while a different parent was open | Verify both paths; move only your harmless practice folder if appropriate |
| `Planning` and `Materials` are nested in each other | One folder was created while inside its sibling | Return to `Community-Event`; compare against the model tree |
| A file seems missing after Cut | Paste may not have happened or the wrong destination was used | Check source and intended destination before repeating any operation |
| Two agenda files are visible | A Copy operation or duplicate save may have created another instance | Inspect both names and locations before removing a practice copy |
| `event-agenda.txt.txt` appears | Text editor may have added an extension or extensions were hidden | Reveal file extensions and rename only after confirming the format |
| A folder has a name like `New folder (2)` | Another item with that name already exists | Check for duplicates; rename the new practice folder deliberately |
| File appears in search but not in expected folder | Search results may include other locations | Inspect the result's containing path and classify it |
| New Folder command is unavailable | The location may be read-only or access-restricted | Choose an authorized writable location or use paper simulation |
| File changes appear on another device | The folder may be cloud-synchronized | Confirm account, location, and sync settings before proceeding |
| Cloud folder looks empty temporarily | Synchronization or offline status may differ | Check connection and sync state; do not repeatedly re-create files |
| A delete cannot be undone | Recovery may be unavailable or limited | Stop destructive actions and use approved recovery or support procedures |
| A document opens with the wrong app | File association may differ or extension may be misleading | Check the actual file format; do not alter the extension to guess a fix |

### A four-part verification method

When you think a file operation succeeded, check four things: **what item**, **which folder**, **which action**, and **what result**. For example, when moving `event-checklist.txt`, confirm the filename, confirm you were in `00-Inbox`, select Cut rather than Copy, and verify the file now appears under `Planning` but not in the inbox. This reduces the chance of overlooking a wrong branch of the tree.

### What to do when a file is apparently lost

Start from the intended parent and look for nearby sibling folders. Then use search scoped to the lab root. If a result has the same name, inspect its path and contents before moving it. Avoid broad cleaning or deletion while searching. If the file is in a cloud service, check whether the proper account is active and whether the file is available on the current device. If the file does not exist, recreate only the harmless practice text after confirming it was not merely moved elsewhere.

### Privacy, security, and shared-device considerations

A folder name does not create confidentiality. Anyone with sufficient access to the device, account, cloud storage, or shared location may be able to see its contents. In a real organization, permissions and retention rules govern where documents may be stored. Do not treat a personal-looking folder name as a substitute for proper access controls. Do not change access permissions as part of this beginner lab.

The sample files contain fictional information so that mistakes have little consequence. Keep practice files out of public, shared, or externally synchronized locations unless you intentionally chose an approved environment. If using a classroom computer, follow the instructor's storage and cleanup policy. If you find an unexpected sensitive record, do not open or share it to satisfy the assignment.

### Backup is different from folder organization

A neat hierarchy makes information easier to find; it does not guarantee recovery after hardware failure, account loss, accidental deletion, or ransomware. A [[backup|backup]] is a separately recoverable copy kept under an appropriate plan. Cloud synchronization can replicate accidental changes and deletions. Backups and recovery planning are separate skills covered in the File and Folder Skills course. The lab does not require creating a backup of fictional files, but learners should not confuse the two concepts.

### Accessibility and responsible assessment

A student may use a keyboard, mouse, touch interface, screen reader, magnification, a different language interface, or paper simulation. The performance standard is accurate placement and verification, not a particular sequence of gestures. File-manager menus can change with software updates, and accessibility labeling differs across environments. An instructor should accept a clear explanation of an equivalent supported action when the final result is correct.

> **Safe completion rule:** Do not delete or reorganize real files to make your lab folder look like the example. Assess only the practice content you created, in an approved location.

## 9. Essential vocabulary

The following terms describe the skills used in the lab. Some are also marked as [[vocabulary-tooltip|interactive vocabulary terms]] in the lesson. The visible glossary remains useful when interactive tooltips are unavailable.

### Structure and navigation

- **File:** An item containing stored information, such as a document or image.
- **Folder:** A container used to group files and other folders.
- **Folder system:** A planned organization of folders used for storing and finding work.
- **Folder hierarchy:** Arrangement of folders and subfolders in parent-child relationships.
- **Folder tree:** A visual or textual view of the hierarchy.
- **Root folder:** The top folder chosen as the starting point of a particular structure.
- **Parent folder:** The immediate container of another file or folder.
- **Subfolder:** A folder inside another folder.
- **Sibling folders:** Folders sharing the same immediate parent.
- **Path:** The sequence of locations that leads to a file or folder.
- **Location:** The storage place in which an item is found.
- **Destination:** The location that will receive an item.
- **Source:** The location from which an item is taken or copied.
- **Breadcrumb:** Clickable location labels representing levels of a folder path.
- **Address bar:** Area showing or accepting the current location in a file manager.
- **Navigation pane:** Side area used to browse common locations and folders.
- **File manager:** Software for browsing and organizing stored files and folders.
- **File Explorer:** The Windows file-management application.
- **Finder:** The Mac file-management application.
- **Files app:** Name used for a file-management app on some platforms.

### Creating and organizing

- **Practice workspace:** An approved area used to carry out harmless exercises.
- **New Folder:** Command for creating a folder in the currently chosen writable location.
- **Save:** Store document contents in a file or update an already saved file.
- **Save As:** Choose a filename, format, or location while saving a document.
- **Filename:** Name used to identify a file in its directory.
- **File extension:** Suffix, often beginning with a period, that commonly indicates a file type.
- **Plain text:** Text stored without rich visual formatting such as font colors.
- **Naming convention:** Consistent rule for naming files or folders.
- **Rename:** Change the name of an existing file or folder.
- **Copy:** Create another instance of information or a file while normally leaving the original.
- **Cut:** Prepare selected content or a file for relocation through Paste.
- **Paste:** Place copied or cut content into a selected destination.
- **Move:** Relocate an item from one location to another.
- **Delete:** Remove an item under the rules of the system in use.
- **Duplicate:** Extra copy or repeated item that may cause confusion.
- **Shortcut:** A reference that opens or points to another item or location.
- **Selection:** One or more items chosen for an operation.
- **Context menu:** Menu containing actions for an item or location.
- **Keyboard shortcut:** Key combination that performs a command.
- **Drag and drop:** Moving an item with a pointer from one location to another.
- **Sort:** Change the display order of items according to a selected property.
- **Search:** Locate items by words, names, or other properties.

### Safe handling and maintenance

- **Inbox:** Temporary holding location for material awaiting classification.
- **Archive:** Location for work kept for reference after active use.
- **Classification:** Placing an item in a meaningful category.
- **Verification:** Checking that the intended result occurred.
- **Audit:** Systematic comparison of actual results against requirements.
- **Permission:** Rule determining which actions an account may take on an item.
- **Read-only:** State in which changes are restricted.
- **Cloud storage:** Storage accessed through a remote service or account.
- **Cloud synchronization:** Process of coordinating file changes among devices or online locations.
- **Sync status:** Indicator of whether changes have been synchronized.
- **Local storage:** Storage associated with a physical device or its directly managed volumes.
- **OneDrive:** Microsoft's cloud storage service that integrates with Windows.
- **Google Drive:** Google's online file storage and organization service.
- **Shared folder:** A folder made available to multiple authorized people.
- **Backup:** Separately recoverable copy for protection against loss of originals.
- **Recycle Bin:** Windows holding area from which some deleted files may be restored.
- **File conflict:** Situation where an item with a conflicting name already exists at the destination.
- **Ownership:** Relationship that helps determine who controls a file or account.
- **Retention rule:** Policy defining how long certain files must be kept or when they may be removed.
- **Version:** A distinguishable state of a file as it changes over time.
- **Accessibility:** Designing or providing ways to use technology with different abilities and input methods.

## 10. Knowledge check

Select one answer for each question, then use the lesson dashboard's **Check answers** control to review the result. This self-study quiz does not send a secure examination result to an instructor. The questions are based on the exact practice structure; when a question describes an action, assume it applies only to the fictional lab files in an approved workspace.

:::quiz
? What is the main purpose of this practice lab?
- [x] Build a usable folder system and verify where the files belong
- [ ] Learn to install a new operating system
- [ ] Create as many folders as possible
! The lab combines planning, creating, sorting, finding, and auditing files in one safe workspace.

? Which folder is the root of the planned lab structure?
- [ ] Planning
- [x] MGU-Practice-Files
- [ ] 00-Inbox
! MGU-Practice-Files is the starting folder for this specific practice system.

? Where should event-agenda.txt end up?
- [ ] 90-Archive
- [ ] 03-Personal/Home-Records
- [x] 02-Projects/Community-Event/Planning
! The event agenda is a planning document for the community-event project.

? Which of these is a sibling of Planning?
- [x] Materials
- [ ] Community-Event
- [ ] 02-Projects
! Planning and Materials share Community-Event as their immediate parent.

? What is 00-Inbox intended for?
- [ ] Long-term backups
- [x] Temporary unsorted practice files
- [ ] Operating system files
! The inbox collects new practice files before they are classified.

? What should the inbox contain after successful sorting?
- [ ] All six files
- [ ] Two planning files
- [x] Zero files
! All six practice files should be in their final destinations.

? What should you check before creating the root folder?
- [x] That the location is safe and writable for you
- [ ] That every system folder is visible
- [ ] That you have installed new software
! Choose an authorized practice location rather than a shared or system area.

? Which Windows 11 tool is used to create the lab folders?
- [ ] Task Manager
- [x] File Explorer
- [ ] Calculator
! File Explorer is the standard Windows interface for browsing and organizing files.

? How many immediate subfolders belong directly in MGU-Practice-Files?
- [ ] Three
- [ ] Six
- [x] Five
! The model root has Inbox, Learning, Projects, Personal, and Archive.

? What should happen when a new folder is created in a writable location?
- [x] A new container appears in the currently selected parent folder
- [ ] All matching documents automatically move into it
- [ ] The computer makes a separate backup
! Creating a folder does not automatically move files or back them up.

? Where does Computer-Skills belong?
- [ ] Under 02-Projects
- [x] Under 01-Learning
- [ ] Inside 00-Inbox
! Computer-Skills is the deeper folder inside the Learning category.

? Which pair belongs together inside Planning?
- [ ] study-plan.txt and home-reference.txt
- [ ] poster-ideas.txt and completed-note.txt
- [x] event-agenda.txt and event-checklist.txt
! Both files relate to organizing the same event.

? What does Cut followed by Paste normally accomplish for a file?
- [x] A move to the chosen destination
- [ ] A permanent archive and backup
- [ ] A change in the file type
! Cut and Paste are used here to relocate the practice file.

? What is the key distinction when copying a file?
- [ ] The source disappears immediately
- [x] The original remains when copying succeeds
- [ ] The file becomes read-only
! Copy makes another instance while leaving the source intact.

? Which sample file belongs in Materials?
- [ ] study-plan.txt
- [ ] event-checklist.txt
- [x] poster-ideas.txt
! The draft poster ideas are event materials rather than planning paperwork.

? How can you confirm a move succeeded?
- [x] Check that the file is in the destination and absent from the source
- [ ] Assume a Cut button means the move is finished
- [ ] Search only for the filename and ignore its path
! Verification requires inspecting both locations.

? Why should learners avoid real personal records in this lab?
- [ ] They are always the wrong file type
- [x] Fictional material practices the skill without exposing sensitive information
- [ ] The operating system cannot manage real records
! Real records are unnecessary and introduce privacy and handling risks.

? What is the immediate parent of Planning?
- [ ] MGU-Practice-Files
- [ ] 02-Projects
- [x] Community-Event
! Planning is directly inside Community-Event.

? What should you do if a folder appears at the wrong level?
- [x] Check both paths before correcting only your practice folder
- [ ] Delete every parent folder
- [ ] Rename an unrelated folder until the tree looks right
! First verify the parent-child relationship and avoid changing unrelated work.

? Where should home-reference.txt go?
- [ ] 01-Learning/Computer-Skills
- [x] 03-Personal/Home-Records
- [ ] 02-Projects/Community-Event/Materials
! The fictional home reference example goes inside Home-Records.

? What should you do before removing the temporary agenda copy?
- [ ] Delete every file with the same name
- [ ] Empty the Recycle Bin first
- [x] Verify the original agenda still exists in Planning
! Do not remove a duplicate until you have identified and preserved the intended original.

? Why is a meaningful naming convention useful?
- [x] It makes names easier to recognize and use consistently
- [ ] It guarantees files are private
- [ ] It makes backups unnecessary
! Names help humans locate and classify work but are not security features.

? Which statement about a folder named Private is correct?
- [ ] Its name prevents anyone else from opening it
- [x] A name alone does not control access permissions
- [ ] It cannot be stored online
! Access depends on actual account and sharing permissions.

? What is the appropriate next step when New Folder is unavailable in a shared location?
- [ ] Try random system directories until it works
- [ ] Change permissions without approval
- [x] Use an authorized location or paper simulation
! Restricted locations should not be bypassed for a practice exercise.

? How many sample text files should exist after a clean lab?
- [x] Six
- [ ] Eleven
- [ ] Five
! The model uses six files placed across five final destination folders.

? Where does completed-note.txt belong?
- [ ] 00-Inbox
- [x] 90-Archive
- [ ] Planning
! Completed practice notes are kept for reference in the archive.

? How should you find a file when you know the intended project root?
- [ ] Search the whole internet
- [ ] Assume the first similar filename is correct
- [x] Navigate the folder tree or search within the root and inspect the path
! Scoped navigation and path verification are more reliable than a name alone.

? Why might a Documents folder also appear in an online account?
- [x] It may be cloud-synchronized through a service such as OneDrive
- [ ] Every Documents folder is automatically public
- [ ] A folder tree is a backup service
! Documents may be associated with cloud synchronization depending on account setup.

? Which item is NOT a separate backup strategy?
- [ ] Keeping an independent recoverable copy
- [x] Merely arranging the originals into neat folders
- [ ] Following an approved backup procedure
! Folder organization improves usability but does not protect originals against all loss.

? Which statement best demonstrates completion?
- [ ] I made folders but did not check them
- [ ] I know the filenames but not their destinations
- [x] I verified all folders, six file destinations, empty Inbox, and safe practices
! The practical deliverable requires accurate placement and an audit, not just folder creation.

:::

:::answer Show the complete knowledge-check answer key
1. **A — Build a usable folder system and verify where the files belong.** The lab combines planning, creating, sorting, finding, and auditing files in one safe workspace.
2. **B — MGU-Practice-Files.** MGU-Practice-Files is the starting folder for this specific practice system.
3. **C — 02-Projects/Community-Event/Planning.** The event agenda is a planning document for the community-event project.
4. **A — Materials.** Planning and Materials share Community-Event as their immediate parent.
5. **B — Temporary unsorted practice files.** The inbox collects new practice files before they are classified.
6. **C — Zero files.** All six practice files should be in their final destinations.
7. **A — That the location is safe and writable for you.** Choose an authorized practice location rather than a shared or system area.
8. **B — File Explorer.** File Explorer is the standard Windows interface for browsing and organizing files.
9. **C — Five.** The model root has Inbox, Learning, Projects, Personal, and Archive.
10. **A — A new container appears in the currently selected parent folder.** Creating a folder does not automatically move files or back them up.
11. **B — Under 01-Learning.** Computer-Skills is the deeper folder inside the Learning category.
12. **C — event-agenda.txt and event-checklist.txt.** Both files relate to organizing the same event.
13. **A — A move to the chosen destination.** Cut and Paste are used here to relocate the practice file.
14. **B — The original remains when copying succeeds.** Copy makes another instance while leaving the source intact.
15. **C — poster-ideas.txt.** The draft poster ideas are event materials rather than planning paperwork.
16. **A — Check that the file is in the destination and absent from the source.** Verification requires inspecting both locations.
17. **B — Fictional material practices the skill without exposing sensitive information.** Real records are unnecessary and introduce privacy and handling risks.
18. **C — Community-Event.** Planning is directly inside Community-Event.
19. **A — Check both paths before correcting only your practice folder.** First verify the parent-child relationship and avoid changing unrelated work.
20. **B — 03-Personal/Home-Records.** The fictional home reference example goes inside Home-Records.
21. **C — Verify the original agenda still exists in Planning.** Do not remove a duplicate until you have identified and preserved the intended original.
22. **A — It makes names easier to recognize and use consistently.** Names help humans locate and classify work but are not security features.
23. **B — A name alone does not control access permissions.** Access depends on actual account and sharing permissions.
24. **C — Use an authorized location or paper simulation.** Restricted locations should not be bypassed for a practice exercise.
25. **A — Six.** The model uses six files placed across five final destination folders.
26. **B — 90-Archive.** Completed practice notes are kept for reference in the archive.
27. **C — Navigate the folder tree or search within the root and inspect the path.** Scoped navigation and path verification are more reliable than a name alone.
28. **A — It may be cloud-synchronized through a service such as OneDrive.** Documents may be associated with cloud synchronization depending on account setup.
29. **B — Merely arranging the originals into neat folders.** Folder organization improves usability but does not protect originals against all loss.
30. **C — I verified all folders, six file destinations, empty Inbox, and safe practices.** The practical deliverable requires accurate placement and an audit, not just folder creation.
:::

## 11. Completion review and further learning

### Final lab inventory

A completed practice workspace should contain **eleven folders including the root** and **six text files**. All six files should be in five destination folders, with two in `Planning` and one each in `Computer-Skills`, `Materials`, `Home-Records`, and `90-Archive`. The `00-Inbox` should be empty. Count your files and read their full paths. A clean result is more important than speed.

### The five-question exit interview

Without looking at the model tree, explain: **(1)** Why is there one root folder? **(2)** What distinguishes `Planning` from `Materials`? **(3)** What changes when you move a file rather than copy it? **(4)** How can you verify that an item is in the correct folder? **(5)** What is your rule for handling new files and completed files? If you can explain these choices and demonstrate the finished tree, you have met the lab's main objective.

### Transfer the skill to everyday work

When working with actual documents, choose categories that reflect your responsibilities. Start with a few clear folders, save new documents deliberately, and periodically check items left in your intake area. Avoid creating extra layers without a practical reason. Check file formats and paths, not just names. For work or school, use approved shared storage and retention procedures rather than copying organizational records into an unapproved personal area.

A useful follow-up is to practice writing, saving, and printing one harmless document inside this folder system. That becomes the next lab's central skill. Keep your practice folder if your instructor wants to use it for further exercises; otherwise follow the device owner's approved cleanup process. Do not delete unrelated files or shared folders.

### MGU course connections

- [Beginner Practice Labs course index](/department/computer-science/basic-computer-skills/beginner-practice-labs/) — return to the full sequence of nine practical lessons.
- [Next lab: Write, Save, and Print a Document](/department/computer-science/basic-computer-skills/beginner-practice-labs/write-save-and-print-a-document/) — continue using your new folder system.
- [File and Folder Skills course index](/department/computer-science/basic-computer-skills/file-and-folder-skills/) — review the core concepts used in this lab.
- [Creating Folders](/department/computer-science/basic-computer-skills/file-and-folder-skills/creating-folders/) — revisit folder creation one operation at a time.
- [Copy, Move, Rename, Delete](/department/computer-science/basic-computer-skills/file-and-folder-skills/copy-move-rename-delete/) — practice the file-management actions separately.

### Official platform references

- [Microsoft: File Explorer in Windows](https://support.microsoft.com/en-us/windows/experience/fileexplorer/file-explorer-in-windows) — Windows file and folder navigation, copying, and moving.
- [Microsoft: Create a new folder](https://support.microsoft.com/en-gb/word/create-a-new-folder) — basic Windows folder creation.
- [Apple: Organize your files in the Finder on Mac](https://support.apple.com/guide/mac-help/organize-your-files-in-the-finder-mchle9f0a1b2/mac) — Finder folder organization and the New Folder command.
- [Google: Open, save, or delete files on your Chromebook](https://support.google.com/chromebook/answer/1700055?hl=en) — Chromebook file locations and file handling.
- [Google: Organize your files in Google Drive](https://support.google.com/drive/answer/2375091?hl=en) — browser-based folders and moving files.

> **Lab completion statement:** I can create a safe practice workspace, build a planned folder hierarchy, save six fictional sample files, organize them by purpose, find them again, distinguish Copy from Move, and audit the result without modifying unrelated records.

:::terms
file | File | A named item of stored information such as a text document | 
folder | Folder | A container for files and usually other folders | 
folder-system | Folder system | An intentional arrangement of folders for organizing work | 
folder-hierarchy | Folder hierarchy | The parent-child arrangement of folders at several levels | 
folder-tree | Folder tree | A diagram or display of folders and their nesting | 
root-folder | Root folder | The starting folder for the particular organization being discussed | 
parent-folder | Parent folder | The immediate container of a file or a subfolder | 
subfolder | Subfolder | A folder located directly or indirectly inside another folder | 
sibling-folders | Sibling folders | Folders that share the same immediate parent | 
path | Path | The sequence of folders used to reach an item | 
location | Location | The place in storage where an item can be found | 
destination | Destination | The location chosen to receive a moved or copied item | 
source | Source | The original location of a selected item | 
breadcrumb | Breadcrumb | A navigable series of folder names showing the current location | 
address-bar | Address bar | The area of a file manager that shows or accepts the current location | 
navigation-pane | Navigation pane | A side area listing available storage locations and folders | 
file-manager | File manager | An application for browsing and organizing files and folders | 
file-explorer | File Explorer | The standard file-management application in Windows | 
finder | Finder | The macOS application for browsing and organizing files | 
chromeos-files | Chromebook Files app | The app for managing accessible file locations on ChromeOS | 
practice-workspace | Practice workspace | An approved location used for harmless training tasks | 
new-folder | New Folder | A command for creating a folder within the selected parent | 
save | Save | Record the contents of a document in a chosen file | 
save-as | Save As | Choose a name or location or format when saving a document | 
filename | Filename | The name assigned to a file within its folder | 
file-extension | File extension | A suffix such as .txt that commonly identifies a file type | 
plain-text | Plain text | Text without rich font and layout formatting | 
naming-convention | Naming convention | A consistent pattern used to name files or folders | 
rename | Rename | Change the name of a file or folder | 
copy | Copy | Make another instance of a file while normally leaving the source intact | 
cut | Cut | Prepare a file or content for relocation via Paste | 
paste | Paste | Place copied or cut information into the chosen destination | 
move | Move | Relocate a file or folder from one location to another | 
delete | Delete | Remove an item according to the storage system rules | 
duplicate | Duplicate | An extra or repeated copy that may be confusing | 
shortcut | Shortcut | An item that references another item or location | 
selection | Selection | One or more chosen items ready for an action | 
context-menu | Context menu | A menu containing actions for the selected object or area | 
keyboard-shortcut | Keyboard shortcut | A key combination that invokes a command | 
drag-drop | Drag and drop | Moving an item by dragging it with a pointer | 
sort | Sort | Arrange a displayed list by a selected characteristic | 
search | Search | Look for files or folders by names or other properties | 
inbox | Inbox | Temporary area for new items awaiting organization | 
archive | Archive | Storage for completed work retained for future reference | 
classification | Classification | Assignment of an item to a meaningful category | 
verification | Verification | Checking that an action produced its intended result | 
audit | Audit | Systematic review of an outcome against stated requirements | 
permission | Permission | A rule about what an account may do with an item | 
read-only | Read-only | A state in which normal changes are restricted | 
cloud-storage | Cloud storage | File storage associated with a remote online service | 
cloud-sync | Cloud synchronization | Coordination of changed files between devices or locations | 
sync-status | Sync status | An indicator of whether online changes are current or pending | 
local-storage | Local storage | Storage on or directly associated with a device | 
onedrive | OneDrive | Microsoft online storage service integrated with File Explorer | 
google-drive | Google Drive | Google service for storing and organizing online files | 
shared-folder | Shared folder | A folder accessible to multiple authorized people | 
backup | Backup | A separately recoverable copy retained against loss of original data | 
recycle-bin | Recycle Bin | Windows area from which some deleted items can be restored | 
file-conflict | File conflict | A collision involving an existing file or folder name | 
ownership | Ownership | A relationship establishing control or responsibility for an item | 
retention-rule | Retention rule | A policy for how long information must be kept or removed | 
version | Version | A distinguishable state of a file across changes | 
accessibility | Accessibility | Usability for people with diverse abilities and access methods | 
vocabulary-tooltip | Vocabulary tooltip | An on-page short explanation provided for selected glossary words | 
:::
