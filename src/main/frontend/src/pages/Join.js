import styled from "styled-components";
import Header from "../components/Header";
import {usePostUserInfo} from "../hooks/user";
import {useState} from "react";

function Join() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isCaptain, setIsCaptain] = useState(null);
    const [position, setPosition] = useState("FW");

    const {mutate : join} = usePostUserInfo();
    const handleOnClick = () => {
        if(!userId) {
            alert(`아이디를 입력해주세요.`);
            return;
        }else if(!password) {
            alert(`비밀번호를 입력해주세요`);
            return;
        }else if(!userName) {
            alert(`이름을 입력해주세요`);
            return;
        }else if(!email) {
            alert(`이메일을 입력해주세요`);
            return;
        }else if(!isCaptain) {
            alert(`주장 여부를 선택해주세요`);
            return;
        }

        const userData = {
            "nickname" : userId,
            "password" : password,
            "name" : userName,
            "email" : email,
            "isCaptain" : isCaptain ? 1 : 0,
            "position" : position
        }
        join(userData);
    }

    const handleOnChange = (e) => {
        const value = e.currentTarget.value;
        switch(e.currentTarget.id) {
            case "userId":
                setUserId(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "userName":
                setUserName(value);
                break;
            case "email":
                setEmail(value);
                break;
        }
    }

    const checkPassword = (e) => {
        if(e.currentTarget.value !== password) {
            console.log("비밀번호와 일치하지 않습니다.");
        } else {
            console.log("good");
        }
    }

    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.joinSection>
                <h1>회원가입</h1>
                <Styled.joinContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>아이디</Styled.inputTitle>
                        <Styled.joinInput id={"userId"} value={userId} onChange={handleOnChange}/>
                        <Styled.certificateButton>중복 확인</Styled.certificateButton>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle >비밀번호</Styled.inputTitle>
                        <Styled.joinInput type={"password"} id={"password"} value={password} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호<br/> 확인</Styled.inputTitle>
                        <Styled.joinInput type={"password"} onChange={checkPassword}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>이름</Styled.inputTitle>
                        <Styled.joinInput value={userName} id={"userName"} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle type={"email"}>이메일</Styled.inputTitle>
                        <Styled.joinInput value={email} id={"email"} onChange={handleOnChange}/>
                        <Styled.certificateButton>본인 확인</Styled.certificateButton>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle >주장</Styled.inputTitle>
                        <label for={"yes"}>Yes</label>
                        <input className={"radioInput"} name="position" id={"yes"} value="yes" type={"radio"} onClick={() => setIsCaptain(true)}/>
                        <label for={"no"}>No</label>
                        <input className={"radioInput"}  name="position" id={"no"} value="no" type={"radio"} onClick={() => setIsCaptain(false)}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>포지션</Styled.inputTitle>
                        <select onChange={(e) => setPosition(e.target.value)}>
                            <option value={"FW"}>공격수</option>
                            <option value={"DF"}>수비수</option>
                            <option value={"MF"}>미드필더</option>
                            <option value={"GK"}>골키퍼</option>
                        </select>
                    </Styled.InputContainer>
                    <Styled.submitButton type={"button"} value={"가입하기"} onClick={handleOnClick}/>
                </Styled.joinContainer>
            </Styled.joinSection>
        </Styled.Root>
    );
}

export default Join;

const Styled = {
    Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
     `,
    joinSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 5px auto;
    
    & > h1 {
    font-size: 23px;
    font-weight: bold;
    }
   `,
    joinContainer : styled.form`
    display: flex;
    flex-direction: column;
    
    width: 570px;
    height: 530px;
    
    margin-top: 25px;
    padding: 40px 50px 0;
    
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
    align-items: center;    

    margin-bottom: 25px;
    
    & > label {
    font-size : 15px;
    }
    
    & > .radioInput {
    margin-left: 10px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    
    border: none;
    
    cursor: pointer;
    }
    
    & > select {
    width: 90px;
    height: 30px;
    
    padding-left: 5px;
    
    &:focus {
    outline : none;
    }
    }
    `,
    inputTitle : styled.span`
    font-size: 17px;
    font-weight: 800;
    
    width: 70px;
    
    margin-right: 20px;
    `,
    joinInput : styled.input`
    width: 270px;
    height: 40px;
    
    border-radius: 12px;
    border: 2px solid  rgba(66, 65, 65, 0.6);;
    
    padding: 0 15px;
    
    margin-right: 20px;
    
    &:focus{
    outline:none;
    }
    `,
    certificateButton : styled.button`
    width: 90px;
    height: 30px;
    
    cursor : pointer;
    
    background: #013C4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    
    color: white;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -1px;
    `,
    joinButton : styled.a`
    color: #1C66D5;
    font-size: 15px;
    font-weight: 800;
    
    cursor: pointer;
    
    &:hover {
    text-decoration: underline;
    }
    `,
    submitButton : styled.input`
    width: 120px;
    height: 40px;
    
    margin : 0 auto;
    
    cursor : pointer;
    
    background: #013C4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    
    color: white;
    font-size: 20px;
    font-weight: bold;
    `
}