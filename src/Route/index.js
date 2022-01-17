import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Page/Header";
import GetInvolved from "../Page/GetInvolved";
import Footer from "../Page/Footer";
import AboutPage from "../Page/AboutPage";
import Donate from "../Page/Donate";
import NgHiring from "../Page/NgHiring";
import JobCourse from "../Page/JobCourse";
import TeamPage from "../Page/TeamPage";
import NgLabs from "../Page/NGLabs";
import Programmer from "../Page/Programmer";
import CifPage from "../Page/CIFpage";
import Partners from "../Page/Partners";

function Routing() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/hiring" component={NgHiring} />
        <Route exact path="/job-course" component={JobCourse} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/nglabs" component={NgLabs} />
        <Route exact path="/programmer" component={Programmer} />
        <Route exact path="/cif" component={CifPage} />
        <Route exact path="/partners" component={Partners} />
        {/* <Route exact path="/involved" component={GetInvolved} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default Routing;
