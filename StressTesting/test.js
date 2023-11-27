import http from "k6/http";
import { sleep } from "k6";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { group } from "k6";
import TestOptions from "./options.js";

// const optionsInstance = new TestOptions();
// export const options = optionsInstance.getOptions();

// export default function () {
//   http.get("https://k6.io/");
//   sleep(1); //duration in second
// }

export default function () {
  group("visit product listing page", function () {
    // ...
    const res = http.get("https://k6.io/");
    check(res, {
      "body is not empty": (r) => JSON.parse(r.body) !== undefined,
    });
    sleep(1); //duration in second
  });
  group("add several products to the shopping cart", function () {
    // ...
  });
  group("visit login page", function () {
    // ...
  });
  group("authenticate", function () {
    // ...
  });
  group("checkout process", function () {
    // ...
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "TestReport.json": JSON.stringify(data), //the default data object
  };
}
