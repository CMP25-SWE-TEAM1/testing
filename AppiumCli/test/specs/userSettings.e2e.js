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
    await driver.touchAction([
      { action: "longPress", x: 570, y: 1711 },
      { action: "moveTo", x: 570, y: 638 },
      "release",
    ]);

    const settingAndSupportTab = await HomePage.settingAndSupportTab;
    await settingAndSupportTab.click();

    await driver.touchAction([
      { action: "longPress", x: 570, y: 1571 },
      { action: "moveTo", x: 570, y: 448 },
      "release",
    ]);

    const settingAndPrivacyTab = await HomePage.settingAndPrivacyTab;
    await settingAndPrivacyTab.click();
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
  it("unmute users", async () => {
    const pravicyAndSafty = await settingsPage.pravicyAndSafty;
    await pravicyAndSafty.click();
    const muteAndBlock = await settingsPage.muteAndBlock;
    await muteAndBlock.click();
    const mutedAccounts = await settingsPage.mutedAccounts;
    await mutedAccounts.click();
    const mutedButtons = await settingsPage.mutedButtons;
    await driver.pause(2000);

    let flag = true;
    for (const button of mutedButtons) {
      let check = await button.isEnabled();
      if (check != true) {
        flag = false;
      }
    }
    expect(flag).to.be.true;
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/userSettings.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clean allure-results && allure open
