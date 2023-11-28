import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
import getToken from "./loginStress.js";
import TestOptions from "./options.js";

const optionsInstance = new TestOptions();
export const options = optionsInstance.getOptions();

export default function () {
  group("Get Tweet", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/${tweetId}`;

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.get(tweetUrl, tweetHeaders);

    check(tweetResponse, {
      "Status is 200": (r) => r.status === 200,
      "Tweet body is not empty": (r) => JSON.parse(r.body).data !== undefined,
    });

    console.log(tweetResponse.body);
    sleep(1);
  });
  group("Post Tweet", function () {
    const authToken = getToken();
    const url = `http://backend.gigachat.cloudns.org/api/tweets/`;

    const tweetData = {
      description: "tweet 1",
      media: [
        {
          type: "jpg",
          data: "www.photo.png",
        },
      ],
      type: "tweet",
    };

    const payload = JSON.stringify(tweetData);

    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.post(url, payload, params);

    check(tweetResponse, {
      "Status is 201": (r) => r.status === 201,
      "Tweet includes data": (r) => JSON.parse(r.body).data !== undefined,
    });

    console.log(tweetResponse.body);

    sleep(1);
  });
  group("Get Tweet Likers", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/likers/${tweetId}`;

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.get(tweetUrl, tweetHeaders);

    check(tweetResponse, {
      "Status is 200": (r) => r.status === 200,
      "Tweet body is not empty": (r) => JSON.parse(r.body).data !== undefined,
    });

    console.log(tweetResponse.body);
    sleep(1);
  });

  group("Delete Tweet", function () {});
  group("Get Tweet Replies", function () {});
  group("Get Tweet Retweeters", function () {});
  group("Tweet Search With Word.", function () {});
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "TweetReport.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 1 --duration 1m TweetStress.js
