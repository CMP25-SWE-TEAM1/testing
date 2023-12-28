const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const ProfilePage = require("../pageobjects/profilePage");
const expect = require("chai").expect;
class ProfileFacade {
  static async goToOwnProfile() {
    const userbutton = await HomePage.userButton;
    await userbutton.click();
    const profileTab = await HomePage.profileTab;
    await profileTab.click();
    await driver.pause(3000);
  }
  static async checkUserProfileExists() {
    const postTab = await ProfilePage.getTab("Posts").tabElement;

    let postTabText = await postTab.getAttribute("content-desc");

    let postWord = postTabText.substring(0, 5);
    expect(postWord).equal("Posts");

    expect(await postTab.isEnabled()).to.be.true;

    const likeTab = await ProfilePage.getTab("Likes").tabElement;
    let LikesTabText = await likeTab.getAttribute("content-desc");

    let likesWord = LikesTabText.substring(0, 5);
    expect(likesWord).equal("Likes");

    expect(await likeTab.isEnabled()).to.be.true;

    await driver.pause(2000);
  }
}

module.exports = ProfileFacade;
