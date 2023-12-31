const { $, $$ } = require("@wdio/globals");

class TweetPage {
  get userInformationLink() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button/android.view.View[1]`
    );
  }
  get userInformationImage() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button/android.view.View[1]`
    );
  }
  get retweetNumber() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[2]`);
  }
  get likersNumber() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[3]`);
  }
  get replyButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[4]`);
  }

  get retweetButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[5]`);
  }
  get likeButton() {
    return $(`//android.widget.Button[@index="0"]/android.widget.Button[6]`); //8
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
  get allowAccessButton() {
    return $(
      `//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_all_button"]`
    );
  }
  getImageFromTheGallery(index) {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.ImageView[${index}]`
    );
  }
  getVideoFormTheGallery() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View`
    );
  }
  get rightButton() {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[3]`
    );
  }
  get firstTimePost() {
    return $('//android.widget.Button[@content-desc="Got it"]');
  }
  get tweetTextForm() {
    return $("//android.widget.EditText");
  }
  get postButton() {
    return $('//android.widget.Button[@content-desc="Post"]');
  }
  get addImageButton() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]'
    );
  }
  async getComment(index) {
    return $(
      `//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button[${
        index + 1
      }]`
    );
  }
}

module.exports = new TweetPage();
