Activity 6 – GPO Application & Testing: Control Panel Restriction

Objective:
Test and apply previously configured Group Policy Objects (GPOs) on a Windows client VM, ensuring policies enforce as intended while troubleshooting any issues.

Steps Completed

Configured static IP on Windows Server VM and verified network connectivity.

Joined client VM (TestClient1) to domain Labs.local and confirmed domain membership.

Created a test user account TestUser in the Restricted_Users security group.

Placed client VM in USA Computers OU.

Linked GPOs to their respective OUs:

Password Policy → USA Computers OU

Drive Mapping → USA Users OU

Desktop Wallpaper → USA Users OU

Disable USB Devices → USA Computers OU

Restrict Control Panel → USA Users OU (initially Security Filtering included Restricted_Users only)

Attempted GPO application on TestUser via gpupdate /force—policy did not apply.

Problem Encountered

Issue:
The "Restrict Control Panel" GPO did not appear in gpresult for the test user and did not enforce restrictions.

Cause:
MS16-072 security change in Windows prevents the computer account from reading a GPO when Authenticated Users is removed from Security Filtering. Only adding the restricted user group caused the computer object to lose "Read" access, resulting in a silent GPO failure.

Resolution

Added Authenticated Users (or Domain Computers) to the Delegation tab of the GPO.

Assigned Read permissions only to the broader group.

Ensured Restricted_Users group retained Read + Apply Group Policy permissions in the Scope tab.

Forced GPO update with gpupdate /force and performed a fresh Sign-out/Sign-in on the client VM.

Verification

gpresult /r confirmed that the Restrict Control Panel GPO applied to TestUser.

Control Panel access successfully blocked on the client VM.

Screenshots

Activity6_GPMC_Overview.png – GPOs linked to OUs in GPMC.

Activity6_SecurityFiltering.png – Restricted_Users and Authenticated Users permissions.

Activity6_ControlPanel_Restricted.png – Control Panel blocked message on client.

Activity6_GPResult.png – gpresult /r output showing applied GPOs.

Activity6_DelegationTab.png – Delegation tab showing Authenticated Users with Read permissions.

Notes / Observations

Security Filtering must include both user and computer accounts to prevent silent GPO failures.

Policies may require gpupdate /force and log off/log on to apply.

Testing with a dedicated test user avoids accidentally restricting administrator access.


Documenting the troubleshooting process demonstrates practical AD/GPO problem-solving skills.
