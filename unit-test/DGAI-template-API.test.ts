import type { SuperAgent, SuperAgentRequest } from "superagent";

import {
  getAgent,
  globalCleanup,
} from "@qlik-trial/dgt-core-qa";
import { EndpointLogger } from "@qlik-trial/gtp-coverage-reporter";

describe(`<Purpose of the test file here>`, () => {
  let agent: SuperAgent<SuperAgentRequest>;


  beforeAll(async () => {
    EndpointLogger.logSuiteComponents("qlik-trial/<component>");
    agent = getAgent();
  });

  afterAll(async () => {
    await globalCleanup(agent);
  });

  test("<Purpose of this test>", async () => {

  });
});
