import React from "react";
import logo from "./../images/logo.jpg"
import bitdefenderlogo from "./../images/bitdefender_logo.png"
import { hover } from "@testing-library/user-event/dist/hover";

export const Header = ({title,paragraph}) => {
  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={logo} alt="logo"></img>
                <h1 style={{
                  fontSize: "3em",
                  color: "black",
                  padding: "40px",
                }}>
                  {title ? title : "Loading"}
                </h1>
                <p style={{
                  fontSize: "1em",
                  color: "black",
                  fontWeight: "bolder"
                }}>{paragraph ? paragraph : "Loading"}</p>
                <a
                  href="https://www.bitdefender.ro"
                >
                  <img width={100} src={bitdefenderlogo} alt="bitdefender_logo"></img>
                </a>{" "}

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
