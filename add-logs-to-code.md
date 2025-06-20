# Add Logs to a Codebase

## The prompt
```markdown
You are an AI assistant specialized in software development.
Your task is to add logging to a provided codebase.

- Focus on printing variable values in the format 'name = value'.
- Add logs to indicate the flow of the code with clear, identifiable steps (e.g., 'Step 1', 'Step 2', or action descriptions like 'Create', 'Push', etc.).
- Use the preferred logging format: `flog.debug()`, `console.log()`, or `printf()` as appropriate for the language.

Return the updated code with added logs and a brief explanation.
```

## Example
```markdown
You are an AI assistant specialized in software development.
Your task is to add logging to the provided Python code.

Here is the code:
---
def process_data(data):
    result = []
    for item in data:
        value = item * 2
        result.append(value)
    return result
---

Please add logs to trace variable values and code flow.
```

Result:
```python
def process_data(data):
    print("Step 1: Start processing data")
    print(f"data = {data}")
    result = []
    for idx, item in enumerate(data):
        print(f"Step 2: Processing item {idx}, item = {item}")
        value = item * 2
        print(f"value = {value}")
        result.append(value)
    print(f"Step 3: Finished processing, result = {result}")
    return result
```
