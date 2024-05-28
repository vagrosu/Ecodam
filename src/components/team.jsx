import React from "react";
import styled from 'styled-components';
import {organizers, volunteers} from "../data/team";

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

const ProfileImageContainer = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #f0f0f0;
    overflow: hidden;
`

const ProfileImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
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

const MemberCard = ({member}) => {
  return (
    <Card className="col-md-4">
      <ProfileImageContainer>
        <ProfileImage
          src={member.image || "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}
          alt={member.name}
          style={!member.image ? {marginTop: "15px", scale: "1.1"} : undefined}
        />
      </ProfileImageContainer>
      <Name>{member.firstName} {member.lastName}</Name>
      <Role className="text-muted">{member.role}</Role>
      <School className="text-muted">{member.school}</School>
    </Card>
  );
}

export const Team = () => {
  return (
    <TeamContainer id="team">
      <ResponsiveContainer>
        <Section>
          <Title>ECODAM Team</Title>
          <Subtitle>Organizers</Subtitle>
          <MembersContainer>
            {organizers.map((member, i) => (
              <MemberCard key={i} member={member}/>
            ))}
          </MembersContainer>
        </Section>
        <Section>
          <Subtitle>Volunteers</Subtitle>
          <MembersContainer>
            {volunteers.map((member, i) => (
              <MemberCard key={i} member={member}/>
            ))}
          </MembersContainer>
        </Section>
      </ResponsiveContainer>
    </TeamContainer>
  );
};
