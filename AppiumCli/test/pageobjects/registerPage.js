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
  getFormWithIndex(index) {
    return $$(`android.widget.EditText`)[index];
  }
  getViewWithIndex(index) {
    return $$(`android.view.View`)[index];
  }
}

module.exports = new RegisterPage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
