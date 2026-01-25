# Activity 12 – Access-Based Enumeration (ABE)

## Objective

To implement Access-Based Enumeration (ABE) on a Windows file share, demonstrating how to hide folders from users who do not have access permissions. This activity reinforces the principle that security through obscurity, when combined with proper access controls, reduces user confusion and minimizes the attack surface by preventing unauthorized users from even seeing restricted resources.

## Lab Environment

- **Domain Controller:** Windows Server 2022 (labs.local)
- **Client Workstation:** Windows 11 Enterprise
- **Active Directory Groups:** HR_Dept, IT-Dept
- **Test Users:** spiderman@labs.local (IT-Dept), batman@labs.local (HR_Dept)
- **Tools Used:** Server Manager, File and Storage Services, Active Directory Users and Computers (ADUC)

## Core Concepts

### What is Access-Based Enumeration (ABE)?

Access-Based Enumeration is a feature in Windows Server that filters the contents of shared folders based on individual user permissions. When enabled, users can only see files and folders to which they have access—resources they cannot access are completely hidden from view.

### Why Use ABE?

- **Reduces User Confusion:** Users don't see folders they can't access, eliminating unnecessary "Access Denied" errors.
- **Improves Security Posture:** Prevents unauthorized users from discovering the existence of sensitive folders, reducing reconnaissance opportunities for potential attackers.
- **Supports Compliance:** Helps meet regulatory requirements by limiting visibility of confidential data to authorized personnel only.
- **Simplifies File Server Navigation:** Users see only relevant departmental resources, improving the user experience.

### ABE vs. Traditional NTFS Permissions

- **Without ABE:** Users can see all folders in a share but receive "Access Denied" when attempting to open folders they lack permissions for.
- **With ABE:** Users only see folders they have at least Read permissions to—restricted folders are invisible.

**Important:** ABE is a visibility control, not an access control. Proper NTFS and Share permissions are still required to enforce actual security.

## Tasks Performed

### Step 1: User and Group Setup

Created departmental security groups and user accounts within Active Directory to simulate a multi-department organization.

- **HR Department:**
  - Created security group: `HR_Dept` in the HR Organizational Unit (OU)
  - Created user: `batman@labs.local` in the HR OU
  - Added batman to the HR_Dept group

- **IT Department:**
  - Created security group: `IT-Dept` in the IT Organizational Unit (OU)
  - Created user: `spiderman@labs.local` in the IT OU
  - Added spiderman to the IT-Dept group

**Skills:** Active Directory group management, user provisioning, OU-based organization.

### Step 2: Shared Folder Structure

Created a hierarchical folder structure to simulate departmental file storage.

- **Parent Folder:** `C:\DeptShares`
  - **Subfolders:**
    - `HR` (for HR Department files)
    - `IT` (for IT Department files)

**Skills:** File system organization, departmental resource planning.

### Step 3: NTFS Permissions Configuration

Configured granular NTFS permissions to enforce least privilege access at the folder level.

- **HR Folder (`C:\DeptShares\HR`):**
  - Disabled inheritance
  - Converted inherited permissions to explicit permissions
  - Removed `LABS\Users` group
  - Added `HR_Dept` group with Full Control

- **IT Folder (`C:\DeptShares\IT`):**
  - Disabled inheritance
  - Converted inherited permissions to explicit permissions
  - Removed `LABS\Users` group
  - Added `IT-Dept` group with Full Control

**Result:** Only HR_Dept members can access the HR folder, and only IT-Dept members can access the IT folder.

**Skills:** NTFS permission management, inheritance control, least privilege enforcement.

### Step 4: Share Permissions Configuration

Configured share-level permissions for the parent folder to control network access.

- **Share Name:** `DeptShares`
- **Share Path:** `C:\DeptShares`
- **Share Permissions:**
  - Removed `Everyone` group
  - Added `HR_Dept` with Read permissions
  - Added `IT-Dept` with Read permissions

**Result:** Only members of HR_Dept and IT-Dept can access the share over the network. The most restrictive permission between Share and NTFS determines effective access (in this case, NTFS permissions provide the actual folder-level security).

