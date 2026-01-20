# Activity 6: GPO Application & Troubleshooting (The MS16-072 Fix)

## Objective
To validate the application of Group Policy Objects (GPOs) on a Windows 11 client and troubleshoot a "silent failure" regarding Security Filtering and policy inheritance.

---

## Technical Tasks & Workflow

### 1. Environment Preparation
* **Domain Integration:** Successfully joined the Windows 11 workstation (`TestClient1`) to the `labs.local` domain.
* **OU Structure:** Organized the environment by placing the computer object in the `USA > Computers` OU and the user account in the `USA > Users` OU.
* **GPO Linking:** Linked specific policies (Password Policy, Drive Mapping, Wallpaper, USB Lockdown, and Control Panel Restriction) to their respective OUs.

**Evidence:**

![Client in USA OU](Screenshots/Activity6_Client1_in_USA_OU.png)
![Domain Join Confirmation](Screenshots/Activity6_DomainJoinConfirmation.png)
![GPO Linked to OUs](Screenshots/Activity6_GPO_Linked_OUs.png)
![Static IP Configuration](Screenshots/Activity6_StaticIP.png)
![IPConfig](Screenshots/Activity6_IPconfig.png)
![IPConfig All](Screenshots/Activity6_ipconfig_all.png)
![Client Connectivity](Screenshots/Activity6_ClientConnectivity.png)

---

## Troubleshooting Case Study: GPO Silent Failure

### The Problem
After configuring the **"Restrict Control Panel"** GPO and running `gpupdate /force`, the policy failed to apply to the test user. The GPO did not appear in the `gpresult /r` output despite the user being in the correct Security Filter group.

### The Root Cause (MS16-072)
Investigation revealed a failure caused by the **MS16-072 security update**. By removing "Authenticated Users" from the Security Filtering and only adding the "Restricted_Users" group, the **Computer Object** lost its ability to "Read" the GPO. Since GPOs are retrieved using the computer's context, the policy was ignored.

### The Resolution
1. **Delegation Adjustment:** Navigated to the **Delegation Tab** of the GPO.
2. **Read Permissions:** Added **Authenticated Users** and granted them **Read** permissions only (avoiding "Apply Group Policy").
3. **Scope Alignment:** Ensured the `Restricted_Users` group maintained both **Read** and **Apply Group Policy** permissions.

**Evidence:**

![Delegation Tab Configuration](Screenshots/Activity6_DelegationTab.png)

---

## Final Verification & Results
After the delegation fix, a `gpupdate /force` was performed. 

* **GPResult:** Confirmed the "Restrict Control Panel" policy is now listed under "Applied Group Policy Objects."
* **UI Enforcement:** Confirmed that attempting to access the Control Panel triggers the administrative restriction message.

---

## Key Takeaways
* **Computer Context Matters:** Policies require the computer account to have "Read" access even for User-based restrictions.
* **Troubleshooting Methodology:** Utilized `gpresult` and GPMC Delegation logs to identify and resolve a common enterprise-level GPO conflict.
