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

const CompleteStudyMaterial = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Complete Study Material</p>
            <p className="description">
              Equipping our students with the right tools to clear the
              FRM/CFA/PRM exams is key for us. We emphasize a lot on the quality
              and relevance of our FRM/CFA/PRM study material and keep updating
              it based on any change in the FRM/CFA/PRM curriculum. Our study
              materials include-
            </p>
            <ol style={{ marginLeft: '3%' }}>
              <li>High quality FRM/CFA/PRM video lectures.</li>
              <li>Downloadable FRM/CFA/PRM notes on every topic.</li>
              <li>
                Question Bank with over thousand high quality FRM/CFA/PRM
                questions.
              </li>
              <li>
                Detailed Notes with a focus on active recall (Coming Soon){' '}
              </li>
              <li>Section wise FRM/CFA/PRM mock tests </li>
              <li>Full length FRM/CFA/PRM mock papers </li>
            </ol>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default CompleteStudyMaterial;
