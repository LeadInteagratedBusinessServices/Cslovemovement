import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPages from "./Components/Aboutpages";
import PrioritiesPages from "./Components/PrioritiesPage";
import YourInvolvement from './Components/YourInvlovements';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPages} />
          <Route path="/priorities" component={PrioritiesPages} />
          <Route path="/involvement" component={YourInvolvement} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
