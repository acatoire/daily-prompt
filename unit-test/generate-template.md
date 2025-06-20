# Unit Test Skeleton from Template

## The prompt
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to write a comprehensive skeleton for a suite of unit tests for a provided codebase.

- Use the appropriate template for the specified language (TypeScript, Java, Groovy, etc.).
- Ensure the skeleton covers setup, teardown, and at least one example test case.
- Follow best practices for structure and naming.
- Leave placeholders for test logic and assertions.

Return the generated test skeleton and a brief explanation.
```

## Example
```markdown
You are an AI assistant specialized in software development and testing.
Your task is to write a unit test skeleton for a TypeScript codebase.

Use the following template file: 
    * [typescript](test-sample.ts)
    * [java](test-sample.java)
    * ...

Here is the code to test:
---
function add(a: number, b: number): number {
  return a + b;
}
---

Please generate a unit test skeleton.
```

Result:
```typescript
// test-sample.ts

import { add } from './add';

describe('add', () => {
  beforeEach(() => {
    // Setup code if needed
  });

  afterEach(() => {
    // Teardown code if needed
  });

  it('should add two numbers', () => {
    // TODO: Add assertions
  });
});
```
