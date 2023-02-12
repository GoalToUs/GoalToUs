import styled from "styled-components";
import Header from "../components/Header";

function CreateTeam() {
    return (
        <Styled.Root>
            <Header noRightSection/>
            <Styled.createTeamSection>
                <h1>팀 등록하기</h1>
                <Styled.createTeamContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>팀명</Styled.inputTitle>
                        <Styled.createTeamInput/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <Styled.inputTitle>팀 소재지</Styled.inputTitle>
                        <Styled.createTeamInput className={"region"}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer>
                        <img />
                        <label for={"file"}>사진 첨부</label>
                        <Styled.createTeamInput type={"file"} id="file" className={"uploadImg"}/>
                    </Styled.InputContainer>
                    <Styled.InputContainer className={"introduction"}>
                        <Styled.inputTitle className={"introduction"}>팀 소개글</Styled.inputTitle>
                        <textarea/>
                    </Styled.InputContainer>
                    <Styled.submitButton type={"submit"} value={"등록하기"}/>
                </Styled.createTeamContainer>
            </Styled.createTeamSection>
        </Styled.Root>
    );
}

export default CreateTeam;

const Styled = {
    Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin : 0 auto;
     `,
    createTeamSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 30px auto;
    
    & > h1 {
    font-size: 23px;
    font-weight: bold;
    }
   `,
    createTeamContainer : styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    
    width: 750px;
    height: 480px;
    
    margin-top: 25px;
    padding: 60px 50px 0;
    
    background: rgba(122, 198, 161, 0.4);
    border-radius: 15px;
    `,
    InputContainer : styled.div`
    display: flex;
    align-items: center;    

    margin-bottom: 30px;
    
    &.introduction {
    align-items: flex-start;
    }
    
    & > img {
    position: absolute;
    right: 45px;
    top: 40px;
    
    width: 160px;
    height: 180px;
    
    background-color: #F5F5F5;
    border: none;
    }
    
    &:focus {
    outline : none;
    }
    
    & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 70px;
    top: 230px;
    
    width: 110px;
    height: 30px;
    
    color: white;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.1px;
    
    background: #70C8C4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    cursor: pointer;
    }
    
    & > textarea {
    width: 360px;
    height: 120px;
    
    border-radius: 12px;
    border: 2px solid  rgba(66, 65, 65, 0.6);;
    
    padding: 15px 15px;
    
    resize: none;
    }
    `,
    inputTitle : styled.span`
    font-size: 17px;
    font-weight: bold;
    
    width: 80px;
    
    margin-right: 20px;
    
    &.introduction {
    margin-top: 10px;
    }
    `,
    createTeamInput : styled.input`
    width: 300px;
    height: 40px;
    
    border-radius: 12px;
    border: 2px solid  rgba(66, 65, 65, 0.6);;
    
    padding: 0 15px;
    
    &:focus{
    outline:none;
    }
    &.region {
    width: 180px;
    }
    &.uploadImg {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    }
    `,
    createTeamButton : styled.a`
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
    
    margin : 10px auto 0;
    
    cursor : pointer;
    
    background: #013C4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    
    color: white;
    font-size: 20px;
    font-weight: 800;
    `
}