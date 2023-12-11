const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const expect = require("chai").expect;
describe("My Login application", () => {
  beforeEach(async () => {
    // const userbutton = await HomePage.userButton;
    // await userbutton.click();
    // const fistloginButton = await HomePage.loginButton;
    // await fistloginButton.click();
    const loginButton = await LoginPage.loginButton;
    await loginButton.click();
    await driver.pause(1000);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("login with valid email", async () => {
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(User.validEmail);
    await (await LoginPage.nextButton).click();
    await (await LoginPage.userNameView).getText();
    // let txt = await (await LoginPage.userNameView).getText(); // returns multiple view with the same index
    // expect(txt).equal(User.validUsername);
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(User.validPassword);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    expect(await (await LoginPage.wrongPasswordMessage).isDisplayed()).to.be
      .false;
    await driver.pause(3000);
  });
  it("login with valid username", async () => {
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(User.validUsername);
    await (await LoginPage.nextButton).click();
    await (await LoginPage.userNameView).getText();
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(User.validPassword);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    expect(await (await LoginPage.wrongPasswordMessage).isDisplayed()).to.be
      .false;
    await driver.pause(3000);
  });
  it("login with invalid invalidEmail or username", async () => {
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(User.invalidEmail);
    await (await LoginPage.nextButton).click();
    await (await LoginPage.userNameView).getText();
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(User.validPassword);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    expect(await (await LoginPage.wrongPasswordMessage).isDisplayed()).to.be
      .true;
    await driver.pause(3000);
  });

  it("reset password with valid email as input", async () => {
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(User.validEmail);
    await (await LoginPage.nextButton).click();
    await (await LoginPage.userNameView).getText();
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(User.invalidPassword);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    await driver.pause(3000);
    expect(await (await LoginPage.wrongPasswordMessage).isDisplayed()).to.be
      .true;
    await driver.pause(3000);
    await (await LoginPage.forgetPasswordButton).click();
    await driver.pause(1000);
    await (await LoginPage.nextButton).click();
    await driver.pause(1000);
    await (await LoginPage.nextButton).click();
    await driver.pause(3000);
    let txt = await (
      await LoginPage.codeSentMessage
    ).getAttribute("content-desc");
    expect(txt).equal("We sent you a code");
    await driver.pause(3000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/login.e2e.js
//need await to get the item and another await to apply the fuction
