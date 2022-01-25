import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import analyticsImg from '../../images/dataanalytics.png';
import midhaImg from '../../images/midha.png';
import { BsCardChecklist } from 'react-icons/bs';
import { MdLiveTv } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import { ImWhatsapp } from 'react-icons/im';
import heroBack from '../../images/back.png';
import LiveLogo from '../../images/live2.png';
import CertiLogo from '../../images/certi2.png';
import ProLogo from '../../images/pro2.png';
import { MdCall } from 'react-icons/md';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { AiOutlineContainer } from 'react-icons/ai';
import { AiOutlineRetweet } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CourseHeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
  background: url(${heroBack});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  z-index: -1;
  background-color: white;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    height: auto;
  }
`;

const CourseHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 90%;
  margin: 5% 0 5% 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 950px) {
    width: 90%;
  }
`;

const CourseLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  .heading {
    font-size: 3rem;
    color: #6a1b1a;
    font-weight: 450;
  }

  .description {
    color: #6a1b1a;
    font-weight: 400;
    font-size: 1.5rem;
  }

  ul {
    margin-top: 20px;
  }

  ul li {
    display: grid;
    grid-template-columns: 20px auto;
    justify-content: start;
    align-items: center;
    color: #6a1b1a;
    font-weight: 300;
    font-size: 1.2rem;

    ::before {
      content: '▶';
      font-size: 8px;
      color: maroon;
    }
  }

  @media (max-width: 496px) {
    ${'' /* flex-basis: 100%; */}
    margin-bottom: 20px;

    .heading {
      line-height: 35px;
      margin-bottom: 15px;
    }
  }
`;

const EnrollButton = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-bottom: 6px solid #d6a468;
  background-color: #6a1b1a;
  margin-top: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const ButtonPrimary = styled.button`
  width: 330px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-bottom: 6px solid #d6a468;
  background-color: #6a1b1a;
  margin-top: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const ButtonSecondary = styled.button`
  width: 330px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: none;
  border: 3px solid #d6a468;
  background-color: white;
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;
const CourseRight = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px #cecece;
  border-top: 5px solid #d6a468;
  ${
    '' /* -webkit-box-shadow: 0px 0px 129px -51px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 129px -51px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 129px -51px rgba(0, 0, 0, 0.75); */
  }
  ${'' /* border-radius: 25px; */}
  overflow: hidden;
  background-color: white;
  ${'' /* border: 4px solid #f1e0cc; */}

  @media (max-width: 496px) {
    width: 100%;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .image {
    width: 400px;
    height: auto;
    @media screen and (max-width: 500px) {
      width: 250px;
      height: 200px;
    }
  }
`;

const ShareLink = styled.button`
  width: auto;
  height: auto;
  border: none;
  background: white;
  cursor: pointer;
`;

