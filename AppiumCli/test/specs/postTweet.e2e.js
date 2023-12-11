const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;

describe("Post Tweet", () => {
  beforeEach(async () => {
    const loginButton = await LoginPage.loginButton;
    await loginButton.click();
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(User.validUsername);
    await (await LoginPage.nextButton).click();
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(User.validPassword);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    await driver.pause(1000);
  });

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

    const firstTimePost = await HomePage.firstTimePost;
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

    const firstTimePost = await HomePage.firstTimePost;
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

    const firstTimePost = await HomePage.firstTimePost;
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

    const firstTimePost = await HomePage.firstTimePost;
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
  it.only("post a tweet with video with text", async () => {
    let composePost = await HomePage.composePost(1);
    await composePost.click();

    composePost = await HomePage.composePost(2);
    await composePost.click();

    const firstTimePost = await HomePage.firstTimePost;
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
