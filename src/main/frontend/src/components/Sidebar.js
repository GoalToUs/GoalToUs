import styled from 'styled-components';
import {videoIcon, arrowIcon, homeIcon} from "../assets";
import {useLocation} from "react-router-dom";
import {useState} from "react";

function SideBar() {
    const location = useLocation();

    return (
    <Styled.Root>
        <Styled.Logo href={"/"}>GoalToUs</Styled.Logo>
        <Styled.Container>
            <Styled.MenuTitle>Menu</Styled.MenuTitle>
            <Styled.MenuContainer>
                <Styled.MenuButton href={"/team/home"} className={location.pathname === "/team/home" && "clicked"}><img src={homeIcon} alt={"집 모양 아이콘"}/>팀 홈</Styled.MenuButton>
                <Styled.MenuButton href={"/team/match/pending"} className={location.pathname === "/team/match/pending" && "clicked"}><img src={arrowIcon} alt={"매칭 대기 현황 아이콘"}/>매칭 대기 현황</Styled.MenuButton>
                <Styled.MenuButton href={"/team/match/video"} className={location.pathname === "/team/match/video" && "clicked"}><img src={videoIcon} alt={"경기 영상 보기 아이콘"}/>경기 영상 보기</Styled.MenuButton>
            </Styled.MenuContainer>
        </Styled.Container>
    </Styled.Root>
    );
}

export default SideBar;

const Styled = {
    Root: styled.div`
    position:fixed;
    left: 0;
    
    display:flex;
    flex-direction:column;
    
    height: 100%;
    `,
    Container : styled.header`
    display: flex;
    flex-direction: column;
    
    width: 230px;
    height: 100%;
    
    background: rgba(217, 217, 217, 0.5);
    border-right: 4px solid rgba(217, 217, 217, 0.7);
    `,
    Logo : styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 30px;
    font-weight: bold;
    
    height: 90px;
    
    cursor : pointer
    `,
    MenuContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    
    margin-top: 20px;
    `,
    MenuTitle : styled.header`
    margin-top: 20px;
    margin-left: 10px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 0px;
    
    color: rgba(66, 65, 65, 0.8);
    `,
    MenuButton : styled.a`
    display: flex;
    align-items: center;
    
    width: 190px;
    height: 62px;
    background : none;
    border: none;
    
    border-radius: 15px;
    
    padding-left: 5px;
    margin-top: 20px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 0px;
    letter-spacing : -1px;
    
    cursor: pointer;
    
    &.clicked {
    background-color: #013C4D;
    color: white;
    }
    
    & > img {
    margin: 0 10px;
    }
    `
}