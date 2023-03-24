import styled from "styled-components";
import Header from "../components/Header";
import {searchIcon, TeamProfileImg} from "../assets";
import {useState} from "react";
import {useNavigate, Outlet} from "react-router-dom";

function JoinTeam() {
    const [searchWord, setSearchWord] = useState("");
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/team/join/${searchWord}`);
    }

    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.joinTeamSection>
                <h1>팀 가입하기</h1>
                <Styled.SearchContainer>
                    <Styled.SearchButton onClick={handleOnClick} ><img src={searchIcon}/></Styled.SearchButton>
                    <Styled.SearchInput value={searchWord} onChange={(e)=>setSearchWord(e.currentTarget.value)}/>
                </Styled.SearchContainer>
            </Styled.joinTeamSection>
            <Outlet />
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
}