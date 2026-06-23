# RDS Backup

## 1. Automated backups:

- RDS takes these for you automatically (daily snapshot + transaction logs for point-in-time recovery).
- They're tied to a retention period you set, anywhere from 1 to 35 days.
- Once a backup falls outside that window, RDS automatically deletes it.
- If you delete the RDS instance itself, automated backups are deleted too (unless you choose to keep a final snapshot).

## 2. Manual snapshots:

- You trigger these yourself (console, CLI, or API) whenever you want.
- They are not governed by the retention period setting at all.
- Once created, a manual snapshot persists indefinitely — AWS will not auto-delete it after any number of days.
- It even survives deletion of the original RDS instance.
- You only lose it if you (or something with the right IAM permissions) explicitly delete it.
- You do pay ongoing storage cost for it, though, since it sticks around forever unless removed.
