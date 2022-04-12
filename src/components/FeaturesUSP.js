import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AccessTillYouPass from '../images/accesstillyoupass.png';
import CompleteStudy from '../images/completestudy.png';
import Doubt from '../images/doubt.png';
import Lecture from '../images/lecture.png';
import Mock from '../images/mocktest.png';
import QuestionBank from '../images/questionbank.png';
import Sample from '../images/sample.png';
import StudyPlanner from '../images/studyplanner.png';

const FeatureWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const FeatureContainer = styled.div`
  display: flex;
  background: #ffffff;
  width: 80%;
  height: auto;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 0 30px 0;
  justify-content: center;
`;

const BoxContainer = styled.div`
  display: flex;
  width: 270px;
  height: 90px;
  align-items: center;
  cursor: pointer;
  background: white;

  p {
    font-size: 18px;
    margin-left: 20px;
    color: #6a1b1a;
    font-weight: 500;
  }

  &:hover {
    font-size: 20px;
  }

  @media (max-width: 496px) {
    margin-right: 0;
  }
`;

const CircleBox = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  ${'' /* border: 1px solid #6a1b1a; */}
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

const FeatureData = [
  {
    title: 'Study Planner',
    icon: StudyPlanner,
    link: '/frm-study-planner',
  },
  {
    title: 'Lecture Videos',
    icon: Lecture,
    link: '/frm-lecture-videos',
  },
  {
    title: 'Question Banks',
    icon: QuestionBank,
    link: '/frm-question-banks',
  },
  {
    title: 'Mock Tests',
    icon: Mock,
    link: '/frm-mock-tests',
  },
  {
    title: 'Access till you Pass',
    icon: AccessTillYouPass,
    link: '/access-till-you-pass',
  },
  {
    title: 'Complete Study Materials',
    icon: CompleteStudy,
    link: '/complete-frm-study-material',
  },
  {
    title: 'Doubt Clearing Forum',
    icon: Doubt,
    link: '/frm-doubt-clearing-forum',
  },
  {
    title: 'Past Sample Questions',
    icon: Sample,
    link: '/past-frm-sample-paper-questions',
  },
];

const FeaturesUSP = () => {
  return (
    <>
      <FeatureWrapper>
        <FeatureContainer>
          {FeatureData.map((data) => (
            <a
              href={data.link}
              // target="_blank" 
              style={{ textDecoration: 'none', color: '#6a1b1a' }}
              onClick={() => window.scroll(0, 0)}
            >
              <BoxContainer>
                <CircleBox>
                  <img src={data.icon} alt="icon" />
                </CircleBox>
                <p>{data.title}</p>
              </BoxContainer>
            </a>
          ))}
        </FeatureContainer>
      </FeatureWrapper>
    </>
  );
};

export default FeaturesUSP;
