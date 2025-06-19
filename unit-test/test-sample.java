import org.junit.jupiter.api.*;

class NameOfModuleToTestTest {

  // Define top-level test variables here

    @BeforeAll
    static void beforeAll() {
    // One-time initialization logic _if required_
    }

    @BeforeEach
    void beforeEach() {
    // Logic that must be started before every test _if required_
    }

    @AfterAll
    static void afterAll() {
    // Logic that must be started after all tests _if required_
    }

    @Nested
    class MethodNameTests {
    // Define method-level variable here

        // Use method-level @BeforeAll, @BeforeEach or @AfterAll _if required_

        @Test
        void testCase() {
      // Test case code

      // to assert definitions of variables use:
            // Assertions.assertNotNull(variable);

      // to assert equality use:
            // Assertions.assertEquals(expected, actual);

            // for exceptions use:
            // Assertions.assertThrows(ExpectedException.class, () -> { /* code */ });
        }
    }
}