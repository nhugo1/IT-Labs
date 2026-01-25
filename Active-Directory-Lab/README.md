# Active Directory & Group Policy Home Lab Overview

## Project Objective
This lab simulates a mid-sized enterprise Active Directory environment using Windows Server 2022 and Windows 11 client virtual machines. The goal is to demonstrate professional proficiency in identity management, centralized policy enforcement (GPO), and enterprise-grade security controls.

All configurations were performed in an isolated virtual lab environment and documented to reflect real-world IT workflows and troubleshooting methodologies.

---

## Lab Environment Details
* Domain Controller: Windows Server 2022 (labs.local)
* Client Workstation: Windows 11 Enterprise
* Networking: Static IPv4 & Manual DNS alignment
* Management Tools: GPMC, ADUC, FSRM, Sysinternals Autologon
* Virtualization: VirtualBox (Internal Network)

---

## Technical Activities Portfolio

| Activity | Focus Area | Key Skills Demonstrated |
| :--- | :--- | :--- |
| **[Activity 1](./Activity1_PasswordPolicy/)** | Password Hardening | Security Baselines, Complexity Enforcement |
| **[Activity 2](./Activity2_DriveMapping/)** | GPP Automation | Automated Network Drive Mapping |
| **[Activity 3](./Activity3_DesktopWallpaperPolicy/)** | UX Standardization | Administrative Templates, Branding Enforcement |
| **[Activity 4](./Activity4_ControlPanelRestricted/)** | Endpoint Hardening | System Lockdown, Risk Reduction |
| **[Activity 5](./Activity5_RemovableStoragePolicy/)** | Data Loss Prevention | USB/Removable Media Lockdown |
| **[Activity 6](./Activity6_GPOTesting/)** | GPO Troubleshooting | MS16-072 Resolution, Delegation & Filtering |
| **[Activity 7](./Activity7_FileShare/)** | Storage Governance | FSRM, Quotas, File Screening, SMB Shares |
| **[Activity 8](./Activity8_SecurityPolicies/)** | Advanced Security | FGPP (PSO), User Rights Assignment (URA) |
| **[Activity 9](./Activity9_ServiceAccounts/)** | Specialized Identities | Service Accounts, Kiosk Mode, Autologon |
| **[Activity 10](./Activity10_Advanced_File_Permissions/)** | NTFS Depth | Inheritance Breaks, Explicit Deny Precedence |
| **[Activity 11](./Activity11_NTFS_vs_Share_Permissions/)** | Permission Logic | Effective Permissions, Write-Only "Drop Boxes" |
| **[Activity 12](./Activity12_ABE/)** | Folder Visibility Control | Access-Based Enumeration (ABE), User Experience |

---

## High-Level Project Highlights

### Security & Hardening
Implemented Defense-in-Depth strategies, including Fine-Grained Password Policies for Admin accounts, Account Lockout protections, and the disabling of removable media to prevent data exfiltration.

### Automation & Efficiency
Leveraged Group Policy Preferences (GPP) and Administrative Templates to automate drive mapping, desktop environments, and UI restrictions, significantly reducing manual configuration and potential help desk ticket volume.

### Storage Governance
Utilized File Server Resource Manager (FSRM) to move beyond simple file sharing. Implemented "Hard Quotas" to prevent volume exhaustion and "Active File Screening" to block unauthorized file types (e.g., Executables/Media).

### Troubleshooting Expertise
Documented critical troubleshooting scenarios, such as resolving APIPA addressing issues on clients and fixing GPO silent failures caused by MS16-072 security changes through proper GPMC delegation.

---

## Completed Activities

### Activity 1 – Password Policy GPO

Configured a domain-linked Group Policy to enforce enterprise password standards:

- Enforced minimum password length and complexity requirements.
- Configured maximum password age to ensure regular credential rotation.

**Skills:** Security baseline enforcement, Account Policy configuration.

**Screenshots:**

![Activity1_MinLength](Activity1_PasswordPolicy/Screenshots/Activity1_MinLength.png)
![Activity1_Complexity](Activity1_PasswordPolicy/Screenshots/Activity1_Complexity.png)
![Activity1_MaxAge](Activity1_PasswordPolicy/Screenshots/Activity1_MaxAge.png)

