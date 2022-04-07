import React from 'react';
import styled from '@emotion/styled';
import MemberBox from './TeamBox';
import MickyImage from '../../images/instructors/Micky.jpg';
import ShubhamImage from '../../images/instructors/Shubham.jpg';
import VishImage from '../../images/instructors/Vish.jpg';
import ShadmaImage from '../../images/instructors/Shadma.jpg';
import AkashImage from '../../images/instructors/Akash.jpg';
import NiranjanImage from '../../images/instructors/Niranjan.jpg';

import Toolbar from '../ToolBar/Toolbar';
import { Box } from '@mui/material';

const TeamSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

  .heading {
    font-weight: 600;
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 3%;
  }
`;

const TeamSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  padding: 20px 0 30px 0;
`;

const Members = [
  {
    name: 'Micky Midha',
    image: MickyImage,
    description:
      'A Computer Science Engineer, with a LLB degree, who is both FRM certified and a CFA charter holder, Micky Midha has 8+ years of experience in FRM and CFA training. He has been a trainer at the Bombay Stock Exchange Institute Limited and a guest faculty/freelance trainer/keynote speaker at premier B-schools including IIM Ranchi, ISM, etc. He is a mentor, with a passion for teaching, and an industry expert with deep understanding of the finance field. ',
  },
  {
    name: 'Shubham Swaraj',
    image: ShubhamImage,
    description:
      'Shubham Swaraj is a data science degree holder from IIIT Bengaluru and a Masters Candidate in data science from Liverpool John Moore University (London). With his expertise in using software packages to show the practical applications of the concepts, he has been teaching and training industry experts and professionals in risk management and statistics for several years. ',
  },

  {
    name: 'Vish Iyer',
    image: VishImage,
    description:
      'Vishwanathan R Iyer (Vish) is a seasoned finance professional, and a CPA Australia member, possessing over 15+ years of work experience across various finance functions including financial planning & analysis (FP&A), capital planning, stress testing and financial risk & control. He has a strong passion for teaching and great industry insights, making him the perfect mentor to guide our students.',
  },
  {
    name: 'Niranjan Pandey',
    image: NiranjanImage,
    description:
      'Niranjan Pandey is an MBA graduate in Finance & IT with 9 years of experience in the industry, having worked with companies like Deloitte, HDFC Bank, ValueLabs, Mindmap, etc. He also possesses several years of experience in academia, having worked as an associate professor in various B-schools of Hyderabad. Being NASSCOM certified in Transactional F&A, he has more than 100 lecture videos on various topics of Finance on YouTube. ',
  },
  {
    name: 'Shadma Khan',
    image: ShadmaImage,
    description:
      'Shadma Khan is working as a Chief Manager in a PSU Bank, having over a decade of experience in finance. Being FRM Certified and having cleared CFA level 1, she brings a unique combination of academic expertise and industry experience to our students. ',
  },
  {
    name: 'Akash Sarkar',
    image: AkashImage,
    description:
      'Akash Sarkar has experience in Business and Financial Consulting with a deep knowledge of the field of finance. He has a Bachelor Degree in Management Studies (with a specialization in finance) from Delhi University, has cleared FRM Level 1 and is a NSE Academy Certified Investment Analyst Champion.  ',
  },
];

const TeamSection = () => {
  return (
    <>
      <Toolbar />
      <TeamSectionWrapper>
        <p className="heading">OUR TEAM</p>
        {/* <TeamSectionContainer> */}
         
          {Members.map((member) => (
             <Box  sx={{
              display:'flex',
              flexDirection:{xs:'column',md:'row',lg:'row'},
              alignContent:'center',
              alignItems:'center',
              justifyContent:'center',
              maxWidth:{xs:'100%',md:'75%'},
              mr:{xs:'0',md:'0.5vw',lg:'1vw'}
            }}>
            <MemberBox
              name={member.name}
              image={member.image}
              description={member.description}
            />
            </Box>
          ))}
        {/* </TeamSectionContainer>{' '} */}
      </TeamSectionWrapper>
    </>
  );
};

export default TeamSection;
