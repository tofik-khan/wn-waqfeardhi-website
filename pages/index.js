import { useState } from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/home/Hero";
import { Infographic } from "../partials/home/Infographic";
import { VolunteerAreas } from "../partials/home/VolunteerAreas";
import { Sponsors } from "../partials/home/Sponsors";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <Infographic />
      <VolunteerAreas />
      <Sponsors />
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