### Activity 2 – Drive Mapping GPO (Basic)

Created a user-based GPO to automatically map network drives via Group Policy Preferences (GPP):

- Configured network paths and assigned persistent drive letters.
- Targeted specific User OUs for department-specific access.

**Skills:** Group Policy Preferences, network resource mapping.

**Screenshots:**

![Activity2_MappedDriveSettings](Activity2_DriveMapping/Screenshots/Activity2_MappedDriveSettings.png)
![Activity2_DriveMapsList](Activity2_DriveMapping/Screenshots/Activity2_DriveMapsList.png)

### Activity 3 – Desktop Wallpaper Policy

Standardized the user desktop environment to reflect corporate branding:

- Utilized Administrative Templates to enforce a specific wallpaper image and display style.

**Skills:** Administrative Templates, User Experience (UX) standardization.

**Screenshots:**

![Activity3_WallpaperSettings](Activity3_DesktopWallpaperPolicy/Screenshots/Activity3_WallpaperSettings.png)
![Activity3_WallpaperEnabled](Activity3_DesktopWallpaperPolicy/Screenshots/Activity3_WallpaperEnabled.png)

### Activity 4 – Restrict Control Panel Access

Implemented a security lockdown GPO to prohibit unauthorized system changes:

- Enabled "Prohibit access to Control Panel and PC settings" for non-administrative users.

**Skills:** Desktop lockdown, risk reduction.

**Screenshots:**

![Activity4_ControlPanelRestricted](Activity4_ControlPanelRestricted/Screenshots/Activity4_ControlPanelRestricted.png)

### Activity 5 – Disable USB Devices

Hardened workstation security by restricting unauthorized hardware:

- Disabled Read/Write access to removable storage devices via Computer Configuration.

**Skills:** Data Loss Prevention (DLP), hardware security enforcement.

**Screenshots:**

![Activity5_DisableUSBDevices](Activity5_RemovableStoragePolicy/Screenshots/Activity5_DisableUSBDevices.png)

### Activity 6 – GPO Troubleshooting & Testing

Resolved a critical "silent failure" regarding Security Filtering and Computer Objects:

- **Diagnosis:** Identified that Computer Objects required "Read" access (MS16-072) to process policies.
- **Resolution:** Modified Delegation to grant Authenticated Users "Read" permissions while restricting "Apply Group Policy" to the target group.

**Skills:** Advanced GPMC delegation, troubleshooting policy inheritance.

**Screenshots:**

![Activity6_Client1_in_USA_OU](Activity6_GPOTesting/Screenshots/Activity6_Client1_in_USA_OU.png)
![Activity6_ClientConnectivity](Activity6_GPOTesting/Screenshots/Activity6_ClientConnectivity.png)
![Activity6_DelegationTab](Activity6_GPOTesting/Screenshots/Activity6_DelegationTab.png)
![Activity6_DomainJoinConfirmation](Activity6_GPOTesting/Screenshots/Activity6_DomainJoinConfirmation.png)
![Activity6_GPO_Linked_OUs](Activity6_GPOTesting/Screenshots/Activity6_GPO_Linked_OUs.png)
![Activity6_IPconfig](Activity6_GPOTesting/Screenshots/Activity6_IPconfig.png)
![Activity6_StaticIP](Activity6_GPOTesting/Screenshots/Activity6_StaticIP.png)
![Activity6_ipconfig_all](Activity6_GPOTesting/Screenshots/Activity6_ipconfig_all.png)

### Activity 7 – File Services, Storage Governance & FSRM

Implemented a secure, managed file-sharing environment with automated mapping and storage controls.

- **Security & Permissions:** Configured a "Least Privilege" model using Share Permissions (Full Control) and NTFS Permissions (Read-Only) for Domain Users.
- **Network Troubleshooting:** Resolved an APIPA (169.254.x.x) connectivity issue by manually configuring IPv4 static addressing and DNS pointing to the DC.
- **GPO Automation:** Deployed the S: Drive automatically to the USA > Users OU using Group Policy Preferences.
- **FSRM Implementation:** Deployed File Server Resource Manager to enforce storage quotas (80% threshold alerts) and active file screening (blocking unauthorized file types via the "SHARWEED" template).

