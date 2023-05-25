import styled from "styled-components";
import Header from "../components/Header";
import {
  createMatchIcon,
  TeamLogo1,
  TeamLogo2,
  TeamLogo3,
  TeamLogo4,
  TeamLogo5,
} from "../assets";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { teamNameState } from "../states/team";
import { useState } from "react";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import {
  useFetchAllMatchList,
  useFetchPendingMatchList,
  usePostJoinMatch,
} from "../hooks/match";
import { loginState, userState } from "../states/user";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useFetchTeamInfo } from "../hooks/team";
import axios from "axios";

function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [joinMatchId, setJoinMatchId] = useState(0);
  const [color, setColor] = useState("");
  const teamId = localStorage.getItem("userTeam");

  const matchData = useFetchAllMatchList();
  const { mutate: joinMatch } = usePostJoinMatch();

  const orderSortByTime = (item) => {
    return item.sort((a, b) => {
      return new Date(a.startTime) - new Date(b.startTime);
    });
  };

  const orderSort = (item) => {
    return item.sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  };

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

  if (!matchData) return;
  // waiting만 거르기
  const pendingMatchList = matchData?.filter(({ matchState }) => {
    return matchState === "WAITING";
  });

  // 중복 제외 유닉 날짜만 받기
  let uniqueArr = [];
  pendingMatchList.forEach((element) => {
    const date = new Date(element.startTime);
    const dateString = returnDate(date);
    if (!uniqueArr.includes(dateString)) {
      uniqueArr.push(dateString);
    }
  });
  const sortedDateList = orderSort(uniqueArr);

  // 날짜 그룹과 대조하여 한번 더 날짜끼리 묶기
  let sortedPendingMatchList = [];
  sortedDateList.forEach((date, idx) => {
    const sameDateList = pendingMatchList.filter((item) => {
      return date === returnDate(new Date(item.startTime));
    });
    const sortedSameDateList = orderSortByTime(sameDateList);
    sortedPendingMatchList.push({ date: uniqueArr[idx], sortedSameDateList });
  });
  console.log(sortedPendingMatchList);

  const handleOnClick = (e) => {
    const hi = pendingMatchList.filter((item) => {
      return e.currentTarget.id === String(item.matchId);
    });
    setModalData(hi[0]);
    setIsJoinModalOpen(true);
    setJoinMatchId(e.currentTarget.id);
  };

  const handleJoinMatch = (matchId) => {
    setIsJoinModalOpen(false);
    {
      joinMatch({ teamId: teamId, matchId: matchId });
    }
    setColor("gray");

    Swal.fire("경기가 성사되었습니다!");
  };

  const matchContainerList = sortedPendingMatchList.map(
    ({ date, sortedSameDateList }) => {
      const matchList = sortedSameDateList.map((item) => {
        let img, teamName;
        switch (item.teamId) {
          case 1:
            img = TeamLogo1;
            teamName = "Throwin";
            break;
          case 2:
            img = TeamLogo2;
            teamName = "Jupiter";
            break;
          case 3:
            img = TeamLogo3;
            teamName = "쎄비지";
            break;
          case 4:
            img = TeamLogo4;
            teamName = "LEO";
            break;
          case 5:
            img = TeamLogo5;
            teamName = "PENTA";
            break;
        }
        return (
          <Styled.matchList key={item.matchId}>
            <img src={img} width={"56px"} height={56} />
            <div>
              <Styled.teamName>{teamName}</Styled.teamName>
              <br />
              <Styled.matchInfo>
                {returnDate(new Date(item.startTime))}{" "}
                {returnTime(new Date(item.startTime))}
                <br />
                {item.place}
              </Styled.matchInfo>
            </div>
            <Styled.matchButton
              id={item.matchId}
              onClick={handleOnClick}
              className={color}
            >
              {color === "gray" ? "매칭 완료" : "매칭 신청"}
            </Styled.matchButton>
          </Styled.matchList>
        );
      });
      return (
        <Styled.matchListContainer key={date}>
          <Styled.matchDay>{date}</Styled.matchDay>
          {matchList}
        </Styled.matchListContainer>
      );
    }
  );

  return (
    <Styled.Root>
      <Header />
      {isJoinModalOpen && (
        <ModalPortal>
          <Modal width={600} height={360}>
            <Styled.matchPortalTitle>[ 경기 정보 ]</Styled.matchPortalTitle>
            <Styled.modalMatchInfo>
              <Styled.matchInfo>
                상대팀 : {modalData.matchId}
                <br />
                <br />
                경기 일시 : {returnDate(new Date(modalData.startTime))}{" "}
                {returnTime(new Date(modalData.startTime))}
                <br />
                <br />
                경기 장소 :{` ${modalData.region} ${modalData.place}`}
              </Styled.matchInfo>
            </Styled.modalMatchInfo>
            <Styled.matchPortalMessage>
              매칭을 신청하시겠습니까?
            </Styled.matchPortalMessage>
            <Styled.portalButtonContainer>
              <Styled.matchPortalButton
                onClick={handleJoinMatch(modalData.matchId)}
              >
                예
              </Styled.matchPortalButton>
              <Styled.matchPortalButton
                onClick={() => setIsJoinModalOpen(false)}
              >
                아니오
              </Styled.matchPortalButton>
            </Styled.portalButtonContainer>
          </Modal>
        </ModalPortal>
      )}
      <Styled.Container>
        <Styled.pendingMatchTitle>매칭 대기 경기</Styled.pendingMatchTitle>
        <Styled.pendingMatchContainer>
          <a href="/match/create" target={"_self"}>
            <img src={createMatchIcon} width={"120px"} />
          </a>
          <Styled.scrollContainer>{matchContainerList}</Styled.scrollContainer>
        </Styled.pendingMatchContainer>

        <Styled.buttonContainer>
          <Link to={`/team/home/${teamId}`}>내 팀 홈 가기</Link>
          <Link to={"/team"}>팀 등록 / 가입하기</Link>
        </Styled.buttonContainer>
      </Styled.Container>
    </Styled.Root>
  );
}

