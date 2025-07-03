import { useState } from "react";
import { Navigation } from "../partials/Nav";
import { Hero } from "../partials/home/Hero";
import { Infographic } from "../partials/home/Infographic";
import { VolunteerAreas } from "../partials/home/VolunteerAreas";
import { Sponsors } from "../partials/home/Sponsors";
import { Subscribe } from "../partials/home/Subscribe";
import Footer from "../partials/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Infographic />
    </>
  );
}
