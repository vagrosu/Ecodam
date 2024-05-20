import React from "react";
import styled from "styled-components";
import logo from "./../images/logo.jpg";
import bitdefenderlogo from "./../images/bitdefender_logo.png";

const HeaderContainer = styled.header`
  height: 100vh;
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
                <Logo src={logo} alt="logo" />
                <Title>{title ? title : "Loading"}</Title>
                <Paragraph>{paragraph ? paragraph : "Loading"}</Paragraph>
                <a href="https://www.bitdefender.ro">
                  <BitdefenderLogo src={bitdefenderlogo} alt="bitdefender_logo" />
                </a>
              </div>
            </div>
          </div>
        {/*</Overlay>*/}
      </Intro>
    </HeaderContainer>
  );
};