const CourseHero = ({
  title,
  description,
  priceR,
  priceU,
  programHeroData,
  enrollLink,
  image,
  usp,
  category,
  id,
  formUrl,
}) => {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
    <>
      <CourseHeroContainer>
        <CourseHeroWrapper>
          <CourseLeft>
            <p className="heading"> {title} </p>
            <p className="description">{description}</p>
            <ul>
              {programHeroData.map((data) => (
                <li> {data} </li>
              ))}
            </ul>
            <a href={enrollLink} style={{ textDecoration: 'none' }}>
              <EnrollButton>Enroll Now</EnrollButton>
              <p
                style={{ marginTop: '10px', fontWeight: 600, color: '#6A1B1A' }}
              >
                {/* {CourseData.certType} */}
              </p>
            </a>
          </CourseLeft>
          <CourseRightContainer>
            <CourseRight>
              <ImageWrapper>
                <img className="image" alt="course desc" src={image} />
                {/* <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '10px',
                    padding: '10px',
                  }}
                ></div> */}
              </ImageWrapper>
              <DetailsWrapper>
                <DataContainer>
                  {/* <Data>
                    <h2>
                      <BsCalendar
                        style={{ color: 'black', fontSize: '20px' }}
                      />{' '}
                      <span> {date} </span>
                    </h2>
                    <h2>
                      <AiOutlineClockCircle
                        style={{ color: 'black', fontSize: '20px' }}
                      />{' '}
                      <span>{time}</span>
                    </h2>
                  </Data> */}
                  <Price style={{ marginLeft: 'auto' }}>
                    {/* <p className="banner">SEPTEMBER'21 OFFER PRICE</p> */}
                    <div
                      style={{
                        display: 'flex',
                        marginLeft: 'auto',
                      }}
                    >
                      {/* <h3>₹{CourseData.mrp}</h3> */}

                      {priceR === null ? (
                        <h2>Contact Us for pricing</h2>
                      ) : (
                        <h2>
                          ₹{priceR} / USD {priceU}
                        </h2>
                      )}
                    </div>

                    {/* <p style={{ marginRight: '5px' }}></p> */}
                  </Price>
                </DataContainer>
                <CertificateWrapper>
                  {usp
                    ? usp.map((data, index) => (
                        <CertificateBox>
                          {/* <BsCardChecklist style={{ fontSize: '42px' }} /> */}
                          {index === 0 ? (
                            <AiOutlineSafetyCertificate
                              style={{ fontSize: '42px' }}
                            />
                          ) : index === 1 ? (
                            <AiOutlineContainer style={{ fontSize: '42px' }} />
                          ) : (
                            <AiOutlineRetweet style={{ fontSize: '42px' }} />
                          )}
                          <span> {data} </span>
                        </CertificateBox>
                      ))
                    : null}
                </CertificateWrapper>
                <ButtonContainer>
                  {formUrl ? (
                    <Link
                      to={`/programmes/${category}/${id}/enroll`}
                      style={{ textDecoration: 'none' }}
                    >
                      <ButtonPrimary>Enroll Now</ButtonPrimary>
                    </Link>
                  ) : null}

                  <a href="tel:9801176401" style={{ textDecoration: 'none' }}>
                    <ButtonSecondary>
                      <MdCall
                        style={{
                          color: 'green',
                          marginRight: '7px',
                          fontSize: '25px',
                        }}
                      />{' '}
                      Call Now
                    </ButtonSecondary>
                  </a>
                </ButtonContainer>
              </DetailsWrapper>
            </CourseRight>
            <ShareButtonsContainer>
              <ShareButton>
                <IoMdShareAlt style={{ color: 'maroon', fontSize: '18px' }} />{' '}
                <ShareLink onClick={copy}>
                  {!copied ? 'Share' : 'Share Link Copied!'}
                </ShareLink>
              </ShareButton>
              <a
                href="https://wa.me/919801176401"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <ShareButton>
                  <ImWhatsapp style={{ color: 'green', fontSize: '18px' }} />{' '}
                  <span>Contact Us</span>
                </ShareButton>
              </a>
            </ShareButtonsContainer>
          </CourseRightContainer>
        </CourseHeroWrapper>
      </CourseHeroContainer>
    </>
  );
};

export default CourseHero;

const CourseRightContainer = styled.div`
  margin-top: 50px;
  position: absolute;
  top: 170px;
  right: 105px;

  @media screen and (max-width: 1300px) {
    right: 70px;
  }
  @media screen and (max-width: 1000px) {
    right: 20px;
  }
  @media screen and (max-width: 925px) {
    position: static;
  }
  @media screen and (max-width: 750px) {
    position: static;
  }
`;

const ShareButtonsContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    padding-left: 5px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 2px solid maroon;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Data = styled.div`
  h2 {
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 10px;
    color: maroon;
    display: flex;
    align-items: center;
    padding-left: 20px;

    @media screen and (max-width: 500px) {
      font-size: 12px;
    }

    span {
      padding-left: 10px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  .banner {
    background-color: #d29b59;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    color: maroon;
    @media (max-width: 496px) {
      font-size: 10px;
    }
  }
  h3 {
    color: #d29b59;
    font-size: 18px;
    font-weight: 500;
    padding-right: 20px;
    border-bottom: 2px solid maroon;
    text-decoration: line-through;
    @media screen and (max-width: 500px) {
      font-size: 17px;
    }
  }
  h2 {
    color: maroon;
    font-size: 20px;
    font-weight: 500;
    padding-right: 20px;
    border-bottom: 2px solid maroon;
    @media screen and (max-width: 500px) {
      font-size: 17px;
    }
  }
`;

const CertificateWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 20px 10px 20px;
`;

const CertificateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: maroon;

  img {
    width: 40%;
  }
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;
    padding-top: 5px;
  }
`;

const ButtonContainer = styled.div`
  padding: 0px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
