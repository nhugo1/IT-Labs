# Activity 13 — Admin Roles & Delegated Access
**Microsoft 365 · Scoped Admin Roles · Least Privilege · Role Verification**

## Objectives

1. Assign scoped admin roles to users instead of Global Administrator.
2. Verify that each scoped role grants the correct access and nothing more.
3. Confirm role assignments in Entra ID.

---

## What Was Configured

**Users Created:** helpdesktech@hugosecurity.onmicrosoft.com · useradmin@hugosecurity.onmicrosoft.com  
**Role Assigned — Helpdesk Tech:** Helpdesk Administrator  
**Role Assigned — User Admin:** User Administrator  

| Role | Can Do | Cannot Do |
|---|---|---|
| Helpdesk Administrator | Reset passwords, manage service requests, view users | Billing, SharePoint Admin, Exchange Admin |
| User Administrator | Create and manage users and groups | Exchange Admin, Billing |

---

## Verification

- Signed in as each scoped admin in a private browser and confirmed access matched the role
- Helpdesk Admin: confirmed password reset works · confirmed Billing and SharePoint Admin inaccessible
- User Admin: confirmed user management works · confirmed Exchange Admin and Billing inaccessible
- Role assignments confirmed in Entra ID under Roles & admins → Assignments

---

## Screenshots

| # | Filename | Description |
|---|---|---|
| 1 | `Activity13_Roles-Assigned.png` | M365 Admin Center showing both users with their assigned scoped roles visible |
| 2 | `Activity13_Helpdesk-Admin-View.png` | Admin Center as seen from the Helpdesk Tech account showing limited navigation and user management access |
| 3 | `Activity13_User-Admin-View.png` | Admin Center as seen from the User Admin account showing user management access and no Exchange or Billing |
| 4 | `Activity13_Entra-Role-Assignments.png` | Entra ID Roles & admins showing Helpdesk Administrator role with Helpdesk Tech listed as assigned |