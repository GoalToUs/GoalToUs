import styled from 'styled-components';
import Header from "../components/Header";
import {TeamProfileImg} from "../assets";

function Home() {
    return (
        <Styled.Root>
            <Header/>
            <Styled.Container>
                <Styled.pendingMatchTitle>매칭 대기 경기</Styled.pendingMatchTitle>
                <Styled.pendingMatchContainer>
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
                </Styled.pendingMatchContainer>
                <Styled.buttonContainer>
                    <Styled.button>내 팀 홈 가기</Styled.button>
                    <Styled.button>팀 등록/가입 하기</Styled.button><
                    /Styled.buttonContainer>
            </Styled.Container>
        </Styled.Root>
    );
}

export default Home;

const Styled = {
    Root: styled.div`
    width: 1500px;
    height: 100vh;
    margin : 0 auto;
    border: 1px solid black;
    `,
    Container : styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    
    margin: 30px 70px 0;
    `,
    pendingMatchTitle : styled.header`
    position: absolute;
    z-index:2;
    
    top : -28px;
    left: 25px;    
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 44px;
    `,
    pendingMatchContainer : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 960px;
    height: 640px;
    
    background-color: rgba(122, 198, 161, 0.4);
    border-radius: 15px 15px 0px 0px;
    
    padding-top: 20px;
    `,
    createMatchButton : styled.button`
    `,
    matchListContainer : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;
    
    width: 870px;
    
    margin-top : 20px;
    padding-top: 30px;
    `,
    matchDay : styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 800;
    font-size: 24px;
    `,
    matchList : styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    
    width: 820px;
    height: 100px;
    
    border-radius: 15px;
    background-color: white;
    
    border: none;
    
    margin : 10px 0;
    padding: 0 50px;
    
    & > div {
    margin-left: 40px;
    }
    `,
    teamName : styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 23px;
    `,
    matchInfo: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    `,
    matchButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    right: 50px;
    
    width: 113px;
    height: 46px;
    
    background: #D5441C;
    border-radius: 10px;
    border: none;
    
    font-family: 'Inter';
    font-weight: 800;
    font-size: 20px;
    
    color: white;
    
    cursor: pointer;
    `,
    buttonContainer : styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    width: 300px;
    height: 300px;
    
    background-color:  rgba(66, 65, 65, 0.4);
    border-radius: 15px;
    
    margin: auto 48px;
    `,
    button: styled.button`
    width: 260px;
    height: 86px;
    
    border-radius: 10px;
    border: none;
    
    margin: 20px 0;
    
    cursor: pointer;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    
    &:nth-child(1) {
    background: #F9D7A4;
    }
    &:nth-child(2) {
    background : #274C72;
    color: white;
    }
    `

}