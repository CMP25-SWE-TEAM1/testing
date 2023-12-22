const LoginPage = require("../pageobjects/loginPage"); // Adjust the path as needed

class LoginFacade {
  static async performLogin(username, password) {
    const loginButton = await LoginPage.loginButton;
    await loginButton.click();
    await driver.pause(1000);

    const userNameField = await LoginPage.userNameField;
    await userNameField.click();
    await userNameField.clearValue();
    await userNameField.addValue(username);

    const nextButton = await LoginPage.nextButton;
    await nextButton.click();

    const userNameView = await LoginPage.userNameView;
    await userNameView.getText();

    const userPasswordField = await LoginPage.userPasswordField;
    await userPasswordField.click();
    await userPasswordField.clearValue();
    await userPasswordField.addValue(password);

    const showPasswordButton = await LoginPage.showPasswordButton;
    await showPasswordButton.click();

    await loginButton.click(); // Assuming this is the final login button
    await driver.pause(2000);
  }
}

module.exports = LoginFacade;
