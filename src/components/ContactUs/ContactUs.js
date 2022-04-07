import React from "react";
import styled from "@emotion/styled";
import CourseForm from "../CourseForm/CourseForm";
import backImg from "../../images/heroBack2.png";

const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  justify-content: space-around;
  align-items: center;
  background-color: #6a1b1a;
  background-image: url(${backImg});

  background-position: right;
  background-repeat: no-repeat;
  background-size: 600px;
  padding-top: 20px;

  @media (max-width: 496px) {
    height: auto;
    background-image: none;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  width: 80%;
  min-height: 50vh;
  padding: 20px 0px;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

const ContactLeft = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;

  .heading {
    font-size: 48px;
    font-weight: 600;
    margin-top: 20px;
    color: white;
  }

  .description {
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
    padding-right: 8%;
    color: white;
  }

  @media (max-width: 496px) {
    margin-bottom: 20px;
    .description {
      padding-right: 0%;
    }
  }
`;

const ContactRight = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;

const ButtonPrimary = styled.button`
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a1b1a;
  border: none;
  margin-top: 30px;
  background-color: #d6a468;
  border: 2px solid #6a1b1a;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 250px;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
`;

const ContactUs = () => {
  return (
    <>
      <ContactWrapper id="contact">
        <ContactContainer>
          <ContactLeft>
            <p className="heading">Why Us?</p>
            <p className="description">
              While knowledge is something that can be acquired from a variety
              of sources, we at Midhafin try to curate the most effective and
              efficient way of preparing for an exam. The logic is that time is
              precious and our mentorship helps students not just understand the
              concepts, but also the paper – ensuring that they take the right
              approach to the exam.
            </p>
            <ButtonWrapper>
              <ButtonPrimary>what our students say</ButtonPrimary>
            </ButtonWrapper>
          </ContactLeft>
          <ContactRight>
            <CourseForm title="Contact Us" />
          </ContactRight>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};

export default ContactUs;
