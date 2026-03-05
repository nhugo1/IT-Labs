# IT Infrastructure & Security Portfolio

Welcome to my technical documentation repository. This site serves as a portfolio of hands-on labs focused on enterprise system administration, identity management, network security hardening, and technical support operations.

---

## Helpdesk & Troubleshooting Lab Series

**[View Full Project Documentation](Helpdesk-Troubleshooting-Labs/)**

A comprehensive series of simulated IT support scenarios demonstrating ticket management, systematic troubleshooting, and technical problem-solving across various priority levels and complexity tiers.

### Featured Activities:

**Activity 1: Password Lockout Resolution**  
Standard incident management integrating **Jira Service Management** with **Active Directory**. Demonstrates the full lifecycle of an IT incident, from ticket ingestion and user verification to technical resolution and documentation.

**Activity 2: Multi-Ticket Priority Management**  
Realistic helpdesk simulation handling three concurrent tickets (Critical, Medium, Low priority) requiring triage, systematic prioritization, and resolution based on business impact. Demonstrates ability to manage competing priorities while maintaining professional user communication.

**Activity 3: USB WiFi Adapter Root Cause Analysis**  
Real production issue showcasing advanced diagnostic methodology using **Event Viewer forensics** to identify driver module crashes. Demonstrates root cause analysis versus symptom treatment, hardware lifecycle assessment, and honest documentation of technical limitations when manufacturer support is unavailable.

**Activity 4: Capacity Analysis & Hardware Lifecycle Recommendation**  
Performance degradation investigation using **Resource Monitor** and **Task Manager** to identify hardware resource exhaustion. Demonstrates capacity planning, baseline load testing, and business-focused escalation with procurement recommendations based on quantifiable technical evidence.

### Technical Skills Demonstrated:

| Category | Competencies |
| :--- | :--- |
| **ITSM Operations** | Incident Management, Ticket Lifecycle (Jira), Priority Assignment & Triage, Service Level Agreements (SLA) |
| **Identity Management** | Active Directory Account Unlocks, Secure Password Resets, Forced Password Changes |
| **System Diagnostics** | Device Manager, Event Viewer Forensics, Driver Troubleshooting, Root Cause Analysis (RCA), Resource Monitor, Task Manager Performance Analysis |
| **Hardware Analysis** | Memory Saturation Identification, Disk I/O Bottleneck Analysis, Pagefile Thrashing Detection, USB Power Management, Driver Version Assessment, Hardware Lifecycle Planning |
| **Network Troubleshooting** | Connectivity Diagnostics (ping, ipconfig), Windows Firewall Configuration, Network Discovery, Airplane Mode Issues |
| **File Sharing** | Workgroup Configuration, SMB Shares, Share & NTFS Permissions, Mapped Network Drives |
| **Email Support** | Outlook/Exchange Connectivity, Autodiscover Failure Diagnosis, Profile Rebuild, DNS Record Verification |
| **Security Protocols** | Multi-factor User Identity Verification, Defense-in-Depth (Dual Permission Layers), Network Profile Configuration (Private vs Public) |
| **Documentation** | Detailed Technical Resolution Notes, Troubleshooting Methodology Documentation, User Education Materials, Business Impact Assessment |
| **Time Management** | Concurrent Ticket Handling, Business Impact Assessment, Workaround Identification |
| **Business Acumen** | Cross-departmental Escalation (Procurement), Hardware Replacement vs. Upgrade Analysis, Cost-Benefit Evaluation |

**Technologies Used:** Jira Service Management, Active Directory (ADUC), Windows Server 2022, Windows 10/11 Enterprise, Microsoft Outlook, Windows Defender Firewall, Event Viewer, Device Manager, Resource Monitor, Task Manager.

---

## Active Directory & Group Policy Lab

**[View Full Project Documentation](Active-Directory-Lab/)**

A comprehensive enterprise simulation featuring a Windows Server 2022 Domain Controller and Windows 11 endpoints. This lab documents 12 high-impact activities designed to mirror real-world sysadmin tasks and security requirements.

### Technical Skills Demonstrated:

| Category | Competencies |
| :--- | :--- |
| **Identity & Access** | Active Directory (ADUC), Service Accounts, Fine-Grained Password Policies (FGPP), Access-Based Enumeration (ABE) |
| **Policy Enforcement** | Group Policy (GPMC), Administrative Templates, GPP Drive Mapping |
| **Security Hardening** | USB/Removable Storage Lockdown, User Rights Assignment, Account Lockout |
| **Data Governance** | NTFS & Share Permissions (Effective Access), Inheritance Control, FSRM Quotas, Dual-Layer Permission Model |
| **Troubleshooting** | GPO Delegation (MS16-072), DNS/IPv4 configuration, Policy Result (gpresult) |

