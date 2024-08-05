import React, { useState, useEffect } from "react";
import "./styles.css";
import OurAlumni from "./Ouralumni";
import Timeline from "./Timeline";
import Slider from "./Slider";


function NgHiring() {
  return (
    <main >
      <Timeline /> 
      <OurAlumni />  
      <Slider />
    </main>
  );
}

export default NgHiring;
