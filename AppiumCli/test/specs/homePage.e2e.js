const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;

describe("Home page", () => {
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("navigate home page", async () => {
    const postTab = await ProfilePage.getTab("Posts").tabElement;

    let postTabText = await postTab.getAttribute("content-desc");

    let postWord = postTabText.substring(0, 5);
    expect(postWord).equal("Posts");

    expect(await postTab.isEnabled()).to.be.true;

    await driver.pause(2000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/profile.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
