import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

//  export const options={
//      vus: 1,
//      duration:'15s',
//  }

 const userEmail = "mahmoud.khattab13@gmail.com";
 const userPassword = "deaddead";

export default function getToken() {
  const url = 'http://backend.gigachat.cloudns.org/api/trends/free_palestine';
  const payload = JSON.stringify({
    page: 3,
    count: 3
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTBkMmY5ZjkwODhlODgzMThmZDEwYyIsImlhdCI6MTcwMTEwMzI2NywiZXhwIjoxNzA4ODc5MjY3fQ.Il_1vL2PbOE36g0wW55Lh1M7frJWx73gNIZ0uDuP5yw"
    },
  };

  const res = http.get(url, payload, params);

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
  //sleep(1);