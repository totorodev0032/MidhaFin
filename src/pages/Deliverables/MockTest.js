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

const MockTest = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Mock Tests</p>
            <p className="description">
              We provide 3 comprehensive Mock Tests starting 3 weeks prior to
              the exam. Every single answer sheet is rigorously evaluated and a
              quartile analysis is provided for each module within 2 days of
              conducting each mock test.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default MockTest;
