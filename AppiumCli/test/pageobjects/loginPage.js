const { $ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  get userNameField() {
    return $('//android.widget.EditText[@index="2"]');
  }
  get nextButton() {
    return $('//android.widget.Button[@content-desc="Next"]');
  }
  get userNameView() {
    return $('//android.view.View[@index="2"]');
  }
  get userPasswordField() {
    return $('//android.widget.EditText[@index="3"]');
  }
  get showPasswordButton() {
    return $('//android.widget.EditText[@index="3"]/android.widget.Button');
  }
  get loginButton() {
    return $('//android.widget.Button[@content-desc="Log in"]');
  }
  get wrongPasswordMessage() {
    return $('//android.view.View[@content-desc="Wrong password!"]');
  }
  get forgetPasswordButton() {
    return $('//android.widget.Button[@content-desc="Forget password?"]');
  }
  get codeSentMessage() {
    return $('//android.view.View[@content-desc="We sent you a code"]');
  }
}

module.exports = new LoginPage();
//$ to capture on element
//$$ to capture all elements
//~ for accessiblity id
