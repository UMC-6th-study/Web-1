import React from 'react';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
  background-color: #1c1c1c;
  color: white;
  padding: 50px 20px;
  text-align: center;
`;

const SearchTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 25px 0 0 25px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px;
  font-size: 18px;
  border: none;
  background-color: #f0c040;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
`;

const SearchSection = () => {
  return (
    <SearchContainer>
      <SearchTitle>🎬 Find your movies!</SearchTitle>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="Search for a movie..." />
        <SearchButton>🔍</SearchButton>
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default SearchSection;
