# Database

## show databases - Lists all databases in the MySQL server

## create database <database_name> - Creates a new database with the specified name

## drop database <database_name> - Deletes the specified database and all its contents

## use <database_name> - Switches to the specified database for subsequent operations

## select database() - Displays the name of the currently used database

# Tables

## Data Types

### INT - Integer data type for whole numbers

- can be store whole numbers without decimal points (till 2147483647)

### VARCHAR(size) - Variable-length string data type

- can store strings with a maximum length defined by size (up to 65535 bytes)

```sql
VARCHAR(255) -- can store strings up to 255 characters long
```

## Creating Tables

```sql
create table bus (
numberplate varchar(30),
seats int
);
```

## show tables - Lists all tables in the currently selected database

## describe <table_name> - Displays the structure of the specified table, including column names, data types, and constraints

## show columns from <table_name> - Lists all columns in the specified table along with their data types and attributes

## drop table <table_name> - Deletes the specified table and all its data
