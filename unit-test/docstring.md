# Docstring Code Completion and Check

## The prompt
```markdown
You are an AI assistant specialized in software development and documentation.
Your task is to:

- Complete missing or incomplete docstrings for the provided code.
- Check that all docstrings accurately describe the function, parameters, and return values.
- Ensure docstrings follow the project's style guide (e.g., Google, NumPy, or reStructuredText).
- Suggest improvements for clarity, completeness, and consistency.

Return the updated code with improved docstrings and a summary of changes.
```

## Example
```markdown
You are an AI assistant specialized in software development and documentation.
Your task is to complete and check docstrings for the provided code.

Here is the code:
---
def add(a, b):
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b
---

Please complete and check the docstrings.
```

Result:
```python
def add(a, b):
    """
    Add two numbers.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The sum of a and b.
    """
    return a + b

def subtract(a, b):
    """
    Subtract b from a.

    Args:
        a (int or float): The number to subtract from.
        b (int or float): The number to subtract.

    Returns:
        int or float: The result of a - b.
    """
    return a - b

# Summary:
# - Added a complete docstring to `add`.
# - Expanded the docstring for `subtract` to include parameter and return descriptions.
```
