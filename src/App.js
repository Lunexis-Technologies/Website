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

// Import the functions you need from the SDKs you need

const sendgridapi ="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";


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
