## Activity 3 – Desktop Wallpaper GPO

**Objective:**  
Create a GPO to enforce a specific desktop wallpaper for users in the USA OU.

**Steps Completed:**
1. Opened **Group Policy Management Console (GPMC)** on Windows Server 2022.  
2. Created a new GPO named **"Desktop Wallpaper Policy"** and linked it to the USA OU.  
3. Opened **GPO Editor**, navigated to:  
User Configuration → Policies → Administrative Templates → Desktop → Desktop → Desktop Wallpaper
4. Enabled the policy and set the wallpaper path to:  
C:\Windows\Web\Wallpaper\Windows\img0.jpg
- **Wallpaper Style:** Center  
**Screenshots:**  
  - `Screenshots/Activity3_WallpaperSettings.png` (policy settings window)  
  - `Screenshots/Activity3_WallpaperEnabled.png` (GPO enabled)

**Verification:**  
- Client VM shows wallpaper settings as **managed by your organization**, confirming the GPO is applied.  
**Screenshot:** `Screenshots/Activity3_WallpaperOnClient.png`

**Notes / Observations:**  
- Enforcing wallpapers via GPO ensures consistent branding and user experience across all users in the OU.  
- Using a local path avoids network dependency for lab purposes.  
- Naming conventions help organize GPOs by policy type (security, environment, etc.).
