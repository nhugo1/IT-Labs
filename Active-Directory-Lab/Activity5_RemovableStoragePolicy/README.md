# Activity 5: Removable Storage Lockdown and Data Loss Prevention (DLP)

## Objective
To enhance the physical security of the domain by disabling all removable storage devices via Group Policy. This prevents unauthorized data exfiltration (DLP) and protects the network from hardware-based malware threats, such as "Rubber Ducky" attacks.

---

## Technical Tasks & Proficiency

### 1. GPO Configuration for Removable Media
* **Targeting:** Created a system-wide security GPO applied to the Workstation OUs.
* **Policy Path:** `Computer Configuration > Policies > Administrative Templates > System > Removable Storage Access`.
* **Enforcement:** Enabled the **"All Removable Storage classes: Deny all access"** setting. 

### 2. Scope of Restriction
* This policy enforces a "Deny" at the kernel level for all removable media, including:
    * USB Flash Drives and External HDDs.
    * Optical Media (CDs/DVDs).
    * Portable Devices (MTP/Phones).
* **Precedence:** This "Deny All" setting takes precedence over any individual "Allow" settings, ensuring a foolproof security baseline.

---

## Security Impact
* **Malware Mitigation:** Effectively blocks the primary vector for offline malware introduction and automated hardware exploits.
* **Data Loss Prevention:** Establishes a foundational DLP standard by ensuring corporate data cannot be copied to unmanaged, unencrypted external devices.

---

## Evidence of Completion

### GPO Configuration
![Disable USB Devices Policy](Screenshots/Activity5_DisableUSBDevices.png)

---

## Verification
* **Status:** Verified as **Enabled** within the Group Policy Management Editor.
* **Compatibility:** Validated for all domain-joined clients (Windows Vista through Windows 11).
