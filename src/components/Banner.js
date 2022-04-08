import React from "react";
import styled from "@emotion/styled";
import footerImage from "../images/footermask.png";
import { Link } from "react-router-dom";

const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1046px) {
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
    padding: 10px;
  }

  .link {
    text-decoration: none;
  }

  @media (max-width: 1046px) {
    height: auto;
    flex-direction: column;
  }

  @media (max-width: 646px) {
    .heading {
      font-size: 2rem;
      text-align: center;
      padding: 10px;
    }
  }
`;

const ButtonPrimary = styled.button`
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a1b1a;
  border: none;
  margin-top: 30px;
  background-color: #d6a468;
  border:2px solid #6a1b1a;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  @media screen and (max-width: 646px) {
    width: 250px;
    margin-bottom: 0;
  }
`;

const ButtonSecondary = styled.button`
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6a1b1a;
  border: none;
  background-color: #fff;
  border: 2px solid #d6a468 ;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  @media screen and (max-width: 646px) {
    width: 250px;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;


const BannerSection = () => {
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <p className="heading">Highest Success rate of FRM Globally</p>
          
            <ButtonWrapper>
              <Link to="/results" className="link">
                <ButtonPrimary>Our Results</ButtonPrimary>
              </Link>
              <Link to="/testimonials" className="link">
                <ButtonSecondary>Our Testimonials</ButtonSecondary>
              </Link>
            </ButtonWrapper>
          
        </BannerContainer>
      </BannerWrapper>
    </>
  );
};

export default BannerSection;
