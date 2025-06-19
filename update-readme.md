# Update readme.md file


## The prompt
```markdown
You are an AI assistant specialized in software development.
Your task is to update a README markdown file existing for this project under Git. The README should follow standard practice in terms of the layout of the README file.

Don't remove existing sections, but complete them or correct them.

Add missing sections if needed.

Include sections such as Project Title, Description, Installation Instructions, Usage Instructions, Documentation with the list all files with an extension md in a table, License Information. Include the repository tree at the end of the file. Aim for a professional and informative tone, ensuring clarity and comprehensiveness.

The README should be formatted in Markdown, with proper headings, bullet points, and code blocks where necessary to ensure readability and usability.

```



## Example
```markdown

You are an AI assistant specialized in software development.
Your task is to update a README markdown file existing for this project under Git. The README should follow standard practice in terms of the layout of the README file.

Don't remove existing sections, but complete them or correct them.

Add missing sections if needed.

Include sections such as Project Title, Description, Installation Instructions, Usage Instructions, Documentation with the list all files with an extension md in a table, License Information. Include the repository tree at the end of the file. Aim for a professional and informative tone, ensuring clarity and comprehensiveness.

The README should be formatted in Markdown, with proper headings, bullet points, and code blocks where necessary to ensure readability and usability.

```

Result:

# Daily Prompt Repository & AI Helper

## Description

The Daily Prompt Repository & AI Helper is a collection of reusable prompt samples and AI usage guidelines designed to enhance productivity for developer and QA teams. It provides ready-to-use prompts for code generation, testing, documentation, and more, helping you streamline your workflow and leverage AI tools effectively.

---

## Installation Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-org>/daily-prompt.git
   cd daily-prompt
   ```

2. **(Optional) Install dependencies:**  
   If you plan to use or extend any scripts or test templates, install the necessary dependencies as described in the relevant files.

---

## Usage Instructions

- **Browse Prompt Samples:**  
  Explore the Markdown files in the root and `unit-test/` directories for ready-to-use prompts covering unit test writing, test data generation, documentation validation, and more.

- **Copy & Adapt Prompts:**  
  Copy the prompt samples into your own workflow, adapting them as needed for your specific use case.

- **Unit Test Templates:**  
  Use the provided TypeScript and Java test templates in `unit-test/test-sample.ts` and `unit-test/test-sample.java` to standardize your test writing.

---

## Documentation

Below is a list of all Markdown (`.md`) files in this repository:

| File Name            | Description                        |
|----------------------|------------------------------------|
| README.md            | Project overview and instructions  |
| generate-readme.md   | Prompt and example for README file |

---

## License Information

This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute this project in accordance with the license terms.

---

## Repository Tree

```
daily-prompt/
├── generate-readme.md
├── unit-test/
│   ├── test-sample.ts
│   └── test-sample.java
├── LICENSE
└──
