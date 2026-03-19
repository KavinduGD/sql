# Aggregate Functions

- Aggregate functions perform a calculation on a set of values and return a **single value**. They are often used in conjunction with the `GROUP BY` clause to perform calculations on groups of data.

## Count

```sql
SELECT COUNT(*) FROM employees;
```

## Sum

```sql
SELECT SUM(salary) FROM employees;
```

## Avg

```sql
SELECT AVG(salary) FROM employees;
```

## Min

```sql
SELECT MIN(salary) FROM employees;
```

## Max

```sql
SELECT MAX(salary) FROM employees;
```

# Group By

- Grouping data allows us to perform aggregate functions on subsets of data. For example, if we want to count the number of employees in each department, we can use the `GROUP BY` clause.
- 🛑 When we using `GROUP BY`, in the `SELECT` statement, we can only include columns that are either in the `GROUP BY` clause or aggregate functions.

```sql
SELECT department, COUNT(*)  as employee_count
FROM employees
GROUP BY department
ORDER BY employee_count DESC;
-- This will give us the number of employees in each department, ordered by the count in descending order.
```

## Group by with multiple columns

```sql
SELECT author_fname, author_lname, COUNT(*)
FROM books
GROUP BY author_lname, author_fname;
```

```sql
SELECT CONCAT(author_fname, ' ', author_lname) AS author,  COUNT(*)
FROM books
GROUP BY author;
```

# Subqueries

- Subqueries are queries nested inside another query. They can be used to perform calculations that depend on the results of another query.

```sql
select title, released_year
from books
where released_year=(select min(released_year)
                    from books);
-- This query will return the title and released year of the book(s) that were released in the earliest year.
```
