import React from 'react';
import styled from '@emotion/styled';
import { Programmes } from '../../data/Programmes';
import Toolbar from '../../components/ToolBar/Toolbar';
import { Link } from 'react-router-dom';

const ProgramPage = ({ match }) => {
  const ProgramList = Programmes.find(
    (ProgramList) => ProgramList.id === match.params.ids
  );

  return (
    <>
      <Toolbar />
      <ProgramPageWrapper>
        <ProgramPageContainer>
          <h3> {ProgramList.title} Part I </h3>
          <CategoryContainer>
            {ProgramList.ProgramList.map((p) =>
              p.category === 1 ? (
                <>
                  <ProgramBox>
                    {' '}
                    <ProgramUp>
                      <Link
                        to={`/programs/${ProgramList.id}/${p.id}`}
                        className="link"
                      >
                        <p> {p.title} </p>{' '}
                      </Link>
                    </ProgramUp>
                    <ProgramPointSection>
                      <p
                        style={{
                          marginRight: 'auto',
                          marginLeft: '20px',
                          marginTop: 0,
                          fontWeight: 600,
                        }}
                      >
                        {p.cardData[0]}{' '}
                      </p>
                      {p.cardData.map((data, index) =>
                        index !== 0 ? (
                          <ul>
                            <li> {data} </li>
                          </ul>
                        ) : null
                      )}
                    </ProgramPointSection>
                    <ProgramDown>
                      {' '}
                      <p> {p.Meta} </p>
                      {p.priceR ? (
                        <p className="price">
                          {' '}
                          Rs. {p.priceR} / USD {p.priceU}
                        </p>
                      ) : null}
                      <Link
                        to={`/programs/${ProgramList.id}/${p.id}`}
                        className="link"
                        onClick={() => window.scroll(0, 0)}
                      >
                        <ProgramFooter>
                          {' '}
                          <ButtonPrimary>View Details</ButtonPrimary>
                        </ProgramFooter>
                      </Link>
                    </ProgramDown>
                  </ProgramBox>
                </>
              ) : null
            )}
          </CategoryContainer>
        </ProgramPageContainer>

        {ProgramList.parts > 1 ? (
          <ProgramPageContainer>
            <h3> {ProgramList.title} Part II </h3>
            <CategoryContainer>
              {ProgramList.ProgramList.map((p) =>
                p.category === 2 ? (
                  <>
                    <ProgramBox>
                      {' '}
                      <ProgramUp>
                        <Link
                          to={`/programs/${ProgramList.id}/${p.id}`}
                          className="link"
                        >
                          <p> {p.title} </p>{' '}
                        </Link>
                      </ProgramUp>
                      <ProgramPointSection>
                        <p
                          style={{
                            marginRight: 'auto',
                            marginLeft: '20px',
                            marginTop: 0,
                            fontWeight: 600,
                          }}
                        >
                          {' '}
                          {p.cardData[0]}{' '}
                        </p>
                        {p.cardData.map((data, index) =>
                          index !== 0 ? (
                            <ul>
                              <li> {data} </li>
                            </ul>
                          ) : null
                        )}
                      </ProgramPointSection>
                      <ProgramDown>
                        {' '}
                        <p> {p.Meta} </p>
                        <p className="price">
                          {' '}
                          Rs. {p.priceR} / USD {p.priceU}{' '}
                        </p>
                        <Link
                          to={`/programs/${ProgramList.id}/${p.id}`}
                          className="link"
                          onClick={() => window.scroll(0, 0)}
                        >
                          <ProgramFooter>
                            {' '}
                            <ButtonPrimary>View Details</ButtonPrimary>
                          </ProgramFooter>{' '}
                        </Link>
                      </ProgramDown>
                    </ProgramBox>
                  </>
                ) : null
              )}
            </CategoryContainer>
          </ProgramPageContainer>
        ) : null}

        {ProgramList.parts > 2 ? (
          <ProgramPageContainer>
            <h3> {ProgramList.title} Part I & II Combined </h3>
            <CategoryContainer>
              {ProgramList.ProgramList.map((p) =>
                p.category === 3 ? (
                  <>
                    <ProgramBox>
                      {' '}
                      <ProgramUp>
                        <Link
                          to={`/programs/${ProgramList.id}/${p.id}`}
                          className="link"
                        >
                          <p> {p.title} </p>{' '}
                        </Link>
                      </ProgramUp>
                      <ProgramPointSection>
                        <p
                          style={{
                            marginRight: 'auto',
                            marginLeft: '20px',
                            marginTop: 0,
                            fontWeight: 600,
                          }}
                        >
                          {' '}
                          {p.cardData[0]}{' '}
                        </p>
                        {p.cardData.map((data, index) =>
                          index !== 0 ? (
                            <ul>
                              <li> {data} </li>
                            </ul>
                          ) : null
                        )}
                      </ProgramPointSection>
                      <ProgramDown>
                        <p> {p.Meta} </p>
                        <p className="price">
                          {' '}
                          Rs. {p.priceR} / USD {p.priceU}{' '}
                        </p>
                        <Link
                          to={`/programs/${ProgramList.id}/${p.id}`}
                          className="link"
                          onClick={() => window.scroll(0, 0)}
                        >
                          <ProgramFooter>
                            {' '}
                            <ButtonPrimary>View Details</ButtonPrimary>
                          </ProgramFooter>{' '}
                        </Link>
                      </ProgramDown>
                    </ProgramBox>
                  </>
                ) : null
              )}
            </CategoryContainer>
          </ProgramPageContainer>
        ) : null}
      </ProgramPageWrapper>
    </>
  );
};

