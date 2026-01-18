# Activity 4: Restrict Control Panel and System Settings

## Objective
To demonstrate administrative control over the user environment by implementing Group Policy Objects (GPO) designed to prevent unauthorized system modifications. This activity focuses on hardening the workstation OS by restricting access to critical configuration tools.

---

## Technical Tasks & Proficiency

### 1. GPO Engineering
* **Management Console:** Utilized the Group Policy Management Console (GPMC) to create a targeted restriction policy.
* **Administrative Template Path:** `User Configuration > Policies > Administrative Templates > Control Panel`
* **Policy Setting:** Enabled **"Prohibit access to Control Panel and PC settings"**.

### 2. Operational Impact
* **Process Blocking:** This policy effectively disables `Control.exe` and `SystemSettings.exe` for the targeted users.
* **UI Suppression:** Automatically removes the Control Panel from the Windows Start menu, Settings app, and File Explorer navigation.
* **Targeted Enforcement:** Linked the GPO specifically to the standard user OU to ensure that while end-user environments are locked down, IT Administrators retain the necessary access for system maintenance.

---

## Evidence of Completion

### GPO Configuration
The following evidence shows the administrative template set to **Enabled**, confirming the system-level block is active.

![Control Panel Restricted GPO](Screenshots/Activity4_ControlPanelRestricted.png)

---

## Key Takeaways
* **Attack Surface Reduction:** By restricting access to system settings, the likelihood of local configuration drift or accidental system compromise is significantly reduced.
* **Policy Support:** Validated that this administrative template remains a consistent security control across legacy and modern versions of Windows (Windows 2000 through Windows 11).
