import styled from "styled-components";
import Header from "../components/Header";
import {usePostUserInfo} from "../hooks/user";
import { useState} from "react";
import {fetchUserDuplication} from "../apis/user";
import {useNavigate} from "react-router-dom";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";

function Join() {
    const [inputs, setInputs] = useState({
        userId: '',
        password: '',
        passwordCheck: '',
        userName: '',
        email: '',
        isCaptain: null,
        position: "FW"
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkPW, setCheckPW] = useState(false);
    const [checkDuplication, setCheckDuplication] = useState(false);

    const navigate = useNavigate();
    const {mutate : join} = usePostUserInfo();

    const handleOnClick = () => {
        if(!inputs.userId) {
            alert(`아이디를 입력해주세요.`);
            return;
        // }else if(!checkDuplication) {
        //     alert(`아이디 중복 확인을 해주세요.`);
        }else if(!inputs.password) {
            alert(`비밀번호를 입력해주세요`);
            return;
        }else if(!inputs.passwordCheck) {
            alert(`비밀번호 확인을 입력해주세요.`);
        }else if(!checkPW) {
            alert(`비밀번호가 일치하지 않습니다. 올바르게 입력해주세요.`);
            return;
        }else if(!inputs.userName) {
            alert(`이름을 입력해주세요`);
            return;
        }else if(!inputs.email) {
            alert(`이메일을 입력해주세요`);
            return;
        }else if(inputs.isCaptain === null) {
            alert(`주장 여부를 선택해주세요`);
            return;
        }

        const userData = {
            nickname : inputs.userId,
            password : inputs.password,
            name : inputs.userName,
            email : inputs.email,
            isCaptain : inputs.isCaptain ? 1 : 0,
            position : inputs.position
        }
        const {isSuccess} = join(userData);
        if(isSuccess) setIsModalOpen(true);
    }

    const handleOnChange = (e) => {
        const {value, id} = e.currentTarget;
        setCheckDuplication(false);
        setInputs({
            ...inputs,
            [id]: value
        });
    }

    const checkPassword = (e) => {
        const {value} = e.currentTarget;
        setInputs({
            ...inputs,
            passwordCheck: value
        })
        if(value !== inputs.password) {
            setCheckPW(false);
        } else {
            setCheckPW(true);
        }
    }


    const CheckDuplication = () => {
        const { data : checkDuplication } = fetchUserDuplication(inputs.userId);
        console.log(checkDuplication);
        // true면 중복, false면 통과
        setCheckDuplication(!checkDuplication);
    }

    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.joinSection>
                <h1>회원가입</h1>
                <Styled.joinContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>아이디</Styled.inputTitle>
                        <Styled.joinInput id={"userId"} value={inputs.userId} onChange={handleOnChange}/>
                        <Styled.certificateButton onClick={CheckDuplication}>중복 확인</Styled.certificateButton>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle >비밀번호</Styled.inputTitle>
                        <Styled.joinInput type={"password"} id={"password"} value={inputs.password} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호<br/> 확인</Styled.inputTitle>
                        <Styled.joinInput type={"password"} value={inputs.passwordCheck} onChange={checkPassword}/>
                    </Styled.InputContainer>
                    {inputs.passwordCheck && !checkPW && <div id={"errorMsg"}>비밀번호가 일치하지 않습니다.</div>}
                    <Styled.InputContainer>
                        <Styled.inputTitle>이름</Styled.inputTitle>
                        <Styled.joinInput value={inputs.userName} id={"userName"} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle type={"email"}>이메일</Styled.inputTitle>
                        <Styled.joinInput value={inputs.email} id={"email"} onChange={handleOnChange}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle >주장</Styled.inputTitle>
                        <label for={"yes"}>Yes</label>
                        <input className={"radioInput"} name="position" id={"yes"} value="yes" type={"radio"} onClick={() => setInputs({...inputs, isCaptain: true})}/>
                        <label for={"no"}>No</label>
                        <input className={"radioInput"}  name="position" id={"no"} value="no" type={"radio"} onClick={() => setInputs({...inputs, isCaptain: false})}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>포지션</Styled.inputTitle>
                        <select onChange={(e) => setInputs({
                            ...inputs,
                            position: e.currentTarget.value
                        })}>
                            <option value={"FW"}>공격수</option>
                            <option value={"DF"}>수비수</option>
                            <option value={"MF"}>미드필더</option>
                            <option value={"GK"}>골키퍼</option>
                        </select>
                    </Styled.InputContainer>
                    <Styled.submitButton type={"button"} value={"가입하기"} onClick={handleOnClick}/>
                </Styled.joinContainer>
            </Styled.joinSection>
            {isModalOpen && <ModalPortal>
                <Modal width={400} height={200}>
                    <Styled.message>회원가입을 성공하였습니다!</Styled.message>
                    <Styled.goLoginButton href={"/login"}>로그인으로 이동</Styled.goLoginButton>
                </Modal>
            </ModalPortal>}
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
    joinContainer : styled.div`
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
    
    & > #errorMsg {
    position: absolute;
    top: 360px;
    
    color: red;
    font-weight: bold;
    margin-left: 100px;
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
    `,
    message : styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 50px;
    `,
    goLoginButton: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 40px;
    
    width: 130px;
    height: 30px;
    border: 1px solid black;
    border-radius: 2px;
    
    background-color: white;
    
    font-size: 15px;
    
    cursor: pointer;
    `,
    certificateButton : styled.button`
    width: 100px;
    height: 33px;
    
    border-radius: 8px;
    border: none;
    
    background-color: #D5441C;
    color: white;
    
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
    `
}