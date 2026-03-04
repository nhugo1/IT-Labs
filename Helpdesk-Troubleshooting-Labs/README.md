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

### [Activity 3: USB WiFi Adapter Root Cause Analysis](Activity3_USB-WiFi-Adapter-Root-Cause-Analysis/)
**Scenario:** Intermittent USB WiFi adapter failure requiring physical reconnection - real production issue

**Problem:** User's Netgear A7500 WiFi adapter experiencing complete functionality loss with no networks visible. Issue recurring twice within 5 days, requiring manual USB replug to restore service.

**Skills Demonstrated:**
- Windows Event Viewer forensics and log analysis
- Root cause analysis (Event ID 10002 - WLAN extensibility module crash)
- Driver diagnostics and version assessment
- Hardware support lifecycle evaluation
- Clean driver reinstallation procedures
- USB power management configuration
- Preventive maintenance implementation
- Professional documentation of known hardware limitations
- Monitoring plan establishment

**Key Technical Findings:**
- Identified crashing driver module: `mtkihvux.dll` (MediaTek WiFi driver)
- Outdated driver: version 1.0.0.125 from 11/22/2023 (26+ months old)
- No manufacturer driver updates available (end-of-support hardware)
- Implemented power management optimizations as mitigation

**Environment:** Windows 11 Enterprise, Netgear A7500 Nighthawk USB WiFi Adapter

**Time to Resolution:** 35 minutes

**[View Full Activity →](Activity3_USB-WiFi-Adapter-Root-Cause-Analysis/)**

---

### [Activity 4: Capacity Analysis & Hardware Lifecycle Recommendation](Activity4_Sluggish-Performance/)
**Scenario:** System experiencing severe performance degradation due to hardware resource exhaustion

**Problem:** User reports 5-minute login times, constant application freezes, and "Not Responding" errors. System unable to handle basic tasks like opening PDFs or multiple browser tabs.

**Skills Demonstrated:**
- Resource Monitor analysis (Memory and Disk tabs)
- Task Manager performance diagnostics
- Memory saturation identification
- Disk I/O bottleneck analysis
- Baseline load testing methodology
- Hardware capacity planning
- Business-focused escalation and recommendations
- Professional technical documentation

**Key Technical Findings:**
- Physical RAM nearly maxed out with zero user applications running
- System process (PID 4) showing high disk activity from pagefile thrashing
- Background OS processes (`tiworker.exe`) saturating remaining disk I/O
- Hardware incapable of meeting baseline Windows OS requirements

**Resolution:** Escalated to Procurement with hardware lifecycle recommendation based on capacity analysis

**Environment:** Windows 10 VM with 2GB RAM (intentionally constrained)

**[View Full Activity →](Activity4_Sluggish-Performance/)**

---

## Skills Summary

### Technical Competencies
- Windows 10, 11 and Server 2022 administration
- Active Directory user management
- Device Manager and Event Viewer diagnostics
- Resource Monitor and Task Manager analysis
- Memory and disk I/O troubleshooting
- Network troubleshooting (ping, ipconfig, firewall configuration)
- File sharing (SMB, permissions, mapped drives)
- Email client troubleshooting (Outlook/Exchange)
- Driver and hardware troubleshooting
- USB power management and configuration
- Windows boot process and power management
- Root cause analysis using system logs
- Hardware capacity planning and lifecycle assessment

### Troubleshooting Methodology
- Systematic diagnostic approach
- Root cause analysis vs. symptom treatment
- Event log forensics and pattern identification
- Baseline load testing
- Isolation techniques (application vs system-wide issues)
- Documentation of troubleshooting steps
- Preventive measures and user education
- Hardware lifecycle assessment
- Monitoring and escalation planning
- Evidence-based decision making

### Professional Skills
- Ticket prioritization and triage
- SLA awareness and compliance
- User communication and expectation management
- Professional documentation in Jira
- Time management across concurrent issues
- User education for self-service resolution
- Honest assessment of technical limitations
- Follow-up and monitoring protocols
- Cross-departmental escalation (Procurement)
- Business impact assessment

### Security Awareness
- Defense-in-depth security (Share + NTFS permissions)
- Network profile configuration (Private vs Public)
- Principle of least privilege
- Firewall configuration best practices
- User identity verification procedures

---

## Tools & Technologies

**Platforms:**
- Windows 10 (VM environment)
- Windows 11 Enterprise
- Windows Server 2022 (Domain Controller)
- Active Directory

**Applications:**
- Jira Service Management (ticket management)
- Microsoft Outlook
- Device Manager
- Event Viewer (System log analysis)
- Resource Monitor
- Task Manager
- Windows Defender Firewall
- File Explorer
- Command Prompt

**Networking:**
- Workgroup (peer-to-peer) configuration
- SMB file sharing
- Network discovery and diagnostics
- USB WiFi adapter configuration

**Hardware:**
- Netgear A7500 Nighthawk USB WiFi Adapter
- Domain-joined workstations
- Network infrastructure
- Virtualized environments (resource-constrained testing)

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

**VM Environment:**
- Windows 10 with intentionally constrained resources (2GB RAM)
- Used for capacity analysis and performance troubleshooting scenarios

---

## Portfolio Purpose

These labs demonstrate readiness for entry-level helpdesk and IT support positions by showcasing:

1. **Real-world scenarios** - Common issues faced in production environments, including authentic hardware failures
2. **Professional processes** - Industry-standard ticketing and documentation
3. **Technical depth** - Beyond surface-level fixes to root cause analysis
4. **Soft skills** - Communication, prioritization, and user support
5. **Continuous improvement** - Preventive measures and user education
6. **Honest problem-solving** - Acknowledging limitations and planning appropriate escalations
7. **Business awareness** - Understanding IT's role in organizational productivity and hardware lifecycle management

Each activity includes detailed markdown documentation, annotated screenshots, and Jira ticket evidence to provide a complete view of the troubleshooting process.

---

## Navigation

- **[← Back to IT Labs](../)**
- **[Activity 1: Password Lockout →](Activity1_Password-Lockout/)**
- **[Activity 2: Multi-Ticket Priority Management →](Activity2_Multi-Ticket-Priority-Management/)**
- **[Activity 3: USB WiFi Adapter Root Cause Analysis →](Activity3_USB-WiFi-Adapter-Root-Cause-Analysis/)**
- **[Activity 4: Capacity Analysis & Hardware Lifecycle Recommendation →](Activity4_Sluggish-Performance/)**

---

## Future Activities

Additional helpdesk scenarios planned:
- Network connectivity troubleshooting (DNS, DHCP, gateway issues)
- Printer configuration and spooler problems
- Software installation and application crashes
- VPN connectivity problems
- Remote desktop support
- Group Policy troubleshooting
- System performance optimization

---

**Note:** Activities 3 and 4 showcase real-world troubleshooting scenarios - Activity 3 documents a genuine production issue, while Activity 4 demonstrates hardware capacity analysis and business-focused escalation procedures. These activities provide authentic evidence of diagnostic capabilities and professional problem-solving methodology.

[← Back to IT Portfolio](https://nhugo1.github.io/IT-Labs/)
