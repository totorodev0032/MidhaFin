import React from 'react';
import styled from '@emotion/styled';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import LiveLogo from '../../images/live2.png';
import CertiLogo from '../../images/certi2.png';
import ProLogo from '../../images/pro2.png';

const MidhaUSPContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 10px solid #d6a468;

  @media (max-width: 496px) {
    ${'' /* margin-top: 20px; */}
  }
`;

const MidhaUSPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  margin-bottom: 5%;
  margin-top: 5%;

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 496px) {
    margin-top: 10%;
  }
`;

const MidhaUSPHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  align-items: center;

  .heading {
    font-size: 28px;
    font-weight: 600;
    ${'' /* width: 500px; */}
    text-align: center;
    margin-bottom: 10px;
    ${'' /* color: #6a1b1a; */}
  }

  .description {
    width: 70%;
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

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 550px;
  margin-top: 25px;
  margin-bottom: 20px;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #ccccd3;
  border: 2px solid #ffffff;
  ${'' /* border-radius: 37px; */}
  padding: 30px 20px 20px 20px;
  transition: box-shadow 0.2s;
  margin-right: 28px;

  &:hover {
    box-shadow: 0px 6px 6px 0px #ccccd3;
    transition: box-shadow 0.4s;
  }

  .top {
    display: flex;
    height: 40%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  img {
    ${'' /* margin-bottom: 10px; */}
  }

  .icon {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: rgba(210, 155, 89, 0.4); */}
    background-color: white;
    border-radius: 5px;
  }

  .heading {
    font-size: 25px;
    font-weight: 600;
    ${'' /* margin-top: 15px; */}
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
  }

  .heading1 {
    font-size: 25px;
    font-weight: 600;
    ${'' /* margin-top: 15px; */}
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    margin-top: -7px;
    ${'' /* margin-bottom: 3px; */}
  }

  .description {
    font-size: 18px;
    font-weight: 400;
    margin-top: 15px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 500px) {
    padding: 20px 20px 20px 20px;
    .description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1280px) {
    width: 250px;
    height: 380px;
    margin-right: 15px;

    .heading {
      font-size: 23px;
    }

    .heading1 {
      font-size: 23px;
    }

    .description {
      font-size: 16px;
      font-weight: 400;
      margin-top: 10px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  ${
    '' /* @media screen and (max-width: 1024px) {
    width: 250px;
    height: 380px;
    margin-right: 15px;

    .description {
      font-size: 16px;
      font-weight: 400;
      margin-top: 10px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }
  } */
  }
`;

const MidhaUSP = () => {
  return (
    <>
      <MidhaUSPContainer>
        <MidhaUSPWrapper>
          <MidhaUSPHeader>
            <p className="heading">
              Midhafin focuses on Personalized Learning, Expertise and
              Employability.
            </p>
            <p className="description">
              In finance, desired skills are rare but not jobs! Become
              employable by pursuing the most reputed and admired courses in the
              industry, under the expert guidance of Midhafin.
            </p>
          </MidhaUSPHeader>
          <FeatureContainer>
            <FeatureCard>
              <div>
                <img src={CertiLogo} alt="certi logo" />
              </div>
              <p className="heading1">Industry Experienced Faculty</p>
              <p className="description">
                Our faculty is extremely well trained and have real industry
                experience. They have taught hundreds of students and have
                prepared thousands of questions over the years. Quality of our
                faculty is something that we take great pride in and that we are
                often complimented upon by our students.
              </p>
            </FeatureCard>
            <FeatureCard>
              {' '}
              {/* <SiIcons.SiGoogleclassroom
                  style={{ fontSize: '48px', color: 'maroon' }}
                />{' '} */}
              <img src={LiveLogo} />
              <p className="heading">Systematic Doubt Solving </p>
              <p className="description">
                We believe curiosity is the mother of all inventions, and so we
                ensure every single relevant doubt of every single student is
                cleared within reasonable time frame. Our faculty encourages
                students to ask doubts and for them no doubt is small or silly.
                Relevant doubts from other sources are also answered by our
                faculty and we provide in depth and easy to understand solutions
                to our students.
              </p>
            </FeatureCard>
            <FeatureCard>
              {' '}
              {/* <AiIcons.AiOutlineFundProjectionScreen
                  style={{ fontSize: '48px', color: 'maroon' }}
                />{' '} */}
              <img src={ProLogo} />
              <p className="heading">End to End Mentorship </p>
              <p className="description">
                The relationship between our instructors and our students is not
                just that of instruction and teaching but also of mentorship. We
                help students throughout the process of learning and even
                beyond. From study planning to the exam to the relevant job
                interviews, we are there at every step with our students.
              </p>
            </FeatureCard>
          </FeatureContainer>
        </MidhaUSPWrapper>
      </MidhaUSPContainer>
    </>
  );
};

export default MidhaUSP;
