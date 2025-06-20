## GitHub Copilot: Ask Mode vs Edit Mode – Quick Tutorial

**Ask Mode:**  
Ask mode is designed for quick, context-aware questions about your code or programming concepts. When you highlight code and type a question in Copilot Chat, Copilot responds with explanations, code snippets, or guidance—without making any changes to your files. This mode is ideal for clarifying what code does, asking about syntax, or getting general programming help, all without altering your codebase. Think of it as an instant, low-friction way to get unstuck or learn something new, right inside your editor.

**Edit Mode:**  
Edit mode is for when you want Copilot to propose actual code changes. In this mode, you select which files Copilot is allowed to edit (the "working set"), then describe the change you want. Copilot suggests edits, but you retain full control: you can review, accept, or discard each proposed change. Edit mode is best for targeted refactoring, bug fixes, or when you want to update multiple files but still approve every modification before it’s applied.

| Feature         | Ask Mode                                      | Edit Mode                                   |
|-----------------|-----------------------------------------------|---------------------------------------------|
| Purpose         | Get answers/explanations                      | Propose and review code edits               |
| Code Changes    | No                                            | Yes (with user review/approval)             |
| User Control    | Full (no changes made)                        | Full (choose files, accept/reject changes)  |
| Use Case        | Questions, clarifications, code help          | Refactoring, bug fixes, batch updates       |

## Providing File Links to Copilot

You can enhance Copilot’s responses by referencing specific files in your prompt. In many Copilot environments (such as Visual Studio or IntelliJ), you can:

- Reference a file by prefixing its name with a `#` (e.g., `#BasketService.cs`) in your chat prompt. This tells Copilot to use the content of that file as context when answering your question or generating cod.

This file-linking capability is especially useful for summarizing documents, generating new content based on existing files, or asking Copilot to analyze or transform specific files without manually pasting their contents.
