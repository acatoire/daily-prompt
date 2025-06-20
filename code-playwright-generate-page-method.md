# Code generation: in Playwright, generate all the method matching the locators already defined

## The prompt
```markdown
You are an AI assistant specialized in software development.
Your task is to write all the methods for the existing locators.

Create a method to click on a button when the locator name includes "button".

Create methods to fill and check the value when the locator name includes "input".

Create methods to activate the switch and check its status when the locator name includes "switch".

Create methods to click on a radio button and check its status when the locator name includes "radio".

Create methods to click on a check box and check its status when the locator name includes "checkBox".

Create a method that display the toolip by mouse hover and check it's label when the localor contains "tooltips"

For each method, add a log using the function fLog.stepName(), including the name of the class and the action of the method.

Use clear validable names, explicit steps and avoids one-liners for better readability.

```



## Example
```markdown
You are an AI assistant specialized in software development.
Your task is to write all the methods for the existing locators.

Create a method to click on a button when the locator name includes "button".

Create methods to fill and check the value when the locator name includes "input".

Create methods to activate the switch and check its status when the locator name includes "switch".

Create methods to click on a radio button and check its status when the locator name includes "radio".

Create methods to click on a check box and check its status when the locator name includes "checkBox".

Create a method that display the toolip by mouse hover and check it's label when the localor contains "tooltips"

For each method, add a log using the function fLog.stepName(), including the name of the class and the action of the method.

Use clear validable names, explicit steps and avoids one-liners for better readability.

export class ItemsCreate extends Bass {
private readonly itemSwitch = this.layout.getByTestId("item.modal.switch");

private readonly openItemCheckbox = this.layout.getByTestId("item.modal.open-item.checkbox");

private readonly itemRadioButton = this.layout.getByTestId("items.modal.item.radio");
private readonly itemInput = this.layout.locator("id=items.modal.item");
private readonly createButton = this.layout.getByTestId("items.modal.create.button");
private readonly cancelButton = this.layout.getByTestId("modal.buttons.close");
}


```

Result:
```markdown
export class ItemsCreate extends Bass {
  private readonly layout = this.page.getByTestId("modal");
  private readonly itemSwitch = this.layout.getByTestId("item.modal.switch");
  private readonly openItemCheckbox = this.layout.getByTestId("item.modal.open-item.checkbox");
  private readonly itemRadioButton = this.layout.getByTestId("items.modal.item.radio");
  private readonly itemInput = this.layout.locator("id=items.modal.item");
  private readonly createButton = this.layout.getByTestId("items.modal.create.button");
  private readonly cancelButton = this.layout.getByTestId("modal.buttons.close");
  private readonly itemTooltipLabel = this.layout.getByTestId("modal.tooltip.label");
  private readonly itemTooltip = this.layout.getByTestId("modal.tooltip");

  // --- Methods for itemSwitch ---
  async activateItemSwitch() {
    fLog.stepName("ItemsCreate - Activating itemSwitch");
    if (!(await this.itemSwitch.isChecked())) {
      await this.itemSwitch.click();
    }
  }

  async isItemSwitchChecked(expected: boolean) {
    fLog.stepName(`ItemsCreate - Checking itemSwitch is checked: ${expected}`);
    if (expected) {
      await expect(this.itemSwitch).toBeChecked();
    } else {
      await expect(this.itemSwitch).not.toBeChecked();
    }
  }

  // --- Methods for openItemCheckbox ---
  async clickOpenItemCheckbox() {
    fLog.stepName("ItemsCreate - Clicking openItemCheckbox");
    await this.openItemCheckbox.click();
  }

  async isOpenItemCheckboxChecked(expected: boolean) {
    fLog.stepName(`ItemsCreate - Checking openItemCheckbox is checked: ${expected}`);
    const checked = await this.openItemCheckbox.getAttribute("aria-checked");
    expect(checked).toBe(expected.toString());
  }

  // --- Methods for itemRadioButton ---
  async clickItemRadioButton() {
    fLog.stepName("ItemsCreate - Clicking itemRadioButton");
    await this.itemRadioButton.click();
  }

  async isItemRadioButtonChecked(expected: boolean) {
    fLog.stepName(`ItemsCreate - Checking itemRadioButton is checked: ${expected}`);
    if (expected) {
      await expect(this.itemRadioButton).toBeChecked();
    } else {
      await expect(this.itemRadioButton).not.toBeChecked();
    }
  }

  // --- Methods for itemInput ---
  async fillItemInput(value: string) {
    fLog.stepName(`ItemsCreate - Filling itemInput with value: ${value}`);
    await this.itemInput.fill(value);
  }

  async itemInputValueIs(expected: string) {
    fLog.stepName(`ItemsCreate - Checking itemInput value is: ${expected}`);
    await expect(this.itemInput).toHaveValue(expected);
  }

  // --- Methods for createButton ---
  async clickCreateButton() {
    fLog.stepName("ItemsCreate - Clicking createButton");
    await this.createButton.click();
  }

  // --- Methods for cancelButton ---
  async clickCancelButton() {
    fLog.stepName("ItemsCreate - Clicking cancelButton");
    await this.cancelButton.click();
  }

  async showItemTooltipAndCheckLabel(expected: string) {
    fLog.stepName("ItemsCreate - Displaying tooltip and checking label");
    await this.itemTooltip.hover();
    await expect(this.itemTooltipLabel).toHaveText(expected);
  }
}
```