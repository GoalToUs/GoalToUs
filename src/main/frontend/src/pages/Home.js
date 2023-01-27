import styled from 'styled-components';
import Header from "../components/Header";

function Home() {
    return (
        <Styled.Root>
            <Header/>
            <Styled.Container>
                <Styled.pendingMatchTitle>매칭 대기 경기</Styled.pendingMatchTitle>
                <Styled.pendingMatchContainer></Styled.pendingMatchContainer>
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
    width: 1000px;
    height: 640px;
    
    background-color: rgba(122, 198, 161, 0.4);
    border-radius: 15px 15px 0px 0px;
    `,
    createMatchButton : styled.button`
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
    
    margin: auto 25px;
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