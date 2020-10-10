import React from "react";
import Commoncode from "./Commoncode";
import "./index.css";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  let add =
    "https://i2.wp.com/css-tricks.com/wp-content/uploads/2018/04/react-svg-component-library-1.gif?ssl=1";

  return (
    <div>
      <Commoncode
        headline="Welcome to pandas Solution 🐼"
        para="Grow your Bussiness with 👉 🐼"
        spara="You Will Not Be Disappointed ✳️"
        btn="Get Started"
        img={add}
      ></Commoncode>
      <br></br>
    </div>
  );
}

export default Home;
