import React, { useState, useEffect } from "react";
import "./styles.css";
import OurAlumni from "./Ouralumni";
import Timeline from "./Timeline";
import Slider from "./Slider";
import Devider from "./Card/Devider";


function NgHiring() {
  return (
    <main >
      <Timeline /> 
      <OurAlumni />  
      <Slider />
      <Devider/>
    </main>
  );
}

export default NgHiring;
