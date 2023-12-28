const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const ProfilePage = require("../pageobjects/profilePage");
const TweetPage = require("../pageobjects/tweetPage");
const LoginFacade = require("../utilis/LoginFacade");
const ProfileFacade = require("../utilis/ProfileFacade");
const expect = require("chai").expect;

describe("User Profile", () => {
  beforeEach(async () => {
    await LoginFacade.performLogin(User.validUsername, User.validPassword);
  });
  afterEach(async () => {
    await driver.reloadSession();
  });
  it("check all profile tabs", async () => {
    await ProfileFacade.goToOwnProfile();
    await ProfileFacade.checkUserProfileExists();
  });

  it.skip("edit user profile", async () => {
    await ProfileFacade.goToOwnProfile();

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

  it("view other users profile", async () => {
    const tweet = await HomePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 2000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 15, element: tweet }]);
    await driver.pause(1000);

    const userInformationLink = await TweetPage.userInformationLink;
    await userInformationLink.click();
    await driver.pause(1000);

    await ProfileFacade.checkUserProfileExists();
  });

  it.only("Block user", async () => {
    const tweet = await HomePage.firstTweet;
    await tweet.waitForDisplayed({ timeout: 2000 });
    await driver.touchAction([{ action: "tap", x: 0, y: 15, element: tweet }]);
    await driver.pause(1000);

    const userInformationImage = await TweetPage.userInformationImage;
    await userInformationImage.click();
    await driver.pause(1000);

    const profileOptionsButton = await ProfilePage.profileOptionsButton;
    await profileOptionsButton.click();

    const blockButton = await ProfilePage.blockButton;
    await blockButton.click();

    const confirmBlockButton = await ProfilePage.confirmBlockButton;
    await confirmBlockButton.click();

    const blockedButton = await ProfilePage.blockedButton;
    let blockedButtonText = await blockedButton.getAttribute("content-desc");
    expect(blockedButtonText).equal("Blocked");

    await driver.pause(2000);
  });

  it("check followers list", async () => {
    await ProfileFacade.goToOwnProfile();

    const followersButton = await ProfilePage.followersButton;

    let followersString = await followersButton.getAttribute("content-desc");
    followersString = followersString.split(" ");
    let followersCount = parseInt(followersString[0]);

    await followersButton.click();
    await driver.pause(2000); // wait for followers to load

    const followersList = await ProfilePage.allUsers;
    expect(followersCount).equal(followersList.length);
  });

  it("check following list", async () => {
    await ProfileFacade.goToOwnProfile();

    const followingButton = await ProfilePage.followingButton;

    let followingString = await followingButton.getAttribute("content-desc");
    followingString = followingString.split(" ");
    let followingCount = parseInt(followingString[0]);

    await followingButton.click();
    await driver.pause(2000); // wait for followers to load

    const followingList = await ProfilePage.allUsers;
    expect(followingCount).equal(followingList.length);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/profile.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate --clean allure-results && allure open
