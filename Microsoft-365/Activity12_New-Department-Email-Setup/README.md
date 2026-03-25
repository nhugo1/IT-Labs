Activity 12 — New Department Email Setup

Category: Email & Group Administration Platform: Microsoft 365 Admin Center Difficulty: Intermediate 
Overview

Setting up email infrastructure for a new department is a core responsibility for IT administrators. This lab demonstrates the process of onboarding a "Customer Success" team by configuring a distribution list for group communication, creating an email alias for a primary point of contact, and managing out-of-office automation for departing staff.
Objectives

    Configure a Microsoft 365 Distribution List and manage membership.

    Create and assign an email alias to an existing user account.

    Set automatic out-of-office replies via admin-delegated access.

    Troubleshoot real-world licensing hurdles such as "Invalid Usage Location" errors.

Scenario

    A new Customer Success department has been onboarded. The IT team must set up a team-wide email address (customersuccess@), a public-facing support alias for a lead staff member (jsupport@), and configure leave-of-absence replies for the team members.

Tools Used

    Microsoft 365 Admin Center (admin.microsoft.com) 

    Exchange Admin Center (admin.exchange.microsoft.com) 

Lab Walkthrough
Phase 1 — Planning & Baseline

Before configuration, the environment was verified to ensure test accounts for John Smith (jsmith) and Linda Chang (lchang) were active and licensed.
Requirement	Value
New Dept. Address	

customersuccess@
Lead Contact Alias	

jsupport@
Team Members	

John Smith, Linda Chang
Phase 2 — Configuration
Step 1 — Licensing & Usage Location Fix

During the assignment of licenses to the test users, a "License assignment cannot be done for user with invalid usage location" error was encountered. This was resolved by navigating to the user's Licenses and apps tab and setting the Usage Location to the United States.
Step 2 — Create the Distribution List

    In the Exchange Admin Center, navigated to Recipients → Groups → Distribution list.

    Created a group named Customer Success Team with the address customersuccess@[domain].onmicrosoft.com.

    Added John Smith and Linda Chang as members.

    Enabled "Allow external senders" to ensure customers can reach the team.

Step 3 — Assign Email Alias

    In the M365 Admin Center, navigated to Active Users → John Smith → Manage email aliases.

    Added jsupport@[domain].onmicrosoft.com to his profile.

    Verified the alias appears alongside the primary SMTP address.

Step 4 — Configure Out-of-Office Replies

    Navigated to Active Users → John Smith → Mail tab → Manage automatic replies.

    Toggled replies to On and scheduled a date range for the upcoming week.

    Drafted a message directing senders to contact the customersuccess@ address for assistance.

Phase 3 — Verification

The configuration was verified by checking the status of each component in the Admin Centers.

Configuration Reference:
Component	Status	Verification
Distribution List	Active	

Confirmed members jsmith and lchang are listed.
Email Alias	Active	

Confirmed jsupport is a secondary SMTP address.
Auto-Reply	Enabled	

Confirmed scheduled leave dates and message body.
Phase 4 — Reflection

What was configured
A Distribution List was established for team-wide communication, an alias was provided to a lead user for external support branding, and Out-of-Office replies were set via admin delegation to ensure no customer inquiries were missed during staff leave.

Why each decision was made

    Used a Distribution List — It is a lightweight solution for team addresses that doesn't require the overhead of a full M365 Group or a paid shared mailbox license.

    Set an Alias — This allows John Smith to receive support-specific mail in his existing inbox without needing to monitor multiple accounts.

    Admin-Delegated OOO — Admins often have to set these when staff forget before leaving; using the Admin Center is a quick alternative to using PowerShell or logging into the user's OWA.

What I'd do differently in production

    Ensure a 30-minute buffer is communicated to users for alias propagation.

    For larger teams, I would explore using a Shared Mailbox if the team needs to send replies as the department address rather than just receiving mail.

    Implement PowerShell (Exchange Online Management) to set OOO replies in bulk if the department size was significantly larger.

Key Takeaways

This activity mimics the high-frequency requests found in Tier 1 and Tier 2 support roles. Beyond the technical clicks, the lab highlights the importance of troubleshooting licensing errors (Usage Location) and understanding how to redirect mail flow during personnel shifts.

← Back to Microsoft 365 Labs

Would you like me to generate the instructions for Activity 13 (Microsoft Teams Administration) next?