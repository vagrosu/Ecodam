import React from "react";
import logo from "./../images/logo.jpg"

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img width={100} src={logo} alt="logo"></img>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#speakers" className="page-scroll">
                Speakers
              </a>
            </li>
            <li>
              <a href="#program" className="page-scroll">
                Program
              </a>
            </li>
            <li>
              <a href="#participants" className="page-scroll">
                Participants
              </a>
            </li>
            <li>
              <a href="#sponsor" className="page-scroll">
                Sponsor
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#editions" className="page-scroll">
                Previous Editions
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};