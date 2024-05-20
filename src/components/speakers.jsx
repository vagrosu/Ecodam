import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    width: 100%;
    margin-bottom: 20px;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius:50%;
    object-fit:cover;
`;

const Name = styled.h4`
    margin-top: 15px;
    font-size: 18px;
    color: #333;
`;

const Role = styled.p`
    font-size: 14px;
    color: #666;
`;

const School = styled.p`
    text-align: center;
    font-size: 14px;
    color: #888;
    margin: 0;
`;

const ResponsiveContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;

    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

const TeamContainer = styled.div`
    margin-top: 50px;
    padding: 50px 20px;
    background: #f8f8f8;
`;

const Section = styled.div`
    margin-bottom: 40px;
`;

const Title = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: rgb(51, 51, 51);
    text-align: center;
    position: relative;
    display: inline-block;

    &::after {
        position: absolute;
        content: "";
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
        height: 4px;
        width: 60px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Subtitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #555;
    text-align: center;
    margin-bottom: 20px;
`;

const MembersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
`;



const SpeakerCard = ({speaker}) => {
  return (
    <Card className="col-md-4">
      <ImageContainer>
        <ProfileImage
          src={speaker.img || "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}
          alt={speaker.name}
        />
      </ImageContainer>
      <Name>{speaker.name}</Name>
      <Role className="text-muted">{speaker.university}</Role>
      <School className="text-muted">{speaker.location}</School>
    </Card>
  );
}

export const Speakers = (props) => {
  return (
    <TeamContainer id="speakers">
      <ResponsiveContainer>
        <Section>
          <Title>Speakers</Title>
          <MembersContainer>
            {props.data.map((speaker, i) => (
              <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker}/>
            ))}
          </MembersContainer>
        </Section>
      </ResponsiveContainer>
    </TeamContainer>
  );
};