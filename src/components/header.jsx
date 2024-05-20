import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100%;
  padding: 20px 0;
`;

const Intro = styled.div`
  position: relative;
  text-align: center;
  padding: 40px 0;
`;

const Logo = styled.img`
  width: 350px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3em;
  color: black;
  margin: 20px 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: black;
  font-weight: bolder;
  font-family: 'Raleway', sans-serif;
`;

const BitdefenderLogo = styled.img`
  width: 100px;
  margin-top: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = ({ title, paragraph }) => {
  return (
    <HeaderContainer id="home">
      <Intro>
        {/*<Overlay>*/}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={"/img/logos/logo.jpg"} alt="logo"></img>
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
                  href="https://www.bitdefender.ro" id="sponsors"
                >
                  <img width={100} src={"/img/logos/bitdefender_logo.png"} alt="bitdefender_logo"></img>
                </a>{" "}

              </div>
            </div>
          </div>
        {/*</Overlay>*/}
      </Intro>
    </HeaderContainer>
  );
};
