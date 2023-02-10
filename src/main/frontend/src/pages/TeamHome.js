import styled from "styled-components";
import Header from "../components/Header";


import SideBar from "../components/Sidebar";
import {OpponentTeamImg, TeamProfileImg1} from "../assets";

function TeamHome() {
    return(
        <Styled.Root>
            <SideBar />
            <Header noLogo/>
            <Styled.Container>
                <Styled.ProfileContainer>
                    <img src={TeamProfileImg1} alt={"팀 프로필 사진"} width={"130"} height={"130"}/>
                    <Styled.TeamName>Jenny Wilson</Styled.TeamName>
                    <Styled.TeamRegion>지역 : 서울</Styled.TeamRegion>
                </Styled.ProfileContainer>
                <Styled.TeamInfoContainer>
                    <div>
                    <Styled.TeamInfoLabel className={"player"}>선수 정보</Styled.TeamInfoLabel>
                    <Styled.TeamInfo className={"player"}>김서현 이다빈 황재민 홍길동 김서현 이다빈 황재민 홍길동 김서현 이다빈 황재민 홍길동 더보기</Styled.TeamInfo>
                    </div>
                    <div>
                    <Styled.TeamInfoLabel className={"aboutTeam"}>팀 소개글</Styled.TeamInfoLabel>
                    <Styled.TeamInfo className={"aboutTeam"}></Styled.TeamInfo>
                    </div>
                </Styled.TeamInfoContainer>
            </Styled.Container>
            <Styled.Container className={"match"}>
                <Styled.MatchContainer>
                    <Styled.MatchKind>지난 경기</Styled.MatchKind>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.score>2 : 0 (승)</Styled.score>
                            <Styled.info className={"finish"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"finish"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                        <Styled.recordButton>기록 & 분석 보기</Styled.recordButton>
                    </Styled.Match>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.score>2 : 0 (승)</Styled.score>
                            <Styled.info className={"finish"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"finish"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                        <Styled.recordButton>기록 & 분석 보기</Styled.recordButton>
                    </Styled.Match>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.score>2 : 0 (승)</Styled.score>
                            <Styled.info className={"finish"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"finish"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                        <Styled.recordButton>기록 & 분석 보기</Styled.recordButton>
                    </Styled.Match>
                </Styled.MatchContainer>
                <Styled.MatchContainer>
                    <Styled.MatchKind>예정 경기</Styled.MatchKind>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.info className={"scheduled"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"scheduled"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                    </Styled.Match>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.info className={"scheduled"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"scheduled"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                    </Styled.Match>
                    <Styled.Match>
                        <Styled.opponentTeamContainer>
                            <Styled.opponentTeam>상대팀</Styled.opponentTeam>
                            <img src={OpponentTeamImg} alt={"상대팀 프로필"}/>
                            <Styled.opponentTeamName>Kathryn</Styled.opponentTeamName>
                        </Styled.opponentTeamContainer>
                        <Styled.matchInfoContainer>
                            <Styled.info className={"scheduled"}>서울 OO 축구장</Styled.info>
                            <Styled.info className={"scheduled"}>2022.11.06 17:00</Styled.info>
                        </Styled.matchInfoContainer>
                    </Styled.Match>
                </Styled.MatchContainer>
            </Styled.Container>
        </Styled.Root>
    );
}

export default TeamHome;

const Styled = {
    Root : styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
    `,
    Container : styled.div`
    display:flex;
    
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
    ProfileContainer : styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    
    width : 220px;
    
    margin-top: 40px;
    `
    ,
    TeamName : styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 0px;
    
    margin-top: 25px;
    `,
    TeamRegion : styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 0px;
    
    margin-top: 40px;
    `,
    TeamInfoContainer : styled.div`
    display:flex;
    flex-direction:column;
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
    display:flex;
    flex-direction: column;
    width: 100%;
    }
    `,
    TeamInfoLabel : styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 29px;

    &.aboutTeam {
    margin-top: 20px;
    }
    `,
    TeamInfo : styled.span`
    background: rgba(255, 255, 255, 0.8);

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
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
    width: 100%;
    height: 100px;
    border-radius: 5px;
    margin-top: 10px;
    }
    `,
    MatchContainer : styled.section`
    display:flex;
    flex-direction:column;
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
    MatchKind : styled.header`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 0px;
    
    margin: 50px 0;
    `,
    Match : styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 150px;
    
    margin-bottom: 20px;
    padding: 0 40px;
    
    background: rgba(255, 255, 255, 0.9);
    `,
    opponentTeamContainer : styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    & > img {
    margin-top: 20px;
    }
    `,
    opponentTeam : styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-size: 15px;
    line-height: 0px;    
    
    color: #A5A5A5;
    `,
    opponentTeamName : styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 0px;
    
    margin-top: 15px;
    `,
    matchInfoContainer: styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    
    height: 100%;
    
    margin-left: 35px;
    `,
    score : styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 0px;
    
    margin: 20px 0 40px;
    `,
    info : styled.div`
    &.finish {
    width: 100%;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
    
    margin: 10px 0;
    }
    
    &.scheduled {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 0px;
    
    margin: 20px 0;
    }
    `,
    recordButton : styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 150px;
    height: 51px;
    
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    
    margin-left: auto;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 17px;
    line-height: 0px;
    
    cursor: pointer;
    `
}