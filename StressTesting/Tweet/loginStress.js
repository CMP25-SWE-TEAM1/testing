import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
import TestOptions from "./options.js";

const optionsInstance = new TestOptions();
export const options = optionsInstance.getOptions();

const userEmail = "Ibraheimtarek1972@gmail.com";
const userPassword = "anything";

export default function getToken() {
  const url = `http://backend.gigachat.cloudns.org/api/user/login`;
  const payload = JSON.stringify({
    email: userEmail,
    password: userPassword,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    "Status is 201": (r) => r.status === 201,
    "Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
  const token = JSON.parse(res.body).token;
  console.log(token);
  sleep(1);

  return token;
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "LoginReport.json": JSON.stringify(data), //the default data object
  };
}
//k6 run --vus 10 --duration 10s post.js
//k6 run --out json=test_results.json post.js
