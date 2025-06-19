
// import necessary methods from an abstract testing framework
import { describe, expect, it, beforeAll, beforeEach, afterAll } from './setup.js';

describe('<NAME_OF_MODULE_TO_TEST>', () => {
  // Define top-level test variables here

  beforeAll(async () => {
    // One-time initialization logic _if required_
  });

  beforeEach(async () => {
    // Logic that must be started before every test _if required_
  });

  afterAll(async () => {
    // Logic that must be started after all tests _if required_
  });

  describe('#<METHOD_NAME>', () => {
    // Define method-level variable here

    // Use method-lavel beforeAll, beforeEach or afterAll _if required_

    it('<TEST_CASE>', async () => {
      // Test case code

      // to assert definitions of variables use:
      // expect(<VARIABLE>).toBeDefined();

      // to assert equality use:
      // expect(<TEST_RESULT>).toEqual(<EXPECTED_VALUE>);
      // expect(<TEST_RESULT>).toStrictEqual(<EXPECTED_VALUE>);

      // for promises use async assertion:
      // await expect(<ASYNC_METHOD>).rejects.toThrow(<ERROR_MESSAGE>);
      // await expect(<ASYNC_METHOD>).resolves.toEqual(<EXPECTED_VALUE>);
    });
  });
});