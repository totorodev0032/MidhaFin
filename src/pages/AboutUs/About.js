import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const AboutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;

  .heading {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .description {
    margin-bottom: 35px;
  }

  p {
    margin-bottom: 20px;
    font-size: 15px;
  }

  @media (max-width: 496px) {
    width: 80%;
    margin-top: 10%;
  }
`;

const About = () => {
  return (
    <>
      <Toolbar />
      <AboutWrapper>
        <AboutContainer>
          <p className="heading">About Us</p>
          <p className="description">
            Midhafin is the brain child of Mr. Micky Midha - a Computer Science Engineer, a CFA charter holder, a certified FRM and LLB degree holder. He is a trainer at Bombay Stock Exchange Institute Limited and has experience in delivering sessions at premier B-schools like IIM Ranchi, XISS, ISM, etc. He has been the most viewed writer on Quora on GARP FRM for quite some time now. 
          </p>
          <p className = "description">Midhafin, the flagship SBU of Midha Education Pvt. Ltd. focuses on academic excellence while also concentrating on the practical aspects of what is taught. There is no knowledge without application and we strive to ensure that every single student of ours is given the right mentorship to not just pass an exam but also to be able to use the knowledge to further his or her career. </p>
          <p className = "description">We believe in mentorship and not just teaching, and since most of our new students come from the recommendations of old students, our quality of service is our marketing.</p>
        </AboutContainer>
      </AboutWrapper>
      <Footer />
    </>
  );
};

export default About;
