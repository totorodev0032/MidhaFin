import React from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { Programmes } from '../data/Programmes';

const ProgramFormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    width: 50%;
  }
`;

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const ProgramForm = ({ match }) => {
  const url = match.url;
  const category = url.split('/')[2];
  const Programs = Programmes.find((Program) => Program.id === category);
  const Program = Programs.ProgramList.find((p) => p.id === match.params.id);
  console.log(Program);

  return (
    <>
      <ProgramFormWrapper>
        <iframe
          frameborder="0"
          style={{ height: '100vh', width: '109%', border: 'none' }}
          src="https://forms.zohopublic.in/midhadomains/form/ApplyNow/formperma/ax5k1I1aOfEVCnFc4-v01li3nfZvnpjSREGAEyacvow"
        ></iframe>
        {/* <iframe
          src="https://tally.so/r/mJ7Jr3?transparentBackground=1"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Apply Now"
        ></iframe> */}
      </ProgramFormWrapper>
    </>
  );
};

export default ProgramForm;
