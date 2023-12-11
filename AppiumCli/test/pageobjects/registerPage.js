const { $, $$ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage {
  get creatAccountButton() {
    return $('//android.widget.Button[@content-desc="Create account"]');
  }
  get nextButton() {
    return $(`//android.widget.Button[@content-desc="Next"]`);
  }
  get signUpButton() {
    return $(`//android.widget.Button[@content-desc="Sign up"]`);
  }
  get seekBarOfBirthDate() {
    return $('//android.widget.SeekBar[@content-desc="2023"]');
  }
  get cannotSignupRightNowView() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[@content-desc="Can't sign up right now"]`
    );
  }
  get skipForNowButton() {
    return $(`//android.widget.Button[@content-desc="Skip for now"]`);
  }
  async getFormWithIndex(index) {
    return $$(`android.widget.EditText`)[index];
  }
  async getViewWithIndex(index) {
    return $$(`android.view.View`)[index];
  }
  async getViewWithHint(string) {
    return $(`//android.view.View[@hint="${string}"]`);
  }
}

module.exports = new RegisterPage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
