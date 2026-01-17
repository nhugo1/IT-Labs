Activity 10 – Advanced Windows File Sharing, Effective Permissions, and Inheritance
Objective
To implement advanced NTFS permission strategies in real-world workplace scenarios, including selective inheritance control, explicit deny permissions, and least privilege access models. This activity demonstrates understanding of the dual-layer permission model (Share + NTFS), permission inheritance behavior, and security boundary enforcement.
Lab Environment

Domain Controller: Windows Server 2022 (labs.local)
Client Workstation: Windows 11 Enterprise
Active Directory Groups: Project, HR
Test Users: John
Tools Used: Active Directory Users and Computers (ADUC), File Explorer, NTFS Security Settings

Tasks Performed
1. Folder Structure and Basic Share Configuration
Created a hierarchical folder structure to simulate departmental file storage:

Parent Folder: C:\Common

Subfolders: Project, Events


Share Permissions: Configured "Common" share with Everyone = Read to establish broad network access at the share level.
NTFS Permissions: Set Everyone = Full Control on the Common folder to demonstrate the baseline permission state before implementing security boundaries.

Skills: SMB share creation, dual-layer permission model (Share vs. NTFS), folder hierarchy design.
2. Permission Inheritance and Selective Access Control
Scenario: The Project folder should only be accessible by members of the Project group, while the Events folder maintains inherited permissions from the parent (Common) folder.
Implementation:

Created Active Directory Group: Provisioned a "Project" security group in Active Directory (USA > Users OU) with Global scope.
Broke Inheritance on Project Folder: Disabled permission inheritance on the Project folder using Advanced Security Settings.
Converted Inherited Permissions: Chose to convert inherited permissions to explicit permissions, allowing manual modification of the access control list (ACL).
Removed Overly Permissive Access: Deleted the "Everyone = Full Control" entry to eliminate broad access.
Granted Targeted Access: Added the Project group with Full Control permissions.
Created Subfolder for Inheritance Testing: Created a "Contracts" subfolder within Project to verify that permissions propagate correctly from parent to child.

Result: Only members of the Project group can access the Project folder and its subfolders, while Events retains the original Everyone = Full Control inheritance from Common.
Skills: Breaking and managing NTFS inheritance, least privilege access control, security group-based permissions, permission propagation.
3. Explicit Deny Permissions
Scenario: All employees have read and write access to a Project folder containing a Confidential subfolder with sensitive financial data. A specific user (John) must be blocked from accessing the Confidential folder without affecting other employees' access.
Implementation:

Folder Structure: Created C:\Project with subfolders: Confidential and Materials.
Created Test User: Provisioned user account "John" in Active Directory (USA > Users OU).
Set Base Permissions: Configured the Project folder with Everyone = Read & Write to simulate company-wide access.
Applied Explicit Deny: On the Confidential subfolder, added user "John" with Deny Read permissions.

Result: John is explicitly denied access to the Confidential folder, even though he inherits Read & Write permissions from the Everyone group on the parent Project folder. This demonstrates that Deny permissions always take precedence over Allow permissions in the NTFS permission evaluation hierarchy.
Skills: Explicit Deny configuration, permission precedence understanding, user-specific access restrictions, security exception handling.
Key Concepts Demonstrated
Dual-Layer Permission Model

Share Permissions: Control network access to the shared folder (applied at the SMB protocol level).
NTFS Permissions: Control file system access (applied at the file/folder level).
Effective Permissions: The most restrictive permission between Share and NTFS determines actual access.

Permission Inheritance

Default Behavior: Child objects inherit permissions from their parent container.
Breaking Inheritance: Allows administrators to create security boundaries where subfolder permissions diverge from parent permissions.
Inheritance Propagation: Changes to parent folder permissions automatically flow down to child objects unless inheritance is explicitly disabled.

Explicit Deny vs. Allow

Deny Wins: Explicit Deny permissions always override Allow permissions, regardless of group membership or inheritance.
Use Case: Deny is used sparingly for exceptional security requirements (e.g., blocking specific users from sensitive data while maintaining group-based access for others).

Screenshots

Activity10_Break_Inheritance.png – Advanced Security Settings showing inheritance being disabled on the Project folder.
Activity10_Project_Folder_Permissions.png – Security tab of Project folder showing Project group with Full Control and Everyone removed.
Activity10_Confidential_Deny_Permissions.png – Security tab of Confidential folder showing John with explicit Deny Read permission.

Security Considerations

Least Privilege Principle: Users and groups are granted only the minimum permissions necessary to perform their job functions.
Defense in Depth: Multiple permission layers (Share + NTFS) provide redundant security controls.
Audit Trail: NTFS permission changes can be logged and audited for compliance and forensic analysis.
Explicit Deny Risks: Overuse of Deny permissions can create complex permission structures that are difficult to troubleshoot. Group-based Allow permissions with proper OU/group design are preferred.

Real-World Applications

Departmental Isolation: HR, Finance, and Legal departments require isolated folders with strict access controls.
Project-Based Access: Temporary project teams need dedicated workspaces with membership-based permissions.
Compliance Requirements: Industries such as healthcare (HIPAA) and finance (SOX) require demonstrable access control and audit capabilities.
Insider Threat Mitigation: Explicit Deny can prevent compromised or malicious users from accessing crown jewel data even if they gain elevated group membership.

Key Takeaways

Permission Inheritance is a powerful tool for simplifying access control but must be selectively disabled to enforce security boundaries.
Explicit Deny should be used judiciously for exceptions, not as a primary access control mechanism.
Group-Based Permissions scale better than user-based permissions and align with role-based access control (RBAC) principles.
Understanding the effective permissions calculation (Share + NTFS + Deny precedence) is critical for troubleshooting access issues in enterprise environments.

Future Enhancements

Implement Dynamic Access Control (DAC) with claims-based permissions for attribute-based access.
Configure File Classification Infrastructure (FCI) to automatically apply permissions based on file metadata.
Deploy auditing policies to track access to sensitive folders and generate security event logs.
Test cross-forest trust scenarios with selective authentication for resource access.


Author: Nick Hugo
Aspiring IT Support / Systems Administrator
CompTIA A+ | CompTIA Security+