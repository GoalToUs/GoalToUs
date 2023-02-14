import styled from "styled-components";
import Header from "../components/Header";


import SideBar from "../components/Sidebar";
import {OpponentTeamImg, TeamProfileImg1} from "../assets";

function MatchVideo() {
    return(
        <Styled.Root>
            <SideBar />
            <Header noLogo/>
            <Styled.Container>
                <Styled.CenterContainer>
                    <Styled.VideoContainer>
                        <Styled.Video></Styled.Video>
                        <Styled.Info>22.04.21 장소</Styled.Info>
                        <Styled.Info className={"opponentTeam"}>상대팀</Styled.Info>
                    </Styled.VideoContainer>
                    <Styled.VideoContainer>
                        <Styled.Video></Styled.Video>
                        <Styled.Info>22.04.21 장소</Styled.Info>
                        <Styled.Info className={"opponentTeam"}>상대팀</Styled.Info>
                    </Styled.VideoContainer>
                    <Styled.VideoContainer>
                        <Styled.Video></Styled.Video>
                        <Styled.Info>22.04.21 장소</Styled.Info>
                        <Styled.Info className={"opponentTeam"}>상대팀</Styled.Info>
                    </Styled.VideoContainer><Styled.VideoContainer>
                    <Styled.Video></Styled.Video>
                    <Styled.Info>22.04.21 장소</Styled.Info>
                    <Styled.Info className={"opponentTeam"}>상대팀</Styled.Info>
                </Styled.VideoContainer>

                </Styled.CenterContainer>
            </Styled.Container>
        </Styled.Root>
    );
}

export default MatchVideo;

const Styled = {
    Root : styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
    `,
    Container : styled.div`
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
    CenterContainer: styled.div`
    width: 1080px;
    margin: 0 auto;
    
    display:flex;
    flex-wrap:wrap;
    `,
    VideoContainer: styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    
    margin: 20px 30px;
    `,
    Video: styled.div`
    border: 1px solid black;
    width: 300px;
    height: 200px;
    `,
    Info: styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    &.opponentTeam {
    color: #8E8E8E;
    }
    `



}