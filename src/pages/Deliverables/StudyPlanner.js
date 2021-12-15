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

const StudyPlanner = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Study Planner</p>
            <p className="description">
              According to Micky – “It’s not a wise strategy to prepare for the
              exam on a module by module basis. There are some concepts which
              are used in an earlier topic but discussed in detail in a later
              topic in another module. For example – Beta is introduced in CAPM
              in the Foundations of Risk Management Module, but the quantitative
              aspect of beta is discussed in Linear Regression in the
              Quantitative Methods Module. Hence, the sequence of topics to
              prepare for the FRM Part 1 and Part 2 exams becomes very
              important.”
            </p>

            <p className="description">
              The study plan has been structured after very careful analysis,
              and the topics have been sequenced in such a way so as to
              systematically link one topic after the other. Also, related
              theory parts have been bundled together and unrelated theory
              portions have been scattered in the timeline so as to get a good
              blend of theoretical and numerical based topics.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default StudyPlanner;
