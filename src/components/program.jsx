import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
    padding: 100px 20px;
    background-color: white;
`

const ProgramContainer = styled.div`
    text-align: left;
    max-width: 800px;
    margin: auto;
`;

const ProgramAnchor = styled.div`
    padding: 1px !important;
    background: none !important;
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

const DayHeader = styled.h2`
    font-size: 1.2em;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: #333;
    font-weight: bold;
`;

const SessionList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 1em;
    font-size: 1em;
`;

const SessionItem = styled.li`
    margin-bottom: 0.5em;
    line-height: 1.5;
`;

const StrongText = styled.strong`
    color: #d0021b;
`;

export const Program = (props) => {
  return (
    <SectionContainer>
      <ProgramContainer>
        <ProgramAnchor id="program"></ProgramAnchor>
        <Title>ECODAM 2024 Programme</Title>
        <Subtitle>Ferdinand Hall, University Rectorate</Subtitle>

        <DayHeader>Tuesday, June 11</DayHeader>
        <SessionList>
          <SessionItem><StrongText>09:00</StrongText> Registration – in front of the Senate Hall</SessionItem>
          <SessionItem><StrongText>09:30 – 10:00</StrongText> Session I. ECODAM 2024 Opening</SessionItem>
          <SessionItem><StrongText>10:00 – 11:00</StrongText> Session II. Kenneth DeJong (George Mason University): The
            Evolution of Evolutionary Computation</SessionItem>
          <SessionItem><StrongText>11:00 – 11:15</StrongText> Coffee break</SessionItem>
          <SessionItem><StrongText>11:15 – 13:15</StrongText> Session III. Zbigniew Michalewicz (University of
            Adelaide): On the Significance of Dragon Years in the Life of a Scientist</SessionItem>
          <SessionItem><StrongText>13:30</StrongText> Lunch</SessionItem>
          <SessionItem><StrongText>16:00 – 18:00</StrongText> My PhD thesis in three minutes. PhD students’ short
            presentations</SessionItem>
          <SessionItem><StrongText>18:30</StrongText> Gala dinner</SessionItem>
        </SessionList>

        <DayHeader>Wednesday, June 12 – Satellite Workshop</DayHeader>
        <SessionList>
          <SessionItem><StrongText>10:00 – 11:30</StrongText> Bioinformatics and Applied Machine Learning Workshop.
            Research projects. Co-organised with the Core Bioinformatics Team, Wellcome-MRC Cambridge Stem Cell
            Institute, University of Cambridge</SessionItem>
          <SessionItem><StrongText>11:30 – 11:45</StrongText> Coffee break</SessionItem>
          <SessionItem><StrongText>11:45 – 13:15</StrongText> Bioinformatics and Applied Machine Learning Workshop.
            Research projects</SessionItem>
          <SessionItem><StrongText>13:30</StrongText> Lunch</SessionItem>
          <SessionItem><StrongText>16:00 – 18:00</StrongText> Bioinformatics and Applied Machine Learning Workshop.
            Research projects</SessionItem>
        </SessionList>

        <DayHeader>Thursday, June 13</DayHeader>
        <SessionList>
          <SessionItem><StrongText>10:00 – 11:00</StrongText> Session IV. Sorin Istrail (Brown University):
            Combinatorial and Statistical Prediction of Gene Expression from Haplotype Sequence</SessionItem>
          <SessionItem><StrongText>11:00 – 11:30</StrongText> Coffee break</SessionItem>
          <SessionItem><StrongText>11:30 – 12:30</StrongText> Session V. Irina Mohorianu (University of Cambridge): In
            data we trust. Machine Learning approaches reveal answers to unasked questions</SessionItem>
          <SessionItem><StrongText>13:00</StrongText> Lunch</SessionItem>
          <SessionItem><StrongText>15:00 – 16:00</StrongText> Session VI. Panel discussion. Where do I publish? Speed
            vs. Quality</SessionItem>
          <SessionItem><StrongText>16:00 – 18:00</StrongText> Guided tour of Iasi City</SessionItem>
        </SessionList>

        <DayHeader>Friday, June 14</DayHeader>
        <SessionList>
          <SessionItem><StrongText>10:00 – 11:00</StrongText> Session VII. Gabriela Ochoa (University of Stirling):
            Optimisation Trajectories and Landscapes: A Complex Networks View</SessionItem>
          <SessionItem><StrongText>11:00 – 11:30</StrongText> Coffee break</SessionItem>
          <SessionItem><StrongText>11:30 – 12:30</StrongText> Session VIII. Dan Simovici (University of Massachusetts):
            Monotonic Entropies - Distribution Measures for Partitions of Structured and Unstructured Data with
            Applications</SessionItem>
          <SessionItem><StrongText>13:00</StrongText> Lunch</SessionItem>
          <SessionItem><StrongText>15:00 – 16:00</StrongText> Session IX. Daniela Zaharie (West University of
            Timișoara): Scheduling problem features and selection of metaheuristics components</SessionItem>
          <SessionItem><StrongText>16:00</StrongText> Session X. ECODAM 2024 Closing</SessionItem>
        </SessionList>
      </ProgramContainer>
    </SectionContainer>
  );
};
