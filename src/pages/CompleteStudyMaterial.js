import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../components/ToolBar/Toolbar';
import Footer from '../components/Footer/Footer';

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
              We provide study material for all the topics of the FRM Part 1 and
              FRM Part 2 Exams. The study material is based completely on the
              GARP readings.
            </p>
            <p className="description">
              They are downloadable and printable for your convenience.
            </p>

            <p className="description">
              The material has been formatted and structured quite
              systematically which makes it extremely user-friendly for readers.
              The material covers the topics in-depth and does not omit anything
              which is relevant from the point of view of the FRM exam.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default CompleteStudyMaterial;
