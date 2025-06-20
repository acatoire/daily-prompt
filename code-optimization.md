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

  test(`Deactivate a Item`, async () => {
    await createDefaulItemAndActivateIt();

    // Deactivation
    const resultDeactivation = await agent.post(Endpoints.ITEMS.deactivateItem(item.copy.id));
    expect(resultDeactivation).toHaveStatus(200);

    const resultGetMain = await getItemtById(agent, item.main.id);
    expect(resultGetMain.activated).toEqual(false);
    const resultGetCopy = await getItemById(agent, item.copy.id);
    expect(resultGetCopy).toBeNull();
  });
```

Result:
```markdown
test('Deactivate an Item', async () => {
  // Step 1: Create and activate a default item for testing
  await createDefaulItemAndActivateIt();

  // Step 2: Deactivate the item using the copy's ID
  const deactivationResponse = await agent.post(
    Endpoints.ITEMS.deactivateItem(item.copy.id)
  );
  expect(deactivationResponse).toHaveStatus(200);

  // Step 3: Retrieve the main item and verify it is deactivated
  const mainItem = await getItemtById(agent, item.main.id);
  expect(mainItem.activated).toEqual(false);

  // Step 4: Attempt to retrieve the copy item and verify it no longer exists
  const copyItem = await getItemById(agent, item.copy.id);
  expect(copyItem).toBeNull();
});
```