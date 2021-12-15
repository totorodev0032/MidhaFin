import React from 'react';
import styled from '@emotion/styled';
import ProgramImage from '../../images/program3.png';
import { Link } from 'react-router-dom';
import DataLogo from '../../images/dataanalytics101.png';
import JuliaLogo from '../../images/course images/ Julia.png';
import MachineLogo from '../../images/course images/Deep Learning.png';
import PythonLogo from '../../images/course images/Phython.png';
import JavaLogo from '../../images/course images/java.png';
import DSALogo from '../../images/course images/C++.png';
import { Programmes } from '../../data/Programmes';

const CourseContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  ${'' /* background-color: #f5f6f8; */}
  background-color:white;
  border-bottom: 15px solid #d29b59;
`;

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  margin-bottom: 5%;
  margin-top: 30px;

  @media (max-width: 1280px) {
    width: 95%;
  }
`;

const CourseHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  ${'' /* justify-content: space-around; */}
  align-items: center;
  margin-bottom: 20px;

  .heading {
    font-size: 28px;
    font-weight: 600;
    ${'' /* width: 500px; */}
    text-align: center;
    margin-bottom: 10px;
    width: 90%;
    color: rgba(0, 0, 0, 0.8);
  }

  .description {
    font-size: 24px;
    width: 90%;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font-size: 18px;
  }

  @media (max-width: 496px) {
    .heading {
      font-size: 18px;
      width: 90%;
    }

    .description {
      font-size: 12px;
      width: 90%;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

const CourseCardSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${'' /* background-color: black; */}
  @media (max-width: 496px) {
    margin-top: 30px;
  }
`;

const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  text-align: center;
  ${'' /* box-shadow: 0px 10px 99px #4c4a6e26; */}
  border-radius: 10px;
  margin-top: 25px;
  margin-left: 50px;
  border-radius: 15px;
  height: auto;
  border: 1.5px solid maroon;
  &:hover {
    box-shadow: 3px 3px 10px #ebebeb, -3px -3px 10px #ffffff;
  }

  @media (max-width: 496px) {
    margin-left: 0;
    margin-bottom: 25px;
    width: 90%;
  }
  ${'' /* background-color: black; */}
`;

const CourseCardImage = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* flex-basis: 60%; */}
  justify-content: center;
  align-items: center;
  ${'' /* border-bottom: 1.5px solid maroon; */}
  img {
    margin-top: 10px;
    height: 100%;
    width: 100%;
  }
`;

const CourseCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-items: center;
  height: auto;

  .courseHeading {
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 25px;
    padding-right: 20px;
    padding-left: 20px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 35px;
  }

  .text {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    padding: 0px 20px;
    line-height: 25px;
    margin-bottom: 10px;
  }
`;

const ButtonPrimary = styled.button`
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-bottom: 5px solid #d6a468;
  text-transform: uppercase;
  background-color: #6a1b1a;
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const CourseSection = () => {
  return (
    <>
      <CourseContainer id="courseID">
        <CourseWrapper>
          <CourseHeader>
            <p className="heading">
              We at Midhafin, focus on striking a careful balance, between
              Knowledge and Relevance, between theory and analytics & between
              pure concepts and practical application.
            </p>
            <p className="description">
              {/* Armed with certificate, advanced projects and practical knowledge,
              our students will be industry ready! */}
            </p>
          </CourseHeader>
          <CourseCardSection>
            {Programmes.map((program) => (
              <CourseCard>
                <CourseCardDescription>
                  <p className="courseHeading"> {program.title} </p>
                  <p className="text">{program.description}</p>
                  <Link
                    to={`/programmes/${program.id}`}
                    style={{ textDecoration: 'none' }}
                    onClick={() => window.scroll(0, 0)}
                  >
                    <ButtonPrimary>Explore Now</ButtonPrimary>
                  </Link>
                </CourseCardDescription>
              </CourseCard>
            ))}
          </CourseCardSection>
        </CourseWrapper>
      </CourseContainer>
    </>
  );
};

export default CourseSection;
