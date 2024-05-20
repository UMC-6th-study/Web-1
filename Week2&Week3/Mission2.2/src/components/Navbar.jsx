import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1c1c1c;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavTitle><NavItem to="/">UMC Movie</NavItem></NavTitle>
      <NavItems>
        <NavItem to="/popular">Popular</NavItem>
        <NavItem to="/nowplaying">Now Playing</NavItem>
        <NavItem to="/toprated">Top Rated</NavItem>
        <NavItem to="/upcoming">Upcoming</NavItem>
      </NavItems>
    </Nav>
  );
};

export default Navbar;
