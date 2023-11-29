import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
// export const options={
//     vus: 10,
//     duration:'10s',
// }
// export const options = {
//   scenarios: {
//     shared_iter_scenario: {
//       executor: "shared-iterations",
//       vus: 10,
//       iterations: 100,
//       startTime: "0s",
//     },
//     per_vu_scenario: {
//       executor: "per-vu-iterations",
//       vus: 10,
//       iterations: 10,
//       startTime: "10s",
//     },
//   },
// };
 const userEmail = "mahmoud.khattab13@gmail.com";
 const userPassword = "deaddead";

export default function getToken() {
  const url = 'http://backend.gigachat.cloudns.org/api/user/forgotPassword/';
  
  const payload = JSON.stringify({
    email: 'mahmoud.khattab13@gmail.com'
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjNhMzcwZGJkYzA2YzkyZjg2ZTRhYiIsImlhdCI6MTcwMTAyOTAxNiwiZXhwIjoxNzA4ODA1MDE2fQ.LoAtLJAoURxZ9YtQ01VNx5t-RLqgwKPTxSHekF-jpsk"
    },
  };  

  const res = http.post(url,payload,params);

  check(res, {
    "Status is 200": (r) => r.status === 200,
    //"Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
  //const token = JSON.parse(res.body).token;
  console.log(res.status);
  console.log(res.body);
  sleep(1);

 // return token;
}
// export function handleSummary(data) {
//   return {
//     stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
//     "GetProfileDetailsReport.json": JSON.stringify(data), //the default data object
//   };
// } 
  //sleep(1);