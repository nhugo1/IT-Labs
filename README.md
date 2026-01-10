# Active Directory & Group Policy Home Lab

## Overview
This lab simulates a small enterprise Active Directory environment using Windows Server 2022 and Windows client virtual machines. The goal of this project is to demonstrate foundational IT skills related to identity management, centralized policy enforcement, and basic security controls commonly used in corporate environments.

All configurations were performed in a controlled virtual lab environment and documented to reflect real-world IT workflows rather than tutorial-style walkthroughs.

---

## Lab Environment

- **Domain Controller:** Windows Server 2022
- **Client OS:** Windows 10 / Windows 11 Enterprise
- **Domain Name:** labs.local
- **Management Tools:**  
  - Active Directory Users and Computers  
  - Group Policy Management Console  
- **Virtualization:** VirtualBox (internal network)

---

## Completed Activities

### Activity 1 – Password Policy GPO
Configured a domain-linked Group Policy to enforce password standards, including:
- Minimum password length
- Password complexity requirements
- Maximum password age

**Skills Demonstrated:**
- Group Policy navigation
- Account policy configuration
- Security baseline enforcement

---

### Activity 2 – Drive Mapping GPO
Created a user-based GPO to map a network drive using Group Policy Preferences.

**Skills Demonstrated:**
- User configuration policies
- Drive mapping via GPO
- Policy targeting at the OU level

---

### Activity 3 – Desktop Wallpaper Policy
Enforced a standardized desktop wallpaper for users via Group Policy.

**Skills Demonstrated:**
- Administrative Templates usage
- User experience standardization
- Policy verification on client systems

---

### Activity 4 – Restrict Control Panel Access
Implemented a GPO to prohibit user access to the Control Panel and PC settings.

**Skills Demonstrated:**
- User restriction policies
- Desktop lockdown techniques
- Security and support risk reduction

---

### Activity 5 – Disable USB Devices
Configured a GPO to block access to USB and other removable storage devices.

**Skills Demonstrated:**
- Removable storage control
- Data loss prevention awareness
- Policy-based security enforcement

---

## Key Takeaways

- Centralized policy management reduces configuration drift and support overhead.
- Group Policy allows granular control over user and system behavior at scale.
- Security controls can be enforced without local system changes.
- Proper documentation is as important as technical implementation.

---

## Future Enhancements

- PowerShell automation for user and group creation
- Security group–based GPO filtering
- Event log monitoring for policy enforcement
- Ticket-based troubleshooting simulations

---

## Author

**Nick Hugo**  
Aspiring IT Support / Systems Administrator  
CompTIA A+ | CompTIA Security+
