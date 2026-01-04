# String Functions

## Concat

- CONCAT is used to join multiple strings into one.

```sql
SELECT CONCAT('Hello, ', 'world!') AS greeting;
-- Result: 'Hello, world!'
```

```
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;
-- Result: 'John Doe' (assuming first_name is 'John' and last_name is 'Doe')
```

## Substring

- SUBSTRING is used to extract a portion of a string.

```sql
SELECT SUBSTRING('Hello, world!', 1, 5) AS part;
-- Result: 'Hello'
```

```sql
SELECT SUBSTRING(description, 10, 20) AS excerpt
FROM articles;
-- Result: Extracts 20 characters starting from the 10th character of the description
```

```sql
select concat(substring(author_fname,1,1),'.',author_lname) as name
from books;
-- Result: 'J.Doe' (assuming author_fname is 'John' and author_lname is 'Doe')
```

## Replace

- REPLACE is used to replace occurrences of a specified substring with another substring.

```sql
SELECT REPLACE('Hello, world!', 'world', 'SQL') AS new_greeting;
-- Result: 'Hello, SQL!'
```

```sql
SELECT REPLACE(notes, 'old', 'new') AS updated_notes
FROM records;
-- Result: Replaces all occurrences of 'old' with 'new' in the notes column
```

## Reverse

- REVERSE is used to reverse the characters in a string.

```sql
SELECT REVERSE('Hello, world!') AS reversed_string;
-- Result: '!dlrow ,olleH'
```

```sql
SELECT REVERSE(username) AS reversed_username
FROM users;
-- Result: Reverses the characters in the username column
```

## Char Length

- CHAR_LENGTH is used to get the number of characters in a string.

```sql
SELECT CHAR_LENGTH('Hello, world!') AS length;
-- Result: 13
```

```sql
SELECT CHAR_LENGTH(description) AS desc_length
FROM products;
-- Result: Returns the length of the description column
```

## Lower and Upper

- LOWER converts a string to lowercase, and UPPER converts a string to uppercase.

```sql
SELECT LOWER('Hello, WORLD!') AS lower_case;
-- Result: 'hello, world!'
```

```sql
SELECT UPPER('Hello, world!') AS upper_case;
-- Result: 'HELLO, WORLD!'
```

## Trim

- TRIM is used to remove leading and trailing spaces from a string.

```sql
SELECT TRIM('   Hello, world!   ') AS trimmed_string;
-- Result: 'Hello, world!'
```

## Insert

- INSERT is used to insert a substring into a string at a specified position.

```sql
SELECT INSERT('Hello, world!', 8, 0, 'beautiful ') AS new_string
-- Result: 'Hello, beautiful world!'
```

## Left and Right

- LEFT and RIGHT are used to extract a specified number of characters from the left or right side of a string.

```sql
SELECT LEFT('Hello, world!', 5) AS left_part;
-- Result: 'Hello'
```
