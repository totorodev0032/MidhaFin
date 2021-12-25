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
              We at Midhafin are a strong proponent of smart work. Many FRM, CFA
              and PRM students, whom we have taught over the years, have had to
              juggle their exam preparations with either job or college, which
              inevitably brought time management and exam strategy to the
              forefront of their FRM/CFA/PRM preparation.
            </p>

            <p className="description">
              After years of successfully guiding students in their FRM/CFA/PRM
              study planning, our team has not only been able to identify
              certain approaches to the FRM/CFA/PRM preparation, but have also
              learnt to customize the FRM/CFA/PRM study plans for individual
              students, based on their time commitments and goals.
            </p>

            <p className="description">
              The relationship between our instructors and our students is not
              just that of FRM/CFA/PRM instruction and teaching but also of
              mentorship. When a FRM/CFA/PRM student joins, we have a session
              with him or her, wherein, our instructors understand the student’s
              goals and the amount of time they have to prepare for the
              FRM/CFA/PRM exam. Based on the student’s prior knowledge, his or
              her strengths & weaknesses and the amount of time they can commit
              every week, we prepare a customized FRM/CFA/PRM study plan for the
              student.{' '}
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default StudyPlanner;
