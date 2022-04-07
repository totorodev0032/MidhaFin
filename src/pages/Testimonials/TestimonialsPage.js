import React from 'react'
import Footer from '../../components/Footer/Footer'
import TestimonialBox from '../../components/TestimonialsComponents/TestimonialBox'
import Toolbar from '../../components/ToolBar/Toolbar'
import styled from '@emotion/styled';

const TestimonialSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

  .heading {
    font-weight: 00;
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 3%;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  flex-wrap:wrap;
  width: 80%;
  height: auto;
  padding: 2vh 0 3vh 0;
`;



export default function TestimonialsPage() {
  return (
    <>
    <Toolbar/>
    <TestimonialSectionWrapper>
    <p className="heading">OUR TESTIMONIALS</p>
   <TestimonialContainer>
   <TestimonialBox/>
   </TestimonialContainer>
   
    </TestimonialSectionWrapper>
    <Footer/>
    
    </>
  )
}
