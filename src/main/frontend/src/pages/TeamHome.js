import styled from "styled-components";
import Header from "../components/Header";

import SideBar from "../components/Sidebar";
import {
  OpponentTeamImg,
  TeamLogo2,
  TeamLogo5,
  TeamLogo3,
  TeamLogo1,
  TeamLogo4,
  TeamProfileImg1,
} from "../assets";
import { useFetchTeamInfo } from "../hooks/team";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";

import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import {
  useFetchPlanMatchList,
  useFetchFinishedMatchList,
  useFetchAllMatchList,
  useFetchAllResultList,
} from "../hooks/match";
import { useSetRecoilState } from "recoil";
import { analysisMatchState } from "../states/match";

function TeamHome() {
  const [showAllPlayers, setShowAllPlayers] = useState(false);
  const { teamId } = useParams();

  const teamData = useFetchTeamInfo(teamId);
  const resultData = useFetchAllResultList();
  console.log(resultData);

  const returnImg = (teamId) => {
    let teamImg;
    switch (teamId) {
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
    }
    return teamImg;
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

  const teamImg = returnImg(teamId);

  const matchData = useFetchAllMatchList();
  const planMatchData = matchData?.filter(
    ({ matchState, teamId: itemTeamId, team2Id }) => {
      return (
        matchState === "EXPECTED" &&
        (itemTeamId === Number(teamId) || team2Id === Number(teamId))
      );
    }
  );
  const finishedMatchData = matchData?.filter(
    ({ matchState, teamId: itemTeamId, team2Id }) => {
      return (
        matchState === "FINISH" &&
        (itemTeamId === Number(teamId) || team2Id === Number(teamId))
      );
    }
  );

  let planMatchList;
  if (planMatchData) {
    planMatchList = planMatchData.map((item) => {
      const imgUrl = returnImg(String(item.matchId));
      const oppoName = item.teamId === teamId ? item.team2Id : item.teamId;
      return (
        <Styled.Match key={item.matchId}>
          <Styled.opponentTeamContainer>
            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
            <img src={imgUrl} alt={"상대팀 프로필"} width={70} height={66} />
            <Styled.opponentTeamName>{oppoName}</Styled.opponentTeamName>
          </Styled.opponentTeamContainer>
          <Styled.matchInfoContainer>
            <Styled.info className={"scheduled"}>{item.place}</Styled.info>
            <Styled.info className={"scheduled"}>
              {returnDate(new Date(item.startTime))}{" "}
              {returnTime(new Date(item.startTime))}
            </Styled.info>
          </Styled.matchInfoContainer>
        </Styled.Match>
      );
    });
  }

  const setMatchData = useSetRecoilState(analysisMatchState);
  const handleOnClick = (item) => {
    setMatchData({
      thisTeamId: teamId,
      oppoTeamImg: item.oppoTeamImg,
      team1Name: "",
      team2Name: "",
      team1Goal: item.thisTimeGoal,
      team2Goal: item.oppoTeamGoal,
      region: item.region,
      place: item.place,
      startTime: item.startTime,
    });
  };

  const findResult = (matchId) => {
    const result = resultData.filter((item) => {
      return item.matchId === matchId;
    });
    return result;
  };

  let finishedMatchList;
  if (finishedMatchData) {
    finishedMatchList = finishedMatchData.map((item) => {
      const result = findResult(item.matchId);
      let thisTimeGoal, oppoTeamGoal;
      if (result[0].teamId === teamId) {
        thisTimeGoal = result[0].goal;
        oppoTeamGoal = result[1].goal;
      } else {
        thisTimeGoal = result[1].goal;
        oppoTeamGoal = result[0].goal;
      }
      const imgUrl = returnImg(String(item.matchId));
      const oppoName = item.teamId === teamId ? item.team2Id : item.teamId;
      return (
        <Styled.Match>
          <Styled.opponentTeamContainer>
            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
            <img src={imgUrl} alt={"상대팀 프로필"} width={70} height={66} />
            <Styled.opponentTeamName>{oppoName}</Styled.opponentTeamName>
          </Styled.opponentTeamContainer>
          <Styled.matchInfoContainer>
            <Styled.score>
              {thisTimeGoal} : {oppoTeamGoal}
              {" ("}
              {thisTimeGoal > oppoTeamGoal
                ? "승"
                : thisTimeGoal === oppoTeamGoal
                ? "무"
                : "패"}
              {")"}
            </Styled.score>
            <Styled.info className={"finish"}>{item.place}</Styled.info>
            <Styled.info className={"finish"}>
              {returnDate(new Date(item.startTime))}{" "}
              {returnTime(new Date(item.startTime))}
            </Styled.info>
          </Styled.matchInfoContainer>
          <Styled.recordButton
            id={item.matchId}
            onClick={handleOnClick({
              ...item,
              thisTimeGoal,
              oppoTeamGoal,
              oppoTeamImg: imgUrl,
            })}
          >
            <Link to={`/team/match/analysis/${item.matchId}`}>
              기록 & 분석 보기
            </Link>
          </Styled.recordButton>
        </Styled.Match>
      );
    });
  }

  let allPlayerList, defaultPlayerList;
  if (teamData) {
    allPlayerList = teamData.players.map((player) => {
      return `${player} `;
    });
    defaultPlayerList = teamData.players.slice(0, 12).map((player) => {
      return `${player} `;
    });
  }

  return (
    <Styled.Root>
      <SideBar />
      <Header noLogo />
      {showAllPlayers && (
        <ModalPortal>
          <Modal width={400} height={200}>
            <Styled.CloseModalButton onClick={() => setShowAllPlayers(false)}>
              X
            </Styled.CloseModalButton>
            <Styled.AllPlayers>{allPlayerList}</Styled.AllPlayers>
          </Modal>
        </ModalPortal>
      )}
      {teamData && (
        <Styled.Container>
          <Styled.ProfileContainer>
            <img
              src={teamImg}
              alt={"팀 프로필 사진"}
              width={"130"}
              height={"130"}
            />
            <Styled.TeamName>{teamData.teamName}</Styled.TeamName>
            <Styled.TeamRegion>지역 : {teamData.region}</Styled.TeamRegion>
          </Styled.ProfileContainer>
          <Styled.TeamInfoContainer>
            <div>
              <Styled.TeamInfoLabel className={"player"}>
                선수 정보
              </Styled.TeamInfoLabel>
              <Styled.TeamInfo className={"player"}>
                {defaultPlayerList}{" "}
                {teamData.players.length > 12 && (
                  <Styled.moreButton onClick={() => setShowAllPlayers(true)}>
                    더보기
                  </Styled.moreButton>
                )}
              </Styled.TeamInfo>
            </div>
            <div>
              <Styled.TeamInfoLabel className={"aboutTeam"}>
                팀 소개글
              </Styled.TeamInfoLabel>
              <Styled.TeamInfo className={"aboutTeam"}>
                {teamData.teamIntro}
              </Styled.TeamInfo>
            </div>
          </Styled.TeamInfoContainer>
        </Styled.Container>
      )}
      <Styled.Container className={"match"}>
        <Styled.MatchContainer>
          <Styled.MatchKind>지난 경기</Styled.MatchKind>
          {finishedMatchList}
        </Styled.MatchContainer>
        <Styled.MatchContainer>
          <Styled.MatchKind>예정 경기</Styled.MatchKind>
          {planMatchList}
        </Styled.MatchContainer>
      </Styled.Container>
    </Styled.Root>
  );
}

export default TeamHome;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  Container: styled.div`
    display: flex;

    @media (max-width: 1279px) {
      width: 1280px;
    }
    @media (min-width: 1280px) {
      width: 100vw-226px;
    }
    margin-left: 226px;
    padding: 0 40px;
    /*     
    &.match {
    justify-content : 
    } */
  `,
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 220px;

    margin-top: 40px;
  `,
  TeamName: styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 0px;

    margin-top: 25px;
  `,
  TeamRegion: styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 0px;

    margin-top: 40px;
  `,
  TeamInfoContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 1600px) {
      width: 995px;
    }

    background: rgba(243, 229, 177, 0.5);
    border-radius: 40px;

    padding: 30px 30px;
    margin: 0 30px;

    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,
  TeamInfoLabel: styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 29px;

    &.aboutTeam {
      margin-top: 20px;
    }
  `,
  TeamInfo: styled.span`
    background: rgba(255, 255, 255, 0.8);

    font-family: "Inter";
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 29px;

    &.player {
      text-align: center;

      padding: 10px 5px;
      margin-top: 10px;

      width: 100%;
      border-radius: 5px;
    }

    &.aboutTeam {
      padding: 10px;
      width: 100%;
      height: 100px;
      border-radius: 5px;
      margin-top: 10px;
    }
  `,
  moreButton: styled.button`
    background: none;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 29px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  MatchContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    @media (min-width: 1600px) {
      width: 580px;
    }

    padding: 0 20px;
    margin: 50px 20px;

    background: rgba(157, 213, 203, 0.4);
    border-radius: 40px;
  `,
  MatchKind: styled.header`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 0px;

    margin: 50px 0;
  `,
  Match: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 150px;

    margin-bottom: 20px;
    padding: 0 40px;

    background: rgba(255, 255, 255, 0.9);
  `,
  opponentTeamContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70px;
    & > img {
      margin-top: 20px;
    }
  `,
  opponentTeam: styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 15px;
    line-height: 0px;

    color: #a5a5a5;
  `,
  opponentTeamName: styled.h2`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 0px;

    margin-top: 15px;
  `,
  matchInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    margin-left: 35px;
  `,
  score: styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 0px;

    margin: 20px 0 40px;
  `,
  info: styled.div`
    &.finish {
      width: 100%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 0px;

      margin: 10px 0;
    }

    &.scheduled {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 23px;
      line-height: 0px;

      margin: 20px 0;
    }
  `,
  recordButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 51px;

    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    margin-left: auto;

    font-family: "Inter";
    font-style: normal;
    font-weight: 550;
    font-size: 17px;
    line-height: 0px;

    cursor: pointer;
  `,
  CloseModalButton: styled.button`
    background: none;
    border: none;

    margin: 10px 13px 0px auto;

    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
  `,
  AllPlayers: styled.div`
    width: 300px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  `,
};
