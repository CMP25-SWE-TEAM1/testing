const { $, $$ } = require("@wdio/globals");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsPage {
  get pravicyAndSafty() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.view.View[2]`
    );
  }

  get muteAndBlock() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]`
    );
  }
  get blockedAccounts() {
    return $(`//android.view.View[@content-desc="Blocked accounts"]`);
  }
  get mutedAccounts() {
    return $(`//android.view.View[@content-desc="Muted accounts"]`);
  }
  get blockedButtons() {
    return $$(`//android.widget.Button[@content-desc="Blocked"]`);
  }
  get mutedButtons() {
    return $$(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button/android.widget.Button`
    );
  }
}

module.exports = new SettingsPage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
