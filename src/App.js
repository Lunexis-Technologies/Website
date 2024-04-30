import React from "react";
import "./app.scss";
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,

  STTop,
 
} from "./Components";

import Careers from "./Components/Careers";
import Company from "./Components/Company";

///gtdgsggsgs


const App = () => {
  return (
    <div className="app">
      
      <Navbar />
     
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <STTop />
    </div>
  );
};

export default App;
