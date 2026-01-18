# Activity 7: File Services, GPO Automation, and Storage Governance

## Objective
To provision a centralized network file share, automate resource deployment via Group Policy Preferences (GPP), and implement enterprise storage governance using File Server Resource Manager (FSRM) within the `labs.local` Active Directory environment.

---

## Technical Tasks & Proficiency

### 1. Secure File Share Implementation
* **Directory Provisioning:** Established a centralized storage root (`C:\SHARED`) on the Windows Server 2022 instance.
* **Access Control:** Implemented a dual-layer permission strategy (Share vs NTFS) to enforce the Principle of Least Privilege.

**Evidence:**
![NTFS Permissions](Activity7_FileShare/Screenshots/Activity7_NTFS_Permissions.png)

### 2. Network Troubleshooting (Connectivity & DNS)
* **Incident:** Resolved an **APIPA (169.254.x.x)** addressing issue on the Client VM.
* **Resolution:** Configured a Static IPv4 and aligned the Preferred DNS to the Domain Controller’s IP.

**Evidence:**
![Client IP and DNS Configuration](Activity7_FileShare/Screenshots/Activity7_IP_DNS_Config.png)

### 3. Automation via Group Policy (GPO)
* **Centralized Management:** Linked a **"Mapped Drives"** GPO to the target OU.
* **Deployment:** Leveraged GPP to map the **S: Drive** persistently.

**Evidence:**
![GPO Link Status](Activity7_FileShare/Screenshots/Activity7_GPO_Link.png)
![GPO Mapping Configuration](Activity7_FileShare/Screenshots/Activity7_GPO_Mapping_Config.png)

### 4. Storage Management with FSRM
* **Quota Management:** Deployed a directory quota on the **SHARED** folder with a Hard Limit.
* **File Screening:** Configured a file screen to restrict storage to authorized file types, preventing server resource bloat.

**Evidence:**
![FSRM Quota Configuration](Activity7_FileShare/Screenshots/Activity7_FSRM_Quota_Config.png)
![FSRM Quota Overview](Activity7_FileShare/Screenshots/Activity7_FSRM_Quota_Overview.png)
![FSRM Screen Configuration](Activity7_FileShare/Screenshots/Activity7_FSRM_Screen_Config.png)
![FSRM Screen Validation](Activity7_FileShare/Screenshots/Activity7_FSRM_Screen_Validation.png)

---

## Final Validation
The successful implementation was verified by the automated appearance of the **S: Drive** in the Windows 11 File Explorer.

**Evidence:**
![Mapped Drive Success](Activity7_FileShare/Screenshots/Activity7_Mapped_Drive_Success.png)
![Final Explorer View](Activity7_FileShare/Screenshots/Activity7_Mapped_Drive_Explorer.png)
