Active Directory & Group Policy Home Lab
Overview

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

Activity 3 – Desktop Wallpaper Policy

Standardized the user desktop environment to reflect corporate branding:

    Utilized Administrative Templates to enforce a specific wallpaper image and display style.

    Skills: Administrative Templates, User Experience (UX) standardization.

Activity 4 – Restrict Control Panel Access

Implemented a security lockdown GPO to prohibit unauthorized system changes:

    Enabled "Prohibit access to Control Panel and PC settings" for non-administrative users.

    Skills: Desktop lockdown, risk reduction.

Activity 5 – Disable USB Devices

Hardened workstation security by restricting unauthorized hardware:

    Disabled Read/Write access to removable storage devices via Computer Configuration.

    Skills: Data Loss Prevention (DLP), hardware security enforcement.

Activity 6 – GPO Troubleshooting & Testing

Resolved a critical "silent failure" regarding Security Filtering and Computer Objects:

    Diagnosis: Identified that Computer Objects required "Read" access (MS16-072) to process policies.

    Resolution: Modified Delegation to grant Authenticated Users "Read" permissions while restricting "Apply Group Policy" to the target group.

    Skills: Advanced GPMC delegation, troubleshooting policy inheritance.

Activity 7 – File Services, Storage Governance & FSRM

Implemented a secure, managed file-sharing environment with automated mapping and storage controls.

    Security & Permissions: Configured a "Least Privilege" model using Share Permissions (Full Control) and NTFS Permissions (Read-Only) for Domain Users.

    Network Troubleshooting: Resolved an APIPA (169.254.x.x) connectivity issue by manually configuring IPv4 static addressing and DNS pointing to the DC.

    GPO Automation: Deployed the S: Drive automatically to the USA > Users OU using Group Policy Preferences.

    FSRM Implementation: Deployed File Server Resource Manager to enforce storage quotas (80% threshold alerts) and active file screening (blocking unauthorized file types via the "SHARWEED" template).

    Skills: FSRM, NTFS/Share Permissions, Network Troubleshooting, GPO Automation.

    Screenshots: Activity7_NTFS_Permissions.png, Activity7_Client_IP_DNS.png, Activity7_GPO_Config.png, Activity7_GPResult_Check.png, Activity7_FSRM_Quota.png, Activity7_FSRM_Screen.png, Activity7_Final_Explorer.png

Key Takeaways

    Centralized Management: Reduced configuration drift by managing settings and storage from a single DC.

    Storage Governance: Demonstrated the ability to protect server volume space using quotas and screening.

    Troubleshooting: Gained experience in diagnosing both GPO logic failures and Layer 3 networking issues (APIPA).

    Security Mindset: Applied the Principle of Least Privilege across both the filesystem and the OS UI.

Future Enhancements

    PowerShell automation for bulk user/group creation.

    Implementation of Loopback Processing for specialized kiosk workstations.

    Setting up an SMTP Relay to test live FSRM email alerts.

Author: Nick Hugo

Aspiring IT Support / Systems Administrator CompTIA A+ | CompTIA Security+
