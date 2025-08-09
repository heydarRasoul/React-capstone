import { useState } from "react";

import happyShopper from "../../assets/images/happy-shopper.jpg";
import logo from "../../assets/icons/logo.png";
import shopper from "../../assets/images/shopper-one.jpg";
import shopper2 from "../../assets/images/shopper-2.jpg";
import shopper3 from "../../assets/images/shopper-3.webp";
import shopper4 from "../../assets/images/shopper-4.webp";
import shopper5 from "../../assets/images/shopper-5.webp";
import shopper8 from "../../assets/images/shopper-8.jpg";
import shopper9 from "../../assets/images/shopper-9.webp";
import shopper10 from "../../assets/images/shopper-10.webp";
import shopper11 from "../../assets/images/shopper-11.jpg";
import shopper12 from "../../assets/images/shopper-12.webp";
import shopper13 from "../../assets/images/shopper-13.jpg";
import shopper14 from "../../assets/images/shopper-14.webp";
import onePlaceLogo from "../../assets/icons/one-place-logo.png";

export default function Home() {
  const [textAlign, setTextAlign] = useState("center");

  return (
    <div className="home-wrapper">
      <div className="content-wrapper">
        <h2>Everything You Need. </h2>
        {/* <h1>One Place</h1> */}
        <img className="one-place-logo" src={onePlaceLogo} />
      </div>
      {/* <div className="moving-box">
        <img className="logo-icon" src={logo} />
        <img className="logo-icon" src={shopper} />
        <img className="logo-icon" src={shopper2} />
        <img className="logo-icon" src={shopper3} />
        <img className="logo-icon" src={shopper4} />
        <img className="logo-icon" src={shopper5} />
        <img className="logo-icon" src={shopper8} />
        <img className="logo-icon" src={shopper9} />
        <img className="logo-icon" src={shopper10} />
        <img className="logo-icon" src={shopper11} />
        <img className="logo-icon" src={shopper12} />
        <img className="logo-icon" src={shopper13} />
        <img className="logo-icon" src={shopper14} />
      </div> */}
      <img src={happyShopper} alt="happy-shpper" />
    </div>
  );
}
