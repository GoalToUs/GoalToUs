import styled from "styled-components";
import Header from "../components/Header";

import SideBar from "../components/Sidebar";
import {
  HeatmapEX,
  TeamProfileImg,
  TeamProfileImg1,
  TeamLogo1,
  TeamLogo2,
  TeamLogo3,
  TeamLogo5,
  TeamLogo4,
} from "../assets";
import {
  useFetchAllResultList,
  useFetchMatchAnalysis,
  usePostWriteMatchAnalysis,
} from "../hooks/match";
import { useState } from "react";
import { constSelector, useRecoilValue } from "recoil";
import { analysisMatchState } from "../states/match";
import { useParams } from "react-router-dom";

function MatchAnalysis() {
  const { matchId } = useParams();
  const [isAllHeatmap, setIsAllHeatmap] = useState(true);
  const [isInputActive, setIsInputActive] = useState(false);

  const matchInfo = useRecoilValue(analysisMatchState);

  const { mutate: editMatchAnalysis } = usePostWriteMatchAnalysis();

  const resultData = useFetchAllResultList();

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

  let team1Data;
  let team2Data;

  let team1_BallShare;
  let team2_BallShare;

  let team1InitialData;
  let team2InitialData;
  const findResult = (matchId) => {
    const result = resultData.filter((item) => {
      return item.matchId === matchId;
    });
    return result;
  };
  if (resultData) {
    const result = findResult(Number(matchId));
    if (result[0].teamId === matchInfo.thisTeamId) {
      team1Data = result[0];
      team2Data = result[1];
    } else {
      team1Data = result[1];
      team2Data = result[0];
    }

    team1_BallShare = Math.floor(
      (team1Data.pass / (team1Data.pass + team2Data.pass)) * 100
    );
    team2_BallShare = Math.floor(
      (team2Data.pass / (team1Data.pass + team2Data.pass)) * 100
    );

    team2InitialData = {
      goal: team2Data.goal,
      penaltyKick: team2Data.penaltyKick,
      yellowCard: team2Data.yellowCard,
      redCard: team2Data.redCard,
    };
    team1InitialData = {
      goal: team1Data.goal,
      penaltyKick: team1Data.penaltyKick,
      yellowCard: team1Data.yellowCard,
      redCard: team1Data.redCard,
    };
  }
  const [team1Inputs, setTeam1Inputs] = useState(team1InitialData);
  const [team2Inputs, setTeam2Inputs] = useState(team2InitialData);

  const handleTeam1OnChange = (e) => {
    const { value, id } = e.currentTarget;
    let key = "";
    switch (id) {
      case "team1골":
        key = "goal";
        break;
      case "team1패널티킥":
        key = "penaltyKick";
        break;
      case "team1경고":
        key = "yellowCard";
        break;
      case "team1퇴장":
        key = "redCard";
        break;
    }
    setTeam1Inputs({
      ...team1Inputs,
      [key]: value,
    });
  };

  const handleTeam2OnChange = (e) => {
    const { value, id } = e.currentTarget;
    let key = "";
    switch (id) {
      case "team2골":
        key = "goal";
        break;
      case "team2패널티킥":
        key = "penaltyKick";
        break;
      case "team2경고":
        key = "yellowCard";
        break;
      case "team2퇴장":
        key = "redCard";
        break;
    }
    setTeam2Inputs({
      ...team2Inputs,
      [key]: value,
    });
  };

  const handleOnClick = () => {
    editMatchAnalysis({
      matchId: matchId,
      teamName: team1Data.teamName,
      postBody: team1Inputs,
    });
    editMatchAnalysis({
      matchId: matchId,
      teamName: team2Data.teamName,
      postBody: team2Inputs,
    });
    setIsInputActive(false);
  };

  const analysisList =
    team1Inputs &&
    team2Inputs &&
    [
      { title: "골", team1Data: team1Inputs.goal, team2Data: team2Inputs.goal },
      {
        title: "패널티킥",
        team1Data: team1Inputs.penaltyKick,
        team2Data: team2Inputs.penaltyKick,
      },
      {
        title: "경고",
        team1Data: team1Inputs.yellowCard,
        team2Data: team2Inputs.yellowCard,
      },
      {
        title: "퇴장",
        team1Data: team1Inputs.redCard,
        team2Data: team2Inputs.redCard,
      },
    ].map((item) => {
      return (
        <Styled.analysisList>
          <Styled.gaugeContainer>
            <Styled.gaugeBar width={item.team1Data} className={"team1"} />
          </Styled.gaugeContainer>

          {isInputActive ? (
            <Styled.analysisInput
              id={`team1${item.title}`}
              value={item.team1Data}
              onChange={handleTeam1OnChange}
            />
          ) : (
            <Styled.analysisNumber>{item.team1Data}</Styled.analysisNumber>
          )}

          <Styled.analysisItem>{item.title}</Styled.analysisItem>
          {isInputActive ? (
            <Styled.analysisInput
              id={`team2${item.title}`}
              value={item.team2Data}
              onChange={handleTeam2OnChange}
            />
          ) : (
            <Styled.analysisNumber>{item.team2Data}</Styled.analysisNumber>
          )}
          <Styled.gaugeContainer>
            <Styled.gaugeBar width={item.team2Data} className={"team2"} />
          </Styled.gaugeContainer>
        </Styled.analysisList>
      );
    });
  if (!team1Data) return;
  const thisTemaImg = returnImg(matchInfo.thisTeamId);
  console.log(thisTemaImg);
  return (
    <Styled.Root>
      <SideBar />
      <Header noLogo />
      <Styled.Container>
        <Styled.Header>
          <Styled.TeamContainer>
            <Styled.TeamName>{team1Data.teamName}</Styled.TeamName>
            <img src={thisTemaImg} width={"55"} height={"50"} />
          </Styled.TeamContainer>
          <Styled.Score>{team1Data.goal}</Styled.Score>
          <Styled.InfoContainer>
            <Styled.Info>{matchInfo.place}</Styled.Info>
            <Styled.Info>
              {returnDate(new Date(matchInfo.startTime))}{" "}
              {returnTime(new Date(matchInfo.startTime))}
            </Styled.Info>
          </Styled.InfoContainer>
          <Styled.Score>{team2Data.goal}</Styled.Score>
          <Styled.TeamContainer>
            <img src={matchInfo.oppoTeamImg} width={"55"} height={"50"} />
            <Styled.TeamName>{team2Data.teamName}</Styled.TeamName>
          </Styled.TeamContainer>
        </Styled.Header>

        <Styled.HeatmapContainer>
          {/*<Styled.HeatmapButton className={isAllHeatmap ? "active" : "inactive"} onClick={()=>setIsAllHeatmap(true)}>전체 히트맵</Styled.HeatmapButton>*/}
          <Styled.HeatmapButton
            className={isAllHeatmap ? "active" : "inactive"}
            onClick={() => setIsAllHeatmap(false)}
          >
            히트맵
          </Styled.HeatmapButton>
        </Styled.HeatmapContainer>
        <Styled.Heatmap
          src={HeatmapEX}
          className={isAllHeatmap ? "all" : "ball"}
        />
        <Styled.analysisContainer>
          {isInputActive ? (
            <Styled.EditButton onClick={handleOnClick}>
              {" "}
              수정 완료{" "}
            </Styled.EditButton>
          ) : (
            <Styled.EditButton onClick={() => setIsInputActive(true)}>
              {" "}
              경기 분석 수정하기
            </Styled.EditButton>
          )}
          <Styled.Teams>
            <span>PENTA</span>
            <span>VS</span>
            <span>LEO</span>
          </Styled.Teams>

          <Styled.analysisList>
            <Styled.gaugeContainer>
              <Styled.gaugeBar
                className={"pass team1"}
                width={team1_BallShare}
              ></Styled.gaugeBar>
            </Styled.gaugeContainer>
            <Styled.analysisNumber>{team1_BallShare}%</Styled.analysisNumber>
            <Styled.analysisItem>볼소유율</Styled.analysisItem>
            <Styled.analysisNumber>{team2_BallShare}%</Styled.analysisNumber>
            <Styled.gaugeContainer>
              <Styled.gaugeBar
                className={"pass team2"}
                width={team2_BallShare}
              ></Styled.gaugeBar>
            </Styled.gaugeContainer>
          </Styled.analysisList>
          {analysisList}
        </Styled.analysisContainer>
      </Styled.Container>
    </Styled.Root>
  );
}

