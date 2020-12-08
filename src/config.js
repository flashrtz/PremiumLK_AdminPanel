import React, { Component } from "react";

var token = sessionStorage.getItem("token");
var api = "https://premiumlkapi.herokuapp.com/api";

export const CommonGet = (controller, queryString) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
   // body: JSON.stringify(queryString),
  };

  return fetch(api + "/" + controller,requestOptions);
};

export const CommonGetById = (controller, queryString) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
   // body: JSON.stringify(queryString),
  };

  return fetch(api + "/" + controller + "/" + queryString, requestOptions);
};

export const CommonGetByParams = (controller, queryString) => {
  return fetch(api + "/" + controller + "?" + queryString);
};

export const CommonPost = (controller, requestbody) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonUpdate = (controller, requestbody) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonDeleteById = (controller, queryString) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(api + "/" + controller + "/" + queryString, requestOptions);
};
export const CommonDeleteAll = (controller, requestbody) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonUpdateById = (controller, queryString, requestbody) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller + "/" + queryString, requestOptions);
};
