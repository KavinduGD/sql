# Backup

## using sqldump

- Create a separate user with the necessary permissions to perform backups.

```sql
CREATE USER 'backup_user'@'localhost'
IDENTIFIED BY 'BackupPassword123!';

GRANT SELECT, LOCK TABLES, SHOW VIEW, TRIGGER
ON test_db.*
TO 'backup_user'@'localhost';

GRANT PROCESS
ON *.*
TO 'backup_user'@'localhost';

FLUSH PRIVILEGES;
```

- This will promtt you for the password of the backup_user and then create a file named backup.sql in the current directory containing the backup of the test_db database.

```bash
mysqldump -u backup_user -p test_db > backup.sql
```

- We also can the add the password directly in the command, but this is not recommended for security reasons.

```bash
mysqldump -u backup_user -pBackupPassword123! test_db > backup.sql
```

```bash
mysqldump -u backup_user -pBackupPassword123! test_db > "backup_$(date '+%Y%m%d_%H%M%S').sql"
```

## How to restore a backup

```bash
mysql -u root -p test_db < backup.sql
```

---

## Upload backup to s3 Bucket using cron

```bash
#!/bin/bash

BACKUP_DIR="$HOME/sql_backup"
TIMESTAMP=$(date '+%Y%m%d_%H%M%S')

mkdir -p "$BACKUP_DIR"

BACKUP_FILE="$BACKUP_DIR/test_db_backup_${TIMESTAMP}.sql"

mysqldump \
-u backup_user \
-pBackupPassword123! \
test_db \
> "$BACKUP_FILE"

export AWS_PROFILE=aws_profile_name

aws s3 cp \
"$BACKUP_FILE" \
s3://aws_bucket_name/
```
