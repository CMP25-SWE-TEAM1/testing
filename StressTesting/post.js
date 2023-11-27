import http from "k6/http";

export default function () {
  const url = "http://test.k6.io/login";
  const payload = JSON.stringify({
    email: "aaa",
    password: "bbb",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post(url, payload, params);
  //check the response parameters
}
//k6 run --vus 10 --duration 10s post.js
//k6 run --out json=test_results.json post.js
