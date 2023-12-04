const { $, $$ } = require("@wdio/globals");

class TweetPage {
  get retweetNumber() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[4]`);
  }
  get likersNumber() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[5]`);
  }
  get replyButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[6]`);
  }
  get retweetButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[7]`);
  }
  get likeButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[8]`);
  }
  get undoRepostButton() {
    return $(`//android.widget.Button[@content-desc="Undo Repost"]`);
  }
  get repostButton() {
    return $(`//android.widget.Button[@content-desc="Repost"]`);
  }
  get quoteButton() {
    return $(`//android.widget.Button[@content-desc="Quote"]`);
  }
}

module.exports = new TweetPage();
