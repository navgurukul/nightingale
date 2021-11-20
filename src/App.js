
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage"
import Header from "./Components/Header"

function App() {
  return (
   <>
   {/* <Header/> */}
   <HomePage/>
  
      {/* <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/header" component={Header} />
        
      </Switch> */}
   </>
  );
}

export default App;
