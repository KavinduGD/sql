# Constraints

## Primary Key Constraint

- Uniquely identifies each record in a table
- Ensures that the column(s) defined as the primary key cannot contain NULL values and must be unique across all records

```sql
create table employees(
    emp_id int primary key,
    name varchar(50),
    job varchar(20) default 'driver'
);
```

or

```sql
create table employees(
    emp_id int,
    name varchar(50),
    job varchar(20) default 'driver',
    primary key (emp_id)
);
```

### Auto_Increment Primary Key

- Automatically generates a unique value for the primary key column whenever a new record is inserted into the table

```sql
create table employees(
    emp_id int primary key auto_increment,
    name varchar(50),
    job varchar(20) default 'driver'
);
```

## Not Null Constraint - Ensures that a column cannot have a NULL value

```sql
create table bus (
numberplate varchar(30) not null,
seats int not null
);
```

## Defult Value - Specifies a default value for a column when no value is provided during insertion

```sql
create table bus (
numberplate varchar(30) not null,
seats int not null default 40
);
```

### Default and Not Null Together

```sql
seats int not null default 40
```

- In this example, the seats column cannot be NULL and will default to 40 if no value is provided during insertion.

```sql
seats int default 40
```

- In this example, the seats column can be NULL, but if no value is provided during insertion, it will default to 40.
