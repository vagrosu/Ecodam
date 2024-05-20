import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 100px 0 60px;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: rgba(255, 255, 255, 0.75);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 0;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
`;

const ContactLabel = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Footer = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
`;

export const Contact = () => {
  return (
    <div>
      <Section id="editions">
        <Container>
          <div>
            <SectionTitle>Contact Info</SectionTitle>
            <ContactItem>
              <ContactLabel>
                <i className="fa fa-map-marker"></i> Address
              </ContactLabel>
              <ContactText>16, Gen. Berthelot, 700483 - Iasi, Romania</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactLabel>
                <i className="fa fa-phone"></i> Phone
              </ContactLabel>
              <ContactText>(+40) 232 201 490</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactLabel>
                <i className="fa fa-envelope-o"></i> Email
              </ContactLabel>
              <ContactText>summerschool@info.uaic.ro</ContactText>
            </ContactItem>
          </div>
        </Container>
      </Section>
      <Footer id="footer">
        <div className="container">
          <p>&copy; 2024 Ecodam Summer School</p>
        </div>
      </Footer>
    </div>
  );
};
