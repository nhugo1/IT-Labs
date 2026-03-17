# Activity 1 — IIS Web Server Installation & Multi-Site Configuration

## Overview

Installation, configuration, and troubleshooting of Internet Information Services (IIS) on Windows Server 2022. Simulates real hosting team tasks — verifying a web server is operational, deploying content, hosting two isolated applications on a single server using port-based virtual hosting, and diagnosing errors through IIS access logs.

---

## Environment

| Resource | Role |
|---|---|
| Windows Server 2022 VM | IIS 10.0 host |
| IIS Manager (inetmgr) | Web server administration |
| Microsoft Edge | Browser-based verification |

---

## Lab Walkthrough

### Part 1 — Verify IIS Installation & Default Page

Confirmed IIS is installed and the Default Web Site is running by opening IIS Manager and browsing to `http://localhost`. The IIS 10 welcome page confirmed the W3SVC service is active and port 80 is bound correctly.

> Production note: a visible IIS welcome page is a security finding — it should be replaced with application content or a custom error page.

![IIS Manager showing Default Web Site in Started state alongside the IIS 10 welcome page at http://localhost](screenshots/Activity1_IIS-Default-Welcome-Page.png)

---

### Part 2 — Deploy Custom Web Content

Created `test.html` in `C:\inetpub\wwwroot` and verified it was served at `http://localhost/test.html`. Confirmed the full request pipeline — IIS received the request, matched the binding, resolved the physical path, and returned HTTP 200.

![Browser displaying http://localhost/test.html with custom content rendered alongside File Explorer showing test.html in wwwroot](screenshots/Activity1_Custom-Page-Deployed.png)

---

### Part 3 — Port-Based Virtual Hosting

Created a second isolated site (`InternalApp`) running on port 8080 with its own application pool (`InternalApp-Pool`) and physical path (`C:\inetpub\internalapp`). Both sites run simultaneously on one server — Default Web Site on port 80, InternalApp on port 8080.

![IIS Manager Application Pools list showing DefaultAppPool and the newly created InternalApp-Pool](screenshots/Activity1_AppPool-Created.png)

![IIS Manager Sites node showing Default Web Site on port 80 and InternalApp on port 8080 both in Started state](screenshots/Activity1_Second-Site-Added.png)

![Two browser tabs showing both sites responding on their respective ports](screenshots/Activity1_Both-Sites-Running.png)

**Isolation verified:** stopping `InternalApp-Pool` returned HTTP 503 on port 8080 while port 80 continued serving normally — confirming full process isolation between co-hosted applications.

![InternalApp-Pool stopped in IIS Manager — port 8080 returns 503 while port 80 continues serving normally](screenshots/Activity1_AppPool-Isolation-Proof.png)

---

## Key Concepts

| Term | Definition |
|---|---|
| Site | A logical website hosted by IIS; one server can host multiple sites simultaneously |
| Binding | Protocol + IP + port that routes incoming requests to the correct site |
| Application Pool | Isolated worker process (w3wp.exe) running one or more sites independently |
| Physical Path | Folder on disk where a site's files live |
| HTTP 200 | Request succeeded |
| HTTP 503 | Application pool is stopped or unavailable |

---

## Reflection

- Application pool isolation ensures one app crashing does not affect co-hosted applications — critical in multi-tenant hosting environments
- Port-based virtual hosting is one of three IIS methods; the others are IP-based and host-header-based (most common in production)
- In production: use host-header bindings with real domain names, configure HTTPS with a valid certificate, and assign a dedicated service account to each app pool identity

---

[← Back to Windows Server Administration](https://nhugo1.github.io/IT-Labs/Windows-Server-Administration/)
