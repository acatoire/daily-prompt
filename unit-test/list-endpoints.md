# List Endpoints Without Tests

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to analyze the provided codebase or API specification and:

- List all API endpoints.
- Identify which endpoints do not have corresponding unit or integration tests.
- Suggest test cases for uncovered endpoints.
- Format the output as a checklist or table for easy tracking.

Return the list of endpoints, missing tests, and suggestions for coverage.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to list all API endpoints and identify which ones lack tests.

Here is the API specification:
---
GET /users
POST /users
GET /users/{id}
DELETE /users/{id}
---

Here are the existing tests:
---
test_get_users
test_post_users
---

Please list endpoints without tests and suggest test cases.
```

Result:
```markdown
| Endpoint           | Test Exists      | Suggested Test Name      |
|--------------------|-----------------|-------------------------|
| GET /users         | Yes              | test_get_users          |
| POST /users        | Yes              | test_post_users         |
| GET /users/{id}    | No               | test_get_user_by_id     |
| DELETE /users/{id} | No               | test_delete_user_by_id  |

**Endpoints missing tests:**
- GET /users/{id}
- DELETE /users/{id}

**Suggested test cases:**
- test_get_user_by_id: Should retrieve a user by ID and handle not found.
- test_delete_user_by_id: Should delete a user by ID and handle not found.
```
