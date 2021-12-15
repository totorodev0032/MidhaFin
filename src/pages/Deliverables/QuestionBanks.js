import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
`;

const AboutArea = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cecece;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 496px) {
    width: 90%;
    margin-top: 10%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;

  .heading {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .description {
    margin-bottom: 35px;
  }

  p {
    margin-bottom: 20px;
    font-size: 15px;
  }

  @media (max-width: 496px) {
    width: 80%;
    margin-top: 10%;
  }
`;

const QuestionBanks = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Questions Banks</p>
            <p className="description">
              Collection of over 3000 questions from various sources for the FRM
              Part 1 and FRM Part 2 Exam
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default QuestionBanks;
