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

const LectureVideos = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutArea>
          <AboutContainer>
            <p className="heading">FRM Lecture Videos</p>
            <p className="description">
              We currently offer around 150 hours of lecture videos for the FRM
              Part 1 curriculum and around 140 hours for the FRM Part 2
              curriculum. The videos cover all the Learning Objectives for each
              topic in the FRM curriculum, as prescribed by GARP. The videos are
              organized in our Learning Management System in the same order as
              they are in our study planner for FRM. The concepts are covered
              completely from scratch, and, even if you have no background in
              Statistics or Finance, you don’t need to worry about it.
            </p>
            <p className="description">
              According to Micky – “We have not established MidhaFin only for
              helping the candidates to pass the FRM and CFA exams. Shortcuts,
              tips, and tricks are definitely helpful, but they should not be
              too much relied upon. The main focus should be on understanding
              the underlying dynamics behind the concepts and their
              implementation. Over the years, the popularity of the CFA and FRM
              certifications has grown enormously, and there has been a surge in
              the number of candidates who clear all the levels of these exams.
              But even after passing the exams, very few candidates manage to
              impress with their core finance skills. I’ve heard a number of
              recruiters saying that extremely qualified candidates are not able
              to answer basic interview questions. From a Financial Risk
              Practioner’s perspective, an FRM certification can add value only
              if the candidate has followed a holistic approach to prepare for
              the exam and crack it. For Example – If 1 day 99% VaR changed by
              10%, then the candidate should not only be able to identify the
              cause and risk typically associated with such a change, but also
              be able to analyze the underlying VaR model and explain this
              phenomenon, either by mathematically deriving it or through the
              use of visual aids wherever possible.”
            </p>
            <p className="description">
              Micky Midha will help you visualize the difficult quantitative
              ideas in the FRM curriculum through his videos, by the extensive
              use of graphs, figures, and tables. Numerous examples that are
              aligned to the GARP FRM Learning Objectives have been discussed in
              the videos. This way, your learning experience will be enhanced as
              you make your way towards passing the FRM exams.
            </p>
          </AboutContainer>
        </AboutArea>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default LectureVideos;
