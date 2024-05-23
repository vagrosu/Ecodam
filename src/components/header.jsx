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
  padding: 40px 0;
`;

export const Header = ({ title, paragraph }) => {
  return (
    <HeaderContainer id="home">
      <Intro>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={process.env.PUBLIC_URL + "/img/logos/logo.jpg"} alt="logo"></img>
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

              </div>
            </div>
          </div>
      </Intro>
    </HeaderContainer>
  );
};