**Technologies Used:** Windows Server 2022, Active Directory, Group Policy, FSRM

---

## Network+ Lab Series

**[View Full Project Documentation](Networking-Labs/)**

A hands-on lab series targeting CompTIA Network+ (N10-009) exam objectives through practical configuration, verification, and documentation. Labs span all five exam domains with emphasis on network implementation, security, and troubleshooting.

### Featured Activities:

**Activity 1: VLAN Segmentation & Inter-VLAN Routing**  
Three-VLAN enterprise network built in **Cisco Packet Tracer** using a Cisco 2960 switch and 2911 router. Demonstrates IEEE 802.1Q trunking, access port assignment, and router-on-a-stick inter-VLAN routing with full connectivity verification using ping and show commands.

**Activity 2: Remote Access VPN with Windows RRAS**  
End-to-end remote access VPN implementation using **Windows Server 2022 RRAS** as the L2TP/IPSec server and the Windows 11 built-in VPN client. Demonstrates IP address pool configuration, pre-shared key authentication, Active Directory dial-in permissions, and tunnel verification via RRAS console and ipconfig.

### Technical Skills Demonstrated:

| Category | Competencies |
| :--- | :--- |
| **Network Segmentation** | VLAN design, IEEE 802.1Q tagging, trunk vs. access ports, inter-VLAN routing |
| **Routing & Switching** | Router-on-a-stick, subinterface configuration, static routing, show ip route verification |
| **VPN & Remote Access** | L2TP/IPSec tunnel configuration, RRAS role setup, IP address pool management, PSK authentication |
| **Network Security** | Firewall rule verification, VPN authentication stack (IPSec PSK + MS-CHAPv2), AD dial-in permissions |
| **Verification & Diagnostics** | ping, traceroute, ipconfig /all, show vlan brief, show ip interface brief, show ip route |
| **Documentation** | Network topology diagrams, CLI command reference, phase-based lab documentation |

**Technologies Used:** Cisco Packet Tracer, Windows Server 2022 (RRAS), Windows 11, Active Directory, L2TP/IPSec, IEEE 802.1Q.

---

## Microsoft 365 Administration Lab Series

**[View Full Project Documentation](Microsoft-365/)**

A hands-on lab series covering Microsoft 365 administration in a live tenant environment. Each activity simulates a real-world IT scenario commonly encountered in helpdesk, sysadmin, and cloud admin roles at SMB and mid-market companies. Labs span user lifecycle management, email administration, endpoint management, security, SharePoint, and PowerShell automation.

### Featured Activities:

**Activity 1: New User Onboarding**  
End-to-end user provisioning in the **Microsoft 365 Admin Center**. Demonstrates license assignment, profile metadata configuration, least privilege role assignment, and first-login verification from both the admin and end-user perspective.

**Activity 2: Password Reset, Account Unlock & Per-User MFA**  
Simulated helpdesk scenario handling a user sign-in failure and a company-wide MFA rollout. Demonstrates secure password reset procedures, account lockout behavior in cloud-only vs. hybrid Entra ID environments, and the distinction between MFA **Enabled** and **Enforced** states and their effect on the end-user sign-in experience.

**Activity 3: Security Groups & Group-Based License Assignment**  
Security group creation and membership management in **Microsoft Entra ID**. Demonstrates the difference between security groups and Microsoft 365 Groups, department-based group structure design, and the group-based licensing workflow — including identification of the **Entra ID P1** licensing requirement encountered in a trial tenant environment.

### Technical Skills Demonstrated:

| Category | Competencies |
| :--- | :--- |
| **Identity & User Management** | User Provisioning, License Assignment, Usage Location, Profile Metadata, Least Privilege, Password Reset, Account Lockout, Security Groups, Group-Based Licensing, User Offboarding |
| **Conditional Access & MFA** | Per-User MFA (Enabled vs. Enforced), MFA Registration Flow, Security Defaults, Conditional Access Policies, Break-Glass Accounts |
| **Exchange & Email** | Shared Mailboxes, Distribution Lists, Email Aliases, Out-of-Office, Message Trace |
| **Endpoint Management** | Intune Enrollment, Device Compliance Policies, App Deployment |
| **Security & Compliance** | Data Loss Prevention (DLP), Secure Score, Attack Simulator |
| **SharePoint & Collaboration** | Site Creation, Permission Management, Guest Access, Teams Integration |
| **PowerShell & Automation** | Microsoft Graph, M365 PowerShell Modules, User Reporting, Bulk Operations |

**Technologies Used:** Microsoft 365 Admin Center, Microsoft Entra ID, Microsoft Intune, Exchange Admin Center, SharePoint Admin Center, Microsoft Defender, PowerShell.
