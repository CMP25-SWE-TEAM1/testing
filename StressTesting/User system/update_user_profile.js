import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// export const options={
//     vus: 10,
//     duration:'10s',
// }

 const userEmail = "mahmoud.khattab13@gmail.com";
 const userPassword = "deaddead";

export default function getToken() {
  const url = 'http://backend.gigachat.cloudns.org/api/user/profile';
  
  const payload = JSON.stringify({
    bio: 'my wife is non existent  -----   proved by contradiction',
    location: '4awerma fi rosto el 7osary',
    website: 'codeforces.com',
    nickname: 'husbando',
    birth_date: '03-03-2003'
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTBkMmY5ZjkwODhlODgzMThmZDEwYyIsImlhdCI6MTcwMTEwMzI2NywiZXhwIjoxNzA4ODc5MjY3fQ.Il_1vL2PbOE36g0wW55Lh1M7frJWx73gNIZ0uDuP5yw",
    },
    username: 'mahmoud',
  };

  const res = http.patch(url,payload,params);

  check(res, {
    "Status is 204": (r) => r.status === 204,
    //"Response includes token": (r) => JSON.parse(r.body).token !== undefined,
  });
  //const token = JSON.parse(res.body).token;
  console.log(res.status);
  console.log(res.body);
  sleep(1);

 // return token;
}
  //sleep(1);