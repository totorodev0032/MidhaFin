import React, { useState } from 'react';
import styled from '@emotion/styled';
import 'react-phone-input-2/lib/style.css';
import './style.css';
import firebase from '../../firebase';

const CourseFormContainer = styled.div`
  display: flex;
  width: 300px;
  height: 280px;
  /* background-color: white; */
  border-radius: 5px;
  align-items: center;
`;

const CourseFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  align-items: center;
  ${'' /* justify-content: center; */}
  ${'' /* background-color: red; */}

  .header {
    display: flex;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
    text-transform: uppercase;
    p {
      margin-left: 7px;
      font-weight: 600;
    }
  }

  form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form input {
    width: 250px;
    height: 40px;
    border: 3px solid #d29b59;
    margin-bottom: 10px;
    border-radius: 13px;
    background-color: #6a1b1a;
    padding-left: 10px;
    font-size: 13px;
    color: white;
  }

  form input::placeholder {
    font-size: 13px;
    color: white;
  }

  form button {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: #d29b59;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Notice = styled.div`
  ${'' /* background-color: maroon; */}
  ${'' /* border: 1px solid #d29b59; */}
  padding: 5px;
  margin: 5px 0px;
  border-radius: 5px;
  p {
    font-size: 12px;
    color: white;
  }
`;

const CourseForm = ({ title }) => {
  var db = firebase.firestore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [notice, setNotice] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      name === '' ||
      name === null ||
      contact === '' ||
      contact === null ||
      email === '' ||
      email === null
    ) {
      setNotice(
        `${name === '' ? 'name' : ''}, ${email === '' ? 'email' : ''}, ${
          contact === '' ? 'contact' : ''
        } field is left empty.`
      );
    } else {
      db.collection('contactForm')
        .doc()
        .set({
          name,
          email,
          contact,
        })
        .then(() => {
          setName('');
          setContact('');
          setEmail('');
          setNotice('Submited. We will get back to you soon.');
        })
        .catch((error) => {
          console.log(error);
          setNotice('Some error occured.');
        });
    }
  };
  return (
    <>
      <CourseFormContainer>
        <CourseFormWrapper>
          <div className="header">
            <p> {title} </p>
          </div>
          <form>
            <input
              type="text"
              placeholder="Full name"
              onChange={handleName}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
            <input
              type="tel"
              placeholder="Contact"
              onChange={handleContact}
              value={contact}
            />
            <button onClick={submitHandler}>Submit</button>
            <Notice>
              <p>{notice}</p>
            </Notice>
          </form>
        </CourseFormWrapper>
      </CourseFormContainer>
    </>
  );
};

export default CourseForm;
