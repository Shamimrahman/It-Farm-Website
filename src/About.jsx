import React from "react";
import Commoncode from "./Commoncode";
import Navbar from "./Navbar";

function About() {
  let add = "https://i.ytimg.com/vi/XwLWDVBpmQo/maxresdefault.jpg";
  return (
    <div>
      <Commoncode
        headline="Welcome to About Page ⏯️"
        btn="Get Contact"
        img={add}
      ></Commoncode>
    </div>
  );
}

export default About;
