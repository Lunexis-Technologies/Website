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

import Company from "./Components/Company";

// Import the functions you need from the SDKs you need



const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Company/>
      <Footer />
      <STTop />
    </div>
  );
};

export default App;
