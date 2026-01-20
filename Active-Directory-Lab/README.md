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

## Key Takeaways
* Centralized Management: Mastery of GPMC to eliminate configuration drift.
* Least Privilege: Applied strictly across the filesystem and user interface.
* Operational Continuity: Configured high-availability kiosk roles and persistent network resources.

---

**Author:** Nick Hugo  
*Aspiring IT Support / Systems Administrator* **Certifications:** CompTIA A+ | CompTIA Security+

