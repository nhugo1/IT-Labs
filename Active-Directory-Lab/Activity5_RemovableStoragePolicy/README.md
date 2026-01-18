ACTIVITY 5: REMOVABLE STORAGE LOCKDOWN AND DATA LOSS PREVENTION (DLP)

OBJECTIVE: To enhance the physical security of the network by disabling all removable storage devices through Group Policy, preventing unauthorized data exfiltration and protecting the domain from malware introduced via USB drives.

TASKS PERFORMED:

    GPO CONFIGURATION FOR REMOVABLE MEDIA

    Created or modified a Group Policy Object targeting workstation security.

    Navigated to: Computer Configuration > Policies > Administrative Templates > System > Removable Storage Access.

    ENFORCING "DENY ALL" ACCESS

    Enabled the policy: "All Removable Storage classes: Deny all access."

    This setting takes precedence over individual removable storage settings, effectively disabling the ability to read from or write to any USB flash drive, external hard drive, or optical media (CD/DVD).

    Verified that the policy applies at the system level, meaning it affects all users who log into the specific machine.

    SECURITY IMPACT

    Mitigated the risk of "Rubber Ducky" style hardware attacks and unauthorized software installations.

    Established a basic Data Loss Prevention (DLP) standard by ensuring company data cannot be copied to unmanaged external devices.

VERIFICATION:

    Confirmed the status is set to "Enabled" within the Group Policy Management Editor as shown in documentation.

    Validated that the policy is supported on all client versions from Windows Vista through Windows 11.

CAPTURED EVIDENCE FILES:

    Activity5_DisableUSBDevices.png (Shows the "Deny all access" policy enabled in GPMC)
