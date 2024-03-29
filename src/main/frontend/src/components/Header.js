import styled from "styled-components";
import { ProfileIcon } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ noRightSection, noLogo }) {
  const isLogined = useState(true);
  return (
    <Styled.Container>
      <Styled.Logo href={"/"}>
        <Link to={"/"}>{!noLogo && "GoalToUs"}</Link>
      </Styled.Logo>
      {!noRightSection &&
        (isLogined ? (
          <img src={ProfileIcon} />
        ) : (
          <Styled.loginJoinButton href={"/login"}>
            로그인/회원가입
          </Styled.loginJoinButton>
        ))}
    </Styled.Container>
  );
}

export default Header;

const Styled = {
  Container: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    height: 90px;

    & > img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  `,
  Logo: styled.div`
    font-size: 30px;
    font-weight: bold;

    cursor: pointer;
  `,
  loginJoinButton: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    font-weight: 800;
    font-size: 14px;
    color: #494949;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
};
