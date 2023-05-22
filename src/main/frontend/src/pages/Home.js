import styled from 'styled-components';
import Header from "../components/Header";
import {createMatchIcon, TeamLogo1, TeamLogo2, TeamLogo3, TeamLogo4} from "../assets";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {teamNameState} from "../states/team";
import {useState} from "react";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import {useFetchPendingMatchList, usePostJoinMatch} from "../hooks/match";
import {loginState, userState} from "../states/user";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

function Home() {

    const teamName = useRecoilValue(teamNameState);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [joinMatchId, setJoinMatchId] = useState(0);
    const [color, setColor] = useState("");

    //const userInfo = useRecoilValue(userState);

    // const data = useFetchPendingMatchList();
    // const userData = useFetchUserInfo(userInfo.userId);
    const userData = {
        "team": "GoalToUs",
    };
    // const {mutate: joinMatch} = usePostJoinMatch();
    // joinMatch({
    //     "matchId" : 1,
    //     "teamId" : 2,
    // });
    const handleOnClick = (e) => {
        setIsJoinModalOpen(true);
        setJoinMatchId(e.currentTarget.id);
    }

    const handleJoinMatch = () => {
        // joinMatch({
        //     "matchId" : joinMatchId,
        //     "teamId" : 1,
        // });
        setIsJoinModalOpen(false);
        setColor("gray");
        Swal.fire('경기가 성사되었습니다!');
    }

    const orderSortByTime = (item) => {
        return item.sort((a, b) => {
            return Number(b.startTime) - Number(a.startTime);
        });
    };

    // const pendingMatchList = orderSortByTime(data);

    const data = [
        {
            "teamId": 17,
            "teamName": "Throwin",
            "matchState": -1,
            "region": "충청북도 세종시",
            "place": "금강 스포츠공원 풋살장",
            "startTime" : "2023.06.07 11:00",
            "date" : "2023.06.07",
            "img" : TeamLogo1
        },
        {
            "teamId": 15,
            "teamName": "Jupiter",
            "matchState": -1,
            "region": "충청북도 세종시",
            "startTime" : "2023.06.08 13:00",
            "place": "솔뜰근린공원 풋살장",
            "date" : "2023.06.08",
            "img" : TeamLogo2
        },
        {
            "teamId": 67,
            "teamName": "쎄비지",
            "matchState": -1,
            "region": "서울시",
            "startTime" : "2023.06.09 18:00",
            "place": "월드컵난지천공원 풋살장",
            "date" : "2023.06.09",
            "img" : TeamLogo3
        },
        {
            "teamId": 31,
            "teamName": "LEO",
            "matchState": -1,
            "region": "서울시",
            "startTime" : "2023.06.10 19:00",
            "place": "방배배수지체육공원",
            "date" : "2023.06.10",
            "img" : TeamLogo4
        }
    ];

    let matchList;
    // if(pendingMatchList){
        matchList = data.map((item) => {return (
            <Styled.matchListContainer>
                <Styled.matchDay>{item.date}</Styled.matchDay>
                <Styled.matchList>
                    <img src={item.img}  width={"56px"} height={56}/>
                    <div>
                        <Styled.teamName>{item.teamName}</Styled.teamName><br/>
                        <Styled.matchInfo>
                            {item.startTime}<br/>
                            {item.place}
                        </Styled.matchInfo>
                    </div>
                    <Styled.matchButton id={item.teamName} onClick = {handleOnClick} className={color}>{color === "gray" ? "매칭 완료" : "매칭 신청"}</Styled.matchButton>
                </Styled.matchList>
            </Styled.matchListContainer>)})
    // }

    return (
        <Styled.Root>
            <Header/>
            {isJoinModalOpen && <ModalPortal>
                <Modal width={600} height={360} >
                    <Styled.matchPortalTitle>[ 경기 정보 ]</Styled.matchPortalTitle>
                    <Styled.modalMatchInfo>
                        <Styled.matchInfo>
                            상대팀 : Throwin <br/><br/>
                            경기 일시 : 2022년 6월 7일  11:00-12:00 <br/><br/>
                            경기 장소 : 서울시 금강 스포츠공원 풋살장
                        </Styled.matchInfo>
                    </Styled.modalMatchInfo>
                    <Styled.matchPortalMessage>매칭을 신청하시겠습니까?</Styled.matchPortalMessage>
                    <Styled.portalButtonContainer>
                    <Styled.matchPortalButton onClick={handleJoinMatch}>예</Styled.matchPortalButton>
                    <Styled.matchPortalButton  onClick={() => setIsJoinModalOpen(false)}>아니오</Styled.matchPortalButton>
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
                    <Link to={`/team/home/Penta`}>내 팀 홈 가기</Link>
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