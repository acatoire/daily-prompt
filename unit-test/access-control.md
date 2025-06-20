# Access Control Test Generation

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to generate comprehensive access control test cases based on the provided list of users, their roles, and entitlements.

- Analyze the roles and entitlements for each user.
- Generate test cases for all relevant combinations of roles and entitlements.
- Ensure coverage of positive (allowed) and negative (denied) scenarios.
- Format the output as code or structured data suitable for automated testing.
- Clearly indicate which scenarios should pass and which should fail.

Return the generated test cases and a brief explanation.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to generate comprehensive access control test cases based on the provided list of users, their roles, and entitlements.

Here is the input:
---
users = [
  {"username": "alice", "roles": ["admin"], "entitlements": ["read", "write", "delete"]},
  {"username": "bob", "roles": ["user"], "entitlements": ["read"]},
  {"username": "carol", "roles": ["manager"], "entitlements": ["read", "write"]}
]
---

Please generate test cases for all combinations of roles and entitlements, indicating which actions should be allowed or denied.
```

Result:
```python
# Test cases for access control

def test_admin_can_delete():
    assert can_perform_action("alice", "delete") == True  # admin has delete entitlement

def test_user_cannot_delete():
    assert can_perform_action("bob", "delete") == False  # user does not have delete entitlement

def test_manager_can_write():
    assert can_perform_action("carol", "write") == True  # manager has write entitlement

def test_user_can_read():
    assert can_perform_action("bob", "read") == True  # user has read entitlement

def test_manager_cannot_delete():
    assert can_perform_action("carol", "delete") == False  # manager does not have delete entitlement
```
