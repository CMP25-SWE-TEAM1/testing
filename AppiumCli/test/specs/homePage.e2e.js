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

  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/profile.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
