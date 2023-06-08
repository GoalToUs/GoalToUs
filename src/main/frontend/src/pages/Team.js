import styled from "styled-components";
import Header from "../components/Header";

import { teamJoinIcon } from "../assets";
import { createTeamIcon } from "../assets";
import { Link } from "react-router-dom";

function Team() {
  const handleOnClick = () => {
    alert("이미 팀에 소속되어 있어요!");
  };
  return (
    <Styled.Root>
      <Header noRightSection />
      <Styled.buttonContainer>
        <Styled.button onClick={handleOnClick}>
          팀 등록하기
          <hr />
          <img src={createTeamIcon} alt={"팀 등록하기 아이콘"} />
        </Styled.button>

        <Link to={"/team/join"}>
          <Styled.button href={"/team/join"}>
            팀 가입하기
            <hr />
            <img src={teamJoinIcon} alt={"팀 가입하기 아이콘"} />
          </Styled.button>
        </Link>
      </Styled.buttonContainer>
    </Styled.Root>
  );
}

export default Team;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  buttonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 110px auto 0;

    width: 800px;
  `,
  button: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 40px;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -1px;

    width: 350px;
    height: 350px;
    border-radius: 15px;

    background-color: rgba(122, 198, 161, 0.4);

    & > hr {
      width: 80%;
      border: 1px solid #535353;
      margin-top: 25px;
    }

    & > img {
      margin-top: 45px;

      width: 150px;
      height: 130px;
    }
  `,
};
