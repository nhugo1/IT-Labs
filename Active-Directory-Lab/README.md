# Active Directory & Group Policy Home Lab Overview

This lab simulates a small enterprise Active Directory environment using Windows Server 2022 and Windows 11 client virtual machines. The goal is to demonstrate foundational IT skills related to identity management, centralized policy enforcement, and security controls used in corporate environments.

All configurations were performed in an isolated virtual lab environment and documented to reflect real-world IT workflows and troubleshooting methodologies.

## Lab Environment

- **Domain Controller:** Windows Server 2022
- **Client OS:** Windows 11 Enterprise
- **Domain Name:** labs.local
- **Management Tools:** Active Directory Users and Computers (ADUC), Group Policy Management Console (GPMC), File Server Resource Manager (FSRM)
- **Virtualization:** VirtualBox (Internal Network)

## Completed Activities

### Activity 1 – Password Policy GPO

Configured a domain-linked Group Policy to enforce enterprise password standards:

- Enforced minimum password length and complexity requirements.
- Configured maximum password age to ensure regular credential rotation.

**Skills:** Security baseline enforcement, Account Policy configuration.

**Screenshots:** Activity1_MinLength.png, Activity1_Complexity.png, Activity1_MaxAge.png

### Activity 2 – Drive Mapping GPO (Basic)

Created a user-based GPO to automatically map network drives via Group Policy Preferences (GPP):

- Configured network paths and assigned persistent drive letters.
- Targeted specific User OUs for department-specific access.

**Skills:** Group Policy Preferences, network resource mapping.

### Activity 3 – Desktop Wallpaper Policy

Standardized the user desktop environment to reflect corporate branding:

- Utilized Administrative Templates to enforce a specific wallpaper image and display style.

**Skills:** Administrative Templates, User Experience (UX) standardization.

### Activity 4 – Restrict Control Panel Access

Implemented a security lockdown GPO to prohibit unauthorized system changes:

- Enabled "Prohibit access to Control Panel and PC settings" for non-administrative users.

**Skills:** Desktop lockdown, risk reduction.

### Activity 5 – Disable USB Devices

Hardened workstation security by restricting unauthorized hardware:

- Disabled Read/Write access to removable storage devices via Computer Configuration.

**Skills:** Data Loss Prevention (DLP), hardware security enforcement.

### Activity 6 – GPO Troubleshooting & Testing

Resolved a critical "silent failure" regarding Security Filtering and Computer Objects:

- **Diagnosis:** Identified that Computer Objects required "Read" access (MS16-072) to process policies.
- **Resolution:** Modified Delegation to grant Authenticated Users "Read" permissions while restricting "Apply Group Policy" to the target group.

**Skills:** Advanced GPMC delegation, troubleshooting policy inheritance.

### Activity 7 – File Services, Storage Governance & FSRM

Implemented a secure, managed file-sharing environment with automated mapping and storage controls.

- **Security & Permissions:** Configured a "Least Privilege" model using Share Permissions (Full Control) and NTFS Permissions (Read-Only) for Domain Users.
- **Network Troubleshooting:** Resolved an APIPA (169.254.x.x) connectivity issue by manually configuring IPv4 static addressing and DNS pointing to the DC.
- **GPO Automation:** Deployed the S: Drive automatically to the USA > Users OU using Group Policy Preferences.
- **FSRM Implementation:** Deployed File Server Resource Manager to enforce storage quotas (80% threshold alerts) and active file screening (blocking unauthorized file types via the "SHARWEED" template).

**Skills:** FSRM, NTFS/Share Permissions, Network Troubleshooting, GPO Automation.

**Screenshots:** Activity7_NTFS_Permissions.png, Activity7_Client_IP_DNS.png, Activity7_GPO_Config.png, Activity7_GPResult_Check.png, Activity7_FSRM_Quota.png, Activity7_FSRM_Screen.png, Activity7_Final_Explorer.png

### Activity 8 – Domain Hardening and Advanced Security Policies

Implemented a multi-layered security posture within the LABS.local domain by enforcing strict password requirements, account lockout protections, and granular user rights assignments.

