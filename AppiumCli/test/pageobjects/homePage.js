const { $, $$ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
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
  get tweetTextForm() {
    return $("//android.widget.EditText");
  }
  get postButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button'
    );
  }
  get addImageButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]'
    );
  }
}

module.exports = new HomePage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
