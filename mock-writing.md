# Create Mocks of Dependencies

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to generate mock implementations for the dependencies of the provided code or component.

- Identify all external dependencies (e.g., services, APIs, databases, modules).
- Create mock objects or functions that simulate the behavior of these dependencies.
- Ensure mocks are configurable for different test scenarios (success, failure, edge cases).
- Use the appropriate mocking framework or library for the target language.
- Provide clear and concise code with comments explaining each mock.

Return only the mock code and brief usage instructions.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to generate mock implementations for the dependencies of the provided code or component.

- Identify all external dependencies (e.g., services, APIs, databases, modules).
- Create mock objects or functions that simulate the behavior of these dependencies.
- Ensure mocks are configurable for different test scenarios (success, failure, edge cases).
- Use the appropriate mocking framework or library for the target language.
- Provide clear and concise code with comments explaining each mock.

Here is the code to review:
---
# Python example
def fetch_user_profile(user_id, db_client):
    user = db_client.get_user(user_id)
    if not user:
        raise ValueError("User not found")
    return user
---

Please provide the mock code and usage instructions.
```

Result:
```python
import unittest
from unittest.mock import Mock

# Mock for db_client
mock_db_client = Mock()
mock_db_client.get_user.return_value = {"id": 1, "name": "Alice"}

# Usage in a test
def test_fetch_user_profile_success():
    result = fetch_user_profile(1, mock_db_client)
    assert result["name"] == "Alice"

# To simulate user not found
mock_db_client.get_user.return_value = None
def test_fetch_user_profile_not_found():
    try:
        fetch_user_profile(2, mock_db_client)
    except ValueError as e:
        assert str(e) == "User not found"
