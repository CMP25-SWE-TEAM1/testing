import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
import getToken from "../Tweet/loginStress.js";
import TestOptions from "../Tweet/options.js";

const optionsInstance = new TestOptions();
export const options = optionsInstance.getOptions();

export default function () {
  group("unfollow", function () {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzcyZjFkNWEzY2ZiNTJkYWM2MzY4NSIsImlhdCI6MTcwMzY3MDg4NCwiZXhwIjoxNzExNDQ2ODg0fQ._YHFqFGPiS_3m1eYFTJLTNKCl5UNz5VVCca8YMFPATk";
    const username = "karreeem1";
    const url = `http://backend.gigachat.cloudns.org/api/user/${username}/unfollow`;

    const payload = JSON.stringify({});

    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tweetResponse = http.post(url, payload, params);

    check(tweetResponse, {
      "Status is 204 or 400": (r) => r.status === 204 || r.status === 400,
    });

    console.log(tweetResponse.body);
    sleep(1);
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "UnfollowReport.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 1 --duration 1m TweetStress.js
