import React from "react";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="box">
      <div className="box-left">
        <i class="material-icons " style={{ color: "white" }}>
          menu
        </i>
        <img
          src={require("../../../assets/logo/logo.png")}
          className="logo"
          alt="logo"
        />
      </div>
      <div className="box-right">
        <a className="link" href="#">
          INTRODUCTION
        </a>
        <a className="link" href="#">
          SOLUTION
        </a>
        <a className="link mr-50" href="#">
          RATEPLAN
        </a>
        <a className="link line mr-50 " href="#"></a>
        <a className="link " href="#">
          LOGIN
        </a>
        <a className="link" href="#">
          APPLY FOR FREE USE
        </a>
      </div>
    </div>
  );
};

export default Navbar;
