Active Directory & Jira: Account Lockout Resolution Lab

This project demonstrates the end-to-end process of managing a high-priority technical support incident. It covers User Identity Verification, Active Directory (AD) Administration, and ITSM Lifecycle Management using Jira Service Management.
🛠️ Tools & Technologies

    Directory Services: Windows Server 2022 (Active Directory)

    Endpoint: Windows 11 Enterprise (Domain Joined)

    Ticketing System: Jira Service Management (ITSM Template)

    Network Environment: Virtualized Lab (Internal Domain: Labs.local)

📑 Scenario Overview

A user (Sarah Mitchell) reported being unable to access her workstation after returning from an extended absence. Following three failed login attempts, the account was locked out by the Domain Group Policy.
Key Objectives:

    Incident Logging: Document the issue within Jira with proper priority and categorization.

    Diagnostic Verification: Confirm account status within Active Directory Users and Computers (ADUC).

    Remediation: Unlock the account and perform a secure password reset with "Change at next logon" enforced.

    Validation & Closure: Verify the user's ability to authenticate and document the resolution.

🚀 Execution Steps
1. Incident Creation (Jira)

An incident ticket was generated to track the request. To maintain security, user identity was verified prior to processing the reset.

    Priority: High (User Workstop)

    Assignee: System Administrator

    [!TIP]
    View Evidence: Ticket Creation Screenshot

2. AD Diagnosis & Account Unlock

Navigated to the Labs.local domain controller to inspect the user attributes. The account was flagged as "Locked Out" due to the domain's security policy.

    Accessed ADUC -> Users.

    Modified Account Properties to trigger the unlock.

    [!TIP]
    View Evidence: Account Lockout Status | Password Reset Configuration

3. Endpoint Authentication Success

The user successfully authenticated on the Windows 11 workstation using the temporary credentials and was immediately prompted to set a new, secure password per the "Must change password at next logon" requirement.

    [!TIP]
    View Evidence: Successful User Login

4. Documentation & Resolution

The ticket was updated with a full audit trail, including root cause analysis (RCA) and follow-up actions (referring the user to the Self-Service Password Reset portal).

    [!TIP]
    View Evidence: Final Ticket Resolution

💡 Key Takeaways for Technical Interviews

    Security Compliance: Always verified user identity via Employee ID/Manager confirmation before modifying AD attributes.

    Policy Enforcement: Ensured "User must change password at next logon" was checked to maintain credential privacy.

    Workflow Efficiency: Maintained a low Time-to-Resolution (TTR) by utilizing standardized ADUC administrative tools.

    Root Cause Analysis: Identified that the lockout was a result of an extended absence, providing an opportunity for user education on password best practices