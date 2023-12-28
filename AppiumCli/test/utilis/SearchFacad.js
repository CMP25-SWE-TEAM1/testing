const HomePage = require("../pageobjects/homePage");
class SearchFacad {
  static async search(query) {
    const searchButton = await HomePage.searchButton;
    await searchButton.click();
    await searchButton.click();

    await (await HomePage.searchForm).click();
    await (await HomePage.searchForm).addValue(query);
    await driver.execute("mobile: performEditorAction", { action: "search" });
    await driver.pause(2000);
  }
}

module.exports = SearchFacad;
