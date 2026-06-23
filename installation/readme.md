# Install mysql in Ubuntu

- Update your package index

```bash
sudo apt update
```

- Install mysql-server

```bash
sudo apt install mysql-server -y
```

- Run the security script to set up password policies and remove insecure defaults (Follow the prompts to enable the password validation component, set a strong password, remove anonymous users, and disallow remote root logins.)

```bash
sudo mysql_secure_installation
```

- On newer Ubuntu versions, the MySQL root account authenticates using the OS auth_socket plugin instead of a password. To let MySQL Workbench log in, create a dedicated administrator or alter root.

```bash
sudo mysql
```

- Create a new database user

```sql
ALTER USER 'root'@'localhost'
IDENTIFIED WITH caching_sha2_password BY 'RootPassword123!';
FLUSH PRIVILEGES;
```

- Install mysql workbench

```bash
sudo snap install mysql-workbench-community
```

## User Management

- When you first log in to Mysql you can use `sudo mysql` command
- Before your ALTER USER command, root@localhost used the auth_socket plugin. That plugin doesn't check a password at all — instead, it checks whether the Linux OS user running the command matches the MySQL user name.
- Since you ran sudo mysql, you were authenticating as the Linux root user (via sudo), which matched MySQL's root user, so it let you in with no password needed.
- you switched root's auth method from auth_socket to caching_sha2_password. Now MySQL actually checks a password — but sudo mysql still tries to connect with no password (using password: NO), which is why it's denied.
- now use `mysql -u root -p`