**Skills:** FSRM, NTFS/Share Permissions, Network Troubleshooting, GPO Automation.

**Screenshots:**

![Activity7_NTFS_Permissions](Activity7_FileShare/Screenshots/Activity7_NTFS_Permissions.png)
![Activity7_Client_IP_DNS](Activity7_FileShare/Screenshots/Activity7_Client_IP_DNS.png)
![Activity7_GPO_Config](Activity7_FileShare/Screenshots/Activity7_GPO_Config.png)
![Activity7_GPResult_Check](Activity7_FileShare/Screenshots/Activity7_GPResult_Check.png)
![Activity7_FSRM_Quota](Activity7_FileShare/Screenshots/Activity7_FSRM_Quota.png)
![Activity7_FSRM_Screen](Activity7_FileShare/Screenshots/Activity7_FSRM_Screen.png)
![Activity7_Final_Explorer](Activity7_FileShare/Screenshots/Activity7_Final_Explorer.png)

### Activity 8 – Domain Hardening and Advanced Security Policies

Implemented a multi-layered security posture within the LABS.local domain by enforcing strict password requirements, account lockout protections, and granular user rights assignments.

- **Password and Account Lockout Policies:** Configured the Default Domain Policy to enforce a 12-character minimum password length and password complexity requirements. Implemented a 3-strike account lockout threshold to prevent brute-force attacks.
- **Fine-Grained Password Policies (FGPP):** Created an advanced Password Settings Object (PSO) named "AdminPasswordPolicy" with a 15-character minimum length and Precedence 1, assigned to the "#IT-Admins" group to ensure high-privilege accounts meet elevated security standards.
- **User Rights Assignment (Access Control):** Created a "User Rights" GPO to deny local logon to the "Restricted_Users" group and restricted Remote Desktop Access to authorized IT personnel only.
- **Troubleshooting:** Diagnosed a GPO propagation issue using `gpresult /r` and resolved by linking the GPO to the Domain Root to ensure consistent policy application regardless of Organizational Unit (OU) placement.

**Skills:** Fine-Grained Password Policies, User Rights Assignment, Account Lockout Configuration, GPO propagation troubleshooting, Defense-in-depth security.

**Screenshots:**

![Activity8_Account_Lockout_Policy](Activity8_SecurityPolicies/Screenshots/Activity8_Account_Lockout_Policy.png)
![Activity8_Complexity_Error](Activity8_SecurityPolicies/Screenshots/Activity8_Complexity_Error.png)
![Activity8_Local_Logon_Denied](Activity8_SecurityPolicies/Screenshots/Activity8_Local_Logon_Denied.png)
![Activity8_Lockout_Error](Activity8_SecurityPolicies/Screenshots/Activity8_Lockout_Error.png)
![Activity8_Password_Policy](Activity8_SecurityPolicies/Screenshots/Activity8_Password_Policy.png)
![Activity8_User_Rights_Assignment](Activity8_SecurityPolicies/Screenshots/Activity8_User_Rights_Assignment.png)
![Activity8_RDP_Denial_Success](Activity8_SecurityPolicies/Screenshots/Activity8_RDP_Denial_Success.png)
![Activity8_FGPP_Admin_Policy](Activity8_SecurityPolicies/Screenshots/Activity8_FGPP_Admin_Policy.png)

### Activity 9 – Service Accounts and Kiosk Mode Configuration

Implemented a single-purpose kiosk workstation using a dedicated service account with automated login, restricted access rights, and browser auto-launch functionality.

