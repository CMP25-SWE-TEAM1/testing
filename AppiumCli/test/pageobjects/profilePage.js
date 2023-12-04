const { $, $$ } = require("@wdio/globals");

class ProfilePage {
  constructor() {
    this.tabFactory = new TabFactory();
  }
  get editProfileButton() {
    return $('//android.widget.Button[@content-desc="Edit profile"]');
  }
  get bannerImage() {
    return $("//android.widget.ImageView");
  }
  get userImage() {
    return $("//android.widget.ScrollView/android.view.View[1]");
  }
  get chooseExistingPhotoButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]'
    );
  }

  getImageFromTheGallery(index) {
    return $(
      `(//android.widget.ImageView[@resource-id="com.google.android.providers.media.module:id/icon_thumbnail"])[${index}]`
    );
  }
  get cropButton() {
    return $('//android.widget.TextView[@content-desc="Crop"]');
  }

  get nameForm() {
    return $(`//android.widget.ScrollView/android.widget.EditText[@index="3"]`);
  }
  get bioForm() {
    return $(`//android.widget.ScrollView/android.widget.EditText[@index="5"]`);
  }

  get saveProfileButton() {
    return $(`//android.view.View[@content-desc="Save"]`);
  }
  get firstTweet() {
    return $(
      `//android.widget.ScrollView/android.view.View[15]/android.view.View/android.view.View/android.widget.Button[@index="0"]`
    );
  }

  getTab(tabType) {
    return this.tabFactory.createTab(tabType);
  }
}

class Tab {
  constructor(selector) {
    this.selector = selector;
  }

  get tabElement() {
    return $(this.selector);
  }
}

class TabFactory {
  createTab(tabType) {
    switch (tabType) {
      case "Posts":
        return new Tab(`//android.widget.ScrollView/android.view.View[11]`);
      case "Replies":
        return new Tab(`//android.widget.ScrollView/android.view.View[12]`);
      case "Media":
        return new Tab(`//android.widget.ScrollView/android.view.View[13]`);
      case "Likes":
        return new Tab(`//android.widget.ScrollView/android.view.View[14]`);
      default:
        throw new Error(`Invalid tab type: ${tabType}`);
    }
  }
}

module.exports = new ProfilePage();
