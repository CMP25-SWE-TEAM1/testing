const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;
const LoginFacade = require("../utilis/LoginFacade");
describe("Post Tweet", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);
  });

  afterEach(async () => {
    await driver.reloadSession();
  });

  it("post a tweet with only text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue("Meow Meow");

    const postButton = await TweetPage.postButton;
    await postButton.click();

    await driver.pause(4000);
  });
  it("post a tweet with exceding charater limits", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue(User.excedingCharacterlimit);

    const postButton = await TweetPage.postButton;
    expect(await postButton.isEnabled()).to.be.false;

    await driver.pause(4000);
  });
  it("post a tweet with image without text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const addImageButton = await TweetPage.addImageButton;
    await addImageButton.click();

    const allowAccessButton = await TweetPage.allowAccessButton;
    await allowAccessButton.click();

    const imageFromGallery = await TweetPage.getImageFromTheGallery(1);
    await imageFromGallery.click();

    const rightButton = await TweetPage.rightButton;
    await rightButton.click();

    const postButton = await TweetPage.postButton;
    expect(await postButton.isEnabled()).to.be.true;
    await postButton.click();

    await driver.pause(4000);
  });

  it("post a tweet with image with text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue("Meow Meow");

    const addImageButton = await TweetPage.addImageButton;
    await addImageButton.click();

    const allowAccessButton = await TweetPage.allowAccessButton;
    await allowAccessButton.click();

    const imageFromGallery = await TweetPage.getImageFromTheGallery(1);
    await imageFromGallery.click();

    const rightButton = await TweetPage.rightButton;
    await rightButton.click();

    const postButton = await TweetPage.postButton;
    expect(await postButton.isEnabled()).to.be.true;
    await postButton.click();

    await driver.pause(4000);
  });
  it("post a tweet with video without text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const addImageButton = await TweetPage.addImageButton;
    await addImageButton.click();

    const allowAccessButton = await TweetPage.allowAccessButton;
    await allowAccessButton.click();

    const imageFromGallery = await TweetPage.getVideoFormTheGallery();
    await imageFromGallery.click();

    const rightButton = await TweetPage.rightButton;
    await rightButton.click();

    const postButton = await TweetPage.postButton;
    expect(await postButton.isEnabled()).to.be.true;
    await postButton.click();

    await driver.pause(4000);
  });
  it("post a tweet with video with text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await TweetPage.firstTimePost;
    await firstTimePost.click();

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue("Meow Meow");

    const addImageButton = await TweetPage.addImageButton;
    await addImageButton.click();

    const allowAccessButton = await TweetPage.allowAccessButton;
    await allowAccessButton.click();

    const imageFromGallery = await TweetPage.getVideoFormTheGallery();
    await imageFromGallery.click();

    const rightButton = await TweetPage.rightButton;
    await rightButton.click();

    const postButton = await TweetPage.postButton;
    expect(await postButton.isEnabled()).to.be.true;
    await postButton.click();

    await driver.pause(4000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/postTweet.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
