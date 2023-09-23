import React from "react";
import { MdDesignServices } from "react-icons/md";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaReact}
            title={"Reactjs development"}
            disc={`React is a JavaScript library for building user interfaces. It is a powerful and flexible tool that can be used to create high-quality designs quickly and efficiently. I have worked with Reactjs for more than three years. I have worked with such a significant industry like healthcare.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={RiFlutterFill}
            title={"Flutter development"}
            disc={`Flutter is a cross-platform development framework that allows developers to build native-looking apps for Android, iOS, web, and desktop from a single codebase. With more than three years of experiance, I have worked such a significant industry like healthcare.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX design"}
            disc={`For user interface designing Figma is very user friendly tools for UI/UX designing. I find it to be a very powerful and flexible tool that can be used to create everything from low-fidelity wireframes to high-fidelity prototypes and design systems. I have worked with Figma for more than two years.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
