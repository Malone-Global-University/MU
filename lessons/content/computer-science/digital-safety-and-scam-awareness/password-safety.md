Basic Computer Skills / Digital Safety and Scam Awareness

## Lesson 1: Password Safety

Imagine that you use one short password for email, online shopping, and a school account. One shopping service experiences a data breach. Someone who obtains your stolen sign-in information tests it on your email account and gets in. Because your email receives password-reset messages from other services, that single compromise could affect several accounts. The problem is not that you failed to memorize an unusual symbol. The problem is that one guessable or reused secret became a key to more than one digital door.

[[password-safety|Password safety]] means creating, protecting, using, and recovering account credentials in ways that reduce unauthorized access. A [[password|password]] is a secret used to prove that a person is entitled to sign in. Password safety also involves recognizing suspicious requests, protecting an important email account, selecting secure ways to store credentials, and knowing when to change a password. There is no single setting that guarantees safety; a dependable system consists of several habits that work together.

This is Lesson 1 of MGU's nine-part **Digital Safety and Scam Awareness** sequence. The next lesson examines two-factor authentication in greater depth. We will begin with passwords because nearly every learner encounters them on websites, phones, school systems, workplace services, or financial accounts. Windows 11 and Microsoft Edge provide familiar desktop examples, but the same decisions apply to Chrome, Firefox, Safari, macOS, Chromebook, iPhone, iPad, and Android. Exact menu names and available features vary by service and software version.

The exercises use **fictional people, fictional services, and fictional credentials**. Never enter a real password, master password, device PIN, one-time code, passkey detail, or recovery code into a classroom answer, quiz, shared document, screenshot, chat, or demonstration. You can learn every required skill in this lesson without opening a real account or sharing a secret.

**Level:** Beginner · **Estimated study time:** 105–140 minutes · **Prerequisites:** Basic familiarity with opening a browser and recognizing a sign-in screen · **Practice equipment:** Computer, phone, tablet, or paper worksheet; internet access optional · **Safety:** All password examples are intentionally public teaching examples and must never be adopted as real passwords.

> **Essential idea:** Give every important account its own long, unpredictable password; use a trusted password manager when practical; protect sign-ins with stronger authentication; and treat unexpected requests for passwords or codes as reasons to stop and verify.

### Learning objectives

After completing this lesson, you should be able to:

1. Explain what passwords protect and why email and recovery accounts deserve special attention.
1. Distinguish long, unpredictable, unique passwords from short, predictable, or reused ones.
1. Describe the purpose of a password manager, its password generator, and its protected vault.
1. Recognize password phishing and unsafe requests for verification codes or recovery information.
1. Explain the role of two-factor authentication, passkeys, and recovery methods without treating any one tool as a guarantee.
1. Identify appropriate responses to a suspected password leak, account takeover, or unexpected sign-in alert.
1. Apply a repeatable password-safety checklist to fictional everyday scenarios.

### On this page

