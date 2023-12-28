import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
//import TestOptions from "./options.js";

// const optionsInstance = new TestOptions();
// export const options = optionsInstance.getOptions();

// export const options = {
//     scenarios: {
//       shared_iter_scenario: {
//         executor: "shared-iterations",
//         vus: 10,
//         iterations: 100,
//         startTime: "0s",
//       },
//       per_vu_scenario: {
//         executor: "per-vu-iterations",
//         vus: 1000,
//         iterations: 1,
//         startTime: "10s",
//       },
//     },
//   };

const userEmail = "mahmoud_ossama";
const userPassword = "alhamdulillah";

export default function () {
  group("Check login credentials", function(){
    const url = 'https://backend.gigachat.cloudns.org/api/user/login';
  const payload = JSON.stringify({
    query: userEmail,
    password: userPassword,
    push_token: null,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    "Status is 200": (r) => r.status === 200,
    "Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
  const token = JSON.parse(res.body).token;
  console.log(res.status);
  console.log(token);
  console.log(res.body);
  sleep(1);

  return token;
  });
}

// export function handleSummary(data) {
//   return {
//     stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
//     "LoginReport.json": JSON.stringify(data), //the default data object
//   };
// } 
