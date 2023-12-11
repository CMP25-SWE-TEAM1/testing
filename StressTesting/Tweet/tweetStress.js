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

  group("Retweet Tweet", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/retweet/${tweetId}`;

    const payload = JSON.stringify({
      tweetId: "6560bb6cb12eb3bc02129bb1",
    });

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.patch(tweetUrl, payload, tweetHeaders);

    check(tweetResponse, {
      "Status is 204": (r) => r.status === 204,
    });
    console.log(tweetResponse.body);
    sleep(1);
  });

  group("Like Tweet", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/like/${tweetId}`;

    const payload = JSON.stringify({
      tweetId: "6560bb6cb12eb3bc02129bb1",
    });

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.post(tweetUrl, payload, tweetHeaders);

    check(tweetResponse, {
      "Status is 204 or 400": (r) => r.status === 204 || r.status === 400,
    });
    console.log(tweetResponse.body);
    sleep(1);
  });

  group("Unlike Tweet", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/unlike/${tweetId}`;

    const payload = JSON.stringify({
      tweetId: "6560bb6cb12eb3bc02129bb1",
    });

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.post(tweetUrl, payload, tweetHeaders);

    check(tweetResponse, {
      "Status is 204 or 400": (r) => r.status === 204 || r.status === 400,
    });
    console.log(tweetResponse.body);
    sleep(1);
  });

  group("Delete Tweet", function () {
    const authToken = getToken();
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/656b4246ce181e091f44ed68`;

    const payload = JSON.stringify({});

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.del(tweetUrl, payload, tweetHeaders);

    check(tweetResponse, {
      "Status is 404": (r) => r.status === 404,
    });
    console.log(tweetResponse.body);
    sleep(1);
  });

  group("Get Tweet Replies", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/replies/${tweetId}`;

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.get(tweetUrl, tweetHeaders);

    check(tweetResponse, {
      "Status is 200": (r) => r.status === 200,
    });
    console.log(tweetResponse.body);
    sleep(1);
  });
  group("Get Tweet Retweeters", function () {
    const authToken = getToken();
    const tweetId = "6560bb6cb12eb3bc02129bb1";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/retweeters/${tweetId}`;

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.get(tweetUrl, tweetHeaders);

    check(tweetResponse, {
      "Status is 200": (r) => r.status === 200,
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

  // UNTESTED
  group("Tweet Search With Word.", function () {
    const authToken = getToken();
    const word = "apples";
    const tweetUrl = `http://backend.gigachat.cloudns.org/api/tweets/search/${word}`;

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
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "DeleteTweetReport210VUs.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 1 --duration 1m TweetStress.js
