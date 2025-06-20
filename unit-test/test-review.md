# Test Review

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to review the provided unit tests for the following:

- Check if the test names accurately describe the test content and intent.
- Identify any missing or redundant test cases.
- Assess if the tests cover both positive and negative scenarios.
- Suggest improvements for clarity, structure, and maintainability.
- Ensure that assertions are meaningful and relevant.
- Check for coverage of edge cases.
- Highlight any inconsistencies or anti-patterns.
- Find duplicate tests or similar logic that can be consolidated.

Provide a summary of issues found and actionable suggestions for improvement.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to review the provided unit tests for the following:

- Check if the test names accurately describe the test content and intent.
- Identify any missing or redundant test cases.
- Assess if the tests cover both positive and negative scenarios.
- Suggest improvements for clarity, structure, and maintainability.
- Ensure that assertions are meaningful and relevant.
- Check for coverage of edge cases.
- Highlight any inconsistencies or anti-patterns.
- Find duplicate tests or similar logic that can be consolidated.

Provide a summary of issues found and actionable suggestions for improvement.

Here are the unit tests to review:
---
def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-2, -3) == -5

def test_add_zero():
    assert add(0, 0) == 0

def test_add_large_numbers():
    assert add(1000000, 2000000) == 3000000

def test_add_returns_none():
    assert add(1, 2) is None
---

Please provide a summary of issues and suggestions.
```

Result:
```markdown
**Summary of Issues:**
- The test `test_add_returns_none` does not match its name or expected behavior; adding 1 and 2 should not return None.
- No tests for mixed positive and negative numbers (e.g., add(2, -3)).
- No tests for invalid input types (e.g., strings or None).
- All tests use hardcoded values; consider using parameterized tests for better coverage.

**Suggestions:**
- Rename or correct `test_add_returns_none` to reflect the actual expected behavior.
- Add tests for mixed sign inputs and invalid types.
- Use parameterized tests to reduce redundancy.
- Ensure all test names clearly describe the scenario being tested.
```
