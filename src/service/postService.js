import React from "react";
import http from "./HttpService";

export const fetchPost = () => {
  const requestUrl = "";

  return http.get(requestUrl).then(postData => {
    const myPosts = postData.map(postData => {
      return new postData(postData);
    });
    return myPosts;
  });
};
