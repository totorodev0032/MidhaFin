import React from 'react';
import heroImage from '../../images/heroImg.png';
import heroBack from '../../images/back.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  background: url(${heroBack});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  min-height: 50vh;
  /* background: url(${heroBack});
  background-repeat: no-repeat;
  background-size:contain;
  background-position:right; */
  z-index: -1;
  justify-content: center;
  align-items: center;
  border-bottom: 10px solid #d29b59;

  @media (max-width: 496px) {
    height: auto;
    background: none;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 496px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 50%;
  justify-content: center;
  flex-direction: column;
  color: #6a1b1a;
  ${
    '' /* @media screen and (max-width: 900px) {
    flex-basis: 60%;
  } */
  }

  .heading {
    font-size: 47px;
    font-weight: 600;
    padding-right: 40px;
    line-height: 48px;
    @media screen and (max-width: 1300px) {
      font-size: 32px;
      line-height: 34px;
    }

    .midha {
      color: #bf6b4a;
    }

    span {
      color: #d29b59;
    }
  }

  .heading2 {
    font-size: 35px;
    font-weight: 450;
    padding-right: 40px;
    padding-bottom: 10px;
    margin-top: 15px;
    line-height: 36px;
    @media screen and (max-width: 1300px) {
      font-size: 24px;
      line-height: 26px;
    }

    span {
      color: #d29b59;
    }
  }

  .description {
    font-size: 14px;
    max-width: 500px;
    font-weight: 600;
    margin-top: 10px;
    @media screen and (max-width: 800px) {
      padding-left: 0px;
    }
  }

  @media (max-width: 1280px) {
    .heading {
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media (max-width: 496px) {
    padding: 0px 0px 0px 0px;
    flex-basis: 100%;
    justify-content: center;
    text-align: center;
    color: maroon;
    background-color: white;
    .heading {
      padding-right: 0;
      color: maroon;
      font-size: 36px;
      line-height: 36px;
      .midha {
        color: maroon;
      }
    }
    .heading2 {
      padding-right: 0;
      font-size: 18px;
      line-height: 18px;
      padding-bottom: 20px;
      color: maroon;
    }
  }
`;

const ButtonPrimary = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-bottom: 6px solid #d6a468;
  background-color: #6a1b1a;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
  }
`;

const HeroRight = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HeroShowcase = styled.img`
  @media screen and (max-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 1280px && min-width: 960px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    width: 350px;
  }
  width: 500px;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .link {
    text-decoration: none;
    color: white;
  }
`;

const SectionBox = styled.div`
  display: flex;
  width: 150px;
  background: #6a1b1a;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 5px solid brown;
  margin-left: 10px;
  margin-top: 30px;
`;

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <p className="heading">
              Boost your career in Finance with mentorship you can bank on!
            </p>
            {/* <p className="heading2">
              Learn <span className="midha">Pro</span>gramming with{' '}
              <span className="midha">Pro</span>jects
            </p> */}
            <p className="description">
              Step-up your career by acquiring the desirable skills and leading
              global certifications in Finance.
            </p>
            <ButtonWrapper>
              <a href="#courseID" style={{ textDecoration: 'none' }}>
                <ButtonPrimary>Start Learning</ButtonPrimary>
              </a>
            </ButtonWrapper>
          </HeroLeft>
          <HeroRight>
            <CategoryContainer>
              <Link to="/programmes/frm" className="link">
                <SectionBox>FRM</SectionBox>
              </Link>

              <Link to="/programmes/prm" className="link">
                <SectionBox>PRM</SectionBox>
              </Link>

              <Link to="/programmes/cfa" className="link">
                <SectionBox>CFA</SectionBox>
              </Link>

              <SectionBox>MFSCHOOL</SectionBox>
            </CategoryContainer>
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
