import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Technologies from "../pages/Technologies";
import Portfolio from "../pages/Portfolio";
import Company from "../pages/Company";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import UpperBar from "./UpperBar";
import { StyledMain } from "../styles";

function App() {
  return (
    <StyledMain>
      <Route path="/" component={UpperBar} />
      <Route path="/" exact component={Home} />
      <Route path="/services" exact component={Services} />
      <Route path="/technologies" exact component={Technologies} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/company" exact component={Company} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contacts" exact component={Contacts} />
    </StyledMain>
  );
}
export default App;
