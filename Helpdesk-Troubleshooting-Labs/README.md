# Helpdesk Troubleshooting Labs

## Overview
This collection demonstrates core helpdesk and IT support competencies through realistic troubleshooting scenarios. Each activity showcases systematic problem-solving, professional documentation, and practical technical skills essential for entry-level IT support roles.

All labs utilize Jira for ticket management and follow industry-standard troubleshooting methodologies with comprehensive documentation and supporting screenshots.

---

## Activities

### [Activity 1: Password Lockout](Activity1_Password-Lockout/)
**Scenario:** Standard password reset and account unlock procedure

**Skills Demonstrated:**
- Active Directory user account management
- Password policy enforcement
- Account lockout troubleshooting
- User authentication verification
- Professional ticket documentation

**Environment:** Windows Server 2022 Domain Controller, Windows 11 client

---

### [Activity 2: Multi-Ticket Priority Management](Activity2_Multi-Ticket-Priority-Management/)
**Scenario:** Three simultaneous tickets requiring triage, prioritization, and systematic resolution

**Tickets Handled:**
- **KAN-3 (P1 - Critical):** System bus driver failure affecting touchpad and Wi-Fi
- **KAN-4 (P2 - Medium):** Outlook connectivity issue due to Airplane mode
- **KAN-2 (P3 - Low):** Workgroup file sharing configuration request

**Skills Demonstrated:**
- Priority-based ticket management
- Business impact assessment
- Driver and hardware diagnostics (Device Manager, Event Viewer)
- Network connectivity troubleshooting
- Workgroup file sharing configuration
- User communication during competing priorities
- Time management across multiple issues

**Environment:** Windows 11 workgroup, Microsoft Outlook, home network

**[View Full Activity →](Activity2_Multi-Ticket-Priority-Management/)**

---

## Skills Summary

### Technical Competencies
- Windows 11 and Server 2022 administration
- Active Directory user management
- Device Manager and Event Viewer diagnostics
- Network troubleshooting (ping, ipconfig, firewall configuration)
- File sharing (SMB, permissions, mapped drives)
- Email client troubleshooting (Outlook/Exchange)
- Driver and hardware troubleshooting
- Windows boot process and power management

### Troubleshooting Methodology
- Systematic diagnostic approach
- Root cause analysis
- Event log forensics
- Isolation techniques (application vs system-wide issues)
- Documentation of troubleshooting steps
- Preventive measures and user education

### Professional Skills
- Ticket prioritization and triage
- SLA awareness and compliance
- User communication and expectation management
- Professional documentation in Jira
- Time management across concurrent issues
- User education for self-service resolution

### Security Awareness
- Defense-in-depth security (Share + NTFS permissions)
- Network profile configuration (Private vs Public)
- Principle of least privilege
- Firewall configuration best practices

---

## Tools & Technologies

**Platforms:**
- Windows 11 Enterprise
- Windows Server 2022 (Domain Controller)
- Active Directory

**Applications:**
- Jira (ticket management)
- Microsoft Outlook
- Device Manager
- Event Viewer
- Windows Defender Firewall
- File Explorer
- Command Prompt

**Networking:**
- Workgroup (peer-to-peer) configuration
- SMB file sharing
- Network discovery and diagnostics

---

## Lab Environment

**Domain Environment:**
- Domain: Labs.local
- Windows Server 2022 Domain Controller
- Domain-joined Windows 11 client

**Workgroup Environment:**
- Windows 11 laptop and desktop
- Home WiFi network
- Peer-to-peer file sharing

---

## Portfolio Purpose

These labs demonstrate readiness for entry-level helpdesk and IT support positions by showcasing:

1. **Real-world scenarios** - Common issues faced in production environments
2. **Professional processes** - Industry-standard ticketing and documentation
3. **Technical depth** - Beyond surface-level fixes to root cause analysis
4. **Soft skills** - Communication, prioritization, and user support
5. **Continuous improvement** - Preventive measures and user education

Each activity includes detailed markdown documentation, annotated screenshots, and Jira ticket evidence to provide a complete view of the troubleshooting process.

---

## Navigation

- **[← Back to IT Labs](../)**
- **[Activity 1: Password Lockout →](Activity1_Password-Lockout/)**
- **[Activity 2: Multi-Ticket Priority Management →](Activity2_Multi-Ticket-Priority-Management/)**

---

## Future Activities

Additional helpdesk scenarios planned:
- Software installation and troubleshooting
- Printer configuration and common issues
- VPN connectivity problems
- Remote desktop support
- Group Policy troubleshooting
- System performance optimization