- **Service Account Creation:** Created a "Service Accounts" OU within Active Directory and provisioned a service account (`$Website-login@labs.local`) following naming conventions for non-human identities.
- **Automated Login:** Configured Sysinternals Autologon to automatically authenticate the service account upon system boot, eliminating manual login requirements for the kiosk workstation.
- **Browser Auto-Launch and Kiosk Mode:** Placed a Chrome shortcut in the Startup folder and configured launch parameters (`-start-fullscreen`) to automatically open a specific webpage in fullscreen mode upon login.
- **Power Management:** Disabled display and system sleep settings to ensure continuous operation for 24/7 kiosk deployments.
- **Access Control Hardening:** Implemented User Rights Assignment policies to deny local logon and Remote Desktop access for the service account on other domain systems, restricting its use to the designated kiosk workstation only.

**Skills:** Service account provisioning, automated authentication, application auto-start configuration, User Rights Assignment, least privilege access control, kiosk deployment best practices.

**Screenshots:**

![Activity9_AD_ServiceAccount](Activity9_ServiceAccounts/Screenshots/Activity9_AD_ServiceAccount.png)
![Activity9_Autologon_Configuration](Activity9_ServiceAccounts/Screenshots/Activity9_Autologon_Configuration.png)
![Activity9_Startup_Folder](Activity9_ServiceAccounts/Screenshots/Activity9_Startup_Folder.png)
![Activity9_Chrome_Shortcut_Properties](Activity9_ServiceAccounts/Screenshots/Activity9_Chrome_Shortcut_Properties.png)
![Activity9_User_Rights_Assignment](Activity9_ServiceAccounts/Screenshots/Activity9_User_Rights_Assignment.png)

### Activity 10 – Advanced Windows File Sharing, Effective Permissions, and Inheritance

Implemented advanced NTFS permission strategies in real-world workplace scenarios, including selective inheritance control, explicit deny permissions, and least privilege access models.

- **Folder Structure and Share Configuration:** Created a hierarchical folder structure (C:\Common with Project and Events subfolders) and configured dual-layer permissions (Share + NTFS) to establish baseline access control.
- **Permission Inheritance and Selective Access Control:** Broke inheritance on the Project folder, removed overly permissive access (Everyone = Full Control), and granted targeted access to the Project security group. Created a Contracts subfolder to verify permission propagation from parent to child.
- **Explicit Deny Permissions:** Configured a scenario where user "John" was explicitly denied access to a Confidential subfolder while maintaining broader group-based access for other employees, demonstrating that Deny permissions always take precedence over Allow permissions.

**Skills:** Breaking and managing NTFS inheritance, explicit Deny configuration, permission precedence understanding, dual-layer permission model (Share vs. NTFS), security group-based permissions, least privilege access control.

**Screenshots:**

![Activity10_Break_Inheritance](Activity10_Advanced_File_Permissions/Screenshots/Activity10_Break_Inheritance.png)
![Activity10_Project_Folder_Permissions](Activity10_Advanced_File_Permissions/Screenshots/Activity10_Project_Folder_Permissions.png)
![Activity10_Confidential_Deny_Permissions](Activity10_Advanced_File_Permissions/Screenshots/Activity10_Confidential_Deny_Permissions.png)

### Activity 11 – NTFS vs Share Permissions

Demonstrated mastery of the dual-layer Windows permission model by implementing four real-world file sharing scenarios that require understanding of how Share Permissions and NTFS Permissions interact to determine effective access.

- **Marketing Department (Restrictive NTFS):** Configured permissive Share permissions (Everyone = Full Control) with restrictive NTFS permissions (Marketing_Interns = Read only), demonstrating that the most restrictive permission governs access.
- **HR Department (Complete Isolation):** Removed Everyone from Share permissions and restricted both Share and NTFS access to HR_Staff only, creating a completely isolated folder invisible to non-HR users.
- **Vendor Access (Write-Only Drop Box):** Configured Vendors group with Write-only NTFS permissions, creating a secure drop box where external parties can upload files but cannot view or download any content, including their own submissions.
- **IT Software Repository (Subfolder Restriction):** Granted IT_Staff full access to the Software folder, then broke inheritance on the Licenses subfolder to restrict access exclusively to #IT-Admins, demonstrating selective inheritance control for sensitive subfolders.

**Skills:** Dual-layer permission model (Share + NTFS), effective permissions calculation, write-only access patterns, complete folder isolation, inheritance control, least privilege enforcement, secure external collaboration models.

