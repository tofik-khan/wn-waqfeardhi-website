import { useState } from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/home/Hero";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

function sendSubscribeRequest(email) {
  const body = {
    auth: process.env.API_AUTH_TOKEN,
    email: email,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch("/api/add-subscriber", requestOptions)
    .then((response) => response.json())
    .then((response) => console.log(response));

  return true;
}
