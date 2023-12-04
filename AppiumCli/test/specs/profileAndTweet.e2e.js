const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const ProfilePage = require("../pageobjects/profilePage");
const TweetPage = require("../pageobjects/tweetPage");
const expect = require("chai").expect;

describe("Testing Profile", () => {
  beforeEach(async () => {
    const userbutton = await HomePage.userButton;
    await userbutton.click();
    const profileTab = await HomePage.profileTab;
    await profileTab.click();
    // const fistloginButton = await HomePage.loginButton;
    // await fistloginButton.click();
    // const loginButton = await LoginPage.loginButton;
    // await loginButton.click();
    // await driver.pause(1000);
    // await (await LoginPage.userNameField).click();
    // await (await LoginPage.userNameField).clearValue();
    // await (await LoginPage.userNameField).addValue(User.validEmail);
    // await (await LoginPage.nextButton).click();
    // await (await LoginPage.userNameView).getText();
    // await (await LoginPage.userPasswordField).click();
    // await (await LoginPage.userPasswordField).clearValue();
    // await (await LoginPage.userPasswordField).addValue(User.validPassword);
    // await (await LoginPage.showPasswordButton).click();
    // await (await LoginPage.loginButton).click();
    await driver.pause(3000);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("check all profile tabs", async () => {
    const postTab = await ProfilePage.getTab("Posts").tabElement;

    let postTabText = await postTab.getAttribute("content-desc");

    let postWord = postTabText.substring(0, 5);
    expect(postWord).equal("Posts");

    expect(await postTab.isEnabled()).to.be.true;

    const repliesTab = await ProfilePage.getTab("Replies").tabElement;
    let repliesTabText = await repliesTab.getAttribute("content-desc");

    let repliesWord = repliesTabText.substring(0, 7);
    expect(repliesWord).equal("Replies");

    expect(await repliesTab.isEnabled()).to.be.true;

    const mediaTab = await ProfilePage.getTab("Media").tabElement;
    let MediaTabText = await mediaTab.getAttribute("content-desc");

    let mediaWord = MediaTabText.substring(0, 5);
    expect(mediaWord).equal("Media");

    expect(await mediaTab.isEnabled()).to.be.true;

    const likeTab = await ProfilePage.getTab("Likes").tabElement;
    let LikesTabText = await likeTab.getAttribute("content-desc");

    let likesWord = LikesTabText.substring(1, 6);
    expect(likesWord).equal("Likes");

    expect(await likeTab.isEnabled()).to.be.true;

    await driver.pause(2000);
  });

  it("edit user profile", async () => {
    const editProfileButton = await ProfilePage.editProfileButton;
    await editProfileButton.click();

    const bannerImage = await ProfilePage.bannerImage;
    await bannerImage.click();

    let chooseExistingPhotoButton = await ProfilePage.chooseExistingPhotoButton;
    await chooseExistingPhotoButton.click();

    const newBannerImage = await ProfilePage.getImageFromTheGallery(2);
    await newBannerImage.click();

    let cropButton = await ProfilePage.cropButton;
    await cropButton.click();

    const userImage = await ProfilePage.userImage;
    await userImage.click();

    chooseExistingPhotoButton = await ProfilePage.chooseExistingPhotoButton;
    await chooseExistingPhotoButton.click();

    const newUseImage = await ProfilePage.getImageFromTheGallery(3);
    await newUseImage.click();

    const nameForm = await ProfilePage.nameForm;
    await nameForm.click();
    await nameForm.clearValue();
    await nameForm.addValue("Hima");

    const bioForm = await ProfilePage.bioForm;
    await bioForm.click();
    await bioForm.clearValue();
    await bioForm.addValue("I love cats");

    const saveProfileButton = await ProfilePage.saveProfileButton;
    await saveProfileButton.click();
    await driver.pause(8000);
  });

  it("like first tweet and check the increment", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 1000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 10, element: tweet }]);
    await driver.pause(2000);

    let oldLikesNumber = parseInt(
      (await (await TweetPage.likersNumber).getAttribute("content-desc"))[0]
    );

    const likeButton = await TweetPage.likeButton;
    expect(await likeButton.isEnabled()).to.be.true;
    await likeButton.click();

    let NewLikesNumber = parseInt(
      (await (await TweetPage.likersNumber).getAttribute("content-desc"))[0]
    );
    expect(NewLikesNumber).equal(oldLikesNumber + 1);

    await driver.pause(2000);
  });
  it("retweet my first tweet and check the increment", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 1000 });
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

    let newRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );
    expect(newRetweetsNumber).equal(oldRetweetsNumber + 1);

    await driver.pause(2000);
  });

  it("undo my retweet of my first tweet and check the decrement", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 1000 });
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

    let newRetweetsNumber = parseInt(
      (await (await TweetPage.retweetNumber).getAttribute("content-desc"))[0]
    );
    expect(newRetweetsNumber).equal(oldRetweetsNumber - 1);

    await driver.pause(2000);
  });

  it("retweet with qoute first tweet ", async () => {
    const tweet = await ProfilePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 1000 });
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
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/profile.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
