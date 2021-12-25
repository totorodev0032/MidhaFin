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
              Our philosophy involves learning through application. Mock tests,
              both sectional and full length, are important components of the
              FRM/CFA/PRM study process at Midhafin.
            </p>

            <p className="description">
              During the FRM/CFA/PRM preparations, we conduct frequent sectional
              mock papers which ensures that any new information acquired by the
              student is adequately tested as the FRM/CFA/PRM course progresses.{' '}
            </p>

            <p className="description">
              Starting three weeks before the FRM/CFA/PRM exam, we conduct
              weekly full length mock exams which are based on the pattern seen
              in actual previous FRM/CFA/PRM exams. Further, we also provide
              quartiles for our students to help them understand their strengths
              and weaknesses in comparison to other FRM/CFA/PRM students.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default MockTest;
