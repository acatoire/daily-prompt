# Test Tagging

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to review and tag the provided test cases.

- Check that each test case has at least one tag.
- Ensure at least one test is tagged as "smoke".
- Verify that each tag is correct and matches the test's purpose.
- Confirm that all tags are from the provided allowed list.
- Suggest improvements or corrections if tags are missing, incorrect, or not in the allowed list.

Return a summary of issues and suggestions for improvement.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to review and tag the provided test cases.

Allowed tags: smoke, regression, integration, unit, performance

Here are the test cases:
---
def test_login_success():  # tags: smoke, regression
    ...

def test_login_failure():  # tags: regression
    ...

def test_api_performance():  # tags: perf
    ...

def test_data_integration():  # tags: integration
    ...
---

Please check the tags for each test, ensure at least one smoke test, and verify all tags are from the allowed list. Suggest corrections if needed.
```

Result:
```markdown
**Issues found:**
- `test_api_performance` uses tag "perf" which is not in the allowed list. Should be "performance".
- All tests except `test_login_success` are missing the "smoke" tag.
- All other tags are correct.

**Suggestions:**
- Change "perf" to "performance" for `test_api_performance`.
- Consider tagging at least one more critical test as "smoke" if appropriate.
- Ensure all tags are from the allowed list: smoke, regression, integration, unit, performance.
```
