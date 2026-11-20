Basic Computer Skills / Computer Troubleshooting Basics

## Lesson 3: Frozen Apps and Slow Computers

A document stops responding when you click Save. A web browser takes several seconds to switch tabs. The pointer still moves, but a program no longer accepts typing. Or perhaps everything feels slow, even though no single application seems broken. These experiences are frustrating, yet they do not always indicate that a computer is failing. They may be caused by a temporary software problem, a busy background task, too many open programs, limited working memory, low storage space, an update, or another condition that needs careful observation.

This lesson teaches you to distinguish **one frozen app** from **a computer that is slow overall**, to choose a safe first response, to use familiar operating-system controls, and to record what actually changed. You will practice with observation-only exercises before considering actions that might close an app or interrupt unsaved work. The objective is not to become a repair technician. It is to make accurate, low-risk decisions instead of repeatedly clicking, guessing, installing questionable utilities, or turning off a computer without a plan.

**Level:** Beginner · **Estimated study time:** 65–90 minutes · **Prerequisites:** Lessons 1–2 recommended · **Practice equipment:** A Windows 11 PC, Mac, or Chromebook if available; a notes app or paper. No activity requires freezing a real app, installing software, or changing protected settings.

> **Essential idea:** First identify whether the problem affects **one application, several applications, or the whole computer**. Protect unsaved work. Choose the least disruptive action that fits what you observed, and verify whether the original problem is resolved.

### Learning objectives

By the end of the lesson, you should be able to:

1. Distinguish a frozen app, a slow app, a slow computer, and a temporarily busy computer.
1. Recognize common causes of reduced performance without assuming a single diagnosis.
1. Follow a safe response sequence that prioritizes unsaved work and reversibility.
1. Locate Task Manager on Windows, Force Quit or Activity Monitor on Mac, and Task Manager on Chromebook.
1. Explain what CPU, memory, storage, and background activity tell you—and what they cannot prove.
1. Identify risky performance advice and recognize when organizational or professional help is needed.
1. Document a symptom, one safe test, its result, and an appropriate next step.

### On this page

