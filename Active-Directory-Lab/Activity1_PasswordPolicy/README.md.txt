## Activity 1 – Password Policy GPO

**Objective:** Create a new GPO in the domain for enforcing password policies for the USA OU.

**Steps Completed:**
1. Opened Group Policy Management Console (GPMC) on Windows Server 2022
2. Right-clicked the domain / OU, selected "Create a GPO in this domain, and Link it here..."
3. Named the GPO "Password Policy"
4. Opened GPO editor and navigated to:User Configuration → Policies → Windows Settings → Security Settings → Account Policies → Password Policy
5. Configured **Minimum password length** to 12 characters.  
**Screenshot:** `Screenshots/Activity1_MinLength.png`  
6. Enabled **Password must meet complexity requirements**.  
**Screenshot:** `Screenshots/Activity1_Complexity.png`  
7. Set **Maximum password age** to 90 days.  
**Screenshot:** `Screenshots/Activity1_MaxAge.png`  

**Verification:**
- Ran `gpupdate /force` on the client VM to immediately apply GPO.  
**Screenshot:** `Screenshots/Activity1_GPUpdate.png`  
- Ran `gpresult /r` on the client VM to confirm that the **Password Policy – USA GPO** is applied.  
**Screenshot:** `Screenshots/Activity1_GPResult.png`  
- GPO now appears under the domain in GPMC, linked to the USA OU.

**Notes / Observations:**  
- All configured settings are now active for users in the linked OU.  
- Using clear naming conventions helps organize multiple GPOs efficiently.  
- This workflow demonstrates ability to create and verify password policies in Active Directory.