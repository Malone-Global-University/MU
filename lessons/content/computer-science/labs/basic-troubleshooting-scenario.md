Beginner Practice Labs / Lab 9

## Lesson introduction

You have prepared a document for a community-learning workshop. Yesterday it was easy to find, but today it appears to be missing. A second problem follows: when you try to print the document, nothing comes out of the printer. You could start clicking buttons at random, reinstall applications, or ask someone to replace the computer. Those actions would be premature. A more reliable approach is to identify **what is actually failing**, protect the work already completed, and make **one small, safe test at a time**.

This is the **ninth and final MGU Beginner Practice Lab**. In the preceding labs you organized folders, wrote a document, built a spreadsheet, created a presentation, sent an attachment, scheduled an event, downloaded a file, and evaluated suspicious email. You will now combine those competencies to solve common technical problems without becoming a computer technician. The most important outcome is learning a repeatable process that works even when you do not know the answer immediately.

Troubleshooting does **not** mean experimenting recklessly until a problem disappears. It means using observations to make an informed decision, testing an appropriate next step, and checking whether the result is genuinely correct. Sometimes the correct solution is to stop and request help. A computer that smells of smoke, contains a swollen battery, displays signs of an account compromise, or holds irreplaceable work should not be treated like a harmless software inconvenience.

> **Lab deliverable:** Complete a troubleshooting record for six fictional scenarios, demonstrate the safe first steps for at least two scenarios on an authorized device or through a written simulation, and finish an integrated final case in which a file appears missing, a printer does not produce a page, and the learner must explain what was tested and what remains uncertain.

**Level:** Beginner · **Suggested study and lab time:** 100–130 minutes · **Recommended prior work:** Beginner Practice Labs 1–8 · **Equipment:** Computer or mobile device if authorized, notebook or blank document, optional harmless practice files, and access to the lesson · **Safety:** Practice only in your own workspace or an expressly permitted training environment. Do not delete data, change account security settings, reset devices, bypass administrator restrictions, or install repair software for this lesson. Every activity can be completed on paper.

### Learning objectives

After completing this lab, you should be able to:

1. Describe the difference between a [[symptom|symptom]], a possible [[cause|cause]], a [[test|test]], and a confirmed result.
2. Apply a six-part [[troubleshooting-cycle|troubleshooting cycle]] to everyday computer problems without making several unrelated changes at once.
3. Protect unsaved work and identify circumstances that require stopping or asking for immediate assistance.
4. Narrow a problem by checking its [[scope|scope]], reproducing it safely, and comparing it with a [[known-good|known-good]] example.
5. Perform basic, low-risk checks for files, software, printing, network connections, downloads, and online accounts.
6. Distinguish a local file, a synchronized cloud file, and a file that exists only in an online application.
7. Record useful observations and communicate an accurate, privacy-conscious [[support-request|support request]] to a teacher or help desk.
8. Complete six guided activities and a 30-question self-study knowledge check, including a multi-problem final scenario.

### Materials and safe preparation

- Use a notebook, a blank document, or the worksheet prompts below. Suggested title: `Lab 9 Troubleshooting Record`.
- If you choose to practice in Windows 11, open File Explorer with **Windows + E**. If you prefer another operating system, use its ordinary file manager or a paper-based scenario.
- Prepare a harmless practice file such as `workshop-notes.txt`; do **not** move, rename, or delete an important real document to make the exercise more realistic.
- You may view a printer's status or print queue if you have authorization. **Do not send repeated print jobs** to a shared or paid printer.
- Use fictional names, dates, and addresses in worksheets. Do not record passwords, recovery codes, real account numbers, complete customer records, or private organization messages.
- A help desk, supervisor, school administrator, or trusted support person may need to approve actions on a managed device. Written reasoning is a valid alternative to changing settings.

### On this page

