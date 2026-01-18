# Activity 2: Automated Network Drive Mapping via GPP

## Objective
To streamline user access to network resources by automating the mapping of departmental shared drives. This ensures that users in the `USA` OU have immediate access to necessary file shares upon login without manual intervention.

---

## Technical Tasks & Workflow

### 1. GPO Infrastructure
* **Console:** Group Policy Management Console (GPMC).
* **Linking:** Created and linked the **"Drive Mapping"** GPO to the `USA` OU to target user-specific environment settings.

### 2. Group Policy Preferences (GPP) Configuration
* **Policy Path:** `User Configuration > Preferences > Windows Settings > Drive Maps`
* **Action:** Configured a "Create" action for the network path.
* **Resource Path:** Defined the UNC path as `\\Labs\folder`.
* **Letter Assignment:** Assigned the persistent drive letter **S:** (Note: Common practice uses S: for Shared or P: for Public; ensure this matches your specific lab screenshot).

---

## Evidence of Configuration

### Drive Map Preference Settings
Detailed view of the mapping properties, including the UNC path and reconnect settings.
![Mapped Drive Settings](Screenshots/Activity2_MappedDriveSettings.png)

### GPMC Preferences List
Verification of the drive mapping object within the GPP list.
![Drive Maps List](Screenshots/Activity2_DriveMapsList.png)

---

## Key Takeaways
* **Centralized Administration:** Demonstrated how to update network paths for hundreds of users from a single console, significantly reducing help desk tickets.
* **Modern vs. Legacy:** Utilized GPP instead of logon scripts, allowing for better reporting and the "Reconnect" feature, which ensures the drive stays mapped across sessions.
