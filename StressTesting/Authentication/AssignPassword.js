import encoding from "k6/encoding";
import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";
import { check, sleep, group } from "k6";
// export const options={
//     vus: 10,
//     duration:'10s',
// }
export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 100,
      startTime: "0s",
    },
    per_vu_scenario: {
      executor: "per-vu-iterations",
      vus: 1000,
      iterations: 10,
      startTime: "10s",
    },
  },
};
 const userEmail = "mahmoud.khattab13@gmail.com";
 const userPassword = "deaddead";

export default function () {
  group("Verify assigning password", function(){
    const url = 'http://backend.gigachat.cloudns.org/api/user/AssignPassword/';
  
  const payload = JSON.stringify({
    password: 'alhamdulillah'
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I2MzA3ZjFlYTNiNmM4MGQ4N2JkNSIsImlhdCI6MTcwMzQxODA5MywiZXhwIjoxNzExMTk0MDkzfQ.4cXrOyu8ZHkKVsWzoT3ET13bMJ5cPUakLZY0zj4E740"
    },
  };  

  const res = http.patch(url,payload,params);

  check(res, {
    "Status is 200": (r) => r.status === 200,
    //"Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
  //const token = JSON.parse(res.body).token;
  console.log(res.status);
  console.log(res.body);
  sleep(1);
  });

 // return token;
}
export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: " ", enableColors: true }), // Show the text summary to stdout...
    "AssignPasswordReport.json": JSON.stringify(data), //the default data object
  };
} 
  //sleep(1);