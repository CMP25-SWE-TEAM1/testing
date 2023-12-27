const { $, $$ } = require("@wdio/globals");

class ProfilePage {
  constructor() {
    this.tabFactory = new TabFactory();
  }
  get followersButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[9]`
    );
  }
  get followingButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.ScrollView/android.view.View[8]`
    );
  }
  get allUsers() {
    return $$(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button`
    );
  }

  get editProfileButton() {
    return $('//android.widget.Button[@content-desc="Edit profile"]');
  }
  get bannerImage() {
    return $("//android.widget.ScrollView/android.widget.ImageView");
  }
  get userImage() {
    return $("//android.widget.ScrollView/android.view.View[1]");
  }
  get chooseExistingPhotoButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]'
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
  get firstTweetOptions() {
    return $(
      `//android.widget.ScrollView/android.view.View[15]/android.view.View/android.view.View/android.widget.Button[@index="0"]//android.widget.Button[1]`
    );
  }
  get deletePostButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button`
    );
  }
  get profileOptionsButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.Button[3]`
    );
  }
  get blockButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]`
    );
  }
  get confirmBlockButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.widget.Button[2]`
    );
  }
  get blockedButton() {
    return $(`//android.widget.Button[@content-desc="Blocked"]`);
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
        return new Tab(
          `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]`
        );
      case "Likes":
        return new Tab(
          `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]`
        );
      default:
        throw new Error(`Invalid tab type: ${tabType}`);
    }
  }
}

module.exports = new ProfilePage();
