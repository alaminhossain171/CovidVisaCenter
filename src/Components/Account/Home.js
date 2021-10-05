import React from "react";
import "../../Assets/CSS/Account/Home.css";
import logo from "../../Assets/Images/logo.png";
import BackgroundImage from "../../Assets/Images/homepage-background.png";

const Home = () => {
  return (
    <div className="container">
      <img className="background-image" src={BackgroundImage} alt="Logo" />
      <div className="showcase">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className="text-container text-center">
          <div className="col">
            <div className="row card">
              <h1 className="card-title">Trusted person log in</h1>
            </div>
            <div className="row card">
              <h1 className="card-title">Center Administrator</h1>
            </div>
            <div className="row card">
              <h1 className="card-title">Center Registration</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
