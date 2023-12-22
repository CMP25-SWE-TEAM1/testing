const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;

describe("Search and Trends", () => {
  beforeEach(async () => {
    const loginButton = await LoginPage.loginButton;
    await loginButton.click();
    await driver.pause(1000);
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
    await driver.pause(2000);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("search for user", async () => {
    const searchButton = await HomePage.searchButton;
    await searchButton.click();
    let searchForm = await HomePage.getSearchForm(1);
    await searchForm.click();

    await (await HomePage.getSearchForm(2)).click();
    await (await HomePage.getSearchForm(2)).addValue("Youssef");
    await driver.execute("mobile: performEditorAction", { action: "search" });
    await driver.pause(1000);
    const peopleTab = await HomePage.peopleTab;
    await peopleTab.click();
    await driver.pause(2000);
    const firstUserInSearch = await HomePage.firstUserInSearch;
    let userName = await firstUserInSearch.getAttribute("content-desc");
    userName = userName.substring(0, 7);
    expect(userName).to.be.equal("Youssef");
    await driver.pause(2000);
  });

  it("search for tweet", async () => {
    const searchButton = await HomePage.searchButton;
    await searchButton.click();
    let searchForm = await HomePage.getSearchForm(1);
    await searchForm.click();

    await (await HomePage.getSearchForm(2)).click();
    await (await HomePage.getSearchForm(2)).addValue("gg");
    await driver.execute("mobile: performEditorAction", { action: "search" });

    await driver.pause(1000);

    const peopleTab = await HomePage.topTab;
    await peopleTab.click();

    await driver.pause(2000);

    const firstUserInSearch = await HomePage.firstTweetInSearch;
    let tweetInformation = await firstUserInSearch.getAttribute("content-desc");
    flag = tweetInformation.includes("gg");
    expect(flag).to.be.true;

    await driver.pause(2000);
  });
  it("search for hashtag", async () => {
    const searchButton = await HomePage.searchButton;
    await searchButton.click();
    let searchForm = await HomePage.getSearchForm(1);
    await searchForm.click();

    await (await HomePage.getSearchForm(2)).click();
    await (await HomePage.getSearchForm(2)).addValue("#Egypt");
    await driver.execute("mobile: performEditorAction", { action: "search" });

    await driver.pause(3000);

    const peopleTab = await HomePage.topTab;
    await peopleTab.click();

    await driver.pause(2000);

    const tweetHashtags = await HomePage.firstTweetHashtagsInSearch;

    let flag = false;
    for (const element of tweetHashtags) {
      let hashtag = await element.getAttribute("content-desc");
      if (hashtag.includes("#Egypt")) {
        flag = true;
        break;
      }
    }

    expect(flag).to.be.true;

    await driver.pause(2000);
  });

  it.only("click on hashtags", async () => {
    const searchButton = await HomePage.searchButton;
    await searchButton.click();
    let searchForm = await HomePage.getSearchForm(1);
    await searchForm.click();

    await (await HomePage.getSearchForm(2)).click();
    await (await HomePage.getSearchForm(2)).addValue("#Egypt");
    await driver.execute("mobile: performEditorAction", { action: "search" });

    await driver.pause(3000);

    const peopleTab = await HomePage.topTab;
    await peopleTab.click();

    await driver.pause(2000);

    const tweetHashtags = await HomePage.firstTweetHashtagsInSearch;

    for (const hashtag of tweetHashtags) {
      let isClickableHashtag = await hashtag.isEnabled();
      expect(isClickableHashtag).to.be.true;
    }

    await driver.pause(2000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/searchAndHashtags.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clear allure-results && allure open