export default ProgramPage;

const ProgramPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`;

const ProgramPageContainer = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center;
  margin-top: 5%;

  .link {
    text-decoration: none;
    color: #000000;
  }

  h3 {
    font-size: 2rem;
    ${'' /* margin-left: 10%; */}
  }

  @media (max-width: 496px) {
    justify-content: center;
    align-items: center;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 496px) {
    justify-content: center;
  }
`;

const ProgramBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  ${'' /* border: 1px solid #6a1b1a; */}
  margin-top: 25px;
  margin-right: 25px;
  box-shadow: 0px 4px 4px 0px #ccccd3;

  @media (max-width: 496px) {
    margin-right: 0;
  }
`;

const ProgramUp = styled.div`
  display: flex;
  height: 80px;
  background: #eeeeee;
  border-bottom: 3px solid #6a1b1a;

  p {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 25px 0 0 15px;
  }
`;

const ProgramDown = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  border-top: 3px solid #6a1b1a;

  margin-top: 30px;
  ${'' /* background: black; */}

  p {
    font-size: 15px;
    color: #000000;
    font-weight: 400;
    padding: 10px 0 0 15px;
  }

  .price {
    font-size: 13px;
    color: gray;
    font-weight: 600;
    padding: 0 0 0 15px;
  }
`;

const ProgramPointSection = styled.div`
  display: flex;
  width:100%;
  height: 300px;
  flex-direction: column;
  margin-top: 30px;
  ${'' /* justify-content:center; */}
  align-items:center;


ul {
    margin-top: 20px;
    width:90%;
  }

  ul li {
    display: grid;
    grid-template-columns: 20px auto;
    justify-content: start;
    align-items: center;
    font-weight: 500;
    font-size: 0.9rem;
    padding-bottom:0;
    padding-top:0;

    ::before {
      content: '▶';
      font-size: 8px;
      color: maroon;
    }
`;

const ProgramFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 0;
  margin-top: 20px;
  padding-bottom: 25px;
`;

const ButtonPrimary = styled.button`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-bottom: 6px solid #d6a468;
  background-color: #6a1b1a;
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
`;
