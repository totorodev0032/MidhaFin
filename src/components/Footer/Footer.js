import React from 'react';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerImage from '../../images/footermask.png';
import socialImage from '../../images/social.png';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import { MdCall } from 'react-icons/md';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  justify-content: center;
  align-items: center;
  background: url(${footerImage});
  ${'' /* background-color: rgba(210, 155, 89, 0.2); */}
  border-bottom: 5px solid #6a1b1a;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 90%;

  @media (max-width: 496px) {
    flex-direction: column;
    margin-bottom: 15px;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;s
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  ${'' /* background-color: black; */}

  .heading {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .links {
    margin-bottom: 5px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
  }

  .logoWrapper {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }

  img {
    height: 90%;
  }

  .icon {
    margin-left: 20px;
    color: #6a1b1a;
  }

  @media (max-width: 496px) {
    margin-top: 20px;
    margin-bottom: 10px;
    height: auto;

    .logoWrapper {
      margin-left: 15px;
    }
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 50%;
  ${'' /* background-color: white; */}

  .logocontainer {
    display: flex;
    width: 100%;
    height: 40%;
    margin-bottom: 10px;
    img {
      width: 60%;
    }
  }

  p {
    color: white;
    margin-left: 10px;
  }

  @media (max-width: 496px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    ${'' /* background-color: white; */}

    .logocontainer {
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;

      img {
        width: 60%;
      }
    }
  }
`;

const SocialBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #d29b59;
  margin-left: 15px;
  border-radius: 3px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLeft>
            <FooterBox>
              <p className="heading">Company</p>
              <Link
                to="/about-us"
                onClick={() => window.scroll(0, 0)}
                className="links"
              >
                About Us
              </Link>
              {/* <p className="links">Media</p> */}
            </FooterBox>
            <FooterBox>
              <p className="heading">Help and Support</p>
              <Link
                className="links"
                to="/terms-and-conditions"
                onClick={() => window.scroll(0, 0)}
              >
                <p>Terms and Condition</p>
              </Link>
              <Link
                to="/privacy-policy"
                className="links"
                onClick={() => window.scroll(0, 0)}
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                to="/refund-and-cancellation-policy"
                className="links"
                onClick={() => window.scroll(0, 0)}
              >
                <p>Refund Policy</p>
              </Link>
            </FooterBox>
          </FooterLeft>
          <FooterRight>
            <LogoBox>
              <div className="logocontainer">
                {/* <img src={socialImage} /> */}
                <SocialBox>
                  <a href="https://www.facebook.com/midhapro/">
                    <FiIcons.FiFacebook
                      style={{
                        color: '#6a1b1a',
                        fontSize: '20px',
                        marginTop: '7px',
                      }}
                    />
                  </a>
                </SocialBox>
                <SocialBox>
                  <a href="https://www.youtube.com/channel/UCdvJ5GXj5lRKYzZoVuSO_wA">
                    <AiIcons.AiFillYoutube
                      style={{
                        color: '#6a1b1a',
                        fontSize: '20px',
                        marginTop: '7px',
                      }}
                    />
                  </a>
                </SocialBox>
                <SocialBox>
                  <a href="https://twitter.com/MidhaPro">
                    <AiIcons.AiOutlineTwitter
                      style={{
                        color: '#6a1b1a',
                        fontSize: '20px',
                        marginTop: '7px',
                      }}
                    />
                  </a>
                </SocialBox>
                <SocialBox>
                  {' '}
                  <a href="https://www.linkedin.com/company/midhapro/">
                    <AiIcons.AiFillLinkedin
                      style={{
                        color: '#6a1b1a',
                        fontSize: '20px',
                        marginTop: '7px',
                      }}
                    />
                  </a>
                </SocialBox>
              </div>
              <p>© 2021 MidhaPro</p>
              <a
                href="tel:9801176401"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                <MdCall
                  style={{
                    color: 'green',
                    marginRight: '7px',
                    fontSize: '20px',
                  }}
                />{' '}
                +91 9801176401
              </a>
            </LogoBox>
          </FooterRight>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
