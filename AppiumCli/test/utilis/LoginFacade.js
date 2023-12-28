const LoginPage = require("../pageobjects/loginPage"); 
const HomePage = require("../pageobjects/homePage");
class LoginFacade {
  static async performLogin(username, password) {
    const loginButton = await LoginPage.loginButton;
    await loginButton.click();
    await driver.pause(1000);
    await (await LoginPage.userNameField).click();
    await (await LoginPage.userNameField).clearValue();
    await (await LoginPage.userNameField).addValue(username);
    await (await LoginPage.nextButton).click();

    await (await LoginPage.userNameView).getText();
    await (await LoginPage.userPasswordField).click();
    await (await LoginPage.userPasswordField).clearValue();
    await (await LoginPage.userPasswordField).addValue(password);
    await (await LoginPage.showPasswordButton).click();
    await (await LoginPage.loginButton).click();
    await driver.pause(1000);

    const allowNotificationButton = await HomePage.allowNotificationButton;
    await allowNotificationButton.click();
    await driver.pause(2000);
  }
}

module.exports = LoginFacade;
