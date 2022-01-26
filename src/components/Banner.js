import React from 'react';
import styled from '@emotion/styled';
import footerImage from '../images/footermask.png';
import { Link } from 'react-router-dom';

const BannerWrapper = styled.div`
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

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 30vh;
  background: url(${footerImage});
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  .heading {
    color: white;
    font-weight: 600;
    font-size: 3rem;
  }

  .link {
    text-decoration: none;
  }

  @media (max-width: 496px) {
    height: auto;
    flex-direction: column;
  }

  @media (max-width: 496px) {
    .heading {
      font-size: 2rem;
      text-align: center;
      padding: 10px;
    }
  }
`;

const ButtonPrimary = styled.button`
  width: 330px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a1b1a;
  border: none;
  border-bottom: 6px solid #d6a468;
  background-color: #d6a468;
  margin-top: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 250px;
    margin-bottom: 20px;
  }
`;

const BannerSection = () => {
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <p className="heading">Highest Success rate of FRM Globally</p>
          <Link
            to="/programmes/frm"
            className="link"
            onClick={() => window.scroll(0, 0)}
          >
            <ButtonPrimary>Explore Our Programs</ButtonPrimary>
          </Link>
        </BannerContainer>
      </BannerWrapper>
    </>
  );
};

export default BannerSection;
