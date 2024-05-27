import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const [logout, setLogOut] = useState(false);
  const [stringVar, setStringVar] = useState("로그인");

  useEffect(() => {
    if (logout) {
      setStringVar("로그아웃");
    } else {
      setStringVar("로그인");
    }
  }, [logout]);

  const navItems = [
    {
      to: "/signup",
      text: "회원가입",
      click: () => {
        setLogOut(!logout);
      },
    },
    {
      to: "/popular",
      text: "Popular",
      click: () => {
        console.log("nothing");
      },
    },
    { to: "/nowPlaying", text: "Now Playing", click: () => {} },
    { to: "/topRated", text: "Top Rated", click: () => {} },
    { to: "/upcoming", text: "Upcoming", click: () => {} },
  ];

  return (
    <Nav>
      <Link to={"/popular"}>
        <p>UMC Movie</p>
      </Link>

      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <StyledLink onClick={item.click} to={item.to}>
              {item.text}
            </StyledLink>
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
