import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import PhotoGallery from "./PhotoGallery";
import Home from "./Home";
import Plants from "./Plants";
import { Scrollspy } from "reactstrap-scrollspy";

function App() {
  return (
    <React.Fragment>
      <Scrollspy
        names={["home", "plants", "about", "photoGallery", "contactUs", null]}
        homeIndex={0}
      >
        <Home />
        <Plants />
        <About />
        <PhotoGallery />
        <ContactUs />
      </Scrollspy>
    </React.Fragment>
  );
}

export default App;
