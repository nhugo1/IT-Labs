Activity 7: File Services, GPO Automation, and Storage Governance
Objective

To provision a centralized network file share, automate resource deployment via Group Policy, and implement storage governance using File Server Resource Manager (FSRM) within an Active Directory environment.

Technical Tasks & Proficiency
1. Secure File Share Implementation

    Directory Provisioning: Created a centralized directory (C:\SHARED) on Windows Server 2022.

    Access Control: Implemented a dual-layer permission strategy to enforce the Principle of Least Privilege:

        Share Permissions: Everyone: Full Control.

        NTFS Permissions: Domain Users: Read-only.

        Outcome: Users can access resources over the network but are restricted from modifying or deleting existing data.

![Activity7_NTFS_Permissions.png]
2. Network Troubleshooting (Connectivity & DNS)

    Symptom: Client VM failed to reach the server due to an APIPA (169.254.x.x) addressing issue.

    Resolution: Transitioned the client from DHCP to a Static IPv4 configuration.

    DNS Alignment: Manually configured the Preferred DNS to point to the Domain Controller’s IP, resolving "Unidentified Network" errors and allowing domain resource discovery.

![Activity7_Client_IP_DNS.png]
3. Automation via Group Policy (GPO)

    Centralized Management: Created and linked a GPO titled "Mapped Drives" to the USA > Users Organizational Unit (OU).

    GPO Preferences: Configured a persistent drive map for the S: drive using User Configuration > Preferences.

    Deployment: Successfully forced policy application using gpupdate /force and verified deployment via gpresult /r.

![Activity7_GPO_Config.png] ![Activity7_GPResult_Check.png]
4. Storage Management with FSRM

    Quota Management: Deployed a directory quota on the shared folder with a Hard Limit and a 80% threshold alert to ensure proactive capacity management.

    File Screening: Developed a custom File Screen template ("SHARWEED") to restrict storage to authorized file types only (Text Files), preventing unauthorized data (Executables, Media) from consuming server resources.

![Activity7_FSRM_Quota.png] ![Activity7_FSRM_Screen.png]
Final Validation

The success of this activity was confirmed by the automatic appearance of the S: Drive in the Windows 11 File Explorer. The final environment ensures that users have immediate access to necessary files while the server remains protected by strict NTFS permissions and FSRM storage policies.

![Activity7_Final_Explorer.png]
