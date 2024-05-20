import React from 'react';
import styled from '@emotion/styled';

const BannerContainer = styled.div`
  background-color: black;
  color: white;
  padding: 100px 20px;
  text-align: center;
  font-size: 36px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      환영합니다
    </BannerContainer>
  );
};

export default Banner;
