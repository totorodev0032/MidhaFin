import React from 'react';
import styled from '@emotion/styled';
import { Programmes } from '../../data/Programmes';
import Toolbar from '../../components/ToolBar/Toolbar';
import { Link } from 'react-router-dom';

const ProgramPage = ({ match }) => {
  const ProgramList = Programmes.find(
    (ProgramList) => ProgramList.id === match.params.id
  );

  return (
    <>
      <Toolbar />
      <ProgramPageWrapper>
        <ProgramPageContainer>
          {ProgramList.ProgramList.map((p) => (
            <Link to={`/programmes/${ProgramList.id}/${p.id}`} className="link">
              <ProgramBox>
                {' '}
                <ProgramUp>
                  <Link
                    to={`/programmes/${ProgramList.id}/${p.id}`}
                    className="link"
                  >
                    <p> {p.title} </p>{' '}
                  </Link>
                </ProgramUp>
                <ProgramDown>
                  {' '}
                  <p> {p.Meta} </p>
                  <p className="price"> {p.price} </p>
                </ProgramDown>
              </ProgramBox>
            </Link>
          ))}
        </ProgramPageContainer>
      </ProgramPageWrapper>
    </>
  );
};

export default ProgramPage;

const ProgramPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const ProgramPageContainer = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10%;

  .link {
    text-decoration: none;
    color: #000000;
  }

  @media (max-width: 496px) {
    justify-content: center;
    align-items: center;
  }
`;

const ProgramBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 200px;
  border: 1px solid #6a1b1a;
  margin-top: 25px;
  margin-left: 25px;

  @media (max-width: 496px) {
    margin-left: 0;
  }
`;

const ProgramUp = styled.div`
  display: flex;
  flex-basis: 50%;
  background: #eeeeee;
  border-bottom: 3px solid #6a1b1a;

  p {
    font-weight: 600;
    padding: 15px 0 0 15px;
  }
`;

const ProgramDown = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  p {
    font-size: 13px;
    color: gray;
    font-weight: 400;
    padding: 40px 0 0 15px;
  }

  .price {
    font-size: 13px;
    color: gray;
    font-weight: 400;
    padding: 0 0 0 15px;
  }
`;
