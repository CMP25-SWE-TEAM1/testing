const User = require("../../fixtures/data.json");
const RegisterPage = require("../pageobjects/registerPage");
const HomePage = require("../pageobjects/homePage");
const expect = require("chai").expect;

describe("My Sign up with new account", () => {
  beforeEach(async () => {
    // const userbutton = await HomePage.userButton;
    // await userbutton.click();
    // const fistCreatAccountbutton = await HomePage.creatAccountButton;
    // await fistCreatAccountbutton.click();
    await driver.touchAction([{ action: "tap", x: 550, y: 1909 }]);
    const creatAccountbutton = await RegisterPage.creatAccountButton;
    await creatAccountbutton.click();
    await driver.pause(1000);
  });

  afterEach(async () => {
    await driver.reloadSession();
    //await driver.resetApp();
  });
  it("Sign up with invalid User age", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.validEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    const seekbar = await RegisterPage.seekBarOfBirthDate;
    await driver.touchAction([
      { action: "press", x: 0, y: 0, element: seekbar },
      { action: "moveTo", x: 0, y: 10, element: seekbar },
      "release",
    ]);

    await (await RegisterPage.nextButton).click();
    await driver.pause(1000);
    await (await RegisterPage.signUpButton).click();
    const cannotSignupMessage = await RegisterPage.cannotSignupRightNowView;
    let txt = await cannotSignupMessage.getAttribute("content-desc");
    expect(txt).equal("Can't sign up right now");
  });

  it("Sign up with valid credentials", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.validEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    const seekbar = await RegisterPage.seekBarOfBirthDate;
    await driver.touchAction([
      { action: "press", x: 0, y: 0, element: seekbar },
      { action: "moveTo", x: 0, y: 1909, element: seekbar },
      "release",
    ]);

    await driver.pause(1000);
    await (await RegisterPage.nextButton).click();
    await driver.pause(3000);
    // 12 views
    const nameView = await RegisterPage.getViewWithHint("Name");
    const expectedName = await nameView.getText();
    expect(expectedName).equal(User.validUsername);

    const emailView = await RegisterPage.getViewWithHint("Email");
    const expectedEmail = await emailView.getText();
    expect(expectedEmail).equal(User.validEmail);

    const ageView = await RegisterPage.getViewWithHint("Date of birth");
    const expectedAge = await ageView.getText();
    expect(expectedAge).equal(User.validUserAge);

    await (await RegisterPage.signUpButton).click();

    await driver.pause(2000);
    const verifyCodeForm = await RegisterPage.getFormWithIndex(0);
    await verifyCodeForm.click();
    await verifyCodeForm.addValue(User.adminValidationCode);

    let nextBtn = await RegisterPage.nextButton;
    await nextBtn.click();

    const passwordForm = await RegisterPage.getFormWithIndex(0);
    await passwordForm.click();
    await passwordForm.addValue(User.validPassword);

    nextBtn = await RegisterPage.nextButton;
    await nextBtn.click();

    let skipForNowButton = await RegisterPage.skipForNowButton;
    await skipForNowButton.click();

    skipForNowButton = await RegisterPage.skipForNowButton;
    await skipForNowButton.click();

    //check for home page if it exists
    const forYouTab = await HomePage.getTab("For you").tabElement;
    let forYouTabText = await forYouTab.getAttribute("content-desc");

    let forYouTabWord = forYouTabText.substring(0, 7);
    expect(forYouTabWord).equal("For you");

    expect(await forYouTab.isEnabled()).to.be.true;

    const followingTab = await HomePage.getTab("Following").tabElement;
    let followingText = await followingTab.getAttribute("content-desc");

    let followingWord = followingText.substring(0, 9);
    expect(followingWord).equal("Following");

    expect(await followingTab.isEnabled()).to.be.true;
    await driver.pause(1000);
  });

  it("Sign up with invalid email", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.invalidEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    const seekbar = await RegisterPage.seekBarOfBirthDate;
    await driver.touchAction([
      { action: "press", x: 0, y: 0, element: seekbar },
      { action: "moveTo", x: 0, y: 1909, element: seekbar },
      "release",
    ]);

    let nextBtn = await RegisterPage.nextButton;
    expect(await nextBtn.isEnabled()).equal(false);
  });

  it("Sign up with already existed user", async () => {
    await (await RegisterPage.getFormWithIndex(0)).click();
    await (await RegisterPage.getFormWithIndex(0)).addValue(User.validUsername);

    await (await RegisterPage.getFormWithIndex(1)).click();
    await (await RegisterPage.getFormWithIndex(1)).addValue(User.validEmail);

    await (await RegisterPage.getViewWithIndex(7)).touchAction("tap"); //the element is not clickable wand we have 9 view elemnts

    const seekbar = await RegisterPage.seekBarOfBirthDate;
    await driver.touchAction([
      { action: "press", x: 0, y: 0, element: seekbar },
      { action: "moveTo", x: 0, y: 1909, element: seekbar },
      "release",
    ]);

    await driver.pause(1000);
    await (await RegisterPage.nextButton).click();
    let txt = await (
      await $('//android.view.View[@content-desc="Email already exist"]')
    ).getAttribute("content-desc");
    expect(txt).equal("Email already exist");
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/register.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clean allure-results && allure open
