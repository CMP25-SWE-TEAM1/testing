import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
import getToken from "./loginStress.js";
import TestOptions from "./options.js";

const optionsInstance = new TestOptions();
export const options = optionsInstance.getOptions();

export default function () {
  group("Delete Tweet", function () {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzcyZjFkNWEzY2ZiNTJkYWM2MzY4NSIsImlhdCI6MTcwMzY3MDg4NCwiZXhwIjoxNzExNDQ2ODg0fQ._YHFqFGPiS_3m1eYFTJLTNKCl5UNz5VVCca8YMFPATk";

    const tweetUrl = `https://backend.gigachat.cloudns.org/api/tweets/658adf522dd1e73581a6e088`;

    const payload = JSON.stringify({});

    const tweetHeaders = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.del(tweetUrl, payload, tweetHeaders);

    sleep(1);
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "يeleteTweetReport.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 1 --duration 1m TweetStress.js