**Screenshots:**

![Activity11_Marketing_NTFS_Permissions](Activity11_NTFS_vs_Share_Permissions/Screenshots/Activity11_Marketing_NTFS_Permissions.png)
![Activity11_HR_Share_Permissions](Activity11_NTFS_vs_Share_Permissions/Screenshots/Activity11_HR_Share_Permissions.png)
![Activity11_HR_NTFS_Permissions](Activity11_NTFS_vs_Share_Permissions/Screenshots/Activity11_HR_NTFS_Permissions.png)
![Activity11_Vendor_NTFS_Permissions](Activity11_NTFS_vs_Share_Permissions/Screenshots/Activity11_Vendor_NTFS_Permissions.png)
![Activity11_Licenses_Inheritance_Broken](Activity11_NTFS_vs_Share_Permissions/Screenshots/Activity11_Licenses_Inheritance_Broken.png)

### Activity 12 – Access-Based Enumeration (ABE)

Implemented Access-Based Enumeration to hide folders from users who do not have access permissions, demonstrating how to reduce user confusion and minimize the attack surface by preventing unauthorized users from seeing restricted resources.

- **User and Group Setup:** Created departmental security groups (HR_Dept, IT-Dept) and test users (spiderman@labs.local, batman@labs.local) organized within appropriate Organizational Units.
- **Folder Structure and Permissions:** Created C:\DeptShares with HR and IT subfolders, configured NTFS permissions to grant Full Control to respective department groups only, and set Share permissions to allow Read access for both groups.
- **ABE Configuration:** Enabled Access-Based Enumeration on the DeptShares share via Server Manager → File and Storage Services → Shares → Properties → Settings.
- **Testing and Verification:** Validated that IT-Dept members (spiderman) can only see the IT folder, HR_Dept members (batman) can only see the HR folder, and both folders remain visible to administrators on the server.

**Skills:** Access-Based Enumeration configuration, visibility-based access control, departmental resource isolation, user experience optimization, Windows Server File Services.

**Screenshots:**

![Activity12_ABE_Configuration](Activity12_ABE/Screenshots/Activity12_ABE_Configuration.png)
![Activity12_Server_View_Both_Folders](Activity12_ABE/Screenshots/Activity12_Server_View_Both_Folders.png)
![Activity12_After_ABE_Spiderman](Activity12_ABE/Screenshots/Activity12_After_ABE_Spiderman.png)
![Activity12_After_ABE_Batman](Activity12_ABE/Screenshots/Activity12_After_ABE_Batman.png)

## Key Takeaways

- **Centralized Management:** Reduced configuration drift by managing settings and storage from a single DC.
- **Storage Governance:** Demonstrated the ability to protect server volume space using quotas and screening.
- **Troubleshooting:** Gained experience in diagnosing both GPO logic failures and Layer 3 networking issues (APIPA).
- **Security Mindset:** Applied the Principle of Least Privilege across both the filesystem and the OS UI.
- **Advanced Security Controls:** Implemented tiered password policies and granular access controls to enforce defense-in-depth security strategies.
- **Service Account Security:** Demonstrated proper service account lifecycle management, including creation, restriction, and operational deployment in specialized use cases.
- **NTFS Permission Mastery:** Developed deep understanding of permission inheritance, explicit deny precedence, effective permissions calculation, and the dual-layer permission model in complex file-sharing environments.
- **Access-Based Enumeration:** Implemented visibility-based access control to improve user experience and reduce reconnaissance opportunities for potential attackers.

## Future Enhancements

- PowerShell automation for bulk user/group creation.
- Implementation of Loopback Processing for specialized kiosk workstations.
- Setting up an SMTP Relay to test live FSRM email alerts.
- Deploy AppLocker or Windows Defender Application Control (WDAC) for application whitelisting on kiosk systems.
- Implement Dynamic Access Control (DAC) with claims-based permissions for attribute-based access.
- Configure File Classification Infrastructure (FCI) to automatically apply permissions based on file metadata.

---

**Author:** Nick Hugo  
Aspiring IT Support / Systems Administrator  
CompTIA A+ | CompTIA Security+
