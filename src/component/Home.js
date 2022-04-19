import React from "react";
import Common from "./Common";
import web from "./img-1.png";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with "
        imgsrc={web}
        visit="/about"
        btnname="GetStarted"
      />
    </>
  );
};

export default Home;
