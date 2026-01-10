## Activity 2 – Drive Mapping GPO

**Objective:**  
Create a GPO to automatically map network drives for users in the USA OU.

**Steps Completed:**
1. Opened **Group Policy Management Console (GPMC)** on Windows Server 2022.  
2. Created a new GPO named **"Drive Mapping"** and linked it to the USA OU.  
3. Opened **GPO Editor**, navigated to: User Configuration → Preferences → Windows Settings → Drive Maps  
4. Right-clicked **Drive Maps → New → Mapped Drive**.  
- Configured:
  - **Location / Network Path:** `\\Labs\folder`  
  - **Drive Letter:** `A:`  
**Screenshots:**  
  - `Screenshots/Activity2_MappedDriveSettings.png`  
  - `Screenshots/Activity2_DriveMapsList.png`

**Notes / Observations:**  
- Drive mapping via GPO reduces manual setup and help desk tickets.  
- Changes to path or drive letter demonstrate centralized management.  
- Naming conventions help organize multiple GPOs efficiently.
