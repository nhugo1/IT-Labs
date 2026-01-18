# Activity 11 – NTFS vs Share Permissions

## Objective

To demonstrate mastery of the dual-layer Windows permission model by implementing real-world file sharing scenarios that require understanding of how Share Permissions and NTFS Permissions interact to determine effective access. This activity reinforces the principle that the most restrictive permission between Share and NTFS always governs actual user access.

## Lab Environment

- **Domain Controller:** Windows Server 2022 (labs.local)
- **Client OS:** Windows 11 Enterprise
- **Active Directory Groups:** Marketing_Staff, Marketing_Interns, HR_Staff, Vendors, IT_Staff, #IT-Admins
- **Tools Used:** File Explorer, Advanced Sharing, NTFS Security Settings

## Core Concepts

### Dual-Layer Permission Model
Windows file sharing uses two independent permission layers:

1. **Share Permissions** – Applied at the SMB protocol level when accessing folders over the network
   - Controls who can connect to the share
   - Typically set permissively (Everyone = Read or Change)
   - Only three permission levels: Read, Change, Full Control

2. **NTFS Permissions** – Applied at the file system level (local and network access)
   - Granular control over files and folders
   - Multiple permission levels: Full Control, Modify, Read & Execute, Read, Write, Special Permissions
   - Supports inheritance and explicit deny

### Effective Permissions Calculation
- **Most Restrictive Wins**: The effective permission is the most restrictive between Share and NTFS
- Example: Share = Full Control, NTFS = Read → User gets Read access
- Example: Share = Read, NTFS = Full Control → User gets Read access

## Scenarios Implemented

### Scenario 1: Marketing Department – Restrictive NTFS with Permissive Share

**Requirement:** Marketing interns need view-only access to the Marketing folder. Marketing staff need full control.

**Configuration:**

- **Folder:** C:\Marketing
- **Share Permissions:**
  - Everyone: Full Control
  - Marketing_Staff: Full Control
- **NTFS Permissions:**
  - Marketing_Interns: Read
  - Marketing_Staff: Full Control

**Result:** Marketing interns can view files over the network but cannot modify or delete them. The restrictive NTFS Read permission overrides the permissive Share Full Control.

**Skills Demonstrated:** Dual-layer permission model, using NTFS as the primary access control mechanism while maintaining broad share access.

---

### Scenario 2: HR Department – Complete Isolation

**Requirement:** HR department needs a secure folder that only HR staff can access. The folder should be invisible to other employees.

**Configuration:**

- **Folder:** C:\HRGroup
- **Share Permissions:**
  - Everyone: Removed
  - HR_Staff: Full Control
- **NTFS Permissions:**
  - HR_Staff: Full Control
  - (All other groups removed)

**Result:** Only HR_Staff can access the folder. The share does not appear in network browsing for non-HR users, and even if someone attempts direct access via UNC path, both Share and NTFS deny entry.

**Skills Demonstrated:** Complete folder isolation, removing default Everyone permissions, implementing least privilege at both permission layers.

---

### Scenario 3: Vendor Access – Write-Only Drop Box

**Requirement:** Third-party vendors need to upload reports to a temporary folder but should not be able to view or download files (including their own uploads).

**Configuration:**

- **Folder:** C:\VendorFiles
- **Share Permissions:**
  - Vendors: Full Control
- **NTFS Permissions:**
  - Vendors: Write (only)

**Result:** Vendors can upload files to the folder but cannot read, list, or download any content. This creates a secure "drop box" where external parties can submit files without seeing sensitive data or other vendors' submissions.

**Skills Demonstrated:** Granular NTFS permission assignment, understanding write-only access patterns, secure external collaboration models.

---

### Scenario 4: IT Department – Subfolder Restriction with Inheritance Control

**Requirement:** All IT techs need access to a software repository, but only senior IT staff should access the Licenses subfolder containing sensitive license keys and vendor agreements.

**Configuration:**

- **Parent Folder:** C:\Software
  - **Share Permissions:** IT_Staff: Full Control
  - **NTFS Permissions:** IT_Staff: Full Control

- **Subfolder:** C:\Software\Licenses
  - **Inheritance:** Disabled
  - **NTFS Permissions:** #IT-Admins: Full Control (IT_Staff removed)

**Result:** All IT staff can access the Software repository, but the Licenses subfolder is restricted exclusively to senior administrators. Breaking inheritance on the Licenses subfolder prevents IT_Staff permissions from propagating down.

**Skills Demonstrated:** Breaking and managing inheritance, creating security boundaries within departmental shares, selective subfolder restrictions.

---

## Permission Strategies Demonstrated

### When to Use Permissive Share Permissions
- Set Share permissions to **Everyone = Read** or **Everyone = Change** when you want broad network access
- Use **NTFS permissions** as the primary access control mechanism
- Simplifies management by centralizing security at the NTFS layer

### When to Restrict Both Layers
- High-security scenarios (HR, Finance, Legal departments)
- Completely isolate sensitive data
- Prevent unauthorized network browsing or enumeration

### Write-Only Permissions
- Secure drop boxes for external vendors, partners, or contractors
- Prevents data exfiltration while allowing file submission
- Useful for compliance scenarios requiring audit trails without content access

### Inheritance Control
- Break inheritance to create security boundaries within shared structures
- Allows departmental shares with restricted subfolders for management/leadership
- Balance between convenience (inherited permissions) and security (explicit restrictions)

## Troubleshooting Notes

- **Access Denied on Subfolder Configuration:** When breaking inheritance and removing all groups, administrators can lose access. Use **Take Ownership** or retain **Administrators** group in the ACL before removing other permissions.
- **Hidden Shares:** Appending `$` to a share name (e.g., `HR$`) makes it hidden from network browsing but does not provide security (users can still access via direct UNC path if they know the name).
- **Effective Permissions Tool:** Use the "Effective Access" tab in Advanced Security Settings to verify what permissions a specific user/group actually receives.

## Screenshots

- **Activity11_Marketing_NTFS_Permissions.png** – Security tab showing Marketing_Interns with Read-only access.
- **Activity11_HR_Share_Permissions.png** – Share Permissions tab showing HR_Staff with Full Control and Everyone removed.
- **Activity11_HR_NTFS_Permissions.png** – Security tab showing HR_Staff isolated access.
- **Activity11_Vendor_NTFS_Permissions.png** – Security tab showing Vendors with Write-only permissions (drop box).
- **Activity11_Licenses_Inheritance_Broken.png** – Advanced Security Settings showing inheritance disabled on Licenses subfolder with #IT-Admins-only access.

## Key Takeaways

- **Most Restrictive Permission Wins:** Effective access is always the intersection of Share and NTFS permissions, with the more restrictive value taking precedence.
- **NTFS is the Primary Control:** In most enterprise environments, Share permissions are set permissively and NTFS handles granular access control.
- **Inheritance is Powerful but Must Be Managed:** Breaking inheritance allows security boundaries within folder hierarchies but requires careful planning to avoid access denial issues.
- **Write-Only Permissions Enable Secure Collaboration:** Drop box configurations allow external parties to submit data without creating data leak risks.

## Real-World Applications

- **Marketing/Sales Departments:** Read-only access for interns and contractors while full access for staff.
- **HR/Legal/Finance:** Complete isolation of sensitive departmental data.
- **Vendor/Partner Collaboration:** Secure file submission without exposing internal data.
- **IT Software Repositories:** Shared tool access with restricted license/key storage for senior staff.

---

**Author:** Nick Hugo  
Aspiring IT Support / Systems Administrator  
CompTIA A+ | CompTIA Security+