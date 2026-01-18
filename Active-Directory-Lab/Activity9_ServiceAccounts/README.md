# Activity 9: Service Accounts and Kiosk Mode Configuration

## Objective
To implement a single-purpose kiosk workstation using a dedicated service account with automated login, restricted access rights, and browser auto-launch functionality. This activity demonstrates secure service account deployment, access control hardening, and automated system configuration.

---

## Technical Tasks & Proficiency

### 1. Service Account & OU Provisioning
* **Identity Management:** Created a dedicated "Service Accounts" OU to separate non-human identities from standard user objects.
* **Naming Standards:** Provisioned `$Website-login@labs.local`, utilizing the `$` prefix convention for easy identification and filtering in logs and ADUC.

**Evidence:**
![AD Service Account OU](Screenshots/Activity9_AD_ServiceAccount.png)

---

### 2. Automated Authentication Workflow
* **Tooling:** Utilized **Sysinternals Autologon** to configure the Windows 11 workstation for zero-touch authentication.
* **Operational Continuity:** Configured Power Management settings to disable sleep/hibernate modes, ensuring 24/7 availability for the kiosk interface.

**Evidence:**
![Autologon Configuration](Screenshots/Activity9_Autologon_Configuration.png)

---

### 3. Kiosk Mode & UX Lockdown
* **Auto-Launch:** Leveraged the `shell:startup` directory to initiate Google Chrome upon user login.
* **Browser Hardening:** Modified the shortcut target with the `--start-fullscreen` flag to strip away browser UI elements (address bar, tabs, navigation), forcing a dedicated web-interface experience.

**Evidence:**
![Startup Folder Configuration](Screenshots/Activity9_Startup_Folder.png)
![Chrome Kiosk Flags](Screenshots/Activity9_Chrome_Shortcut_Properties.png)



---

### 4. Access Control Hardening (User Rights Assignment)
To prevent the service account from being used as an attack vector for lateral movement, I implemented the following GPO restrictions:
* **Deny Local Logon:** Blocked the account from interactive console login on any other domain workstation.
* **Deny RDP Access:** Explicitly blocked the account from being used over Remote Desktop Services.

**Evidence:**
![User Rights Assignment](Screenshots/Activity9_User_Rights_Assignment.png)

---

## Security Considerations
* **Account Isolation:** By restricting logon rights, the service account is limited to its designated function, reducing the attack surface.
* **Physical Security:** Acknowledged that Autologon deployments require physical security controls, as credentials are encrypted but present in the local registry.

---

## Key Takeaways
* **Specialized Role Deployment:** Demonstrated proficiency in configuring non-standard Windows roles for retail, healthcare, or signage environments.
* **Principle of Least Privilege:** Applied User Rights Assignments to ensure a service account cannot be leveraged for unauthorized access beyond its specific kiosk function.
* **Automation:** Successfully integrated third-party Sysinternals tools with native Windows Group Policy to create a seamless, zero-touch user experience.
