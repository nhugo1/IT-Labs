# Activity 9 — SharePoint Permissions & Guest Access

**Category:** SharePoint & Collaboration  
**Platform:** SharePoint Online  
**Difficulty:** Intermediate  

---

## Overview

SharePoint permissions look simple on the surface but break down quickly without a deliberate structure. This lab demonstrates how to move beyond the default site-level permission model — breaking inheritance on a specific library, creating a scoped permission group, and granting a user access to one library only without exposing the rest of the site.

---

## Objectives

- Break permission inheritance on a document library to enable independent access control
- Create a dedicated permission group for a specific role
- Configure library-level permissions that differ from the parent site
- Scope a user's access to a single library only and verify the restriction works

---

## Scenario

> *"HR has flagged that the Policies library should only be editable by HR managers, not all HR staff. We also have an external party who needs read-only access to the Policies library — but nothing else on the site."*

Two requirements in one: tighten internal permissions on the HR Policies library, and set up scoped access for an outside user.

---

## Tools Used

- SharePoint Online
- SharePoint Admin Center

---

## Planning

| Requirement | Solution |
|---|---|
| HR Policies editable by managers only | Break inheritance, create HR Managers group with Edit |
| All other HR staff read-only on Policies | Downgrade HR Department Members to Read on the library |
| External party read-only on Policies only | Add user directly to library with Read — no site membership |

**How SharePoint permission inheritance works:**

By default every library inherits its permissions from the parent site. Breaking inheritance creates an independent permission set for that library — changes to site-level permissions no longer affect it. This is the foundation of granular access control in SharePoint.

---

## Lab Walkthrough

### Phase 1 — Create an HR Managers Group

Rather than assigning permissions to individuals, a dedicated HR Managers group was created so future membership changes can be handled by editing the group — not re-doing library permissions.

1. Navigate to **gear icon → Site permissions → Advanced permission settings**
2. Click **New → New Group**
3. Name: **HR Managers**, Permission level: **Edit**
4. Click **Create**

![The SharePoint Advanced Permissions page showing the newly created HR Managers group listed alongside the default Owners, Members, and Visitors groups](screenshots/Activity9_HRManagers-GroupCreated.png)

---

### Phase 2 — Break Permission Inheritance on HR Policies Library

1. Navigate to the **HR Policies** library
2. Go to **gear icon → Library settings → Permissions for this document library**
3. Click **Stop Inheriting Permissions** in the toolbar
4. Confirm the warning dialog — this creates an independent copy of the site permissions on the library

> From this point forward changes to site-level permissions will not affect the HR Policies library. The yellow banner on the permissions page confirms unique permissions are in place.

![The HR Policies library permissions page after breaking inheritance showing the indicator that this library no longer inherits permissions from the parent site](screenshots/Activity9_InheritanceBroken.png)

---

### Phase 3 — Configure Library-Level Permissions

With inheritance broken the permissions were adjusted to match the business requirements:

- **HR Department Owners** — Full Control (unchanged)
- **HR Managers** — Edit (can create, edit, and delete documents)
- **HR Department Members** — downgraded from Edit to **Read** (can view but not modify)

![The HR Policies library permissions page showing the final configuration — HR Managers with Edit, HR Department Members with Read, and HR Department Owners with Full Control](screenshots/Activity9_LibraryPermissions-Configured.png)

---

### Phase 4 — Scope External Access to Library Only

To simulate an external party needing access to the Policies library only, a user account was added directly to the HR Policies library with Read permission — without being added to any site-level group.

This is the correct approach for scoped access: granting library-level permission directly means the user can reach the library but has no membership on the site itself and cannot navigate to any other content.

> **Production note:** In a real environment this would be an external guest user invited via email. External guest access requires the tenant-level and site-level sharing settings in the SharePoint Admin Center to be configured to allow new and existing guests before invitations can be sent. For this lab a tenant user was used to demonstrate the permission scoping behavior.

The access was verified from the user's perspective in a private browser window — the HR Policies library was accessible while the rest of the HR Department site returned an access denied error.

![The HR Policies library permissions page showing the scoped user added with Read access, and the library as seen from that user's perspective confirming access is limited to this library only](screenshots/Activity9_GuestAccess-Verified.png)

---

## Reflection

**What was configured**

Permission inheritance was broken on the HR Policies library. An HR Managers group was created with Edit access. Standard Members were downgraded to Read-only. A user was scoped to Read access on the HR Policies library only with no site membership, and access was verified from their perspective.

**Why each decision was made**

- **Break inheritance rather than rely on site permissions** — site permissions are broad; breaking inheritance on a sensitive library is the only way to control access at the library level without affecting everything else on the site
- **Group-based permissions over individual assignments** — an HR Managers group means adding or removing a manager is a one-step group membership change, not a permissions page edit
- **Scoped library access for outside user** — least privilege applies to external access just as much as internal; the user has a specific need for one library and should not be able to see anything else
- **Read-only for Members on Policies** — staff should be able to read policies but policy documents should only be modified by managers to maintain document integrity

**What I'd do differently in production**

- Use **Entra ID security groups** for HR Managers rather than a SharePoint-only group so membership can be managed centrally and the group can be reused across other sites and services
- Configure **tenant-level and site-level external sharing settings** in the SharePoint Admin Center before attempting to invite external guests — external sharing is disabled by default in many tenant configurations
- Audit external and guest access on a regular schedule — access granted for a specific business need should be reviewed and revoked when that need ends
- Enable **access request notifications** so users who hit an access denied page can submit a request rather than calling the helpdesk

---

## Key Takeaways

The default SharePoint permission model works fine for simple sites but falls apart as soon as you have content that different groups of people should see or edit differently. Knowing how to break inheritance, build a group-based permission structure, and scope access to specific libraries — rather than granting broad site membership — is what makes the difference between a SharePoint site that's secure and one that's a free-for-all.

---

[← Back to Microsoft 365 Labs](https://nhugo1.github.io/IT-Labs/Microsoft-365/)