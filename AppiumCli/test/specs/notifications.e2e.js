const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const LoginFacade = require("../utilis/LoginFacade");
const expect = require("chai").expect;

describe("User Notifications", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);
    const notificationButton = await HomePage.notificationButton;
    await notificationButton.click();
    await driver.pause(3000);
  });

  afterEach(async () => {
    await driver.reloadSession();
  });

  it("all notifications are clickable", async () => {
    const notifications = await HomePage.allNotifications;
    let flag = true;
    for (const notification of notifications) {
      let check = await notification.isEnabled();
      if (check != true) {
        flag = false;
      }
    }
    expect(flag).to.be.true;
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/notifications.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clean allure-results && allure open
