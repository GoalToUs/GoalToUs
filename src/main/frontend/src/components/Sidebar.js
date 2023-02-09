import styled from 'styled-components';
import {videoIcon, arrowIcon, homeIcon} from "../assets";

function SideBar() {
    return (
        <Styled.Container>
            <Styled.MenuTitle>Menu</Styled.MenuTitle>
            <Styled.MenuContainer>
                <Styled.MenuButton className={"clicked"}><img src={homeIcon} alt={"집 모양 아이콘"}/>팀 홈</Styled.MenuButton>
                <Styled.MenuButton><img src={arrowIcon} alt={"매칭 대기 현황 아이콘"}/>매칭 대기 현황</Styled.MenuButton>
                <Styled.MenuButton><img src={videoIcon} alt={"경기 영상 보기 아이콘"}/>경기 영상 보기</Styled.MenuButton>
            </Styled.MenuContainer>
        </Styled.Container>
    );
}

export default SideBar;

const Styled = {
    Container : styled.header`
    position:fixed;
    left: 0;
    
    display: flex;
    flex-direction: column;
    
    width: 230px;
    height: 100%;
    
    background: rgba(217, 217, 217, 0.5);
    border-right: 4px solid rgba(217, 217, 217, 0.7);
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
    MenuButton : styled.button`
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