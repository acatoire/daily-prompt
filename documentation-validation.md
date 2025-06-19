# Documentation Validation

## The prompt
```markdown
You are an AI assistant specialized in software development and technical writing.
Your task is to validate the provided documentation for accuracy, completeness, clarity, and consistency.

- Check for missing or outdated information.
- Identify unclear or ambiguous sections.
- Suggest improvements for structure, grammar, and formatting.
- Ensure all code samples are correct and up to date.
- Highlight any inconsistencies or contradictions.

Provide a summary of issues found and actionable suggestions for improvement.
```

> **Note:**  
> Documentation validation can be performed as a periodic review or automatically during Pull Request (PR) checks to ensure ongoing quality and consistency.

## Example
```markdown
You are an AI assistant specialized in software development and technical writing.
Your task is to validate the provided documentation for accuracy, completeness, clarity, and consistency.

- Check for missing or outdated information.
- Identify unclear or ambiguous sections.
- Suggest improvements for structure, grammar, and formatting.
- Ensure all code samples are correct and up to date.
- Highlight any inconsistencies or contradictions.

Here is the documentation to review:
---
# API Usage

This API allows you to create and manage users.

## Endpoints

- `POST /users` - Create a new user.
- `GET /users/{id}` - Get user by ID.

## Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
---

Please provide a summary of issues and suggestions.
```

Result:
```markdown
**Summary of Issues:**
- The documentation lacks information about authentication and required headers.
- No details on response format or error handling.
- The example request does not specify required/optional fields.
- No information about possible status codes.
- The endpoint descriptions are minimal and could be expanded.

**Suggestions:**
- Add authentication and authorization details.
- Include example responses and error messages.
- Specify required and optional fields for each endpoint.
- Document possible HTTP status codes and their meanings.
- Expand endpoint descriptions for clarity.
```