import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Page/Header";
import GetInvolved from "../Page/GetInvolved";
import Footer from "../Page/Footer";
import AboutPage from "../Page/AboutPage";
import Donate from "../Page/Donate";
import NgHiring from "../Page/NgHiring";
import JobCourse from "../Page/JobCourse";

function Routing() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        {/* <Route exact path="/donate" component={Donate} /> */}
        <Route exact path="/hiring" component={NgHiring} />
        <Route exact path="/job-course" component={JobCourse} />
        {/* <Route exact path="/involved" component={GetInvolved} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default Routing;
