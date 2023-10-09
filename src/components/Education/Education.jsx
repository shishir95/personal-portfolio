import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import VerticalLineWrapper from "./verticalLine/VerticalLineWrapper";
import VerticalLineContent from "./verticalLine/VerticalLineContent";

const Education = ()=> {
    return ( 
        <Container>
            <Slide direction='left'>
                <h4>
                    My<span className="green"> Education</span>
                </h4>
                <h1>Academic Background</h1>
            </Slide>
            <Slide direction="left">
                <VerticalLineWrapper>
                    <VerticalLineContent position='left'>
                        <h2>Master of Applied Computing</h2>
                        <h3>Wilfrid Laurier University</h3>
                        <h5>Ontario, Canada</h5>
                        <h6>2024 - </h6>
                    </VerticalLineContent>
                    <VerticalLineContent position='right'>
                        <h2>Bachelor of Science in Computer Science and Engineering</h2>
                        <h3>North South University</h3>
                        <h5>Dhaka, Bangladesh</h5>
                        <h6>2015 - 2020</h6>
                    </VerticalLineContent>
                </VerticalLineWrapper>
            </Slide>
        </Container>
     );
}

export default Education;

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