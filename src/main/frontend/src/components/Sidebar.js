import styled from 'styled-components';
import {videoIcon, arrowIcon, homeIcon, ClickedArrowIcon, DefaultHomeIcon, ClickedVideoIcon} from "../assets";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

function SideBar() {
    const location = useLocation();
    const nowPath = location.pathname;
    const teamName = "Penta";

    return (
    <Styled.Root>
        <Styled.Logo href={"/"}>GoalToUs</Styled.Logo>
        <Styled.Container>
            <Styled.MenuTitle>Menu</Styled.MenuTitle>
            <Styled.MenuContainer>
                <Styled.MenuButton href={`/team/home/PENTA`} className={nowPath === `/team/home/PENTA` && "clicked"}><img src={nowPath === `/team/home/PENTA` ? homeIcon : DefaultHomeIcon} alt={"집 모양 아이콘"}/><Link to={`/team/home/PENTA`}>팀 홈</Link></Styled.MenuButton>
                <Styled.MenuButton href={"/team/match/pending"} className={nowPath === "/team/match/pending" && "clicked"}><img src={nowPath === "/team/match/pending" ? ClickedArrowIcon : arrowIcon} alt={"매칭 대기 현황 아이콘"}/><Link to={"/team/match/pending"}>매칭 대기 현황</Link></Styled.MenuButton>
                <Styled.MenuButton href={"/team/match/video"} className={nowPath === "/team/match/video" && "clicked"}><img src={nowPath === "/team/match/video" ? ClickedVideoIcon : videoIcon} alt={"경기 영상 보기 아이콘"}/><Link to={"/team/match/video"}>경기 영상 보기</Link></Styled.MenuButton>
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