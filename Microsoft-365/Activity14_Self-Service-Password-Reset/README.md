# Activity 14 — Self-Service Password Reset (SSPR)
**Microsoft 365 / Entra ID · SSPR Configuration · Authentication Methods · User Verification**

## Objectives

1. Enable and configure SSPR in Entra ID scoped to a pilot security group.
2. Configure authentication methods and registration enforcement policy.
3. Verify the end-to-end registration and reset flow from a test user account.

---

## Lab Environment

| Field | Value |
|---|---|
| **Admin Portal** | entra.microsoft.com |
| **Domain** | hugosecurity.onmicrosoft.com |
| **Pilot Group** | SSPR-Pilot (Security Group — Assigned) |

---

## What Was Configured

**SSPR Scope:** Selected — SSPR-Pilot group  
**Methods required to reset:** 2  
**Methods enabled:** Mobile app notification, mobile app code, external email, SMS, security questions (5 to register / 3 to reset)  
**Registration enforcement:** Users prompted to register at next sign-in  
**Re-confirmation period:** 180 days  
**Notifications:** Users notified on reset · Admins notified on admin reset  

---

## Screenshots

| # | Filename | Description |
|---|---|---|
| 1 | `Activity14_Baseline-SSPR-Disabled.png` | Password Reset > Properties showing SSPR set to None before any changes |
| 2 | `Activity14_SSPR-Enabled-PilotGroup.png` | Properties page showing SSPR set to Selected with SSPR-Pilot as the scoped group |
| 3 | `Activity14_SSPR-AuthMethods-Configured.png` | Authentication methods tab showing 2 methods required and all enabled methods |
| 4 | `Activity14_SSPR-Registration-Complete.png` | aka.ms/ssprsetup confirmation screen showing test user's registered methods |
| 5 | `Activity14_SSPR-Reset-Verification.png` | passwordreset.microsoftonline.com showing identity verification passed |