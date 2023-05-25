import styled from "styled-components";
import Header from "../components/Header";

import SideBar from "../components/Sidebar";
import { OpponentTeamImg, TeamProfileImg1 } from "../assets";
import { useDeleteMatch, useFetchAllMatchList } from "../hooks/match";
import { useState } from "react";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";

function MatchPending() {
  const { mutate: deleteMatch } = useDeleteMatch();
  const userTeamId = localStorage.getItem("userTeam");
  const matchData = useFetchAllMatchList();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteMatchId, setDeleteMatchId] = useState(0);

  // waiting만 거르기
  const pendingMatchList = matchData?.filter(({ matchState, teamId }) => {
    return matchState === "WAITING" && teamId === Number(userTeamId);
  });

  const returnDate = (item) => {
    const dateString = `${item.getFullYear()}/${item.getMonth()}/${item.getDate()}`;
    return dateString;
  };

  const returnTime = (item) => {
    const dateString = `${item.getHours()}:${String(item.getMinutes()).padStart(
      2,
      "0"
    )}`;
    return dateString;
  };

  const handleOnClick = (matchId) => {
    setIsModalOpen(true);
    setDeleteMatchId(matchId);
  };

  const handleDeleteMatch = () => {
    deleteMatch({ matchId: deleteMatchId });
    setIsModalOpen(false);
  };

  let matchList;
  if (pendingMatchList) {
    matchList = pendingMatchList.map((item) => {
      return (
        <Styled.Match>
          <div>
            <Styled.Info>
              {item.region} {item.place}
            </Styled.Info>
            <Styled.Info>
              {returnDate(new Date(item.startTime))}{" "}
              {returnTime(new Date(item.startTime))}
            </Styled.Info>
          </div>
          <Styled.pending>대기중</Styled.pending>
          <Styled.Button onClick={() => handleOnClick(item.matchId)}>
            삭제
          </Styled.Button>
        </Styled.Match>
      );
    });
  }

  return (
    <Styled.Root>
      {isModalOpen && (
        <ModalPortal>
          <Modal width={400} height={200}>
            <Styled.ModalMessage>삭제하시겠습니까?</Styled.ModalMessage>
            <Styled.portalButtonContainer>
              <Styled.matchPortalButton onClick={handleDeleteMatch}>
                예
              </Styled.matchPortalButton>
              <Styled.matchPortalButton onClick={()=>setIsModalOpen(false)}>아니오</Styled.matchPortalButton>
            </Styled.portalButtonContainer>
          </Modal>
        </ModalPortal>
      )}
      <SideBar />
      <Header noLogo />
      <Styled.Container>{matchList}</Styled.Container>
    </Styled.Root>
  );
}

export default MatchPending;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1279px) {
      width: 1280px;
    }
    @media (min-width: 1280px) {
      width: 100vw-226px;
    }
    margin-left: 226px;
    padding: 0 40px;
  `,
  Match: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
    height: 150px;

    background: rgba(243, 229, 177, 0.5);
    border-radius: 40px;

    padding: 0 50px;
    margin-bottom: 30px;

    & > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,
  Info: styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 0px;

    margin: 20px 0;
  `,
  pending: styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 50px;

    border: none;
    border-radius: 15px;

    background: rgba(217, 217, 217, 0.5);
    border-radius: 15px;

    margin-left: auto;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 0px;
  `,
  Button: styled.button`
    width: 100px;
    height: 50px;

    border: none;
    border-radius: 15px;

    background: #e9bf8f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 0px;

    margin-left: 20px;

    cursor: pointer;
  `,
  ModalMessage: styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    margin-top: 50px;
  `,
  portalButtonContainer: styled.div`
    display: flex;

    margin-top: 40px;
  `,
  matchPortalButton: styled.button`
    font-weight: 800;
    font-size: 15px;

    background-color: #e0e0e0;
    border: none;

    width: 80px;
    height: 30px;
    border-radius: 3px;

    margin: 0 10px;

    &:hover {
      background-color: #606060;
      color: white;
      cursor: pointer;
    }
  `,
};
