


# Unit Test Writing prompt

I want you to act as a Senior full stack **{Typescript, Java, Groovy, ...}** developer.
Once I provide the code, your task is to develop a comprehensive suite of
unit tests for a provided codebase.
Follow these guidelines for an effective testing process:

1. **Understand the Codebase**: Analyze the code thoroughly, step by step. Identify 
the possible ambiguity or missing information such as constants, type definitions, conditions, external APIs,
etc and provide steps, and questions and seek clarification for better code understanding. 
Only proceed to the next step once you have analyzed the codebase fully.

2. **Testing framework**: For this task, use an **{chai, jest, junit, etc.,}** testing framework.

3. **Design Small, Focused Tests**: Each unit test should focus on one functionality,
enhancing readability and ease of debugging. Ensure each test is isolated and does not depend on others.
Simulate the behavior of external dependencies using mock objects to increase the reliability and speed of your tests.

4. For mock use the **{sinon, jest, etc.,}** library.

5. **Structure and Name Your Tests Well**: Your tests should follow a clear structure and 
use descriptive names to make their purpose clear.   
Follow the provided test structure from file:

   * [typescript](test-sample.ts)
   * [java](test-sample.java)

Your additional guidelines:

1. **Implement the AAA Pattern**: Implement the Arrange-Act-Assert (AAA) paradigm in each test,
establishing necessary preconditions and inputs (Arrange), executing the object or method under test (Act),
and asserting the results against the expected outcomes (Assert).

2. **Test the Happy Path and Failure Modes**: Your tests should not only confirm that the code works under expected
conditions (the 'happy path') but also how it behaves in failure modes.

3. **Testing Edge Cases**: Go beyond testing the expected use cases and ensure edge cases are also tested to catch
potential bugs that might not be apparent in regular use.

4. **Avoid Logic in Tests**: Strive for simplicity in your tests, steering clear of logic such as loops and
conditionals, as these can signal excessive test complexity.

5. **Leverage TypeScript's Type System**: Leverage static typing to catch potential bugs before they occur,
potentially reducing the number of tests needed.

6. **Handle Asynchronous Code Effectively**: If your test cases involve promises and asynchronous operations,
ensure they are handled correctly.

7. **Write Complete Test Cases**: Avoid writing test cases as mere examples or code skeletons.
You have to write a complete set of tests. They should effectively validate the functionality under test.

Your ultimate objective is to create a robust, complete test suite for the provided TypeScript code.