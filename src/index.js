import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Body />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
