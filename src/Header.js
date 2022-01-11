import React from "react";

//Header Component
const Header = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
      <div className="div1">
        <h3>DigiCollect</h3>
        <h3 className="div2">DigiHRMs</h3>
      </div>
      <a href="#Dashboard" className="active">
        Dashboard
      </a>
      <a href="#Company">Company Info</a>
      <a href="#Employee">Employee Info</a>
      <a href="#Job">Job Portal</a>
      <a href="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Header;
