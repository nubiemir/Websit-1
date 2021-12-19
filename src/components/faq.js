import React from "react";
import styled from "styled-components";
import { About } from "../styles";

export default function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            corrupti!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            corrupti!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Payment Method?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            corrupti!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Product Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            corrupti!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    h4 {
      font-size: 1.5rem;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
