# Create test data for unit tests

## The prompt
```markdown
You are an AI assistant specialized in software development.
Your task is to generate test data for unit tests.

The output format is {json, csv, yaml, ...}.

The output shall {include, not include } errors in data (type, value, etc.).

The date shall use a specific format {ISO 8601, RFC 3339, custom format}.
```



## Example
```markdown
You are an AI assistant specialized in software development.
Your task is to generate test data for unit tests.

The output format is a mysql command to make a table.
The output shall {include,} errors in data (type, value, etc.).
Use a identified name for errors elements.

The test data shall be a 10 user table using all mysql data types with 5 users containing errors.
```

Result:
```sql
CREATE TABLE user (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  age TINYINT,
  balance DECIMAL(10,2),
  is_active BOOLEAN,
  created_at DATETIME,
  last_login TIMESTAMP,
  profile_picture BLOB,
  preferences JSON,
  birth_date DATE,
  login_time TIME,
  uuid BINARY(16),
  website_url TEXT,
  rating FLOAT,
  status ENUM('active', 'inactive', 'banned')
);

INSERT INTO user VALUES
  (1, 'alice', 'alice@example.com', 30, 1000.50, 1, '2023-01-01 10:00:00', '2023-01-01 10:00:00', NULL, '{"theme":"dark"}', '1990-05-15', '08:30:00', UNHEX('550e8400e29b41d4a716446655440000'), 'https://alice.com', 4.5, 'active'),
  (2, 'bob', 'bob@example.com', 28, 200.00, 0, '2023-02-01 12:00:00', '2023-02-01 12:00:00', NULL, '{"theme":"light"}', '1985-10-20', '09:45:00', UNHEX('550e8400e29b41d4a716446655440001'), 'https://bob.com', 3.7, 'inactive'),
  (3, 'carol', 'carol@example.com', 35, 150.75, 1, '2023-03-01 14:00:00', '2023-03-01 14:00:00', NULL, '{"theme":"blue"}', '1992-03-10', '11:20:00', UNHEX('550e8400e29b41d4a716446655440002'), 'https://carol.com', 4.2, 'banned'),
  (4, 'dave', 'dave@example.com', 40, 500.00, 1, '2023-04-01 16:00:00', '2023-04-01 16:00:00', NULL, '{"theme":"green"}', '1980-07-25', '10:15:00', UNHEX('550e8400e29b41d4a716446655440003'), 'https://dave.com', 2.1, 'active'),
  (5, 'eve', 'eve@example.com', 22, 300.00, 0, '2023-05-01 18:00:00', '2023-05-01 18:00:00', NULL, '{"theme":"red"}', '1998-11-30', '13:00:00', UNHEX('550e8400e29b41d4a716446655440004'), 'https://eve.com', 3.9, 'inactive'),

  (6, 'error_age', 'error_age@example.com', 256, 100.00, 1, '2023-06-01 20:00:00', '2023-06-01 20:00:00', NULL, '{"theme":"yellow"}', '1995-06-15', '15:00:00', UNHEX('550e8400e29b41d4a716446655440005'), 'https://errorage.com', 2.5, 'active'), -- ERROR_AGE: age out of TINYINT range
  (7, 'error_balance', 'error_balance@example.com', 27, 'notanumber', 1, '2023-07-01 22:00:00', '2023-07-01 22:00:00', NULL, '{"theme":"purple"}', '1993-09-21', '16:30:00', UNHEX('550e8400e29b41d4a716446655440006'), 'https://errorbalance.com', 3.1, 'inactive'), -- ERROR_BALANCE: balance not a number
  (8, 'error_email', 'error[at]example.com', 31, 400.00, 1, '2023-08-01 23:00:00', '2023-08-01 23:00:00', NULL, '{"theme":"orange"}', '1991-12-12', '17:45:00', UNHEX('550e8400e29b41d4a716446655440007'), 'https://erroremail.com', 4.0, 'banned'), -- ERROR_EMAIL: invalid email format
  (9, 'error_status', 'error_status@example.com', 29, 250.00, 1, '2023-09-01 08:00:00', '2023-09-01 08:00:00', NULL, '{"theme":"pink"}', '1996-04-18', '19:10:00', UNHEX('550e8400e29b41d4a716446655440008'), 'https://errorstatus.com', 2.8, 'unknown'), -- ERROR_STATUS: invalid ENUM value
  (10, 'error_datetime', 'error_datetime@example.com', 33, 350.00, 1, 'invalid-date', '2023-10-01 09:00:00', NULL, '{"theme":true}', '1994-08-22', '25:61:00', UNHEX('550e8400e29b41d4a716446655440009'), 'https://errordatetime.com', 'NaN', 'active'); -- ERROR_DATETIME: invalid date, preferences type, login_time, rating type
```