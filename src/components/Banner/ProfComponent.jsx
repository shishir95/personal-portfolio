import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const downloadResumeButton = () => {
    window.open(
      "https://drive.google.com/file/d/19KeyK7OULOVKEwVEFWxgtuApBQLHnLwF/view?usp=sharing"
    );
  }
  return (
    <Container id="home">
      <div>
        <center>
        <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Md Amanat Khan Shishir</h1>
          <h3>Software Engineer</h3>
          <p>
          Enthusiast software engineer. More than three years of experience as a software industry.
          Always eager to contribute for team success through hard work, dedication and excellent
          organization skill. A clear understanding of programming knowledge motivated to learn,
          grow, and excel in the tech industry.
          </p>
          <button onClick={downloadResumeButton}>Resume</button>
        </Texts>
      </Slide>
        </center>
      </div>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 920px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
