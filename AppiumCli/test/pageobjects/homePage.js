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
}

module.exports = new HomePage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
