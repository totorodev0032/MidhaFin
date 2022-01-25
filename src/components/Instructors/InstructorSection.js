import React from 'react';
import styled from '@emotion/styled';
import InstructorBox from './InstructorBox';

const InstructorSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const InstructorSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  padding: 20px 0 30px 0;
`;

const InstructorSection = ({ instructors }) => {
  return (
    <>
      <InstructorSectionWrapper>
        {' '}
        <InstructorSectionContainer>
          {instructors.map((instructor) => (
            <InstructorBox
              name={instructor.name}
              image={instructor.image}
              description={instructor.description}
            />
          ))}
        </InstructorSectionContainer>{' '}
      </InstructorSectionWrapper>
    </>
  );
};

export default InstructorSection;
