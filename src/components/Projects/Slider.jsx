import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        name: "CodeBreakers",
        img : "/assets/codebreakers.png",
        disc : "CodeBreakers is a software engineering firm based in the port city called Chattogram. We have a vast software engineering team that is always ready to develop a cost-effective software solution.",
        link: "https://codebreakers.quest/"
    },
    {
        name: "Clear Fork Digital",
        img : "/assets/clearforkdc.png",
        disc : "Clear Fork Digital is a leading provider of Software. They are committed to providing our customers with the best possible experience, and  are always looking for ways to innovate and improve our products and services.",
        link: "https://clearforkdc.com/"
    },
    {
        name: "QuickMed Patient",
        img : "/assets/quickmedpatient.png",
        disc : "QuickMed, is a telemedicine platform, which offers online video consultation between patients and doctors drugs, diagnostics and e consultation in all over the world."
    },
    {
      name: "QuickMed Doctor",
      img : "/assets/quickmedDoc.jpg",
      disc : "QuickMed, is a telemedicine platform, which offers online video consultation between patients and doctors drugs, diagnostics and e consultation in all over the world.",
      link: "https://play.google.com/store/apps/details?id=winmac.quickmed_doctor_app"
    },
    {
      name: "Asia Fashion Tailors and Fabrics",
      img : "/assets/asiafashion.png",
      disc : "Asia Fashion Tailors and Fabrics is a leading men's fashion house based in chattogram, Bangladesh. In this software, all operations can be done smmothly",
      link: "https://dribbble.com/shots/22640296-Asia-Fashion"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`