- [1. What passwords protect](#1-what-do-passwords-protect-and-why-do-they-matter)
- [2. Choosing stronger passwords](#2-how-do-you-choose-a-strong-password-or-passphrase)
- [3. Keeping passwords unique](#3-why-must-each-account-have-a-different-password)
- [4. Using password managers](#4-how-do-password-managers-help)
- [5. Protecting the sign-in process](#5-how-do-you-protect-sign-ins-beyond-the-password)
- [6. Recovering and responding](#6-what-should-you-do-when-a-password-or-account-is-at-risk)
- [7. Guided practice](#7-guided-practice-build-safer-password-habits)
- [8. Common misconceptions](#8-common-misconceptions-and-avoidable-mistakes)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-mgu-library-connections-and-next-steps)

## 1. What do passwords protect, and why do they matter?

### 1.1 The difference between a username and a secret

An [[account|account]] is a record maintained by a service for a particular user or organization. A [[username|username]] is an account identifier; it might be an email address, chosen name, or employee number. A username often is not secret. The password is intended to be secret. During [[authentication|authentication]], a service checks evidence that you are the authorized user. Once authenticated, the service may let you view files, send messages, purchase products, or change account settings according to your permissions.

Think of the username as identifying which door you want to open and the password as part of the evidence that you are allowed through it. That analogy has limits: digital services can apply extra checks, keep you signed in through a [[session|session]], and grant different permissions to different people. A password alone does not prove the signer is trustworthy or that the computer is free from harmful software.

| Everyday item | What it does | Is it meant to be secret? |
| --- | --- | --- |
| Username or login email | Identifies an account | Usually no |
| Password or passphrase | Proves knowledge of a protected secret | Yes |
| Device unlock PIN | Unlocks a device or local authentication method | Yes |
| One-time sign-in code | Completes a particular verification attempt | Yes |
| Account recovery code | Helps recover an account if another method is unavailable | Yes |
| Public profile name | Displays an identity to other users | No |

A [[pin|PIN]] is not automatically the same as a website password. A Windows Hello PIN, for example, may unlock a credential associated with a particular device. A bank card PIN performs another task. They have different systems and rules, but you should keep every PIN private and follow the relevant provider's guidance.

### 1.2 The accounts with the greatest consequences

Accounts differ in the harm that unauthorized access could cause. Your primary email account is often especially important because other services send password-reset links, security alerts, receipts, and verification information to it. If someone takes over your email, they may be able to attempt account recovery elsewhere. Financial accounts can expose money and sensitive records. A school or workplace account can expose other people's data and institutional resources.

| Account category | Possible consequence of unauthorized access | Priority habit |
| --- | --- | --- |
| Primary email | Password-reset messages or private correspondence may be misused | Unique password and strong additional authentication |
| Banking or payment | Unauthorized transactions or disclosure of financial records | Unique credentials and prompt alert review |
| School or workplace | Loss of files, privacy, or organization access | Follow institutional security requirements |
| Shopping | Orders, saved addresses, or payment methods may be misused | Unique password and account monitoring |
| Social media | Impersonation or harmful messages to contacts | Protect sign-in and recovery options |
| Password manager | Many stored account credentials could be exposed | Strong vault protection, MFA, and recovery planning |

### 1.3 How a password can become known

An attacker does not always have to guess a secret character by character. Passwords can be exposed when someone reuses credentials found in a [[data-breach|data breach]], enters them on a fraudulent sign-in page, shares them by mistake, uses a predictable pattern, or leaves an unlocked device unattended. [[malware|Malware]] and compromised devices can sometimes capture information as it is entered or used. A service's own safeguards also matter: users cannot control every organization's security practices.

Important distinctions include:

- **Guessing:** Trying common words, familiar names, birthdays, keyboard patterns, or predictable variations.
- **Password reuse:** Taking a password stolen from one service and trying it at another.
- **Phishing:** Tricking someone into typing a secret into a fraudulent form or revealing it to an impersonator.
- **Shoulder surfing:** Watching someone type or expose a secret on a screen.
- **Device compromise:** Capturing data through unauthorized software or access to an unlocked device.
- **Account recovery abuse:** Exploiting weak recovery settings or deceptive requests to regain access without the original password.

The key distinction is between preventing an attacker from learning a password, preventing an already-leaked password from opening other accounts, and detecting an unauthorized sign-in early. Strong password practices help with the first two; alert review and authentication controls help with the third.

### 1.4 A practical security model

Good protection uses several layers. A unique password limits damage from a breach elsewhere. A password manager makes strong unique credentials easier to manage. [[multifactor-authentication|Multifactor authentication]] adds an additional kind of sign-in evidence when supported. Recovery planning helps prevent permanent lockout. Careful attention to messages and web addresses reduces the risk of disclosing your credentials to a scammer.

No layer replaces the others. A long password typed on a fraudulent website may still be stolen. An additional sign-in code can be stolen by a convincing scam. A protected vault does not help if someone gains control of a device and account while they are already unlocked. The goal is risk reduction through overlapping, realistic habits.

## 2. How do you choose a strong password or passphrase?

### 2.1 Start with length and unpredictability

The strength of a password is influenced by how difficult it would be for an attacker to predict or guess it. **Length, unpredictability, and uniqueness** are the main user-controlled properties to prioritize. A longer string provides more possible arrangements than a shorter one when the characters are chosen in ways attackers cannot easily anticipate. But merely making a familiar word longer by repeating it does not make that pattern unpredictable.

The United States National Institute of Standards and Technology (NIST) updated its digital-identity guidance in 2025. NIST SP 800-63B-4 requires services covered by its guidance to set a minimum of **15 characters for a password used as the only authentication factor**; it allows a minimum of **8 characters** when the password is used within a multifactor process. These are requirements for covered service providers, not a declaration that every existing website already follows them. **For learners choosing a password themselves, aim for at least 15 characters, preferably more, and always follow the actual service's rules.** A password manager can generate longer, less predictable passwords without forcing you to memorize each one.

NIST also advises services not to impose arbitrary rules requiring particular mixtures of uppercase letters, numbers, or symbols, and not to require routine password changes without evidence of compromise. Some existing services still impose such rules. Comply with the service's accepted format, but do not mistake a forced special character for proof that a password is strong. See [NIST's password guidance](https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password) and [SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html).

### 2.2 Recognize weak and predictable choices

Short common words and published examples are risky because attackers can try many obvious candidates before attempting every possible combination. Personal facts such as a name, birth year, address, favorite team, pet, or public social-media information are poor foundations for a password. A predictable substitution such as replacing `a` with `@` may not help much if the rest of the word is familiar.

| Fictional teaching example | Main weakness | Better approach |
| --- | --- | --- |
| `password123` | Common word with a predictable number | Generate a long unique random value |
| `Summer2026!` | Common seasonal pattern and year | Use unrelated random words or a generated value |
| `qwerty12345` | Keyboard sequence | Avoid keyboard patterns entirely |
| `AlexBirthday99` | Guessable personal reference | Exclude discoverable personal information |
| `CatCatCatCatCat` | Long but highly repetitive | Prefer actual unpredictability, not repetition |
| `BlueGarden!1`, `BlueGarden!2` | Same base reused with minor changes | Generate an independent password for each account |

All strings in this table are **public examples of patterns to avoid**. Never use any of them as a real password. Do not submit a real candidate password to an unfamiliar website claiming it will measure its strength; such a website could collect the secret. Use a reputable password manager's built-in generator or supported account-creation guidance instead.

### 2.3 A password versus a passphrase

A [[passphrase|passphrase]] is a password made from multiple words or a longer phrase. A set of unrelated words selected at random can be easier to remember than a long random collection of letters, digits, and symbols. Random choice matters. A famous quotation, song lyric, family motto, predictable sentence, or public example is not an appropriate passphrase simply because it has many characters.

A useful learning method for a passphrase that truly must be remembered is to select several **unrelated words with a trustworthy random method**, keep the order private, and ensure the result meets the service's length rules. If spaces are permitted, they can help readability. If a website prohibits spaces or imposes other restrictions, adapt the format rather than repeatedly guessing at rejected settings. Do not substitute personal facts for random selection.

For illustration only, `lantern-otter-bicycle-mist` is a *published classroom example*, not a password anyone should use. Its purpose is to show the form of unrelated words. It is not proof that every four-word combination has equal strength. Common word lists, selection methods, and predictable patterns can affect security. A password manager's generator is usually the more practical choice for accounts whose passwords do not need to be memorized.

### 2.4 Why the number of different character types is not enough

Consider two fictional passwords: one is short with many symbols added to a predictable name; the other is substantially longer and generated independently by a trusted tool. The second is generally the safer pattern. A mixture of letters and symbols does not overcome a tiny or obvious candidate space. Conversely, a long passphrase may be useful even if it does not have decorative symbols.

| Feature | Helpful when... | Not sufficient when... |
| --- | --- | --- |
| Length | The value contains many hard-to-predict characters or words | It is mostly repeated text or public information |
| Randomness | The value is generated without a predictable personal pattern | It comes from a published teaching example |
| Character variety | It adds unpredictability and meets service requirements | It decorates a common word or birthday |
| Uniqueness | No other account shares the same password | The secret is typed into a fraudulent website |
| Confidentiality | The secret is not disclosed or stored carelessly | It is reused after being compromised |

### 2.5 A realistic way to create a password

For most accounts, follow this workflow:

1. Begin from the service's trusted website or application, not an unexpected message link.
1. If an appropriate password manager is available, select its **Generate password** feature.
1. Choose a long, unique generated password that meets the service's allowed rules.
1. Save it only in the correct protected vault or another institutionally approved secure location.
1. Confirm the associated website address and username are correct before proceeding.
1. Complete the service's normal account-creation or change process.
1. Enable a stronger sign-in method where supported and review recovery methods.
1. Verify that the intended account works before discarding an older credential or recovery path.

This is a model for real-life behavior, **not** a requirement to create a new account during the lesson. Do not change a working password casually when you cannot confirm that recovery and access will continue to work.

## 3. Why must each account have a different password?

### 3.1 The danger of password reuse

[[password-reuse|Password reuse]] means using the same secret on more than one account. It creates a connection between services that otherwise have separate protections. A breach at one shopping website should not automatically grant access to a school portal, email inbox, or bank. Yet an attacker may test stolen username-and-password pairs on many unrelated services. This automated pattern is called [[credential-stuffing|credential stuffing]].

Suppose Jordan uses the same secret for a hobby forum and a primary email address. A compromise at the forum may give an attacker the credentials needed to attempt email access. The attacker does not need to know Jordan personally; they can simply test the leaked pair. Changing the forum password alone does not repair the email account if the email still uses the compromised secret. **All accounts that shared a known-exposed password should be reviewed and moved to distinct new secrets.**

| Situation | Why it is risky | Safer decision |
| --- | --- | --- |
| One password for every account | One exposure may affect many services | Use a separate secret for every account |
| One base word with a different number per site | A discovered pattern may reveal other variants | Generate independently, not from a shared pattern |
| Reusing an old password after an account breach | The old secret may remain known to attackers | Use a fresh, unique replacement |
| Email and shopping share a password | Shopping breach can threaten email recovery | Prioritize an independent email password |
| A shared household password for personal accounts | Responsibility and access become difficult to control | Give each person their own authorized account |
| An organization provides account credentials | Personal reuse can violate policy and spread risk | Follow the organization's account and password policy |

### 3.2 Uniqueness matters even if one site is secure

You do not know everything about how each website stores, checks, or recovers passwords. A service may operate responsibly today and suffer an incident later. Unique passwords reduce the dependence of all your accounts on every individual service's defenses. This principle is called **damage containment**: a problem in one place should have limited ability to spread into others.

A useful way to think about it is a set of doors: using one key on every door is convenient until the key is copied. Using separate keys does not make every door perfect, but it prevents that copy from opening all of them. A password manager makes it feasible to keep those separate keys without memorizing dozens of strings.

### 3.3 Shared access and the difference between a person and a role

Family members, small businesses, and volunteer organizations sometimes need more than one person to access a service. The safer first choice is **individual user accounts** with separate permissions, where supported. If a service legitimately requires shared access, use its approved delegation or secure sharing capabilities and follow its policies. Sending a password through ordinary chat, a public document, a group email, or a photograph can expose it and makes revoking access difficult.

A staff member should never ask another person to disclose a password merely because they claim to be a manager or technical support representative. Genuine support providers may help reset access through authorized procedures without needing to know the current secret. When in doubt, use an independently verified support channel.

### 3.4 How to prioritize a large group of accounts

If you discover that you have reused passwords, you do not need to solve everything in a single session. Make a deliberate inventory of **account names and security status only**, not the passwords themselves. Begin with primary email, password-manager access, financial services, and accounts used for recovery. Then update other accounts systematically. Keep track of the nonsecret fact that an account has been reviewed, that a unique password is in place, and whether stronger authentication is enabled. Do not list credentials in the inventory.

An account inventory might contain the service category, whether a password was reused, whether MFA is active, and whether recovery information was reviewed. It should never contain the password, actual recovery code, or other account secrets in a class worksheet.

## 4. How do password managers help?

### 4.1 What a password manager does

A [[password-manager|password manager]] is software designed to create, store, and retrieve account credentials under protective controls. Many managers provide a [[password-generator|password generator]] that produces a different long, unpredictable password for each service. The saved credentials are maintained in a protected [[vault|vault]]. The manager can help fill a sign-in form, reducing the need to type or remember every password manually.

Password managers may be built into a browser or operating-system account ecosystem, or provided by a separate application. Their features and business arrangements differ. Some emphasize convenience across devices; others provide specialized sharing, recovery, auditing, or organizational controls. No product should be treated as automatically safe merely because it uses the word *secure* in advertising.

### 4.2 The four core tasks

A typical password manager supports these tasks:

1. **Create:** Generate a unique password appropriate for the account's requirements.
1. **Save:** Associate it with the right service, username, and website address.
1. **Retrieve:** Access it later through the trusted manager, often with autofill.
1. **Review:** Identify duplicated, weak, or potentially compromised stored passwords when supported.

[[autofill|Autofill]] is convenient, but it is not a complete guarantee that a webpage is genuine. Check the service address, especially when someone directed you to the page through an unexpected message. If a normally available password is not offered for a surprising sign-in page, treat that as a reason to inspect the actual address. Autofill behavior varies among managers and browsers; its absence or presence alone is not proof of fraud or legitimacy.

### 4.3 Protecting the vault

A manager concentrates many credentials in one place, so its security and recovery practices matter. Depending on the product, a [[master-password|master password]], account password, device unlock, passkey, or other authentication method protects access. If you must choose a master password, it should be **long, unique, and not reused anywhere else**. Enable MFA for the manager account where supported. Use a trusted installation source, install updates, protect the device, and understand how the vault is backed up or synchronized.

Before adopting any manager, review whether it supports your devices, how it protects stored data, how account recovery works, whether it offers secure export or transfer methods, and how to recover if a device is lost. A manager with no usable recovery path could cause an important lockout if you forget its master password. Some designs intentionally cannot recover a forgotten vault secret; do not assume a vendor can restore access.

| Feature or decision | Questions to ask |
| --- | --- |
| Generator | Can it create independent long passwords? |
| Device support | Can I access my credentials on the devices I legitimately use? |
| Vault security | How is access protected and is MFA available? |
| Recovery | What happens if I lose a device or forget the vault credential? |
| Autofill | Does it associate credentials with the correct service address? |
| Updates and support | Is the product maintained and supplied by a trusted source? |
| Organizational use | Does the employer or school require an approved manager? |
| Secure sharing | Does it support legitimate access without sending passwords in plain text? |

### 4.4 Practical use on Windows, phones, and other devices

On Windows 11, a learner may encounter built-in credential-saving prompts through Microsoft Edge or a browser-associated password manager. Other browsers and mobile devices have comparable facilities. The **visual layout varies**, so look for controls with functions such as *Passwords*, *Password Manager*, *Generate password*, *Save*, *Autofill*, or *Security*. Do not assume that the same button exists in every application.

If you are already signed in to a trusted manager and want to observe its settings, open that manager directly through its normal application or settings. You can inspect its help material and supported features without revealing, exporting, copying, or displaying an actual stored password. On a shared or public computer, do not save your private account credentials or remain signed in to a personal password manager.

### 4.5 What about keeping passwords on paper?

A securely stored physical record can be preferable to an unprotected digital file for some people and circumstances, particularly when access to a password manager is not practical. However, paper can be lost, stolen, copied, or seen by visitors. Keep it in a private, physically protected location, separate from the device when appropriate, and do not label the record conspicuously. This is **not** an invitation to place real passwords on classroom handouts. For many everyday accounts, a reputable password manager is the easier scalable approach.

Unencrypted notes, publicly shared spreadsheets, ordinary email drafts, screenshots in a general photo library, and messages to yourself can unintentionally expose secrets. Avoid moving passwords into those locations merely to make them easier to find.

## 5. How do you protect sign-ins beyond the password?

### 5.1 Verification is more than entering text

An attacker may successfully steal even a long unique password if the owner types it into a convincing fraudulent form. [[phishing|Phishing]] commonly relies on messages that impersonate a bank, school, employer, retailer, government office, or technology company. The message may claim an account is locked, a payment failed, a package is delayed, or an administrator urgently needs a verification code.

Before signing in from a surprising message, **stop and independently visit the service's known official website or app**. A brand logo, polished design, familiar sender name, or `https://` address does not prove that a request is authentic. HTTPS can protect communication with the site you reached, but a fraudulent site can also use HTTPS. Verify the **actual domain** and the context of the request.

| Unexpected request | Why it deserves scrutiny | Safer action |
| --- | --- | --- |
| “Reply with your password to keep your account” | Genuine support should not require disclosure of your current password | Do not reply; verify through official support |
| “Tell me the six-digit code we just sent” | The sender may be trying to complete their own sign-in | Do not disclose the code |
| “Click this sign-in link within five minutes” | Urgency discourages independent checking | Open the trusted app or manually navigate |
| “Approve this login request or you will be locked out” | It may be an unauthorized authentication attempt | Deny unexpected requests and review the account |
| “Install this browser security tool before signing in” | The download may be unsafe or unnecessary | Verify the software and instructions independently |
| “Send a screenshot of your recovery codes” | Recovery codes provide sensitive account access | Never share or display recovery secrets |

### 5.2 Multifactor authentication and two-factor authentication

[[two-factor-authentication|Two-factor authentication]] (2FA) and MFA add protection beyond a single password. In simplified terms, a system may ask for something you know, something you possess, or a biological or local unlock factor used with a supported authenticator. Examples include a separate authentication app, a security key, a supported device confirmation, and sometimes a text-message code. These methods have different security strengths; a text code can be intercepted or socially engineered, and an unrequested approval can be accepted by mistake. A phishing-resistant method, such as an appropriately implemented security key or passkey, generally gives stronger protection against counterfeit sign-in sites.

The next lesson explains MFA mechanisms and enrollment in greater depth. For now, remember three operational rules: **enable additional authentication where available; never approve an authentication request you did not initiate; and never disclose a one-time code or recovery code to someone who contacted you unexpectedly**. A genuine employee or friend does not acquire authorization simply by sounding convincing.

### 5.3 Passkeys as an alternative

A [[passkey|passkey]] is a modern sign-in credential built around cryptographic keys rather than a reusable text password. In common implementations, the private portion is protected by a device, hardware security key, or supported credential manager; a website checks proof associated with that site's identity. This helps protect against many ordinary password-phishing attempts because the authentication is tied to the legitimate site, not merely to text entered into any lookalike page.

Users may unlock a passkey through a device PIN or biometric method, such as face or fingerprint recognition. The local unlock action is not the same as handing a website the user's fingerprint or device PIN. Actual privacy and synchronization behavior depends on the platform. Passkeys are not universally supported, and losing devices or access to the account that syncs passkeys can create recovery challenges. You must still protect devices, review recovery options, and recognize deceptive account requests.

### 5.4 Be careful with sign-in sessions

When you successfully authenticate, a service often maintains a [[session|session]] so you do not have to reenter a password on every page. On a personally controlled device, this may be convenient. On a borrowed, shared, school, or public device, remaining signed in can expose your account to the next person. Use the service's **Sign out** function, close the session, and follow the site's or institution's instructions for shared-device privacy. Private browsing modes are not substitutes for signing out or protecting an unlocked device.

If a browser or phone offers to save a password on a device you do not control, decline. A password should not become part of a public machine's saved credentials merely because the sign-in succeeded.

## 6. What should you do when a password or account is at risk?

### 6.1 Recognize meaningful warning signs

Not every security message is genuine, but some events require prompt attention. Examples include a confirmed notice from a service that account credentials were exposed, an unfamiliar successful sign-in shown in your independently accessed account, changes to your recovery email or phone that you did not make, unauthorized transactions, missing messages, unexpected password resets, or repeated MFA prompts you did not initiate.

An unexpected message claiming that an account was hacked is **not itself confirmation**. Attackers use fake breach notices to lure victims to phishing pages. Verify through the service's official app, saved bookmark, typed known address, or verified contact route. A trusted browser or password manager may also identify potentially exposed passwords, but review alerts in their normal application rather than trusting an unexplained link in a message.

### 6.2 A decision-based response workflow

If you believe an account password was exposed or someone else accessed your account, use a trusted device where possible and prioritize the following steps. The exact order may need to change for a financial emergency or workplace incident.

1. **Verify the situation:** Open the real service independently. Do not use a password-reset link supplied only by a suspicious message.
1. **Contain access:** If you can safely sign in, change the affected password to a new, unique one; use the official recovery process if you cannot sign in.
1. **Secure related accounts:** If the exposed password was reused, replace it everywhere it was used, especially the primary email and other recovery accounts.
1. **Review authentication:** Enable or reestablish MFA or passkeys where offered, and remove unrecognized authenticators or devices using the provider's trusted controls.
1. **Inspect recovery settings:** Look for unfamiliar recovery email addresses, telephone numbers, forwarding rules, connected applications, or active sessions, and correct them if authorized and safe.
1. **Check for harm:** Review account activity, messages, orders, settings, and transactions for unauthorized changes.
1. **Report appropriately:** Notify the service through a verified channel; alert a school or employer's security team for managed accounts; contact a financial provider immediately through its official channel if money is at risk.
1. **Document without exposing secrets:** Record relevant dates, actions, and official case references. Do not copy actual passwords, recovery codes, or one-time codes into an incident log.

A compromised device may continue stealing credentials even after you change a password. If you suspect harmful software or unauthorized remote access, seek qualified support and use another trusted device for sensitive recovery steps. Do not assume that a password reset alone makes an infected computer safe.

### 6.3 Recovery methods are part of security

[[account-recovery|Account recovery]] is the legitimate process for restoring access when the normal sign-in method is unavailable. Services may use a trusted recovery email, recovery phone, saved codes, passkey, alternate authenticator, or identity-check procedure. Recovery tools are valuable but may themselves become targets. A recovery phone you no longer control or a recovery email protected by a reused password can weaken the entire system.

Review recovery information during ordinary maintenance rather than waiting until you are locked out. Store [[recovery-code|recovery codes]] exactly as the provider instructs, preferably offline in a secure place or by another provider-approved protected method. Many codes are single-use. Do not treat them like harmless reference numbers. Do not enter them into forms offered by unknown people, and do not publish them in a screenshot or support ticket.

### 6.4 When should you change a password?

A password change is appropriate when there is credible evidence of exposure, unauthorized access, phishing disclosure, insecure sharing, or a provider-directed security reset. A password may also need changing when a legitimate organizational policy or administrator directs it. Merely waiting for a calendar date is generally not a reason to replace a unique strong password without another cause. Replacing passwords too frequently can encourage weak variations and poor storage.

| Event | Is a password change warranted? | What else matters? |
| --- | --- | --- |
| Verified exposure of the account password | Yes, promptly | Review sessions, recovery, MFA, and reuse |
| You entered a password on a fake sign-in page | Yes, from a trusted route | Treat the secret as disclosed even without confirmed login |
| You reused a password from a breached service | Yes, on every account using it | Prioritize email and financial accounts |
| Service requests an authorized security reset | Follow verified instructions | Confirm the request through official channels |
| Password is unique and no compromise is indicated | Not solely because a month or quarter passed | Continue normal account and device protection |
| You receive an unverified “urgent reset” email | First verify the claim | Avoid the message's links and contact details |

### 6.5 When a financial account or workplace account is involved

If you see unauthorized activity on a bank or payment account, contact the institution promptly through its official contact channels and follow its fraud procedures. A password change does not reverse a transfer or resolve a disputed transaction. If the account belongs to an employer, school, or another organization, follow its reporting and access-recovery policy; unauthorized attempts to investigate other people's accounts can create additional harm.

For consumers in the United States, the [Federal Trade Commission's guidance on protecting personal information](https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers) explains additional steps for preventing and responding to account risks. See the final lesson in this course for a broader incident-response framework.

## 7. Guided practice: Build safer password habits

The six activities below are designed to be completed without entering a real account or credential. Read each fictional scenario, decide what the learner should do, and explain *why*. Where an activity asks you to make a plan, write only general actions or nonsecret account categories. Do not write down actual passwords, recovery codes, device PINs, or other secrets. Each activity includes an expandable model response.

### Activity 1: Identify what needs protection

**Scenario:** Taylor uses an email address to sign in to a library service, a shopping site, and a school portal. Taylor also has a smartphone unlock PIN, a two-factor authentication code shown by an app, and a public profile username.

**Your task:** Classify these items as an identifier, a long-term account secret, a local device secret, or a temporary verification secret. Then answer: Which account should Taylor prioritize if it receives the recovery messages for the other accounts? Explain one reason.

| Fictional item | Your classification |
| --- | --- |
| Public profile name | Decide |
| Shopping website password | Decide |
| Smartphone unlock PIN | Decide |
| Temporary authentication-app code | Decide |
| Primary email address used as a login name | Decide |

:::answer Show Activity 1 model answers
- Public profile name: **Identifier**, not ordinarily a secret.
- Shopping website password: **Long-term account secret**.
- Smartphone unlock PIN: **Local device or authenticator-unlock secret**; keep it private.
- Temporary authentication-app code: **Temporary verification secret**; do not share it.
- Primary email address: **Account identifier**, not automatically secret.

Taylor should prioritize the **primary email account**, because possession of the inbox may help an attacker attempt password resets on other accounts. The email account should have its own unique password and strong additional authentication.
:::

### Activity 2: Evaluate password patterns without testing a real password

**Scenario:** Four fictional learners propose strategies for a new account. All listed values are classroom examples that must not be used as real credentials.

- Ari proposes the name of a favorite pet followed by a birth year.
- Bailey proposes one eight-character password reused on every website.
- Cameron proposes a long independently generated password that is stored in a trusted password manager.
- Devin proposes a familiar phrase from a popular movie with an exclamation mark added.

**Your task:** Identify which strategy is best and at least one limitation or risk in each of the other strategies. Explain why adding one punctuation mark is not a complete substitute for unpredictability.

:::answer Show Activity 2 model answers
**Best option: Cameron's approach.** A long independently generated password stored securely and used on only one account avoids several predictable weaknesses without requiring memorization.

- Ari relies on discoverable personal details and an easily tested year pattern.
- Bailey creates a cross-account risk, and eight characters is a weak default target for a new standalone password.
- Devin uses a publicly known phrase; a simple punctuation change does not prevent pattern-based guessing.

Password quality is not a decoration contest. Attackers may try common words, familiar quotations, substitutions, and patterns before random combinations.
:::

### Activity 3: Find the reuse problem in an account inventory

**Scenario:** A fictional person, Morgan, has reviewed five accounts and recorded a *status*, not the actual passwords. The status labels below describe their situation without exposing any secret.

| Account | Current status | Consequence if compromised |
| --- | --- | --- |
| Primary email | Reused password with shopping | High: recovery messages |
| Shopping | Reused password with email | Moderate to high: orders and addresses |
| Banking | Unique long password with MFA | High: financial activity |
| Social media | Predictable short password | Moderate: impersonation |
| School portal | Unique long password | High: records and school access |

**Your task:** Select two initial actions. Decide whether Morgan should publish the actual passwords to make the audit easier. Explain why the banking account should still be protected even though its status is better.

:::answer Show Activity 3 model answers
Morgan should first secure **primary email** and move **shopping** to a completely different unique password, ensuring both no longer share a secret. Morgan should also address the short predictable social-media password and review all MFA and recovery settings. Which high-priority change comes first can depend on evidence of a current incident.

Morgan should **never publish the real passwords** in an inventory, classroom response, spreadsheet, or chat. The inventory should record only nonsecret status. The bank account still needs careful monitoring and protected recovery methods because even a unique password and MFA do not prevent every form of fraud, phishing, or device compromise.
:::

### Activity 4: Decide whether to use a password manager

**Scenario:** A learner uses three devices and has more than 20 online accounts. The learner is considering a manager that generates passwords, synchronizes across supported devices, and offers MFA. However, the learner has not reviewed what happens if the primary device is lost or the vault password is forgotten.

**Your task:** Describe at least four questions to resolve before adopting the manager. Identify a safer response if a webpage unexpectedly asks the learner to paste the manager's master password into a support chat.

:::answer Show Activity 4 model answers
Questions should include:

1. Does the manager work on the learner's computer and phone?
1. How does it generate and save distinct passwords?
1. What authentication protects vault access and does it support MFA?
1. What legitimate recovery methods are available after losing the main device or forgetting the primary secret?
1. How are updates, backups, and device synchronization handled?
1. Is it approved for a school or workplace account, if applicable?

An unsolicited request to paste the manager's master password into a support chat should be **refused**. Verify the service through independently obtained official support. The manager's master password must remain private.
:::

### Activity 5: Handle an unexpected sign-in warning

**Scenario:** An SMS message claims, “An intruder has your email password. Restore access in four minutes at `https://mail-access-review.example`.” The message asks for a password and the six-digit code that will arrive next. For the exercise, assume the address is entirely fictional and should not be opened.

**Your task:** Identify three warning signs and write a short, safe sequence for checking the claim. Explain what a learner should do if an unfamiliar sign-in is confirmed inside the official account's security page.

:::answer Show Activity 5 model answers
Warning signs include **artificial urgency**, an unexpected sign-in link, and a request for both a password and a temporary verification code. The message alone does not prove the account was compromised.

A safer sequence is: **stop**, do not follow the message link, open the trusted official email app or website independently, inspect account security activity, and use official support if uncertain. If a compromise is confirmed, change the password using a trusted route, investigate whether it was reused, review sessions and recovery information, reestablish stronger authentication, and report unauthorized activity as appropriate.
:::

### Activity 6: Build a personal password-safety operating checklist

**Scenario:** A household wants a repeatable routine that does not require recording secrets in a notebook shared with others. One family member uses a password manager; another prefers a paper-based method. Both use email, shopping, and banking services.

**Your task:** Draft a seven-part checklist that can be followed on a recurring basis without displaying passwords. Include (a) uniqueness, (b) an appropriate storage method, (c) additional authentication, (d) recovery, (e) attention to suspicious messages, (f) shared-device rules, and (g) response to an actual compromise. You may use the framework below, but rewrite it in your own language.

:::answer Show Activity 6 model checklist
1. Give each account its **own long, unpredictable password**.
1. Use a **trusted password manager** where practical or a genuinely protected alternative; never keep real passwords in a shared class file.
1. Enable **strong additional authentication** or passkeys when the service supports them.
1. Maintain secure **recovery information and backup codes** according to provider instructions.
1. **Verify account messages independently** and never disclose passwords, one-time codes, or recovery secrets in unexpected conversations.
1. **Sign out on shared devices**, decline password saving on public machines, and lock personal devices.
1. When compromise is confirmed or a password was disclosed, **change the affected password**, replace any reused copies, review access and recovery settings, and report harm through verified channels.

A strong checklist identifies observable actions. It should not require a fixed monthly password change where no compromise is suspected, or promise absolute security.
:::

### Practice reflection

After completing the exercises, explain in your own words: *What problem does a unique password solve? What problem does an additional sign-in factor solve? What problem does independent verification solve?* A useful answer distinguishes the three controls instead of claiming that one replaces the others.

## 8. Common misconceptions and avoidable mistakes

### “Adding a symbol makes a short password strong.”

A symbol may add complexity, but `Password1!` is still a widely recognizable pattern. Length and unpredictability are more important than decorative substitutions. Avoid public examples, famous quotations, keyboard walks, predictable dates, and minor variations on old secrets.

### “One very strong password is safe to use everywhere.”

Even a good password can leak from one service. Reuse turns one exposure into a threat to other accounts. **Uniqueness is mandatory as a practical habit**, regardless of password strength.

### “Passwords must always be changed every 30 or 90 days.”

Routine expiration without evidence of compromise is not NIST's current recommendation for covered password verifiers. Change passwords when they may have been exposed or access needs to be revoked, and comply with applicable verified organizational policy. Avoid changing a safe password merely to create a sequence such as `Example1`, `Example2`, and `Example3`.

### “If a password is saved in a manager, nothing else is required.”

A manager reduces the burden of creation and storage; it does not make deceptive links, stolen unlocked devices, poor recovery practices, or unauthorized sessions disappear. Protect the manager itself and enable MFA or supported passkeys.

### “An email containing my organization's logo can be trusted.”

Logos, sender names, and familiar wording can be copied. A genuine-looking page can ask you to give away your credentials. Reach the organization through a separate trusted route instead of relying solely on an unexpected message.

### “HTTPS means the website is not a scam.”

HTTPS ordinarily helps protect the connection to the addressed server. It does not prove the operator is honest or that the domain belongs to the organization being imitated. The exact destination and the purpose of the request still matter.

### “The temporary code belongs to whoever requests it.”

A one-time code or approval request is part of your sign-in protection. Attackers may try to talk you into disclosing a code or approving their login. Never pass it to an unexpected caller, sender, or chat participant, and never approve an unfamiliar request.

### “A passkey means I no longer need to protect my phone.”

Passkeys reduce important phishing risks, but a device can still be stolen, unlocked, or misused. Backup access and recovery procedures still matter. The sign-in method is only one component of the account's security.

### “I can use a public computer as long as I clear browser history afterward.”

Deleting history does not guarantee that the account has been signed out or that credentials were not saved or observed. Avoid signing in to high-stakes accounts on untrusted machines when possible; otherwise follow institution-approved procedures, decline saving credentials, and sign out properly.

### “Every password breach means all my accounts were accessed.”

A breach can create risk without proving successful access to each account. The appropriate response is to verify what information was exposed, replace affected and reused secrets, review login activity, and monitor important accounts. Avoid assuming either that nothing happened or that every account was taken over.

### “I should immediately click every security warning to investigate.”

Security notices can be genuine, mistaken, or fraudulent. Open the service independently and inspect trusted account controls. Do not test the legitimacy of an unknown reset link by supplying credentials. A safe pause can prevent a second incident.

### “If I can remember a password, writing it anywhere is harmless.”

A desktop note, public document, message, or photo may be visible to other people or synchronized in ways you did not intend. Store secrets using a protected system or an appropriately secured physical record, not in an ordinary classroom workbook or incident log.

### A compact decision guide

| You encounter... | Risk to consider | Recommended response |
| --- | --- | --- |
| The same secret on email and shopping | A breach at one may threaten the other | Give both distinct new passwords |
| A password manager offering to create a unique value | A safe convenience may be available | Verify the manager and use its generator |
| A request for a master password by chat | Possible impersonation and vault compromise | Refuse and contact official support independently |
| A confirmed exposed password | Unauthorized access may be possible | Change it and any reused copies promptly |
| A surprise MFA prompt | Someone else may be trying to sign in | Do not approve; review legitimate account activity |
| A sign-in form at an unfamiliar website | Credential theft may be possible | Stop and verify the address independently |
| An unlocked shared computer | The next person may reach your account | Sign out and use appropriate device safeguards |
| A lost device containing passkeys | Normal sign-in may be interrupted or exposed | Use prepared provider recovery procedures |
| A message promising instant account recovery for a fee | Potential fraud or impersonation | Use only the real provider's support process |

> **Final safety principle:** A good password is not merely hard to guess. It is **unique to its account, protected from disclosure, backed by reliable recovery planning, and used only through a verified sign-in process**.

## 9. Essential vocabulary

The dotted-underlined terms in this lesson use the MGU dashboard's vocabulary convention. Selecting a supported term shows a short explanation; selected terms also lead to relevant reference articles. Definitions are supplied again in the machine-readable `:::terms` block at the end of this file. The visible list below remains useful when tooltips are unavailable.

### Accounts and credentials

- **Password safety:** Habits for creating, using, storing, and recovering sign-in credentials with reduced risk.
- **Account:** A service-maintained record associated with a user or organization.
- **Username:** An identifier supplied to tell a service which account is being accessed.
- **Password:** A secret used as evidence that someone may access an account.
- **Passphrase:** A longer password assembled from words or a phrase.
- **Credential:** Information or an authenticator used to establish identity for a service.
- **Authentication:** Checking evidence that a user or system is who or what it claims to be.
- **Authorization:** Deciding which resources or functions an authenticated identity can use.
- **PIN:** A personal identification number; often a local unlock or account-access secret.
- **Sign-in page:** A form or interface used to begin access to an account.
- **Session:** An ongoing period of recognized access after a successful sign-in.
- **Sign out:** Ending an authenticated session through a service's supported controls.
- **Device lock:** A mechanism for restricting access to a device until it is unlocked.
- **Biometric unlock:** Use of a physical characteristic, such as a fingerprint, to unlock a supported authenticator.

### Password quality and attacks

- **Password length:** The number of characters in a password.
- **Password strength:** The degree to which a password resists discovery or guessing under relevant conditions.
- **Unpredictability:** Difficulty of anticipating a value from common patterns or public information.
- **Random generation:** Selecting a value through a process intended to avoid human prediction patterns.
- **Password reuse:** Using the same secret across more than one account.
- **Credential stuffing:** Trying stolen username-and-password combinations against other services.
- **Data breach:** An incident in which protected information is improperly accessed, exposed, or lost.
- **Compromised password:** A secret believed to be available to an unauthorized party.
- **Password guessing:** Testing candidate passwords until one works.
- **Brute-force attack:** Repeatedly testing possible credential values, subject to system safeguards.
- **Password pattern:** A recognizable format, such as a favorite word followed by a year.
- **Blocklist:** A collection of known common or compromised passwords that a service can reject.
- **Shoulder surfing:** Observing someone's screen or input to learn information without authorization.
- **Malware:** Harmful software that can interfere with, damage, or secretly access systems or data.

### Password storage and sign-in tools

- **Password manager:** A protected tool that helps generate, save, and use distinct account credentials.
- **Password generator:** Software that constructs a password without depending on a personal phrase or familiar pattern.
- **Vault:** A password manager's protected storage area for credentials and related records.
- **Master password:** A primary secret that may protect access to a credential vault.
- **Autofill:** A supported feature that places saved information into appropriate form fields.
- **Encryption:** A method of protecting information by transforming it so that unauthorized parties cannot readily read it without the appropriate key.
- **Password hashing:** One-way processing used by a service to help verify passwords without storing them directly as readable text.
- **Synchronization:** Coordinating data across supported devices or services.
- **Backup:** A preserved copy or recovery method that supports restoration after loss.
- **Recovery code:** A sensitive value a service issues to help restore authorized account access.
- **Account recovery:** The authorized process for regaining access when a normal sign-in method is unavailable.
- **Recovery email:** An email address designated to assist with legitimate recovery or security notices.
- **Security alert:** A notice about possible unusual account activity or a protection-related event.

### Stronger authentication and scam awareness

- **Multifactor authentication (MFA):** Authentication using more than one distinct kind of evidence or a supported multifactor authenticator.
- **Two-factor authentication (2FA):** Authentication using two different factors.
- **One-time code:** A temporary value used for a specific authentication or recovery step.
- **Authenticator app:** Software that provides supported sign-in codes or confirmations.
- **Security key:** A physical or integrated authenticator that can help prove possession and support phishing-resistant sign-in.
- **Passkey:** A cryptographic sign-in credential associated with a service and protected by a supported device or manager.
- **Phishing resistance:** A property of certain authentication methods that reduces the risk of submitting usable proof to an impersonating website.
- **Phishing:** Deception aimed at tricking someone into exposing secrets or taking an unsafe action.
- **Social engineering:** Manipulating a person into sharing information or granting access through misleading claims.
- **Impersonation:** Presenting oneself as another person, organization, or service without authorization.
- **HTTPS:** A protocol scheme used to protect communications between a client and the web server it addresses.
- **Domain:** The name identifying an internet site or service destination.
- **Independent verification:** Confirming a request through a trusted route not supplied solely by a suspicious message.
- **Unexpected MFA prompt:** An authentication request the account owner did not initiate.
- **Account takeover:** Unauthorized control of another person's online account.
- **Incident response:** Steps taken to verify, contain, report, and recover from a security event.
- **Sensitive information:** Information whose exposure could cause harm, including credentials and recovery material.
- **Official support channel:** A help route established independently as belonging to the relevant service or organization.

### Vocabulary in context

At a [[sign-in-page|sign-in page]], a [[credential|credential]] supplies evidence for [[authentication|authentication]]. The service then applies [[authorization|authorization]] rules to determine what the account may do. A successful sign-in creates a [[session|session]], which should be ended with [[sign-out|sign out]] on a shared machine. A [[device-lock|device lock]] or [[biometric-unlock|biometric unlock]] can protect local access, but neither substitutes for careful account sign-in decisions.

A strong secret depends on more than [[password-length|password length]]: [[unpredictability|unpredictability]] and independent [[random-generation|random generation]] help produce useful [[password-strength|password strength]]. A familiar [[password-pattern|password pattern]] can be anticipated, while [[password-guessing|password guessing]] and a [[brute-force|brute-force attack]] attempt to find a working value. A service may reject known weak choices using a [[blocklist|blocklist]]. An exposed [[compromised-password|compromised password]] also creates a different problem: it may no longer be private even if it was originally strong.

A protected vault may use [[encryption|encryption]], and a service may use [[password-hashing|password hashing]] to verify a password without keeping its readable form. A manager's [[synchronization|synchronization]] may help access records across devices, while a [[backup|backup]] and valid [[recovery-email|recovery email]] can support account recovery. A genuine [[security-alert|security alert]] should be checked through an [[official-support-channel|official support channel]] or independently opened account page. Do not turn an alert into an incident by revealing [[sensitive-information|sensitive information]] to an impersonator.

An [[authenticator-app|authenticator app]], [[security-key|security key]], or a passkey can supply stronger verification. A [[one-time-code|one-time code]] is not harmless merely because it expires, and an [[unexpected-mfa-prompt|unexpected MFA prompt]] may mean someone else is attempting access. [[phishing-resistance|Phishing resistance]] helps against counterfeit sign-in pages, while [[independent-verification|independent verification]] helps you assess suspicious requests. [[social-engineering|Social engineering]] and [[impersonation|impersonation]] can lead to [[account-takeover|account takeover]], which calls for informed [[incident-response|incident response]], not panic or the disclosure of additional secrets.

### Apply the vocabulary

An effective explanation joins terms to decisions. For example: *“Because a stolen password may be used in credential stuffing, I will use a new unique password for the affected account, check my recovery email, and verify all security alerts inside the official service.”* This is more useful than merely memorizing definitions. It shows how a hazard connects to a concrete protective action.

## 10. Knowledge check

Select **one answer** for each question in the dashboard, then use **Check answers** to review the explanations. The scenarios are fictional and do not require real sign-ins or credentials. This quiz is intended for learning rather than secure proctored testing or permanent grade recording. A manual answer key is available beneath the quiz.

:::quiz
? What is the main purpose of password safety?
- [x] Reduce unauthorized access through strong, unique, protected credentials
- [ ] Make every password easy for friends to remember
- [ ] Guarantee that no online service can ever be breached
! Password safety reduces risk through several practical controls; it cannot guarantee perfect security.

? Which information is generally an account identifier rather than a secret?
- [ ] A recovery code
- [x] A public username
- [ ] A device unlock PIN
! A public username identifies an account; recovery codes and PINs are sensitive.

? Which account deserves special protection because it receives password-reset messages?
- [ ] A public news-reading page
- [ ] A website with no user login
- [x] The primary recovery email account
! Control of the recovery inbox may help someone reset access to other services.

? Which characteristic is the best starting point for a password created today?
- [x] A long, unpredictable value that is not reused
- [ ] A short familiar word with one punctuation mark
- [ ] The same password used across every service
! Long, unpredictable, distinct passwords reduce common guessing and reuse risks.

? How does NIST's 2025 guidance treat passwords used as the sole authentication factor by covered services?
- [ ] They must change every 30 days regardless of risk
- [x] They should have a minimum length of 15 characters
- [ ] They must always include at least three symbols
! SP 800-63B-4 establishes a 15-character minimum for single-factor passwords at covered services.

? Which statement about symbols in passwords is most accurate?
- [ ] Adding an exclamation mark makes any password unguessable
- [ ] A password without a number is automatically invalid on every website
- [x] Symbols can be useful, but length and unpredictability matter more than forced character mixtures
! A symbol does not fix a predictable base; some sites still have their own format rules.

? Why should a learner not use a password published in an instructional lesson?
- [x] A public example is known to others and can be tested by attackers
- [ ] The example must be protected by copyright
- [ ] Published examples are always too long for sign-in pages
! Published examples are demonstration data, not private secrets.

? What makes an effective passphrase easier to remember without relying on familiar quotations?
- [ ] A famous movie quote that many people recognize
- [x] Multiple unrelated words selected through a genuinely random method
- [ ] The person's birth date repeated several times
! Randomly selected unrelated words can improve memorability while avoiding public phrases.

? What is password reuse?
- [ ] Using a different generated password for every service
- [ ] Signing out after a completed session
- [x] Using one secret on more than one account
! Reusing a password connects the risks of otherwise separate accounts.

? What is credential stuffing?
- [x] Testing stolen username-password pairs on other services
- [ ] Storing passwords inside a trusted manager
- [ ] Requiring a second authentication factor
! An attacker may try credentials exposed in one breach against many unrelated services.

? A shopping account and primary email share a password, and the shopping password was exposed. What is the best response?
- [ ] Change only the shopping password and keep email unchanged
- [x] Replace that password on both accounts with different new secrets
- [ ] Delete all account alerts without checking anything
! Every account using an exposed password needs its own unique replacement.

? Why is adding a different final digit to the same password a weak uniqueness strategy?
- [ ] Digits are forbidden in all passwords
- [ ] A password is safe as long as the website name is included
- [x] The shared pattern may let an attacker predict other versions
! Minor changes to a known base do not provide independent secrets.

? What is a password manager primarily designed to do?
- [x] Generate, store, and retrieve distinct credentials under protective controls
- [ ] Provide a guarantee that every website is honest
- [ ] Send saved passwords to every support employee
! Managers reduce the burden of handling many unique passwords.

? What is a password generator's main advantage?
- [ ] It remembers a person's favorite dates automatically
- [x] It can create a unique unpredictable value without a personal pattern
- [ ] It prevents all data breaches at the service
! Generators help avoid predictable human choices and repeated passwords.

? What is the correct way to handle a password manager's master password?
- [ ] Use the same value as the primary email password
- [ ] Send it to support in a chat whenever a login fails
- [x] Keep it long, unique, private, and protect the manager with MFA when supported
! Because a master password may protect a vault, reuse or disclosure can have wide consequences.

? What should you consider before choosing a password manager?
- [x] Compatible devices, security controls, and realistic recovery options
- [ ] Only the color of its sign-in button
- [ ] Whether it promises that no security event can ever occur
! A useful manager must fit devices and include workable protection and recovery.

? A familiar password does not autofill on an unexpected sign-in page. What is the safest interpretation?
- [ ] Immediately type the master password into the page
- [x] Pause and check the real site address; the missing autofill is not conclusive proof
- [ ] The lack of autofill proves the site is genuine
! Autofill is a useful clue but is not a standalone authenticity test.

? What should you do when a caller claiming to be technical support asks for your password?
- [ ] Give it if the caller knows your first name
- [ ] Read it slowly so the caller can confirm the spelling
- [x] Refuse to provide it and verify support independently
! Legitimate support procedures should not require an unsolicited disclosure of your current secret.

? What is phishing?
- [x] Deceiving someone into exposing secrets or taking unsafe actions
- [ ] A normal scheduled software update
- [ ] A successful account sign-out
! Phishing uses impersonation or other misleading claims to induce harmful actions.

? What does HTTPS alone tell you about a sign-in page?
- [ ] The website's operator has been proven honest
- [x] The connection may be protected, but the site could still be fraudulent
- [ ] The page cannot ask for sensitive data
! An HTTPS connection does not certify the legitimacy of a site's business or requests.

? An unexpected message says to sign in within three minutes or lose access. What is the best first action?
- [ ] Follow the message link quickly
- [ ] Reply with a one-time code to stop the countdown
- [x] Open the genuine service independently and check for a real notice
! Urgency and unexpected links are reasons for verification rather than rushed action.

? What should you do with an MFA approval request you did not initiate?
- [x] Do not approve; review account activity through the trusted service
- [ ] Approve it to clear the notification
- [ ] Share a screenshot of the code with the sender
! Unexpected authentication prompts may indicate another person is attempting access.

? Which statement best describes passkeys?
- [ ] They are public text passwords shared by all websites
- [x] They use cryptographic credentials associated with the legitimate service and can resist ordinary phishing
- [ ] They remove the need for protecting devices and recovery methods
! Passkeys can reduce phishing risk but still require device and recovery safeguards.

? What is a recovery code?
- [ ] A public reference number suitable for an online profile
- [ ] A code that support staff should collect through unexpected messages
- [x] A sensitive value that can help regain access through a service's approved process
! Recovery codes can grant access and must be protected as secrets.

? A legitimate service confirms that your password was exposed. What is appropriate?
- [x] Change it through a trusted route and review account activity, reuse, and recovery
- [ ] Continue using the exposed password until a fixed calendar date
- [ ] Send your password to someone who claims they can test the breach
! Credible exposure warrants prompt replacement and review of related security controls.

? When is routine password rotation generally unnecessary under current NIST guidance?
- [ ] When the same password is reused on many services
- [x] When a unique strong password has no evidence of compromise or other verified change requirement
- [ ] When a password was entered into a fake site
! Routine expiration without cause is discouraged; actual exposure needs action.

? What should you do after using an account on a shared computer?
- [ ] Leave the session open so another person can help
- [ ] Assume closing one tab always ends access
- [x] Use the real sign-out control and avoid saving personal credentials on the machine
! Authenticated sessions may continue unless properly ended.

? Which response fits a suspected infected device that may steal passwords?
- [x] Seek trusted help and consider using a separate trusted device for account recovery
- [ ] Keep entering passwords until the warnings disappear
- [ ] Assume changing one password immediately removes all harmful software
! A compromised device may continue exposing new credentials, so containment matters.

? What information belongs in a classroom account-security inventory?
- [ ] Every actual password and recovery code
- [x] Account categories and nonsecret review status only
- [ ] Photographs of all authentication prompts
! An inventory should record actions and risk status without exposing credentials.

? Which combination best summarizes the lesson?
- [ ] One common password with frequent punctuation changes
- [ ] Trust all messages that display familiar logos
- [x] Unique long passwords, protected storage, stronger authentication, careful verification, and recovery planning
! Layered protection combines credential quality, safe use, additional checks, and recovery.

:::

:::answer Show the 30-question manual answer key
**Correct choices:** 1. A, 2. B, 3. C, 4. A, 5. B, 6. C, 7. A, 8. B, 9. C, 10. A, 11. B, 12. C, 13. A, 14. B, 15. C, 16. A, 17. B, 18. C, 19. A, 20. B, 21. C, 22. A, 23. B, 24. C, 25. A, 26. B, 27. C, 28. A, 29. B, 30. C.

Each explanation is displayed below its corresponding question when the interactive quiz is available. For a self-check without the dashboard, reread the correct response and explanation from the source lesson. The answer key reveals the position of each correct choice, not a replacement for understanding the reason.
:::

## 11. MGU Library connections and next steps

### What you should now be able to do

By completing this lesson, you should be able to explain how passwords help protect accounts, why a long unique password is preferable to a short reused one, how a password manager reduces the burden of maintaining multiple secrets, and when additional authentication and account-recovery preparation are necessary. You should also be able to recognize an unexpected request for credentials and respond to a credible account compromise without disclosing more information.

A short operational reminder is **CREATE → KEEP UNIQUE → STORE SECURELY → VERIFY SIGN-INS → PROTECT RECOVERY → RESPOND**. This sequence is not a guarantee against every threat, but it offers a useful starting framework for daily use.

### MGU reference connections

- [MGU Encyclopedia: Authentication Systems](/library/encyclopedia/computer-science/security-systems/authentication-systems) — how systems verify identities before granting access.
- [MGU Encyclopedia: Computer Security](/library/encyclopedia/computer-science/security-systems/computer-security) — the broader protection of devices, services, and data.
- [MGU Encyclopedia: Access Control](/library/encyclopedia/computer-science/security-systems/access-control) — the distinction between proving identity and receiving permission.
- [MGU Encyclopedia: Cryptography](/library/encyclopedia/computer-science/security-systems/cryptography) — the field behind many secure authentication mechanisms.
- [MGU Computer Science Foundations, Chapter 21: Cybersecurity Foundations](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-21) — deeper study of authentication and common cyber threats.
- [MGU Computer Science Foundations, Chapter 22: Privacy, Identity, and Digital Safety](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-22) — broader context on personal information, passwords, scams, and digital identity. For current length recommendations, prefer the newer NIST references listed below.

### External guidance and standards

- [NIST: How Do I Create a Good Password?](https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password) — accessible, current advice on length, managers, MFA, and passkeys.
- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) — technical source for 2025 requirements on passwords, rate limiting, password managers, and account recovery.
- [CISA: Secure Our World](https://www.cisa.gov/secure-our-world) — practical guidance on strong passwords, multifactor authentication, phishing, and updates.
- [FTC: Protect Your Personal Information From Hackers and Scammers](https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers) — consumer-oriented online account protection and fraud prevention.
- [FBI: Stay Safe Online — Simple Tips for Adults](https://www.fbi.gov/how-we-can-help-you/online-safety/stay-safe-online-simple-tips-for-adults) — practical suggestions for password managers, passkeys, and identity protection.

### Course navigation

- **Course index:** [Digital Safety and Scam Awareness](/department/computer-science/basic-computer-skills/digital-safety-and-scam-awareness/)
- **Current lesson:** Lesson 1 — Password Safety (`password-safety.md`)
- **Next lesson:** Lesson 2 — [Two-Factor Authentication](/department/computer-science/basic-computer-skills/digital-safety-and-scam-awareness/two-factor-authentication/) (`two-factor-authentication.md`)

The next lesson explains why a second factor matters, how common MFA methods differ, how passkeys fit into authentication, and how to recognize and respond to fraudulent sign-in prompts. Continue only when you can distinguish **a password's strength**, **the uniqueness of that password**, and **the safety of the process in which you use it**.

:::terms
password-safety | Password safety | Habits for creating and protecting credentials while reducing unauthorized account access. | /library/encyclopedia/computer-science/security-systems/computer-security
account | Account | A service-maintained record associated with a user or organization. | 
username | Username | An identifier used to select which account is being accessed. | 
password | Password | A secret supplied to help prove authorization to sign in. | 
passphrase | Passphrase | A password formed from a longer phrase or several words. | 
credential | Credential | Information or an authenticator used to verify an identity. | /library/encyclopedia/computer-science/security-systems/authentication-systems
authentication | Authentication | The process of checking evidence that an identity claim is valid. | /library/encyclopedia/computer-science/security-systems/authentication-systems
authorization | Authorization | The process of determining what an authenticated identity is permitted to do. | /library/encyclopedia/computer-science/security-systems/access-control
pin | PIN | A personal identification number used as a local or service-specific secret. | 
sign-in-page | Sign-in page | The website or application interface where authentication begins. | 
session | Session | An ongoing recognized connection between an account and a service after sign-in. | 
sign-out | Sign out | Use a service control to end an authenticated account session. | 
device-lock | Device lock | A control that restricts access to a device until it is unlocked. | 
biometric-unlock | Biometric unlock | A supported device unlock using a physical characteristic such as a fingerprint. | 
password-length | Password length | The total number of characters in a password. | 
password-strength | Password strength | The extent to which a secret resists unauthorized discovery or guessing. | 
unpredictability | Unpredictability | Difficulty of anticipating a value from patterns or known information. | 
random-generation | Random generation | Selecting values using a process intended to avoid predictable human choices. | 
password-reuse | Password reuse | The practice of using the same password with multiple accounts. | 
credential-stuffing | Credential stuffing | Trying username-password pairs leaked from one service on another service. | 
data-breach | Data breach | A security incident involving unauthorized access to or exposure of protected data. | /library/encyclopedia/computer-science/security-systems/computer-security
compromised-password | Compromised password | A password believed to have been exposed to an unauthorized party. | 
password-guessing | Password guessing | Testing possible passwords in an attempt to discover a working secret. | 
brute-force | Brute-force attack | Repeated testing of possible secrets or credentials. | 
password-pattern | Password pattern | A recognizable predictable format used when constructing a secret. | 
blocklist | Blocklist | A list of unacceptable common or exposed passwords checked by a service. | 
shoulder-surfing | Shoulder surfing | Watching another person enter or display private information. | 
malware | Malware | Software designed or used for unauthorized or harmful activity. | /library/encyclopedia/computer-science/security-systems/computer-security
password-manager | Password manager | Software for securely generating storing and using account credentials. | 
password-generator | Password generator | A tool that creates a new password without relying on personal patterns. | 
vault | Vault | Protected credential storage maintained by a password manager. | 
master-password | Master password | A primary secret used by some managers to protect access to the vault. | 
autofill | Autofill | A feature that inserts saved values into matching sign-in or other form fields. | 
encryption | Encryption | Protecting information by converting it to a form that requires an appropriate key to read. | /library/encyclopedia/computer-science/security-systems/cryptography
password-hashing | Password hashing | One-way password processing used by a service for verification without storing readable passwords. | /library/encyclopedia/computer-science/security-systems/cryptography
synchronization | Synchronization | Keeping selected information coordinated across devices or services. | 
backup | Backup | A preserved copy or recovery method used after information or device loss. | 
recovery-code | Recovery code | A sensitive value issued to assist authorized account recovery. | 
account-recovery | Account recovery | A legitimate process for restoring access after loss of normal sign-in capability. | 
recovery-email | Recovery email | A designated email inbox that may assist with account recovery. | 
security-alert | Security alert | A notification of a potentially important account or device security event. | 
multifactor-authentication | Multifactor authentication | Authentication involving multiple distinct factors or a valid multifactor authenticator. | /library/encyclopedia/computer-science/security-systems/authentication-systems
two-factor-authentication | Two-factor authentication | Authentication involving two different factors. | /library/encyclopedia/computer-science/security-systems/authentication-systems
one-time-code | One-time code | A temporary verification value intended for a specific authentication event. | 
authenticator-app | Authenticator app | An application that provides supported sign-in codes or approval mechanisms. | 
security-key | Security key | A physical or integrated authenticator used to provide cryptographic proof of possession. | 
passkey | Passkey | A cryptographic sign-in credential bound to a particular service identity. | 
phishing-resistance | Phishing resistance | A characteristic of authentication methods that resist impersonating sign-in sites. | 
phishing | Phishing | Deception intended to obtain sensitive data or induce unsafe actions. | /library/encyclopedia/computer-science/security-systems/computer-security
social-engineering | Social engineering | Manipulating someone into granting access or exposing information. | 
impersonation | Impersonation | Falsely appearing to be another person organization or service. | 
https | HTTPS | A web communication scheme that typically encrypts data exchanged with an addressed server. | 
domain | Domain | A registered name that helps identify an internet destination. | 
independent-verification | Independent verification | Checking a claim using a trustworthy route not provided solely by a suspicious message. | 
unexpected-mfa-prompt | Unexpected MFA prompt | An additional authentication request the account owner did not initiate. | 
account-takeover | Account takeover | Unauthorized control of another person’s or organization’s account. | 
incident-response | Incident response | Actions to verify contain report and recover from a security event. | /library/encyclopedia/computer-science/security-systems/computer-security
sensitive-information | Sensitive information | Information whose exposure could cause harm including credentials and recovery details. | 
official-support-channel | Official support channel | A support contact route independently verified as belonging to the relevant service. | 
:::
