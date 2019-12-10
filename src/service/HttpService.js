import axios from "axios";
class HttpService {
  get(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "B1tD3V"
      }
    }).then(response => response.json());
  }

  post(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "B1tD3V"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          return new Promise((res, rej) => rej());
        }
        return data;
      });
  }
}
export const http = new HttpService();
