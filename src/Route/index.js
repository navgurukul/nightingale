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
import Designers from "../Page/Designers" 
import Privacy from "../Page/Privacy";
import CampusPages from "../Page/CampusPages";
import PageNotFound from "../Page/PageNotFound";
import SchoolProgramming from "../Page/SchoolsPages/Programing";
import SchoolOfDesignPage from "../Page/SchoolsPages/SchoolsOfDesign";
import SchoolOfBusinessPage from "../Page/SchoolsPages/SchoolOfBusiness";
import SchoolOfFinancePage from "../Page/SchoolsPages/SchoolOfFinance"
import SchoolOfSecondChances from "../Page/SchoolsPages/SchoolOfSecondchances"

import BCA from "../Page/SchoolsPages/BCAProgram";
import Careers from "../Page/Careers";
import Thankyou from "../Page/NgHiring/Thankyou";

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
        <Route exact path="/school-programing" component={SchoolProgramming}></Route>
        <Route exact path="/school-design" component={SchoolOfDesignPage}></Route>
        <Route exact path="/school-busines" component={SchoolOfBusinessPage}></Route>
        <Route exact path="/school-finance" component={SchoolOfFinancePage}></Route>
        <Route exact path="/school-secondchance" component={SchoolOfSecondChances}></Route>

        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/hiring" component={NgHiring} />
        <Route exact path="/job-course" component={Programmer} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/nglabs" component={NgLabs} />
        <Route exact path="/programmer" component={Programmer} />
        <Route exact path="/designer" component={Designers} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/bca-programme" component={BCA} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/campus/:campusName" component={CampusPages} />
        <Route exact path="/thankyou" component={Thankyou} />
        <Route exact path="*/" component={PageNotFound} />


      </Switch>
      <Footer />
    </>
  );
}

export default Routing;