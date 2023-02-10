import styled from "styled-components";
import Header from "../components/Header";


import SideBar from "../components/Sidebar";

function TeamHome() {
    return(
        <Styled.Root>
            <Header />
            <SideBar />
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
    buttonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin: 110px auto 0;
    
    width: 800px;
    `,
    button : styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding-top: 40px;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: -1px;
    
    width: 350px;
    height: 350px;
    border-radius:15px;
    
    background-color: rgba(122, 198, 161, 0.4);
    
    & > hr {
    width: 80%;
    border: 1px solid #535353;
    margin-top: 25px;
    }
    
    & > img {
    margin-top: 45px;
    
    width: 150px;
    height: 130px;
    }
    `
}