Basic Computer Skills / Digital Safety and Scam Awareness

## Lesson 2: Two-Factor Authentication

A message appears on Morgan's phone: **Approve sign-in to your email account?** Morgan is reading a book, not signing in. The notification looks like an ordinary security feature, but approving it would be a mistake. Someone else may have entered Morgan's password or started a fraudulent sign-in. By refusing the request and checking the account through a trusted route, Morgan uses the same protective system for its intended purpose: only the rightful account owner should complete the sign-in.

[[two-factor-authentication|Two-factor authentication]], often shortened to **2FA**, is a way to confirm identity using **two different categories of evidence**. Many services call the broader approach [[multifactor-authentication|multifactor authentication]] or **MFA**. A password may be the first factor; a separate authenticator, such as a security key or an authenticator app, may provide the next. Some modern sign-in methods use a single passkey that combines possession of a protected device or credential with a local unlock, such as a PIN or fingerprint. The aim is to make unauthorized access harder even when a password has been exposed.

This is Lesson 2 of MGU's nine-part **Digital Safety and Scam Awareness** sequence. Lesson 1 introduced strong, unique passwords and mentioned additional authentication; this lesson explains how these additional checks work, why some methods are stronger than others, how to set them up responsibly, and what to do when a verification request is unexpected. We use plain-language examples suitable for Windows 11, Mac, Chromebook, iPhone, iPad, and Android. Menu names and features differ among services and change over time.

**Every example and practice scenario is fictional.** Do not activate or disable protection on a real account just to complete a class exercise. Never disclose a real password, one-time code, setup QR code, backup code, security-key PIN, or account-recovery detail to a teacher, chatbot, support caller, friend, or shared worksheet. In real life, legitimate sign-in procedures may ask you to enter a code into the service's own verified sign-in screen; that is not the same as telling a code to an unexpected person.

**Level:** Beginner · **Estimated study time:** 110–145 minutes · **Prerequisites:** Password Safety recommended · **Practice equipment:** Computer, phone, tablet, or paper worksheet; internet access optional · **Safety:** All sign-in examples are simulations. No real account changes, authenticator enrollment, or code disclosure are required.

> **Essential idea:** Use additional authentication wherever supported; prefer phishing-resistant passkeys or security keys when practical; approve only sign-ins that **you** initiated; and set up a secure recovery method before you lose access to the device that normally authenticates you.

### Learning objectives

After completing this lesson, you should be able to:

1. Define two-factor and multifactor authentication and identify the major categories of authentication evidence.
1. Explain why an additional factor can reduce the damage from a stolen password, while recognizing that MFA is not a guarantee.
1. Compare text-message codes, authenticator-app codes, approval prompts, security keys, and passkeys using practical risk and accessibility considerations.
1. Describe a safe, general process for enabling authentication on a verified account without copying real secrets into a class activity.
1. Reject unrequested codes, messages, and approval requests, including deceptive number-matching prompts.
1. Prepare for lost phones, new devices, recovery-code storage, and replacement authenticators.
1. Choose and justify safer responses to fictional login, scam, and account-recovery scenarios.

### On this page

