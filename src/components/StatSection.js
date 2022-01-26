import React from 'react';
import styled from '@emotion/styled';
import footerImage from '../images/footermask.png';

const StatWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const StatContainer = styled.div`
  display: flex;
  width: 80%;
  height: 40vh;
  background: url(${footerImage});
  border-radius: 10px;

  @media (max-width: 496px) {
    height: auto;
    flex-direction: column;
  }
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    height: 250px;
    width: auto;
  }
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0;
  color: #ffffff;
`;

const SubHeading = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  color: #ffffff;
  text-align: center;
`;

const StatSection = () => {
  return (
    <>
      <StatWrapper>
        <StatContainer>
          <StatBox>
            <Heading>2600+</Heading>
            <SubHeading>Students cleared exams</SubHeading>
          </StatBox>
          <StatBox>
            <Heading>153+</Heading>
            <SubHeading>Countries Reached</SubHeading>
          </StatBox>
          <StatBox>
            <Heading>8000+</Heading>
            <SubHeading>Hours of Live classes delivered</SubHeading>
          </StatBox>
        </StatContainer>
      </StatWrapper>
    </>
  );
};

export default StatSection;
