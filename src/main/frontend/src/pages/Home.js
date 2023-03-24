import styled from 'styled-components';
import Header from "../components/Header";
import {createMatchIcon, TeamProfileImg} from "../assets";
import {useRecoilValue} from "recoil";
import {teamNameState} from "../states/team";

function Home() {
    const teamName = useRecoilValue(teamNameState);
    return (
        <Styled.Root>
            <Header/>
            <Styled.Container>
                <Styled.pendingMatchTitle>매칭 대기 경기</Styled.pendingMatchTitle>
                <Styled.pendingMatchContainer>
                    <a href="/match/create" target={"_self"}><img src={createMatchIcon}  width={"120px"}/></a>
                    <Styled.scrollContainer>
                    <Styled.matchListContainer>
                        <Styled.matchDay>11.02</Styled.matchDay>
                        <Styled.matchList>
                            <img src={TeamProfileImg}/>
                            <div>
                                <Styled.teamName>MANCHESTER CITY FC</Styled.teamName><br/>
                                <Styled.matchInfo>
                                    2022년 11월 12일  16:00-17:00<br/>
                                    00 대운동장
                                </Styled.matchInfo>
                            </div>
                            <Styled.matchButton>매칭 신청</Styled.matchButton>
                        </Styled.matchList>
                        <Styled.matchList><img src={TeamProfileImg}/>
                            <div>
                                <Styled.teamName>MANCHESTER CITY FC</Styled.teamName><br/>
                                <Styled.matchInfo>
                                    2022년 11월 12일  16:00-17:00<br/>
                                    00 대운동장
                                </Styled.matchInfo>
                            </div>
                            <Styled.matchButton>매칭 신청</Styled.matchButton></Styled.matchList>
                    </Styled.matchListContainer>
                    <Styled.matchListContainer>
                        <Styled.matchDay>11.03</Styled.matchDay>
                        <Styled.matchList><img src={TeamProfileImg}/>
                            <div>
                                <Styled.teamName>MANCHESTER CITY FC</Styled.teamName><br/>
                                <Styled.matchInfo>
                                    2022년 11월 12일  16:00-17:00<br/>
                                    00 대운동장
                                </Styled.matchInfo>
                            </div>
                            <Styled.matchButton>매칭 신청</Styled.matchButton></Styled.matchList>
                    </Styled.matchListContainer>
                    <Styled.matchListContainer>
                        <Styled.matchDay>11.04</Styled.matchDay>
                        <Styled.matchList><img src={TeamProfileImg}/>
                            <div>
                                <Styled.teamName>MANCHESTER CITY FC</Styled.teamName><br/>
                                <Styled.matchInfo>
                                    2022년 11월 12일  16:00-17:00<br/>
                                    00 대운동장
                                </Styled.matchInfo>
                            </div>
                            <Styled.matchButton>매칭 신청</Styled.matchButton></Styled.matchList>
                    </Styled.matchListContainer>
                    </Styled.scrollContainer>
                </Styled.pendingMatchContainer>
                <Styled.buttonContainer>
                    <Styled.button><a href={`/team/home/${teamName}`}>내 팀 홈 가기</a></Styled.button>
                    <Styled.button><a href={"/team"}>팀 등록 / 가입하기</a></Styled.button>
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
    margin : 0 auto;
    `,
    Container : styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    
    width: 1150px;
    
    margin: 30px auto 0;
    `,
    pendingMatchTitle : styled.header`
    position: absolute;
    z-index:2;
    
    top : -28px;
    left: 25px;    

    font-weight: 900;
    font-size: 26px;
    line-height: 44px;
    `,
    pendingMatchContainer : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    width: 800px;
    height: 550px;
    
    
    background-color: rgba(122, 198, 161, 0.4);
    border-radius: 15px;
    
    padding-top: 20px;
    
    & > a{
    position: absolute;
    z-index:2;
    
    right: 45px;
    top: -22px;
    }
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
    matchListContainer : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;
    
    width: 730px;
    
    margin-top : 20px;
    padding-top: 30px;
    `,
    matchDay : styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    
    font-size: 22px;
    font-weight: 800;
    `,
    matchList : styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    
    width: 700px;
    height: 100px;
    
    border-radius: 15px;
    background-color: white;
    
    border: none;
    
    margin : 10px 0;
    padding: 0 30px;
    
    & > div {
    margin-left: 40px;
    }
    `,
    teamName : styled.h2`
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
    
    background: #D5441C;
    border-radius: 10px;
    border: none;

    font-weight: 800;
    font-size: 18px;
    
    color: white;
    
    cursor: pointer;
    `,
    buttonContainer : styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    width: 280px;
    height: 280px;
    
    background-color:  rgba(66, 65, 65, 0.4);
    border-radius: 15px;
    
    margin: auto 0;
    `,
    button: styled.button`
    width: 200px;
    height: 80px;
    
    border-radius: 10px;
    border: none;
    
    margin: 20px 0;
    
    cursor: pointer;
    
    font-weight: 800;
    font-size: 22px;
    letter-spacing : -1px;
    
    &:nth-child(1) {
    background: #F9D7A4;
    color: #494949;
    }
    &:nth-child(2) {
    background : #274C72;
    color: white;
    }
    `

}