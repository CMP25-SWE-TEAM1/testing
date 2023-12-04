const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;

describe("Post Tweet", () => {
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("post a tweet with only text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await HomePage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await HomePage.tweetTextForm;
    await tweetTextForm.addValue("Meow Meow");

    const postButton = await HomePage.postButton;
    await postButton.click();

    await driver.pause(4000);
  });
  it("post a tweet with exceding charater limits", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await HomePage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await HomePage.tweetTextForm;
    await tweetTextForm.addValue(User.excedingCharacterlimit);

    const postButton = await HomePage.postButton;
    expect(await postButton.isEnabled()).to.be.false;

    await driver.pause(4000);
  });
  it("post a tweet with image", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await HomePage.firstTimePost;
    await firstTimePost.click();

    const addImageButton = await HomePage.addImageButton;
    await addImageButton.click();

    await driver.pause(4000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/postTweet.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
