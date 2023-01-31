import styled from "styled-components";
import Header from "../components/Header";

function Login() {
    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.loginSection>
                <h1>Welcome!</h1>
                <Styled.loginContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>아이디</Styled.inputTitle>
                        <Styled.loginInput/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호</Styled.inputTitle>
                        <Styled.loginInput/>
                    </Styled.InputContainer>
                    <span className={"forJoin"}>골투더퓨처가 처음이신가요? <Styled.joinButton href={"/join"}>회원가입</Styled.joinButton></span>
                </Styled.loginContainer>
            </Styled.loginSection>
        </Styled.Root>
    );
}

export default  Login;

const Styled = {
    Root : styled.div`
    width: 1500px;
    height: 100vh;
    margin : 0 auto;
    `,
    loginSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 10px auto 0;
    
    & > h1 {
    font-size: 25px;
    font-weight: bold;
    }
   `,
    loginContainer : styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 550px;
    height: 460px;
    
    margin-top: 30px;
    padding-top: 70px;
    
    background: rgba(122, 198, 161, 0.4);
    border-radius: 15px;
    
    .forJoin {
    font-size: 15px;
    font-weight: bold;
    
    margin-top: 70px;
    }
    `,
    InputContainer : styled.div`
    display: flex;
    flex-direction: column;
    
    width: 300px;
    height: 70px;
    margin-bottom: 35px;
    `,
    inputTitle : styled.span`
    font-size: 17px;
    font-weight: bold;
    
    margin-bottom: 10px;
    margin-left: 5px;
    `,
    loginInput : styled.input`
    width: 300px;
    height: 50px;
    
    border-radius: 15px;
    border: 2px solid  rgba(66, 65, 65, 0.6);;
    
    padding: 0 15px;
    
    &:focus{
    outline:none;
    }
    `,

    joinButton : styled.a`
    color: #1C66D5;
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
    
    &:hover {
    text-decoration: underline;
    }
    `
}