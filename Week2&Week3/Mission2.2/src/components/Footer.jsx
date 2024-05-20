import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 UMC Movie. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
