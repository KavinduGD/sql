# Data types in SQL

## Char

- Char is a fixed-length character data type. It is used to store strings of a specified length. If the string is shorter than the specified length, it will be padded with spaces. For example, if you define a column as `CHAR(10)` and insert the value 'Hello', it will be stored as 'Hello ' (with 5 trailing spaces).

- Char is suitable for storing data that has a consistent length, such as postal codes or phone numbers.

## Varchar

- Varchar is a variable-length character data type. It is used to store strings of varying lengths. Unlike Char, Varchar does not pad the string with spaces. For example, if you define a column as `VARCHAR(10)` and insert the value 'Hello', it will be stored as 'Hello' without any trailing spaces.

- Varchar is suitable for storing data that can vary in length, such as names or email addresses.

## Double

- Double is a floating-point data type that can store large numbers with decimal points. It is used to store approximate numeric values. The precision of a Double is typically around 15-16 digits.

- Double is suitable for storing data that requires a high degree of precision, such as scientific measurements or financial calculations.

## Float

- Float is a floating-point data type that can store smaller numbers with decimal points. It is used to store approximate numeric values. The precision of a Float is typically around 7 digits.

- Float is suitable for storing data that does not require a high degree of precision, such as simple measurements or estimates.

## Date

- Date is a data type that is used to store dates. It is used to store dates in the format 'YYYY-MM-DD'.

## Time

- Time is a data type that is used to store time. It is used to store time in the format 'HH:MM:SS'.

## DateTime

- DateTime is a data type that is used to store both date and time. It is used to store date and time in the format 'YYYY-MM-DD HH:MM:SS'.

### CURDATE() , CURTIME() , NOW()

- CURDATE() - Returns the current date.
- CURTIME() - Returns the current time.
- NOW() - Returns the current date and time.

eg:

```sql
insert into employees (name, email, created_at)
values ('John Doe', [EMAIL_ADDRESS]', NOW());
```

### Day() , Month() , Year()

- Day() - Returns the day of the month.
- Month() - Returns the month of the year.
- Year() - Returns the year.

eg:

```sql
SELECT DAY(created_at), MONTH(created_at), YEAR(created_at)
FROM employees;
-- output: 22, 3, 2026
```

### Date_format() , Time_format()

- Date_format() - Formats a date in the specified format.
- Time_format() - Formats a time in the specified format.

eg:

```sql
SELECT DATE_FORMAT(created_at, '%d-%m-%Y')
FROM employees;
-- output: 22-03-2026
```
