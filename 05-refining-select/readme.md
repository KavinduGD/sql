# Refining Select

## Distinct

- eliminates duplicate rows from the result set

```sql
SELECT DISTINCT column1, column2
FROM table_name;
```

```sql
SELECT DISTINCT country
FROM customers;
```

## Order By

- sorts the result set by one or more columns

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];
```

```sql
SELECT first_name, last_name, country
FROM customers
ORDER BY country ASC, last_name DESC;
```

## Limit

- restricts the number of rows returned by the query

```sqlsql
SELECT column1, column2
FROM table_name
LIMIT number_of_rows;
```

```sql
SELECT first_name, last_name
FROM customers
LIMIT 10;
```

## Like

- filters results based on pattern matching using wildcards
- `%` matches any sequence of characters (including zero characters)
- `_` matches a single character

```sqlsql
SELECT column1, column2
FROM table_name
WHERE column1 LIKE 'pattern';
```

```sql
SELECT first_name, last_name
FROM customers
WHERE last_name LIKE 'S%';
```

```sql
SELECT first_name, last_name
FROM customers
WHERE first_name LIKE '___a';
```
