Beginner Practice Labs / Lab 8

## Lesson introduction

A message arrives in your email inbox with the subject **Immediate action required**. It appears to come from a familiar organization. The message says your account will close unless you follow a link and enter your password. The name and logo look convincing, but the request makes you uncomfortable. What should you do before taking any action? This lab gives you a practical, repeatable answer: **stop, inspect the message, verify the claim through a trusted route, and report or handle it appropriately**.

This is the **eighth MGU Beginner Practice Lab**. Earlier lessons taught you to create documents, use an email account, send an attachment, and search the web. This lesson combines those basic computer skills with an essential safety habit: deciding whether an email deserves your trust. You will study clearly labeled *fictional* examples, distinguish ordinary unwanted mail from attempts to steal information, use a consistent decision process, and practice selecting an appropriate response. You do not need to expose yourself to real fraudulent messages to learn the skill.

A phishing attempt can be carefully written, use a correct brand logo, imitate a person's writing style, or refer to a genuine purchase or appointment. A genuine email can contain errors or appear urgent. **No single visual clue proves that a message is authentic or fraudulent.** The safest skill is to recognize the risk presented by the requested action and **independently verify** important claims before complying. This approach is especially important when a message asks for passwords, security codes, money, new bank details, sensitive documents, or unusual software downloads.

> **Lab deliverable:** Analyze six fictional email messages using a written safety checklist; identify the strongest evidence and potential consequence in each; choose a safe action; explain how you would independently check any meaningful claim; and demonstrate how to locate the Report phishing or Junk control in your own email application **without submitting any real message for this exercise**. Produce a short incident-response plan for a scenario in which someone has already clicked or shared a credential.

**Level:** Beginner · **Suggested study and lab time:** 90–120 minutes · **Recommended prior work:** Beginner Practice Labs 1–7, especially Send an Email with an Attachment · **Equipment:** Any authorized device, this lesson, and optionally an email program opened to harmless messages · **Safety:** All teaching emails are simulated. Do not click suspicious links, open unexpected attachments, scan unknown codes, reply to a suspicious sender, forward actual phishing messages to classmates, or test unknown websites. Paper-based completion is fully supported.

### Learning objectives

After completing the lesson, you should be able to:

1. Define [[phishing|phishing]] and distinguish it from [[spam|spam]], routine account messages, and ordinary mistakes.
2. Locate and explain the significance of the [[display-name|display name]], actual [[sender-address|sender address]], [[subject-line|subject line]], [[reply-to|Reply-To]], and requested action.
3. Recognize [[urgency|artificial urgency]], [[impersonation|impersonation]], [[credential-theft|credential theft]], suspicious attachments, unexpected payment demands, and requests for [[verification-code|verification codes]].
4. Explain why attractive branding, polished writing, correct personal details, an HTTPS lock, or an email security banner cannot alone establish authenticity.
5. Apply a simple [[independent-verification|independent verification]] workflow without using contact information, buttons, or QR codes supplied in the questionable message.
6. Choose when to ignore, verify, report, delete, or escalate an email, taking into account workplace rules and a possible compromised account.
7. Locate phishing-reporting features in Gmail, Outlook, or another permitted email client and identify the limits of those features.
8. Complete six guided activities and a 30-question knowledge check, justifying decisions rather than guessing whether a design looks legitimate.
9. Explain urgent next steps if someone has already disclosed a password, one-time code, financial information, or opened an unsafe attachment.

### Materials and preparation

- Read all fictional messages in this lesson as **text on this page**. The made-up addresses use the reserved `.invalid` suffix and are **not real inboxes or real websites**. Never try to visit them.
- Use a blank worksheet, a notebook, or a new text document titled `Lab 8 Email Safety Review`. Record decisions without writing any real password, account number, actual scammer address, or private message content.
- If you are on a shared device, choose a private authorized workspace. Do not open a colleague's, family member's, or customer's mail to complete the activity.
- To locate reporting controls, you may use your own email application and a **known harmless message** or instructions only. Do not actually report an innocent message as malicious.
- If your email account is managed by an employer or school, use that organization's reporting procedure rather than improvising with live suspicious messages.
- If you have a visual, motor, cognitive, or learning accessibility need, use the alternative text inspection method and seek an approved screen-reader or keyboard route to the email controls.

### On this page

