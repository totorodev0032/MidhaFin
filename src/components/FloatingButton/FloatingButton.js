import React from 'react';
import styled from '@emotion/styled';
import { SiWhatsapp } from 'react-icons/si';

const FloatingButton = () => {
  return (
    <Div>
      <a href="https://wa.me/919155199555">
        <Icon />
      </a>
    </Div>
  );
};

export default FloatingButton;

const Div = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid green;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

const Icon = styled(SiWhatsapp)`
  color: green;
  font-size: 64px;
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;
