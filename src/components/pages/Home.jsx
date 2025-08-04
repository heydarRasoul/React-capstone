import { useEffect, useState } from "react";

import happyShopper from "../../assets/images/happy-shopper.jpg";
import logo from "../../assets/icons/logo.png";

export default function Home() {
  const [textAlign, setTextAlign] = useState("center");

  return (
    <div className="home-wrapper">
      <img src={happyShopper} alt="happy-shpper" />
      <div>
        <h2>Everything You Need. </h2>
        <h1>One Place</h1>
      </div>
      <div className="moving-box">
        <img className="logo-icon" src={logo} />
      </div>
    </div>
  );
}
