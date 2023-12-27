import http from 'k6/http';
import { check, sleep, group } from "k6";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
// export const options={
//     vus: 10,
//     duration:'10s',
// }
// export const options = {
//   scenarios: {
//     shared_iter_scenario: {
//       executor: "shared-iterations",
//       vus: 100,
//       iterations: 1000,
//       startTime: "0s",
//     },
//     per_vu_scenario: {
//       executor: "per-vu-iterations",
//       vus: 10000,
//       iterations: 1,
//       startTime: "10s",
//     },
//   },
// };
 const userEmail = "mahmoud_ossama";
 const userPassword = "alhamdulillah";

export default function () {
  group("check for the login success", function(){
    const url = 'http://backend.gigachat.cloudns.org/auth/login/success';
  const payload = JSON.stringify({
    birthDate: '11-9-2001'
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I2MzA3ZjFlYTNiNmM4MGQ4N2JkNSIsImlhdCI6MTcwMzQxODA5MywiZXhwIjoxNzExMTk0MDkzfQ.4cXrOyu8ZHkKVsWzoT3ET13bMJ5cPUakLZY0zj4E740"
    },
  };

  const res = http.get(url);

  check(res, {
    "Status is 200": (r) => r.status === 200,
    //"Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
 // const token = JSON.parse(res.body).token;
  console.log(res.status);
//  console.log(res.body);
  sleep(1);
  });

//  return token;
}
export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "LoginSuccessReport.json": JSON.stringify(data), //the default data object
  };
}
  //sleep(1);