import React, { useState, useEffect } from "react";
import "./styles.css";
import OurAlumni from "./Ouralumni";
import Timeline from "./Timeline";
import Slider from "./Slider";
import TwoSectionLayout from "./TwoSectionlayout";

function NgHiring() {
  return (
    <main >
      <Timeline /> 
      <OurAlumni />  
      <Slider />
      <TwoSectionLayout />
    </main>
  );
}

export default NgHiring;
