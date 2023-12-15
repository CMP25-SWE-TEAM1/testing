import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
import getToken from "../Tweet/loginStress.js";
import TestOptions from "../Tweet/options.js";

const optionsInstance = new TestOptions();
export const options = optionsInstance.getOptions();

export default function () {
  group("Get Block List", function () {
    const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzcyZjFkNWEzY2ZiNTJkYWM2MzY4NSIsImlhdCI6MTcwMjY0OTIzMSwiZXhwIjoxNzEwNDI1MjMxfQ.8cNq8VIGDm0hYuUdH1S0fSY3HseGBuRj1XAufDXT9_I`;
    const url = `http://backend.gigachat.cloudns.org/api/user/blockList`;

    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const response = http.get(url, params);

    check(response, {
      "Status is 200 or 400": (r) => r.status === 200 || r.status === 400,
    });

    console.log(response.body);
    sleep(1);
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "getBlockListReport160VUs.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 1 --duration 1m TweetStress.js