- [1. Recognize the problem](#1-first-figure-out-what-is-slow-or-frozen)
- [2. Protect your work](#2-protect-your-work-before-taking-action)
- [3. Recover from a frozen app](#3-recover-from-a-frozen-app-step-by-step)
- [4. Understand slow performance](#4-why-computers-and-apps-become-slow)
- [5. Observe system activity](#5-observe-performance-with-built-in-tools)
- [6. Use a decision workflow](#6-follow-a-safe-troubleshooting-workflow)
- [7. Guided practice](#7-guided-practice-seven-low-risk-activities)
- [8. Common mistakes](#8-common-mistakes-and-misconceptions)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-further-learning-and-next-steps)

## 1. First figure out what is slow or frozen

### What does “frozen” mean?

A [[frozen-app|frozen app]] is an application that has stopped responding to an action you reasonably expect it to perform. You may click a button and see no result, type without seeing characters appear, or notice a “Not responding” message. An app can be genuinely unresponsive, but a long operation can sometimes **look** like a freeze. A browser may be waiting for a slow webpage; a photo program may be processing a large file; a document app may be completing a save operation.

A [[slow-computer|slow computer]] behaves differently. It continues to respond, but ordinary actions such as opening a menu, switching windows, or starting an app take noticeably longer than usual. Slow performance may affect one program or many. A computer that takes time to complete a substantial task is not necessarily malfunctioning.

The first question is not “How do I fix it?” It is **“What exactly is happening?”** That distinction narrows your choices.

| What you observe | What it may indicate | Good first check | Avoid jumping to |
| --- | --- | --- | --- |
| One app will not respond; other apps work | Problem may be limited to one application | Check whether the app is processing, saving, or displaying a message | Restarting the entire computer immediately |
| Only one website or browser tab is slow | Website, extension, tab, connection, or browser workload | Test a different trusted tab or site without submitting private data | Assuming the whole computer is broken |
| Several apps are slow at the same time | Shared resource demand, storage, updates, or device limitations | Check whether the whole system responds; observe built-in performance indicators | Installing a random “PC booster” |
| Mouse pointer moves but the app does not | Individual app may be stuck | Try a different window and check for a hidden dialog | Repeatedly clicking the same button |
| Keyboard, pointer, and menus do not respond | Wider system hang, disconnected input, or device problem | Check power and input devices; allow a reasonable interval if an update is underway | Repeated forced power-offs |
| Fan runs loudly and the computer feels warmer | Device may be working hard or having a cooling issue | Check for blocked vents and visible warning signs without opening equipment | Covering vents or using improvised cooling methods |
| Computer is slow immediately after startup | Updates, startup apps, login tasks, or device limitations | Let expected startup activity settle, then observe whether it improves | Disabling unfamiliar services |

A [[symptom|symptom]] is what you can see or experience. A [[cause|cause]] is the underlying reason. “The spreadsheet is unresponsive” is a symptom; “the spreadsheet is waiting for a large calculation” is one possible cause. Do not record a guess as a confirmed fact.

### Four practical categories

**Category A: One application is unresponsive.** Other apps, the Start menu, Dock, or Chromebook shelf still respond. Your best initial actions are local to the affected application, especially if a document contains unsaved work.

**Category B: One application is slow but usable.** The app eventually opens menus and accepts input. Consider whether it is processing a large file or using an online service. Save when possible, reduce unnecessary concurrent work, and observe before escalating.

**Category C: Most of the device is slow.** Several unrelated apps open slowly; switching windows takes longer; typing may lag in different programs. You may need to look at the device's overall [[resource-usage|resource use]], storage situation, active updates, and startup workload.

**Category D: The whole device is unresponsive.** Standard controls do not respond. Follow the safer, escalating response described in Lesson 1 rather than assuming forceful power interruption is harmless. First account for updates, unsaved work, accessible controls, and any warning signs.

### A temporary delay is not proof of failure

Computers complete many tasks in the background. A program may spend time writing a large file, downloading authorized updates, searching documents, building thumbnails, encrypting data, or synchronizing files. During a heavy task, the computer may feel less responsive. If there is visible progress, a status message, or a recognized workload, allowing a reasonable amount of time may be safer than interrupting it.

At the same time, waiting endlessly is not a troubleshooting strategy. Observe whether progress changes and whether another part of the device still responds. Record the relevant evidence, then choose the next safe step. There is no universal waiting time that proves a program is or is not frozen.

### Check the scope with an ordinary observation

If a browser tab appears frozen, can you select another tab? If a word processor is slow, does the system menu still open? If a computer takes time to start, does it later operate at its normal speed? These are low-risk comparisons. They help distinguish an individual [[application|application]] from the wider [[operating-system|operating system]].

> **Remember:** “Not responding” describes the current state of a program; it does **not** by itself identify whether the cause is memory, storage, a defective update, damaged hardware, or something else.

## 2. Protect your work before taking action

### Unsaved work changes the decision

Before closing an application, think about what it contains. A document, unsent message, spreadsheet, photo edit, or form may hold information that has not yet been saved. A [[force-quit|force quit]] or [[end-task|End task]] can stop a program without giving it a normal opportunity to save. Some apps provide [[autosave|autosave]] or recovery features, but those features differ, and they do not guarantee that every recent change can be restored.

If the app still responds, try its ordinary Save command and give a large save enough time. If your work is stored in an online account, check whether the app indicates that recent changes were saved or synchronized. A cloud icon or status label is only useful if you understand what it reports; simply seeing an online document does not prove that every change reached the server.

| Situation | Safer first response | Main concern |
| --- | --- | --- |
| App is responsive but slow | Save normally, then close unneeded work | Avoid losing changes while reducing load |
| App seems frozen during a large save | Observe progress or status and allow reasonable time | Interrupting file writing may lose work |
| App is frozen with unsaved changes | Note the file and symptoms; use app-specific recovery guidance before force quitting if possible | Unsaved edits may be lost |
| Device is installing an authorized system update | Respect on-screen instructions and wait for the update sequence | Power interruption can complicate recovery |
| Sensitive business or school system is involved | Follow support policy; contact the administrator as appropriate | Workflow, privacy, and access controls may apply |
| Device smells burnt, smokes, or shows battery swelling | Stop use and follow electrical-safety guidance; seek qualified help | Physical safety takes priority over the file |

### Save a copy when appropriate

For a responsive program, **Save As** or **Save a Copy** can sometimes protect the current version before experimenting with complex settings. Choose a known location, verify the filename, and avoid overwriting the only dependable copy. If the program is already unresponsive, do not assume you can safely use a save command or recover a draft.

For a browser form, the safe choices depend on what you are entering. Some sites preserve drafts; others discard them if a tab closes. Never copy passwords, financial credentials, private patient information, or other sensitive text into an unrelated notes app merely to preserve a draft. Follow the relevant privacy and workplace policies.

### What happens after you close a frozen app?

When you reopen the program, it may offer a recovered version of a document. Read the message carefully, identify the correct file, and save a verified copy before discarding any recovery material. A recovery prompt is a helpful opportunity, not proof that all work survived.

If an app crashes repeatedly, do not delete recovery folders, temporary files, or application data in an attempt to “clear a blockage.” Some of those files may be needed for recovery or diagnostics. Escalate when the stakes are high.

### The least disruptive action is usually best

A useful [[troubleshooting|troubleshooting]] progression is:

1. Observe the symptom and determine its scope.
1. Protect important work if the application still responds.
1. Check for progress, hidden prompts, or obvious workload.
1. Close only unrelated, responsive apps that you no longer need.
1. Use the program's normal Quit or Close command if it is responsive.
1. Consider ending only the specific unresponsive application if necessary, recognizing the data-loss risk.
1. Restart the computer normally only when it makes sense and other work has been saved.
1. Seek authorized support for persistent, unsafe, or high-stakes problems.

Do not interpret this sequence as an instruction to force quit every slow program. **A slow, responsive application is different from one that cannot be used.**

## 3. Recover from a frozen app step by step

### Begin with a consistent approach

When an application appears stuck, first stop repeatedly clicking. Repeated inputs can queue more work or produce duplicate actions when the app recovers. Check whether a permission prompt, file chooser, sign-in request, or dialog box is hidden behind the main window. If you can access the program's menu, try a normal save and normal close before anything forceful.

Next, see whether the operating system itself responds. Can you switch to another familiar application? Can you open the Start menu, Apple menu, or system launcher? If so, you may be dealing with an isolated app problem. If not, revisit the whole-device procedure from Lesson 1.

### Windows 11: observe in Task Manager

Windows provides [[task-manager|Task Manager]] for viewing running applications and resource use. The interface can vary slightly with Windows versions and organizational customization.

1. If safe, first try the app's normal Close command after saving its work.
1. If the app does not respond, open Task Manager using `Ctrl + Shift + Esc`, or search for **Task Manager** from Start.
1. In **Processes**, locate the clearly identified application. Observe its name and whether Windows indicates it is not responding.
1. To keep this a read-only exercise, **stop here** and close Task Manager normally.
1. In an actual, authorized recovery situation, select **End task** only for the known affected app, after considering that its unsaved work may be lost.
1. Reopen the app only when appropriate. Check for a recovery prompt, and verify whether the original problem returns.

Task Manager also shows services and processes that make Windows work. An unfamiliar item using CPU or memory is not evidence that it is malicious or safe to terminate. **Do not end random background processes, Windows system tasks, security software, or workplace management services.** Microsoft provides [official performance guidance](https://support.microsoft.com/en-us/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows) for further reference.

### Mac: normal quit before Force Quit

On a Mac, start with the application menu and choose **Quit** if it responds. `Command + Q` can normally quit the active app, but save prompts and app behavior vary. If an app truly cannot respond, macOS provides a [[force-quit-window|Force Quit Applications]] window.

1. Check whether the frozen app is the only one affected.
1. Try a normal Quit when safe and available.
1. To inspect the Force Quit Applications window, press `Option + Command + Esc` or use the **Apple menu > Force Quit**.
1. Observe the application list. Do not select **Force Quit** during a practice exercise.
1. If a real recovery requires force quitting, choose only the known affected app and accept the possible loss of unsaved changes.
1. Reopen it carefully and check for document recovery options.

Macs also include [[activity-monitor|Activity Monitor]], which displays app and process activity. It can be useful for observation, but it is not necessary for a beginner to terminate background processes. In Activity Monitor, a **Quit** request and **Force Quit** are not equivalent: Force Quit ends a process immediately and can lose work. Apple explains this in its [Activity Monitor guidance](https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac) and [Force Quit instructions](https://support.apple.com/en-us/102586).

### Chromebook: identify the affected tab or process

Chromebooks can be slow because of browser tabs, extensions, apps, downloads, and other work. On supported Chromebook keyboards, Google documents **Shift + Esc** for opening the browser-related Task Manager. Keyboard layouts and interfaces may differ.

1. Check whether one webpage, one app, or the entire device is affected.
1. If the affected tab responds, close it normally after protecting any draft.
1. Open Task Manager with `Shift + Esc` to **observe** processes and resource use, if available.
1. Identify the tab or app by its displayed name; do not end unfamiliar entries or system work.
1. If an actual task must be ended, remember that ending a tab or process may discard unsaved content.
1. If broader performance remains poor, close unneeded tabs and apps normally, and consider a normal restart when it is safe.

Google's [Chromebook troubleshooting guide](https://support.google.com/chromebook/answer/6309225?hl=en) describes a basic performance path and the Task Manager shortcut. Do not confuse `Shift + Esc` with a factory reset or a Chromebook hardware recovery operation. Those are entirely different procedures.

### Comparison: three operating systems

| Platform | Routine way to quit | Built-in observation tool | Higher-risk action |
| --- | --- | --- | --- |
| Windows 11 | Close the window or use the app's Exit command | Task Manager; `Ctrl + Shift + Esc` | End task for a chosen app |
| macOS | App menu > Quit; often `Command + Q` | Activity Monitor or Force Quit Applications window | Force Quit a chosen app |
| ChromeOS | Close a responsive tab or app normally | Task Manager; often `Shift + Esc` | End a selected browser or app process |

**Important:** These controls address applications and processes. They are not substitutes for backups, electrical repairs, malware removal, account recovery, or hardware diagnosis. If you are unsure what a process is, leave it alone.

### When a program will not close normally

An app that continually ignores normal close commands may need advanced support. If you have carefully established that the issue is isolated, you have considered unsaved work, and the device is yours or you are authorized to act, ending only that app can be reasonable. But there are exceptions: finance or medical records systems, shared databases, software installations, encryption operations, and other sensitive tasks may have consequences beyond one open window. Follow organization-specific procedures.

### If a program starts misbehaving every time

Repeated crashes are evidence worth recording. Identify whether the failure occurs when opening the app, opening a specific file, connecting a peripheral, or doing one exact action. Check for updates through the operating system or the application's official publisher when authorized, and follow documented support procedures. Avoid reinstalling or resetting the computer as a first response; those actions may erase important settings or data.

## 4. Why computers and apps become slow

### Performance depends on several resources

A computer carries out work using its [[cpu|processor (CPU)]], [[ram|working memory (RAM)]], [[storage|storage]], graphics hardware, network connections, and operating-system services. These resources perform different roles. A slowdown can occur when a particular task needs more resources than are conveniently available, but no single number diagnoses every problem.

Think about an office. A worker can handle tasks efficiently when there is time, desk space, and an organized filing system. If too many urgent projects arrive at once, even a capable worker slows down. Similarly, a computer may run several apps, download files, scan for security threats, and update software at the same time. Each activity competes for attention or resources.

| Resource or condition | What it does | What high use may mean | What it does not prove |
| --- | --- | --- | --- |
| CPU | Executes calculations and program instructions | A demanding operation or many active tasks | CPU hardware has failed |
| RAM | Holds active working data and program information | Many open apps, large documents, or heavy browser tabs | More RAM is the only solution |
| Storage space | Holds programs, files, updates, and temporary data | Limited free space may interfere with some operations | All slowdowns are caused by storage |
| Disk activity | Reads or writes stored data | A save, update, search, or synchronization may be underway | Every busy disk is defective |
| Network connection | Transfers online information | A cloud app may be waiting on a connection or service | The whole computer is slow |
| Background tasks | Perform work without a frontmost window | Scanning, syncing, indexing, or updates may be active | Every background task should be disabled |
| Temperature and cooling | Help hardware operate within safe limits | Sustained heat can reduce performance or signal a problem | A warm device always needs repair |

### CPU use changes from moment to moment

The [[cpu-usage|CPU percentage]] indicates how much processor work is being used over an observation interval. A brief high reading during a demanding operation may be normal. A persistent high reading *combined with symptoms* can help you decide where to investigate. You cannot diagnose a virus from a CPU percentage alone. The meaningful questions are **which task is busy, why is it running, and does the behavior match what you were doing?**

### RAM is not the same as disk space

[[ram|RAM]] is temporary working space for active software. [[storage|Storage]] retains files and applications between sessions. A computer can have plenty of unused disk space but limited RAM for the number of programs open. The opposite can also happen: a program might have adequate RAM while there is too little free disk space to save a document or install an update.

When RAM becomes scarce, the system may move some working information to storage through [[virtual-memory|virtual memory]] or related mechanisms. This can preserve functionality but sometimes makes the computer less responsive. Closing unneeded apps or tabs may help reduce demand. Do not attempt to “clear RAM” by downloading unknown cleaners; many do little or introduce new risks.

### Startup activity and background work

A [[startup-app|startup app]] launches automatically when a user signs in or the device starts. Some are useful, such as password managers, accessibility tools, endpoint protection, messaging apps, and backup software. Others may be unnecessary for your particular workflow. Several simultaneous startup tasks can contribute to slow startup, but that does not mean every automatically launched app should be disabled.

On personally owned Windows devices, Task Manager includes a **Startup apps** section, and Windows Settings also offers startup controls. A beginner should learn to *recognize* these controls before changing them. On school or business computers, software may be required for security or compliance; do not disable it without authorization. On Mac, Login Items & Extensions may include relevant settings, but changes should also follow device and organizational policy.

### Browser tabs and extensions

A browser may contain many open tabs, including video calls, online office tools, streaming media, large spreadsheets, and interactive sites. Some pages use more memory and CPU than others. [[browser-extension|Browser extensions]] add features, but they can affect performance or privacy. A simple first step is closing **unneeded** tabs after saving important work. If a single page is slow, compare it with another trusted page. Avoid disabling security extensions or deleting browsing data without understanding the consequences.

A browser that becomes faster after closing certain tabs suggests that workload may be part of the problem; it does not prove that the computer itself is defective. If only online apps lag while locally installed apps perform normally, network conditions deserve separate consideration. The next course lesson addresses connectivity in detail.

### Storage pressure and updates

A nearly full drive can limit the space available for updates, temporary files, downloads, and some application operations. Authorized cleanup should begin with familiar personal files and built-in storage information, not hidden system folders. Do not delete the `Windows` folder, Mac system files, or unknown program data. Also avoid running manual disk-optimization commands or reinstalling the operating system merely because a computer feels slow.

An authorized system update can temporarily create a heavier workload. You may see progress indicators, notifications, or restart requests. Allow normal update processes to complete and follow their instructions. **Do not interrupt updates to make a performance graph look better.**

### Malware and unsafe software

[[malware|Malware]] can sometimes cause performance problems, but slow performance by itself is weak evidence of an infection. Many ordinary explanations are more common in everyday use. Use built-in or organization-approved security tools and official updates if a security issue is suspected. Do not trust pop-up advertisements claiming that hundreds of errors have been found or that a payment is required to repair your machine.

### The hardware has limits

Older or lower-powered devices may be slower with modern multitasking, demanding video calls, complex design software, or very large files. That is not automatically a defect. Identify the actual workload and requirements before spending money on an upgrade. On managed devices, discuss purchasing or replacement with the responsible IT team.

## 5. Observe performance with built-in tools

### Observation is safer than intervention

Built-in performance monitors help you see whether resources are in use. They are **not** instructions to shut down everything with a high number. A beginner's objective is to read labels, compare what is happening with what they are doing, and close the tool without changing the system.

When interpreting numbers, pay attention to **duration, context, and symptoms**. A video editor at high CPU use while exporting a movie is different from an unknown task keeping the device busy for long periods when you are doing nothing. The same number can have different explanations.

### Windows: Processes and Performance

To inspect the activity of your own Windows 11 computer:

1. Save any responsive work you can.
1. Open Task Manager using `Ctrl + Shift + Esc`.
1. Find the **Processes** section. Look for the application names you recognize.
1. Observe the displayed columns, which may include CPU, Memory, Disk, and Network.
1. Optionally view the **Performance** section for overall activity summaries.
1. Close Task Manager without using **End task**, changing a startup setting, or modifying a service.

If a column is not visible or the interface differs, do not force the procedure. Window size, version, permissions, and layout vary. A process can briefly use a lot of CPU as part of ordinary work. **A high number is a clue, not a verdict.**

### Mac: Activity Monitor

On macOS, open **Activity Monitor** using Spotlight search or Applications > Utilities if available. The application offers views for CPU, Memory, Energy, Disk, and Network. Observe only. It may show processes with unfamiliar names, including essential operating-system components. Avoid quitting or force quitting processes as a practice activity.

You may also see **Memory Pressure**, a system-provided indicator of how effectively memory is supporting current tasks. Do not interpret it as simply “percentage of memory used.” Its behavior should be read alongside real performance symptoms and Apple's documentation. For detailed instructions, see [Apple's Activity Monitor help](https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac).

### Chromebook: Task Manager and Diagnostics

On a Chromebook, `Shift + Esc` commonly opens Task Manager. You can observe process names and resource information without ending anything. A separate built-in **Diagnostics** application may provide information about battery, CPU, memory, and other supported features. To find Diagnostics, use the Launcher and search for **Diagnostics**. Availability and detail can vary by device and software version. Google's [Diagnostics help](https://support.google.com/chromebook/answer/10566784) explains the feature.

### What to write down

A simple record is often more useful than a screenshot of a complicated performance graph. Include the task, what felt slow, whether another app worked, what the built-in monitor showed, and whether the problem continued after a safe action.

| Observation field | Example entry | Why it matters |
| --- | --- | --- |
| Device and system | Windows 11 laptop | Helps choose relevant instructions |
| Date and approximate time | Thursday, 3:15 p.m. | Helps connect the event to updates or work |
| Affected app or action | Word processor stalled during Save | Identifies the activity |
| Scope | Browser and Start menu still worked | Suggests one app rather than the entire device |
| Data risk | Unsaved document edits | Changes the action priority |
| Safe observation | App did not respond; no visible progress | Records evidence without guessing |
| Action taken | Waited, then used authorized app recovery procedure | Makes the sequence reproducible |
| Result | App reopened; recovery prompt appeared | Helps verify outcome |

Do not include passwords, full account numbers, confidential client information, or recovery keys in a shared troubleshooting report. Provide a minimal description that an authorized helper can use.

### Patterns matter more than one snapshot

A single high CPU number is an incomplete observation. Ask whether the app is normally demanding, whether you can repeat the slowdown consistently, whether the device behaves normally later, and whether a specific operation triggers it. This careful approach helps prevent incorrect conclusions and unnecessary changes.

## 6. Follow a safe troubleshooting workflow

### The six-stage method

Use the sequence **Observe → Protect → Narrow → Test → Verify → Escalate**. It gives every symptom a disciplined process without assuming that the same fix applies to every computer.

**Observe.** State the exact problem: “The browser tab did not respond after I selected Print,” rather than “the computer is broken.” Notice any visible progress, error, warning, or recent change.

**Protect.** Identify documents, drafts, online forms, or other unsaved work. Decide whether a closure or restart could lose data. Follow any organizational guidance.

**Narrow.** Determine whether the problem affects one app, one website, several programs, or the entire device. Compare only familiar, safe activities.

**Test.** Choose one low-risk action relevant to that scope: allow the recognized task to finish, close an unrelated app normally, save and reopen one responsive program, or observe activity with built-in tools. Avoid combining many changes.

**Verify.** Repeat the original harmless task. Does it now work normally? Does it fail in the same way? Does the device perform differently after restarting? Record facts rather than assuming success.

**Escalate.** If it persists or involves high-value data, repeated crashes, security warnings, physical hazards, or a managed device, use official documentation or contact an authorized support person.

### Choose the next action from the symptom

| If you observe | First sensible path | If the issue continues |
| --- | --- | --- |
| One app is unresponsive and other apps work | Protect work; check progress or hidden dialogs; use app-specific recovery | Consider ending only that app if authorized; report repeated crashes |
| One online tab is slow | Check whether other trusted tabs work; close unnecessary tabs | Investigate website or connection issues |
| Whole computer is slow but usable | Save work; close unneeded apps; observe CPU, memory, and storage | Review official performance guidance or contact support |
| Slowdown occurs at every sign-in | Observe normal startup workload and authorized startup apps | Ask before changing managed startup items |
| Slowdown begins with an update | Follow update status and instructions | Consult the update's official support channel |
| Computer repeatedly freezes completely | Follow Lesson 1's controlled recovery approach | Request device-level diagnostics or authorized repair |
| Device has extreme heat, smoke, battery swelling, or a damaged power cord | Stop use and follow safety procedures | Seek qualified professional help rather than testing further |

### Worked example: a frozen spreadsheet

A student opens a spreadsheet, edits several cells, and clicks **Save**. The window stops responding, but another application and the system menu still work. The student has not verified that the latest edits were saved. The safest first decision is **not** to immediately restart the entire computer. Instead, the student records the situation, checks for a saving indicator or hidden dialog if possible, and allows reasonable time for the operation to finish. If the app recovers, they save and verify the file. If it does not, they consider the application-specific recovery options and data-loss risk before ending it. When reopening, they inspect any recovery prompt and save the recovered version under a clear name.

Notice what the student did **not** do: repeatedly click Save, erase the temporary files, disable antivirus software, install a speed-up tool, or end every high-memory process. The narrow scope and unsaved work guided the response.

### Worked example: the computer is slow after sign-in

A user signs in and notices that every app takes longer to open for the first several minutes. A backup utility and an authorized update are running. Later, the computer responds normally. The initial evidence points to temporary background work; it does not prove a defective CPU or malicious program. The user allows the expected tasks to finish and observes how the computer behaves during normal use. If the slowdown becomes persistent, they can inspect built-in performance information and report the pattern to support.

### Worked example: video calls stutter while browsing is fine

A video call freezes intermittently, but locally installed programs respond normally and ordinary webpages still load. There may be a network, conferencing-app, camera, device workload, or service issue. It would be premature to conclude that the computer needs a new processor. Record whether the problem affects audio, video, other participants, or the entire app. Check the conferencing platform's official help and continue to the course's later network and audio/video lessons.

### A short support report template

You can write a concise report without technical jargon:

- **What I was doing:** The action underway when the issue appeared.
- **What happened:** The exact visible symptom and any error text.
- **What still worked:** Other apps, menus, and input devices that responded.
- **What I protected:** Whether work was saved or might be at risk.
- **What I tried:** One or two safe, authorized steps.
- **What changed:** The result and whether the problem repeated.
- **Help needed:** A specific question or request for further diagnosis.

This approach reduces repeated testing and helps the next person avoid starting from an incorrect assumption.

## 7. Guided practice: seven low-risk activities

These exercises develop observation and decision skills. **You do not need to create a real freeze, force quit an application, run a system optimizer, install anything, or modify startup settings.** If you cannot access a computer, complete the written scenario. If you are using a managed device, follow your school's or workplace's rules.

### Activity 1: classify six symptoms

Read each example and classify it as **one app**, **one online tab or service**, **whole computer**, or **not enough information yet**.

1. A word processor ignores clicks, but the browser and Start menu work.
1. A single shopping website never finishes loading; other sites work.
1. The pointer, menus, and several different programs are sluggish.
1. The screen is black and you cannot tell whether the computer is powered on.
1. A slideshow takes a while to export a large video, and its progress bar advances.
1. An accounting app crashes each time you open one particular file, while other files open normally.

Write one reasonable next observation for each. Do not invent a cause.

:::answer Show Activity 1 guidance
1. **One app.** Check whether the word processor is saving or showing a hidden prompt before considering recovery.
1. **One online tab or service.** Compare another trusted site and inspect the tab without disclosing private information.
1. **Whole computer.** Save work and observe overall performance indicators.
1. **Not enough information yet.** Check safe, external power and display symptoms using Lesson 2.
1. **Not necessarily a fault.** Visible progress on a heavy task can be normal; observe whether it continues.
1. **One app or one file-specific problem.** Record the exact file and action and consult the app's official help.

The exercise tests your classification, not whether you guessed an invisible technical cause.
:::

### Activity 2: make a data-safety decision

Imagine that a note-taking app stops responding while it contains a long, unsaved essay. Another app still works. Decide whether each step is a good first response:

1. Click the same button twenty times.
1. Check for a progress message and allow reasonable time.
1. Immediately force the computer to power off.
1. Write down which file might contain unsaved edits.
1. Force quit without thinking because the app has autosave.
1. Inspect any recovery options if the application eventually reopens.

Explain why the **consequences of an action** matter as much as its speed.

:::answer Show Activity 2 guidance
Checking progress, recording the document, and inspecting recovery options are appropriate. Repeated clicks, immediate forced power-off, and unquestioned reliance on autosave are poor first responses. Ending an app can lose unsaved work, and recovery tools are not perfect. The safest available response depends on the exact situation.
:::

### Activity 3: recognize your platform's recovery control

Without ending anything, identify which operating-system control corresponds to your computer. On Windows, find Task Manager. On Mac, find the Force Quit Applications window or Activity Monitor. On Chromebook, find the Task Manager if available. Record the keyboard shortcut or menu you used, then close the window normally.

If you cannot use a computer, compare the platform table in Section 3 and write down the controls for all three platforms.

:::answer Show Activity 3 guidance
- **Windows 11:** Task Manager, commonly opened with `Ctrl + Shift + Esc`.
- **macOS:** Force Quit Applications, commonly opened with `Option + Command + Esc`; Activity Monitor is another observation tool.
- **ChromeOS:** Task Manager, commonly opened with `Shift + Esc` on supported keyboards.

Recognizing a control is not an instruction to end a process. The practice is complete when you can locate it and close it without changing anything.
:::

### Activity 4: read resources without diagnosing too quickly

Consider a fictional computer with these readings while editing a large photo:

| Measure | Example observation | Cautious interpretation |
| --- | --- | --- |
| CPU | Briefly 88% | Could reflect active photo processing |
| Memory | Many apps and tabs open | May indicate competition for working memory |
| Storage | Almost full | Could limit temporary files or updates |
| Network | Low activity | Does not identify the cause of local slowness |

For each reading, write what it *could* mean and one conclusion it **cannot** support. Do not claim that the CPU, RAM, storage, or network hardware is defective just from a snapshot.

:::answer Show Activity 4 guidance
A high CPU reading during photo processing can be normal. Several open apps may increase RAM demand. Low free storage can affect some operations. Low network activity alone does not explain why a local image editor is slow. None of these readings, by itself, proves a hardware failure, infection, or need to buy a new computer.
:::

### Activity 5: identify misleading performance advice

A friend suggests five actions. Mark each as **reasonable without special permissions**, **requires more context or authorization**, or **unsafe/unreliable advice**.

1. Close unrelated browser tabs after saving drafts.
1. End every unfamiliar process with high memory use.
1. Check storage space using built-in system controls.
1. Pay an unknown website for an automatic “speed repair.”
1. Disable a school laptop's security services to make it run faster.

Write one sentence explaining why unfamiliar processes and pop-up repair services are poor troubleshooting targets.

:::answer Show Activity 5 guidance
1. **Reasonable** when work is saved and tabs are no longer needed.
1. **Unsafe/unreliable.** Unknown processes may be essential to the system.
1. **Reasonable** as a read-only observation.
1. **Unsafe/unreliable.** An unverified performance claim is not a diagnosis.
1. **Requires authorization and is ordinarily inappropriate.** Security controls may be mandatory.

A slow device is not permission to weaken security, delete protected files, or trust commercial scare messages.
:::

### Activity 6: choose a first action from three scenarios

**Scenario A:** One app freezes while a large file is being saved, but the system remains responsive. **Scenario B:** The entire system is slow after startup while an official update is visibly running. **Scenario C:** A laptop becomes very hot, shows a battery swelling warning sign, and starts slowing down.

For each, write your first action, what you would avoid, and when you would ask for help. Your choices should reflect both practical troubleshooting and safety.

:::answer Show Activity 6 guidance
- **A:** Protect work, observe save progress, and consider app-specific recovery. Avoid instantly killing the app or restarting.
- **B:** Respect update instructions and let expected work complete. Avoid interrupting the update merely because performance is temporarily reduced.
- **C:** Stop using the device and seek qualified safety assistance. Do not continue performance tests, apply pressure to a swollen battery, or open the device.

The safest response changes when the situation involves physical hazards or potentially lost data.
:::

### Activity 7: prepare a clear support report

Use the following scenario or a real, non-sensitive example: “A browser freezes each time a particular downloaded PDF is opened. Other tabs work. I closed the affected tab after checking my unsaved work. The problem returned when I tried again.”

Write a six-part support report: activity, symptom, unaffected functions, data risk, action taken, and result. Add **one next question** you would ask an authorized helper. Do not attach confidential files or reveal passwords.

:::answer Show Activity 7 sample
- **Activity:** Opening a particular downloaded PDF in a browser.
- **Symptom:** The tab becomes unresponsive.
- **What still worked:** Other browser tabs and computer controls.
- **Data risk:** Checked that there was no unsaved work in the affected tab.
- **Action:** Closed the affected tab normally if possible.
- **Result:** The same problem returned when the file was reopened.
- **Question:** Is the problem specific to this PDF, the browser's PDF viewer, or a managed-device security restriction?

This report avoids claiming the file is corrupt or the computer is infected. It gives support staff a testable description.
:::

## 8. Common mistakes and misconceptions

### “One frozen app means the whole computer has crashed.”

Not necessarily. Test whether another known application or system control responds. Keeping the scope narrow may allow you to preserve other work and avoid a disruptive restart.

### “If I click a button repeatedly, the computer will eventually obey.”

Repeated clicks can queue commands, open duplicates, or add to the workload. When something does not respond, stop generating inputs and check for progress, prompts, or a known delay.

### “Force Quit and normal Quit mean the same thing.”

They do not. A normal quit usually gives an app an opportunity to manage open files and saving. A forced termination can stop it immediately and lose unsaved changes. Use the least disruptive option that fits the situation.

### “A high CPU percentage always means a virus.”

No. Video editing, conferencing, updates, security scans, and many ordinary tasks can use substantial CPU time. Use context, timing, and approved security tools—not one number—to evaluate concerns.

### “Full RAM and full storage are identical.”

No. RAM supports currently running programs. Storage retains files and programs. Pressure on either can matter, but the troubleshooting responses are different. Do not erase personal files solely to reduce RAM use or install more RAM solely because disk storage is full.

### “Every process I do not recognize is unnecessary.”

No. Operating systems, security tools, backups, accessibility software, and administrative controls often run in the background. Ending an unknown process can destabilize the device or interrupt important work. If uncertain, observe and ask for help.

### “Cleaning software can always make an old computer fast.”

No. Commercial “boosters,” registry cleaners, and scare-message pop-ups may be unhelpful or unsafe. Built-in tools, reputable publisher guidance, and careful workload management are better first steps. Avoid installing additional software until you understand the problem.

### “Deleting system files frees storage safely.”

No. System and application files can be essential. Use built-in storage information, understand what is being removed, and back up important files. A later course lesson covers storage-full problems in depth.

### “Every slow website means I need a faster computer.”

No. A site, network connection, browser extension, account service, or remote server may be responsible. Compare the behavior of different safe tasks before considering hardware changes.

### “Turning the computer off repeatedly is a harmless fix.”

No. Forced shutdowns may lose unsaved work and interfere with some operations. Normal restarts can be helpful in appropriate situations, but repeated forced interruption is not a performance-management method.

### “A warm computer is always broken.”

No. Computers can become warm during demanding work. But overheating, smoke, unusual odor, swelling, and damaged power equipment require a safety-first response. Do not cover ventilation openings or attempt unauthorized internal repairs.

### “I should experiment freely on a company or school computer.”

No. Managed computers can require approved software, security services, and support procedures. Observation and clear reporting are often appropriate; terminating administrative processes or changing startup settings usually is not.

### “If a restart works once, the root cause is confirmed.”

No. A normal restart may clear a temporary software condition without revealing why it occurred. If the problem recurs, record the pattern and investigate through official guidance rather than declaring the cause solved.

## 9. Essential vocabulary

The linked vocabulary terms in earlier sections open short definitions. The glossary below summarizes the ideas you should recognize while troubleshooting. You do not need to memorize technical statistics to use a computer responsibly.

- **Frozen app:** A program that does not respond normally to user input.
- **Slow computer:** A device that still works but takes unusually long to respond.
- **Application:** Software used to accomplish a task, such as writing or browsing.
- **Operating system:** The software that manages a computer's basic functions and applications.
- **Process:** A running instance of a program or operating-system task.
- **Task Manager:** A Windows or ChromeOS tool for observing tasks and, when necessary, managing them.
- **Activity Monitor:** A macOS tool for viewing processes and resource use.
- **Normal quit:** Closing a responsive program through its supported control.
- **Force quit / End task:** Stopping a program without waiting for its ordinary closing process.
- **Unsaved work:** Changes that have not yet been confirmed as stored.
- **Autosave:** A feature that automatically saves eligible changes under app-specific rules.
- **Recovery prompt:** A message offering available information after a crash or unexpected closure.
- **CPU:** Hardware that carries out processing instructions.
- **RAM:** Working memory that supports active programs and data.
- **Storage:** Hardware capacity for retaining programs, files, and other data.
- **CPU usage:** A measure of processor activity over an interval.
- **Background process:** A running task that may not have a visible foreground window.
- **Startup app:** A program configured to launch at startup or sign-in.
- **Browser extension:** An add-on that changes browser behavior or adds features.
- **Virtual memory:** An operating-system technique for handling working data beyond immediately available physical RAM.
- **Memory pressure:** A system indicator of how effectively active memory demand is being met.
- **Bottleneck:** A resource or stage that limits performance for a given task.
- **Synchronization:** Coordinating files or data between devices or services.
- **System update:** Authorized software changes delivered through supported update mechanisms.
- **Malware:** Software intended to harm, disrupt, steal information, or abuse systems.
- **Managed device:** Equipment governed by organizational policies or administrators.
- **Verification:** Checking whether a specific problem changed after a controlled action.
- **Escalation:** Seeking appropriate help because an issue remains unresolved or exceeds safe authority.
- **Support report:** A concise account of a symptom, observations, actions, and results.

## 10. Knowledge check

Choose the **one best answer** for each question. Select **Check answers** in the lesson dashboard to see your score and explanations. The quiz is for personal learning; it does not require you to force quit any real application or change your device. If a question mentions a managed computer, assume its organization's policies apply.

:::quiz
? What is the most useful first question when an app appears frozen?
- [x] Does the problem affect one app or the whole computer?
- [ ] Which expensive repair should I buy?
- [ ] How can I end every running process?
! Finding the scope helps choose a proportionate response.

? A word processor ignores clicks but the Start menu and browser work. What is most likely about the scope?
- [ ] The entire computer is certainly broken.
- [x] The trouble may be limited to one application.
- [ ] The internet must have failed.
! Other responsive apps suggest that the issue may be isolated.

? What should you consider before force quitting an app?
- [ ] Whether its icon is blue or green.
- [ ] Whether another device has the same wallpaper.
- [x] Whether it contains unsaved work that may be lost.
! Forced termination can discard unsaved changes.

? Which action is usually better when an app is slow but still responsive?
- [x] Save work and observe whether the current operation finishes.
- [ ] Immediately press and hold the power button.
- [ ] Delete the application folder.
! A working app may be completing a legitimate operation.

? What does a “Not responding” message establish by itself?
- [ ] The processor is physically defective.
- [x] The app is not responding normally at the moment.
- [ ] A computer virus is proven.
! A status message is evidence of behavior, not a root-cause diagnosis.

? Which Windows 11 shortcut commonly opens Task Manager?
- [ ] Alt + F4
- [ ] Ctrl + S
- [x] Ctrl + Shift + Esc
! Task Manager can be opened with Ctrl + Shift + Esc.

? What is Task Manager useful for in a beginner exercise?
- [x] Observing app status and resource use without ending tasks.
- [ ] Deleting all temporary and system files.
- [ ] Replacing a failed power supply.
! Read-only observation provides useful evidence with low risk.

? Which action in Windows can abruptly terminate a chosen app?
- [ ] Save As
- [x] End task
- [ ] Lock
! End task may cause that app to lose unsaved work.

? Which shortcut commonly opens the Mac Force Quit Applications window?
- [ ] Command + P
- [ ] Shift + Enter
- [x] Option + Command + Esc
! Apple documents Option + Command + Esc for the Force Quit Applications window.

? What is the difference between normal Quit and Force Quit on macOS?
- [x] Force Quit can terminate the app immediately and risk data loss.
- [ ] Normal Quit always erases personal files.
- [ ] Force Quit automatically fixes all bugs permanently.
! Normal quitting is less disruptive when the app is responsive.

? What built-in Mac tool shows CPU and memory activity?
- [ ] Disk Utility only
- [x] Activity Monitor
- [ ] Screenshot
! Activity Monitor provides views of processes and resources.

? Which shortcut does Google document for Chromebook Task Manager?
- [ ] Ctrl + B
- [ ] Alt + Tab
- [x] Shift + Esc
! Shift + Esc commonly opens the Chromebook Task Manager on supported keyboards.

? What is RAM mainly used for?
- [x] Working data and programs currently in use.
- [ ] Permanent electrical power.
- [ ] Only the video cable signal.
! RAM is working memory for active operations.

? What is storage mainly used for?
- [ ] Holding only the current CPU instruction.
- [x] Retaining files, applications, and other data.
- [ ] Displaying images on a monitor.
! Storage generally retains data between sessions.

? A brief CPU reading of 90 percent proves what?
- [ ] The hardware has failed.
- [ ] The system certainly has malware.
- [x] Only that the processor was busy during the measured interval.
! Interpret CPU activity in relation to the workload and duration.

? What is a reasonable step when many unneeded browser tabs are open?
- [x] Save needed drafts and close tabs you no longer need.
- [ ] Delete every browser profile.
- [ ] Install an unknown speed-boosting extension.
! Reducing unnecessary work can reduce resource demand.

? Why might startup apps make a computer feel slow at sign-in?
- [ ] Startup apps change the computer into a printer.
- [x] Several programs may compete for resources at once.
- [ ] They make the CPU permanently slower by design.
! Concurrent startup activity can delay responsiveness.

? What should you do before changing startup settings on a managed laptop?
- [ ] Disable security tools without telling anyone.
- [ ] Uninstall every app you do not recognize.
- [x] Follow organizational policy or ask authorized IT staff.
! Managed devices may require specific apps and services.

? A device becomes sluggish while a visible authorized update is installing. What is the best response?
- [x] Follow the update instructions and allow it to finish.
- [ ] Disconnect power repeatedly to speed it up.
- [ ] Delete system files to make room immediately.
! Interrupting system updates can create additional problems.

? Which statement about computer slowdowns is most accurate?
- [ ] All slowdowns are caused by insufficient RAM.
- [x] Several different conditions can produce similar symptoms.
- [ ] Every slow computer has a faulty disk.
! CPU, memory, storage, network, software, and workload can all matter.

? A single website is slow while other websites and local apps work. What should you investigate?
- [ ] The laptop battery first, regardless of power status.
- [ ] Only the video card temperature.
- [x] That site, tab, browser, or connection before blaming the whole PC.
! Scope points to a web-related issue rather than proving a system-wide failure.

? What is an unsafe way to respond to high memory usage?
- [x] End every unfamiliar background process.
- [ ] Observe which recognized apps are open.
- [ ] Close an unneeded responsive app normally.
! Unknown processes may be essential to operating-system or security functions.

? What does an autosave feature guarantee across all applications?
- [ ] Every keystroke is permanently saved without exception.
- [x] Nothing universal; its behavior varies by app and state.
- [ ] All browser forms always survive a crash.
! Verify autosave or sync status when possible and do not assume perfect recovery.

? What is a support report most useful for?
- [ ] Showing as many technical guesses as possible.
- [ ] Publishing passwords so helpers can sign in.
- [x] Recording the symptom, context, safe checks, and result.
! A clear, factual record supports effective follow-up without exposing secrets.

? When would a normal device restart be more appropriate than force quitting one app?
- [x] When the wider system is affected and important work has been protected.
- [ ] Whenever one text cursor blinks.
- [ ] Before reading a visible update progress warning.
! A full restart is broader than closing one app and should be used proportionately.

? What should you do if a device shows battery swelling or smoke?
- [ ] Keep benchmarking it until it crashes.
- [x] Stop use and seek qualified help under safety procedures.
- [ ] Press on the battery to flatten it.
! Physical safety overrides ordinary performance troubleshooting.

? Why should you verify a troubleshooting action?
- [ ] To prove the first guess was always correct.
- [ ] To eliminate the need to record what happened.
- [x] To check whether the original symptom actually changed.
! An action is not a confirmed solution until its result is observed.

? What is an example of a low-risk read-only action?
- [x] Look at recognized process names in Task Manager without ending anything.
- [ ] Modify the system registry without a backup.
- [ ] Disable all startup security software.
! Observation gathers evidence while minimizing changes.

? A photo editor uses high CPU while exporting a large image. What is the safest interpretation?
- [ ] The computer must be infected.
- [x] It may be normal work; check progress and responsiveness.
- [ ] A new processor is immediately required.
! Workload and progress are needed to interpret processor activity.

? What is the best overall troubleshooting sequence?
- [ ] Guess, delete files, force power-off, and repeat.
- [ ] Disable security, buy a cleaner, and ignore the result.
- [x] Observe, protect, narrow, test, verify, and escalate.
! A controlled sequence protects work and produces useful evidence.

:::

:::answer Show knowledge-check answer key
**Answer key:** The correct choice for each question appears below. The quiz also explains each answer when you check your score.

1. **A** — Does the problem affect one app or the whole computer?
2. **B** — The trouble may be limited to one application.
3. **C** — Whether it contains unsaved work that may be lost.
4. **A** — Save work and observe whether the current operation finishes.
5. **B** — The app is not responding normally at the moment.
6. **C** — Ctrl + Shift + Esc
7. **A** — Observing app status and resource use without ending tasks.
8. **B** — End task
9. **C** — Option + Command + Esc
10. **A** — Force Quit can terminate the app immediately and risk data loss.
11. **B** — Activity Monitor
12. **C** — Shift + Esc
13. **A** — Working data and programs currently in use.
14. **B** — Retaining files, applications, and other data.
15. **C** — Only that the processor was busy during the measured interval.
16. **A** — Save needed drafts and close tabs you no longer need.
17. **B** — Several programs may compete for resources at once.
18. **C** — Follow organizational policy or ask authorized IT staff.
19. **A** — Follow the update instructions and allow it to finish.
20. **B** — Several different conditions can produce similar symptoms.
21. **C** — That site, tab, browser, or connection before blaming the whole PC.
22. **A** — End every unfamiliar background process.
23. **B** — Nothing universal; its behavior varies by app and state.
24. **C** — Recording the symptom, context, safe checks, and result.
25. **A** — When the wider system is affected and important work has been protected.
26. **B** — Stop use and seek qualified help under safety procedures.
27. **C** — To check whether the original symptom actually changed.
28. **A** — Look at recognized process names in Task Manager without ending anything.
29. **B** — It may be normal work; check progress and responsiveness.
30. **C** — Observe, protect, narrow, test, verify, and escalate.
:::

## 11. Further learning and next steps

### Summary: what to carry into everyday computer use

A slow or frozen program is a **symptom**, not a complete diagnosis. Your first job is to decide whether the trouble affects one application, a website, several programs, or the entire computer. Protect unsaved work before you close an app or restart the device. Observe progress, hidden dialogs, and known background tasks. Close unnecessary programs normally, then use a platform's built-in observation tools if they provide relevant information. Consider forced app termination only when an app genuinely cannot respond and you understand the potential consequences.

High CPU use can be normal during a demanding operation. RAM and storage have distinct jobs. Browser tabs, startup applications, updates, background tasks, network services, and hardware limits all can affect responsiveness. **One reading or one temporary freeze rarely proves a root cause.**

When an action appears to help, repeat the original harmless task and record the result. If the problem recurs, becomes unsafe, or involves valuable or managed information, use official guidance or seek authorized support rather than trying increasingly aggressive fixes.

### A personal troubleshooting checklist

Before making a change, ask yourself:

1. Can I describe exactly which program or operation is affected?
1. Have I determined whether the issue is isolated or system-wide?
1. Is there unsaved, confidential, or irreplaceable work involved?
1. Is there a visible progress indicator, update, or hidden dialog?
1. Have I tried an observation-only check before a disruptive action?
1. Am I authorized to change the settings or end the affected process?
1. Do I know how to verify the result and describe it to another person?

If you cannot answer those questions, begin with observation and ask for support. This is good troubleshooting practice—not a sign of poor computer skills.

### Check your understanding: a final decision table

| Situation | Most appropriate first priority |
| --- | --- |
| Responsive app running slowly | Save work and observe the active task |
| One frozen app with unsaved edits | Protect or assess the recovery risk before closing it |
| Many unneeded apps and tabs open | Close only unnecessary responsive items normally |
| High CPU reading with visible legitimate work | Interpret the reading in context |
| Repeated crashes in one named program | Record a reproducible pattern and consult official support |
| Company laptop with unfamiliar background services | Observe, document, and obtain authorization |
| Unsafe heat, smoke, swollen battery, or damaged electrical equipment | Stop use and seek qualified safety assistance |

### Official reference materials

The following manufacturer resources provide additional instructions. Menus, features, and shortcuts may change by device, software version, language, or organizational policy. Read the guidance applicable to the computer you actually use.

- [Microsoft Support — Tips to improve PC performance in Windows](https://support.microsoft.com/en-us/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows)
- [Microsoft Support — Configure startup applications in Windows](https://support.microsoft.com/en-us/windows/experience/startup-boot/configure-startup-applications-in-windows)
- [Microsoft Support — System configuration tools in Windows](https://support.microsoft.com/en-us/windows/experience/system-configuration-tools-in-windows)
- [Apple Support — How to force an app to quit on Mac](https://support.apple.com/en-us/102586)
- [Apple Support — If your Mac runs slowly](https://support.apple.com/guide/mac-help/if-your-mac-runs-slowly-mchlp1731/mac)
- [Apple Support — Quit an app or process in Activity Monitor](https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac)
- [Google Chromebook Help — Fix hardware and system problems](https://support.google.com/chromebook/answer/6309225?hl=en)
- [Google Chromebook Help — Use Diagnostics to troubleshoot your issue](https://support.google.com/chromebook/answer/10566784)

### Continue the course

**Previous lesson:** `checking-power-and-cables.md` — Safely check the external power path, charger, monitor input, and cable connections.

**Next lesson:** `internet-not-working.md` — Identify whether a connection problem affects one website, a wireless network, a router, or the wider internet service.

**Course:** [Computer Troubleshooting Basics](https://maloneuniversity.org/department/computer-science/basic-computer-skills/computer-troubleshooting/)


:::terms
frozen-app | Frozen app | An application that has stopped responding normally to expected input. |
slow-computer | Slow computer | A device that responds but takes unusually long to complete ordinary actions. |
symptom | Symptom | An observable sign of a problem, such as a frozen window or delayed response. |
cause | Cause | The actual condition responsible for a symptom. |
resource-usage | Resource usage | The amount of computing capacity currently occupied by tasks. |
application | Application | A software program used to perform a particular task. |
operating-system | Operating system | Core software that manages hardware, applications, and device functions. |
force-quit | Force quit | Ending a program immediately rather than using its ordinary closing process. |
end-task | End task | A control that stops a selected running application or process. |
autosave | Autosave | A feature that saves eligible changes automatically under the application’s rules. |
troubleshooting | Troubleshooting | Observing a problem, testing possible explanations, and checking results. |
task-manager | Task Manager | A system utility for viewing and sometimes managing running apps and processes. |
force-quit-window | Force Quit Applications | A macOS window for choosing an app to terminate when it stops responding. |
activity-monitor | Activity Monitor | A macOS utility for inspecting process and resource activity. |
cpu | Processor (CPU) | The hardware that performs computations and executes program instructions. |
ram | Random access memory (RAM) | Short-term working memory used by active applications and data. |
storage | Storage | Hardware that retains files, programs, and other information. |
cpu-usage | CPU usage | A measure of how much processor capacity is busy over a measurement period. |
virtual-memory | Virtual memory | Methods an operating system uses to manage working memory, sometimes involving storage. |
startup-app | Startup app | A program configured to run when a device starts or a user signs in. |
browser-extension | Browser extension | An add-on that gives a browser extra features or changes its behavior. |
malware | Malware | Software designed to harm, disrupt, steal information, or abuse systems. |
not-responding | Not responding | A label indicating an app is not processing expected actions normally. |
process | Process | A running instance of a program or operating-system task. |
background-task | Background task | Work carried out without an active visible foreground window. |
foreground-app | Foreground app | The application currently receiving most user interaction. |
normal-quit | Normal quit | An application-supported closing action that may provide an opportunity to save. |
unsaved-work | Unsaved work | New or modified content not yet confirmed as stored. |
data-loss | Data loss | Information that becomes unavailable due to deletion, failure, or interruption. |
file-recovery | File recovery | Attempts to restore available content after a crash or accidental loss. |
recovery-prompt | Recovery prompt | An application message offering recoverable material after a disruption. |
save-as | Save As | A command for saving content with a chosen filename or location. |
cloud-sync | Cloud synchronization | Coordinating data between a device and an online service. |
buffering | Buffering | Temporary holding of data while an app prepares to play or process it. |
lag | Lag | Noticeable delay between an action and its response. |
latency | Latency | Time between an operation or request and its response. |
cpu-core | CPU core | A processing unit within a multicore processor. |
workload | Workload | The collection of tasks a computer is currently performing. |
bottleneck | Bottleneck | A stage or resource that limits overall performance. |
memory-pressure | Memory pressure | A measure of how effectively a system meets its memory demands. |
disk-activity | Disk activity | Reading or writing data to storage. |
free-space | Free space | Storage capacity available for new information and operations. |
cache | Cache | Temporary stored data used to speed up later access in some situations. |
extension | Extension | A software add-on that provides extra functions. |
update | System update | An authorized change to software delivered through a supported channel. |
firmware | Firmware | Low-level software used for essential hardware functions. |
startup | Startup | The sequence of preparing a device and its software for use. |
login-item | Login item | An application or service set to run when a user signs in. |
antivirus | Security software | Programs or services that help detect and prevent digital threats. |
phishing | Phishing | Deceptive attempts to obtain information or induce unsafe actions. |
scareware | Scareware | Misleading warnings that pressure people into installing or buying software. |
managed-device | Managed device | Equipment administered under an organization’s rules and settings. |
administrator | Administrator | A person or account with authority to manage specified computer settings. |
authorization | Authorization | Permission to perform an action under an applicable owner or organization policy. |
official-support | Official support | Troubleshooting material or assistance from an authorized provider. |
error-message | Error message | A system or app notification describing an observed difficulty. |
progress-indicator | Progress indicator | A signal that an operation is underway or advancing. |
freeze | Freeze | A state in which an app or device does not respond as expected. |
restart | Restart | A controlled shutdown of a software session followed by startup. |
forced-shutdown | Forced shutdown | An abrupt power-off used when ordinary shutdown is unavailable. |
overheating | Overheating | An abnormal or unsafe rise in equipment temperature. |
cooling | Cooling | Methods that help hardware remain within safe operating temperatures. |
backup | Backup | A separate copy of information intended for restoration after loss. |
verification | Verification | Checking whether an action changed the original problem. |
escalation | Escalation | Requesting authorized help when a problem exceeds safe limits or remains unresolved. |
support-report | Support report | A record of the problem, observations, attempted actions, and results. |
diagnostics | Diagnostics | Tools and procedures used to gather evidence about a device’s condition. |
performance | Performance | The speed and responsiveness with which a computer performs tasks. |
responsiveness | Responsiveness | How promptly an app or system reacts to actions. |
disk-space | Disk space | Storage capacity available for information and operations. |
network-connection | Network connection | A communication link between a device and other systems. |
web-browser | Web browser | An app used to display and interact with webpages. |
chromeos | ChromeOS | Google’s operating-system family used by Chromebooks. |
windows-11 | Windows 11 | A Microsoft desktop operating system. |
macos | macOS | Apple’s operating system for Mac computers. |
peripheral | Peripheral | An external accessory connected to a computer. |
:::
