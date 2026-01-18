Active Directory & Group Policy Home Lab Overview

This lab simulates a small enterprise Active Directory environment using Windows Server 2022 and Windows 11 client virtual machines. The goal is to demonstrate foundational IT skills related to identity management, centralized policy enforcement, and security controls used in corporate environments.

All configurations were performed in an isolated virtual lab environment and documented to reflect real-world IT workflows and troubleshooting methodologies.
Lab Environment

    Domain Controller: Windows Server 2022

    Client OS: Windows 11 Enterprise

    Domain Name: labs.local

    Management Tools: Active Directory Users and Computers (ADUC), Group Policy Management Console (GPMC), File Server Resource Manager (FSRM)

    Virtualization: VirtualBox (Internal Network)

Completed Activities
Activity 1 – Password Policy GPO

Configured a domain-linked Group Policy to enforce enterprise password standards:

    Enforced minimum password length and complexity requirements.

    Configured maximum password age to ensure regular credential rotation.

Skills: Security baseline enforcement, Account Policy configuration.

Screenshots: Activity1_MinLength.png, Activity1_Complexity.png, Activity1_MaxAge.png
Activity 2 – Drive Mapping GPO (Basic)

Created a user-based GPO to automatically map network drives via Group Policy Preferences (GPP):

    Configured network paths and assigned persistent drive letters.

    Targeted specific User OUs for department-specific access.

Skills: Group Policy Preferences, network resource mapping.

Screenshots: Activity2_MappedDriveSettings.png, Activity2_DriveMapsList.png
Activity 3 – Desktop Wallpaper Policy

Standardized the user desktop environment to reflect corporate branding:

    Utilized Administrative Templates to enforce a specific wallpaper image and display style.

Skills: Administrative Templates, User Experience (UX) standardization.

Screenshots: Activity3_WallpaperSettings.png, Activity3_WallpaperEnabled.png
Activity 4 – Restrict Control Panel Access

Implemented a security lockdown GPO to prohibit unauthorized system changes:

    Enabled "Prohibit access to Control Panel and PC settings" for non-administrative users.

Skills: Desktop lockdown, risk reduction.

Screenshots: Activity4_ControlPanelRestricted.png
Activity 5 – Disable USB Devices

Hardened workstation security by restricting unauthorized hardware:

    Disabled Read/Write access to removable storage devices via Computer Configuration.

Skills: Data Loss Prevention (DLP), hardware security enforcement.

Screenshots: Activity5_DisableUSBDevices.png
Activity 6 – GPO Troubleshooting & Testing

Resolved a critical "silent failure" regarding Security Filtering and Computer Objects:

    Diagnosis: Identified that Computer Objects required "Read" access (MS16-072) to process policies.

    Resolution: Modified Delegation to grant Authenticated Users "Read" permissions while restricting "Apply Group Policy" to the target group.

Skills: Advanced GPMC delegation, troubleshooting policy inheritance.

Screenshots: Activity6_GPO_Linked_OUs.png, Activity6_DelegationTab.png, Activity6_Client1_in_USA_OU.png, Activity6_DomainJoinConfirmation.png
Activity 7 – File Services, Storage Governance & FSRM

Implemented a secure, managed file-sharing environment with automated mapping and storage controls.

    Security & Permissions: Configured a "Least Privilege" model using Share Permissions (Full Control) and NTFS Permissions (Read-Only) for Domain Users.

    Network Troubleshooting: Resolved connectivity issues by manually configuring IPv4 static addressing and DNS.

    FSRM Implementation: Deployed FSRM to enforce storage quotas and active file screening.

Skills: FSRM, NTFS/Share Permissions, Network Troubleshooting, GPO Automation.

Screenshots: Activity7_NTFS_Permissions.png, Activity7_IP_DNS_Config.png, Activity7_GPO_Mapping_Config.png, Activity7_FSRM_Quota_Overview.png, Activity7_FSRM_Screen_Validation.png, Activity7_Mapped_Drive_Success.png
Activity 8 – Domain Hardening and Advanced Security Policies

Implemented a multi-layered security posture within the LABS.local domain.

    FGPP: Created a Password Settings Object (PSO) for the "#IT-Admins" group.

    User Rights: Created a "User Rights" GPO to deny local logon to restricted users.

Skills: Fine-Grained Password Policies, User Rights Assignment, Account Lockout.

Screenshots: Activity8_Account_Lockout_Policy.png, Activity8_Complexity_Error.png, Activity8_Local_Logon_Denied.png, Activity8_Lockout_Error.png, Activity8_Password_Policy.png, Activity8_User_Rights_Assignment.png, Activity8_RDP_Denial_Success.png, Activity8_FGPP_Admin_Policy.png
Activity 9 – Service Accounts and Kiosk Mode Configuration

Implemented a single-purpose kiosk workstation using a dedicated service account.

Skills: Service account provisioning, Autologon, kiosk deployment.

Screenshots: Activity9_AD_ServiceAccount.png, Activity9_Autologon_Configuration.png, Activity9_Startup_Folder.png, Activity9_Chrome_Shortcut_Properties.png, Activity9_User_Rights_Assignment.png
Activity 10 – Advanced Windows File Sharing, Effective Permissions, and Inheritance

Implemented advanced NTFS permission strategies including selective inheritance control and explicit deny.

Skills: Breaking inheritance, Explicit Deny, Least Privilege.

Screenshots: Activity10_Break_Inheritance.png, Activity10_Project_Folder_Permissions.png, Activity10_Confidential_Deny_Permissions.png
Activity 11 – NTFS vs Share Permissions

Demonstrated mastery of the dual-layer Windows permission model via four real-world scenarios.

Skills: Effective permissions, Write-Only access, folder isolation.

Screenshots: Activity11_Marketing_NTFS_Permissions.png, Activity11_HR_Share_Permissions.png, Activity11_HR_NTFS_Permissions.png, Activity11_Vendor_NTFS_Permissions.png, Activity11_Licenses_Inheritance_Broken.png
Key Takeaways

    Centralized Management: Reduced configuration drift via GPMC.

    Storage Governance: Protected volume space using FSRM.

    Security Mindset: Applied Least Privilege across the filesystem and UI.

Author: Nick Hugo

Aspiring IT Support / Systems Administrator

CompTIA A+ | CompTIA Security+
