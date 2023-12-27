const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const LoginFacade = require("../utilis/LoginFacade");
const SearchFacad = require("../utilis/SearchFacad");
const expect = require("chai").expect;
describe("Search and Trends", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("search for user", async () => {
    await SearchFacad.search("Youssef");

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
    await SearchFacad.search("gg");

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
    await SearchFacad.search("#MAN");

    const peopleTab = await HomePage.topTab;
    await peopleTab.click();

    await driver.pause(2000);

    const tweetHashtags = await HomePage.firstTweetHashtagsInSearch;

    let flag = false;
    for (const element of tweetHashtags) {
      let hashtag = await element.getAttribute("content-desc");
      if (hashtag.includes("#MAN")) {
        flag = true;
        break;
      }
    }

    expect(flag).to.be.true;

    await driver.pause(2000);
  });

  it("click on hashtags", async () => {
    await SearchFacad.search("#MAN");

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
//allure generate --clean allure-results && allure open
