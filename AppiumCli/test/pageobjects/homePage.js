const { $, $$ } = require("@wdio/globals");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
  constructor() {
    this.tabFactory = new TabFactory();
  }
  get searchButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[3]`
    );
  }
  async getSearchForm(index) {
    if (index == 1)
      return $(
        `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]`
      );
    else
      return $(
        `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText`
      );
  }

  get peopleTab() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[2]`
    );
  }
  get firstUserInSearch() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.widget.Button[1]`
    );
  }
  get userButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button'
    );
  }
  get creatAccountButton() {
    return $('//android.widget.Button[@content-desc="Create Account"]');
  }
  get loginButton() {
    return $('//android.widget.Button[@content-desc="Log in"]');
  }
  get profileTab() {
    return $('//android.view.View[@content-desc="Profile"]');
  }

  get firstTweet() {
    return $(
      `//android.widget.ScrollView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]`
    );
  }

  composePost(index) {
    let selector;

    switch (index) {
      case 1:
        selector =
          '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]';
        break;
      case 2:
        selector =
          '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button[4]';
        break;
      default:
        throw new Error(`Invalid index: ${index}`);
    }

    return $(selector);
  }

  get firstTimePost() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.widget.Button'
    );
  }

  getTab(tabType) {
    return this.tabFactory.createTab(tabType);
  }
}
class TabFactory {
  createTab(tabType) {
    switch (tabType) {
      case "For you":
        return new Tab(
          `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[1]`
        );
      case "Following":
        return new Tab(
          `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]`
        );
      default:
        throw new Error(`Invalid tab type: ${tabType}`);
    }
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
module.exports = new HomePage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
