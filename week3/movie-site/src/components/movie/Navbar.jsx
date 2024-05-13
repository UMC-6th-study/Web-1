import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const navItems = [
    { to: "/signup", text: "회원가입" },
    { to: "/popular", text: "Popular" },
    { to: "/nowPlaying", text: "Now Playing" },
    { to: "/topRated", text: "Top Rated" },
    { to: "/upcoming", text: "Upcoming" },
  ];

  return (
    <Nav>
      <Link to={"/popular"}>
        <p>UMC Movie</p>
      </Link>

      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <StyledLink to={item.to}>{item.text}</StyledLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 50px;
  color: white;

  a {
    text-decoration-line: none;
    color: white;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: inline;
  padding: 4px 8px;
  margin: 0 auto;
  color: white;
  text-decoration-line: none;

  &:hover {
    color: yellow;
    font-size: large;
    transition: 0.5s;
    caret-color: black; /* 포인터 색상을 검정색으로 변경 */
  }
`;
//따로 useState로 감지할 필요없어서  편하다..
