const User = require("../../fixtures/data.json");
const RegisterPage = require("../pageobjects/registerPage");
const HomePage = require("../pageobjects/homePage");
const expect = require("chai").expect;

describe("My Sign up with new account", () => {
  beforeEach(async () => {
    const userbutton = await HomePage.userButton;
    await userbutton.click();
    const fistCreatAccountbutton = await HomePage.creatAccountButton;
    await fistCreatAccountbutton.click();
    const creatAccountbutton = await RegisterPage.creatAccountButton;
    await creatAccountbutton.click();
    await driver.pause(1000);
  });

  afterEach(async () => {
    await driver.reloadSession();
    //await driver.resetApp();
  });

  it("Sign up with valid credentials", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.validEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts
    //await (await RegisterPage.getViewWithIndex(7)).addValue(User.validUserAge);

    const seekbar = await $('//android.widget.SeekBar[@content-desc="2023"]');
    const { X, Y } = await seekbar.getLocation();
    await driver.touchAction([
      { action: "longpress", x: 0, y: 0, element: seekbar },
      { action: "moveTo", x: 0, y: 10, element: seekbar },
      "release",
    ]);
    await driver.pause(1000);
    await (await RegisterPage.nextButton).click();

    // 12 views
    const nameView = await RegisterPage.getViewWithIndex(6);
    const expectedName = await nameView.getText();
    expect(expectedName).equal(User.validUsername);

    const emailView = await RegisterPage.getViewWithIndex(7);
    const expectedEmail = await emailView.getText();
    expect(expectedEmail).equal(User.validEmail);

    const ageView = await RegisterPage.getViewWithIndex(8);
    const expectedAge = await ageView.getText();
    expect(expectedAge).equal(User.validUserAge);

    const signUpButton = await RegisterPage.signUpButton;
    await driver.pause(1000);
  });

  it("Sign up with invalid email", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.invalidEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    //await (await RegisterPage.getViewWithIndex(7)).addValue(User.validUserAge);

    let nextBtn = await RegisterPage.nextButton;
    expect(await nextBtn.isEnabled()).equal(false);
  });

  it("Sign up with invalid email", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.invalidEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    //await (await RegisterPage.getViewWithIndex(7)).addValue(User.validUserAge);

    let nextBtn = await RegisterPage.nextButton;
    expect(await nextBtn.isEnabled()).equal(false);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/register.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
