# Activity 9 – Service Accounts and Kiosk Mode Configuration

## Objective

To implement a single-purpose kiosk workstation using a dedicated service account with automated login, restricted access rights, and browser auto-launch functionality. This activity demonstrates secure service account deployment, access control hardening, and automated system configuration in an enterprise environment.

## Lab Environment

- **Domain Controller:** Windows Server 2022 (labs.local)
- **Client Workstation:** Windows 11 Enterprise
- **Service Account:** $Website-login@labs.local
- **Tools Used:** Active Directory Users and Computers (ADUC), Group Policy Management Console (GPMC), Sysinternals Autologon, Google Chrome

## Tasks Performed

### 1. Service Account Creation

Created a dedicated Organizational Unit and service account within Active Directory:

- **OU Structure:** Created a "Service Accounts" OU nested within the USA OU to organize non-human identity accounts.
- **Account Naming Convention:** Used `$Website-login@labs.local` following best practices for service account identification ($ prefix denotes service account).
- **Purpose:** This account is designed exclusively for kiosk operations and should never be used for interactive administrative tasks.

**Skills:** Active Directory organizational design, service account provisioning, identity management best practices.

### 2. Automated Login Configuration

Implemented automated authentication for the kiosk workstation using Sysinternals Autologon:

- **Tool:** Sysinternals Autologon64.exe
- **Configuration:** Set the Windows 11 workstation to automatically authenticate as `$Website-login@labs.local` upon boot.
- **Security Consideration:** Autologon credentials are stored in the Windows Registry (encrypted). This is acceptable for dedicated kiosk devices in controlled physical environments but should not be used for general-purpose workstations.

**Skills:** Automated authentication configuration, understanding security trade-offs in kiosk deployments.

### 3. Browser Auto-Launch and Kiosk Mode

Configured Google Chrome to automatically launch in fullscreen kiosk mode on user login:

- **Startup Configuration:** Placed a Chrome shortcut in the user's Startup folder (`shell:startup`) to ensure automatic execution.
- **Kiosk Mode Flags:** Modified the Chrome shortcut properties to include `-start-fullscreen` in the Target field, forcing the browser to launch in fullscreen mode without UI elements.
- **Homepage Setting:** Configured Chrome to open a specific URL (Reddit used for demonstration purposes) on launch.
- **Result:** Upon system boot, the workstation automatically logs in and displays a fullscreen web page with minimal user interaction required.

**Skills:** Application auto-start configuration, command-line parameter usage, user experience (UX) lockdown.

### 4. Power Management Configuration

Ensured continuous operation by configuring power settings:

- **Display Sleep:** Disabled automatic display sleep/turn-off.
- **System Sleep:** Prevented the workstation from entering sleep or hibernate modes.
- **Use Case:** Critical for kiosks, digital signage, or monitoring displays that must remain operational 24/7.

**Skills:** Windows power management, operational continuity planning.

### 5. User Rights Assignment and Access Control Hardening

Implemented security restrictions to prevent unauthorized use of the service account:

- **GPO Creation:** Created or modified a User Rights Assignment Group Policy Object.
- **Deny Local Logon:** Configured "Deny log on locally" to prevent interactive console login using this service account on other domain workstations.
- **Deny RDP Access:** Configured "Deny log on through Remote Desktop Services" to prevent remote access using the service account credentials.
- **Scope:** These restrictions ensure the service account can only be used for its intended purpose (automated kiosk login) and cannot be leveraged for lateral movement or unauthorized access.

**Skills:** Group Policy security configuration, principle of least privilege, access control hardening, lateral movement prevention.

## Security Considerations

- **Service Account Isolation:** By restricting logon rights, the service account is limited to its designated function, reducing the attack surface.
- **Physical Security:** Autologon deployments assume physical security of the device. In environments where physical access cannot be controlled, alternative solutions (locked-down user accounts, certificate-based authentication) should be considered.
- **Credential Storage:** Autologon stores credentials in the registry. For high-security environments, consider alternative kiosk solutions that do not persist credentials locally.

## Verification and Testing

- **Reboot Test:** Performed a full system reboot to verify the complete automation workflow: auto-login → auto-launch Chrome → fullscreen kiosk mode.
- **Access Control Validation:** Confirmed that the service account cannot log in interactively to other domain workstations or via Remote Desktop.

## Screenshots

- **Activity9_AD_ServiceAccount.png** – Active Directory showing the Service Accounts OU with the $Website-login account.
- **Activity9_Autologon_Configuration.png** – Autologon tool configured with the service account credentials.
- **Activity9_Startup_Folder.png** – Chrome shortcut in the Startup folder for auto-launch.
- **Activity9_Chrome_Shortcut_Properties.png** – Chrome shortcut properties showing kiosk mode flags.
- **Activity9_User_Rights_Assignment.png** – Group Policy Editor showing denied logon rights for the service account.

## Key Takeaways

- **Service Accounts in Practice:** Demonstrated proper creation, naming, and restriction of service accounts for specialized system functions.
- **Automation and User Experience:** Configured a zero-touch kiosk experience using built-in Windows features and third-party tools.
- **Defense in Depth:** Applied security controls (User Rights Assignment) to limit the blast radius of a compromised service account.
- **Real-World Application:** This configuration mirrors production kiosk deployments in retail, healthcare, manufacturing, and digital signage environments.

## Future Enhancements

- Implement AppLocker or Windows Defender Application Control (WDAC) to restrict executable processes to Chrome only.
- Configure scheduled tasks to auto-restart Chrome in case of crashes or unresponsiveness.
- Deploy centralized kiosk management using Intune or Configuration Manager for fleet-wide control.
- Implement certificate-based authentication for kiosk accounts in high-security environments.

---

**Author:** Nick Hugo  
Aspiring IT Support / Systems Administrator  
CompTIA A+ | CompTIA Security+