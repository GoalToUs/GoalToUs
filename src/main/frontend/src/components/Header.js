import styled from 'styled-components';
import {ProfileIcon} from "../assets";

function Header() {
    return (
        <Styled.Container>
            <Styled.Name>GoalToUs</Styled.Name>
           <img src={ProfileIcon}/>
        </Styled.Container>
    );
}

export default Header;

const Styled = {
    Container : styled.header`
    display: flex;
    align-items: center;
    justify-content : space-between;
    padding: 0 50px;
    
    height: 90px;
    
    & > img {
    width : 40px;
    height: 40px;
    cursor : pointer;
    `,
    Name : styled.h1`
    font-size: 30px;
    font-weight: bold;
    `
}