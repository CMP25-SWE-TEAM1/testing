const { $, $$ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DMPage {
  get DMButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[5]'
    );
  }

  get firstChat() {
    return $(
      '//android.widget.ScrollView/android.view.View/android.widget.ImageView[@index="0"]'
    );
  }
  get chatBox() {
    return $('//android.view.View[@content-desc="Start a Message"]');
  }
  get chatForm() {
    return $("//android.widget.EditText");
  }

  get message() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[@index="5"]'
    );
  }

  get postMessageButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button[2]'
    );
  }
}

module.exports = new DMPage();
