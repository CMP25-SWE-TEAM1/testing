const { $, $$ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DMPage {
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
      "//android.widget.ScrollView/android.view.View[7]/android.view.View"
    );
  }

  get postMessageButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]'
    );
  }
}

module.exports = new DMPage();
