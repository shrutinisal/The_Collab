//eslint-disable-next-line
import React, { useState } from "react";
import Logo from "./images/logo.png"

const ColoredLine = ({ color }) => (
    <hr
        style={{
          margin: 0,
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function Navbar() {
  return (
    <div>
    <nav className="nav1 navbar navbar-expand-lg nav bottom-nav">

      <a className="navbar-brand SmartMail-logo" href="#">
       <img src={Logo} width="30" height="30" className="d-inline-block SmartMail-img " alt="" />
      Smart Mail</a>
      <ul className="navbar-nav list margin-nav1">
        <li className="navbar-item normaltheme ">
          <a className="nav-link " href="#">Profile</a>
        </li>
        <li className="navbar-item normaltheme">
          <a className="nav-link" href="#">Profile</a>
        </li>
        <li className="navbar-item normaltheme">
          <a className="nav-link" href="#">Profile</a>
        </li>


        <li className="navbar-item normaltheme">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      </nav>
      <ColoredLine color="white" />
</div>



  );
}
export default Navbar;
