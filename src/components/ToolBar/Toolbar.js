import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Drawerright from '../Drawer/Drawer';
import logo from '../../images/MidhaFinLogo.png';
import { IoIosArrowDown } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import GarpLogo from '../../images/garp.jpg';

const ToolbarLayout = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1.5px solid #cdcdcd;
  border-top: 10px solid #d29b59;

  @media (max-width: 496px) {
    height: 15vh;
    ${'' /* position: fixed; */}
  }
`;

const ToolbarWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: black;
  cursor: pointer;
  ${'' /* justify-content: center; */}
  align-items: center;

  img {
    width: 180px;
  }

  p {
    font-size: 11px;
    margin-top: -10px;
    color: maroon;
  }

  @media (max-width: 496px) {
    img {
      width: 130px;
    }

    p {
      font-size: 8px;
    }
  }
`;

const MenuWrapper = styled.div`
  display: none;
  height: auto;
  width: auto;
  padding: 0;
  @media (max-width: 800px) {
    display: flex;
    margin-left: auto;
    ${'' /* margin-right: 5px; */}
    align-items: center;
    padding: 0;
    margin-right: -15px;
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 40%;
  align-items: center;
  height: 100%;
  color: black;
  justify-content: space-around;
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }

  Link {
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const ButtonPrimary = styled.button`
  width: 200px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #d29b59;
  cursor: pointer;
`;

const Toolbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <ToolbarLayout>
        <ToolbarWrapper>
          <LogoWrapper>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <a href="https://www.garp.org/">
              <img src={GarpLogo} alt="logo" />
            </a>
          </LogoWrapper>
          <NavItemWrapper>
            <p
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
              onClick={toggleDropdown}
              // onClick={() => window.scroll(0, 0)}
            >
              <div
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                }}
              >
                <span>Programs</span>{' '}
                <IoIosArrowDown
                  style={{
                    color: 'maroon',
                    fontSize: '18px',
                    marginLeft: '3px',
                  }}
                />
              </div>
              <div
                style={{
                  background: 'white',
                  padding: '10px',
                  border: '1px solid #cdcdcd',
                  position: 'absolute',
                  top: '55px',
                  zIndex: '1000',
                  display: `${dropdown ? 'flex' : 'none'}`,
                  flexDirection: 'column',
                  width: '200px',
                  borderRadius: '0px 0px 5px 5px',
                }}
              >
                <Link
                  to="/programmes/frm"
                  style={{
                    textDecoration: 'none',
                    color: 'maroon',
                    fontSize: '16px',
                    borderBottom: '1px solid #cdcdcd',
                  }}
                >
                  FRM
                </Link>
                <Link
                  to="/programmes/prm"
                  style={{
                    textDecoration: 'none',
                    color: 'maroon',
                    fontSize: '16px',
                    borderBottom: '1px solid #cdcdcd',
                  }}
                >
                  PRM
                </Link>
                <Link
                  to="/programmes/cfa"
                  style={{
                    textDecoration: 'none',
                    color: 'maroon',
                    fontSize: '16px',
                    borderBottom: '1px solid #cdcdcd',
                  }}
                >
                  CFA
                </Link>

                {/* <Link
                  to="/programmes/mfschool"
                  style={{
                    textDecoration: 'none',
                    color: 'maroon',
                    fontSize: '16px',
                    borderBottom: '1px solid #cdcdcd',
                  }}
                >
                  MFSCHOOL
                </Link> */}
              </div>
            </p>
            {/* <Link
              to="/blogs"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '16px',
              }}
            >
              Blogs
            </Link> */}
            <a
              href="#contact"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '16px',
              }}
            >
              Contact Us
            </a>
            <a
              href="tel:9155199555"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600',
              }}
            >
              <MdCall
                style={{ color: 'green', marginRight: '7px', fontSize: '20px' }}
              />{' '}
              +91 9155199555
            </a>
          </NavItemWrapper>
          <MenuWrapper>
            <Drawerright />
          </MenuWrapper>
        </ToolbarWrapper>
      </ToolbarLayout>
    </>
  );
};

export default Toolbar;
