import styled from "styled-components";
import Header from "../components/Header";

function Join() {
    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.joinSection>
                <h1>회원가입</h1>
                <Styled.joinContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>아이디</Styled.inputTitle>
                        <Styled.joinInput/>
                        <Styled.certificateButton>중복 확인</Styled.certificateButton>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호</Styled.inputTitle>
                        <Styled.joinInput type={"password"}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>비밀번호<br/> 확인</Styled.inputTitle>
                        <Styled.joinInput type={"password"}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>이름</Styled.inputTitle>
                        <Styled.joinInput/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle type={"email"}>이메일</Styled.inputTitle>
                        <Styled.joinInput/>
                        <Styled.certificateButton>본인 확인</Styled.certificateButton>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>주장</Styled.inputTitle>
                        <label for={"yes"}>Yes</label>
                        <input className={"radioInput"} name="position" id={"yes"} value="yes" type={"radio"}/>
                        <label for={"no"}>No</label>
                        <input className={"radioInput"}  name="position" id={"no"} value="no" type={"radio"}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>포지션</Styled.inputTitle>
                        <select>
                            <option value={""}>공격수</option>
                            <option value={""}>수비수</option>
                            <option value={""}>미드필더</option>
                            <option value={""}>골키퍼</option>
                        </select>
                    </Styled.InputContainer>
                    <Styled.submitButton type={"submit"} value={"가입하기"}/>
                </Styled.joinContainer>
            </Styled.joinSection>
        </Styled.Root>
    );
}

export default Join;

const Styled = {
    Root: styled.div`
    width: 1500px;
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
    height: 570px;
    
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

    margin-bottom: 30px;
    
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