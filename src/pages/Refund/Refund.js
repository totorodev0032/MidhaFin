import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const RefundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const RefundContainer = styled.div`
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

  @media (max-width: 496px) {
    width: 80%;
    margin-top: 10%;
  }
`;

const Refund = () => {
  return (
    <>
      <Toolbar />
      <RefundWrapper>
        <RefundContainer>
          <p className="heading">Refund and Cancellation Policy</p>
          <p className="description">
            Considering how much material we provide to our students from the first day itself, it is our policy to not provide refunds for our courses. Midhafin is committed to providing value for money through high quality content and experienced faculty, which requires the commitment of a lot of financial resources to pay our staff. We make it a point to answer every query of the students regarding the course before enrolment and students can even ask for demo classes before joining, however once enrolled, no request for refund would be entertained.
          </p>
        </RefundContainer>
      </RefundWrapper>
      <Footer />
    </>
  );
};

export default Refund;
