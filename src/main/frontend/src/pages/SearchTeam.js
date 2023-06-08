import styled from "styled-components";
import {
  TeamLogo1,
  TeamLogo2,
  TeamLogo3,
  TeamLogo4,
  TeamLogo5,
  TeamProfileImg,
} from "../assets";
import { useFetchSearchTeam, usePostJoinTeam } from "../hooks/team";
import { useLocation, useParams } from "react-router-dom";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRecoilValue } from "recoil";
import { searchWordState } from "../states/team";

function SearchTeam({ searchData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const searchData = useFetchSearchTeam(searchWord); // 검색하기

  const { mutate: joinTeam, isSuccess } = usePostJoinTeam(); // 팀 가입하기
  const handleOnClick = (e) => {
    // joinTeam(postData);
    // if (isSuccess) {
    //   setIsModalOpen(true);
    // }
    Swal.fire("이미 가입된 팀이 있어요!");
  };

  const returnImg = (teamId) => {
    let teamImg;
    switch (String(teamId)) {
      case "1":
        teamImg = TeamLogo1;
        break;
      case "2":
        teamImg = TeamLogo2;
        break;
      case "3":
        teamImg = TeamLogo3;
        break;
      case "4":
        teamImg = TeamLogo4;
        break;
      case "5":
        teamImg = TeamLogo5;
        break;
      default:
        break;
    }
    return teamImg;
  };

  let teamList;
  if (searchData) {
    teamList = searchData.map((searchData) => {
      const imgUrl = returnImg(searchData.teamId);
      return (
        <Styled.teamList>
          <img src={imgUrl} width={55} />
          <Styled.teamInfoContainer>
            <Styled.teamInfo>팀명 : {searchData.teamName}</Styled.teamInfo>
            <Styled.teamInfo className={"intro"}>
              소개 : {searchData.teamIntro}
            </Styled.teamInfo>
          </Styled.teamInfoContainer>
          <Styled.goTeamHome>
            <a href={`/team/home/${searchData.teamId}`}>팀홈 보기</a>
          </Styled.goTeamHome>
          <Styled.joinButton id={searchData.teamId} onClick={handleOnClick}>
            가입
          </Styled.joinButton>
          {isModalOpen && (
            <ModalPortal>
              <Modal width={400} height={200}>
                <Styled.message>가입에 성공하였습니다!</Styled.message>
                <Styled.goLoginButton href={"/"}>
                  홈으로 이동
                </Styled.goLoginButton>
                <Styled.goLoginButton href={`/team/`}>
                  팀 홈으로 이동
                </Styled.goLoginButton>
              </Modal>
            </ModalPortal>
          )}
        </Styled.teamList>
      );
    });
  }
  return (
    <Styled.Root>
      <Styled.joinTeamSection>
        <Styled.teamListContainer>{teamList}</Styled.teamListContainer>
      </Styled.joinTeamSection>
    </Styled.Root>
  );
}

export default SearchTeam;

const Styled = {
  Root: styled.div`
    width: 100vw;
    margin: 0 auto;
  `,
  joinTeamSection: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 5px auto 0;

    & > h1 {
      font-size: 23px;
      font-weight: bold;
    }
  `,
  SearchContainer: styled.div`
    position: relative;
    width: 650px;
    height: 51px;

    margin-top: 30px;
  `,
  SearchButton: styled.button`
    position: absolute;
    z-index: 2;
    top: 5px;
    top: 5px;
    right: 5px;

    background: none;
    border: none;

    cursor: pointer;
  `,
  SearchInput: styled.input`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: flex-end;

    width: 650px;
    height: 51px;

    padding: 0 20px;

    background: #f5f5f5;
    border-radius: 10px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 39px;

    &:focus {
      outline: none;
    }
  `,
  teamListContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    width: 750px;
    height: 450px;

    background-color: rgba(0, 0, 0, 0.5);

    margin-top: 20px;

    overflow-y: scroll;

    padding: 20px 0;
  `,
  teamList: styled.div`
    display: flex;
    align-items: center;

    width: 650px;
    height: 65px;

    background-color: white;
    border-radius: 20px;

    padding: 0 10px;

    & > img {
      border-radius: 20%;
    }
  `,
  teamInfoContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 400px;

    margin-left: 20px;
  `,
  teamInfo: styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    overflow: hidden;

    text-overflow: ellipsis;
    &.captain {
      margin-top: 10px;
    }
    &.intro {
    }
  `,
  goTeamHome: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 45px;

    margin-left: auto;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #ffffff;

    background: rgba(0, 0, 0, 0.49);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    cursor: pointer;
  `,
  joinButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 45px;

    margin-left: 15px;
    margin-right: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #ffffff;

    background: rgba(1, 60, 77, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    cursor: pointer;
  `,
};
