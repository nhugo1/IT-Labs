# Activity 8: Domain Hardening and Advanced Security Policies

## Objective
To implement a multi-layered security posture within the `LABS.local` domain by enforcing strict password requirements, account lockout protections, and granular User Rights Assignments (URA).

---

## Technical Tasks & Proficiency

### 1. Password and Account Lockout Policies
* **Domain-Wide Baseline:** Configured the Default Domain Policy to enforce a **12-character minimum** and mandatory complexity requirements.
* **Brute-Force Protection:** Implemented a **3-strike lockout threshold**. Accounts are automatically locked after three failed attempts to mitigate automated credential stuffing and brute-force attacks.

**Evidence:**
![Account Lockout Policy](Screenshots/Activity8_Account_Lockout_Policy.png)
![Password Policy Settings](Screenshots/Activity8_Password_Policy.png)
![Lockout Error Verification](Screenshots/Activity8_Lockout_Error.png)
![Complexity Enforcement Error](Screenshots/Activity8_Complexity_Error.png)

---

### 2. Fine-Grained Password Policies (FGPP)
* **Tiered Security Architecture:** Recognized that administrative accounts require higher security than standard users. 
* **PSO Implementation:** Created a Password Settings Object (PSO) named **"AdminPasswordPolicy"** with a **15-character minimum length** and Precedence 1.
* **Targeting:** Assigned the PSO to the `#IT-Admins` group, demonstrating the ability to override domain-wide settings for high-value targets.

**Evidence:**
![Fine-Grained Password Policy](Screenshots/Activity8_FGPP_Admin_Policy.png)

---

### 3. User Rights Assignment (Access Control)
* **Local Logon Restriction:** Engineered a "User Rights" GPO to **Deny log on locally** for the `Restricted_Users` group.
* **Remote Desktop (RDP) Hardening:** Explicitly restricted RDP access to authorized IT personnel only, preventing unauthorized lateral movement.
* **Troubleshooting:** Utilized `gpresult /r` to diagnose propagation issues. Resolved by linking the GPO to the Domain Root to ensure consistent application across all OUs.

**Evidence:**
![User Rights Assignment Settings](Screenshots/Activity8_User_Rights_Assignment.png)
![Local Logon Denied Verification](Screenshots/Activity8_Local_Logon_Denied.png)
![RDP Denial Success](Screenshots/Activity8_RDP_Denial_Success.png)

---

## Final Validation
* **Access Control:** Confirmed Windows 11 displays: *"The sign-in method you're trying to use isn't allowed"* for restricted accounts.
* **RDP Protection:** Verified the system-level error: *"The user has not been granted the requested logon type"* during unauthorized remote attempts.

---

## Key Takeaways
* **Defense-in-Depth:** Applied security at the account, policy, and protocol levels.
* **Granular Control:** Demonstrated proficiency in using PSOs and User Rights to move beyond "one-size-fits-all" security settings.
