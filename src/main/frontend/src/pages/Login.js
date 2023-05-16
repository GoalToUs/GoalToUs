import styled from "styled-components";
import Header from "../components/Header";
import {useState} from "react";
import {useFetchLogin, usePostLogin} from "../hooks/user";
import {useNavigate} from "react-router-dom";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import {useSetRecoilState} from "recoil";
import {userState} from "../states/user";
import axios from "axios";

function Login() {
    const setUserData = useSetRecoilState(userState);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleOnClick = () => {
        if(!userId) {
            alert(`아이디를 입력해주세요.`);
            return;
        }else if(!password) {
            alert(`비밀번호를 입력해주세요.`);
            return;
        }
        console.log(userId);
        console.log(password);

        const login = async () => {
            let {data} = await axios.get(`/login`, {userId, password});
            if(data) {
                console.log(data);
                // setUserData({
                    // "userId": userId,
                    // "userName": successData.userName,
                // })
                // navigate(`/`);
            }
        }
        login();
    }


    const handleOnChange = (e) => {
        const {value, id} = e.currentTarget;
        if(id === "userId") {
            setUserId(value);
        } else if(id === "password") {
            setPassword(value);
        }
    }

    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.loginSection>
                <h1>Welcome!</h1>
                <Styled.loginContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>아이디</Styled.inputTitle>
                        <Styled.loginInput id={"userId"} value={userId} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호</Styled.inputTitle>
                        <Styled.loginInput id={"password"} type={"password"} value={password} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.loginButton type={"submit"} value={"로그인"} onClick={handleOnClick}/>
                    <span className={"forJoin"}>골투더퓨처가 처음이신가요? <Styled.joinButton href={"/join"}>회원가입</Styled.joinButton></span>
                </Styled.loginContainer>
            </Styled.loginSection>
        </Styled.Root>
    );
}

export default  Login;

const Styled = {
    Root : styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
    `,
    loginSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 35px auto 0;
    
    & > h1 {
    font-size: 25px;
    font-weight: bold;
    }
   `,
    loginContainer : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 500px;
    height: 460px;
    
    margin-top: 30px;
    padding-top: 60px;
    
    background: rgba(122, 198, 161, 0.4);
    border-radius: 15px;
    
    .forJoin {
    font-size: 15px;
    font-weight: bold;
    
    margin-top: 55px;
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
    loginButton : styled.input`
    width: 100px;
    height: 40px;
    
    cursor : pointer;
    
    background: #013C4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    
    color: white;
    font-size: 15px;
    font-weight: bold;
    
    margin-top: 15px;
    `,
    joinButton : styled.a`
    color: #1C66D5;
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
    
    &:hover {
    text-decoration: underline;
    }
    `,
}