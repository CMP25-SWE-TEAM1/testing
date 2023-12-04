const User = require("../../fixtures/data.json");
const LoginPage = require("../pageobjects/loginPage");
const HomePage = require("../pageobjects/homePage");
const DMPage = require("../pageobjects/directMessagesPage");
const expect = require("chai").expect;

describe("Direct Messages", () => {
  afterEach(async () => {
    await driver.reloadSession();
  });

  it("post a messages", async () => {
    const DMButton = await DMPage.DMButton;
    await DMButton.click();

    const firstChat = await DMPage.firstChat;
    await firstChat.click();

    const chatBox = await DMPage.chatBox;
    await chatBox.click();

    const chatForm = await DMPage.chatForm;
    await chatForm.click();
    await chatForm.addValue("meow meow");

    const postMessageButton = await DMPage.postMessageButton;
    await postMessageButton.click();

    const message = await DMPage.message;
    let text = await message.getAttribute("content-desc");

    expect(text).equal("meow meow");
    await driver.pause(4000);
  });
});
//npx wdio
//./node_modules/.bin/wdio wdio.conf.js --spec ./test/specs/directMessages.e2e.js
//need await to get the item and another await to apply the fuction
//allure generate allure-results && allure open
