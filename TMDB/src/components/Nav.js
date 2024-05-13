import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 60px;
  background-color: #0e0f36;
`;

const Ul = styled.ul`
  height: 60px;
  display: flex;
  position: absolute;
  top: 20px;
  right: 5px;

  & li {
    margin-right: 15px;
  }
`;

const TitleNavLink = styled(NavLink)`
  display: inline-block;
  margin: 12px;
  font-size: 22px;
  color: white;
  font-weight: 400;
`;

const LiNavLink = styled(NavLink)`
  font-size: 13px;
  color: white;

  &:hover {
    font-size: 14px;
    font-weight: 700;
  }
`;

function handleActive({ isActive }) {
  return {
    color: isActive ? "#e8af10" : "white",
    fontWeight: isActive ? "700" : "400",
  };
}

function Nav() {
  return (
    <NavContainer>
      <h1>
        <TitleNavLink to="popular">UMC Movie</TitleNavLink>
      </h1>

      <Ul>
        <li>
          <LiNavLink style={handleActive} to="login">
            로그인
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="join">
            회원가입
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="popular">
            Popular
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="now-playing">
            Now Playing
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="top-rated">
            Top Rated
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="upcoming">
            Upcoming
          </LiNavLink>
        </li>
      </Ul>
    </NavContainer>
  );
}

export default Nav;
