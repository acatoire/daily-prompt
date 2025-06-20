# Code optimization

## The prompt
```markdown
You are an AI assistant specialized in software development.
Your task is to rewrite this function/file to made it more readable and clear for users.

Improved structure and comments

Use clear validable names, explicit steps and avoids one-liners for better readability.

```



## Example
```markdown
You are an AI assistant specialized in software development.
Your task is to rewrite this function to made it more readable and clear for users.

Improved structure and comments

Use clear validable names, explicit steps and avoids one-liners for better readability.

  test(`Deactivate a Data Product with data product copy id`, async () => {
    await createDefaultDataProductAndActivateForTest();

    // Deactivation
    const resultDeactivation = await agent.post(Endpoints.DATA_PRODUCT.deactivateDataProduct(dataProduct.copy.id));
    expect(resultDeactivation).toHaveStatus(200);

    const resultGetMain = await getDataProductById(agent, dataProduct.main.id);
    expect(resultGetMain.activated).toEqual(false);
    const resultGetCopy = await getDataProductById(agent, dataProduct.copy.id);
    expect(resultGetCopy).toBeNull();
  });
```

Result:
test('Deactivate a Data Product using its copy ID', async () => {
  // Step 1: Create and activate a default data product for testing
  await createDefaultDataProductAndActivateForTest();

  // Step 2: Deactivate the data product using the copy's ID
  const deactivationResponse = await agent.post(
    Endpoints.DATA_PRODUCT.deactivateDataProduct(dataProduct.copy.id)
  );
  expect(deactivationResponse).toHaveStatus(200);

  // Step 3: Retrieve the main data product and verify it is deactivated
  const mainDataProduct = await getDataProductById(agent, dataProduct.main.id);
  expect(mainDataProduct.activated).toEqual(false);

  // Step 4: Attempt to retrieve the copy data product and verify it no longer exists
  const copyDataProduct = await getDataProductById(agent, dataProduct.copy.id);
  expect(copyDataProduct).toBeNull();
});
