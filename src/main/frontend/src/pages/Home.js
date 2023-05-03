import styled from 'styled-components';
import Header from "../components/Header";
import {createMatchIcon, TeamProfileImg} from "../assets";
import {useRecoilValue} from "recoil";
import {teamNameState} from "../states/team";
import {useState} from "react";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import {useFetchPendingMatchList, usePostJoinMatch} from "../hooks/match";
import {userState} from "../states/user";

function Home() {
    const teamName = useRecoilValue(teamNameState);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [joinMatchId, setJoinMatchId] = useState(0);

    //const userInfo = useRecoilValue(userState);

    // const pendingMatchList = useFetchPendingMatchList();
    // const userData = useFetchUserInfo(userInfo.userId);
    const userData = {
        "team": "ABC",
    };
    const {mutate: joinMatch} = usePostJoinMatch();
    const handleOnClick = (e) => {
        setIsJoinModalOpen(true);
        setJoinMatchId(e.currentTarget.id);
    }

    const handleJoinMatch = () => {
        joinMatch({
            "matchId" : joinMatchId
        });
        setIsJoinModalOpen(false);
        alert("경기가 성사되었습니다!");
    }

    const data = [
        {
            "teamId": 17,
            "teamName": "ABC",
            "matchState": -1,
            "region": "서울",
            "place": "서대문구 경기장",
            "startTime" : "2023-02-09 11:00",
        },
        {
            "teamId": 15,
            "teamName": "EFG",
            "matchState": -1,
            "region": "서울",
            "startTime" : "2023-02-09 11:00",
            "place": "강서구 경기장"
        },
        {
            "teamId": 67,
            "teamName": "OUC",
            "matchState": -1,
            "region": "서울",
            "startTime" : "2023-02-09 11:00",
            "place": "노원구 경기장"
        },
        {
            "teamId": 31,
            "teamName": "TYG",
            "matchState": -1,
            "region": "서울",
            "startTime" : "2023-02-09 11:00",
            "place": "마포구 경기장"
        }
    ];

    const matchList = [1, 2, 3].map((item) => {return (
        <Styled.matchListContainer>
        <Styled.matchDay>11.02</Styled.matchDay>
        <Styled.matchList >
            <img src={TeamProfileImg}/>
            <div>
                <Styled.teamName>MANCHESTER CITY FC</Styled.teamName><br/>
                <Styled.matchInfo>
                    2022년 11월 12일  16:00-17:00<br/>
                    00 대운동장
                </Styled.matchInfo>
            </div>
            <Styled.matchButton id={item} onClick = {handleOnClick}>매칭 신청</Styled.matchButton>
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
    </Styled.matchListContainer>)})
    return (
        <Styled.Root>
            <Header/>
            {isJoinModalOpen && <ModalPortal>
                <Modal width={600} height={360}>
                    <Styled.matchPortalTitle>[ 경기 정보 ]</Styled.matchPortalTitle>
                    <Styled.modalMatchInfo>
                        <Styled.matchInfo>
                            상대팀 : EFG <br/><br/>
                            경기 일시 : 2022년 11월 12일  16:00-17:00 <br/><br/>
                            경기 장소 : 지역 + 서대문구 경기장
                        </Styled.matchInfo>
                    </Styled.modalMatchInfo>
                    <Styled.matchPortalMessage>매칭을 신청하시겠습니까?</Styled.matchPortalMessage>
                    <Styled.portalButtonContainer>
                    <Styled.matchPortalButton onClick={handleJoinMatch}>예</Styled.matchPortalButton>
                    <Styled.matchPortalButton onClick={() => setIsJoinModalOpen(false)}>아니오</Styled.matchPortalButton>
                    </Styled.portalButtonContainer>
                </Modal>
            </ModalPortal>}
            <Styled.Container>
                <Styled.pendingMatchTitle>매칭 대기 경기</Styled.pendingMatchTitle>
                <Styled.pendingMatchContainer>
                    <a href="/match/create" target={"_self"}><img src={createMatchIcon}  width={"120px"}/></a>
                    <Styled.scrollContainer>
                        {matchList}
                    </Styled.scrollContainer>
                </Styled.pendingMatchContainer>
                <Styled.buttonContainer>
                    <a href={`/team/home/${userData.teamName}`}>내 팀 홈 가기</a>
                    <a href={"/team"}>팀 등록 / 가입하기</a>
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
        letter-spacing : -1px;
        
        &:nth-child(1) {
        background: #F9D7A4;
        color: #494949;
        }
        &:nth-child(2) {
        background : #274C72;
        color: white;
        }
    }
    `,

    //팝업
    matchPortalTitle : styled.h1`
      margin-top: 40px;
      margin-bottom: 20px;
      
      font-weight: 800;
      font-size: 22px;
    `,
    modalMatchInfo : styled.div`
        background-color: white;
        padding: 20px;
        
        border-radius: 4px;
    `,
    matchPortalMessage :  styled.div`
      margin-top: 17px;
      margin-bottom: 20px;
      
      font-weight: 800;
      font-size: 22px;
    `,
    matchPortalButton : styled.button`
    font-weight: 800;
    font-size: 15px;
   
    background-color: #E0E0E0;
    border: none;
    
    width: 80px;
    height: 30px;
    border-radius: 3px;
    
    margin : 0 10px;
    
    &:hover {
    background-color: #606060;
    color: white;
    cursor: pointer;
    }
    `,
    portalButtonContainer : styled.div`
    display: flex;
    
    `

}