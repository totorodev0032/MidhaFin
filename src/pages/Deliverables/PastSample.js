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

const PastSample = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Past Sample Paper Questions</p>
            <p className="description">
              We at Midhafin believe that understanding the FRM/CFA/PRM exam is
              as important as understanding the study material. We encourage our
              students to solve the previous FRM/CFA/PRM exam sample papers to
              not just test their understanding of the various concepts, but
              also to get a better understanding of the pattern of the
              FRM/CFA/PRM questions. Especially when students do not have a lot
              of time to study, due to various time commitments, efficiency
              becomes key in the FRM/CFA/PRM preparation. This involves
              practising the most relevant type of FRM/CFA/PRM questions and
              focusing on high yield material that is testable in the
              FRM/CFA/PRM exam.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default PastSample;
