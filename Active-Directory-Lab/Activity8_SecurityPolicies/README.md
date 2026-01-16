ACTIVITY 8: DOMAIN HARDENING AND ADVANCED SECURITY POLICIES

OBJECTIVE: To implement a multi-layered security posture within the LABS.local domain by enforcing strict password requirements, account lockout protections, and granular user rights assignments.

TASKS PERFORMED:

PASSWORD AND ACCOUNT LOCKOUT POLICIES

    * Domain-Wide Policy: Configured the Default Domain Policy to enforce a 12-character minimum password length and password complexity requirements.

    * Account Lockout: Implemented a 3-strike threshold. After three failed login attempts, accounts are automatically locked to prevent brute-force attacks.

FINE-GRAINED PASSWORD POLICIES (FGPP)

    * Tiered Security: Created an advanced Password Settings Object (PSO) named "AdminPasswordPolicy."

    * Elevated Requirements: Assigned a 15-character minimum length and Precedence 1 to the "#IT-Admins" group. This ensures that high-privilege accounts are held to a higher security standard than standard users.

USER RIGHTS ASSIGNMENT (ACCESS CONTROL)

    * Local Logon Restriction: Created a "User Rights" GPO to deny local logon to the "Restricted_Users" group.

    * RDP Hardening: Restricted Remote Desktop Access, ensuring only authorized IT personnel can access workstations remotely.

    * Troubleshooting: Diagnosed a GPO propagation issue using "gpresult /r". Resolved the issue by linking the GPO to the Domain Root to ensure it reached the Windows 11 VM regardless of its Organizational Unit (OU).

VERIFICATION AND SCREENSHOTS:

    * Password Enforcement: Verified complexity requirements during user creation.

    * Login Denial: Confirmed Windows 11 displays "The sign-in method you're trying to use isn't allowed" when a restricted user attempts access.

    * RDP Protection: Confirmed the system-level error "The user has not been granted the requested logon type" when unauthorized RDP attempts are made.

CAPTURED EVIDENCE FILES:

    Activity8_Account_Lockout_Policy.png

    Activity8_Complexity_Error.png

    Activity8_Local_Logon_Denied.png

    Activity8_Lockout_Error.png

    Activity8_Password_Policy.png

    Activity8_User_Rights_Assignment.png

    Activity8_RDP_Denial_Success.png

    Activity8_FGPP_Admin_Policy.png