import React from 'react';
import styled from '@emotion/styled';

const CourseAboutContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const CourseAboutWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 80%;
  margin-top: 45px;
  margin-bottom: 35px;
  @media (max-width: 496px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const CourseAboutLeft = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 50%;
  flex-direction: column;

  .heading {
    font-size: 32px;
    color: #6a1b1a;
  }

  .description {
    color: #1b1c1d;
    font-weight: 400;
    font-size: 17px;
    margin-top: 10px;
    padding-right: 20px;
  }
`;

const CourseAbout = ({ enrollLink, courseAbout }) => {
  return (
    <>
      <CourseAboutContainer>
        <CourseAboutWrapper>
          <CourseAboutLeft>
            <p className="heading">About Course</p>
            {courseAbout.map((data) => (
              <p className="description"> {data} </p>
            ))}
          </CourseAboutLeft>
        </CourseAboutWrapper>
      </CourseAboutContainer>
    </>
  );
};

export default CourseAbout;
