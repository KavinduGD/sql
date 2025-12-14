# Create

## insert into <table_name> (column1, column2, ...) values (value1, value2, ...); - Inserts a new row into the specified table with the provided values for each column

# Read

### select - Retrieves specific columns from all rows in the specified table

### where - Filters the results of a query based on specified conditions (Filtering Rows)

```sql
select name,age
from cats
where breed='Tabby';
```

```sql
select <column1>, <column2>, ...
from <table_name>
where <condition>;
```

### alias - Assigns a temporary name to a column or table in the result set for easier reference

```sql
select name as cat_name, age as cat_age
from cats;
```

```sql
select <column_name> as <alias_name>
from <table_name>;
```

# Update

```sql
update cats
set breed='Siamese'
where name='Tabby';
```

```sql
update <table_name>
set <column1>=<value1>, <column2>=<value2>, ...
where <condition>;
```

# Delete

```sql
delete from cats
where name='Tabby';
```

```sql
delete from <table_name>
where <condition>;
```
