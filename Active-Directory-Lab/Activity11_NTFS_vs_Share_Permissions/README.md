# Activity 11: NTFS vs. Share Permissions – Effective Access Scenarios

## Objective
To demonstrate mastery of the dual-layer Windows permission model by implementing real-world file sharing scenarios. This activity proves that the **most restrictive permission** between the Share layer (SMB) and the NTFS layer (File System) always governs actual user access.

---

## Technical Concepts

### The "Most Restrictive Wins" Rule
Windows security evaluation requires passing through two gates. If either gate is narrower than the other, that becomes the user's limit:
* **Share Permissions:** Controls initial network entry via SMB.
* **NTFS Permissions:** Controls granular local and network access with support for inheritance and explicit deny.



---

## Implemented Scenarios

### 1. Marketing Department: Permissive Share / Restrictive NTFS
* **Requirement:** Marketing Interns need "Read-Only" access; Staff need "Full Control."
* **Strategy:** Set Share permissions to `Everyone: Full Control` and used NTFS to define specific access levels.
* **Result:** Interns are limited to viewing files despite the broad Share permission.

**Evidence:**
![Marketing NTFS Settings](Screenshots/Activity11_Marketing_NTFS_Permissions.png)

---

### 2. HR Department: Complete Isolation
* **Requirement:** Secure folder invisible to non-HR employees.
* **Strategy:** Removed the `Everyone` group from both the Share and NTFS layers, granting access exclusively to the `HR_Staff` group.
* **Result:** Non-HR users cannot enumerate the share or access it via direct UNC path.

**Evidence:**
![HR Share Permissions](Screenshots/Activity11_HR_Share_Permissions.png)
![HR NTFS Permissions](Screenshots/Activity11_HR_NTFS_Permissions.png)

---

### 3. Vendor Drop-Box: Write-Only Permissions
* **Requirement:** Vendors must upload reports but cannot view, list, or download any files.
* **Strategy:** Granted the `Vendors` group **Write** permission only at the NTFS level.
* **Result:** Created a secure "blind" drop-box for external submissions, preventing data exfiltration.

**Evidence:**
![Vendor Write-Only NTFS](Screenshots/Activity11_Vendor_NTFS_Permissions.png)

---

### 4. IT Software Repo: Inheritance Control
* **Requirement:** General IT tech access to software, but senior-only access to a `Licenses` subfolder.
* **Strategy:** Disabled inheritance on the `Licenses` subfolder and stripped the `IT_Staff` group, leaving only `#IT-Admins`.
* **Result:** Established a security boundary within a single departmental share.

**Evidence:**
![Broken Inheritance Licenses](Screenshots/Activity11_Licenses_Inheritance_Broken.png)

---

## Troubleshooting & Verification
* **Effective Access Tool:** Used the "Effective Access" tab within Advanced Security Settings to simulate user access and verify that the combined logic of group memberships and Deny rules functioned as intended.
* **Take Ownership:** Documented the necessity of maintaining `Administrators` group access when breaking inheritance to prevent accidental lockout.

---

## Key Takeaways
* **Efficiency:** Demonstrated that setting permissive Share permissions and managing security via NTFS is the most scalable enterprise strategy.
* **Security Boundaries:** Successfully implemented "Drop-Box" and "Departmental Isolation" models which are standard requirements in regulated industries (HIPAA, SOX, GDPR).
* **Inheritance Mastery:** Proved ability to manage complex folder structures where child objects must deviate from parent security policies.
