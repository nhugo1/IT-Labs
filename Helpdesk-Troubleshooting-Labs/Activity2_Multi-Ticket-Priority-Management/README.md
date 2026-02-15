# Activity 2: Multi-Ticket Priority Management

## Overview
This activity simulates a realistic helpdesk scenario where three tickets arrived simultaneously, requiring immediate triage and prioritization based on business impact. Demonstrates ability to assess competing priorities, communicate with users about wait times, and systematically resolve issues in order of urgency.

---

## Scenario
Three helpdesk tickets were received within a short time window, each requiring different levels of urgency and technical approach. All tickets needed assessment, prioritization, and resolution while maintaining professional communication with affected users.

---

## Prioritization Decision

### Priority Assessment

| Ticket | Priority | Business Impact | Workaround Available? |
|--------|----------|-----------------|----------------------|
| **KAN-3** | P1 - Critical | User completely unable to access network. Time-sensitive client presentation at risk. | USB mouse for navigation only - no network access |
| **KAN-4** | P2 - Medium | Email critical for business, time-sensitive sales communications | Yes - webmail (Outlook Web Access) |
| **KAN-2** | P3 - Low | Quality of life improvement, no immediate business blocker | Yes - USB drives for file transfer |

### Resolution Order Rationale

**1st Priority: KAN-3 (Critical)**
- User completely blocked from core job functions
- No effective workaround for network access
- Time-sensitive business impact (client presentation same day)
- Resolved first to restore user productivity

**2nd Priority: KAN-4 (Medium)**  
- Important business function (email) but workaround exists
- Time-sensitive sales proposals need sending
- Medium impact - addressed after critical issue resolved

**3rd Priority: KAN-2 (Low)**
- Enhancement request with functional workaround
- No immediate business blocker
- Addressed last after urgent issues resolved

---

## Tickets Resolved (In Order)

### 1. KAN-3: System Bus Failure Resolution (P1 - Critical)
**User:** Lisa Martinez (Marketing Manager)

**Issue:**  
Laptop touchpad completely unresponsive and Wi-Fi unable to connect to network. User blocked from accessing email, files, and cloud applications with a time-sensitive client presentation scheduled for 2 PM.

**Root Cause:**  
AMD GPIO Controller driver failed to initialize during Windows boot due to Fast Startup preserving corrupted driver state. Cascading failure affected all GPIO-dependent hardware (touchpad, Wi-Fi adapter).

**Resolution:**
- Diagnosed through ipconfig, Device Manager, and Event Viewer analysis
- Manually re-initialized GPIO Controller driver (disable/re-enable)
- Immediate functionality restored
- Disabled Fast Startup as preventive measure

**Outcome:**  
✅ Touchpad and Wi-Fi fully operational  
✅ User able to access presentation materials  
✅ Preventive configuration implemented  
✅ Resolution time: 2 hours 30 minutes

**[Full Documentation →](KAN-3_Touchpad-WiFi-Critical-Failure/KAN-3_Touchpad-WiFi-Critical-Failure.md)**

---

### 2. KAN-4: Outlook Connection Issue Resolution (P2 - Medium)
**User:** Michael Chen (Sales Manager)

**Issue:**  
Outlook stuck on "Trying to connect..." and unable to send or receive emails. User restarted Outlook multiple times with no improvement. Time-sensitive sales proposals pending.

**Root Cause:**  
Airplane mode accidentally enabled on user's computer, disabling all network adapters and preventing Outlook from connecting to Exchange server.

**Resolution:**
- Verified Outlook connection error
- Network diagnostics confirmed no connectivity
- Identified Airplane mode enabled via Quick Settings
- Disabled Airplane mode, network and Outlook restored automatically
- Educated user on prevention and self-service resolution

**Outcome:**  
✅ Email functionality restored  
✅ User able to send sales proposals  
✅ User trained to identify/resolve independently  
✅ Resolution time: 15 minutes

**[Full Documentation →](KAN-4_Outlook-Connection-Issue/KAN-4_Outlook-Connection-Issue.md)**

---

### 3. KAN-2: Workgroup File Share Configuration (P3 - Low)
**User:** Sarah Chen (Accounting Department)

**Issue:**  
User requested setup of network file sharing between laptop and desktop computers. Currently using USB drives for file transfers, which is inefficient and creates version control issues.

**Root Cause:**  
New setup request - not a break-fix scenario. Enhancement to improve workflow efficiency.

**Resolution:**
- Configured Windows Firewall on both machines (File and Printer Sharing)
- Enabled Network Discovery
- Created shared folder structure (C:\LabShare\Accounting)
- Configured Share and NTFS permissions
- Mapped network drive (Z:) for easy access
- Tested read/write permissions successfully

**Outcome:**  
✅ File sharing operational between both computers  
✅ Mapped drive for convenient access  
✅ Scalable folder structure for future expansion  
✅ Resolution time: 1 hour 30 minutes

**[Full Documentation →](KAN-2_File-Share-Setup/KAN-2_File-Share-Setup.md)**

---

## Skills Demonstrated

### Priority Management & Triage
- Business impact assessment
- SLA-based priority assignment
- Workaround identification and communication
- User expectation management
- Systematic resolution ordering

### Technical Troubleshooting
- Windows driver and hardware diagnostics
- Network connectivity troubleshooting
- System bus and PnP subsystem knowledge
- Workgroup file sharing configuration
- Outlook/Exchange connectivity
- Event Viewer forensics

### Professional Communication
- Clear priority justifications to users
- Realistic timeline estimates
- User education for prevention
- Comprehensive documentation
- Professional ticket management

### Time Management
- Efficient multi-ticket queue handling
- Focus on highest-impact issues first
- Parallel communication while working

---

## Technical Environment

**Systems:**
- Windows 11 Enterprise (desktop and laptop)
- Microsoft Outlook (New Outlook)
- Home WiFi network (workgroup environment)

**Tools Used:**
- Jira (ticket management)
- Device Manager
- Event Viewer
- Command Prompt (ping, ipconfig)
- Windows Defender Firewall
- File Explorer
- Windows Quick Settings
- Control Panel

---

## Key Takeaways

This activity demonstrates real-world helpdesk decision-making:

1. **Not all urgent requests are critical** - Email was important but had a workaround (P2), while complete inability to work was critical (P1)

2. **Communicate during wait times** - Users with lower-priority tickets were informed of timeline and provided workarounds

3. **Different problems require different approaches** - Complex driver issue (2.5 hours) vs simple configuration check (15 minutes) vs new setup (1.5 hours)

4. **Prevention matters** - Didn't just fix issues, implemented preventive measures and user education

5. **Documentation is essential** - Clear notes support knowledge sharing and future troubleshooting

---

## Folder Structure