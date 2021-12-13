import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const TermWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const TermContainer = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;

  .heading {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .description {
    margin-bottom: 35px;
  }

  @media (max-width: 496px) {
    width: 80%;
    margin-top: 10%;
  }
`;

const Term = () => {
  return (
    <>
      <Toolbar />
      <TermWrapper>
        <TermContainer>
          <p className="heading">Terms and Conditions</p>
          <p className="title">Terms</p>
          <p className="description">
            This website (“Midhafin.com”) is owned and operated by Midha Education Private Limited. By accessing this web site, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <p className="title">User obligations</p>
          <p className="description">
            User must comply with any instructions given by the company to him/her regarding how to use the website. The user must not do anything that interferes with, or adversely affects, the normal operation of the website (including the ability of other users to access or use the website). The user is responsible for ensuring the security of the systems and devices that he/she uses to access our website, including the use of appropriate virus-checking and other security software.
          </p>

          <p className="title">Intellectual</p>
          <p className="description">
            All of the intellectual property rights in and to our website belongs to Midha Education Private Limited and our licensors. The company may update and change the materials available on our website, including removing materials, at any time at our discretion without advance notice to the user. User may download or print sections of the website if needed for their own personal use, but otherwise the user may not reproduce any part of the website without the company’s express prior consent. To the extent that the website contains functionality that allows users to access or download specific materials through the website, the use of that functionality and the downloaded materials may be subject to separate terms and conditions which you will be asked to read and accept at the relevant time.
          </p>

          <p className="title">Website Links</p>
          <p className="description">
            This website may contain (or link to) information that has not been devised, verified or tested by the company or any of its officers, employees or agents. These are provided for the user’s information only. The company does not take any responsibility for that information, nor endorses its accuracy or completeness. The company does not guarantee that the information, or the provision of the hyperlinks to the user, does not infringe third party rights. If the website contains a link to an external website, the company does not endorse, recommend, approve, guarantee or introduce any third parties or the services and/or products that those third parties may offer. The company does not accept any responsibility for them or any of the content available, or for any loss or damage that may arise from the user’s use of them. The user may provide a link to the home page of our website at, on any website he/she operates, as long as they do not suggest any form of association, approval or endorsement on the company’s part without the company’s express prior permission and the user must promptly delete the link at the company’s request.
          </p>

          <p className="title">Liability</p>
          <p className="description">
            While The company does use reasonable care and skill in operating this website, the company cannot promise that the website will always be available, meet the user’s requirements or be completely free of faults, errors or compromise from cybersecurity events. To the maximum extent permitted by law, except as expressly set out in these terms of use, the company excludes: -all conditions, representations, warranties and statutory guarantees, whether express or implied, in relation to this website; and -any liability, whether in contract, tort (including negligence), or otherwise, for any indirect or consequential loss, damage or expense incurred by the user in connection with our website. To the extent we are unable by law to exclude any implied condition, representation, warranty or statutory guarantee in relation to the provision of goods or services through our website, we limit our liability for a breach to the re-supply of those goods or services, or payment for such re-supply. This is without limitation to any other exclusions or restrictions of our or others’ liability in connection with this website.
          </p>

          <p className="title">Privacy</p>
          <p className="description">
            The company will manage any personal information that it collects through this website in accordance with the company’s Privacy Policy, which you can access here. 
            
          </p>
        </TermContainer>
      </TermWrapper>
      <Footer />
    </>
  );
};

export default Term;
