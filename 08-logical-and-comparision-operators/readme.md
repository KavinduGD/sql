# Comparison Operators in SQL

## 1. Not Equal To

```sql
SELECT * FROM employees
WHERE department != 'Sales';
```

## 2. Not Like

not like is used to filter records that do not match a specified pattern.

```sql
SELECT * FROM customers
WHERE name NOT LIKE 'A%';
```

## 3. Greater Than

```sql
SELECT * FROM products
WHERE price > 100;
```

## 4. Less Than

```sql
SELECT * FROM orders
WHERE quantity < 10;
```

## 5. Greater Than or Equal To

```sql
SELECT * FROM employees
WHERE salary >= 50000;
```

## 6. Less Than or Equal To

```sql
SELECT * FROM products
WHERE stock <= 20;
```

# Logical Operators in SQL

## 1. AND

```sql
SELECT * FROM employees
WHERE department = 'Sales' AND salary > 50000;
```

## 2. OR

```sql
SELECT * FROM customers
WHERE city = 'New York' OR city = 'Los Angeles';
```

## 3. NOT

```sql
SELECT * FROM products
WHERE NOT category = 'Electronics';
```

## 4. IN

IN operator is used to filter records that match any value in a specified list. Basically, it is a shorthand for multiple OR conditions.

```sql
SELECT * FROM orders
WHERE status IN ('Pending', 'Processing');
```

## 5. BETWEEN

```sql
SELECT * FROM products
WHERE price BETWEEN 50 AND 100;
```

## 6. CASE

The CASE statement in SQL is essentially the "If-Then-Else" logic of the database world. It allows you to create new categories or labels for your data directly within your query results without actually changing the data in the table.

```sql
SELECT title, stock_quantity,
    CASE
        WHEN stock_quantity BETWEEN 0 AND 10 THEN 'Restock Immediately'
        WHEN stock_quantity BETWEEN 11 AND 50 THEN 'Low Stock'
        ELSE 'In Stock'
    END AS inventory_status
FROM books;
-- result
-- title           | stock_quantity | inventory_status
-- --------------- | -------------- | -----------------
-- Book A          | 5              | Restock Immediately
-- Book B          | 20             | Low Stock
-- Book C          | 100            | In Stock
```

## 7. IS NULL

```sql
SELECT * FROM employees
WHERE manager_id IS NULL;
```
