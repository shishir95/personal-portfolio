import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
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
            title={"Reactjs Development"}
            disc={`I have more than one years of experiance in reactjs development. Working on reactjs has always been fun for me. I have done some significant projects using reactjs.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={RiFlutterFill}
            title={"Flutter Development"}
            disc={`Flutter is a cross platform framwork for mobile application development. I find flutter framwork to be a very productive and enjoyable framework to work. `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Design"}
            disc={`I work on UI/UX using Figma. I find it to be a very powerful and flexible tool that can be used to create everything from low-fidelity wireframes to high-fidelity prototypes and design systems. `}
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