**Skills:** Share permission configuration, dual-layer permission model (Share + NTFS).

### Step 5: Enable Access-Based Enumeration

Enabled ABE on the DeptShares share to hide folders from users without access permissions.

**Configuration Steps:**
1. Opened **Server Manager** on the Domain Controller
2. Navigated to **File and Storage Services** → **Shares**
3. Right-clicked **DeptShares** → **Properties**
4. Selected the **Settings** tab
5. Checked **"Enable access-based enumeration"**
6. Clicked **OK** to apply

**Result:** Users can now only see folders within DeptShares to which they have NTFS permissions.

**Skills:** Windows Server File Services configuration, ABE implementation.

### Step 6: Testing and Verification

Logged in as departmental users to verify that ABE correctly filters folder visibility based on group membership and NTFS permissions.

**Test 1: Spiderman (IT-Dept Member)**
- Logged into Windows 11 client as `spiderman@labs.local`
- Accessed `\\SERVERNAME\DeptShares`
- **Result:** Only the **IT folder** is visible. The HR folder is completely hidden.

**Test 2: Batman (HR_Dept Member)**
- Logged into Windows 11 client as `batman@labs.local`
- Accessed `\\SERVERNAME\DeptShares`
- **Result:** Only the **HR folder** is visible. The IT folder is completely hidden.

**Test 3: Server Administrator View**
- Viewed `C:\DeptShares` directly on the server
- **Result:** Both HR and IT folders are visible (administrators bypass ABE restrictions)

**Skills:** Access control validation, user experience testing, security verification.

## Screenshots

![ABE Configuration](Screenshots/Activity12_ABE_Configuration.png)
*DeptShares Properties window showing "Enable access-based enumeration" checkbox enabled.*

![Server View - Both Folders](Screenshots/Activity12_Server_View_Both_Folders.png)
*Server-side view of C:\DeptShares showing both HR and IT folders exist.*

![Spiderman View - IT Only](Screenshots/Activity12_After_ABE_Spiderman.png)
*Spiderman's view of \\SERVERNAME\DeptShares showing only the IT folder visible.*

![Batman View - HR Only](Screenshots/Activity12_After_ABE_Batman.png)
*Batman's view of \\SERVERNAME\DeptShares showing only the HR folder visible.*

## Security Considerations

- **ABE is not a substitute for proper permissions:** Even with ABE enabled, NTFS and Share permissions are the actual security controls. ABE only controls visibility, not access.
- **Performance impact:** ABE requires additional processing to filter folder listings based on user permissions. In environments with thousands of files and folders, this can cause slight performance overhead.
- **Enumeration attacks:** While ABE hides folders from casual browsing, determined attackers with network access can still attempt to enumerate hidden resources using direct path access or brute-force techniques. ABE should be considered defense-in-depth, not a primary security control.
- **Administrator visibility:** Administrators and users with Full Control on the parent share can see all folders regardless of ABE settings.

## Real-World Applications

- **Departmental File Servers:** HR, Finance, Legal, and IT departments each have isolated folders on a shared file server. ABE ensures employees only see their own department's resources.
- **Project-Based Access:** Temporary project teams have dedicated folders. ABE hides inactive or irrelevant projects from users, simplifying navigation.
- **Multi-Tenant Environments:** Managed service providers (MSPs) hosting file shares for multiple clients can use ABE to ensure Client A cannot see Client B's folders.
- **Compliance Requirements:** Industries with strict data privacy regulations (HIPAA, GDPR, SOX) can use ABE to reduce the visibility of sensitive data to unauthorized personnel.

## Key Takeaways

- **Access-Based Enumeration hides folders from users without permissions**, reducing user confusion and minimizing reconnaissance opportunities for attackers.
- **ABE works in conjunction with NTFS and Share permissions**, not as a replacement. Proper access controls must be configured at both layers.
- **ABE improves the user experience** by showing users only the resources relevant to their role, simplifying file server navigation in complex multi-department environments.
- **Testing and verification are critical** to ensure ABE is filtering correctly and users can access their authorized resources without issues.

---

**Author:** Nick Hugo  
Aspiring IT Support / Systems Administrator  
CompTIA A+ | CompTIA Security+