- [1. What makes an email suspicious?](#1-what-makes-an-email-suspicious)
- [2. How do you inspect the visible message?](#2-how-do-you-inspect-the-visible-message)
- [3. Which requests and tricks need special caution?](#3-which-requests-and-tricks-need-special-caution)
- [4. How do you verify safely before acting?](#4-how-do-you-verify-safely-before-acting)
- [5. Worked examples: reading six messages](#5-worked-examples-reading-six-messages)
- [6. How do you report and respond safely?](#6-how-do-you-report-and-respond-safely)
- [7. Guided practice: evaluate and decide](#7-guided-practice-evaluate-and-decide)
- [8. Troubleshooting, accessibility, and judgment](#8-troubleshooting-accessibility-and-judgment)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Completion review and further learning](#11-completion-review-and-further-learning)

## 1. What makes an email suspicious?

[[email|Email]] is a useful way to exchange information, but receiving a message does not mean you have verified who wrote it. A message may claim to be from a bank, a school, a delivery company, an employer, a friend, or a government office. Some claims are accurate. Others are attempts at [[social-engineering|social engineering]]: influencing you to take an action that benefits the attacker rather than you. [[phishing|Phishing]] is a kind of social engineering that uses deceptive messages to obtain credentials or information, deliver harmful content, or induce other unsafe actions.

For example, an attacker might send a fake security alert that requests your account password. The real subject is not whether the message looks official; it is whether someone is trying to make you reveal a secret or follow an unauthorized instruction. The attacker may copy an organization's logo, invent a deadline, imitate a manager's signature, or refer to an event that really occurred. Familiarity is not verification.

### Distinguish four common message types

| Type | Main characteristic | Typical response |
| --- | --- | --- |
| Routine legitimate message | Expected communication that matches your known activity | Read and respond normally, while using ordinary caution |
| Spam or unwanted marketing | Unrequested promotion or bulk email, not necessarily a credential attack | Use appropriate spam tools, or a trusted unsubscribe route for a legitimate sender |
| Potential phishing | Deceptive identity or request intended to obtain data, money, or unsafe action | Do not engage with the request; independently verify and report as appropriate |
| Unclear message | Insufficient evidence to decide immediately | Pause and seek verification from a trustworthy source |

A [[spam-filter|spam filter]] reduces unwanted mail but cannot catch every deceptive message, and it may occasionally treat legitimate mail incorrectly. An inbox is not a guarantee of authenticity; a spam folder is not proof of fraud. Similarly, a notification saying **External sender** indicates a message arrived from outside an organization, not that it is necessarily malicious. Use these signals as part of your assessment rather than as a substitute for thinking.

### Start with the action the sender wants

Ask: **What does this email want me to do, and what would I risk if it were fraudulent?** Reading a routine schedule reminder is very different from sending a one-time sign-in code to an unfamiliar person. A message requesting that you merely attend an appointment may be low-risk. A message demanding that you change payroll instructions or enter bank information creates immediate financial risk. Focus on the likely consequences before debating superficial details.

| Requested action | Risk to consider | Safer initial response |
| --- | --- | --- |
| Read a general announcement | Minimal if no action or download is required | Check context and source when useful |
| Open an unexpected file | Harmful software, hidden links, or data collection | Do not open; verify with a known sender separately |
| Sign in through an email link | Password or session theft | Navigate through your saved official app or address instead |
| Share a verification code | Account takeover or unauthorized transaction | Do not disclose the code; investigate directly |
| Send gift-card numbers or money | Fraudulent financial loss | Stop; confirm through an established channel |
| Change an employee's bank account | Payroll diversion or vendor-payment fraud | Follow independent approval and verification procedures |
| Scan a QR code to fix an account | Hidden redirect to a fake website | Avoid the code; use a known official route |

### Neither fear nor certainty is necessary

You do not need to prove a crime occurred before declining a suspicious request. You also do not need to label every unfamiliar message as malicious. A more accurate conclusion is often **unverified: do not act until checked**. This protects you from both common mistakes: falling for deception and dismissing a real service problem without examining it through official channels.

### Errors are not the only warning sign

Poor spelling can be a clue, but many fraudulent messages have polished language and familiar formatting. Conversely, a real small business or friend may send a short, poorly edited note. Treat evidence as cumulative. A convincing appearance does not turn an unexpected password request into a safe request, and a typo does not automatically make an ordinary message a scam.

### Practice with simulations, not live attacks

This lesson deliberately avoids sending real phishing emails, embedding clickable deceptive URLs, or asking you to inspect malicious attachments. You can learn the relevant judgment by examining fictional messages and explaining safe choices. In a real incident, follow your mail provider and organization's guidance; avoid making a suspicious situation worse for the sake of an exercise.

> **Core principle:** Suspicious email assessment is a decision about **identity, context, requested action, and consequence**. Appearance is only one piece of evidence.

## 2. How do you inspect the visible message?

Before you decide what to do with an email, identify its basic parts. Modern email apps may initially show only a sender's name, an abbreviated subject, and a short [[preview-text|preview]]. You may need to expand the sender information to see the actual address. The precise controls vary by service and device; the goal is to inspect the details **without clicking questionable message links or downloading files**.

### Read the message header in plain language

| Visible element | What it tells you | Important limitation |
| --- | --- | --- |
| Display name | Label that appears to identify a person or organization | It can be chosen or imitated by a sender |
| From address | Email address shown as the sender | It may be misleading, compromised, or spoofed |
| Reply-To address | Destination that replies may be sent to | A mismatch can be a warning; some legitimate services use one |
| Subject line | Main topic claimed by the message | It can be written to create panic or curiosity |
| Time and date | When your email account received or displays it | A recent timestamp does not validate the request |
| Recipient field | Who the email was addressed to | Attackers can personalize messages accurately |
| Body | Content and instructions | The requested action needs careful evaluation |
| Attachment label | File offered with the message | A familiar extension is not proof of safety |

An example can show a mismatch without placing anyone at risk:

```text
Display name: MGU Student Support (fictional)
From: notices@account-help.example.invalid
Reply-To: helpdesk@verification-mail.example.invalid
Subject: URGENT: Your student access ends today
Body: To avoid suspension, submit your password and code now.
```

This is **fictional teaching text**. The sender name claims authority, but neither address establishes an official university relationship. The request for a password and code is the strongest signal to stop. The label `.invalid` identifies deliberately nonoperational sample domains, not actual contact details.

### Inspect the whole sender address

An [[email-address|email address]] has a local part, the `@` sign, and a domain. A display name such as **Student Accounts** is not itself an address. Expand the sender details in the mail application when you need to inspect the domain. Pay attention to extra words, unexpected services, and addresses that do not fit your existing relationship with the organization.

For example, `student-help@notices.example.invalid` is an address at `notices.example.invalid`. The address `admin@maloneuniversity.org.accounts.example.invalid` is **not** an address at `maloneuniversity.org`; the actual domain suffix is under `example.invalid`. A familiar organization name appearing earlier in the text is not sufficient. Email addresses can also be sent from a real compromised account, so even an exact known address is not a guarantee of a safe request.

### Learn the difference between labels and destinations

A button reading **Review your account** may hide a destination that is different from its visible words. On desktop, hovering over a link may show its destination; however, hover previews can be incomplete, obscured, or absent. On phones, previews and long-press menus vary, and tapping can open a link unexpectedly. **Do not interact with real suspicious links merely to inspect them.** This lesson uses printed examples instead. If the request matters, open the known official site or app independently rather than relying on the button.

### A reassuring logo is not authentication

It is easy to copy colors, letterheads, and images into email. A familiar logo does not verify who sent the message. A signature, a photographed ID card, a plausible office address, and a case number may also be fabricated or copied from public sources. Never treat any of these as a substitute for contacting the organization independently.

An icon that says a message is encrypted, authenticated, or has passed a spam filter can be useful technical information. It does not prove that the human writing the message is trustworthy, that the sending account has not been compromised, or that the request is appropriate. Advanced email checks such as [[spf|SPF]], [[dkim|DKIM]], and [[dmarc|DMARC]] help mail systems evaluate sender authorization and alignment, but a beginner's central task remains verifying any consequential action.

### Recognize a possible reply redirection

A separate [[reply-to|Reply-To]] can be legitimate in newsletters, ticketing systems, and automated messages. It can also redirect a response away from the organization the message claims to represent. If an apparent official notice asks you to reply to a personal mailbox with documents or bank information, pause. Do not test the sender by replying; use a verified contact route.

### When you cannot see the full address

On mobile, sender information may be hidden behind a name or arrow. Use the app's supported details view, an accessible keyboard action, or official instructions. If the service or device does not let you inspect safely, do not force the issue. Independently contact the organization or ask an approved technical contact to review the message. You are not required to diagnose email headers to practice safe behavior.

> **Decision rule:** A sender's visible name can make a message *seem* familiar. The requested action and a separately verified relationship determine whether it is appropriate to comply.

## 3. Which requests and tricks need special caution?

Most suspicious messages rely on a small number of predictable pressures. Their exact words vary, but the pattern is often: claim an urgent problem or special opportunity, supply a convenient shortcut, and persuade the recipient to act before verifying it. These tactics target behavior more than computer expertise.

### Urgency and manufactured deadlines

An attacker may claim that your account will close within an hour, a parcel will be returned, your wages will be withheld, or an outstanding invoice must be paid immediately. Some legitimate alerts are time-sensitive; the distinguishing issue is whether the message tries to prevent you from checking the claim through a trusted channel. A [[deadline-pressure|pressure deadline]] does not remove the need for verification.

A safer response to an alleged account lockout is to open the service through your existing official app or a bookmark you previously trusted. If the problem is real, you should be able to confirm it there or through official support. Do not use a phone number provided only in the questionable email.

### Credential and code requests

Your password, passphrase, recovery code, and many one-time authentication codes are secrets. A [[verification-code|verification code]] often authorizes an action on an account; handing it to someone else may allow them to sign in or reset access. Even a message that appears to come from your employer or from an invitation service should not cause you to send a code in reply. Enter codes only as part of a sign-in process you deliberately initiated in the official application or site, with care that you are using the correct destination.

### Unfamiliar attachments and shared documents

A file named `Payroll_Update.pdf`, `Package_Notice.zip`, or `Invoice_Review.docx` could be relevant to your work, but its name alone proves nothing. Attackers can use unexpected attachments to persuade you to open harmful content, follow embedded links, or enable risky functionality. A shared-document email may instead lead to a fake sign-in page. Ask whether you were expecting the file from that person. If not, verify separately before opening it. **Do not enable macros, run commands, install certificates, or bypass security tools at the request of an unexpected message.**

### Fraudulent changes to payment details

An email may appear to come from a vendor, supervisor, employee, or relative and ask for an urgent payment, new bank account, gift-card purchase, or private financial record. This can be [[business-email-compromise|business email compromise]], where an attacker impersonates or gains access to a trusted business mailbox to redirect money or data. Even an otherwise genuine conversation thread may be compromised. Organizations should use a separate, established approval or callback process before making high-impact changes.

### Links, short URLs, and QR codes

A [[hyperlink|hyperlink]] can be labeled with reassuring words that do not match its destination. A [[shortened-link|shortened link]] can obscure the original site. A [[qr-code|QR code]] can direct a phone to a website, but the code itself does not show you whether the destination is safe. Unexpected codes in billing or account-security messages are not safer just because they look modern. Avoid scanning them; use an independently known service address or app.

### Scenarios beyond obvious account warnings

| Email pretext | What the sender wants | Primary concern |
| --- | --- | --- |
| Account locked in 30 minutes | Password or code entered through a link | Credential theft |
| Shared classroom notes | Sign-in on an unexpected document site | Account takeover |
| Unpaid delivery fee | Card number entered through a message link | Financial fraud |
| New payroll instructions | Banking change accepted without confirmation | Payment diversion |
| Unexpected party invitation | Email password to view event details | Credential theft |
| Government refund approved | Personal details supplied to claim payment | Identity theft |
| Security patch attached | Software run outside approved update process | Malware or device compromise |
| Meeting change from supervisor | Gift-card purchase or sensitive-file transfer | Authority impersonation |

### High-quality writing can still be malicious

A well-composed email can be fraudulent; a message that cites your real name, job title, last purchase, or colleague is not necessarily safe. Information may have been obtained from public profiles, compromised systems, or prior communications. Do not use the absence of misspellings as a certificate of trust. The most reliable habit is to recognize unusual demands and verify them using an independently established channel.

### What *not* to do for evidence

Do not click a suspicious link to see whether it works; do not open an attachment to test whether it is dangerous; do not call a number in the suspect message to ask if the email is real; and do not send a trial password or code. These are interactions with the very source whose identity is in question. You can document what is visible and ask for help through a trusted route without performing those actions.

> **Remember:** A message can be perfectly written and still be phishing. A message can contain mistakes and still be legitimate. Evaluate the requested action, its context, and independent confirmation.

## 4. How do you verify safely before acting?

The practical strategy is straightforward enough to apply in a crowded inbox. **Pause, inspect, verify independently, decide, and report when appropriate.** Repeating the same sequence reduces the chance of reacting to a message's emotional pressure.

### The five-step email safety process

1. **Pause.** Do not click, scan, download, reply, send money, or share a code merely because the message demands it. Treat unexpected high-impact instructions as unverified.
2. **Inspect.** Read the sender details and the request. Note any unusual address, inconsistency, attachment, urgency, or change in payment or login behavior. You do not need to interact with risky content.
3. **Verify independently.** Open an official app, use a previously trusted bookmark, type the website address you already know, consult an existing statement, or call a number you independently obtained. For a friend or supervisor, use a known phone number or a separately verified conversation.
4. **Decide.** If a real issue is confirmed, handle it in the official app or approved procedure. If deception is apparent, do not comply. If uncertain, escalate to a trusted contact or official help desk.
5. **Report and clean up.** Use your email application's built-in Report phishing control or the applicable organizational process. Delete or archive only as directed and after any required evidence preservation. Avoid repeatedly opening the message.

### What independent verification actually means

[[independent-verification|Independent verification]] requires a channel that does not depend on the suspect message. Searching for an official website through a familiar browser can be useful, but check the domain and avoid sponsored lookalikes. Even better, use an existing bookmark, a trusted app already on your device, a number on a card or statement, or an approved staff directory. Do not consider it independent if you copied a phone number or clicked a link from the same questionable email.

For example, if an unexpected message says your bank requires an urgent update, open your bank's installed app. Check the account's notices or call the official support number from your card. If the message claims a school assignment has changed, go to the normal class portal or ask the instructor using a known contact method. Do not use the email's special login page just to see whether the warning was correct.

### A simple decision table

| Observation | Classification to record | Next step |
| --- | --- | --- |
| Expected routine notice with no unusual request | Consistent with legitimate communication | Handle normally, remain alert |
| Unexpected message asking for password or code | Strong phishing concern | Do not provide secrets; verify and report |
| Familiar sender requests a surprise payment change | High-impact and unverified | Confirm through independent approved process |
| Message comes from a new but plausible contact | Unverified, not automatically malicious | Confirm context before sharing information |
| Unwanted promotion from a known retailer | Possibly legitimate marketing | Use safe spam or trusted unsubscribe options |
| Recognized fraud pattern with fake login request | Likely phishing | Use report feature or organization channel |
| Provider shows a security warning | Elevated concern | Do not bypass the warning; seek guidance |

### Why contacting the same thread is not enough

Replying to a questionable message is not independent because it may reach the attacker. Calling a number inside the message is not independent either. Even responding within an old conversation can be risky if the sender's account was taken over. For requests involving payment instructions, sensitive information, or an urgent change in procedure, verify through a different known route.

### A practical verification record

You can write a short note without preserving dangerous or personal details:

```text
Scenario: Unexpected account-closure notice (fictional)
Requested action: Enter password through emailed button
Observed issue: Password request and pressure deadline
Verification route: Open the known official service app
Finding: No action taken on the message; claim not yet confirmed
Disposition: Do not engage; report through authorized channel
```

A student should record **what they observed**, not falsely claim that they checked a live account or contacted an organization. For a classroom simulation, write what you *would* do and say it is a simulation.

### Respect the difference between evidence and certainty

You may identify many warning signs yet lack enough information to decide whether the sender actually intended fraud. This does not require risk-taking. The safe classification **unverified** means you will neither comply with the suspicious instruction nor declare the organization itself to be fraudulent. A legitimate issuer can confirm important information through a trusted route.

### When time pressure is real

Sometimes a claim needs timely attention, such as a financial transaction you do not recognize. Speed and caution are compatible: open the official app promptly, or call a known support number. Do not allow the email to dictate the method of response. Verification is a quick risk-control step, not an excuse to disregard a real concern.

> **Short form:** Stop the requested interaction. Check the claim someplace you already trust. Take action only after that verification.

## 5. Worked examples: reading six messages

The following examples are deliberately fictional. Every address is invented under `.invalid`. They are **not real emails to send, links to visit, companies to investigate, or messages to forward**. The goal is to describe the *risk* and the *next safe action*, not to identify a criminal sender by technical tracing.

### Example A. The urgent account reset

```text
From: Help Desk <account-services@help-notices.example.invalid>
Subject: FINAL WARNING: Account closes in 20 minutes
Message: Your school access will be blocked unless you
reply with your password and the code sent to your phone.
```

**Assessment:** Strong phishing indicators. The demand for a password and a current code is decisive for the student's behavior; the deadline increases pressure. A plausible help-desk name does not verify the sender. **Safe action:** Do not reply or share secrets. Open the school's known portal independently or contact its established support office. Report through the applicable channel. If the student has already supplied a code or password, follow the account-compromise steps in Section 6.

### Example B. A familiar colleague with new payment details

```text
From: Jordan, Accounts Team <jordan@office-mail.example.invalid>
Subject: Change of bank details for today's vendor payment
Message: Please use the replacement account shown in the
attached instructions. I cannot take calls this morning.
```

**Assessment:** High-risk, unverified instruction. The demand changes a financial destination and discourages a callback. Even if this appears within an existing conversation, the account could be compromised. **Safe action:** Do not open the unexpected attachment or change the payment. Apply existing business approval rules and contact the colleague using a previously known number or internal directory. Escalate to an authorized supervisor or finance team.

### Example C. A surprise shared document

```text
From: Classroom Files <documents@class-share.example.invalid>
Subject: Updated course materials for you
Message: A document has been shared with you.
To view it, log in using your usual email password.
```

**Assessment:** Unverified document invitation with a credential request. Many real services share files, so the mere phrase *shared document* does not prove fraud. The request to authenticate through a new path is the concern. **Safe action:** Open the normal class portal or trusted document service app independently and check whether the file is actually available. Ask the instructor via the established channel if needed.

### Example D. The unexpected delivery charge

```text
From: Parcel Status <shipping@parcel-notify.example.invalid>
Subject: Delivery paused — additional fee required
Message: Your package is on hold. Pay $2.95 through
the attached payment page to prevent its return.
```

**Assessment:** Suspicious payment redirection. A small fee can still be used to obtain card details. **Safe action:** Do not use the emailed payment page. If you actually expect a parcel, use the retailer's order history or the courier's known tracking channel. If nothing is expected, reporting may be the appropriate next step.

### Example E. The ordinary class reminder

```text
From: Course Coordinator <coordinator@classroom.example.invalid>
Subject: Reminder: Practice workshop next Tuesday
Message: Your previously scheduled workshop begins at
10:00 a.m. Bring your notes. No password or payment needed.
```

**Assessment:** Consistent with routine communication, but still a simulated and unverified message. The absence of a risky demand lowers the immediate concern; the sender's unfamiliar fictional address prevents a firm authenticity judgment. **Safe action:** Compare the schedule with an existing course calendar or known class portal. If consistent, note the reminder. Do not label it malicious solely because it is unfamiliar.

### Example F. The invitation with a QR code

```text
From: Event Desk <events@invitation-mail.example.invalid>
Subject: You are invited — scan to confirm attendance
Message: An unexpected invitation has arrived. Scan the
QR code and submit your email login code to RSVP.
```

**Assessment:** Strong phishing concern. The email proposes using an authentication code for an unrelated RSVP process. The QR code conceals the website until opened and may lead to a credential-stealing site. **Safe action:** Do not scan it, do not share codes, and verify any real invitation with the supposed host through a known contact. Report if inappropriate.

### Compare the case outcomes

| Case | Primary risk | Safe response | Should you comply directly? |
| --- | --- | --- | --- |
| A. Urgent account reset | Password and code theft | Official account route and report | No |
| B. Payment change | Business payment diversion | Known-number callback and approval | No |
| C. Document invitation | Fake sign-in flow | Existing class portal | No |
| D. Delivery fee | Fraudulent charge and card-data exposure | Verified order or courier channel | No |
| E. Class reminder | Low immediate action risk, source unverified | Check existing calendar | No risky request exists |
| F. QR invitation | Credential theft through an opaque link | Known host contact and report | No |

### Why the same answer is not right for every message

A learner who marks every unfamiliar sender as fraudulent misses important distinctions. The ordinary class reminder has no obvious harmful request, but its authenticity is not established just by its pleasant tone. The payment-change message is high-risk even if it appears to come from someone known. You need to describe what evidence would resolve the question without exposing yourself to danger.

### A seventh, more subtle thought experiment

Imagine a genuine colleague's email account has been compromised. The attacker replies to a real existing thread about a vendor bill and asks for a new banking destination. The sender address, signature, and context may all match prior correspondence. The unusual payment change still requires established approval and an independent callback. This illustrates why the verification process must be stronger than visual inspection alone.

### A defensible classification vocabulary

Use **routine or low concern**, **unverified and needs confirmation**, and **strong phishing concern**. These are practical learning classifications, not forensic findings or official security verdicts. A student can earn full credit by selecting a safe action and giving a clear reason even if the final identity of the fictional sender is unspecified.

> **Worked-example conclusion:** The objective is not to memorize bad domains. The objective is to avoid unsafe actions until the claim and instructions can be independently established.

## 6. How do you report and respond safely?

Recognizing an unsafe request is only part of the workflow. Reporting helps providers and organizations identify suspicious activity, and prompt action may reduce harm if information has already been exposed. Choose the method appropriate to your account, device, and local policy.

### Gmail on a computer

Google documents a **Report phishing** action in Gmail. In its current web interface, a user can open the appropriate message, select the menu near the Reply control, and choose **Report phishing**. This should be done only for a real message that warrants a report, not for a harmless practice email. Google may analyze reported material to help protect users. Menus can change; check the official Gmail Help article linked in Section 11.

1. Review your organization's policy if the account is managed.
2. Use the Gmail interface and identify the applicable message without clicking its links or attachments.
3. Find **More** near Reply, then **Report phishing** where that control is available.
4. Follow any confirmation prompts and applicable retention instructions.
5. Do not use a legitimate personal email as a reporting test for this lab.

### Outlook and Outlook.com

Microsoft's guidance describes **Report > Report phishing** on supported Outlook.com views, with equivalent commands in many Outlook versions. Availability may vary with classic Outlook, new Outlook, mobile versions, employer controls, and organizational reporting add-ins. Selecting Report phishing may notify the provider but does **not** necessarily block every future message from the sender. Do not assume a report means your account is otherwise protected.

1. Identify the suspicious message without activating risky content.
2. Look for the mail application's **Report** command or organization-specific reporting button.
3. Choose the phishing category if appropriate and permitted.
4. Use any local IT escalation or retention instructions if the message relates to work.
5. If there is no matching control, consult the provider's current help instructions or your IT team.

### Apple Mail, iCloud Mail, and mobile devices

On Apple devices, reporting and junk-mail options depend on the account provider. Apple describes ways to flag spam for iCloud Mail and report social-engineering attempts involving Apple accounts. A **Move to Junk** command is not always identical to an explicit provider-level **Report phishing** action. Use the service-specific help instructions and organization requirements. On Android and iPhone, menus may be represented by a three-dot control, an action menu, or another app-specific layout. Accessibility methods may expose the same command under an alternate label.

### Reporting outside the email app

For a personal phishing attempt in the United States, the Federal Trade Commission provides [ReportFraud.ftc.gov](https://reportfraud.ftc.gov/). The FTC also identifies the Anti-Phishing Working Group address `reportphishing@apwg.org` for reporting phishing emails. **Do not forward a real suspicious email as part of this classroom exercise**, and do not share sensitive personal information or credentials when making a report. If an employer has an established internal process, use that first and follow instructions about preserving evidence.

### If you already clicked or responded

The appropriate response depends on what happened. Clicking a link is not exactly the same as entering a password, disclosing a code, installing an application, or sending money. Avoid panic, but take the situation seriously and seek timely help.

| What happened | First safe response | Further action |
| --- | --- | --- |
| You only received or read a message | Do not engage with its requested actions | Report if appropriate; no need to assume compromise |
| You clicked a questionable link but entered nothing | Close the page; avoid additional interaction | Update browser/security tools, seek help if downloads or unusual behavior occurred |
| You entered an account password | From a known official app or site, change the password promptly | Review sessions and recovery settings, enable MFA, contact support if needed |
| You gave someone a verification code | Contact the account provider through an official channel immediately | Review access, change credentials as advised, revoke unauthorized sessions |
| You opened a file or installed software | Stop interacting with the file and seek technical support | Follow device security scanning and incident-response instructions |
| You gave card or bank information | Contact the financial institution via a trusted number immediately | Discuss card or account protection, monitor activity, report fraud |
| You shared identity information | Use official identity-theft guidance | Visit [IdentityTheft.gov](https://www.identitytheft.gov/) for appropriate steps |
| You changed a work payment destination | Alert the finance/security team promptly | Contact relevant bank and follow the organization's incident plan |

When the device is managed by a school or employer, notify the approved IT or security contact and follow its instructions; do not conceal the incident. For a suspected malware incident, the organization may request that you stop using the device or preserve the message for investigation. Do not start unauthorized investigations of accounts, systems, or other people's mail.

### Password and authentication recovery

If you disclosed an account secret, open the genuine service using a trusted app or saved address, not the suspicious message. Change your password, review recovery information, sign out unknown sessions where supported, and enable [[multi-factor-authentication|multi-factor authentication]] if not already active. An attacker may have changed account settings; seek provider support if you cannot sign in. If the same password was used for another account, change it there as well through its official site. For work accounts, follow your organization's security response before making changes that could affect an investigation.

### What if the report was a mistake?

Email providers can misclassify mail, and users can select the wrong reporting control. Many services offer a way to restore or mark legitimate mail as not phishing, depending on the interface. If a workplace message was incorrectly reported, contact the appropriate administrator. An honest correction is better than ignoring the error.

### Do not confuse deletion with reporting

Deleting a suspicious message may remove it from your inbox but might not notify the provider. Moving it to Junk can help filtering but may not be the same as a dedicated phishing report. Your organization may need to retain evidence before deletion. Use the approved sequence; do not keep exposing yourself to the content unnecessarily.

> **Safety principle:** Report a genuinely suspicious message through the provider or approved organization, but never use real suspicious material as a training prop or click its links merely to complete a checklist.

## 7. Guided practice: evaluate and decide

These activities use fictional scenarios only. You will not receive actual attack emails, contact their apparent senders, scan QR codes, install software, or report any real message for practice. Record answers in your notebook or a plain-text worksheet. If you use a live email program, work only with your own account and **do not click or submit** anything associated with a suspicious message. Each activity has a model answer that can be expanded after you have made your own decision.

### Activity 1. Identify the request and the risk

**Goal:** Separate visual presentation from the behavior being requested.

1. Read the six fictional messages in Section 5.
2. For each, write the apparent sender and subject in a few words.
3. Describe the action the message wants the recipient to take, without attempting it.
4. Decide whether the message poses a low concern, a need for verification, or a strong phishing concern.
5. Identify the potential consequence if a person obeyed an unsafe request.
6. Choose one safe first step for each message.
7. Explain why the routine class reminder and the urgent account reset should not be treated identically.

**Evidence:** Six brief decisions, each with at least one reason. A completed worksheet may use the table below as a format.

| Case | Requested behavior | Concern level | Proposed next step |
| --- | --- | --- | --- |
| A | Password and code | Strong phishing concern | Independent account check and report |
| B | Banking change | High-impact, unverified | Independent callback and approval |
| C | Sign in to a document | Unverified with phishing indicators | Check the existing class portal |
| D | Pay shipping fee | Suspicious financial request | Check actual order or courier independently |
| E | Note an appointment | Lower immediate concern, source unverified | Compare known calendar |
| F | Scan code, share login code | Strong phishing concern | Do not scan; verify and report |

:::answer Show Activity 1 model assessment
**A:** The request for a password and live code plus severe deadline is a strong phishing concern. **B:** A financial-destination change requires independent confirmation even when the sender seems familiar. **C:** A document-sharing notice can be legitimate, but sign-in should be done through the known class service. **D:** An unexpected small delivery payment can expose card information. **E:** An ordinary reminder may be fine, but check the known calendar if the sender is unfamiliar. **F:** A QR code leading to code disclosure is not appropriate to follow. All six decisions prioritize what the request would do, not how convincing its text looks.
:::

### Activity 2. Read a sender address without trusting the display name

**Goal:** Find the difference between a label, the visible address, and a possible impersonation domain.

Consider these made-up examples:

```text
Case 1: Display name: Campus Records
        From: desk@campus-updates.example.invalid

Case 2: Display name: University Accounts
        From: notice@maloneuniversity.org.login.example.invalid

Case 3: Display name: Your Supervisor
        From: manager@office-inbox.example.invalid
        Reply-To: billing@urgent-action.example.invalid
```

1. Underline the part after `@` in each visible sender address.
2. State whether the display name alone confirms a genuine sender.
3. Explain why the familiar organization name within Case 2's address does not make it the organization’s real email domain.
4. Notice that Case 3 includes a different Reply-To address; explain one legitimate possibility and one suspicious possibility.
5. Write what you would do if Case 3 demanded a new bank account for payroll.
6. Explain why a genuine sender address still would not justify sharing a password or code through email.

**Evidence:** Three domain identifications and a short written explanation of independent verification.

:::answer Show Activity 2 model analysis
Case 1's visible sending domain is `campus-updates.example.invalid`. Case 2's visible address ends with the domain `maloneuniversity.org.login.example.invalid`; the appearance of `maloneuniversity.org` within that longer invented domain does not turn the address into the actual university domain. Case 3's From and Reply-To are different. That can occur legitimately with service providers but can also redirect replies to a suspicious destination. For any unexpected payroll change, verify through a known supervisor or finance route. Even when an actual sender account is recognized, the request itself may be fraudulent or result from account compromise.
:::

### Activity 3. Choose an independent verification route

**Goal:** Select a method that does not depend on a questionable message.

1. Scenario: A supposed bank alert says your card is blocked and supplies a number in the email. Write your safest verification route.
2. Scenario: A school email says tomorrow's class is canceled and provides a new login page. Write how you would confirm the schedule.
3. Scenario: A coworker demands a different account for a vendor invoice. Name the established business control to use.
4. Scenario: A friend supposedly needs you to purchase gift cards immediately. Describe how you would contact that person.
5. Identify why replying to the questionable email does not qualify as independent verification.
6. Describe the outcome if the official service shows no corresponding account warning.
7. State how you would respond if the official service confirms a genuine issue: resolve it there, not through an unverified email link.

**Evidence:** Four safe verification routes plus explanations of why they are independent.

:::answer Show Activity 3 model verification decisions
For the bank, open the known official banking app or dial a number printed on the card. For the class change, use the established learning portal or an instructor contact already known. For the vendor payment, follow the organization's callback and approval process using directory information independent of the email. For the friend, call or message through a previously used and trusted contact method. Replying to the suspicious thread is not independent because the attacker may control it. If no official alert exists, do not comply; treat the message as unverified and consider reporting. If an official alert exists, take any needed action in the official channel.
:::

### Activity 4. Recognize the modern invitation and document trap

**Goal:** Apply the same safety rules to realistic non-bank messages.

A fictional message says:

```text
Subject: Photos from the community event
Body: The album is ready. A QR code is attached. Scan it,
then enter your email account password and the one-time
code sent to your phone to see the pictures.
```

1. Identify what makes the message attractive or believable.
2. Identify the sensitive information it asks for.
3. Explain why a QR code does not make an unknown destination trustworthy.
4. Choose a safe way to check whether the event organizer really shared photos.
5. Describe how you would handle the message if a real photo album is available through a known account.
6. State whether you should perform a test scan with a personal device. Explain why.
7. Write a one-sentence warning you could give a new computer user about surprising invitations.

**Evidence:** A short risk analysis and a safe alternate route, without visiting or scanning anything.

:::answer Show Activity 4 model answer
The message uses a pleasant social occasion and the curiosity of seeing photographs. The password and one-time code are account secrets, and sharing them can enable account takeover. A QR code hides its destination rather than verifying it. The student should ask the known organizer through an established contact method or open the already trusted photo service independently. They should not scan an unexpected code simply to test it or enter credentials for a surprise invitation. An appropriate warning is: **When an unexpected invitation asks for a login secret, verify with the host first and use your known account app instead of the message's link or code.**
:::

### Activity 5. Locate the report command without filing a false report

**Goal:** Understand where reporting controls are and what they do.

1. Identify your email service: Gmail, Outlook, iCloud Mail, or another approved service.
2. Open its official help documentation or the application's menu using only a clearly harmless message you own.
3. Find the action labeled **Report phishing**, **Report**, **Junk**, or an equivalent service-specific control.
4. Describe where the command appears. If your service offers only Junk, state that it is not necessarily identical to a phishing report.
5. Do **not** activate the report for a harmless message. If you cannot locate the command, record that limitation and identify where you would seek help.
6. Determine whether a school or workplace account has an additional approved security-reporting process.
7. Explain why reporting an actual attack is different from marking an unwanted but legitimate newsletter as spam.

**Evidence:** The provider name, location or help-path of the control, and an explanation of when it should be used. No real message must be sent, forwarded, or reported for the exercise.

:::answer Show Activity 5 reporting walkthrough
A Gmail user can find Google's documented **Report phishing** action in the message's More menu near Reply on the web interface. Outlook.com commonly provides **Report > Report phishing**. Apple and third-party mail apps can show Junk or other controls whose effects vary with the account provider. A managed work account may provide a dedicated report button. **Do not submit a test report against innocent mail.** If the command cannot be found, open the provider's official help page or ask the account administrator. Reporting phishing is intended for suspected deception; marketing mail may be handled through other spam or subscription controls.
:::

### Activity 6. Plan the response after a mistake

**Goal:** Recognize the difference between exposure types and select proportionate protective action.

For each fictional situation, write the **first urgent step** and **one follow-up**:

1. You read a suspicious email but did nothing else.
2. You clicked an uncertain link but entered no information.
3. You entered a password into a page opened from an unexpected email.
4. You sent someone a one-time security code.
5. You opened an unexpected attachment on a managed workplace computer.
6. You entered a card number on a purported delivery-fee page.
7. You disclosed a government-issued identification number or similar sensitive identity data.
8. Your business sent payment after a fraudulent change of bank details.

**Evidence:** A response matrix with eight distinct situations and no actual account data. Be explicit that the work is a simulation.

:::answer Show Activity 6 incident-response model
**1. Read only:** Do not act on its requests; report if appropriate. **2. Link clicked:** Close it, avoid further interaction, check for suspicious downloads or alerts, and seek help if concerned. **3. Password entered:** Open the genuine service independently and change the password promptly; review sessions and recovery settings, and activate MFA. **4. Code shared:** Contact the account provider immediately through an official route because unauthorized access may be underway. **5. Attachment opened at work:** Notify the authorized IT or security team promptly and follow its device-handling instructions. **6. Card number entered:** Contact the card issuer using the number on the card or its official app immediately. **7. Identity information disclosed:** Use official guidance at IdentityTheft.gov and contact relevant institutions as appropriate. **8. Business payment diverted:** Alert the finance/security team and the sending financial institution immediately to seek recovery and follow the incident procedure. The response should match what actually happened, not assume all exposures are identical.
:::

### Optional extension. Teach the decision process to someone else

Create a one-page beginner-friendly checklist using no real messages or sensitive information. Include the five steps: Pause, Inspect, Verify independently, Decide, and Report. For two original *fictional* scenarios, state the requested action, main risk, safe verification method, and appropriate disposition. Exchange the checklist with an authorized classmate or instructor only; do not send fabricated malicious-looking messages to unsuspecting recipients.

:::answer Show optional extension quality checklist
A useful one-page guide names the action to avoid, provides a concrete trusted alternative, and explains when to report. It does not rely on a logo, a writing mistake, or one suspicious word as proof of fraud. It avoids collecting real secrets and does not ask anyone to click an unknown link as practice.
:::

### Practice evidence record

| Activity | Evidence to retain | Real-world interaction required? |
| --- | --- | --- |
| 1. Classify six examples | Six concerns, risks, and responses | No |
| 2. Inspect sender details | Three visible domain identifications | No |
| 3. Independent verification | Four trusted verification routes | No |
| 4. Invitation trap | Risk analysis and alternate contact method | No |
| 5. Find report control | Documented menu location and purpose | No report submission |
| 6. Incident response | Eight first-action and follow-up choices | No |

### Instructor assessment guidance

Students should be rewarded for good reasoning, not for declaring every message a scam. Accept a response of **unverified; verify before complying** when the message lacks enough evidence. An instructor should never distribute a real malicious attachment, require students to enter credentials into a mock phishing site, or encourage forwarding an actual scam into a classroom discussion. Use the text scenarios from this lesson; that is sufficient to assess the targeted skill.

## 8. Troubleshooting, accessibility, and judgment

A learner may understand phishing yet have difficulty locating the relevant feature in a particular mail program. Interface labels differ by provider, app version, account configuration, or accessibility mode. The underlying safety process remains the same: avoid risky actions, find independent confirmation, and use the authorized reporting route.

### Common issues and safer alternatives

| Problem or uncertainty | Likely explanation | Practical response |
| --- | --- | --- |
| Only the sender's display name appears | App hides expanded address by default | Use the app's details view or verified support guidance |
| There is no Report phishing command | Interface differs or administrator controls reporting | Locate provider help or organization's approved report method |
| You cannot see a link destination | Mobile preview limitation or inaccessible control | Do not test the link; use independent verification |
| A legitimate email went to Junk | Filtering can produce false positives | Verify independently and restore if appropriate |
| A polished message looks official | Branding and fluent writing are easy to imitate | Inspect request and verify through known channel |
| The sender is an existing contact | Account or conversation may have been compromised | Confirm unexpected sensitive requests another way |
| The message has an HTTPS URL | Encrypted connection does not prove sender honesty | Do not use the supplied link to validate the claim |
| The message asks you to install an update | Installation path is unverified | Update from official system or application controls |
| A QR code is offered instead of a link | Destination is not visible from the printed code | Do not scan; navigate to known official service |
| You already responded | Appropriate remedy depends on disclosed material | Follow Section 6's incident-response matrix |
| You lack permission to use the email app | School, employer, or family rules may restrict access | Use the text-only simulation without account interaction |

### The email program says it blocked something

A provider warning can protect you from some threats, and the safest reaction is not to bypass it just to see the content. Do not disable filtering, remove security software, allow a forbidden attachment, or install a plug-in merely to finish the lab. If an important legitimate file seems blocked, contact the sender through a previously known channel and use the approved file-sharing workflow. A successful learning outcome is recognizing when to stop.

### Why the padlock and HTTPS can be misunderstood

HTTPS typically indicates that the connection between your browser and a named website is encrypted. It does not establish that the site belongs to the organization you expected. A fraudulent website can also use HTTPS. The key question remains whether you reached the correct, previously trusted organization by an independent route rather than trusting the email's link.

### When the message refers to something real

Scammers may know your name, the fact that you ordered something, or the name of a project you work on. A genuine detail does not validate the rest of the instructions. Similarly, an employee may receive a legitimate invoice from a new vendor, but a bank-account change or software installer remains a high-impact request needing approved confirmation. Use procedures designed for the risk, not just the apparent sender.

### Reading email with a screen reader or keyboard

Students who use [[screen-reader|screen readers]] may have trouble with decorative sender initials, icon-only report buttons, or hover-based link previews. Prefer descriptive text fields, the app's accessible sender details, keyboard-accessible menus, and provider help articles. A keyboard user can often move focus among message-list rows and buttons, but shortcuts and interaction orders vary by application. Avoid relying on a color indicator alone to judge risk. An accessible assessment can consist entirely of reading the fictional text and explaining the correct response.

### Mobile-device considerations

Phones often display less message information than desktop computers. A long press may expose an address in some apps, but could trigger a different action in another. **Never long-press or scan an actual suspicious link for the sake of this lesson.** If the original email came to a phone, open a known official app rather than trying to study its links. A separate trusted device may also be useful if you suspect the first device has been compromised, but follow the guidance of the account provider or workplace IT team.

### Privacy and respect for other users

Do not post screenshots of actual people's inboxes, reveal personal correspondence in group activities, share private addresses, or circulate a real suspicious link in a class chat. If an instructor needs evidence that students understand phishing, the fictional examples and written justifications are enough. For actual incidents, reporting and sharing evidence should use approved channels and collect no more information than necessary.

### Managing uncertainty without overreaction

It is reasonable to receive a strange but ultimately legitimate notice. Rather than accuse a person or company without evidence, say: **I have not verified this request, so I will use a known contact channel before acting.** That wording protects relationships, avoids unnecessary alarm, and maintains a clear security boundary. If you are an employee, an established incident-reporting policy may require you to report suspected phishing even before its origin is confirmed.

### A short troubleshooting decision sequence

1. Did I receive only a message, or did I already interact with it?
2. Is the request asking for credentials, codes, money, bank changes, private documents, or a download?
3. Can I inspect its basic details without activating the risky content?
4. What official app, existing bookmark, or known phone number can confirm the claim?
5. Is reporting required by the account provider, organization, or circumstances?
6. If I disclosed something or ran a file, who must I contact immediately?

> **Accessibility principle:** The learner is assessed on accurate decisions and safe habits, not on whether a particular menu layout, pointer movement, or visual marker is accessible to them.

## 9. Essential vocabulary

The following terms provide a practical vocabulary for recognizing and responding to suspicious email. Some appear with interactive dotted-underlined definitions in the MGU dashboard; the definitions remain available here even when interactive features are unavailable. The full tooltip registry is included at the end of the Markdown file.

### Messages and identification

A learner does not need to memorize every technical term to complete this lab. Concentrate first on the distinction between visible sender identity, requested action, independent verification, and a safe response. Use the definitions below as a reference while completing the activities.

- **Email:** Electronic messages exchanged between people and systems through email services.
- **Email client:** App or browser interface used to read and manage email.
- **Inbox:** Mailbox area that commonly displays messages received by an account.
- **Mailbox:** Account-linked location that stores email messages.
- **Email message:** Individual email with sender information and content.
- **Sender:** The party presented as originating an email.
- **Sender address:** Email address presented as the origin of a message.
- **Email address:** Account address containing a local name, an at sign, and a domain.
- **Display name:** Human-readable sender label that can be imitated or misleading.
- **From field:** Message field showing who the message claims sent it.
- **Reply-To:** Address that may receive replies instead of the From address.
- **Recipient:** Person or mailbox a message is addressed to.
- **Subject line:** Short description of an email's stated topic.
- **Preview text:** Brief extract of an email shown in a message list.
- **Message header:** Fields that identify message origin, recipients, dates, and handling details.
- **Body text:** Main visible written content of an email.
- **Attachment:** File associated with an email message.
- **Spam:** Unwanted or unsolicited email often sent in bulk.
- **Spam filter:** Automated feature that attempts to identify unwanted messages.
- **Junk folder:** Mail area used to contain suspected spam or unwanted mail.
- **Phishing:** Deceptive messaging intended to steal information or provoke unsafe actions.
- **Spear phishing:** Phishing designed for a particular person or organization.
- **Social engineering:** Manipulating people to disclose information or take unsafe actions.
- **Impersonation:** Pretending to be another person or organization.
- **Spoofing:** Making an electronic identity or signal appear to come from another source.
- **Compromised account:** Account accessed or controlled without its legitimate owner's permission.
- **Account takeover:** Unauthorized control of another person's online account.
- **Scam:** Deceptive scheme intended to obtain money, information, or an advantage.
- **Fraud:** Intentional deception to gain an unlawful or improper benefit.
- **Credential:** Information or proof used to establish access rights.
- **Credential theft:** Unauthorized obtaining of passwords or other access information.
- **Password:** Secret character sequence used to authenticate access.
- **Passphrase:** Longer memorized secret often made from multiple words.
- **Verification code:** Temporary code used to verify a sign-in or sensitive action.
- **One-time code:** Code intended for a single authentication or confirmation use.
- **Recovery code:** Backup secret used to recover account access.
- **Multi-factor authentication:** Authentication using two or more types of proof.
- **Authentication:** Process of checking that an identity or account claim is valid.
- **Security key:** Physical or platform-based authenticator used to prove account access.
- **Login page:** Screen where users attempt to sign in to a service.
- **Malicious link:** Link intended to lead to harmful or deceptive content.
- **Hyperlink:** Interactive reference that opens another page or resource.
- **Link text:** Visible words or label associated with a hyperlink.
- **Link destination:** Address or resource reached when a link is followed.
- **Shortened link:** Compact URL that redirects to a longer destination.
- **QR code:** Machine-readable visual code that may encode a website address or other data.
- **QR-code phishing:** Phishing that uses a QR code to lead victims to deceptive content.
- **URL:** Address identifying a resource on the web.
- **Domain:** Name registered for an internet location, such as a website or mail service.
- **Subdomain:** Named portion placed before a parent domain in an address.
- **Lookalike domain:** Web or email domain crafted to resemble a different trusted name.
- **HTTPS:** Encrypted web transport protocol that does not establish a site's honesty.
- **Website certificate:** Technical credential supporting encrypted website connections.
- **Urgency:** Sense that a request must be handled immediately.
- **Deadline pressure:** Tactic claiming severe consequences if the recipient does not act quickly.
- **Authority pressure:** Tactic invoking a boss, agency, or expert to discourage questioning.
- **Financial fraud:** Deception intended to obtain money or financial account access.
- **Business email compromise:** Business-targeted fraud involving impersonated or compromised email correspondence.
- **Invoice scam:** Fraudulent demand for payment presented as a legitimate bill.
- **Payment diversion:** Redirecting money to an unauthorized destination.
- **Gift-card scam:** Request for gift-card purchases or codes as part of deception.
- **Malware:** Software intended to cause harm or gain unauthorized access.
- **Macro:** Automated document instructions that can be abused in harmful files.
- **Executable file:** File containing program instructions that can run under appropriate conditions.
- **Security warning:** Alert that a website, email, file, or action may pose a risk.
- **External sender:** Sender address or source outside a particular organization.
- **Report phishing:** Command used to flag suspected credential-stealing or deceptive email.
- **Report spam:** Action used to flag unwanted or unsolicited mail.
- **Mark as Junk:** Action used to classify a message as unwanted in a mail service.
- **False positive:** Legitimate item incorrectly flagged as unsafe or unwanted.
- **False negative:** Unsafe item incorrectly left unflagged by a filter.
- **Independent verification:** Checking a claim using contact information or access not supplied by the questionable message.
- **Official application:** Application distributed by the genuine service owner.
- **Trusted bookmark:** Previously established browser shortcut to a verified website.
- **Known telephone number:** Contact number obtained independently from an established trusted source.
- **Security incident:** Event that may compromise information, devices, or accounts.
- **Incident response:** Actions taken to contain, assess, and recover from a security problem.
- **Escalation:** Sending an unresolved or high-risk matter to an appropriate responsible party.
- **Help desk:** Authorized organization or service contact for user assistance.
- **Managed account:** Online account administered by an employer, school, or organization.
- **Organizational policy:** Established rules governing acceptable and required actions.
- **Audit trail:** Record of actions or evidence useful for accountability.
- **Evidence:** Observations supporting an evaluation or decision.
- **Classification:** Grouping a message by concern level or type.
- **Verification:** Checking a claim or result against a trustworthy source.
- **Privacy:** Control and protection of personal or confidential information.
- **Sensitive information:** Data whose improper disclosure could cause harm or violate obligations.
- **Identity theft:** Misuse of another person's identifying information.
- **Account recovery:** Process for regaining authorized access to an account.
- **Login session:** Period of authenticated access to an account or service.
- **Sign out:** Action that ends an authenticated account session.
- **Security update:** Software change that addresses defects or vulnerabilities.
- **Antivirus:** Security software designed to detect or respond to certain malicious programs.
- **Screen reader:** Assistive technology that reads interface information aloud or via braille.
- **Keyboard navigation:** Operating interface controls using keys instead of a pointer.
- **Accessibility:** Design and practices that let people with varied abilities use technology.
- **Practice simulation:** Hypothetical learning exercise without a real-world operation.
- **Assessment rubric:** Criteria and point values used to evaluate practical work.
- **SPF:** Sender Policy Framework technology indicating which hosts may send email for a domain.
- **DKIM:** DomainKeys Identified Mail technology using signatures to support message authentication.
- **DMARC:** Email domain policy mechanism using SPF and DKIM alignment results.

## 10. Knowledge check

Select **one** answer per question and choose **Check answers** in the MGU lesson dashboard. This is a formative assessment, not a secure certification exam; the answers are visible in the Markdown source. Questions cover recognition, sender details, financial and credential risks, safe verification, reporting, and incident response. Read the explanations after checking.

:::quiz

? What is the safest first response to an unexpected email requesting your account password?
- [x] Do not provide it; check through a known official route.
- [ ] Reply asking if the message is genuine.
- [ ] Enter a test password to see what happens.
! Password requests in unexpected messages require independent verification, not compliance.

? What does a display name establish by itself?
- [ ] That the sender has passed a criminal background check.
- [x] Only the label displayed by the mail program.
- [ ] That the person named definitely owns the account.
! A display name can be chosen or imitated.

? What is phishing?
- [ ] Any email from a person you have never met.
- [ ] A normal calendar invitation that asks for no secrets.
- [x] A deceptive message intended to steal information or induce unsafe action.
! Phishing is about deception and harmful requested behavior.

? Which is an independent way to investigate a supposed bank alert?
- [x] Open the banking app you already use.
- [ ] Call the number printed in the unexpected email.
- [ ] Click the message link to see whether it opens.
! Use an already trusted route rather than contact information supplied by the message.

? Why is a polished logo not enough to trust a message?
- [ ] Every official message must be plain text.
- [x] Images and designs can be copied.
- [ ] Logos automatically prove account ownership.
! Branding is easy to imitate.

? What should you do if an unexpected message asks for a one-time code?
- [ ] Send it because it expires soon.
- [ ] Post it in a group chat for review.
- [x] Keep the code private and verify the request separately.
! One-time codes can authorize account access and must not be shared with unverified senders.

? What is the main risk of an unexpected attached program?
- [x] It may execute harmful software.
- [ ] It will always be a harmless PDF.
- [ ] Its filename proves the sender is trusted.
! Unexpected executables and attachments should not be opened merely to check them.

? A coworker asks you to change a vendor payment account. What should you do?
- [ ] Change it immediately if their signature looks normal.
- [x] Use an established independent callback and approval process.
- [ ] Reply to the same email and ask them to promise it is safe.
! Payment changes are high-impact and need controls outside the email thread.

? Which statement about spam filtering is correct?
- [ ] Every message in Inbox is verified as authentic.
- [ ] Everything in Junk is definitely criminal.
- [x] Filters can miss harmful mail or flag legitimate mail.
! Automated classification reduces risk but can make mistakes.

? An email shows an unfamiliar sender address and an ordinary class reminder. What is a reasonable classification?
- [x] Unverified; compare it with a known class calendar.
- [ ] Proven fraud solely because the sender is unfamiliar.
- [ ] Guaranteed safe because it asks for no money.
! Unfamiliarity alone does not establish intent; existing calendar information can confirm context.

? What is the safer choice with an unexpected QR-code login invitation?
- [ ] Scan quickly so the code does not expire.
- [x] Avoid scanning and verify with the supposed host independently.
- [ ] Send the code to classmates for testing.
! A QR code can conceal an unsafe website and does not validate the sender.

? What does HTTPS generally indicate?
- [ ] That the website was endorsed by your bank.
- [ ] That all email links to the site are legitimate.
- [x] An encrypted connection to the named website, not proof the site is honest.
! Encryption and authenticity of the claimed organization are different questions.

? What does Reply-To usually identify?
- [x] Where a response may be directed.
- [ ] The official owner of the company.
- [ ] A guarantee the sender was authenticated.
! A Reply-To field can differ legitimately or be used to redirect responses.

? How should you treat a surprise email saying your package requires a small payment?
- [ ] Pay immediately because the fee is low.
- [x] Check your real order and courier information through known services.
- [ ] Enter a card number to see if the claim is real.
! Small fees can be a pretext to capture payment information.

? Which action is appropriate for a fictional classroom phishing example?
- [ ] Email a realistic malicious attachment to a classmate.
- [ ] Send a real suspicious message to another learner inbox.
- [x] Analyze the text and state a safe response without using real links.
! Text-only simulations are sufficient and do not expose learners to live attacks.

? If you disclosed your email password through a suspicious page, what should you do?
- [x] Use the genuine service to change it promptly and review account access.
- [ ] Wait to see whether the attacker sends another message.
- [ ] Reply with a new password to correct the first one.
! Prompt recovery through official account controls limits further exposure.

? What is business email compromise commonly associated with?
- [ ] Any business email containing a table.
- [x] Impersonated or hijacked business correspondence used for fraud.
- [ ] An employee forgetting to add a signature.
! Business email compromise can lead to payment diversion or data theft.

? Which statement about poor spelling is accurate?
- [ ] Every phishing email has obvious grammar mistakes.
- [ ] Every well-written message is safe.
- [x] Errors can be a clue but neither prove nor disprove phishing.
! Modern deceptive messages can be highly polished and legitimate ones may contain errors.

? You clicked a suspicious link but entered nothing. Which response is proportionate?
- [x] Close the page, avoid further actions, and check for alerts or downloads.
- [ ] Assume your bank account was certainly emptied.
- [ ] Enter a password to find out whether the link is functional.
! Clicking alone is not the same as submitting a secret, though further checks may be warranted.

? How should a user treat a security warning about a suspicious attachment?
- [ ] Disable protections to complete the lab.
- [x] Stop rather than bypass the warning for the exercise.
- [ ] Forward the attachment to multiple friends.
! Do not defeat protective controls to perform a training task.

? Why is an existing email thread not always sufficient proof?
- [ ] Every old conversation is automatically fake.
- [ ] Email threads cannot contain attachments.
- [x] A legitimate account or thread can be compromised.
! Attackers sometimes gain access to familiar accounts and conversations.

? Which statement best describes independent verification?
- [x] Checking by a known route not supplied in the suspicious message.
- [ ] Calling the telephone number inside the message.
- [ ] Opening the message link in a second browser.
! The contact channel must be independent of the untrusted email.

? A real account problem is confirmed in the official app. What next?
- [ ] Return to the suspicious email and follow its special link.
- [x] Handle it in that official app or with its trusted support.
- [ ] Send the email sender your password.
! Confirmation of a real problem does not validate the message-specific response path.

? What is the purpose of reporting suspected phishing?
- [ ] To guarantee no fraudulent message will ever arrive again.
- [ ] To automatically cancel all your account subscriptions.
- [x] To flag suspicious messages through an authorized service or organizational process.
! Reporting helps identify abuse, but its downstream protections depend on the provider.

? If your workplace has an approved phishing-reporting channel, what should you do?
- [x] Follow it, including any evidence-preservation instructions.
- [ ] Publish the suspicious email on social media.
- [ ] Ignore the policy and send the attachment to coworkers.
! Organization-specific policies govern handling and escalation.

? What is a safe way to examine a link in a fictional worksheet?
- [ ] Click through every link to see where it ends.
- [x] Read its printed example text without visiting it.
- [ ] Scan a printed QR code with your banking device.
! Text-only inspection teaches the relevant judgment without live interaction.

? An attacker requests gift-card codes while impersonating a manager. What matters most?
- [ ] Whether the sender used the manager’s favorite color.
- [ ] Whether the message has a long signature.
- [x] The unusual transfer of money or value requiring independent confirmation.
! The high-risk requested action is the strongest reason to stop.

? If a one-time code was shared with a suspected attacker, what is the appropriate next step?
- [x] Contact the real account provider urgently through an official route.
- [ ] Wait until the code expires and do nothing.
- [ ] Send a second code in case the first failed.
! The attacker may be using a live code to complete unauthorized access.

? What can a legitimate sender address fail to prove?
- [ ] That email has a subject line.
- [x] That the account has not been taken over and the request is safe.
- [ ] That the sender has access to the internet.
! A compromised genuine account can originate harmful requests.

? What best demonstrates success in this lab?
- [ ] Opening at least three suspicious attachments.
- [ ] Correctly guessing which fictional email used the prettiest logo.
- [x] Clear risk reasoning, independent verification choices, and appropriate safe actions.
! Competence is shown by decisions and procedures, not by interacting with threats.
:::

:::answer Show the 30-question knowledge-check answer key
1. **A — Do not provide it; check through a known official route.** Password requests in unexpected messages require independent verification, not compliance.
2. **B — Only the label displayed by the mail program.** A display name can be chosen or imitated.
3. **C — A deceptive message intended to steal information or induce unsafe action.** Phishing is about deception and harmful requested behavior.
4. **A — Open the banking app you already use.** Use an already trusted route rather than contact information supplied by the message.
5. **B — Images and designs can be copied.** Branding is easy to imitate.
6. **C — Keep the code private and verify the request separately.** One-time codes can authorize account access and must not be shared with unverified senders.
7. **A — It may execute harmful software.** Unexpected executables and attachments should not be opened merely to check them.
8. **B — Use an established independent callback and approval process.** Payment changes are high-impact and need controls outside the email thread.
9. **C — Filters can miss harmful mail or flag legitimate mail.** Automated classification reduces risk but can make mistakes.
10. **A — Unverified; compare it with a known class calendar.** Unfamiliarity alone does not establish intent; existing calendar information can confirm context.
11. **B — Avoid scanning and verify with the supposed host independently.** A QR code can conceal an unsafe website and does not validate the sender.
12. **C — An encrypted connection to the named website, not proof the site is honest.** Encryption and authenticity of the claimed organization are different questions.
13. **A — Where a response may be directed.** A Reply-To field can differ legitimately or be used to redirect responses.
14. **B — Check your real order and courier information through known services.** Small fees can be a pretext to capture payment information.
15. **C — Analyze the text and state a safe response without using real links.** Text-only simulations are sufficient and do not expose learners to live attacks.
16. **A — Use the genuine service to change it promptly and review account access.** Prompt recovery through official account controls limits further exposure.
17. **B — Impersonated or hijacked business correspondence used for fraud.** Business email compromise can lead to payment diversion or data theft.
18. **C — Errors can be a clue but neither prove nor disprove phishing.** Modern deceptive messages can be highly polished and legitimate ones may contain errors.
19. **A — Close the page, avoid further actions, and check for alerts or downloads.** Clicking alone is not the same as submitting a secret, though further checks may be warranted.
20. **B — Stop rather than bypass the warning for the exercise.** Do not defeat protective controls to perform a training task.
21. **C — A legitimate account or thread can be compromised.** Attackers sometimes gain access to familiar accounts and conversations.
22. **A — Checking by a known route not supplied in the suspicious message.** The contact channel must be independent of the untrusted email.
23. **B — Handle it in that official app or with its trusted support.** Confirmation of a real problem does not validate the message-specific response path.
24. **C — To flag suspicious messages through an authorized service or organizational process.** Reporting helps identify abuse, but its downstream protections depend on the provider.
25. **A — Follow it, including any evidence-preservation instructions.** Organization-specific policies govern handling and escalation.
26. **B — Read its printed example text without visiting it.** Text-only inspection teaches the relevant judgment without live interaction.
27. **C — The unusual transfer of money or value requiring independent confirmation.** The high-risk requested action is the strongest reason to stop.
28. **A — Contact the real account provider urgently through an official route.** The attacker may be using a live code to complete unauthorized access.
29. **B — That the account has not been taken over and the request is safe.** A compromised genuine account can originate harmful requests.
30. **C — Clear risk reasoning, independent verification choices, and appropriate safe actions.** Competence is shown by decisions and procedures, not by interacting with threats.
:::

## 11. Completion review and further learning

The practical objective is to recognize a questionable message without taking unnecessary risks, identify the precise action that creates danger, and choose a trustworthy route for resolving any genuine business or personal need. The most successful student can explain **why** an email should be handled cautiously even when no individual detail proves fraud. This lesson does not require interacting with a real malicious message or conducting technical email forensics.

### Final practical assessment

Use the following rubric to review the six exercises and incident-response plan. The total is **100 points**. Evidence can consist of a written worksheet, an accessible spoken explanation, or a teacher-observed demonstration of harmless interface navigation. A student does not need to submit screenshots or private account information.

| Criterion | Maximum points | Acceptable evidence |
| --- | --- | --- |
| Identify requested actions and possible harm | 20 | Six case assessments explaining relevant risks |
| Interpret sender labels and addresses | 15 | Correctly explains From, Reply-To, and domain examples |
| Choose independent verification routes | 20 | Uses official app, known directory, or verified contact |
| Identify link, attachment, and QR-code dangers | 10 | Recognizes hidden destinations and sensitive requests |
| Understand safe reporting and privacy | 10 | Finds appropriate report/help route without false report |
| Match incident response to exposure | 20 | Responds differently to click, code disclosure, malware, or payment |
| Clarity, honesty, and professionalism | 5 | Explicitly labels simulation and protects sensitive details |
| **Total** | **100** | Safety reasoning and documented practice |

**Suggested proficiency interpretation:** 90–100 indicates strong independent safety judgment; 75–89 indicates a sound foundation with a few areas to strengthen; 60–74 indicates partial proficiency requiring targeted practice; below 60 indicates that important actions or distinctions remain unclear. These thresholds are teaching guidance, not a formal MGU grading policy. A fully text-based simulation can demonstrate the targeted judgment; no real phishing interaction is required.

### Completion checklist

1. I can define phishing and explain why it is not the same thing as ordinary spam.
2. I can identify an email's displayed name, visible sender address, subject, and requested action.
3. I understand that a logo, a known name, HTTPS, and fluent writing cannot alone establish a message's safety.
4. I know not to share passwords, one-time codes, recovery codes, or sensitive payment information in response to an unexpected message.
5. I can explain why an existing contact account or message thread may still be compromised.
6. I can select a previously trusted service app, bookmark, official number, or established staff contact to verify a claim.
7. I can distinguish a low-risk routine message from a high-impact request that should be held for verification.
8. I can describe the phishing-reporting option or approved reporting path for my email service.
9. I can respond differently to receiving a suspicious message, clicking a link, sharing a secret, or opening an unknown file.
10. I can complete the lesson using fictional examples and protect the privacy of real people.

### Real-world applications

These habits are useful when processing student records, booking appointments, responding to vendors, receiving invoices, managing payroll, reviewing event invitations, and communicating with family. In every setting, the underlying lesson is the same: email is an efficient way to notify someone, but it should not bypass the established authentication, approval, or payment process. When a message is important, verify the claim through the normal service or responsible person; then perform the legitimate action there.

### Official references and safety guidance

- [Federal Trade Commission: How to Recognize and Avoid Phishing Scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams) — examples, verification advice, reporting, and steps after exposure.
- [FTC: Protect Yourself from Phishing Scams](https://consumer.ftc.gov/consumer-alerts/2025/04/protect-yourself-phishing-scams) — examples of suspicious claims and independent contact methods.
- [FTC: Unexpected invitations asking for passwords or codes](https://consumer.ftc.gov/consumer-alerts/2026/05/asked-enter-your-email-address-and-password-open-party-invite-thats-scam) — an invitation-themed phishing warning.
- [FTC: Scammers hide harmful links in QR codes](https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information) — why unexpected QR-code actions deserve caution.
- [Google: Avoid and report phishing emails in Gmail](https://support.google.com/mail/answer/8253?hl=en) — sender inspection and reporting features.
- [Microsoft: Phishing and suspicious behavior in Outlook](https://support.microsoft.com/en-gb/outlook/mail/phishing-and-suspicious-behavior-in-outlook) — identifying, reporting, and understanding warning markers.
- [Apple: Recognize and avoid social engineering schemes](https://support.apple.com/en-us/102568) — identifying and handling attempts that imitate services or trusted contacts.
- [ReportFraud.ftc.gov](https://reportfraud.ftc.gov/) — U.S. fraud-reporting service.
- [IdentityTheft.gov](https://www.identitytheft.gov/) — U.S. identity-theft recovery guidance.

These are official or provider-authored public help resources. Email interface layouts and control names can change. Read current instructions for your particular account, device, and organization before acting on an actual message.

### Continue the Beginner Practice Labs course

[Previous lab: Search, Download, and Save a File](/department/computer-science/basic-computer-skills/beginner-practice-labs/search-download-and-save-a-file/) · [Beginner Practice Labs course index](/department/computer-science/basic-computer-skills/beginner-practice-labs/) · [Next lab: Basic Troubleshooting Scenario](/department/computer-science/basic-computer-skills/beginner-practice-labs/basic-troubleshooting-scenario/)

> **Completion statement:** I can identify a suspicious request, inspect the available email information without interacting with unsafe content, verify important claims through independently trusted channels, use appropriate reporting procedures, and describe the right response if I have already disclosed information. I understand that a simulated task is not an actual security investigation or incident report.

:::terms
email | Email | Electronic messages exchanged between people and systems through email services. |
email-client | Email client | App or browser interface used to read and manage email. |
inbox | Inbox | Mailbox area that commonly displays messages received by an account. |
mailbox | Mailbox | Account-linked location that stores email messages. |
message | Email message | Individual email with sender information and content. |
sender | Sender | The party presented as originating an email. |
sender-address | Sender address | Email address presented as the origin of a message. |
email-address | Email address | Account address containing a local name, an at sign, and a domain. |
display-name | Display name | Human-readable sender label that can be imitated or misleading. |
from-field | From field | Message field showing who the message claims sent it. |
reply-to | Reply-To | Address that may receive replies instead of the From address. |
recipient | Recipient | Person or mailbox a message is addressed to. |
subject-line | Subject line | Short description of an email's stated topic. |
preview-text | Preview text | Brief extract of an email shown in a message list. |
message-header | Message header | Fields that identify message origin, recipients, dates, and handling details. |
body-text | Body text | Main visible written content of an email. |
attachment | Attachment | File associated with an email message. |
spam | Spam | Unwanted or unsolicited email often sent in bulk. |
spam-filter | Spam filter | Automated feature that attempts to identify unwanted messages. |
junk-folder | Junk folder | Mail area used to contain suspected spam or unwanted mail. |
phishing | Phishing | Deceptive messaging intended to steal information or provoke unsafe actions. |
spear-phishing | Spear phishing | Phishing designed for a particular person or organization. |
social-engineering | Social engineering | Manipulating people to disclose information or take unsafe actions. |
impersonation | Impersonation | Pretending to be another person or organization. |
spoofing | Spoofing | Making an electronic identity or signal appear to come from another source. |
compromised-account | Compromised account | Account accessed or controlled without its legitimate owner's permission. |
account-takeover | Account takeover | Unauthorized control of another person's online account. |
scam | Scam | Deceptive scheme intended to obtain money, information, or an advantage. |
fraud | Fraud | Intentional deception to gain an unlawful or improper benefit. |
credential | Credential | Information or proof used to establish access rights. |
credential-theft | Credential theft | Unauthorized obtaining of passwords or other access information. |
password | Password | Secret character sequence used to authenticate access. |
passphrase | Passphrase | Longer memorized secret often made from multiple words. |
verification-code | Verification code | Temporary code used to verify a sign-in or sensitive action. |
one-time-code | One-time code | Code intended for a single authentication or confirmation use. |
recovery-code | Recovery code | Backup secret used to recover account access. |
multi-factor-authentication | Multi-factor authentication | Authentication using two or more types of proof. |
authentication | Authentication | Process of checking that an identity or account claim is valid. |
security-key | Security key | Physical or platform-based authenticator used to prove account access. |
login-page | Login page | Screen where users attempt to sign in to a service. |
malicious-link | Malicious link | Link intended to lead to harmful or deceptive content. |
hyperlink | Hyperlink | Interactive reference that opens another page or resource. |
link-text | Link text | Visible words or label associated with a hyperlink. |
link-destination | Link destination | Address or resource reached when a link is followed. |
shortened-link | Shortened link | Compact URL that redirects to a longer destination. |
qr-code | QR code | Machine-readable visual code that may encode a website address or other data. |
quishing | QR-code phishing | Phishing that uses a QR code to lead victims to deceptive content. |
url | URL | Address identifying a resource on the web. |
domain | Domain | Name registered for an internet location, such as a website or mail service. |
subdomain | Subdomain | Named portion placed before a parent domain in an address. |
lookalike-domain | Lookalike domain | Web or email domain crafted to resemble a different trusted name. |
https | HTTPS | Encrypted web transport protocol that does not establish a site's honesty. |
ssl-certificate | Website certificate | Technical credential supporting encrypted website connections. |
urgency | Urgency | Sense that a request must be handled immediately. |
deadline-pressure | Deadline pressure | Tactic claiming severe consequences if the recipient does not act quickly. |
authority-pressure | Authority pressure | Tactic invoking a boss, agency, or expert to discourage questioning. |
financial-fraud | Financial fraud | Deception intended to obtain money or financial account access. |
business-email-compromise | Business email compromise | Business-targeted fraud involving impersonated or compromised email correspondence. |
invoice-scam | Invoice scam | Fraudulent demand for payment presented as a legitimate bill. |
payment-diversion | Payment diversion | Redirecting money to an unauthorized destination. |
gift-card-scam | Gift-card scam | Request for gift-card purchases or codes as part of deception. |
malware | Malware | Software intended to cause harm or gain unauthorized access. |
macro | Macro | Automated document instructions that can be abused in harmful files. |
executable-file | Executable file | File containing program instructions that can run under appropriate conditions. |
security-warning | Security warning | Alert that a website, email, file, or action may pose a risk. |
external-sender | External sender | Sender address or source outside a particular organization. |
report-phishing | Report phishing | Command used to flag suspected credential-stealing or deceptive email. |
report-spam | Report spam | Action used to flag unwanted or unsolicited mail. |
mark-junk | Mark as Junk | Action used to classify a message as unwanted in a mail service. |
false-positive | False positive | Legitimate item incorrectly flagged as unsafe or unwanted. |
false-negative | False negative | Unsafe item incorrectly left unflagged by a filter. |
independent-verification | Independent verification | Checking a claim using contact information or access not supplied by the questionable message. |
official-app | Official application | Application distributed by the genuine service owner. |
trusted-bookmark | Trusted bookmark | Previously established browser shortcut to a verified website. |
known-number | Known telephone number | Contact number obtained independently from an established trusted source. |
incident | Security incident | Event that may compromise information, devices, or accounts. |
incident-response | Incident response | Actions taken to contain, assess, and recover from a security problem. |
escalation | Escalation | Sending an unresolved or high-risk matter to an appropriate responsible party. |
help-desk | Help desk | Authorized organization or service contact for user assistance. |
managed-account | Managed account | Online account administered by an employer, school, or organization. |
policy | Organizational policy | Established rules governing acceptable and required actions. |
audit-trail | Audit trail | Record of actions or evidence useful for accountability. |
evidence | Evidence | Observations supporting an evaluation or decision. |
classification | Classification | Grouping a message by concern level or type. |
verification | Verification | Checking a claim or result against a trustworthy source. |
privacy | Privacy | Control and protection of personal or confidential information. |
sensitive-information | Sensitive information | Data whose improper disclosure could cause harm or violate obligations. |
identity-theft | Identity theft | Misuse of another person's identifying information. |
account-recovery | Account recovery | Process for regaining authorized access to an account. |
session | Login session | Period of authenticated access to an account or service. |
logout | Sign out | Action that ends an authenticated account session. |
security-update | Security update | Software change that addresses defects or vulnerabilities. |
antivirus | Antivirus | Security software designed to detect or respond to certain malicious programs. |
screen-reader | Screen reader | Assistive technology that reads interface information aloud or via braille. |
keyboard-navigation | Keyboard navigation | Operating interface controls using keys instead of a pointer. |
accessibility | Accessibility | Design and practices that let people with varied abilities use technology. |
practice-simulation | Practice simulation | Hypothetical learning exercise without a real-world operation. |
assessment-rubric | Assessment rubric | Criteria and point values used to evaluate practical work. |
spf | SPF | Sender Policy Framework technology indicating which hosts may send email for a domain. |
dkim | DKIM | DomainKeys Identified Mail technology using signatures to support message authentication. |
dmarc | DMARC | Email domain policy mechanism using SPF and DKIM alignment results. |
:::
