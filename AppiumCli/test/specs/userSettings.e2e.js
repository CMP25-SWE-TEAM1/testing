const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const SettingsPage = require("../pageobjects/settingsPage");
const LoginFacade = require("../utilis/LoginFacade");
const settingsPage = require("../pageobjects/settingsPage");
const expect = require("chai").expect;

describe("User Settings", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);

    const userbutton = await HomePage.userButton;
    await userbutton.click();

    await driver.pause(1000);

    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 700, y: 1500 },
          { type: "pointerDown", button: 0 },
          { type: "pointerMove", duration: 100, x: 700, y: 1200 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await driver.pause(1000);

    await (await HomePage.settingAndSupportTab).click();

    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 700, y: 1500 },
          { type: "pointerDown", button: 0 },
          { type: "pointerMove", duration: 100, x: 700, y: 1200 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await (await HomePage.settingAndPrivacyTab).click();
    await driver.pause(1000);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("unblock users", async () => {
    const pravicyAndSafty = await settingsPage.pravicyAndSafty;
    await pravicyAndSafty.click();
    const muteAndBlock = await settingsPage.muteAndBlock;
    await muteAndBlock.click();
    const blockedAccounts = await settingsPage.blockedAccounts;
    await blockedAccounts.click();
    const blockedButtons = await settingsPage.blockedButtons;
    await driver.pause(2000);

    let flag = true;
    for (const button of blockedButtons) {
      let check = await button.isEnabled();
      if (check != true) {
        flag = false;
      }
    }

    expect(flag).to.be.true;
  });
  it.only("unmute users", async () => {
    const pravicyAndSafty = await settingsPage.pravicyAndSafty;
    await pravicyAndSafty.click();
    const muteAndBlock = await settingsPage.muteAndBlock;
    await muteAndBlock.click();
    const mutedAccounts = await settingsPage.mutedAccounts;
    await mutedAccounts.click();
    const mutedButtons = await settingsPage.mutedButtons;
    await driver.pause(2000);

    let flag = false;
    // for (const button of mutedButtons) {
    //   let check = await button.isEnabled();
    //   if (check != true) {
    //     flag = false;
    //   }
    // }
    expect(flag).to.be.true;
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/userSettings.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clean allure-results && allure open
