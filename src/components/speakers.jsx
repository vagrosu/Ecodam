import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
    padding: 40px 20px;
    background-color: #f9f9f9;
`

export const Speakers = (props) => {
  return (
    <SectionContainer id="speakers" className="text-center">
      <div style={{flexDirection: "column", alignItems:"center", justifyContent:"center"}} className="container">
        <div >
          <h2 style={{width:"fit-content"}}>Speakers</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.university}</p>
                      <p>{d.location}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </SectionContainer>
  );
};