- [1. Purpose of additional authentication](#1-why-use-two-factor-authentication)
- [2. Authentication factors](#2-what-counts-as-two-different-factors)
- [3. Common authentication methods](#3-how-do-common-authentication-methods-compare)
- [4. Setup and everyday use](#4-how-do-you-set-up-and-use-two-factor-authentication-safely)
- [5. Suspicious prompts and scams](#5-how-do-you-handle-unexpected-codes-and-approval-requests)
- [6. Recovery and device changes](#6-what-if-you-lose-your-phone-or-cannot-sign-in)
- [7. Guided practice](#7-guided-practice-make-safer-authentication-decisions)
- [8. Common misconceptions](#8-common-misconceptions-and-avoidable-mistakes)
- [9. Essential vocabulary](#9-essential-vocabulary)
- [10. Knowledge check](#10-knowledge-check)
- [11. Further learning](#11-mgu-library-connections-and-next-steps)

## 1. Why use two-factor authentication?

### 1.1 One password can be exposed in several ways

An online [[account|account]] often begins with a [[username|username]] and a [[password|password]]. A username identifies the record; the password is a secret intended to demonstrate that the person signing in knows something the owner should know. This is part of [[authentication|authentication]], the process a service uses to check an identity claim. Authentication is not the same as [[authorization|authorization]], which concerns what a verified user is allowed to do.

Passwords may be stolen through fake websites, data breaches, repeated use across websites, compromised devices, or accidental disclosure. A stranger may learn a legitimate password without ever meeting the owner. A long, unique password remains essential because it reduces the likelihood of guessing and prevents a leak at one service from working at another. Yet no password can guarantee that a person will never be deceived, that a service will never be breached, or that a device will never be compromised.

The practical purpose of an additional authentication step is to create another obstacle. A criminal who knows a password may still lack the registered phone, authenticator, or cryptographic key needed to complete a protected sign-in. The account owner also gains a chance to notice certain sign-in attempts. That protection is valuable, particularly for email, financial accounts, school or workplace systems, password managers, and cloud storage.

### 1.2 A worked example: the stolen password

Imagine the following entirely fictional sequence:

1. Someone steals Sam's password from a fraudulent website that resembles an email service.
1. The attacker visits the real email service and enters Sam's username and stolen password.
1. The service requires a second step: a registered physical security key must respond to a legitimate request for that website.
1. The attacker has neither the key nor a suitable authenticator, so this particular sign-in attempt fails.
1. Sam receives a legitimate account alert and checks the account independently, then changes the exposed password and reviews active sessions.

The security key does not retroactively make the stolen password private; it helps block a path to account access. Sam still needs to address the credential exposure. If the attacker had stolen an active session, controlled Sam's device, compromised recovery options, or exploited another weakness, the outcome could differ. **Security works best in layers.**

### 1.3 Why high-value accounts should come first

A person's primary email address may receive password-reset instructions for many other services. A financial account may give access to funds or sensitive records. An administrator's workplace account may affect coworkers, customers, or organizational systems. The importance of protecting these accounts is greater than the inconvenience of an additional sign-in step.

| Account category | Why added authentication matters | Practical priority |
| --- | --- | --- |
| Main email | Often receives account-recovery links and important notices | Set up strong authentication and secure recovery early |
| Password manager | May protect credentials for many accounts | Protect vault access and understand manager recovery |
| Banking or payments | May authorize payments or expose financial data | Use the strongest supported method and review alerts |
| School or workplace | May expose institutional files and other people's information | Follow approved IT and account-security policy |
| Cloud storage | May contain private documents and photographs | Protect sign-in, sharing settings, and recovery options |
| Shopping or social media | May expose saved details or allow impersonation | Turn on supported MFA and maintain unique passwords |

An account's value is not measured only in money. Access to photographs, contacts, messages, or an important job application can have major personal consequences. When a service does not provide 2FA, protect it with a unique password, check whether passkeys or another stronger sign-in option exists, and review available security alerts and recovery settings.

### 1.4 The decision sequence behind every protected sign-in

A helpful mental model is **START → IDENTIFY → VERIFY → APPROVE → REVIEW**. First, begin a sign-in by your own choice. Second, identify the real service and account. Third, examine the authentication request and verify that it corresponds to the action you just started. Fourth, approve only the matching request through the legitimate interface. Fifth, review any unusual security alert or account activity.

This sequence prevents the common mistake of believing that every code or notification demanding attention must be completed. If you did not start a sign-in, **stop**. A new code or prompt is not automatically proof of an intruder, but it is not permission to help an unknown person sign in.

## 2. What counts as two different factors?

### 2.1 The three broad categories

An [[authentication-factor|authentication factor]] is a type of evidence used to prove identity. The main categories are something you **know**, something you **have**, and something you **are**. A system can combine them, but using two items from the same category does not necessarily create true two-factor authentication.

| Category | Plain-language meaning | Examples |
| --- | --- | --- |
| Something you know | A secret you can remember | Password, memorized PIN |
| Something you have | A registered item or protected credential you control | Security key, configured authenticator device |
| Something you are | A physical characteristic checked by an appropriate system | Fingerprint, facial biometric |

A password followed by a second password generally uses **two knowledge secrets**, not two different factor categories. Similarly, answering a memorized security question after a password is not the strong independent second factor often meant by 2FA. A password plus a properly configured authenticator device may provide knowledge plus possession. A protected hardware or software passkey may combine possession with a local device PIN or biometric verification within a single sign-in experience.

### 2.2 2FA, MFA, and two-step verification are not identical phrases

**2FA** describes a form of MFA that relies on two different factor categories. **MFA** is the broader concept of authenticating with more than one distinct factor; some technologies combine factors in one authenticator instead of requiring two separate screens. **Two-step verification** is a service's product term and may refer to two visible steps without making the underlying factor types clear. The safest habit is to ask *what actually proves identity*, not merely count how many buttons or screens appear.

| Sign-in situation | What it demonstrates | Should you assume true 2FA? |
| --- | --- | --- |
| Password, then a different password | Two knowledge-based inputs | No |
| Password, then a memorized security answer | Repeated knowledge checks | No |
| Password, then a code from a registered authenticator device | Knowledge and evidence of possession | Usually yes, if properly implemented |
| Password, then an SMS code to a registered phone number | Password plus phone-channel possession evidence | Often offered as 2FA, but weaker than phishing-resistant choices |
| Protected passkey unlocked locally with device PIN or biometric | Cryptographic credential with device/user verification | Can deliver multifactor protection in one interaction |
| Two messages sent to the same unprotected inbox | Two messages, not necessarily independent factors | Do not assume so |

These examples describe broad concepts, not formal audits of individual products. Implementation details, account-recovery rules, and whether the authenticator is protected can change the effective assurance level.

### 2.3 A PIN has more than one possible job

A [[pin|PIN]] used as a memorized online account secret belongs to the knowledge category. A device PIN may instead **unlock a passkey or cryptographic authenticator locally**. In that design, the PIN does not need to be transmitted to the website as an independent password. A screen asking for your device PIN can be legitimate in a trusted operating-system dialog, but a surprising web page demanding a PIN for unrelated reasons is a warning sign.

Do not assume an ATM card PIN, a phone-unlock PIN, and a Windows Hello PIN are interchangeable. They protect different systems. In particular, typing a device-unlock PIN into an untrusted website is not the proper way to use a platform authenticator.

### 2.4 What biometrics do and do not do

[[biometric-authentication|Biometric authentication]] uses a physical characteristic, such as a face or fingerprint, in an authentication system. On many modern phones and computers, a biometric unlock allows the device to release or use a protected credential after checking the user locally. That does not mean the website necessarily receives a stored copy of a fingerprint. Different systems have different designs; learn which device or organization processes the biometric and what fallback options exist.

Biometrics are convenient, but they are not magical. Sensors can fail; injury, device replacement, or accessibility needs can make biometric use impractical; and an unlocked or compromised device can still create risks. A suitable PIN or another authorized alternative is important for people who cannot or choose not to use biometrics. Do not enroll another person's fingerprint or face for your personal security without understanding the consequences and the service's policies.

### 2.5 Why independence and control matter

Two factors help most when an attacker who learns one does not automatically obtain the other. If a password is phished but a security key stays in your possession, the attacker faces a barrier. If the password, email code, and recovery instructions all reside inside an already compromised account, the extra check may provide less protection than expected. If both the password and unlocked authenticator are stored on an unattended device, device protection is critical.

Independence is not the same as requiring multiple gadgets. A well-designed, protected passkey on one device can combine distinct factors and strong cryptographic sign-in protections. What matters is **how** the system authenticates you and how resistant it is to realistic attacks.

## 3. How do common authentication methods compare?

### 3.1 Text-message and telephone codes

An [[sms-code|SMS code]] is usually a short, temporary value sent to a registered mobile number. A service may also offer a voice call to read out a code. This can improve security compared with an unprotected password, especially when stronger options are unavailable. The user should enter the code **only** into the genuine service workflow that they independently started.

However, SMS and voice systems have limits. Criminals may exploit [[sim-swap|SIM-swap fraud]] or phone-number porting to receive another person's messages. Texts can be visible to someone who has access to an unlocked phone. Attackers can also persuade victims to read out codes or type them into a fake sign-in page. SMS does not cryptographically bind a code to the real website, so it is **not phishing-resistant**. Consider carrier account protections, such as a supported account or transfer PIN, but do not treat them as replacements for account MFA.

An unsolicited SMS does not prove a hacker already entered the account. Someone may have mistyped a number or tried a sign-in that was blocked. Do not share the code, click any link in the message, or rush to an unknown caller's directions. Check the affected account and security alerts through the legitimate app or website if appropriate.

### 3.2 Authenticator applications and rotating codes

An [[authenticator-app|authenticator app]] may display a rotating [[one-time-password|one-time password]] or **OTP**, often a short numeric code that changes regularly. A common implementation is a [[totp|time-based one-time password]], known as TOTP. The service and the app share registration information so that the app can produce codes the service can verify. After setup, the app can often generate codes without a cellular signal; an appropriate device and a sufficiently accurate clock are still required.

Codes generated in an authenticator app generally avoid phone-number takeover risks that affect SMS, but they remain susceptible to phishing. A fake website may ask a person to enter the current authenticator code and rapidly use it on the real site. An authenticator app and a passkey do not provide the same protection simply because both live on a phone.

At setup, some services show a QR code or a manual setup key. These may contain a sensitive [[enrollment-secret|enrollment secret]] needed to generate future codes. **Never publish, photograph for class, email, or casually share an authenticator setup QR code.** A copied setup secret may allow another device to generate matching codes. Enroll only from the verified account's own security settings.

### 3.3 Push notifications and approval prompts

Some services send a [[push-approval|push approval]] to a configured phone or app. You might see **Approve** and **Deny**, sometimes with a location, time, device name, or number to compare. Approval prompts are convenient because they may avoid manually copying a code. Their weakness is that a person may tap **Approve** out of habit, confusion, or repeated pressure. Attackers may generate many requests until the owner accidentally accepts; this is sometimes called [[mfa-fatigue|MFA fatigue]] or push bombing.

[[number-matching|Number matching]] asks the person to select or type a number shown on the genuine sign-in screen in the approval app. It helps prevent blind acceptance of a prompt. It does not make a fraudulent workflow safe: a scammer may display a matching number on a fake page or dictate one during a call. **Only match a number when you personally initiated sign-in on a verified service.** If you did not initiate the sign-in, reject the request even when a convincing number appears.

### 3.4 Physical security keys and passkeys

A [[security-key|security key]] is a small physical authenticator, often used with a USB connection, NFC, or another supported method. Many modern keys use [[fido2|FIDO2]] and [[webauthn|WebAuthn]] standards to prove possession of a cryptographic credential to the correct service without revealing the private secret. The sign-in may ask you to touch a key and, depending on configuration, unlock it with a PIN or biometric. When properly implemented, this family of methods offers [[phishing-resistance|phishing resistance]] because a lookalike website generally cannot use the credential as though it were the legitimate site's domain.

A [[passkey|passkey]] is a modern cryptographic sign-in credential associated with a particular service. Passkeys can be [[device-bound-credential|tied to one device]], stored in a physical security key, or [[synchronized-passkey|synchronized]] through a supported credential provider across approved devices. Many passkey sign-ins are [[passwordless-sign-in|passwordless]] and still provide strong authentication through possession of a credential and local user verification. The service can verify a [[public-key|public key]] response while the corresponding [[private-key|private key]] stays protected by the authenticator. A passkey does not need to show the user a code to copy. Its protections depend on correct implementation, device security, provider security, and recovery choices.

Passkeys and FIDO security keys are not identical products. Some passkeys are device-bound and others are synchronized; some security keys are used as a second factor after a password and others are used for passwordless sign-in. Their shared practical advantage is a cryptographic connection to the intended service rather than a code that a person can be tricked into typing on a lookalike page.

### 3.5 Email verification and backup codes

A service may send a code or approval link to a registered email address. This may be convenient, but the protection is only as strong as the email account and the overall sign-in arrangement. If the email inbox is compromised or if the code is delivered into the very account being accessed, the added check may not be meaningfully independent. Protect the email account with strong authentication of its own.

A [[recovery-code|recovery code]] is different from a regularly generated login code. It may be issued in advance for use when the normal second factor is unavailable. Recovery codes are powerful because they can unlock or restore an account when a phone or key has been lost. They are secrets, not public reference numbers; store them securely according to the service's instructions, avoid placing their only copy on the device they are meant to replace, and replace or regenerate them when used or exposed where supported.

### 3.6 Comparison: strengths, limits, and practical choices

| Method | What the learner typically does | Major advantage | Important limitation |
| --- | --- | --- | --- |
| SMS or voice code | Receives a code at a registered number | Accessible when few other methods are offered | Vulnerable to phone-number attacks and phishing |
| Email code | Reads a message at a recovery inbox | Often easy to access | Depends on inbox security and factor independence |
| Authenticator-app OTP | Reads a changing code from an app | Avoids SMS phone-number takeover | Code can still be phished; backup planning matters |
| Push approval | Approves a matching sign-in request | Convenient on a configured device | Can be manipulated by unexpected prompts or fatigue |
| Number-matched push | Confirms a number from the self-started sign-in | Reduces accidental blind approvals | Still requires verified context and active judgment |
| FIDO security key | Uses a registered key and may unlock it | Strong phishing-resistant cryptographic authentication | Can be lost; service and recovery support vary |
| Protected passkey | Uses a supported device or provider to authenticate | Strong sign-in without manually transferring a code | Device, synchronization, and recovery need protection |
| Recovery code | Uses a saved emergency credential when locked out | Restores access if normal method is unavailable | Secret may bypass normal MFA and must be protected |

**Practical preference:** When a service supports phishing-resistant passkeys or FIDO security keys, those are generally stronger choices. An authenticator app is a useful option when they are unavailable. SMS or voice codes often offer more protection than password-only sign-in, but have greater known risks. Follow your organization's approved methods, and do not disable an existing working authentication method before verifying a supported replacement and recovery plan.

### 3.7 No method makes suspicious behavior safe

A fake login page can look authentic. A real device can receive a fraudulent prompt. Someone posing as IT can provide accurate personal details and still be an impostor. An attacker who controls a device or [[session|active session]] may cause harm without needing to repeat every sign-in check. MFA limits particular paths to attack; it does not replace careful website verification, unique passwords, software updates, device locks, and prompt reporting.

A useful rule is to separate **the identity of the website**, **the method being used**, and **the reason for the request**. A secure authenticator should not be used to authorize a request merely because the app is genuine. You must still know whether the underlying action is yours.

## 4. How do you set up and use two-factor authentication safely?

### 4.1 Start from an independently verified account

The first step is not to click an unexpected email's **Enable Security** button. Begin by opening the service's trusted application, a carefully verified bookmark, or an address you know belongs to the service. Sign in through its normal procedure and find a menu labeled **Security**, **Sign-in options**, **Account protection**, **Two-step verification**, or something similar. Exact controls differ: a service may require an existing password, another trusted device, an administrator's approval, or identity verification before letting you change authenticators.

Read the service's explanations and available methods before changing anything. On a school or managed workplace account, follow the IT department's published instructions; self-service enrollment or personal apps may be restricted. On a shared or public computer, do not choose options that register the computer as your trusted personal device or save a sensitive authentication secret.

### 4.2 Review the available options and practical needs

Choose a supported method based on security, your devices, your ability to use the device, recovery options, and any institution policy. Ask whether phishing-resistant authentication is available; whether you will need a phone, physical key, or compatible browser; whether the device belongs to you; and whether [[accessibility|accessible]] alternatives exist. A screen may offer a fast option while hiding additional choices behind **More methods** or **Other ways to sign in**. The interface is not an assurance that the default is the strongest method.

| Question to ask before enrolling | Why it matters |
| --- | --- |
| Is this the official account settings screen? | Prevents enrollment through a fake website |
| Which approved methods are offered? | Allows an informed choice, especially for sensitive accounts |
| Does the method work with my device and accessibility needs? | Prevents dependence on an unusable option |
| Will I retain access if my phone is lost or replaced? | Establishes recovery before a crisis |
| Are backup codes or a second authenticator available? | Reduces risk of a single-device lockout |
| Does my school or employer set its own rules? | Avoids bypassing policy or breaking managed access |

### 4.3 A general enrollment workflow

Here is a cautious procedure for a real account **when the learner is ready outside class**, using the service's own instructions. This is not a request to perform these actions during the course:

1. Open the genuine service through a trusted app or bookmark and sign in deliberately.
1. Locate **Account security** or the equivalent option and confirm that this is the account you intend to protect.
1. Read the authentication methods offered and select the strongest suitable option permitted by the service or organization.
1. If using a separate app or key, install or obtain it through a trusted, approved source; protect the device with a lock.
1. Follow the service's actual enrollment steps. Treat any setup QR code, secret key, or verification prompt as confidential.
1. Complete the service's own confirmation test to verify that the new method is correctly registered.
1. Set up an approved backup authenticator or obtain recovery codes when available, storing secrets securely and separately.
1. Review sign-in alerts, recovery contacts, and any trusted devices; do not remove old access methods until the new method and recovery options have been tested.
1. Record only **nonsecret status** in an [[account-inventory|account inventory]], such as “MFA enabled” or “recovery plan reviewed.”

Some accounts ask you to reauthenticate during setup. Others show a time-limited QR [[enrollment|enrollment]] screen. You should not take a screenshot of the QR code to send it to someone for help. If a screen or instruction seems unfamiliar, stop and consult official documentation rather than improvising. When changing methods, follow the service's supported migration process; some authenticator apps have account-transfer or protected synchronization features, while others require re-enrollment.

### 4.4 What a normal sign-in looks like

Consider a fictional account at `https://portal.learning.example` used only for classroom illustration. Taylor navigates to the official service, enters a unique password, and sees a request to use a registered authenticator. Taylor checks that the request concerns the sign-in just initiated, then completes the appropriate method on the already registered device. The service confirms authentication and opens Taylor's account.

An authenticator app may show a rotating code; a genuine service might request that code in its own sign-in page. A passkey may trigger a browser or operating-system dialog and ask for a device fingerprint or PIN. A physical security key might require insertion or a tap. There is no universal screen sequence. The critical rule is to use only the process **you started at a verified service**, not instructions from a stranger.

### 4.5 When an authentication code expires or fails

A temporary code may be too old, entered into the wrong account, or generated by an authenticator that is not registered with that service. TOTP-based systems can also fail if a device's clock is out of sync. An SMS may arrive late because of service or carrier delays. These are not automatic signs of an attack.

Take the calm approach: verify that the destination is legitimate; check which account and method were selected; allow the app or service to generate a fresh code; and follow official troubleshooting instructions. Do not keep typing sensitive codes into an unverified page. Do not send screenshots of authenticator screens to unknown helpers. Do not bypass a browser or operating-system warning in order to make the login work.

If you receive multiple codes during a sign-in you did not begin, stop entering them. If the account shows unexpected successful activity, use its verified security area or an [[official-support-channel|official support channel]] rather than replying to the alert's sender.

### 4.6 Trusted devices and remembered sign-ins

Some services offer **Remember this device**, **Don't ask again**, or a similar setting. This may place a remembered-device token in the browser or recognize a trusted environment so that the account does not require a new second-factor challenge every time. It is meant to improve convenience on a device under the user's control. It does **not** remove the need to secure that device, nor does it necessarily mean the account's MFA has been disabled.

On a public library computer, school lab machine, borrowed phone, hotel workstation, or shared family profile, do not choose to remember the device unless explicitly authorized by a relevant institution and you understand the consequences. Sign out through the service's normal control, close the session, and avoid saving the password or passkey to someone else's account. Private-browsing mode alone is not enough to guarantee that the session leaves no traces.

## 5. How do you handle unexpected codes and approval requests?

### 5.1 An unexpected request means stop first

The most important distinction is between **a request you triggered** and **one that arrived without your action**. If you are not signing in, do not approve a push notification, enter a code, tap a sign-in link, or tell anyone a number. A request might reflect an attacker using a leaked password, a malicious attempt to trick you, a mistaken username, or a delayed system message. Its arrival is not proof of a completed breach, but it deserves caution.

The safer response sequence is **DENY → VERIFY → REVIEW → PROTECT → REPORT**:

1. **Deny or ignore** an authentication request that you did not initiate. Use a provided **Report suspicious** option where appropriate.
1. **Verify** the service and account through a known official app or website, not a link or phone number embedded in the suspicious message.
1. **Review** the account's available sign-in history, session list, and security alerts for meaningful evidence of unauthorized access.
1. **Protect** an affected account: change a potentially exposed password, secure the email and recovery methods, and sign out unknown sessions using verified account tools.
1. **Report** the event to the service's genuine support channel or organizational IT when required or when unauthorized access is suspected.

If the request came from an account you do not recognize, do not create a new account or search for an unknown security service to investigate it. Ignore it or report it through a trusted appropriate channel; minimize the information you reveal.

### 5.2 Why a scammer wants a verification code

A [[phishing|phishing]] scam may involve a convincing website, text, email, social media message, or telephone call. A criminal may tell you that a package is delayed, a bank transaction is suspicious, or a computer will be locked unless you read out a verification code. In reality, the criminal may be trying to finish a sign-in to your account, register a new device, or reset credentials. A code issued by a real company can be exploited in a fake conversation.

**Do not give a real one-time authentication code to a person who contacts you unexpectedly.** Do not paste it into a chat or share it in a screenshot, even with someone claiming to be IT staff, a bank investigator, or customer support. When you personally initiated a legitimate account login, entering the code into that service's verified sign-in interface may be appropriate; the decision depends on the workflow, not on whether the code itself looks official.

An organization might use legitimate identity-verification methods in customer support, but a person should not blindly comply with an unsolicited request for a login code. Independently contact the organization using a known published channel and follow its verified procedure. Never assume that a visible caller ID, familiar logo, official-looking sender name, or correct personal detail proves authority.

### 5.3 Push bombing and number-matching deception

In a [[push-bombing|push bombing]] attack, someone sends repeated MFA approval requests to the account owner's device. The goal may be to exhaust the user into pressing **Approve** or to make a later fake support call seem plausible. Number matching reduces some accidental approvals but does not remove all risks if a person is tricked into participating in a login they did not start.

Imagine a caller says, “I am from your company's technical department. You will see a notification with the number 42. Please approve it to stop the security incident.” If you did not start the sign-in yourself, the correct action is **deny the request and verify the caller independently**. A numerical match is not a substitute for authorization; it only helps associate an approval with a particular login flow.

| What appears | Unsafe assumption | Safer first action |
| --- | --- | --- |
| Approve sign-in prompt while you are not logging in | The security team needs you to approve it | Deny, inspect the account independently |
| Repeated prompts at night | One tap will make them stop | Do not approve; report persistent requests |
| A caller reads a matching number | The caller must work for the service | End call and independently verify the issue |
| Text asks you to forward a code | Forwarding proves your identity | Keep code private; do not reply |
| A code arrives for an unknown account | The account must be yours | Do not interact with unknown link or service |
| You see a login from an unfamiliar device | Every login alert is harmless | Review verified account activity and secure as appropriate |

### 5.4 Codes can be phished in real time

An attacker can create a fake website resembling a genuine login page. If someone types a password and then an authenticator code on that fake page, the attacker may send both values to the real service quickly enough to use the code before it expires. That is why an authenticator app, while often stronger than SMS, **is not inherently phishing-resistant**. Browser addresses, independently obtained destinations, and cryptographic methods such as appropriately implemented FIDO passkeys remain important.

[[https|HTTPS]] by itself is not proof that the organization operating a site is honest. A malicious site can have its own encrypted connection and valid certificate. Check the actual [[domain|domain]] and how you reached it. When in doubt, close the questionable page and open the legitimate app or previously verified bookmark yourself.

### 5.5 Real alerts and false alarms require different responses

A code arriving without a request does not necessarily mean an account was compromised. An alert describing a successful sign-in from an unknown device, a changed recovery email, an added authenticator, or a new forwarding rule may be more significant. Some legitimate services also send notices when a familiar device appears new after an update or browser change. Instead of guessing, inspect the account's actual security activity through a verified route.

| Observation | What can be concluded | Appropriate response |
| --- | --- | --- |
| One unexpected code, no other evidence | Someone or something requested a verification attempt | Do not disclose code; check account if warranted |
| Unrequested approval prompt | A sign-in needing approval may be in progress | Reject and review account activity |
| Confirmed unfamiliar successful sign-in | Unauthorized access is possible or likely | Secure account promptly and review sessions/recovery |
| Email says “We disabled MFA” | A message alleges a critical account change | Verify within official account settings |
| Authenticator was removed without authorization | Account protection may have been changed | Use official recovery and report promptly |
| New device is not yours | There may be an account or device compromise | End unauthorized sessions where supported and investigate |

When an employer's or school's system is involved, report suspicious authentication events to the designated IT or security team through an approved channel. On a personal financial account, use the provider's official fraud or account-security process. Do not allow a caller to remotely control your computer or transfer funds as a supposed authentication repair.

## 6. What if you lose your phone or cannot sign in?

### 6.1 Account recovery is part of authentication security

An extra sign-in factor is valuable only if legitimate users can recover responsibly from predictable problems. A phone can be lost, stolen, broken, reset, or replaced. A physical key can be misplaced. A person may change telephone numbers, lose access to an old email address, or be unable to use a biometric sensor. A safe system balances protection with an authorized [[account-recovery|account-recovery]] route.

Before a problem occurs, learn which backup methods the account supports. Possible options include a registered second key, a [[backup-authenticator|second authenticator]], securely stored recovery codes, a backup passkey or synchronized credential service, and a verified recovery contact. These methods differ by provider. Do not assume that saving one screenshot or remembering a phone number provides reliable recovery.

### 6.2 Plan before replacing a phone

When a phone is still functional and under your control, plan a supported transfer before resetting, trading in, or selling it. For every important account, determine how the authenticator is registered and whether it synchronizes securely, transfers through a supported process, or must be registered again. Some applications restore protected credentials from an approved backup; others do not. Verify an account can sign in with the new method before deleting the old method.

A practical sequence is:

1. On your old trusted device, review important account-security settings and the provider's migration instructions.
1. Confirm whether a second authenticator or recovery code exists and remains accessible.
1. Configure the new device using the legitimate service or approved authenticator transfer feature.
1. Confirm the new method works by following the service's safe test procedure.
1. Review trusted-device and authenticator lists; revoke old registrations only after recovery is confirmed.
1. If selling or recycling the old device, follow its official data-erasure and account sign-out process after transfer.

Never copy an authenticator setup secret into an ordinary note or unprotected spreadsheet for convenience. If you must temporarily print a recovery code, protect the physical copy and follow the account provider's guidance.

### 6.3 What to do when the phone or key is already lost

If a device containing an authenticator has been lost, use a verified account recovery or backup method rather than a suspicious phone number found in a search advertisement or text message. Depending on the account, you may be able to use a registered spare key, recovery code, approved secondary authenticator, another signed-in device, or provider-managed identity verification.

Do not assume a service can bypass authentication immediately when you explain that the phone was lost. Strong recovery procedures may involve waiting, additional proof, or administrator assistance. Such delays can be inconvenient but may also help protect the account from criminals pretending to be locked-out owners.

If a phone was stolen, protect the device account, contact the mobile provider when appropriate, and use trusted device-location, lock, or wipe features only when you understand their consequences. Review sensitive accounts and remove the stolen device's authorized sessions or authenticators using the provider's approved security features. On organizational devices, notify IT before taking actions that could complicate investigation or recovery.

### 6.4 Protecting recovery codes without making them inaccessible

[[backup-codes|Backup codes]] are emergency credentials issued by some services. Their design varies: they may be used once, regenerated as a set, or replaced after enrollment changes. Treat each code as confidential. The safest storage arrangement keeps the code available to the authorized user but protected from anyone else. A protected password manager, supported secure recovery feature, or carefully secured paper record may fit different needs.

Avoid keeping the only recovery method on the same phone that could be lost. Avoid posting codes in screenshots, emails, classroom files, unprotected cloud folders, or group chats. If a code has been used or is suspected exposed, check the service's official way to replace it. Do not enter real backup codes during a practice exercise or send them to a person claiming to test them.

### 6.5 Beware of the weakest recovery route

A strong passkey or security key helps protect the main sign-in, but an attacker may look for a weaker fallback. For example, a service might allow account recovery through a poorly protected [[recovery-email|recovery inbox]] or phone number. Review the **entire account-security system**: login methods, password resets, authorized devices, recovery contacts, and support procedures. The goal is not to disable every backup; doing so may cause irreversible lockout. The goal is to choose the strongest usable [[recovery-planning|recovery arrangement]] the service supports and to keep it current.

### 6.6 A recovery and response decision table

| Situation | First responsible action | Additional consideration |
| --- | --- | --- |
| New phone, old phone still works | Follow supported authenticator transfer instructions | Test new method before erasing old one |
| Phone lost, spare security key available | Sign in through verified service with spare key | Remove lost-device authorization as appropriate |
| Printed recovery code available | Enter it only in the legitimate recovery process | Treat used codes as sensitive and replace if needed |
| No available backup method | Use provider's official recovery or organizational IT | Be prepared for identity checks or delayed restoration |
| Phone-number service suddenly stops | Contact carrier through an independently verified channel | Consider number takeover and account review |
| Unknown authenticator appears on account | Secure account and use official account-security reporting | Review successful sessions and recovery changes |
| Account appears compromised | Regain control through verified steps, rotate exposed secrets, review sessions | Check primary email and linked accounts too |

> **Final operating principle:** Your second factor is not an invitation to approve every notification; it is a controlled decision that should correspond to an action you deliberately started. Recovery is successful only when it restores the rightful user without giving a stranger an easier path to the account.

## 7. Guided practice: Make safer authentication decisions

These six activities use fictitious accounts, people, numbers, and domains. You can complete them on paper or mentally. **Do not open real account settings, request actual login codes, scan an enrollment QR code, or share any genuine account information.** The objective is to explain a safe decision, not to finish a real authentication workflow.

### Activity 1: Identify the factor categories

Read each description and decide whether it is an example of something **known**, something **possessed**, a **biometric** characteristic, or a combination. Also decide whether counting two prompts alone proves two-factor authentication.

| Fictional situation | Your factor classification | Does it establish distinct factors? |
| --- | --- | --- |
| A password followed by a second remembered phrase | Decide | Decide |
| A password followed by a code from a registered authenticator | Decide | Decide |
| A face unlock that activates a protected passkey | Decide | Decide |
| A password followed by a memorized childhood address | Decide | Decide |
| A registered FIDO security key unlocked with its local PIN | Decide | Decide |

Explain why the third and fifth examples do not necessarily require typing two independent values into the website.

:::answer Show Activity 1 model answers
- **Password and second phrase:** Two knowledge secrets; do not automatically call it 2FA.
- **Password and registered authenticator code:** Knowledge plus proof associated with possession of a configured authenticator; commonly a form of 2FA.
- **Face unlock with protected passkey:** Local biometric verification helps activate a cryptographic credential; appropriate implementation can provide multifactor authentication in a single sign-in interaction.
- **Password and childhood address:** Two knowledge-based answers; not automatically distinct factors, and personal trivia can be guessed or researched.
- **Security key unlocked with PIN:** Possession of a registered key plus local knowledge to activate the credential; the service verifies a cryptographic response, not a simple repeated password.

**Reasoning:** What matters is the category and implementation of proof, not the number of boxes, messages, or screens.
:::

### Activity 2: Choose a practical authentication method

For each fictional person, recommend an authentication method and a fallback plan. Describe the trade-offs rather than claiming that a single product is ideal for everyone.

1. **Avery** has a personal laptop and smartphone, and an email service that supports passkeys, physical security keys, TOTP codes, and SMS.
1. **Blake** has a basic mobile phone without app installation and a service that offers only SMS or password-only access.
1. **Casey** uses a screen reader and works for an employer that requires an approved hardware security key.
1. **Drew** travels often, replaces phones regularly, and currently has only one authenticator device and no saved recovery method.

For each, write one recommendation, one reason, and one recovery consideration.

:::answer Show Activity 2 model answers
- **Avery:** A supported passkey or FIDO security key is a strong first choice because of phishing resistance. Verify account recovery and consider a registered backup authenticator or spare key.
- **Blake:** SMS is a reasonable improvement over password-only sign-in when that is the only offered additional method. Keep the phone account protected and seek stronger options if they become available.
- **Casey:** Use the employer-approved security key and request an accessible enrollment or alternative procedure through IT if needed. Follow official replacement and backup-key policies.
- **Drew:** Address recovery **before** replacing the phone. Register an approved backup method, store recovery codes securely, and follow the authenticator provider's supported transfer steps.

**Reasoning:** Security, practical availability, accessibility, organization policy, and recovery have to be considered together.
:::

### Activity 3: Recognize the unrequested approval

At 9:15 p.m., fictional learner Rowan receives three approval requests from a school account. Rowan is not logging in. A person calls and says, “We are campus IT; press Approve to stop an attack. The matching number is 17.” The phone shows a number-matching prompt, and the caller correctly knows Rowan's school email address.

Decide what Rowan should do **immediately**, what to check next, and what would change the response if a successful unknown sign-in appears in verified account history.

:::answer Show Activity 3 model answers
1. **Do not approve or match the number.** The sign-in was not initiated by Rowan.
1. End the unexpected call, refuse to disclose codes, and do not follow links provided by the caller.
1. Open the school's known official portal or contact the published IT help desk independently.
1. Review the account's sign-in history and report the repeated requests under institutional policy.
1. If a genuine unfamiliar successful login or security-setting change is confirmed, follow incident-response instructions: secure credentials, review sessions, recover account control, and notify IT promptly.

**Reasoning:** Knowing an email address and a matching number does not authenticate the caller. Number matching has value only in a sign-in the user deliberately began.
:::

### Activity 4: Plan a phone replacement

Fictional learner Nina will trade in an old smartphone tomorrow. The phone holds an authenticator app for five services. Nina has not checked whether the app securely synchronizes credentials, and only two accounts have recovery methods documented. The old phone still works.

Put the following actions in a safe order: **erase the old phone**, **inventory important account MFA**, **set up approved backup methods**, **transfer or register the new device**, **test the new method**, **revoke unneeded old registrations**. Explain why the first action should not be erasing the phone.

:::answer Show Activity 4 model answers
1. Inventory important accounts and identify the type of authenticator each uses; do not record codes or setup secrets.
1. Set up approved backup authentication or recovery methods where supported.
1. Follow verified provider instructions to transfer or register the new device.
1. Test the new method through the official service and confirm recovery is available.
1. Revoke obsolete registrations as appropriate after successful transfer.
1. Sign out, erase, or recycle the old phone according to the manufacturer's instructions after account continuity is confirmed.

**Reasoning:** An authenticator may not move automatically with the phone. Erasing the only working registration before confirming a replacement can lock out the legitimate user.
:::

### Activity 5: Distinguish a legitimate login from a phishing attempt

Compare two classroom records. Both use fictional addresses reserved here for illustration:

- **Record A:** Lee opens a previously verified bookmark, starts a sign-in at `https://account.example`, and the legitimate service asks Lee to enter a code from the configured authenticator app.
- **Record B:** A text says, “Your account is frozen. Send your six-digit code to this number immediately.” Lee did not attempt a login, and the text includes a link to `https://account-security-help.example`.

Decide whether a code should be entered, where it could appropriately be entered, and what evidence would make the situation unsafe. Explain why the existence of a real code does not make Record B legitimate.

:::answer Show Activity 5 model answers
- **Record A:** After verifying the real account destination and the sign-in Lee started, entering the fresh code into the genuine service's own login flow may be correct.
- **Record B:** Do not share any code, click the unexpected link, or reply. Use a known official app or bookmark to check the account independently.
- **Important distinction:** The code may be generated by a genuine service while the request to **disclose** it comes from an imposter. The source and purpose of the request must be verified.

**Reasoning:** A valid secret should be used only through a legitimate authenticated workflow, not supplied to a stranger.
:::

### Activity 6: Build a nonsecret account-protection inventory

Use the following fictional inventory to prioritize improvements. Do not put any real credential or recovery value into your answers.

| Fictional account | Current protection | Known recovery status |
| --- | --- | --- |
| Main email | Unique password, SMS only | Old recovery phone number |
| Money account | Unique password, authenticator app | Spare code saved in unlocked notes app |
| School portal | Required FIDO security key | IT-managed backup procedure |
| Hobby site | Unique password, MFA unavailable | Valid recovery email |
| Password manager | Unique master password, no second factor | Recovery process not reviewed |

For each account, propose one realistic next action. Identify which actions are most urgent and why. Finish by writing a three-line personal policy that contains **no secret information**.

:::answer Show Activity 6 model answers
- **Main email:** Correct outdated recovery details; consider available phishing-resistant protection because email is a gateway to other accounts.
- **Money account:** Move the recovery material from unprotected notes into an appropriate secure storage arrangement; review the provider's recovery and activity alerts.
- **School portal:** Follow IT policy and confirm the published lost-key or backup procedure without attempting unauthorized account changes.
- **Hobby site:** Keep a unique password, review account-security alerts, and check periodically for additional authentication features.
- **Password manager:** Review and activate supported MFA and recovery procedures before depending on it for more accounts.

**Sample nonsecret policy:** “I initiate sign-ins through trusted routes. I reject requests I did not start. I prepare a secure backup method before replacing devices.”

**Prioritization:** Start with email, password-manager protection, exposed recovery secrets, and financial accounts because their compromise or lockout can create wider consequences.
:::

### Practice reflection

A learner understands two-factor authentication when they can explain **why** a requested action is legitimate or suspicious. The correct response is not always to complete every prompt. Sometimes the correct response is to **deny, verify, or seek approved assistance**. Repeat the fictional examples until that distinction becomes routine.

## 8. Common misconceptions and avoidable mistakes

### “Two passwords count as two factors.”

Two passwords are normally two pieces of knowledge-based evidence. True 2FA combines distinct factor categories or uses an appropriate multifactor authenticator. Learn the factor model rather than counting fields on a form.

### “Two-factor authentication makes my account impossible to hack.”

MFA significantly improves protection against many password-only attacks, but it cannot prevent every device compromise, phishing trick, stolen session, insecure recovery path, or service-level incident. Continue protecting passwords, devices, and account activity.

### “An SMS code is useless, so I should turn it off immediately.”

SMS has weaknesses, including phone-number takeover and phishing, but it is usually more protective than password-only sign-in if no stronger option exists. Move toward stronger supported methods when possible, with a verified recovery plan before removing the old method.

### “A code from an authenticator app cannot be stolen.”

An attacker can trick someone into entering an app-generated code on a fake website while the code is still valid. App-based OTP avoids some SMS risks but does not itself provide phishing resistance.

### “Every MFA app uses the same method.”

Some applications generate time-based codes, some receive push approvals, and others manage passkeys or work with organizational systems. Understand the actual function and whether it binds the authentication to the intended service.

### “A real notification must be approved if it appears on my phone.”

The notification interface can be genuine while the sign-in request is unauthorized. Never approve a request you did not start; check the account independently.

### “Number matching proves the person calling me is legitimate.”

Number matching helps tie an approval to a sign-in, but a caller can manipulate the context or tell you which number to select. The underlying request must originate from a login **you** initiated on the genuine service.

### “My passkey gives the website my fingerprint.”

In typical FIDO passkey flows, a fingerprint or local PIN helps unlock a credential on a device or security key; the service receives cryptographic proof instead of a raw fingerprint. Individual systems can differ, so follow trustworthy documentation about how their biometric handling works.

### “If my phone has a fingerprint lock, every account automatically has 2FA.”

A device unlock protects access to the device. Individual accounts still need properly configured authentication methods. A locally verified passkey can provide strong multifactor sign-in, but an unrelated website password is not protected simply because the phone has a fingerprint sensor.

### “I can safely save a QR setup code in a shared document.”

An authenticator enrollment QR code may encode information that allows another device to reproduce your codes. It is a secret. A classroom illustration should use fictional data, never a real enrollment screen.

### “Recovery codes are less sensitive because they are for emergencies.”

Recovery codes can unlock or restore a protected account and may bypass the normal second-factor step. Treat them as high-value secrets and store them carefully.

### “I will set up recovery only after my phone is lost.”

That may be too late. Official recovery can be difficult or impossible without prior setup. Review recovery methods while you still have authorized account access, and protect the backup path from abuse.

### “My new phone automatically has all my old authenticator registrations.”

Some providers synchronize or transfer credentials, but others require manual re-enrollment. Verify each important account on the new device before erasing the old one.

### “If a code arrives, a hacker has already entered my account.”

An unsolicited code shows that an authentication or verification process may have started. It does not, by itself, establish a successful account compromise. Check verified activity and security changes before drawing conclusions.

### “A website that displays a lock icon must be the real service.”

HTTPS protects a connection to the addressed destination; it does not guarantee that the destination is honest. Fraudulent sites can also use encryption. Verify the actual domain and the reason for sign-in.

### “The safest plan is to disable all backup authentication methods.”

Removing every fallback may create serious lockout risk. The better approach is to use secure, provider-supported recovery, protect it against unauthorized access, and remove unnecessary weak routes only after understanding the consequences.

### A compact decision guide

| When you notice... | Avoid this reaction | Prefer this response |
| --- | --- | --- |
| MFA offered on an important account | “My password alone is enough” | Enable suitable MFA, favor phishing-resistant methods |
| An unexpected approval request | “Approve to get rid of it” | Deny, verify independently, review activity |
| A caller asks for a login code | “They sound official” | Refuse disclosure and use verified contact information |
| A temporary code expires | “Keep guessing or send screenshots” | Start a new legitimate attempt and follow official guidance |
| New phone is ready to replace old one | “Erase the old phone first” | Transfer, test, then retire old registrations |
| Recovery code appears in a public note | “It is only a backup” | Treat it as exposed and replace through official procedure |
| A passkey is available | “It is just another SMS code” | Understand its phishing-resistant cryptographic design |
| A familiar browser asks to remember a public computer | “It is harmless convenience” | Decline on shared or public devices |

> **The central safety question:** “Am I completing a sign-in I deliberately started at an independently verified service?” If the answer is no or uncertain, do not approve or disclose anything until you have verified the situation.

## 9. Essential vocabulary

The underlined interactive expressions in this lesson open concise explanations when supported by the MGU dashboard. Their definitions are also printed here so that a reader using plain text, assistive technology, or a printed worksheet does not depend on interactive popovers. Learn how each word changes a **decision**, not merely how to pronounce it.

### Account access and identity

- **Account:** A service's record associated with a user or organization.
- **Username:** The identifier used to select an account at sign-in.
- **Password:** A secret used as evidence of account access rights.
- **Authentication:** Checking whether the person or device claiming an identity can provide required evidence.
- **Authorization:** Determining what an authenticated account may access or change.
- **Authentication factor:** A category of identity evidence, such as knowledge, possession, or biometric characteristics.
- **Two-factor authentication (2FA):** Using two different factor categories during authentication.
- **Multifactor authentication (MFA):** Requiring more than one distinct factor, possibly combined in one authenticator.
- **Two-step verification:** A product label for an additional sign-in process; the underlying factor types still matter.
- **PIN:** A numeric secret used to access a device, service, or protected credential.
- **Biometric authentication:** Use of a body characteristic, such as a fingerprint, to support an identity check.
- **Device lock:** A protective control limiting use of a phone, tablet, or computer until unlocked.
- **Session:** Continued authenticated access to an account after successful sign-in.
- **Sign out:** Use a service's normal control to end an authenticated session.
- **Trusted device:** A device recognized by a service under specific authentication settings.

### Verification methods

- **SMS code:** A short sign-in value delivered by text to a registered number.
- **Voice code:** A verification value delivered through a telephone call.
- **One-time password (OTP):** A value intended to authenticate a particular event or limited time period.
- **TOTP:** A time-based OTP generated by a registered authenticator and changing on a schedule.
- **Authenticator app:** An app that generates codes or supports other sign-in confirmation mechanisms.
- **Push approval:** A request delivered to a registered app or device asking whether to allow authentication.
- **Number matching:** A mechanism that asks the user to associate an approval with a number shown in the sign-in flow.
- **Enrollment:** Registration of a new authenticator or authentication method for an account.
- **Enrollment secret:** Confidential data that can connect a code-generating authenticator to a service.
- **Security key:** A registered cryptographic authenticator often implemented as a physical token.
- **Passkey:** A cryptographic credential that can authenticate to the intended service without transmitting a reusable password.
- **FIDO2:** A set of standards for public-key authentication including phishing-resistant credentials.
- **WebAuthn:** A web standard through which browsers and platforms can use supported cryptographic authenticators.
- **Phishing resistance:** Authentication designed to resist fake-site impersonation and related credential interception.
- **Public key:** The shareable part of a cryptographic key pair used for verification.
- **Private key:** The protected part of a key pair used for cryptographic proof and not disclosed to the website.
- **Passwordless sign-in:** Authentication that does not require the user to type a traditional account password.
- **Device-bound credential:** A credential designed to remain associated with a specific device or authenticator.
- **Synchronized passkey:** A supported passkey copied or made available across devices through an approved credential provider.

### Risks and attack methods

- **Phishing:** Deception designed to obtain credentials, codes, money, or harmful actions.
- **Social engineering:** Manipulation of people into revealing information or granting access.
- **Impersonation:** Pretending to be a trusted person or organization.
- **SIM swap:** Unauthorized transfer or replacement of a phone-number subscription that can redirect messages.
- **Porting fraud:** Improperly moving a phone number between carriers or accounts.
- **MFA fatigue:** Pressure or confusion caused by repeated approval requests.
- **Push bombing:** Sending repeated sign-in approvals to induce accidental or pressured acceptance.
- **Account takeover:** Unauthorized control of an online account.
- **Data breach:** Unauthorized exposure or access to protected information.
- **Credential reuse:** Using the same account secret in more than one service.
- **Session theft:** Obtaining a valid authenticated session without completing a fresh login.
- **Spoofing:** Falsifying identity cues, sender details, or other indicators of origin.
- **HTTPS:** An encrypted web-connection scheme that does not certify a website's honesty.
- **Domain:** The registered internet name associated with a website or service.

### Recovery and secure operations

- **Recovery code:** An emergency secret that may restore account access when a normal authenticator is unavailable.
- **Backup codes:** One or more recovery values issued by a service for emergency access.
- **Backup authenticator:** Another registered and authorized method available when the primary one fails.
- **Account recovery:** A legitimate process for restoring access to a locked-out account.
- **Recovery email:** A designated inbox that can receive account-recovery information.
- **Account inventory:** A nonsecret record of which accounts need protection and which security controls are enabled.
- **Independent verification:** Checking a request using a trusted channel that was not supplied solely by the suspicious message.
- **Sign-in history:** A service's record or summary of past account login activity.
- **Security alert:** A message about potentially important access or security changes.
- **Incident response:** Actions to assess, contain, report, and recover from a security event.
- **Official support channel:** A customer-support path verified through the real service or institution.
- **Accessibility:** Designing controls and alternatives so people with different abilities can use a system.
- **Recovery planning:** Preparing a secure, usable route to regain access after predictable device or credential loss.

### Apply the vocabulary

A complete explanation might sound like this: *“A login notification appeared without a sign-in I initiated. I will deny the push approval, verify the account through a trusted channel, and review its sign-in history. A recovery code is for emergency access, not something I should share with the caller.”* This explanation links several technical terms to concrete, safe actions.

## 10. Knowledge check

Select **one answer** for each question. The MGU dashboard can score these practice questions and show explanatory feedback; this is a self-study exercise, not a secure proctored examination. Each scenario is fictional. You do not need to use an actual account, produce a real login code, or change your security settings.

:::quiz
? What is the central purpose of two-factor authentication?
- [x] Make unauthorized sign-ins harder even if a password is learned
- [ ] Guarantee a device can never be compromised
- [ ] Replace the need to verify websites
! 2FA adds distinct authentication evidence; it does not remove every other security responsibility.

? Which example most clearly uses two different factor categories?
- [ ] A password followed by a code from a registered authenticator device
- [x] A password followed by a second memorized word
- [ ] A username followed by a profile nickname
! The password is knowledge and the registered authenticator provides possession evidence.

? Which choice is not automatically true two-factor authentication?
- [ ] A protected passkey using local user verification
- [ ] A password followed by an answer to a memorized security question
- [x] A password with a FIDO security key
! Two knowledge answers do not automatically represent two different factors.

? You are not signing in but receive an approval notification. What should you do?
- [x] Reject it and check the account through a trusted route
- [ ] Approve immediately to remove the notification
- [ ] Read a code aloud to whoever calls next
! Only approve requests that correspond to sign-ins you personally initiated.

? Why is SMS-based verification less secure than a phishing-resistant key?
- [ ] A telephone number may be taken over and a text code can be phished
- [x] A text message cannot contain numbers
- [ ] All SMS messages immediately give away the account
! SMS can still help, but number takeover and phishing limit its protection.

? What is true of authenticator-app codes?
- [ ] They prove that every website asking for one is honest
- [ ] They can still be stolen through a fraudulent sign-in page
- [x] They cannot expire
! TOTP avoids some SMS weaknesses but is not inherently phishing-resistant.

? Which method is generally phishing-resistant when properly implemented?
- [x] A FIDO2/WebAuthn security key or passkey
- [ ] A code pasted into any website with a lock icon
- [ ] A password and a memorable security question
! FIDO-based authentication cryptographically binds the credential to the intended service.

? A caller reads a number that matches a push notification you did not initiate. What next?
- [ ] Reject and independently verify the alleged request
- [x] Accept because the caller supplied the right number
- [ ] Share your PIN to confirm the caller works for support
! Number matching is useful only when you started the legitimate sign-in.

? What should you do with a real authenticator setup QR code?
- [ ] Email it to a friend as a backup
- [ ] Keep it confidential and enroll only through verified account settings
- [x] Post it in a classroom discussion for feedback
! A setup QR code may encode a secret used to generate future codes.

? Why do account recovery methods require careful protection?
- [x] They may restore access and sometimes bypass the ordinary sign-in method
- [ ] They are always harmless because they are temporary
- [ ] They can replace the need to check for unauthorized sessions
! Recovery routes can be as consequential as the normal login method.

? What is a sensible first step when enrolling MFA?
- [ ] Open the verified service or app and locate its real security settings
- [x] Use a link from an unexpected security email
- [ ] Ask a caller to configure it using remote access
! Always start with a trusted account destination, not a surprising message.

? What is the safest plan before trading in a working phone with authenticator apps?
- [ ] Assume every authenticator was automatically transferred
- [ ] Arrange recovery and test approved enrollment on the new device first
- [x] Erase the old device immediately
! Provider transfer methods vary; verify continued access before retiring old registrations.

? A time-based authenticator code has expired. What should you do?
- [x] Use a fresh code from the legitimate app and verified service
- [ ] Send a screenshot of all your codes to a stranger
- [ ] Disable browser protection until the old code works
! Expired codes are ordinary; restart the verified sign-in and use the next valid code.

? Which factor category best describes an ordinary password?
- [ ] Something you know
- [x] Something you have
- [ ] Something you are
! A memorized password belongs to the knowledge category.

? How can a protected passkey sometimes provide multifactor authentication in one interaction?
- [ ] By asking you to answer two security questions
- [ ] By combining possession of a cryptographic credential with local PIN or biometric verification
- [x] By emailing your password to the service
! A device or key can protect the private credential and require local activation.

? What does HTTPS establish most directly?
- [x] An encrypted connection to the addressed site, not proof of its honesty
- [ ] The company is approved by your bank
- [ ] The requested login must have been initiated by you
! HTTPS protects transport but does not by itself certify business identity or trustworthiness.

? Why is repeated unexpected push prompting suspicious?
- [ ] It may be an attempt to pressure you into approving an unwanted sign-in
- [x] The account necessarily has no password
- [ ] The app is required to send ten prompts for every login
! Push bombing or MFA fatigue targets a user’s decision, not just a password.

? A real sign-in code arrives by text while you are not logging in. What does that prove?
- [ ] All of your accounts have been compromised
- [ ] A verification attempt occurred or was requested, but not necessarily successful access
- [x] Someone has definitely entered the account successfully
! An unexpected code is a reason for caution and review, not an automatic diagnosis of takeover.

? What should be written in an account-security inventory?
- [x] Whether MFA and recovery planning have been reviewed, without recording secrets
- [ ] Passwords, current one-time codes, and private setup keys
- [ ] Shared recovery codes so every student can help
! Inventory nonsecret status and needed actions; keep authenticator secrets private.

? When a school mandates a particular security key, what is appropriate?
- [ ] Follow institutional procedures and request an accessible option when necessary
- [x] Replace it with an unapproved app to save time
- [ ] Share the key PIN with classmates
! Managed accounts require authorized enrollment, backup, and accessibility procedures.

? Which example is a potential backup authenticator?
- [ ] A friend using your account password
- [ ] A second registered security key kept securely
- [x] A screenshot of the current one-time code posted publicly
! A backup must be authorized, protected, and available when the primary authenticator is lost.

? What is the risk of selecting “Remember this device” on a public computer?
- [x] A service may reduce later authentication checks on a device you do not control
- [ ] It automatically deletes your personal files
- [ ] It makes all websites display their real registered owners
! Remembered-device settings are designed for devices under the user’s control.

? How should you respond to a message saying MFA was disabled?
- [ ] Check the account’s real security settings through an independent route
- [x] Forward any code it requests
- [ ] Assume the sender must be the legitimate provider
! Security messages can be spoofed; verified account settings provide stronger evidence.

? What is meant by number matching?
- [ ] Calling a random number for technical support
- [ ] Matching a displayed number from your own real sign-in to the authenticator approval
- [x] Adding two passwords together
! Number matching helps associate a deliberate login with a device prompt.

? What can make email-based verification less independent?
- [x] Using an inbox that is already compromised or is the very account being accessed
- [ ] Giving the email account a unique password
- [ ] Protecting the email account with strong MFA
! Email codes depend on the security and availability of the inbox that receives them.

? Which statement about biometrics is most accurate?
- [ ] Biometrics can unlock a local credential, but suitable fallbacks and device protection still matter
- [x] Fingerprints always have to be sent to websites
- [ ] A face unlock by itself enables MFA for every unrelated web account
! Local biometric checks often activate a credential; they do not secure every account automatically.

? What does a recovery code usually do?
- [ ] Identify which company owns an unfamiliar website
- [ ] Help restore an authorized user’s access when the normal sign-in factor is unavailable
- [x] Guarantee every stolen phone can be found
! Recovery codes are emergency authentication secrets and should be stored securely.

? If a known account shows an unfamiliar successful login, what is a reasonable response?
- [x] Use official controls to secure it, review sessions and recovery changes, and report if needed
- [ ] Approve every later prompt to avoid inconvenience
- [ ] Assume nothing happened because MFA is configured
! Confirmed suspicious activity calls for account-specific containment and investigation.

? Which scenario is an example of phishing-resistant authentication?
- [ ] Using an appropriately implemented passkey tied to the correct service origin
- [x] Typing an SMS code from a text into an unfamiliar webpage
- [ ] Replying to a support caller with a changing authenticator code
! A passkey can resist imitation sign-in sites through origin-bound cryptographic proof.

? Which statement best summarizes everyday MFA safety?
- [ ] The second factor is more important than recovering account access
- [ ] Prefer strong supported methods, approve only self-initiated requests, and protect recovery
- [x] Any extra step can be approved if the notification appears real
! Effective MFA use combines sound enrollment, deliberate approval, and protected fallback routes.

:::

:::answer Show the 30-question manual answer key
**Correct choices:** 1. A, 2. B, 3. C, 4. A, 5. B, 6. C, 7. A, 8. B, 9. C, 10. A, 11. B, 12. C, 13. A, 14. B, 15. C, 16. A, 17. B, 18. C, 19. A, 20. B, 21. C, 22. A, 23. B, 24. C, 25. A, 26. B, 27. C, 28. A, 29. B, 30. C.

The explanation after each question provides the reasoning behind the correct answer. When the interactive dashboard is unavailable, use the table of concepts in this lesson and the listed answer positions to check your decisions.
:::

## 11. MGU Library connections and next steps

### What you should now be able to do

You should now be able to distinguish a password from an authenticator, describe the difference between two steps and two genuinely distinct factor categories, compare common login methods, reject an unexpected prompt, and prepare for safe account recovery. A learner should also recognize that a security key, passkey, TOTP code, SMS code, and backup recovery code are **not interchangeable technologies**.

Your operating reminder is **INITIATE → VERIFY → AUTHENTICATE → REVIEW → RECOVER**. Initiate sign-ins yourself, verify the real service, authenticate using a supported method, review unusual activity, and make recovery arrangements before a device is lost. The presence of a code or prompt never overrides your responsibility to decide whether the underlying request is yours.

### MGU reference connections

- [MGU Encyclopedia: Authentication Systems](/library/encyclopedia/computer-science/security-systems/authentication-systems) — identity verification, authentication mechanisms, and threats.
- [MGU Encyclopedia: Computer Security](/library/encyclopedia/computer-science/security-systems/computer-security) — broader device, account, and data protection.
- [MGU Encyclopedia: Access Control](/library/encyclopedia/computer-science/security-systems/access-control) — the distinction between authenticating an identity and authorizing an action.
- [MGU Encyclopedia: Cryptography](/library/encyclopedia/computer-science/security-systems/cryptography) — foundations of public-key authentication and protected communications.
- [MGU Computer Science Foundations, Chapter 21: Cybersecurity Foundations](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-21) — an introductory treatment of account and cybersecurity threats.
- [MGU Computer Science Foundations, Chapter 22: Privacy, Identity, and Digital Safety](/library/textbooks/06-computer-science-and-technology/computer-science-foundations/cs-foundations-chapter-22) — account safety in a broader digital literacy context.

### External guidance and standards

- [NIST: Multi-Factor Authentication](https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/multi-factor-authentication) — updated, practical explanation of factors and phishing-resistant options.
- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) — technical guidance on authenticators, OTP, recovery, and phishing resistance.
- [NIST: Authenticator Examples](https://pages.nist.gov/800-63-4-Implementation-Resources/authenticator/) — comparison of authentication technologies and their properties.
- [FTC: Use Two-Factor Authentication To Protect Your Accounts](https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts) — beginner-friendly consumer guidance on codes, apps, and keys.
- [FTC: What Is a Verification Code and Why Would Someone Ask Me for It?](https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it) — scam prevention and code-sharing risks.
- [CISA: Secure Our World](https://www.cisa.gov/secure-our-world) — practical measures for protecting sign-ins and detecting phishing.

### Course navigation

- **Course index:** [Digital Safety and Scam Awareness](/department/computer-science/basic-computer-skills/digital-safety-and-scam-awareness/)
- **Previous lesson:** Lesson 1 — [Password Safety](/department/computer-science/basic-computer-skills/digital-safety-and-scam-awareness/password-safety/) (`password-safety.md`)
- **Current lesson:** Lesson 2 — Two-Factor Authentication (`two-factor-authentication.md`)
- **Next lesson:** Lesson 3 — [Phishing and Scam Warning Signs](/department/computer-science/basic-computer-skills/digital-safety-and-scam-awareness/phishing-and-scam-warning-signs/) (`phishing-and-scam-warning-signs.md`)

Lesson 3 expands on how scammers impersonate familiar services, use urgency and unexpected links, and try to obtain codes, credentials, or money. Continue when you can explain why **an authentic code or notification does not establish that a request is authorized**.

:::terms
two-factor-authentication | Two-factor authentication | Authentication using two distinct factor categories. | /library/encyclopedia/computer-science/security-systems/authentication-systems
multifactor-authentication | Multifactor authentication | Identity verification with more than one distinct factor or a valid multifactor authenticator. | /library/encyclopedia/computer-science/security-systems/authentication-systems
account | Account | A service-maintained record associated with a person or organization. |
username | Username | An identifier that selects an account for sign-in. |
password | Password | A private secret used as knowledge evidence in a sign-in. |
authentication | Authentication | Checking required evidence of a claimed identity. | /library/encyclopedia/computer-science/security-systems/authentication-systems
authorization | Authorization | Determining the actions and data an authenticated identity may access. | /library/encyclopedia/computer-science/security-systems/access-control
authentication-factor | Authentication factor | A distinct category of identity evidence such as knowledge possession or biometrics. |
two-step-verification | Two-step verification | A service label for a sign-in process with more than one visible verification step. |
pin | PIN | A numeric secret used to unlock a device authenticator or account under its particular design. |
biometric-authentication | Biometric authentication | Using a physical characteristic such as a fingerprint to support identity verification. |
device-lock | Device lock | A device control that restricts use until the user unlocks it. |
session | Session | Continued authenticated access maintained by a service after a sign-in. |
sign-out | Sign out | Ending an authenticated session through the service's supported controls. |
trusted-device | Trusted device | A device that a service recognizes under its authentication settings. |
sms-code | SMS code | A short verification value sent to a registered telephone number through text messaging. |
voice-code | Voice code | A verification value delivered through a telephone call. |
one-time-password | One-time password | A time-limited or transaction-limited authentication value. |
totp | Time-based one-time password | A short-lived code computed by a registered authenticator using time and shared setup data. |
authenticator-app | Authenticator app | Software that generates sign-in codes or supports other authentication requests. |
push-approval | Push approval | A notification asking the account owner to approve or deny a sign-in. |
number-matching | Number matching | An approval step linking a prompt to a number visible during the attempted login. |
enrollment | Enrollment | Registering an authentication method for an account. |
enrollment-secret | Enrollment secret | Confidential registration material used to configure an authenticator to generate valid codes. |
security-key | Security key | A registered hardware or integrated authenticator used to produce cryptographic proof. |
passkey | Passkey | A public-key credential tied to a service identity and used for cryptographic authentication. |
fido2 | FIDO2 | A family of standards for public-key cryptographic web authentication. |
webauthn | WebAuthn | A web standard enabling sites and browsers to use supported cryptographic authenticators. |
phishing-resistance | Phishing resistance | Authentication property reducing the ability of a fake website to obtain usable sign-in proof. |
public-key | Public key | The shareable verification component of an asymmetric cryptographic key pair. | /library/encyclopedia/computer-science/security-systems/cryptography
private-key | Private key | Protected component of a key pair used to generate cryptographic proof. | /library/encyclopedia/computer-science/security-systems/cryptography
passwordless-sign-in | Passwordless sign-in | A sign-in process that does not require typing a traditional account password. |
device-bound-credential | Device-bound credential | An authentication credential intended to remain on a particular device or authenticator. |
synchronized-passkey | Synchronized passkey | A passkey securely made available across permitted devices by an authorized provider. |
phishing | Phishing | Impersonation or deception intended to steal secrets or induce harmful actions. | /library/encyclopedia/computer-science/security-systems/computer-security
social-engineering | Social engineering | Manipulation of human decisions to obtain information access or other benefits. |
impersonation | Impersonation | Pretending to be another person service or organization. |
sim-swap | SIM swap | Unauthorized change of SIM or subscription control that may redirect phone messages. |
porting-fraud | Porting fraud | Improper transfer of a phone number to another account or carrier. |
mfa-fatigue | MFA fatigue | Repeated authentication requests intended to exhaust or confuse a user into approval. |
push-bombing | Push bombing | Sending repeated authentication notifications to pressure an account owner. |
account-takeover | Account takeover | Unauthorized control of someone else's account. |
data-breach | Data breach | Unauthorized access to or exposure of protected information. | /library/encyclopedia/computer-science/security-systems/computer-security
credential-reuse | Credential reuse | Reusing an account secret at multiple services. |
session-theft | Session theft | Theft or misuse of an already authenticated session. |
spoofing | Spoofing | Falsifying identity or origin indicators to appear trustworthy. |
https | HTTPS | A web scheme providing encrypted communication with an addressed server rather than a guarantee of honesty. |
domain | Domain | A registered internet name identifying a host or service address. |
recovery-code | Recovery code | A sensitive value issued for restoring access when normal authentication is unavailable. |
backup-codes | Backup codes | One or more emergency recovery secrets issued by a service. |
backup-authenticator | Backup authenticator | A second authorized authenticator available if the primary one is lost. |
account-recovery | Account recovery | The approved process of regaining access when ordinary sign-in becomes unavailable. |
recovery-email | Recovery email | A designated mailbox used during service-approved account restoration. |
account-inventory | Account inventory | A nonsecret tracking list of account protection and recovery status. |
independent-verification | Independent verification | Confirming a claim through a trusted channel not supplied solely by the suspicious request. |
sign-in-history | Sign-in history | A provider's account-activity record of successful or attempted access. |
security-alert | Security alert | A notification about a potentially important security or authentication event. |
incident-response | Incident response | Assessing containing reporting and recovering from a security problem. | /library/encyclopedia/computer-science/security-systems/computer-security
official-support-channel | Official support channel | A support route independently confirmed as belonging to the relevant service. |
accessibility | Accessibility | Design and support that allow people with different abilities to use a system. |
recovery-planning | Recovery planning | Preparing usable authorized backup routes before normal account access is lost. |
:::
