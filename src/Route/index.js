import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Page/Header";
import Footer from "../Page/Footer";
import AboutPage from "../Page/AboutPage";
import Donate from "../Page/Donate";
import NgHiring from "../Page/NgHiring";
import TeamPage from "../Page/TeamPage";
import NgLabs from "../Page/NGLabs";
import Programmer from "../Page/Programmer";
import Partners from "../Page/Partners";
import Home from "../Page/HomePage";
import Privacy from "../Page/Privacy";
import CampusPages from "../Page/CampusPages";
import PageNotFound from "../Page/PageNotFound";
import OurCampus from "../Page/OurCampus";
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}
const Scroller = withRouter(ScrollToTop);
function Routing() {
  return (
    <>
      <Header />
      <Scroller />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/hiring" component={NgHiring} />
        <Route exact path="/job-course" component={Programmer} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/nglabs" component={NgLabs} />
        <Route exact path="/programmer" component={Programmer} />
        {/* <Route exact path="/designer" component={Designers} /> */}
        <Route exact path="/ourcampus" component={OurCampus}/>
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/campus" component={CampusPages} />
        <Route exact path="*/" component={PageNotFound} />

      </Switch>
      <Footer />
    </>
  );
}

export default Routing;
