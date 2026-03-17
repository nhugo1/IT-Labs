# Active Directory & Group Policy Lab

A hands-on enterprise simulation built on a Windows Server 2022 Domain Controller with Windows 11 endpoints. Twelve activities covering identity management, policy enforcement, security hardening, storage governance, and permission models.

**Environment:** Windows Server 2022 (labs.local) · Windows 11 Enterprise · VirtualBox (Internal Network)  
**Tools:** ADUC, GPMC, FSRM, Sysinternals Autologon

---

## Activities

| # | Activity | Focus |
|---|---|---|
| [Activity 1](./Activity1_PasswordPolicy/) | Password Policy GPO | Security baselines, complexity enforcement |
| [Activity 2](./Activity2_DriveMapping/) | Drive Mapping GPO | Automated network drive mapping via GPP |
| [Activity 3](./Activity3_DesktopWallpaperPolicy/) | Desktop Wallpaper Policy | Administrative Templates, UX standardization |
| [Activity 4](./Activity4_ControlPanelRestricted/) | Restrict Control Panel Access | Endpoint hardening, system lockdown |
| [Activity 5](./Activity5_RemovableStoragePolicy/) | Disable USB Devices | Data loss prevention, hardware security |
| [Activity 6](./Activity6_GPOTesting/) | GPO Troubleshooting | MS16-072 resolution, GPMC delegation |
| [Activity 7](./Activity7_FileShare/) | File Services & FSRM | Storage quotas, file screening, SMB shares |
| [Activity 8](./Activity8_SecurityPolicies/) | Domain Hardening | FGPP, User Rights Assignment, account lockout |
| [Activity 9](./Activity9_ServiceAccounts/) | Service Accounts & Kiosk Mode | Service account provisioning, Autologon, least privilege |
| [Activity 10](./Activity10_Advanced_File_Permissions/) | Advanced File Permissions | Inheritance breaks, explicit deny precedence |
| [Activity 11](./Activity11_NTFS_vs_Share_Permissions/) | NTFS vs Share Permissions | Effective permissions, write-only drop boxes |
| [Activity 12](./Activity12_ABE/) | Access-Based Enumeration | Folder visibility control, departmental isolation |

---

[← Back to IT Portfolio](https://nhugo1.github.io/IT-Labs/)
