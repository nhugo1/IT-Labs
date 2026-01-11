# Active Directory & Group Policy Home Lab

## Overview
This lab simulates a small enterprise Active Directory environment using **Windows Server 2022** and **Windows 10/11** client virtual machines. The goal is to demonstrate foundational IT skills related to identity management, centralized policy enforcement, and security controls used in corporate environments.

All configurations were performed in an isolated virtual lab environment and documented to reflect real-world IT workflows and troubleshooting methodologies.

## Lab Environment
* **Domain Controller:** Windows Server 2022
* **Client OS:** Windows 10 Enterprise
* **Domain Name:** `labs.local`
* **Management Tools:** Active Directory Users and Computers (ADUC), Group Policy Management Console (GPMC)
* **Virtualization:** VirtualBox (Internal Network)

---

## Completed Activities

### Activity 1 – Password Policy GPO
Configured a domain-linked Group Policy to enforce enterprise password standards:
* Enforced minimum password length and complexity requirements.
* Configured maximum password age to ensure regular credential rotation.
* **Skills:** Security baseline enforcement, Account Policy configuration.
* **Screenshots:** `Activity1_MinLength.png`, `Activity1_Complexity.png`, `Activity1_MaxAge.png`

### Activity 2 – Drive Mapping GPO
Created a user-based GPO to automatically map network drives via Group Policy Preferences (GPP):
* Configured network paths and assigned persistent drive letters.
* Targeted specific User OUs for department-specific access.
* **Skills:** Group Policy Preferences, network resource mapping, OU-level targeting.
* **Screenshots:** `Activity2_DriveSettings.png`, `Activity2_DriveMapList.png`

### Activity 3 – Desktop Wallpaper Policy
Standardized the user desktop environment to reflect corporate branding:
* Utilized Administrative Templates to enforce a specific wallpaper image and display style.
* **Skills:** Administrative Templates, User Experience (UX) standardization.
* **Screenshots:** `Activity3_WallpaperSettings.png`, `Activity3_ClientWallpaper.png`

### Activity 4 – Restrict Control Panel Access
Implemented a security lockdown GPO to prohibit unauthorized system changes:
* Enabled "Prohibit access to Control Panel and PC settings" for non-administrative users.
* **Skills:** Desktop lockdown, risk reduction, User Configuration policies.
* **Screenshots:** `Activity4_ControlPanelSettings.png`

### Activity 5 – Disable USB Devices
Hardened workstation security by restricting unauthorized hardware:
* Disabled Read/Write access to removable storage devices via Computer Configuration.
* **Skills:** Data Loss Prevention (DLP), hardware security enforcement.
* **Screenshots:** `Activity5_USBRestrictions.png`

### Activity 6 – GPO Troubleshooting & Testing
Tested GPO application on a client VM and resolved a critical "silent failure" regarding Security Filtering:
* **Issue:** The "Restrict Control Panel" GPO failed to apply when `Authenticated Users` were removed from Security Filtering.
* **Diagnosis:** Identified that the Computer Object required "Read" access (MS16-072) to process the policy.
* **Resolution:** Modified Delegation to grant `Authenticated Users` "Read" permissions while restricting "Apply Group Policy" to the `Restricted_Users` group.
* **Verification:** Confirmed policy enforcement using `gpresult /r` and client-side testing.
* **Screenshots:** `Activity6_GPMC_Overview.png`, `Activity6_SecurityFiltering.png`, `Activity6_GPResult.png`

---

## Key Takeaways
* **Centralized Management:** Reduced configuration drift by managing settings from a single DC.
* **Scalability:** Demonstrated the ability to control thousands of objects via granular OU structures.
* **Troubleshooting:** Gained experience in diagnosing GPO "silent failures" using delegation and inheritance analysis.

---
**Author:** Nick Hugo  

*Aspiring IT Support / Systems Administrator* *CompTIA A+ | CompTIA Security+*
