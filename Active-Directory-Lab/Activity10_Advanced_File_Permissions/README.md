# Activity 10: Advanced NTFS Permissions, Inheritance, and Security Boundaries

## Objective
To implement advanced NTFS permission strategies in a multi-departmental environment. This activity demonstrates mastery of selective inheritance control, the "Explicit Deny" precedence rule, and the dual-layer (Share + NTFS) security model.

---

## Technical Tasks & Proficiency

### 1. Selective Inheritance & Departmental Isolation
* **Scenario:** Created a "Project" folder that must be isolated from the general "Common" share permissions.
* **Workflow:**
    * **Breaking Inheritance:** Disabled the inheritance flag on the `C:\Common\Project` directory.
    * **ACL Conversion:** Converted inherited permissions to explicit entries to allow for granular modification.
    * **Hardening:** Removed the "Everyone" group and granted **Full Control** exclusively to the **Project** security group.

**Evidence:**
![Breaking Inheritance](Screenshots/Activity10_Break_Inheritance.png)
![Project Group Permissions](Screenshots/Activity10_Project_Folder_Permissions.png)

---

### 2. Explicit Deny and Permission Precedence
* **Scenario:** A specific user (John) requires access to the general Project folder but must be strictly blocked from a "Confidential" subfolder, despite being a member of a group that has "Allow" rights.
* **Implementation:** * Applied an **Explicit Deny** for "Read" to the user `John` on the Confidential subfolder.
* **Technical Principle:** This demonstrates the NTFS evaluation hierarchy where **Explicit Deny always overrides any Allow permissions**, regardless of group membership or inheritance.

**Evidence:**
![Explicit Deny Configuration](Screenshots/Activity10_Confidential_Deny_Permissions.png)



---

### 3. Effective Permissions Logic
* **Dual-Layer Model:** Verified that the **Effective Permission** is the most restrictive intersection of:
    1. **Share Permissions** (Network Layer)
    2. **NTFS Permissions** (File System Layer)
* **Propagation Testing:** Created a "Contracts" subfolder to verify that new NTFS permissions correctly flow down to child objects after an inheritance break.

---

## Key Concepts Demonstrated
* **Role-Based Access Control (RBAC):** Utilizing AD Security Groups rather than individual user accounts to manage access at scale.
* **Security Boundaries:** Understanding when to break inheritance to prevent "permission creep" in sensitive directories.
* **Troubleshooting Access:** Using Advanced Security settings to verify why a user is being granted or denied access based on their cumulative group memberships.

---

## Key Takeaways
* **Least Privilege:** Demonstrated the ability to grant users exactly what they need and nothing more.
* **Inheritance Management:** Successfully moved from a "flat" permission structure to a hierarchical one that mirrors a real-world corporate folder tree.
* **Deny Rule Mastery:** Confirmed that "Deny" is a powerful tool for handling security exceptions without restructuring entire group memberships.
