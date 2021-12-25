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

const Doubt = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">Doubt Clearning Forum</p>
            <p className="description">
              “Curiosity is the mother of invention”
            </p>
            <p className="description">
              We at Midhafin strongly believe that conceptual clarity is the key
              to doing well in the FRM/CFA/PRM exam. We also greatly emphasise
              the importance of developing the relevant knowledge related to the
              FRM/CFA/PRM course. Thus, in line with our students-first
              approach, we take FRM/CFA/PRM doubts very seriously.
            </p>
            <p className="description">
              We have an active and extremely user-friendly FRM/CFA/PRM doubt
              solving Forum. Every single doubt which is relevant to the
              curriculum will be solved there. Further, we do not limit
              ourselves to our own FRM/CFA/PRM study material, doubts from any
              other source (provided it is relevant to the exam) would be
              solved.
            </p>
            <p className="description">
              We have dedicated Q&A sections against each chapter on the Forum
              where students can post their FRM/CFA/PRM doubts by posting a
              picture or typing it.
            </p>

            <p className="description">
              Even when students want to revisit the doubts and the solutions,
              they can do so by simply typing in the keyword, or going to the
              corresponding chapter, and checking it out. Further, students can
              find all FRM/CFA/PRM questions asked by the other students in that
              section along with their solution indexed in a very systematic
              manner.
            </p>

            <p className="description">
              Also, students can interact with other FRM/CFA/PRM candidates in
              the forum and give/receive useful insights.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default Doubt;