export default MatchAnalysis;

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
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 930px;
    height: 107px;

    background-color: #000f44;

    border-radius: 20px;

    margin-top: 20px;
  `,
  TeamContainer: styled.div`
    display: flex;
    align-items: center;

    margin: 0 60px;

    & > img {
      border-radius: 50%;
    }
  `,
  TeamName: styled.h1`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 0px;

    color: white;

    margin: 0 10px;
  `,
  Score: styled.span`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 0px;

    color: white;

    margin: 0 10px;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;

    gap: 30px;

    margin: 0 30px;
  `,
  Info: styled.span`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 0px;

    color: white;

    text-align: center;
  `,
  Heatmap: styled.img`
    width: 800px;
    height: 400px;

    border: 1px solid black;
  `,
  analysisContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 800px;

    margin-top: 20px;
  `,
  Teams: styled.header`
    display: flex;
    justify-content: center;
    & > span {
      width: 70px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 0px;

      text-align: center;

      margin: 0 10px;
    }
    margin: 20px 0 30px;
  `,
  analysisList: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 700px;
    height: 50px;
  `,
  analysisItem: styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 0px;

    color: #8e8e8e;

    margin: 0 10px;
  `,
  analysisNumber: styled.span`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 0px;
  `,
  gaugeContainer: styled.div`
    position: relative;

    width: 230px;

    background: none;
    margin: 0 20px;
  `,
  gaugeBar: styled.span`
    position: absolute;
    z-index: 2;
    width: ${(props) => `${props.width * 10}px`};
    height: 14px;

    &.pass {
      width: ${(props) => `${props.width * 2}px`};
    }
    &.team1 {
      right: 0;
      background-color: blue;
    }
    &.team2 {
      left: 0;
      background-color: pink;
    }
  `,
  HeatmapContainer: styled.div`
    width: 800px;
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
  `,
  HeatmapButton: styled.button`
    font-size: 16px;
    font-weight: bold;

    width: 100px;
    height: 40px;

    cursor: pointer;

    &.active {
      background-color: #d5441c;
      color: white;
    }
    &.inactive {
      background-color: #eeeeee;
    }

    border: none;
    border-radius: 5px;
  `,
  analysisInput: styled.input`
    padding: 0 5px;
    width: 40px;

    &:focus {
      outline: none;
    }

    &.inactive {
      display: none;
    }
  `,
  EditButton: styled.button`
    width: 150px;
    height: 30px;
    background-color: #eeeeee;
    border-radius: 3px;

    font-size: 15px;

    border: none;

    margin-left: auto;

    cursor: pointer;
  `,
};