export default Home;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    width: 1150px;

    margin: 30px auto 0;
  `,
  pendingMatchTitle: styled.header`
    position: absolute;
    z-index: 2;

    top: -28px;
    left: 25px;

    font-weight: 900;
    font-size: 26px;
    line-height: 44px;
  `,
  pendingMatchContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 800px;
    height: 550px;

    background-color: rgba(122, 198, 161, 0.4);
    border-radius: 15px;

    padding-top: 20px;

    & > a {
      position: absolute;
      z-index: 2;

      right: 45px;
      top: -22px;
    }
  `,
  scrollContainer: styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 790px;
    height: 490px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 15px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(66, 65, 65, 0.8);
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(66, 65, 65, 0.4);
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  `,
  matchListContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    width: 730px;

    margin-top: 20px;
    padding-top: 30px;
  `,
  matchDay: styled.h1`
    position: absolute;
    left: 0;
    top: 0;

    font-size: 22px;
    font-weight: 800;
  `,
  matchList: styled.div`
    position: relative;

    display: flex;
    align-items: center;

    width: 700px;
    height: 100px;

    border-radius: 15px;
    background-color: white;

    border: none;

    margin: 10px 0;
    padding: 0 30px;

    & > div {
      margin-left: 40px;
    }
  `,
  teamName: styled.h2`
    font-weight: 800;
    font-size: 19px;
  `,
  matchInfo: styled.span`
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
  `,
  matchButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 50px;

    width: 100px;
    height: 40px;

    background: #d5441c;
    #Throwin&.gray {
      background: gray;
    }
    border-radius: 10px;
    border: none;

    font-weight: 800;
    font-size: 18px;

    color: white;

    cursor: pointer;
  `,
  buttonContainer: styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 280px;
    height: 280px;

    background-color: rgba(66, 65, 65, 0.4);
    border-radius: 15px;

    margin: auto 0;

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 80px;

      border-radius: 10px;
      border: none;

      margin: 20px 0;

      cursor: pointer;

      font-weight: 800;
      font-size: 22px;
      letter-spacing: -1px;

      &:nth-child(1) {
        background: #f9d7a4;
        color: #494949;
      }
      &:nth-child(2) {
        background: #274c72;
        color: white;
      }
    }
  `,

  //팝업
  matchPortalTitle: styled.h1`
    margin-top: 40px;
    margin-bottom: 20px;

    font-weight: 800;
    font-size: 22px;
  `,
  modalMatchInfo: styled.div`
    background-color: white;
    padding: 20px;

    border-radius: 4px;
  `,
  matchPortalMessage: styled.div`
    margin-top: 17px;
    margin-bottom: 20px;

    font-weight: 800;
    font-size: 22px;
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
  portalButtonContainer: styled.div`
    display: flex;
  `,
};
