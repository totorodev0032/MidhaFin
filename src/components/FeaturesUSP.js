import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FeatureWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const FeatureContainer = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0 30px 0;
`;

const BoxContainer = styled.div`
  display: flex;
  width: 300px;
  height: 90px;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 18px;
    margin-left: 20px;
    color: #6a1b1a;
    font-weight: 500;
  }
`;

const CircleBox = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #6a1b1a;
  justify-content: center;
  align-items: center;
`;

const FeatureData = [
  {
    title: 'Study Planner',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/frm-study-planner',
  },
  {
    title: 'Lecture Videos',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/frm-lecture-videos',
  },
  {
    title: 'Question Banks',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/frm-question-banks',
  },
  {
    title: 'Mock Tests',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/frm-mock-tests',
  },
  {
    title: 'Access til you Pass',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/access-till-you-pass',
  },
  {
    title: 'Complete Study Materials',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/complete-frm-study-material',
  },
  {
    title: 'Doubt Clearing Forum',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/frm-doubt-clearing-forum',
  },
  {
    title: 'Past Sample Questions',
    icon: <AiOutlineCalendar style={{ fontSize: '35px', color: '#6a1b1a' }} />,
    link: '/past-frm-sample-paper-questions',
  },
];

const FeaturesUSP = () => {
  return (
    <>
      <FeatureWrapper>
        <FeatureContainer>
          {FeatureData.map((data) => (
            <Link
              to={data.link}
              style={{ textDecoration: 'none', color: '#6a1b1a' }}
              onClick={() => window.scroll(0, 0)}
            >
              <BoxContainer>
                <CircleBox>{data.icon}</CircleBox>
                <p>{data.title}</p>
              </BoxContainer>
            </Link>
          ))}
        </FeatureContainer>
      </FeatureWrapper>
    </>
  );
};

export default FeaturesUSP;
