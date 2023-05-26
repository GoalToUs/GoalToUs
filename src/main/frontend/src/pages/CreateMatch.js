import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import { usePostCreateMatch } from "../hooks/match";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function CreateMatch({ history }) {
  const navigate = useNavigate;
  const { mutate: createMatch } = usePostCreateMatch();
  const initState = {
    daytime: "",
    place: "",
    region: "",
  };
  const [inputs, setInputs] = useState(initState);

  const handleOnChange = (e) => {
    const { value, id } = e.currentTarget;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const matchData = {
    startTime: inputs.daytime,
    region: inputs.region,
    place: inputs.place,
    teamId: localStorage.getItem("userTeam"), // 로컬스토리지 이용
  };

  const goToHome = () => {
    navigate("/");
  };

  const handleOnClick = () => {
    if (!inputs.daytime) {
      alert(`경기 일시를 입력해주세요.`);
      return;
    } else if (!inputs.place) {
      alert(`지역을 입력해주세요`);
      return;
    } else if (!inputs.region) {
      alert(`경기 장소를 입력해주세요.`);
      return;
    }

    createMatch(matchData);
    Swal.fire("경기가 생성되었습니다!");
    setInputs(initState);
  };

  return (
    <Styled.Root>
      <Header noRightSection />
      <Styled.createMatchSection>
        <h1>경기 만들기</h1>
        <Styled.createMatchContainer>
          <Styled.InputContainer>
            <Styled.inputTitle>경기 일시</Styled.inputTitle>
            <Styled.createMatchInput
              type={"datetime-local"}
              id={"daytime"}
              onChange={handleOnChange}
              value={inputs.daytime}
            />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <Styled.inputTitle>지역</Styled.inputTitle>
            <Styled.createMatchInput
              placeholder={"ex) 서울"}
              id={"region"}
              onChange={handleOnChange}
              value={inputs.region}
            />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <Styled.inputTitle>경기 장소</Styled.inputTitle>
            <Styled.createMatchInput
              placeholder={"ex) ~~ 경기장"}
              id={"place"}
              className={"place"}
              onChange={handleOnChange}
              value={inputs.place}
            />
          </Styled.InputContainer>
          <Styled.submitButton
            type={"submit"}
            value={"등록하기"}
            onClick={handleOnClick}
          />
        </Styled.createMatchContainer>
      </Styled.createMatchSection>
    </Styled.Root>
  );
}

export default CreateMatch;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  createMatchSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 40px auto;

    & > h1 {
      font-size: 23px;
      font-weight: bold;
    }
  `,
  createMatchContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 360px;

    margin-top: 35px;
    padding: 60px 50px 0;

    background: rgba(122, 198, 161, 0.4);
    border-radius: 15px;
  `,
  InputContainer: styled.div`
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

      background-color: #f5f5f5;
      border: none;
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

      background: #70c8c4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      cursor: pointer;
    }

    & > textarea {
      width: 360px;
      height: 120px;

      border-radius: 12px;
      border: 2px solid rgba(66, 65, 65, 0.6);

      padding: 15px 15px;

      resize: none;
    }
  `,
  inputTitle: styled.span`
    font-size: 17px;
    font-weight: bold;

    width: 80px;

    margin-right: 20px;

    &.introduction {
      margin-top: 10px;
    }
  `,
  createMatchInput: styled.input`
    width: 200px;
    height: 40px;

    border-radius: 12px;
    border: 2px solid rgba(66, 65, 65, 0.6);

    padding: 0 15px;

    &.place {
      width: 300px;
    }

    &:focus {
      outline: none;
    }
  `,
  createMatchButton: styled.a`
    color: #1c66d5;
    font-size: 15px;
    font-weight: 800;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  submitButton: styled.input`
    width: 120px;
    height: 40px;

    margin: 10px auto 0;

    cursor: pointer;

    background: #013c4d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    color: white;
    font-size: 20px;
    font-weight: 800;
  `,
};