- **Password and Account Lockout Policies:** Configured the Default Domain Policy to enforce a 12-character minimum password length and password complexity requirements. Implemented a 3-strike account lockout threshold to prevent brute-force attacks.
- **Fine-Grained Password Policies (FGPP):** Created an advanced Password Settings Object (PSO) named "AdminPasswordPolicy" with a 15-character minimum length and Precedence 1, assigned to the "#IT-Admins" group to ensure high-privilege accounts meet elevated security standards.
- **User Rights Assignment (Access Control):** Created a "User Rights" GPO to deny local logon to the "Restricted_Users" group and restricted Remote Desktop Access to authorized IT personnel only.
- **Troubleshooting:** Diagnosed a GPO propagation issue using `gpresult /r` and resolved by linking the GPO to the Domain Root to ensure consistent policy application regardless of Organizational Unit (OU) placement.

**Skills:** Fine-Grained Password Policies, User Rights Assignment, Account Lockout Configuration, GPO propagation troubleshooting, Defense-in-depth security.

**Screenshots:** Activity8_Account_Lockout_Policy.png, Activity8_Complexity_Error.png, Activity8_Local_Logon_Denied.png, Activity8_Lockout_Error.png, Activity8_Password_Policy.png, Activity8_User_Rights_Assignment.png, Activity8_RDP_Denial_Success.png, Activity8_FGPP_Admin_Policy.png

### Activity 9 – Service Accounts and Kiosk Mode Configuration

Implemented a single-purpose kiosk workstation using a dedicated service account with automated login, restricted access rights, and browser auto-launch functionality.

- **Service Account Creation:** Created a "Service Accounts" OU within Active Directory and provisioned a service account (`$Website-login@labs.local`) following naming conventions for non-human identities.
- **Automated Login:** Configured Sysinternals Autologon to automatically authenticate the service account upon system boot, eliminating manual login requirements for the kiosk workstation.
- **Browser Auto-Launch and Kiosk Mode:** Placed a Chrome shortcut in the Startup folder and configured launch parameters (`-start-fullscreen`) to automatically open a specific webpage in fullscreen mode upon login.
- **Power Management:** Disabled display and system sleep settings to ensure continuous operation for 24/7 kiosk deployments.
- **Access Control Hardening:** Implemented User Rights Assignment policies to deny local logon and Remote Desktop access for the service account on other domain systems, restricting its use to the designated kiosk workstation only.

**Skills:** Service account provisioning, automated authentication, application auto-start configuration, User Rights Assignment, least privilege access control, kiosk deployment best practices.

**Screenshots:** Activity9_AD_ServiceAccount.png, Activity9_Autologon_Configuration.png, Activity9_Startup_Folder.png, Activity9_Chrome_Shortcut_Properties.png, Activity9_User_Rights_Assignment.png

### Activity 10 – Advanced Windows File Sharing, Effective Permissions, and Inheritance

Implemented advanced NTFS permission strategies in real-world workplace scenarios, including selective inheritance control, explicit deny permissions, and least privilege access models.

- **Folder Structure and Share Configuration:** Created a hierarchical folder structure (C:\Common with Project and Events subfolders) and configured dual-layer permissions (Share + NTFS) to establish baseline access control.
- **Permission Inheritance and Selective Access Control:** Broke inheritance on the Project folder, removed overly permissive access (Everyone = Full Control), and granted targeted access to the Project security group. Created a Contracts subfolder to verify permission propagation from parent to child.
- **Explicit Deny Permissions:** Configured a scenario where user "John" was explicitly denied access to a Confidential subfolder while maintaining broader group-based access for other employees, demonstrating that Deny permissions always take precedence over Allow permissions.

**Skills:** Breaking and managing NTFS inheritance, explicit Deny configuration, permission precedence understanding, dual-layer permission model (Share vs. NTFS), security group-based permissions, least privilege access control.

**Screenshots:** Activity10_Break_Inheritance.png, Activity10_Project_Folder_Permissions.png, Activity10_Confidential_Deny_Permissions.png

## Key Takeaways

- **Centralized Management:** Reduced configuration drift by managing settings and storage from a single DC.
- **Storage Governance:** Demonstrated the ability to protect server volume space using quotas and screening.
- **Troubleshooting:** Gained experience in diagnosing both GPO logic failures and Layer 3 networking issues (APIPA).
- **Security Mindset:** Applied the Principle of Least Privilege across both the filesystem and the OS UI.
- **Advanced Security Controls:** Implemented tiered password policies and granular access controls to enforce defense-in-depth security strategies.
- **Service Account Security:** Demonstrated proper service account lifecycle management, including creation, restriction, and operational deployment in specialized use cases.
- **NTFS Permission Mastery:** Developed deep understanding of permission inheritance, explicit deny precedence, and effective permissions calculation in complex file-sharing environments.

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
