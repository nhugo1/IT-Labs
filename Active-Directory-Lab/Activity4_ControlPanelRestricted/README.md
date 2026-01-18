ACTIVITY 4: IMPLEMENTING GROUP POLICY OBJECTS (GPO) AND USER RESTRICTIONS

OBJECTIVE: To demonstrate administrative control over the user environment by implementing Group Policy Objects (GPO) designed to prevent unauthorized system modifications and harden the workstation OS.

TASKS PERFORMED:

    GPO CREATION

    Created a custom Group Policy Object within the Group Policy Management Console (GPMC) to manage departmental user restrictions.

    Identified the specific Administrative Template path for system-level lockdown.

    ENFORCING CONTROL PANEL RESTRICTIONS

    Configured the "Prohibit access to Control Panel and PC settings" policy.

    This setting was enabled to disable "Control.exe" and "SystemSettings.exe," effectively blocking users from accessing hardware settings, account configurations, and system properties.

    Verified that the policy removes the Control Panel from the Start screen and File Explorer.

    POLICY APPLICATION

    Linked the GPO to the appropriate Organizational Unit (OU) to ensure targeted enforcement for standard users while maintaining administrative access.

    Prepared the environment for a background policy refresh on the Windows client.

VERIFICATION:

    Confirmed the policy was set to "Enabled" within the Group Policy Management Editor.

    Validated that the policy is supported on all client versions from Windows 2000 through Windows 11.

CAPTURED EVIDENCE FILES:

    Activity4_ControlPanelRestricted.png (Shows the enabled GPO configuration in the Management Editor)
