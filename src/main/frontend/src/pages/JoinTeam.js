import styled from "styled-components";
import Header from "../components/Header";
import {searchIcon, TeamProfileImg} from "../assets";
import {useState} from "react";
import {useNavigate, Outlet} from "react-router-dom";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";

function JoinTeam() {
    const [searchWord, setSearchWord] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);

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
            <Outlet setIsModalOpen={setIsModalOpen}/>
            {isModalOpen && <ModalPortal>
                <Modal width={400} height={200}>
                    <Styled.message>가입에 성공하였습니다!</Styled.message>
                    <Styled.goLoginButton href={"/"}>홈으로 이동</Styled.goLoginButton>
                    <Styled.goLoginButton href={`/team/`}>팀 홈으로 이동</Styled.goLoginButton>
                </Modal>
            </ModalPortal>}
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
    message : styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 10px;
    `,
    goLoginButton: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 15px;
    
    width: 130px;
    height: 30px;
    border: 1px solid black;
    border-radius: 2px;
    
    background-color: white;
    
    font-size: 15px;
    
    cursor: pointer;
    `,
}