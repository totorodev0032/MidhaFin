import styled from '@emotion/styled'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import ResultBox from '../../components/Results/ResultBox';
import Toolbar from '../../components/ToolBar/Toolbar'

const ResultWrapper= styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:auto;
width:100%;

.heading {
  font-weight: 400;
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 3%;
}
`;

const ResultContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
width:80%;
height:auto;
padding: 20px 0 30px 0;
`;

export default function ResultsPage() {
  return (
    <>
    <Toolbar />
    <ResultWrapper>
      <p className='heading' style={{fontWeight: '600',
    fontSize: '2rem',
    marginTop: '30px',
    marginBottom: '3%'}} >Our Results</p>
      <ResultContainer>
        <ResultBox />
      </ResultContainer>
    </ResultWrapper>
    <Footer />
    </>
  )
}