- [1. What does troubleshooting mean?](#1-what-does-troubleshooting-mean)
- [2. Protect the work and record the symptom](#2-protect-the-work-and-record-the-symptom)
- [3. Narrow the problem with small tests](#3-narrow-the-problem-with-small-tests)
- [4. Safe troubleshooting in Windows 11](#4-safe-troubleshooting-in-windows-11)
- [5. Worked example: a workshop preparation problem](#5-worked-example-a-workshop-preparation-problem)
- [6. Troubleshooting on other devices and services](#6-troubleshooting-on-other-devices-and-services)
- [7. Guided practice: six diagnostic scenarios](#7-guided-practice-six-diagnostic-scenarios)
- [8. When to stop, escalate, and document](#8-when-to-stop-escalate-and-document)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Final completion review and further learning](#11-final-completion-review-and-further-learning)

## 1. What does troubleshooting mean?

[[troubleshooting|Troubleshooting]] is the organized process of investigating an observed problem, considering possible explanations, testing reasonable possibilities, and evaluating what happened. A beginner can troubleshoot without diagnosing an electronic component or using advanced commands. Everyday troubleshooting often begins with questions anyone can ask: **What changed? What still works? Where does the problem happen? What action was attempted? What message appeared?**

### A symptom is not the same as a cause

Suppose someone says, **"My document is gone."** The [[symptom|symptom]] is that the person cannot see the expected file where they looked. The actual cause could be a different save location, a changed filename, an unopened cloud account, an applied search filter, or a document that was never saved. It might also be a genuinely deleted file, but that cannot be concluded from the original sentence alone.

Likewise, **"The printer is broken"** may mean the printed page did not appear. The printer might be switched off, offline, out of paper, paused, connected to a different network, or simply not selected in the print dialog. The investigation should not assume a broken device without evidence.

| What someone reports | What is directly known | What remains unconfirmed |
| --- | --- | --- |
| "My file disappeared." | Expected file not visible in the location checked | Whether the file exists elsewhere, was renamed, or was deleted |
| "The internet is down." | A page or online action failed | Whether the device, network, one website, or account is affected |
| "The printer is broken." | Expected output did not appear | Whether the printer itself, queue, connection, or selected destination caused it |
| "My spreadsheet is wrong." | A displayed result differs from the expectation | Whether a source value, formula, format, or expectation is wrong |
| "Email does not work." | One mail operation did not complete | Whether the problem concerns sign-in, connection, attachment, delivery, or recipient |
| "The app froze." | Application did not respond as expected | Whether it is busy, inaccessible, or actually unresponsive |

### The six-part troubleshooting cycle

Use this cycle throughout the course. It is a **thinking method**, not a list of commands that must always be executed.

1. **Observe.** State the exact symptom, when it happened, and the expected result. Record any visible [[error-message|error message]].
2. **Protect.** Save accessible work, avoid destructive changes, and identify safety or privacy risks before continuing.
3. **Narrow.** Ask whether the issue affects one item, one application, one device, one network, or several people. Identify what still works.
4. **Test.** Choose one low-risk, reversible [[hypothesis|hypothesis]] to check; observe what changes. Do not stack several guesses.
5. **Verify.** Repeat the intended task and confirm the desired outcome. If the test fails, return to the evidence rather than claiming success.
6. **Document or escalate.** Record the result, or explain the unresolved problem clearly to an authorized helper.

A [[hypothesis|hypothesis]] is a possible explanation you can check. For example: "I may have saved `Workshop Notes` in Downloads instead of Documents." The test is not to delete or move folders; it is to search in the expected user locations and inspect a likely file. The outcome could support or weaken the hypothesis. One successful check is informative, but it does not always prove every underlying cause.

> **Essential principle:** Change **one thing at a time** when possible. If you restart, reinstall, rename, clear a queue, and change network settings all at once, you may not know which action helped—and some actions may create new problems.

### Four possible outcomes

A troubleshooting attempt may be **resolved**, **partly resolved**, **unresolved**, or **escalated**. It is acceptable to say, "I can open the file, but the print job is still waiting." That statement is more useful than "everything is fixed" or "nothing works." If you do not have permission to run a proposed test, record **not tested**, not **passed**.

| Outcome | What you can legitimately report | Example |
| --- | --- | --- |
| Resolved | Intended task now works and has been checked | Document reopens from the selected folder |
| Partly resolved | One problem is fixed but another persists | File found; print job still queued |
| Unresolved | Safe tests did not establish a working result | Browser still cannot reach the target site |
| Escalated | Issue handed to a responsible person with evidence | School help desk received error message and tested steps |

### Troubleshooting is a transferable workplace skill

People use the same reasoning when a shared document is missing, a slide deck opens on the wrong screen, a budget formula produces an unexpected total, a download cannot be located, or a video meeting invitation does not load. Good troubleshooting conserves time, preserves evidence, reduces unnecessary disruption, and helps another person reproduce the difficulty. The goal is **reliable work**, not simply making an error message disappear.

### What this lab does not teach

This beginner course does not require registry edits, Terminal or PowerShell repairs, driver replacement, account recovery bypasses, factory resets, firmware changes, dismantling devices, or third-party cleanup programs. Such actions may be legitimate in advanced support settings, but they carry risks and may require backups, documented procedures, specialist judgment, or administrator approval. Learn to recognize **when escalation is the correct troubleshooting action**.

## 2. Protect the work and record the symptom

The first minute of a problem can determine whether your work remains recoverable. Before testing, decide whether your next action could lose data or alter an important record. If a word-processing application is slow but still responds, use **Save** when possible. If a document is open in several windows, identify which copy contains the latest authorized changes. If a file is being edited collaboratively, do not force other people offline or overwrite shared versions as an experiment.

### Step 1: describe the expected result

A useful symptom statement specifies the task. Compare **"The computer is bad"** with **"At 2:15 p.m., selecting Print in the word processor placed a job in the queue, but the approved office printer did not produce a page; the file still opens normally."** The second statement gives a support person a starting point. It also separates a printing issue from a document-opening issue.

Record what was supposed to happen, what actually happened, and whether you received a message. If a dialog appears, copy its wording accurately into a safe note, omitting personal or secret details. A status such as **Paused** or **Offline** may matter more than a vague description such as "not working."

### Step 2: take an inventory of what is still safe

Before a change, answer four questions: Is work currently unsaved? Is the information backed up or synchronized? Is the device personal or managed? Could the next action expose data or cause an interruption for other people? A [[backup|backup]] is a separate recoverable copy; cloud [[synchronization|synchronization]] is not necessarily a backup. Deleting a synchronized file can sometimes propagate that deletion to other devices.

| Situation | Protect first | Action to avoid during this lab |
| --- | --- | --- |
| Word processor responds but document unsaved | Save the current authorized version | Force quitting just to see what happens |
| Spreadsheet has unexpected total | Preserve input values and record the displayed formula | Replacing several formulas without notes |
| Shared folder looks empty | Check identity, permissions, and view without altering files | Deleting or recreating the shared folder |
| Printer has many waiting jobs | Identify your own authorized job | Clearing an entire shared print queue |
| Browser displays a security warning | Stop the risky request and confirm the destination | Turning off protection to make a download work |
| Device overheats, smokes, or has battery swelling | Stop use and follow urgent safety procedures | Charging, opening, or repeatedly restarting it |

### Step 3: make an observation record

Use a simple [[troubleshooting-log|troubleshooting log]]. It can be a notebook page or text file. The fields do not need to be technical: **task, symptom, location, time, last change, test, result, and next step**. Do not include a password, full verification code, customer data, or a sensitive screenshot. On a managed device, follow local rules about sharing diagnostic information.

**Example record:**

```text
Task: Open workshop-notes.txt for the morning class
Expected: The saved practice notes appear in the Workshop folder
Observed: Folder appears empty when I first open Documents
Last known working: Opened yesterday afternoon
Possible explanation: I am viewing the wrong folder
Safe test: Check Downloads and the File Explorer search results
Result: Found workshop-notes.txt in Downloads; opened successfully
Status: Resolved for file access; save location clarified
Next step: Use a deliberate destination for future files
```

This sample is a model of careful communication. The student does not assert that the computer lost the document, claim deletion, or take unsupported recovery actions.

### Step 4: note what changed

A useful clue is a recent event: the learner saved under a different filename, switched accounts, traveled to another Wi-Fi network, connected a new printer, or opened a file in a different application. Ask **"What changed since this last worked?"** but do not assume that the last change caused the failure. Two events can occur together by coincidence.

Use nonintrusive checks first. Read the title bar, folder path, account label, printer destination, or network name. A [[status-indicator|status indicator]] such as a cloud icon, printer status, or sign-in banner can provide context, but the meaning depends on the application. When in doubt, read the service's official help rather than inventing an interpretation.

### Step 5: decide whether a restart is suitable

A normal device [[restart|restart]] can clear temporary problems, but it should not be the first action when valuable work is unsaved or when a device manages a critical process. Close applications normally, save changes, and make sure other users will not be interrupted. On a shared computer or managed workstation, obtain permission. A restart is **not** the same as a factory reset, and neither should be performed reflexively.

If the application is truly unresponsive, an authorized person may eventually need to close it. Forcing an application to quit can discard unsaved changes. If the device is failing physically, becoming unusually hot, or exhibiting electrical hazards, stop rather than repeatedly restarting it. Safety takes precedence over completing the worksheet.

### Step 6: leave a record of uncertainty

A good note can say: "The icon was dimmed, but I did not test the device because it belongs to another user." Avoid trying to make the log look more successful than it was. Clear limits are valuable evidence: **what you saw, what you tested, what you did not test, and why**. If you need assistance, these details help the next person take over without repeating risky attempts.

## 3. Narrow the problem with small tests

A common troubleshooting mistake is to jump from one failed action to a large conclusion. One webpage failing does not automatically mean the device has no internet connection. One missing document does not prove that every file has disappeared. One spreadsheet value being wrong does not mean the spreadsheet application is defective. You can make better decisions by narrowing the [[scope|scope]] of a problem.

### Begin with one item, one program, one device

Ask whether the issue appears in a single file, several files, one application, every application, one device, or every device in the same location. The answer determines the next reasonable test. If one Word document will not open but a new blank document opens, the observation points toward the original file, its format, or its permissions more than toward the whole computer. If all programs cannot reach online services, investigate connectivity or account policies rather than one particular website first.

| Question | Low-risk check | What the result suggests—not proves |
| --- | --- | --- |
| Is the issue limited to one file? | Open another harmless authorized file | Original file, format, or location may matter |
| Is one website affected? | Try a different known legitimate site | First site may be unavailable or blocked |
| Is only one application affected? | Try the same task in a permitted alternative | The application's settings or service may be involved |
| Is only one device affected? | Compare with another authorized device | The first device's connection or settings may matter |
| Is only one printer affected? | Review the selected destination and status | Printer selection or device state may be relevant |
| Is an account involved? | Inspect which authorized account is signed in | Wrong profile or insufficient access may explain the symptom |

Do not access someone else's account or device to make these comparisons. A **known-good test** uses an item you own or are authorized to inspect, and whose normal behavior is understood. You can also use a written case in place of a real test.

### A controlled test has four parts

1. **Question:** Is the missing file actually stored in Downloads?
2. **Proposed check:** Open Downloads and search for its exact name.
3. **Observation:** A file with that name appears; opening it shows the expected sample text.
4. **Conclusion:** The file is accessible, and the original location assumption was incorrect. Other unrelated file issues remain untested.

The conclusion follows from evidence and does not claim more than the test demonstrated. This is a basic form of [[verification|verification]], which is often more important than the number of solutions attempted.

### Reproduce safely, but do not recreate damage

[[reproduction|Reproducing]] a problem means repeating the same harmless action to see whether it fails again. If a document repeatedly opens as read-only, a learner might reopen it and observe the label. It would be inappropriate to delete the document or disable a security feature to reproduce the problem. If repeating an action costs money, sends a notification, modifies a shared record, or could expose private information, use a written simulation instead.

### Work from reversible actions toward specialist actions

A [[reversible-action|reversible action]] can be undone with little or no risk, such as returning to the intended folder or checking a printer selection before submitting a job. Some actions are partly reversible but disruptive: closing an application with unsaved edits, changing network settings, or canceling a print job. Others can be difficult or impossible to reverse: permanent deletion, data overwrites, factory reset, or wiping a device. The beginner's default is to **observe first and choose the least disruptive test that answers a meaningful question**.

| Lower-risk observation | More disruptive action to defer | Why deferral is sensible |
| --- | --- | --- |
| Check folder path and search | Run unknown file-recovery utility | Avoids unnecessary access and possible overwrites |
| Check selected printer | Remove all printer drivers | Configuration repair may affect other users |
| Confirm online account and Wi-Fi status | Reset network configuration | Reset may disrupt known networks or management settings |
| Inspect formula and source cells | Delete and rebuild spreadsheet | Preserves an audit trail and correct inputs |
| Open another harmless document | Uninstall the word processor | Tests whether the issue is isolated |
| Read a browser warning | Disable Safe Browsing or security controls | Retains protective checks while identifying the real problem |

### Separate connection, service, and account problems

A [[network-connection|network connection]] links the device to a network, but a visible Wi-Fi symbol does not guarantee internet access. A website can also be temporarily unavailable even when the connection works. An online service may be working but require a different signed-in account or permission. The same failed screen can result from different layers.

A safe distinction is: **Can I reach a known, trusted webpage? Does the relevant application sign in? Does only the particular file or service fail?** If you are using public Wi-Fi, the network may require an authorized sign-in page. If only a workplace resource fails, a policy, VPN, or account condition may be involved. Do not attempt to bypass network restrictions. An official network troubleshooter or support person may be appropriate later.

### Why one-change-at-a-time matters

Imagine a printer fails and you change its name, turn it off, cancel every queued job, install an unknown driver, and restart the computer. You have made five changes without knowing whether the original issue was a simple wrong destination. Now it may be harder to describe the original state. By contrast, inspecting the print dialog and discovering that **Save as PDF** was selected instead of the physical printer is an observation that gives a direct explanation without disruptive changes.

### Avoid confusing correlation with proof

If Wi-Fi starts working after you close a browser window, you cannot conclude that closing the window repaired Wi-Fi. The service may have recovered independently. Record the sequence accurately: "After reopening the browser, the page loaded; cause not confirmed." Appropriate uncertainty builds stronger troubleshooting habits than confident guessing.

## 4. Safe troubleshooting in Windows 11

Windows 11 includes familiar ways to inspect files, applications, networks, and printers. The purpose of this section is to teach **which basic controls answer which question**, not to memorize every screen. Menu wording can change after updates, and managed devices may hide or restrict features. If a control is unavailable, record that limitation rather than attempting to defeat it.

### Problem A: a file seems to be missing

Start with [[file-explorer|File Explorer]], the normal Windows application for viewing files and folders. Press **Windows + E**, or select File Explorer from the taskbar or Start menu. First check whether you are viewing the expected account and location. **Documents**, **Downloads**, and **Desktop** are common personal locations, but their physical paths can differ, especially when a cloud service backs up user folders.

1. In File Explorer, review the [[address-bar|address bar]] or [[breadcrumb|breadcrumb]] for your current location.
2. Select the expected parent folder and check whether a subfolder has a similar name.
3. If appropriate, inspect the **Downloads**, **Documents**, and other personal locations you are permitted to use.
4. Use File Explorer's search control and type a distinctive part of the expected filename. Search behavior depends on the current location and indexing; if a search finds nothing, try a clearly broader authorized location.
5. Review the result's name, file type, and location. Do not open an unfamiliar executable or an unexpected attachment merely because the filename resembles your document.
6. If the correct harmless file is found, open it in an expected application and confirm the contents. Only then record the location and plan an authorized copy or move if necessary.

**Example:** You expected `workshop-notes.txt` in Documents, but search finds it in Downloads. Opening it shows the exact practice sentences. The observed problem was a mistaken location assumption, not proven deletion. If an online app stores the document within its account rather than as a regular Windows file, use that app's authorized **Recent**, **Open**, or file-management view. A Windows search cannot be assumed to find every cloud-only document.

**If the file remains missing:** Stop before running recovery software, emptying recycle bins, or resetting cloud synchronization. Record the likely name, last known location, account, time, and what places were checked. If the file is important, ask the responsible support person about recovery options. A file's absence from one search result is not proof of permanent loss.

### Problem B: a program is slow or does not respond

A [[frozen-application|frozen application]] appears not to respond to ordinary input. But a large document may simply be busy opening, or the app may have a dialog hidden behind the main window. First wait briefly, check whether an alert is asking for a response, and see whether other parts of the device work normally. If the application responds, save work and close it normally before reopening.

1. Identify the application and the task that stopped working.
2. Determine whether one file causes the issue or whether the app behaves the same with another harmless file.
3. Observe any messages and whether the cursor, menus, or other apps still respond.
4. If the application recovers, save authorized changes, close normally, reopen, and retry the task.
5. If it remains stuck and work may be unsaved, seek an authorized decision about force closing; do not assume unsaved changes can be recovered.
6. If a normal, permitted restart is approved, preserve work in other applications first. Afterwards, verify the original task, not only whether the program icon opens.

Windows includes [[task-manager|Task Manager]] and app repair options, but those tools can end processes or alter software state. Using them is not required here. Learn to state the symptom accurately and escalate when ordinary controls do not respond. Do not download a third-party "speed booster" or untrusted installer to fix an application.

### Problem C: a document does not print

A [[print-job|print job]] is a request the computer sends toward a printer or an output destination. Before assuming hardware failure, inspect the **Print** dialog inside the application. Confirm the target. If **Microsoft Print to PDF** or **Save as PDF** is selected, the application may create a digital file instead of printing paper. A shared classroom printer may have several similar names, so selecting the correct authorized destination matters.

1. Confirm the document is saved and can be reopened before testing print output.
2. Use the application's **File → Print** or corresponding command to view the print settings without immediately submitting another job.
3. Check the selected [[printer-destination|printer destination]], page range, copy count, orientation, and preview.
4. If a job was already submitted, inspect the permitted [[print-queue|print queue]] and note any **Paused**, **Offline**, or error state.
5. Check visible, safe physical indicators such as printer power or paper. Do not open hot components, remove jammed media from inaccessible mechanisms, or work inside equipment without authorization.
6. On Windows 11, the official **Get Help** app can guide printer troubleshooting. A managed environment may instead direct you to its help desk.
7. If a single authorized test print is reasonable, run it once and record the output. Repeatedly clicking Print can create many copies or charges.

If another harmless file prints but the target does not, that narrows the issue toward the file or application. If nothing prints, the printer's status, connection, or managed service deserves attention. This comparison does not automatically identify a specific hardware fault. Never clear other people's jobs or reset a shared printer to complete this lesson.

### Problem D: a website will not load

A browser may display messages such as **This site can't be reached**, **No internet**, **Connection timed out**, or a sign-in request. Those phrases are observations that may have multiple causes. Check the web address for mistakes, verify the website is one you actually intend to visit, and try a second known, trusted site. Observe the Windows network status. A device can show a Wi-Fi connection while still lacking usable internet access.

1. Identify the exact page or online task that fails; do not repeatedly submit financial or account forms.
2. Recheck the address and whether the website is legitimate.
3. Open a separate, familiar, trusted website that does not require private information.
4. Compare: does only the original site fail, or do all tested sites fail?
5. Observe the Windows taskbar network indicator and the current approved network name if you have permission.
6. If the entire connection appears affected, Windows 11 provides a **Network and Internet** troubleshooter through **Get Help**, although exact prompts depend on the system.
7. Report the tested scope. Do not change router settings, turn off security software, or bypass a school or employer network policy.

A result of "another familiar website loads" shows the device can reach at least that site; it does not demonstrate that every part of the network is healthy. A result of "neither site loads" suggests a broader issue but still does not by itself prove the wireless router is broken. If a work or school resource fails, consult approved IT instructions before changing connection or sign-in settings.

### Problem E: a downloaded file cannot be found or opened

Check the browser's [[download-history|download history]] or recent-download panel and the configured download location. A download can be **in progress**, **interrupted**, **blocked**, **completed**, or saved in an unexpected folder. Do not override a browser's safety warning just to finish the assignment. File type also matters: a PDF should open in a suitable viewer, while an installer or script requires additional caution and is outside this beginner lab.

If a safe sample PDF downloads successfully but a particular file does not, the issue may involve the website, permissions, security protections, available storage, or the particular file. Chrome's official help distinguishes file download errors by cause, including insufficient storage. Use the browser's stated error as evidence and seek authorized support for blocked or policy-restricted downloads rather than disabling protection.

### Problem F: the numbers in a spreadsheet appear wrong

An unexpected budget value is often an information problem rather than a software failure. Check the original data, units, cells, and formulas. For example, a learner expects a total of 100 when two expenses are 40 and 60, but the sheet displays 40. That result might arise because the formula includes only the first amount or a second amount was entered as text.

1. Write down the expected value and the numbers used to calculate it manually.
2. Select the result cell and examine the [[formula-bar|formula bar]] or the application's equivalent formula display.
3. Inspect the exact [[cell-reference|cell references]] and any fixed values without editing them.
4. Compare against a known-good practice example.
5. If authorized, correct **one** practice-cell issue and observe whether the result changes as expected.
6. Recalculate or reopen the saved worksheet to verify that the correction persists.

A display such as `$100.00` versus `100` can be a format difference, not a math difference. Conversely, a visually plausible amount can come from an incorrect formula. Do not overwrite an organization's production budget while practicing. Use the fictional sample sheet from an earlier lab or a written worksheet.

### Problem G: an email attachment or calendar change seems missing

For email, distinguish a message in [[drafts-folder|Drafts]], a message shown in [[sent-folder|Sent]], and confirmation that another person received the intended file. A message in Sent supports that the service accepted a send operation, but it does not guarantee delivery, reading, or correct attachment permissions. Check the recipient, expected attachment name, file size or presence, and whether the item was a real attachment or an online sharing link. Do not resend repeatedly without checking; duplicate messages can confuse recipients.

For calendars, distinguish a [[local-calendar|local calendar]], a signed-in shared or online calendar, and an event visible to an invited attendee. A change may be saved in one calendar but not the other. Open the event and inspect the chosen calendar, start and end time, time zone if relevant, and whether the intended change persisted. Do not invite a real person or modify a shared organization's schedule for practice.

### Quick-reference table for Windows 11

| Symptom | First observation | Appropriate safe next test | When to ask for help |
| --- | --- | --- | --- |
| Missing file | Folder path and filename | Search permitted personal locations | Important file cannot be found after safe checks |
| App not responding | Unsaved work and visible dialogs | Wait, save if possible, retry harmless task | Closing risks losing work or app remains unusable |
| No printed page | Print destination and queue status | Confirm correct printer before a single test | Managed queue or device shows persistent errors |
| One webpage fails | Typed address and exact error | Open another trusted site | Account, security, or organization restrictions appear |
| Download fails | Browser download message | Read official help for that error | File blocked or policy limits download |
| Spreadsheet total wrong | Input cells and formula | Compare with manual expected result | Shared data or formulas cannot be modified safely |
| Sent attachment missing | Draft or Sent state and attachment indicator | Review message and file-sharing method | Confidentiality or delivery issue requires follow-up |
| Calendar event missing | Signed-in account and selected calendar | Open event in the intended calendar | Shared schedule or time-zone conflict persists |

## 5. Worked example: a workshop preparation problem

A learner is preparing the fictional **Community Learning Day** session introduced in earlier labs. They need to locate a short document and print one copy. Three separate claims are initially made: "The file is missing," "printing is broken," and "the internet is not working." Instead of treating all three as one mystery, the learner uses the troubleshooting cycle to investigate each symptom.

### Case background

The learner created `community-workshop-notes.txt`, saved a budget spreadsheet named `workshop-budget.xlsx`, and intended to print notes for the class. The computer is a personal Windows 11 laptop, but the printer is shared with a training center. The learner has permission to view the printer's status and submit **one authorized test page**, not to change administrator settings or clear other users' jobs. The learner's notes contain only fictional information.

### Stage 1: observe the missing-file claim

The learner opens Documents and does not see `community-workshop-notes.txt`. Instead of creating a replacement immediately, the learner checks the path shown in File Explorer. They realize they are looking inside a folder named `Old Projects`. They return to the Documents level, search for the distinctive `community-workshop` portion of the filename, and find the document in a personal `Community Learning Day` folder.

The learner opens the file, reads the practice sentence, and records its actual location. No repair program was needed. The status is **resolved for access**. The learner does not claim the file was deleted or recovered from a disk because no such thing occurred.

**Observation record:**

```text
Problem 1: Cannot see community-workshop-notes.txt
Expected: File is available for the workshop
First view: Documents / Old Projects
Test: Search the authorized Documents location
Result: File found in Documents / Community Learning Day
Verification: Opened and read correct practice text
Conclusion: Wrong folder was initially viewed
Status: Resolved
```

### Stage 2: separate printing from file access

The document opens normally. In the Print dialog, however, the selected destination is **Save as PDF**, not the physical printer. The learner checks the location and has permission to choose the training center's approved printer. After a single carefully previewed print request, the page prints. This evidence supports the conclusion that the initial print action targeted the wrong output destination.

If the same document still did not print after selecting the physical printer, the next appropriate observation would be the printer status or own job in the print queue. The learner should not send ten more jobs, reinstall a printer driver, or turn off the center's equipment. A failed print is not permission to use another person's printer or to change shared settings.

**Observation record:**

```text
Problem 2: No paper appeared after Print
Expected: One paper copy at the training center printer
Test: Inspect Print dialog without submitting again
Result: Save as PDF was selected
Safe change: Select approved physical printer
Verification: One authorized test page printed
Conclusion: Initial output destination was not paper printer
Status: Resolved
```

### Stage 3: test the internet claim independently

A browser tab shows a page that did not load. The learner checks the address and finds a typographical error. A known, trusted educational website opens correctly. The learner corrects the address and the desired public page now loads. This shows the observed failure was associated with the original requested address. It would be incorrect to say **all internet access was down**.

If a legitimate service had remained unavailable, the learner could record **one site fails; another loads** and check for an official service notice through a trusted channel. The learner should not disable browser protections or try suspicious mirror sites to make a page appear.

### Combined evidence table

| Claim | Safe test performed | Observed result | Supported conclusion |
| --- | --- | --- | --- |
| Document disappeared | Check full path and search Documents | File opens in intended folder | File was accessible; original folder view was wrong |
| Printer is broken | Inspect output destination | Save as PDF was selected; approved printer then produced one page | Initial print destination caused the observed paper-output problem |
| Internet is down | Check URL and second trusted site | Second site and corrected address load | Initial webpage request was wrong; general outage not established |

### What makes the worked example good?

The learner did not guess that the operating system was corrupted. They did not install any utility. They separated three symptoms into three small questions, protected the files, used ordinary controls, verified a real result, and stopped when the task succeeded. Their record is useful because it states specific observations. Another person can follow it without needing to know every detail of Windows.

### An alternative ending: unresolved printing

Suppose the approved printer remains offline after checking the destination and visible status. A proper record would say: **File access confirmed; document opens; print destination confirmed; printer shows Offline; no authorized settings changes made; referred to training-center support.** This is still competent troubleshooting. The learner has narrowed the issue and avoided disrupting shared equipment. Being unable to repair hardware is not a failure of the lab.

:::answer Show the worked-example reasoning
**Problem 1:** The learner was viewing the wrong folder. Opening the correct harmless document confirmed access; deletion was never established.

**Problem 2:** A digital PDF destination was selected. A single authorized test to the intended printer produced the page. The output destination explains the original result.

**Problem 3:** The original address was incorrect and another trusted site worked. The evidence does not support the claim that all internet access failed.

**General lesson:** Record exactly what each test established, not what the first complaint suggested.
:::

## 6. Troubleshooting on other devices and services

The six-part process works on a Mac, Chromebook, phone, tablet, and cloud service, even though the menus differ. The principle is to use the **normal interface for that platform**, preserve data, avoid risky workarounds, and follow managed-device rules. Do not apply a Windows menu label as though it were universal.

### macOS: Finder and application behavior

On a Mac, [[finder|Finder]] is the standard file manager. Check the active location, use Finder search or an authorized application's Recent list, and confirm whether a document is in local storage or [[icloud-drive|iCloud Drive]]. If an application stops responding, Apple's guidance includes attempting normal quit, using **Force Quit** when necessary, reopening, and restarting if appropriate. **Force Quit can lose unsaved work**; protect accessible data first and do not force quit simply as a learning experiment. A Mac's standard **Print** dialog also shows a destination and preview or related output controls.

### Chromebook: Files and account-aware storage

ChromeOS uses the **Files** app for accessible local and cloud files. A document might live in **Downloads**, another local folder, or a signed-in [[google-drive|Google Drive]] account. Check which location is open. If a cloud document fails, distinguish an unavailable internet connection from an account-permission issue or one particular file. Browser download history may clarify whether a file was saved locally. Never try to circumvent a school Chromebook's policies or install unauthorized extensions.

### iPhone, iPad, and Android

Phones and tablets have multiple distinct ways to store work. A photo may be in a photo library, a file may be in the device's Files app, and a cloud document may appear only in a signed-in app. On iPhone and iPad, the Files app exposes supported local and cloud locations; on Android, a file manager such as Files by Google may show downloaded and stored files. Search within the relevant authorized app before concluding a file is lost. Account selection and sync status remain important; be careful not to delete shared or synchronized information.

### Browser-based applications

A word processor or spreadsheet running in a browser may save directly to an online account, not as a regular file in Downloads. A visible title such as `Workshop Notes` does not by itself prove the file was exported to the computer. Inspect the app's saved state, document list, and selected account. If offline operation is supported, pending changes may require reconnecting before they appear elsewhere. Do not assume that "I can see it on screen" and "it is saved on this device" are equivalent statements.

### Shared printers and organizational devices

Schools and workplaces commonly restrict printer settings, network access, updates, software installation, and application permissions. Such restrictions are not necessarily faults. A student can still make useful observations: Which printer was selected? Was a job submitted? Did an error appear? Is the output confidential? When the next step requires administrator rights or affects other users, stop and escalate. The learner should not request another person's password or use a colleague's account to bypass controls.

### Compare platforms without inventing precise steps

| Task | Windows 11 starting point | Other supported starting points | Shared principle |
| --- | --- | --- | --- |
| Locate file | File Explorer | Finder, Files app, cloud app's file list | Confirm account, name, and location |
| Confirm download | Browser downloads panel | Browser's downloads list or file manager | Check status and safe destination |
| Inspect print destination | Application Print dialog | Print dialog or system print sheet | Verify target and preview before sending |
| Review stuck app | Save, wait, and assess response | Normal app controls; permitted support steps | Protect unsaved work |
| Check connection | Network indicator and Get Help | Network settings and approved help | Separate network failure from site or account failure |
| Confirm online document | Service's document list | Same account on approved browser or device | Check actual saved state and permissions |
| Request support | School or organization help desk | Authorized platform or service support | Provide observations without secrets |

### Accessibility is part of troubleshooting

A learner using a [[screen-reader|screen reader]], large text, voice input, a switch, or keyboard navigation may encounter a problem that a mouse user does not see. For example, a button may be visually present but inaccessible through a particular navigation method. Do not assume the learner made a mistake. Record the interface element, interaction method, and observed response, and seek an approved accessible alternative. **A troubleshooting solution counts only if it enables the intended user to complete the task.**

### Keep updates and tools in proportion

Official support guidance may recommend updating software or restarting a device for some problems. These actions can be appropriate, but on a managed computer they may be scheduled or restricted. Avoid using a system update as an explanation for every symptom. If installing updates would interrupt a class or risk unsaved work, document the need and coordinate an approved time. If a problem concerns account security, follow the provider's official security and recovery procedures rather than a random online repair video or unsolicited support contact.

## 7. Guided practice: six diagnostic scenarios

These activities develop a habit of stating **what is known, what is only suspected, which test is safest, what the result shows, and whether the issue is actually resolved**. They do not require a live failure on your computer. For each activity, write a compact troubleshooting record before expanding the answer. The fictional names and sample files are safe examples, not instructions to alter real documents or accounts.

### Activity 1: the missing workshop notes

**Scenario:** Avery created a short practice document yesterday. Today the Documents folder appears empty. Avery says, "All my work has been erased." The last time the file was seen, Avery had been working in a folder named `Practice-Lab`. The computer is signed in to a personal Windows 11 account. Avery has not searched elsewhere.

**Your task:** Determine what Avery knows, develop a safe first test, and write a conclusion that would be justified **if** the file is found in Downloads. Do not assume Avery is correct about deletion.

1. Write one sentence stating only the observed symptom.
2. Identify two possible explanations that do not require data loss.
3. State which normal file-manager control could check the current location.
4. Select one safe search or navigation step.
5. Describe the contents or filename you would verify before claiming the file is found.
6. Write a separate conclusion for the case in which the search finds nothing.

**Practice record:**

| Field | Your response prompt |
| --- | --- |
| Expected | Where did Avery expect the document? |
| Observed | What did Avery actually see? |
| Possible explanations | What could be wrong besides deletion? |
| Safe test | Which location or search would you check? |
| Evidence of success | What must be true before claiming the correct file is found? |
| Stop or escalate | What would you do if important work is still missing? |

:::answer Show Activity 1 model answer
**Observed:** Avery does not see the expected practice document in the Documents view examined. No evidence yet proves deletion.

**Possible explanations:** Avery may be in the wrong subfolder, may have saved the document to Downloads, may have changed the filename, or may be signed into a different account than before.

**Safe test:** Check the File Explorer path, navigate to `Practice-Lab`, and search the authorized personal locations for a distinctive filename. Do not empty the Recycle Bin, reset synchronization, or install recovery software.

**If found:** Open the file with an appropriate application and confirm its expected harmless contents. State, "Document found in Downloads and verified; previous folder assumption was incorrect."

**If not found:** Record where the search was performed and which account was used. If the document matters, stop disruptive attempts and request authorized recovery assistance. The result remains **unresolved**, not proven erased.
:::

### Activity 2: the budget total looks wrong

**Scenario:** Jordan's fictional budget has three expense values: `25`, `40`, and `35`. The total should be `100`, but the spreadsheet displays `65`. Jordan considers deleting the spreadsheet and rebuilding it. A teacher instead suggests checking the cells and the total formula.

**Your task:** Explain how Jordan should compare the expected sum to the displayed value and identify one plausible formula omission. No financial records or real account data are required.

1. Calculate the correct total independently.
2. Record the wrong displayed total as the observed symptom.
3. Suggest a formula or input issue that could produce `65`.
4. Name the application feature used to inspect a cell's formula.
5. Describe a controlled correction using practice data, if allowed.
6. Explain how reopening the saved sheet helps verify the result.

**Hypothetical practice layout:**

| Cell | Content | Meaning |
| --- | --- | --- |
| B2 | `25` | Expense 1 |
| B3 | `40` | Expense 2 |
| B4 | `35` | Expense 3 |
| B5 | `=SUM(B2:B3)` | Incomplete total formula |

The intended example total formula is `=SUM(B2:B4)`. If your spreadsheet displays formulas rather than calculated numbers, check the application's view and calculation settings before declaring an error. The exercise only requires explaining the logic.

:::answer Show Activity 2 model answer
**Expected total:** `25 + 40 + 35 = 100`.

**Observed:** The spreadsheet shows `65`, which equals `25 + 40`. The sample formula `=SUM(B2:B3)` excludes cell `B4`.

**Safe test:** Inspect the result cell's formula and all three source values. In an authorized fictional worksheet, change only the formula to `=SUM(B2:B4)`, then verify the displayed total is `100` and persists after saving and reopening.

**Supported conclusion:** This particular worked example had an incomplete range. In another sheet, the same displayed number could have a different cause, so checking is still necessary. Deleting the whole spreadsheet is unnecessary and risks losing data.
:::

### Activity 3: the printer produces no paper

**Scenario:** Morgan selects **Print** for a workshop handout. No paper appears. The Print dialog is still available, and Morgan notices that the selected destination reads **Microsoft Print to PDF**. The printer is shared, and Morgan is not allowed to clear the queue or change system configuration.

1. Write the observed symptom without assuming the printer is broken.
2. Explain what a PDF output destination normally does.
3. Identify the safest place to verify the destination before sending another request.
4. State how many authorized physical test copies are appropriate for this exercise.
5. Explain what to document if the actual shared printer remains **Offline**.
6. State which proposed action would be inappropriate: inspect the destination, preview the pages, or delete all jobs in the shared queue.

:::answer Show Activity 3 model answer
**Observed:** No paper arrived after Morgan selected Print.

**Reasonable explanation:** The selected output is a PDF file destination, not the physical printer. The request may have prepared a digital file rather than a paper page.

**Safe test:** Check the Print dialog's selected destination, page preview, and copy count. If Morgan has explicit permission, select the approved printer and submit **one** test page, then verify whether paper actually appears.

**If still offline:** Record the named printer and its status and contact the training center's authorized support person. Do **not** clear a shared queue or change another user's settings. "No paper" alone never justified declaring hardware failure.
:::

### Activity 4: one website fails, but others load

**Scenario:** Taylor tries to visit an educational resource and sees **This site can't be reached**. Taylor says the entire internet connection is down. Without signing in or entering data, Taylor opens a second trusted website successfully. Other devices in the room have not been checked.

1. Identify what the second test proves and what it does not prove.
2. List at least two possible reasons the first page failed.
3. Describe a safe check involving the original address.
4. Explain why the browser's security warnings must not be disabled just to reach the site.
5. Write a one-sentence status update for a support person.
6. Explain how your conclusion would change if several independent trusted sites also failed.

**Comparison table:**

| Observation | Supported inference | Unsupported leap |
| --- | --- | --- |
| One website fails | That request was unsuccessful | Every network connection is broken |
| Different trusted site loads | At least one web connection works | Every service and account works |
| Address contains a typo | Input error may explain the failure | The device had a virus |
| Multiple trusted sites fail | Broader connection problem becomes plausible | Router is definitely defective |

:::answer Show Activity 4 model answer
**Supported conclusion:** Taylor can reach at least one trusted website. A complete network outage on that device is not established.

**Possible reasons:** Incorrect URL, temporarily unavailable service, blocked or restricted resource, a problem specific to one domain, or an application-related error.

**Safe test:** Recheck the spelling of the intended address and consult a known official source or bookmark. Avoid unknown mirrors and never disable security warnings as a convenience.

**Support update:** "The requested site gives a connection error, but another familiar site opens; I checked the original address and did not change network settings."

**If many sites fail:** Investigate device and connection status through approved network controls, or ask for help. Do not conclude router failure without further evidence.
:::

### Activity 5: the email attachment is not there

**Scenario:** Riley prepared a harmless practice file named `session-outline.txt` and sent an email to Riley's own authorized account. The message appears in Sent, but when Riley opens the received message, there is no attached file. The outgoing text contains the words "Please see the attachment." Riley wants to resend the message five times.

1. Separate the issue of message delivery from the issue of attachment presence.
2. Identify what the Sent folder can establish and what it cannot establish.
3. State which detail Riley should check in the outgoing message before sending anything else.
4. Explain how a cloud-sharing link differs from a true file attachment.
5. Describe the safest next action when no attachment indicator is present.
6. Explain how to protect recipients from duplicate email or unintended exposure.

:::answer Show Activity 5 model answer
**Observed:** A self-addressed email arrived, but the expected file was not attached. The body text did not create an attachment.

**Safe test:** Open the Sent copy and inspect the attachment indicator or file listing. Confirm that Riley used the application's Attach control, selected `session-outline.txt`, and allowed the upload to finish before sending. If the intended item was a cloud-sharing link, inspect the access policy using the trusted service rather than assuming all recipients can open it.

**Next action:** If permitted, prepare one corrected message to Riley's own practice address and verify the file is present before sending. Do not send multiple copies to a real group. A message in Sent does not by itself prove the recipient has the file.
:::

### Activity 6: integrated final scenario

**Scenario:** Sam will run a fictional community-learning session. Sam reports three difficulties: the session plan seems missing, a printer did not produce a handout, and a class website appears unavailable. The following clues are supplied in order. You are the helper, but you have no administrator permission and must not touch shared equipment.

| Clue | Evidence available |
| --- | --- |
| A | Sam is viewing `Documents / Archive`, not the planned `Documents / Workshop` folder |
| B | Search finds `session-plan.txt` in `Documents / Workshop`; opening it shows the expected practice text |
| C | The Print dialog selects **Save as PDF** as its output destination |
| D | Sam has permission to submit one test page to the approved classroom printer |
| E | A familiar trusted website loads, but the typed class-page address contains an extra letter |
| F | Sam is asked to install an unknown "instant repair" application to prevent future problems |

**Your task:** Produce a short [[incident-summary|incident summary]] using the six-part cycle for **each** of the three symptoms, followed by one overall recommendation. Use the worksheet below or your own note. Do not claim an action occurred unless the scenario says it did or your written response clearly labels it as a proposed test.

1. Record the starting symptom for the file, printer, and web tasks separately.
2. State the possible cause suggested by clues A and B and whether the file is verified as accessible.
3. Identify the print destination problem suggested by clue C, then propose the permitted test in clue D. **No actual test result is provided**, so choose the correct current status.
4. Explain what clue E says about the original internet claim.
5. Reject or escalate the unsupported application in clue F, giving one concrete safety reason.
6. Write a final report distinguishing **resolved**, **likely explanation but not yet verified**, and **unresolved** findings.

**Integrated scenario worksheet:**

| Issue | Observation | Safe action or test | Verification | Accurate current status |
| --- | --- | --- | --- | --- |
| Session plan | File not visible in Archive | Check planned folder and search | Correct file opened | Resolved for access |
| Handout | No page arrived | Inspect printer destination; propose one approved test | No physical test result supplied | Pending verification |
| Class webpage | Typed URL fails | Inspect URL; compare with trusted site | Trusted site works; typo found | Likely address mistake; original page must be retested |

**Optional extension:** In a personal practice document, write your final report in six to ten sentences. Save it in an authorized `Beginner Practice Labs` folder, close and reopen the file, and confirm the text persists. If you use a paper worksheet, write the same report by hand. Do not submit screenshots showing actual user accounts or sensitive folders.

:::answer Show Activity 6 model report
**File access — resolved:** Sam initially viewed Archive instead of Workshop. Search located `session-plan.txt` in the planned Workshop folder, and the expected fictional text opened successfully. The missing-file claim is not supported by the evidence.

**Printing — pending verification:** The original print destination was Save as PDF rather than the classroom printer. That is a plausible explanation for no paper. Sam may submit one approved physical test only after reviewing the destination and preview. The scenario does **not** tell us whether the page printed, so it is incorrect to write "printer repaired" or "printer broken."

**Website — likely input issue:** A second trusted site loads, and the class URL contains an extra letter. The learner should correct the address through a trusted source and confirm the intended page opens. A general internet outage is not established.

**Unsafe suggestion — rejected:** An unknown instant-repair application is unnecessary and could introduce malware, unwanted changes, or privacy risk. Use ordinary built-in checks and trusted official support instead.

**Overall:** One issue is confirmed resolved, one has an unverified proposed print test, and one has a plausible address correction pending direct verification. This distinction makes the report useful and honest.
:::

### Activity scoring and instructor observations

An instructor can evaluate each record for accurate observation, useful test selection, safety, evidence, and clarity. A student who correctly says **"not yet verified"** should receive credit for judgment rather than lose credit for failing to invent a result. In an inaccessible or managed environment, accept a logically correct written response as an equivalent demonstration of the decision process.

| Component | Strong demonstration | Improvement needed |
| --- | --- | --- |
| Symptom statement | Specific task, observed result, and context | Vague statement such as "computer bad" |
| Safety | Protects work and respects permissions | Resets, deletes, or bypasses controls without approval |
| Scope | Separates one task from all systems | Assumes device-wide failure from one symptom |
| Test | Single relevant, low-risk check | Several unrelated changes at once |
| Verification | Confirms correct task result or labels unknown | Claims success without evidence |
| Support record | Clear, concise, privacy-aware | Missing actions, results, or important limits |

## 8. When to stop, escalate, and document

Good judgment includes knowing which problems are unsuitable for a beginner's experimentation. The objective is not to repair every device. It is to identify a safe next action while keeping people, information, and systems protected. A stopped test can be a correct decision when the available evidence suggests danger, privacy risk, administrative restrictions, or possible permanent data loss.

### Safety conditions that require immediate caution

- **Electrical or physical hazard:** Smoke, burning smells, damaged cords, visible liquid near electronics, battery swelling, unusual heat, or exposed wiring require stopping use and following the site's safety procedure. Do not open the device or continue charging a visibly damaged battery.
- **Potential security incident:** A suspicious pop-up demanding payment, a request for a password or one-time code, an unexplained security alert, or a possible malicious attachment requires cautious containment and authorized reporting. Do not click the alert's offered "support" phone number or send credentials.
- **Important missing data:** If an irreplaceable work file cannot be found, avoid deleting folders, reinstalling software, changing sync settings, or generating large quantities of new files on a device where specialist recovery may be needed.
- **Shared or regulated information:** Student records, patient data, customer information, personnel files, and financial documents may be subject to strict access and handling rules. Do not copy them into a personal account or upload them to a random troubleshooting website.
- **Managed technology:** A workplace or school computer may prohibit changes to software, accounts, network settings, or printer configuration. Follow policy and request support.
- **Money or external side effects:** Avoid unapproved repeated printing, duplicate payments, repeated invitations, repeated form submissions, and destructive retry loops.

### A problem is not permission to bypass controls

An access-denied message may indicate that the user's account lacks permission; it does not authorize using someone else's account. A blocked download may be a protective action, not a defect to remove. A printer appearing unavailable does not permit clearing everyone's queue. If the proposed solution conflicts with an organization's rules, stop and ask the authorized owner or administrator. The distinction between being **unable** and **unauthorized** matters.

### Write a support request that another person can use

A [[support-request|support request]] should communicate the affected task, device or application, observed symptom, relevant context, tests already performed, exact non-sensitive error text, and current impact. Ask for help without claiming an unverified cause. For example:

> "I can open the workshop document, but an approved print attempt did not produce a page. The print destination was the classroom printer, and the job appears paused. I did not clear the shared queue or change printer settings. Could the support team review the printer status?"

This is more actionable than a demand to replace the printer. Include a screenshot only if permitted and after removing or obscuring personal data. A screenshot can accidentally show browser tabs, document names, account information, or private messages. Do not publish it to an open forum for troubleshooting.

### A compact decision guide

| What you observe | Safe response | Do not do |
| --- | --- | --- |
| Wrong folder or selected output destination | Correct the navigation or selection, then verify | Reset computer or reinstall software |
| Harmless app is slow but responsive | Allow time, save, and retry normal action | Force close before considering unsaved work |
| Shared printer shows Offline | Record status and contact authorized support | Clear other people's jobs or reset shared equipment |
| Browser blocks suspicious download | Read warning and stop risky action | Bypass protection for convenience |
| Account sign-in fails or asks for secret | Use official account recovery or help desk | Share verification codes with unsolicited contacts |
| Device shows physical damage or hazardous heat | Stop use and follow emergency or facility process | Continue charging or dismantle device |
| Important data appears missing | Preserve current state and seek recovery guidance | Delete backups or run unknown recovery tools |
| No permission to test | Write the proposed test and mark not tested | Use unauthorized accounts or privileges |

### Record results rather than celebrating too soon

A successful-looking screen does not always establish that the underlying task is complete. A document may look saved but exist only in the wrong folder; a spreadsheet may show a plausible total but include the wrong range; a mail message may appear in Sent but lack the attachment; an event may display in one calendar but not in another. Verification should match the user's **actual goal**: opening the correct file from its intended location, seeing one paper copy, obtaining the correct calculation, confirming a recipient-ready attachment, or finding the event in the right calendar.

When the outcome is uncertain, say so. A brief status such as **"Download attempted; browser shows Interrupted; no completed file verified"** communicates more than **"download fixed"**. The record should help the next person choose a new test without repeating unnecessary steps.

### Accessibility and equitable assessment

A learner may require additional time, a different pointing device, screen magnification, keyboard-only instructions, captioned help, or a paper simulation. None of these approaches changes the troubleshooting logic. Evaluate **reasoning, safe handling, and verification**, not speed or the ability to access a control that the learner's device does not expose. When a recommended interface action is inaccessible, document it as a design or workflow limitation and seek an approved alternate route.

### Final practical assessment rubric

The final lab assessment has a suggested total of 100 points. It evaluates the diagnostic process rather than the amount of technical repair performed. Scores may be based on written evidence if live testing is unavailable or inappropriate.

| Assessment area | Points | Full-credit evidence |
| --- | --- | --- |
| Accurate symptom descriptions | 15 | Describes all three final-case problems without assuming causes |
| Work, safety, and permission protection | 15 | Preserves data, avoids unknown software, respects shared printer rules |
| Scope and plausible hypotheses | 15 | Separates file, print, and website issues |
| Appropriate individual tests | 20 | Selects relevant, minimal-risk checks for each problem |
| Verification discipline | 20 | Confirms file access; correctly labels printer and page-test uncertainties |
| Clear documentation and escalation | 15 | Produces readable final status with appropriate unresolved next steps |
| **Total** | **100** | **Competency demonstrated through evidence and judgment** |

**Suggested interpretation:** 90–100 indicates independent beginner-level reasoning; 75–89 indicates competent reasoning with minor omissions; 60–74 indicates that further guided practice would help; under 60 indicates that the learner should repeat the diagnostic cycle with support. These are instructional suggestions, not an accredited certification or a record of device-repair qualification.

### Troubleshooting checklist to remember

Before closing any support ticket or classroom worksheet, ask: **What was expected? What actually happened? Is the work safe? What still works? Which single test was done? What did it show? Did the original task succeed? What remains untested? Who owns the next action?** If you can answer those questions without exposing private information, you have learned a method that will remain useful as software changes.

## 9. Essential vocabulary

The terms below describe practical reasoning and the everyday computer interfaces used in this lab. A few technical terms are included only to help you understand warnings or support instructions; you are not expected to perform specialist repair operations. Selected terms in the teaching sections also have interactive dotted-underlined definitions.

### Troubleshooting reasoning

- **Troubleshooting:** A systematic process of observing a problem, testing explanations, verifying results, and documenting outcomes.
- **Symptom:** An observable sign that something did not happen as expected.
- **Cause:** The condition or event that actually produced a problem.
- **Hypothesis:** A possible explanation that can be tested against observations.
- **Test:** A controlled check designed to answer a specific question.
- **Troubleshooting cycle:** Repeated steps of observing, protecting, narrowing, testing, verifying, and documenting a problem.
- **Scope:** The particular items, accounts, devices, or services affected by a problem.
- **Known-good example:** A permitted file, service, or task already understood to work normally.
- **Verification:** Checking whether the intended result actually occurred.
- **Error message:** Text or a status presented by software to describe a failed or interrupted action.
- **Status indicator:** Symbol or label communicating an application's or device's current state.
- **Troubleshooting log:** Written record of symptoms, tests, observations, results, and next steps.
- **Reproduction:** Repeating a safe action to see whether the same problem occurs again.
- **Reversible action:** A change that can normally be undone without major disruption.
- **Support request:** A clear description of a problem and relevant evidence sent to an authorized helper.
- **Incident summary:** Concise statement of the events, observations, actions, and current status of an issue.
- **Resolved:** State in which the intended task has been restored and its result verified.
- **Unresolved:** State in which the intended task still does not have a verified working result.
- **Escalation:** Referring an issue to a responsible person or specialist with supporting information.
- **Observation:** Something directly noticed or measured during troubleshooting.
- **Expected result:** What should have happened if the task worked normally.
- **Actual result:** What was observed after an action was attempted.
- **Baseline:** Previously observed working condition used for comparison.
- **Comparison test:** Check using another safe item, service, or device to narrow the affected scope.
- **One-change test:** Trial in which one relevant factor is changed while others are kept stable.

### Safety, permissions, and information

- **Risk:** Possibility and consequence of harm from an action or condition.
- **Permission:** Authorization to access or modify a system, data, or service.
- **Managed device:** Computer or phone subject to an organization's administrative controls.
- **Administrator:** Authorized person or account with elevated system-management responsibilities.
- **Privacy:** Protection and appropriate control of personal or confidential information.
- **Sensitive data:** Information that requires special protection because disclosure can cause harm.
- **Backup:** Separate recoverable copy of information maintained against loss or damage.
- **Synchronization:** Coordinating changed data among connected devices or cloud locations.
- **Cloud storage:** Remote storage maintained through an online service or account.
- **Local storage:** Data held on or associated with the device being used.
- **Account:** Authorized user identity for an operating system or online service.
- **Sign-in:** Process of establishing access to an account through approved credentials.
- **Account permission:** Rule determining whether an identity can view or change an online or local resource.

### Files and storage

- **File:** Named stored item containing information such as a document or picture.
- **Folder:** Container organizing files and usually other folders.
- **File Explorer:** Windows application for navigating and managing stored files and folders.
- **Finder:** macOS application for navigating files, folders, and storage locations.
- **Address bar:** Interface control showing or accepting a current location.
- **Breadcrumb:** Series of folder labels displaying the current path through a hierarchy.
- **Path:** Sequence of locations identifying a file or folder.
- **Filename:** The name used to identify a stored file.
- **File extension:** Suffix often associated with a file format such as .txt or .pdf.
- **Downloads folder:** Common default location for files saved from web and other sources.
- **Download history:** Browser view listing attempted, completed, or interrupted file downloads.
- **Download status:** Indication whether a download is completed, blocked, pending, or interrupted.
- **Cloud-only file:** Item represented in an online account that may not have a full downloaded local copy.

### Printing, networks, and applications

- **Print job:** Request sent to an output destination for printing or document generation.
- **Print queue:** List of waiting, active, or paused printing requests.
- **Printer destination:** Device or virtual output chosen in an application's Print dialog.
- **Print preview:** View showing the expected printed page before submission.
- **Save as PDF:** Output method that creates a PDF file rather than directly producing a paper page.
- **Offline printer:** Printer status indicating it cannot currently complete ordinary connected output.
- **Network connection:** Link between a device and a network service or other device.
- **Wi-Fi:** Wireless local networking technology.
- **Router:** Network device that forwards traffic between different networks.
- **Website:** Collection of resources available through web addresses.
- **URL:** Address used to locate a specific online resource.
- **Browser:** Application used to access and interact with websites.
- **Browser warning:** Notice that a website, file, or action may involve risk.
- **Get Help:** Windows support application offering guided assistance and troubleshooters.
- **Frozen application:** Program that does not respond to expected input.
- **Restart:** Orderly shutdown and startup of a device or application.
- **Force Quit:** Action that ends an unresponsive application without normal closing behavior.
- **Task Manager:** Windows tool displaying running processes and related system information.

### Spreadsheets, email, and calendars

- **Formula:** Spreadsheet expression that calculates a result.
- **Formula bar:** Spreadsheet interface area that displays or edits the selected cell's formula.
- **Cell reference:** Spreadsheet address identifying a cell such as B3.
- **Range:** Group of spreadsheet cells named or selected together.
- **Manual check:** Independent nonautomated calculation or observation used for comparison.
- **Attachment:** File included with an email or other message.
- **Drafts folder:** Mail location for composed messages not yet sent.
- **Sent folder:** Mail location displaying messages processed as sent by the service.
- **Cloud-sharing link:** URL granting access to an online file under the service's sharing rules.
- **Local calendar:** Calendar data stored or maintained on the device or its account context.
- **Calendar event:** Saved schedule item with time and other details.

### Accessibility, safety, and escalation

- **Screen reader:** Assistive technology providing spoken or braille output from interface content.
- **Keyboard navigation:** Using keys rather than pointer movement to operate interfaces.
- **Accessibility:** Design and support that enable people with varied abilities to use technology.
- **Service outage:** Temporary failure or unavailability of an online service.
- **Incident:** Event that may interrupt operations or compromise systems or information.
- **Safe mode:** Special operating state sometimes used for diagnostics and not required for this beginner lab.
- **Factory reset:** Device operation that restores an initial configuration and may remove data.
- **Malware:** Software intended to harm systems or gain unauthorized access.
- **Phishing:** Deceptive messaging intended to obtain information, money, or unsafe actions.
- **Verification code:** Short code used in approved account authentication or recovery processes.
- **Help desk:** Authorized point of contact for technology support.
- **Rubric:** Set of criteria and point values used to assess work.
- **Practice simulation:** Training exercise that uses fictional facts rather than risking live systems.
- **iCloud Drive:** Apple's cloud file storage service available in supported apps and devices.
- **Google Drive:** Google's cloud storage service for account-managed files.

## 10. Knowledge check

Select **one** answer per question. Choose the action or statement most strongly supported by the situation. The interactive dashboard will check the answers and show feedback; source Markdown contains the marked answers, so this is a self-study assessment, not a secure graded examination. Read the explanation even when your first answer is correct.

:::quiz
? 1. Someone says "my file vanished" because they cannot see it in Documents. What is directly known?
- [x] They did not see it in the location checked.
- [ ] The storage drive is damaged.
- [ ] The file was permanently deleted.
! A missing item in one folder view is a symptom; deletion and hardware damage require evidence.

? 2. Before restarting a computer with an open, responsive document, what matters most?
- [ ] Restart immediately without looking at the document.
- [x] Save authorized unsaved changes and consider other running work.
- [ ] Delete temporary folders to speed up the restart.
! Protecting accessible work prevents a routine troubleshooting test from causing avoidable data loss.

? 3. Why do troubleshooters normally change one factor at a time?
- [ ] It guarantees every problem will be fixed.
- [ ] It eliminates the need to verify outcomes.
- [x] It helps connect an observed result to the specific test.
! Changing several settings together makes it hard to know which action had an effect.

? 4. A webpage fails to load. Which initial comparison best narrows the scope?
- [x] Try a different familiar, trusted website.
- [ ] Install an unknown browser repair program.
- [ ] Turn off every browser warning.
! A second trusted site gives evidence about whether the issue is isolated or broader.

? 5. A trusted website opens, but a class webpage still fails. What can you conclude?
- [ ] The class webpage must be malicious.
- [x] At least one web connection works; the class-page failure remains to investigate.
- [ ] Every internet service is functioning properly.
! One working connection limits the claim of a complete outage but does not prove all services work.

? 6. File Explorer search finds no matching file. What is the best report?
- [ ] The file no longer exists anywhere.
- [ ] Every backup is corrupt.
- [x] The file was not found in the searched scope; broader authorized checks may be needed.
! Search results depend on location, filters, and account context; absence alone does not prove loss.

? 7. Which Windows 11 shortcut ordinarily opens File Explorer?
- [x] Windows + E
- [ ] Ctrl + P
- [ ] Alt + F4
! Windows + E opens File Explorer, a suitable place to begin checking user folders.

? 8. Which interface helps confirm the folder currently being viewed?
- [ ] Browser bookmark star
- [x] File Explorer address bar or breadcrumb
- [ ] Printer paper tray
! The path display helps distinguish the intended folder from another similarly named location.

? 9. Why might Print produce no paper when Save as PDF is selected?
- [ ] The keyboard has stopped working.
- [ ] The document must have been deleted.
- [x] The selected destination creates a digital PDF instead of using a paper printer.
! Print dialogs can target virtual PDF destinations rather than physical devices.

? 10. A managed classroom printer says Offline after a safe status check. What next?
- [x] Record the status and ask authorized support.
- [ ] Reset the printer for the entire building.
- [ ] Remove all drivers from a shared computer.
! Escalation protects shared systems when the learner has no authority for configuration changes.

? 11. Why should you avoid repeatedly clicking Print on a shared printer?
- [ ] It always erases the document.
- [x] Repeated submissions can create duplicates, charges, and disruption.
- [ ] It repairs every offline printer automatically.
! One controlled test is more useful than many unobserved print submissions.

? 12. Fictional expense values are 25, 40, and 35. What is their total?
- [ ] 65
- [ ] 90
- [x] 100
! The manually verified sum is 25 + 40 + 35 = 100.

? 13. A sample spreadsheet stores expenses in B2, B3, and B4. Which formula totals all three?
- [x] =SUM(B2:B4)
- [ ] =SUM(B2:B3)
- [ ] =B2
! The B2:B4 range includes the first, second, and third expense cells.

? 14. What is the safest first step when a spreadsheet result seems wrong?
- [ ] Delete the worksheet and guess again.
- [x] Inspect the expected calculation, input cells, and formula without deleting data.
- [ ] Change all formulas simultaneously.
! Reviewing evidence isolates the mistake while preserving the source values.

? 15. An email body says "attached," but the received message has no file. What should you check?
- [ ] Whether the message has a friendly greeting.
- [ ] Whether the subject uses capital letters.
- [x] The actual attachment or shared-link indicator in the composed and sent message.
! Mentioning an attachment in text does not attach a file; the file or link must be verified.

? 16. A message appears in Sent. What does this NOT guarantee?
- [x] That the recipient received and can open the intended attachment.
- [ ] That the sender used a mail service.
- [ ] That a send action was recorded by the account.
! Sent status is not proof of successful receipt, appropriate sharing permission, or file accessibility.

? 17. An event is visible in one calendar but not another. What is a sensible check?
- [ ] Delete every event in both calendars.
- [x] Confirm the signed-in account and selected calendar.
- [ ] Turn off account security permanently.
! Events can belong to different calendars or accounts; identify the intended destination first.

? 18. An app appears frozen with unsaved work. Which response is safest?
- [ ] Immediately force quit all applications.
- [ ] Uninstall the app before checking the document.
- [x] Assess whether it is still responding and preserve work before considering force close.
! Force close can lose unsaved changes; ordinary observation and saving come first.

? 19. What is an important risk of Force Quit or ending a process?
- [x] Unsaved changes may be lost.
- [ ] It always erases the entire hard drive.
- [ ] It automatically backs up every document.
! Abnormal closing may prevent the application from completing a normal save.

? 20. You have no permission to test a school network setting. What status should your worksheet use?
- [ ] Passed because the setting probably works.
- [x] Not tested; requires authorized support.
- [ ] Resolved because you know the menu name.
! A proposed check is not an observed result; respect the organization's authorization boundaries.

? 21. A browser blocks a suspicious download. What is the appropriate beginner response?
- [ ] Disable browser security to finish the lab.
- [ ] Install a random download manager.
- [x] Do not bypass the warning; verify the source or seek approved assistance.
! A protective block may be working as intended; removing safeguards increases risk.

? 22. A laptop battery appears swollen and the case is unusually hot. What should you do?
- [x] Stop use and follow an authorized physical safety procedure.
- [ ] Continue charging until troubleshooting succeeds.
- [ ] Open the device and puncture the battery.
! Physical or electrical hazards are not appropriate for beginner software troubleshooting.

? 23. Why is cloud synchronization not automatically a backup?
- [ ] Synchronization can never transfer documents.
- [x] A deletion or change may synchronize to other locations too.
- [ ] Cloud accounts cannot store folders.
! A separate recoverable backup and synchronization fulfill different purposes.

? 24. An important file remains missing after approved searches. What should you avoid?
- [ ] Writing down the last known filename.
- [ ] Recording the folders already checked.
- [x] Installing unknown recovery software or making disruptive changes without guidance.
! Preserving data and the current state may be important when specialist recovery is needed.

? 25. Someone says they can fix an account issue if you send a one-time sign-in code. What should you do?
- [x] Refuse to share the code and use an official recovery or support route.
- [ ] Send the code if they sound confident.
- [ ] Post the code to a public support forum.
! Verification codes are security secrets and unsolicited requests for them are unsafe.

? 26. Before sharing a troubleshooting screenshot, what should you check?
- [ ] Whether it shows as many browser tabs as possible.
- [x] Whether it exposes private information and whether sharing is authorized.
- [ ] Whether your password is visible so support can test it.
! A screenshot can reveal names, messages, tabs, or account data; limit and redact it.

? 27. A scenario says the print destination was corrected but gives no physical test result. What is the status?
- [ ] Printing is confirmed fixed.
- [ ] The printer is permanently defective.
- [x] Printing is pending verification.
! A plausible cause and an unperformed test do not equal a confirmed working outcome.

? 28. One website URL contains a typo, and a different trusted site loads. Which statement is best?
- [x] The typo is a plausible cause; a complete connection outage has not been shown.
- [ ] The router must be replaced.
- [ ] All websites are definitely available.
! Evidence should narrow the conclusion to the observed website request.

? 29. How should you verify a troubleshooting fix?
- [ ] Trust that the disappearance of an error message means everything works.
- [x] Repeat the original authorized task and check the intended result.
- [ ] Skip testing if you changed more than one setting.
! Verification concerns the user's actual task, not merely whether a dialog disappeared.

? 30. What makes a helpful support request?
- [ ] A statement that all technology is broken.
- [ ] A copy of the user's password and recovery codes.
- [x] Specific symptom, relevant context, safe tests, results, limits, and next step.
! Actionable, privacy-conscious evidence lets support continue without repeating guesses.

:::

:::answer Show the knowledge-check answer key
1. **A — They did not see it in the location checked.** A missing item in one folder view is a symptom; deletion and hardware damage require evidence.
2. **B — Save authorized unsaved changes and consider other running work.** Protecting accessible work prevents a routine troubleshooting test from causing avoidable data loss.
3. **C — It helps connect an observed result to the specific test.** Changing several settings together makes it hard to know which action had an effect.
4. **A — Try a different familiar, trusted website.** A second trusted site gives evidence about whether the issue is isolated or broader.
5. **B — At least one web connection works; the class-page failure remains to investigate.** One working connection limits the claim of a complete outage but does not prove all services work.
6. **C — The file was not found in the searched scope; broader authorized checks may be needed.** Search results depend on location, filters, and account context; absence alone does not prove loss.
7. **A — Windows + E** Windows + E opens File Explorer, a suitable place to begin checking user folders.
8. **B — File Explorer address bar or breadcrumb** The path display helps distinguish the intended folder from another similarly named location.
9. **C — The selected destination creates a digital PDF instead of using a paper printer.** Print dialogs can target virtual PDF destinations rather than physical devices.
10. **A — Record the status and ask authorized support.** Escalation protects shared systems when the learner has no authority for configuration changes.
11. **B — Repeated submissions can create duplicates, charges, and disruption.** One controlled test is more useful than many unobserved print submissions.
12. **C — 100** The manually verified sum is 25 + 40 + 35 = 100.
13. **A — =SUM(B2:B4)** The B2:B4 range includes the first, second, and third expense cells.
14. **B — Inspect the expected calculation, input cells, and formula without deleting data.** Reviewing evidence isolates the mistake while preserving the source values.
15. **C — The actual attachment or shared-link indicator in the composed and sent message.** Mentioning an attachment in text does not attach a file; the file or link must be verified.
16. **A — That the recipient received and can open the intended attachment.** Sent status is not proof of successful receipt, appropriate sharing permission, or file accessibility.
17. **B — Confirm the signed-in account and selected calendar.** Events can belong to different calendars or accounts; identify the intended destination first.
18. **C — Assess whether it is still responding and preserve work before considering force close.** Force close can lose unsaved changes; ordinary observation and saving come first.
19. **A — Unsaved changes may be lost.** Abnormal closing may prevent the application from completing a normal save.
20. **B — Not tested; requires authorized support.** A proposed check is not an observed result; respect the organization's authorization boundaries.
21. **C — Do not bypass the warning; verify the source or seek approved assistance.** A protective block may be working as intended; removing safeguards increases risk.
22. **A — Stop use and follow an authorized physical safety procedure.** Physical or electrical hazards are not appropriate for beginner software troubleshooting.
23. **B — A deletion or change may synchronize to other locations too.** A separate recoverable backup and synchronization fulfill different purposes.
24. **C — Installing unknown recovery software or making disruptive changes without guidance.** Preserving data and the current state may be important when specialist recovery is needed.
25. **A — Refuse to share the code and use an official recovery or support route.** Verification codes are security secrets and unsolicited requests for them are unsafe.
26. **B — Whether it exposes private information and whether sharing is authorized.** A screenshot can reveal names, messages, tabs, or account data; limit and redact it.
27. **C — Printing is pending verification.** A plausible cause and an unperformed test do not equal a confirmed working outcome.
28. **A — The typo is a plausible cause; a complete connection outage has not been shown.** Evidence should narrow the conclusion to the observed website request.
29. **B — Repeat the original authorized task and check the intended result.** Verification concerns the user's actual task, not merely whether a dialog disappeared.
30. **C — Specific symptom, relevant context, safe tests, results, limits, and next step.** Actionable, privacy-conscious evidence lets support continue without repeating guesses.
:::

## 11. Final completion review and further learning

You have completed the instructional sequence of **nine Beginner Practice Labs**. The earlier labs taught individual everyday tasks; this capstone asks you to combine them and respond constructively when a task does not go as planned. You are not expected to become a systems administrator. You are expected to notice the symptom, protect the work, narrow the scope, run an appropriate small test, verify the original goal, and communicate the remaining issue responsibly.

### Your final lab submission

Prepare one document or paper worksheet named `Lab 9 Troubleshooting Record` containing an answer to all six guided activities, the integrated final scenario, and a short reflection. Your reflection should identify one troubleshooting habit you will adopt at school, at work, or on a personal device. If an instructor requires an upload, use the approved destination; do not publish private system logs or account screenshots.

### Completion checklist

- I can state a symptom without guessing a cause.
- I can identify unsaved work, shared equipment, physical danger, and security concerns before changing anything.
- I can distinguish a file-location issue from a deleted file, and a printer-output selection from hardware failure.
- I can test whether one website is affected without assuming all internet access is down.
- I can inspect a simple spreadsheet formula and verify a calculation using independent arithmetic.
- I can distinguish an email in Sent from a verified attachment and a calendar event from the calendar account that stores it.
- I can record one safe test at a time and describe its observed outcome.
- I can label an issue resolved, pending verification, unresolved, or escalated based on actual evidence.
- I can explain why unknown repair tools, security bypasses, resets, and shared-system changes are inappropriate without approval.
- I can give an authorized support person a concise report without exposing private information.

### Reliable references for further learning

- [Microsoft Support: Fix File Explorer if it will not open or start](https://support.microsoft.com/en-us/windows/experience/fileexplorer/fix-file-explorer-if-it-won-t-open-or-start) — ordinary File Explorer checks and further official guidance.
- [Microsoft Support: Fix Wi-Fi connection issues in Windows](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows) — network troubleshooting and Windows Get Help.
- [Microsoft Support: Fix printing problems in Word, Excel, or other apps](https://support.microsoft.com/en-us/windows/hardware/printer/fix-printing-problems-in-word-excel-or-other-apps) — comparing app and printer behavior.
- [Microsoft Support: Windows troubleshooters](https://support.microsoft.com/en-us/support/get-help/windows-troubleshooters) — built-in guided troubleshooting options.
- [Google Chrome Help: Fix file download errors](https://support.google.com/chrome/answer/2898334?hl=en-GB) — interpreting browser download errors.
- [Apple Support: If an app freezes or quits unexpectedly on Mac](https://support.apple.com/guide/mac-help/if-an-app-freezes-or-quits-unexpectedly-mchlp2579/mac) — Mac application guidance and Force Quit precautions.

### Return to the MGU course

[Beginner Practice Labs course index](/department/computer-science/basic-computer-skills/beginner-practice-labs/) · [Basic Computer Skills](/department/computer-science/basic-computer-skills/)

> **Course completion statement:** You have finished the **instructional content of Lab 9**, the final planned Beginner Practice Lab. Successful quiz work and a documented practical scenario establish beginner troubleshooting practice; they do not by themselves certify technical repair expertise or confirm institutional publication.

:::terms
troubleshooting | Troubleshooting | A systematic process of observing a problem, testing explanations, verifying results, and documenting outcomes | 
symptom | Symptom | An observable sign that something did not happen as expected | 
cause | Cause | The condition or event that actually produced a problem | 
hypothesis | Hypothesis | A possible explanation that can be tested against observations | 
test | Test | A controlled check designed to answer a specific question | 
troubleshooting-cycle | Troubleshooting cycle | Repeated steps of observing, protecting, narrowing, testing, verifying, and documenting a problem | 
scope | Scope | The particular items, accounts, devices, or services affected by a problem | 
known-good | Known-good example | A permitted file, service, or task already understood to work normally | 
verification | Verification | Checking whether the intended result actually occurred | 
error-message | Error message | Text or a status presented by software to describe a failed or interrupted action | 
status-indicator | Status indicator | Symbol or label communicating an application's or device's current state | 
troubleshooting-log | Troubleshooting log | Written record of symptoms, tests, observations, results, and next steps | 
reproduction | Reproduction | Repeating a safe action to see whether the same problem occurs again | 
reversible-action | Reversible action | A change that can normally be undone without major disruption | 
support-request | Support request | A clear description of a problem and relevant evidence sent to an authorized helper | 
incident-summary | Incident summary | Concise statement of the events, observations, actions, and current status of an issue | 
resolved | Resolved | State in which the intended task has been restored and its result verified | 
unresolved | Unresolved | State in which the intended task still does not have a verified working result | 
escalation | Escalation | Referring an issue to a responsible person or specialist with supporting information | 
observation | Observation | Something directly noticed or measured during troubleshooting | 
expected-result | Expected result | What should have happened if the task worked normally | 
actual-result | Actual result | What was observed after an action was attempted | 
baseline | Baseline | Previously observed working condition used for comparison | 
comparison-test | Comparison test | Check using another safe item, service, or device to narrow the affected scope | 
single-change-test | One-change test | Trial in which one relevant factor is changed while others are kept stable | 
risk | Risk | Possibility and consequence of harm from an action or condition | 
permission | Permission | Authorization to access or modify a system, data, or service | 
managed-device | Managed device | Computer or phone subject to an organization's administrative controls | 
administrator | Administrator | Authorized person or account with elevated system-management responsibilities | 
privacy | Privacy | Protection and appropriate control of personal or confidential information | 
sensitive-data | Sensitive data | Information that requires special protection because disclosure can cause harm | 
backup | Backup | Separate recoverable copy of information maintained against loss or damage | 
synchronization | Synchronization | Coordinating changed data among connected devices or cloud locations | 
cloud-storage | Cloud storage | Remote storage maintained through an online service or account | 
local-storage | Local storage | Data held on or associated with the device being used | 
account | Account | Authorized user identity for an operating system or online service | 
sign-in | Sign-in | Process of establishing access to an account through approved credentials | 
account-permission | Account permission | Rule determining whether an identity can view or change an online or local resource | 
file | File | Named stored item containing information such as a document or picture | 
folder | Folder | Container organizing files and usually other folders | 
file-explorer | File Explorer | Windows application for navigating and managing stored files and folders | 
finder | Finder | macOS application for navigating files, folders, and storage locations | 
address-bar | Address bar | Interface control showing or accepting a current location | 
breadcrumb | Breadcrumb | Series of folder labels displaying the current path through a hierarchy | 
path | Path | Sequence of locations identifying a file or folder | 
filename | Filename | The name used to identify a stored file | 
file-extension | File extension | Suffix often associated with a file format such as .txt or .pdf | 
downloads-folder | Downloads folder | Common default location for files saved from web and other sources | 
download-history | Download history | Browser view listing attempted, completed, or interrupted file downloads | 
download-status | Download status | Indication whether a download is completed, blocked, pending, or interrupted | 
cloud-only-file | Cloud-only file | Item represented in an online account that may not have a full downloaded local copy | 
print-job | Print job | Request sent to an output destination for printing or document generation | 
print-queue | Print queue | List of waiting, active, or paused printing requests | 
printer-destination | Printer destination | Device or virtual output chosen in an application's Print dialog | 
print-preview | Print preview | View showing the expected printed page before submission | 
save-as-pdf | Save as PDF | Output method that creates a PDF file rather than directly producing a paper page | 
printer-offline | Offline printer | Printer status indicating it cannot currently complete ordinary connected output | 
network-connection | Network connection | Link between a device and a network service or other device | 
wi-fi | Wi-Fi | Wireless local networking technology | 
router | Router | Network device that forwards traffic between different networks | 
website | Website | Collection of resources available through web addresses | 
url | URL | Address used to locate a specific online resource | 
browser | Browser | Application used to access and interact with websites | 
browser-warning | Browser warning | Notice that a website, file, or action may involve risk | 
get-help | Get Help | Windows support application offering guided assistance and troubleshooters | 
frozen-application | Frozen application | Program that does not respond to expected input | 
restart | Restart | Orderly shutdown and startup of a device or application | 
force-quit | Force Quit | Action that ends an unresponsive application without normal closing behavior | 
task-manager | Task Manager | Windows tool displaying running processes and related system information | 
formula | Formula | Spreadsheet expression that calculates a result | 
formula-bar | Formula bar | Spreadsheet interface area that displays or edits the selected cell's formula | 
cell-reference | Cell reference | Spreadsheet address identifying a cell such as B3 | 
range | Range | Group of spreadsheet cells named or selected together | 
manual-check | Manual check | Independent nonautomated calculation or observation used for comparison | 
attachment | Attachment | File included with an email or other message | 
drafts-folder | Drafts folder | Mail location for composed messages not yet sent | 
sent-folder | Sent folder | Mail location displaying messages processed as sent by the service | 
cloud-link | Cloud-sharing link | URL granting access to an online file under the service's sharing rules | 
local-calendar | Local calendar | Calendar data stored or maintained on the device or its account context | 
calendar-event | Calendar event | Saved schedule item with time and other details | 
screen-reader | Screen reader | Assistive technology providing spoken or braille output from interface content | 
keyboard-navigation | Keyboard navigation | Using keys rather than pointer movement to operate interfaces | 
accessibility | Accessibility | Design and support that enable people with varied abilities to use technology | 
service-outage | Service outage | Temporary failure or unavailability of an online service | 
incident | Incident | Event that may interrupt operations or compromise systems or information | 
safe-mode | Safe mode | Special operating state sometimes used for diagnostics and not required for this beginner lab | 
factory-reset | Factory reset | Device operation that restores an initial configuration and may remove data | 
malware | Malware | Software intended to harm systems or gain unauthorized access | 
phishing | Phishing | Deceptive messaging intended to obtain information, money, or unsafe actions | 
verification-code | Verification code | Short code used in approved account authentication or recovery processes | 
help-desk | Help desk | Authorized point of contact for technology support | 
rubric | Rubric | Set of criteria and point values used to assess work | 
practice-simulation | Practice simulation | Training exercise that uses fictional facts rather than risking live systems | 
icloud-drive | iCloud Drive | Apple's cloud file storage service available in supported apps and devices | 
google-drive | Google Drive | Google's cloud storage service for account-managed files | 
:::
