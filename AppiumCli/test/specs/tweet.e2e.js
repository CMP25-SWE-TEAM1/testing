const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const ProfilePage = require("../pageobjects/profilePage");
const TweetPage = require("../pageobjects/tweetPage");
const LoginFacade = require("../utilis/LoginFacade");
const ProfileFacade = require("../utilis/ProfileFacade");
const expect = require("chai").expect;

describe("Tweet operations", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);
    await ProfileFacade.goToOwnProfile();
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("like first tweet and check the increment in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    let oldLikesNumber = parseInt(
      (await (await TweetPage.likersNumber).getAttribute("content-desc"))[0]
    );

    const likeButton = await TweetPage.likeButton;
    expect(await likeButton.isEnabled()).to.be.true;
    await likeButton.click();
    await driver.pause(2000);

    let NewLikesNumber = parseInt(
      (await (await TweetPage.likersNumber).getAttribute("content-desc"))[0]
    );
    expect(NewLikesNumber).equal(oldLikesNumber + 1);

    await driver.pause(2000);
  });
  it("retweet my first tweet and check the increment in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    let oldRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );

    const retweetButton = await TweetPage.retweetButton;
    expect(await retweetButton.isEnabled()).to.be.true;
    await retweetButton.click();

    const repostButton = await TweetPage.repostButton;
    await repostButton.click();
    await driver.pause(2000);

    let newRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );
    expect(newRetweetsNumber).equal(oldRetweetsNumber + 1);

    await driver.pause(2000);
  });

  it("undo my retweet of my first tweet and check the decrement in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    let oldRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );

    const retweetButton = await TweetPage.retweetButton;
    expect(await retweetButton.isEnabled()).to.be.true;
    await retweetButton.click();

    const undoRepostButton = await TweetPage.undoRepostButton;
    await undoRepostButton.click();
    await driver.pause(2000);

    let newRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );
    expect(newRetweetsNumber).equal(oldRetweetsNumber - 1);

    await driver.pause(2000);
  });

  it("retweet with qoute first tweet in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    const retweetButton = await TweetPage.retweetButton;
    expect(await retweetButton.isEnabled()).to.be.true;
    await retweetButton.click();

    const quoteButton = await TweetPage.quoteButton;
    await quoteButton.click();

    await driver.pause(2000);
  });

  it("comment on first tweet in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    const replyButton = await TweetPage.replyButton;
    expect(await replyButton.isEnabled()).to.be.true;
    await replyButton.click();

    const firstTimePost = await TweetPage.firstTimePost;
    if (await firstTimePost.isDisplayed()) {
      await firstTimePost.click();
    }

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue("Hello");

    const postButton = await TweetPage.postButton;
    await postButton.click();

    const firstComment = await TweetPage.getComment(1);
    await firstComment.waitForDisplayed({ timeout: 10000 });
    let text = await firstComment.getAttribute("content-desc");

    let replyIndex = text.indexOf("Replying to");
    //check for the comment if it has the same words

    let croppedString = text.slice(replyIndex + "Replying to".length).trim();
    expect(croppedString).equal("Hello");
    await driver.pause(2000);
  });
  it.skip("comment on first comment in first tweet in user profile", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 10000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    const comment = await TweetPage.firstComment;
    await comment.waitForDisplayed({ timeout: 3000 });
    await driver.touchAction([
      { action: "tap", x: 0, y: 20, element: comment },
    ]);
    await driver.pause(2000);

    const replyButton = await TweetPage.replyButton;
    expect(await replyButton.isEnabled()).to.be.true;
    await replyButton.click();

    const firstTimePost = await TweetPage.firstTimePost;
    if (await firstTimePost.isDisplayed()) {
      await firstTimePost.click();
    }

    const tweetTextForm = await TweetPage.tweetTextForm;
    await tweetTextForm.addValue("Hello");

    const postButton = await TweetPage.postButton;
    await postButton.click();

    //TODO check for the nesting comment if it has the same words
    await driver.pause(2000);
  });

  it.only("delete first tweet in user profile", async () => {
    const firstTweet = await ProfilePage.firstTweet;
    let firstTweetText = await firstTweet.getAttribute("content-desc");

    const firstTweetOptions = await ProfilePage.firstTweetOptions;
    await firstTweetOptions.click();
    const deletePostButton = await ProfilePage.deletePostButton;
    await deletePostButton.click();
    await driver.pause(3000);

    const secondTweet = await ProfilePage.firstTweet;
    let secondTweetText = await secondTweet.getAttribute("content-desc");
    expect(secondTweetText).not.equal(firstTweetText);
    await driver.pause(2000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/tweet.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
