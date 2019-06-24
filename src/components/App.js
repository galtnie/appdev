import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Services from "../routes/Services";
import Technologies from "../routes/Technologies";
import Portfolio from "../routes/Portfolio";
import Company from "../routes/Company";
import Blog from "../routes/Blog";
import Contacts from "../routes/Contacts";
import UpperBar from "./UpperBar";

function App() {
  return (
    <Switch>
      <Route path='/' component={UpperBar} />
      <Route path="/" exact component={Home} />
      <Route path="/services" exact component={Services} />
      <Route path="/technology" exact component={Technologies} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/company" exact component={Company} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contacts" exact component={Contacts} />
    </Switch>
  );
}

export default App;
