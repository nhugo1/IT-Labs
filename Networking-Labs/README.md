# Network+ Lab Series

A hands-on lab series built to reinforce CompTIA Network+ (N10-009) exam objectives through practical configuration, troubleshooting, and documentation. Each activity targets high-weight exam domains while producing portfolio-quality documentation and evidence.

---

## Lab Environment

| Resource | Role |
|---|---|
| Windows Server 2022 VM | Domain Controller — Labs.local |
| Windows 11 Enterprise VM | Domain-joined endpoint / VPN client |
| Cisco Packet Tracer 8.x | Switching, routing, VLAN, and ACL labs |
| Ubuntu Server VM | Linux endpoint for VPN and packet analysis labs |

---

## Labs

| # | Activity | Tools | Net+ Domain | Status |
|---|---|---|---|---|
| 1 | [VLAN Segmentation & Inter-VLAN Routing](./Activity1_VLAN-Segmentation/) | Cisco Packet Tracer | 1.0 / 2.0 | ✅ Complete |
| 2 | [Remote Access VPN with Windows RRAS](./Activity2_Remote-Access-VPN/) | Windows Server 2022, Windows 11 | 4.0 | ✅ Complete |
| 3 | [Wireshark Packet Capture & Protocol Analysis](./Activity3_Wireshark-Analysis/) | Windows 11 | 1.0 / 5.0 | ✅ Complete |
| 4 | [DNS & DHCP Configuration & Troubleshooting](./Activity4_DNS-DHCP-Configuration-Troubleshooting/) | Windows Server 2022, Windows 11 | 1.0 / 5.0 | ✅ Complete |
| 5 | IP Addressing & Subnetting Design | Packet Tracer + Win VMs | 1.0 | 🔜 Upcoming |
| 6 | Firewall ACL Configuration & Traffic Filtering | Cisco Packet Tracer | 4.0 | 🔜 Upcoming |
| 7 | Static & Dynamic Routing (OSPF) | Cisco Packet Tracer | 2.0 | 🔜 Upcoming |
| 8 | .[Network Troubleshooting — OSI-Based Methodology](./Activity8_Network-Troubleshooting/) | Win VMs + Packet Tracer | 5.0 | ✅ Complete |

---

## Net+ Domain Coverage

| Domain | Weight | Labs Targeting This Domain |
|---|---|---|
| 1.0 Networking Concepts | 23% | 1, 3, 4, 5 |
| 2.0 Network Implementation | 20% | 1, 7 |
| 3.0 Network Operations | 17% | 4 |
| 4.0 Network Security | 20% | 2, 6 |
| 5.0 Network Troubleshooting | 20% | 3, 4, 8 |

---

## Skills Demonstrated

- VLAN design, 802.1Q trunking, and inter-VLAN routing (router-on-a-stick)
- Remote access VPN configuration using Windows RRAS and L2TP/IPSec
- Packet capture and protocol analysis with Wireshark (DNS, ICMP, TCP, ARP)
- OSI model protocol identification and field-level packet analysis
- DNS and DHCP server configuration, reservation management, and troubleshooting
- APIPA identification and DHCP lease failure diagnosis
- DNS record types (A, PTR, CNAME) and resolution troubleshooting with nslookup
- IP addressing, subnetting, and network design
- Firewall ACL rule design and traffic filtering
- Routing protocol configuration (OSPF)
- Structured OSI-based network troubleshooting methodology

---

[← Back to IT Portfolio](https://nhugo1.github.io/IT-Labs/)
