import React from 'react';
import styled from '@emotion/styled';
import SyllabusAccordions from '../SyllabusAccordion/SyllabusAccordion';

const SyllabusContainer = styled.div`
  padding: 50px 0px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 0px;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const SyllabusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;

  .heading {
    font-size: 32px;
    color: #6a1b1a;
    margin-bottom: 20px;
  }

  @media (max-width: 496px) {
    margin-top: 20px;
  }
`;

const SyllabusSection = ({ curriculum }) => {
  return (
    <>
      <SyllabusContainer>
        <SyllabusWrapper>
          <p className="heading">Course Curriculum</p>
          <SyllabusAccordions curriculum={curriculum} />
        </SyllabusWrapper>
      </SyllabusContainer>
    </>
  );
};

export default SyllabusSection;
