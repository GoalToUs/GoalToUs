import styled from "styled-components";
import Header from "../components/Header";
import {searchIcon, TeamProfileImg} from "../assets";

function JoinTeam() {

    const handleOnClick = () => {

    }
    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.joinTeamSection>
                <h1>팀 가입하기</h1>
                <Styled.SearchContainer>
                    <Styled.SearchButton><img src={searchIcon}/></Styled.SearchButton>
                    <Styled.SearchInput/>
                </Styled.SearchContainer>
                <Styled.teamListContainer>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton onClick={handleOnClick}>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                    <Styled.teamList>
                        <img src={TeamProfileImg}/>
                        <Styled.teamInfoContainer>
                            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>
                            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>
                        </Styled.teamInfoContainer>
                        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>
                        <Styled.joinButton>가입 신청</Styled.joinButton>
                    </Styled.teamList>
                </Styled.teamListContainer>

                {/*<Styled.teamListContainer>*/}
                {/*    <Styled.teamList>*/}
                {/*        <img src={TeamProfileImg}/>*/}
                {/*        <Styled.teamInfoContainer>*/}
                {/*            <Styled.teamInfo>팀명 : MANCHESTER CITY FC</Styled.teamInfo>*/}
                {/*            <Styled.teamInfo className={"captain"}>주장 : 김서현</Styled.teamInfo>*/}
                {/*        </Styled.teamInfoContainer>*/}
                {/*        <Styled.goTeamHome>팀홈 보기</Styled.goTeamHome>*/}
                {/*        <Styled.joinButton>가입 신청</Styled.joinButton>*/}
                {/*    </Styled.teamList>*/}
                {/*</Styled.teamListContainer>*/}
            </Styled.joinTeamSection>
        </Styled.Root>
    );
}

export default JoinTeam;

const Styled = {
    Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
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
    SearchButton : styled.button`
    position: absolute;
    z-index: 2;
    top: 5px;
    top: 5px;
    right: 5px;
    
    background: none;
    border: none;
    
    cursor: pointer;
    `,
    SearchInput : styled.input`
    position: absolute;
    top: 0;
    left: 0;
    
    display: flex;
    justify-content: flex-end;
    
    width: 650px;
    height: 51px;
    
    padding: 0 20px;
    
    background: #F5F5F5;
    border-radius: 10px;
    border: none;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 39px;
    
    &:focus {
    outline: none;
    }
    `,
    teamListContainer : styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    
    width: 750px;
    height: 450px;
    
    background-color: rgba(0, 0, 0, 0.5);
    
    margin-top: 20px;
    
    overflow-y:scroll;
    
    padding: 20px 0;s

    `,
    teamList : styled.div`
    display: flex;
    align-items: center;
    
    width: 650px;
    background-color: white;
    border-radius: 20px;
    
    padding: 0 10px;
    `,
    teamInfoContainer: styled.div`
    display: flex;
    flex-direction:column;

    margin-left: 20px;
    `,
    teamInfo : styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    &.captain {
    margin-top: 10px;
    }
    `,
    goTeamHome : styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 45px;

    margin-left: 148px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #FFFFFF;

    background: rgba(0, 0, 0, 0.49);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    cursor: pointer;
    `,
    joinButton : styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 45px;

    margin-left: 15px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #FFFFFF;

    background: rgba(1, 60, 77, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    cursor: pointer;
    `
}