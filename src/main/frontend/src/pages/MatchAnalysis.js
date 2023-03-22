import styled from "styled-components";
import Header from "../components/Header";


import SideBar from "../components/Sidebar";
import { TeamProfileImg, TeamProfileImg1} from "../assets";
import {useFetchMatchAnalysis} from "../hooks/match";

function MatchAnalysis() {
    const matchId = 1;
    // const matchData = useFetchMatchAnalysis(matchId);
    const matchData = [{
        "teamName": "맨시티",
        "winnerTeamId":12,
        "goal":3,
        "penaltyKick":2,
        "yellowCard":0,
        "redCard":0,
        "highlight":"http:/",
        "pass":89,
        "winner":2,
        "effectiveShooting":67
    },{
        "teamName": "풀럼",
        "matchId":13,
        "goal":3,
        "penaltyKick":2,
        "yellowCard":0,
        "redCard":0,
        "highlight":"http:/",
        "pass":90,
        "winner":4,
        "effectiveShooting":65
    }]
    const team1Data = matchData[0];
    const team2Data = matchData[1];
    return(
        <Styled.Root>
            <SideBar />
            <Header noLogo/>
            <Styled.Container>
                <Styled.Header>
                    <Styled.TeamContainer>
                        <Styled.TeamName>{team1Data.teamName}</Styled.TeamName>
                        <img src={TeamProfileImg} width={"50"} height={"50"}/>
                    </Styled.TeamContainer>
                    <Styled.Score>{team1Data.goal}</Styled.Score>
                    <Styled.InfoContainer>
                        <Styled.Info>서울 OO 축구장</Styled.Info>
                        <Styled.Info>2022.11.06 17:00</Styled.Info>
                    </Styled.InfoContainer>
                    <Styled.Score>{team2Data.goal}</Styled.Score>
                    <Styled.TeamContainer>
                        <img src={TeamProfileImg1} width={"50"} height={"50"} />
                        <Styled.TeamName>{team2Data.teamName}</Styled.TeamName>
                    </Styled.TeamContainer>
                </Styled.Header>
                <Styled.Video/>
                <Styled.analysisContainer>
                    <Styled.Teams><span>맨시티</span><span>VS</span><span>풀럼</span></Styled.Teams>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>볼점유율</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>슈팅</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>패널티킥</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>파울</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>경고</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                    <Styled.analysisList>
                        <Styled.gaugeBar></Styled.gaugeBar>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.analysisItem>퇴장</Styled.analysisItem>
                        <Styled.analysisNumber>72%</Styled.analysisNumber>
                        <Styled.gaugeBar></Styled.gaugeBar>
                    </Styled.analysisList>
                </Styled.analysisContainer>
            </Styled.Container>
        </Styled.Root>
    );
}

export default MatchAnalysis;

const Styled = {
    Root : styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
    `,
    Container : styled.div`
    display:flex;
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
    
    &.match {
    justify-content
    }
    `,
    Header : styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 930px;
    height: 107px;
    
    background-color: #000F44;
    
    border-radius: 20px;
    
    margin-top: 20px;
    `,
    TeamContainer : styled.div`
    display: flex;
    align-items: center;
    
    margin: 0 60px;
    `,
    TeamName : styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 0px;
    
    color: white;
    
    margin: 0 10px;
    `,
    Score : styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 0px;
    
    color: white;
    
    margin: 0 10px;
    `,
    InfoContainer:styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 30px;
    
    margin: 0 30px;
    `,
    Info : styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 0px;
    
    color: white;
    
    text-align: center;
    `,
    Video : styled.div`
    width: 800px;
    height: 400px;
    
    border: 1px solid black;
    
    margin-top: 30px;
    `,
    analysisContainer: styled.section`
    display: flex;
    flex-direction:column;
    align-items: center;
    
    width: 800px;
    
    margin-top : 20px;
    `,
    Teams : styled.header`
    display:flex;
    justify-content: center;
    & > span {
    width: 70px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 0px;
    
    text-align: center;
    
    margin: 0 10px;
    }
    margin: 20px 0 30px;
    `,
    analysisList : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 700px;
    height: 50px;
    
    `,
    analysisItem : styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 0px;
    
    color: #8E8E8E;
    
    margin: 0 10px;
    `,
    analysisNumber : styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 0px;
    `,
    gaugeBar : styled.span`
    width: 200px;
    height: 14px;
    
    border: 1px solid black;
    
    margin: 0 20px;
    `,
}