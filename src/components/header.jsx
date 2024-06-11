import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background: white !important;
    height: 100%;
    padding: 20px 0;
`;

const Intro = styled.div`
    position: relative;
    text-align: center;
    // padding: 40px 0;
`;

const LogoImage = styled.img`
    width: 600px;
    
    @media (max-width: 768px) {
        width: 70%;
    }
`;

const LiveConference = styled.div`
    margin-top: 100px;
    font-size: 1.5em;
    font-weight: bold;
`;

export const Header = ({ title, paragraph }) => {
  return (
    <HeaderContainer id="home">
      <Intro>
          <div className="container">
              <div className="intro-text">
                <LogoImage src={process.env.PUBLIC_URL + "/img/logos/logo.png"} alt="logo"/>
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
                  <img width={100} src={process.env.PUBLIC_URL + "/img/logos/bitdefender_logo.png"} alt="bitdefender_logo"></img>
                </a>{" "}

                <a
                  href="https://www.hotelunirea.ro/ro/"
                >
                  <img width={100} src={process.env.PUBLIC_URL + "/img/logos/hotel_unirea_icon.jpg"} alt="bitdefender_logo"></img>
                </a>{" "}

                <LiveConference className="join-live-conference">
                <a
                  href="https://uaic.webex.com/uaic/j.php?MTID=m727ccd449192e92e9872458086344d9a"
                >
                  Join Live Conference!
                </a>{" "}
                </LiveConference>
              </div>
              
          </div>
      </Intro>
    </HeaderContainer>
  );
};
