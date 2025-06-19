import { mergeTests } from "@playwright/test";

import {
  globalCleanUp,
} from "@qlik-trial/dgt-core-qa";
import { setFeatureFlags } from "@qlik-trial/playwright-utils";

import { test as marketPlaceFxt } from "../fixtures/fixtureMarketPlace";
import { test as reconnectionFxt } from "../fixtures/fixtureReconnection";
import { PATTERN_PREFIX } from "../utils/constants";
import {
  dataProductDescription,
  mysqlConnectionPath,
  mysqlDatasetAstronautPath,
  mysqlDatasetSatellitesPath,
  spaceLineage,
  tags3Values,
} from "./constantsForTest";

const test = mergeTests(reconnectionFxt, marketPlaceFxt);

test.describe("<Purpose of the test file>", { tag: [<your tags>] }, () => {


  test.beforeEach(async ({ request, marketPlace, page }) => {
    
    await test.step(`BeforeEach Setup`, async () => {
      await globalCleanUp(PATTERN_PREFIX, request);

      await page.goto(<Target URL>);
      await <target page>.isLoaded();
    });
  });

  test.afterAll(async ({ request }) => {
    await globalCleanUp(PATTERN_PREFIX, request);
  });

  test("<Purpose of this test>", async ({ marketPlace, page }) => {
    await test.step(`<Purpose of this step>`, async () => {
      
    });
  });
});
