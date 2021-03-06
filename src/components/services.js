import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamWork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

export default function ServicesSection() {
  return (
    <Services>
      <Description>
        <h2>
          High <span> quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="efficient"></img>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"></img>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money"></img>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamWork} alt="teamwork"></img>
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Home" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  p {
    padding: 2rem 0;
  }
`;
