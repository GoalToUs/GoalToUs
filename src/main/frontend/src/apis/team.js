import { client } from "./index";
import axios from "axios";

//팀 등록하기
export const postTeamInfo = async (postBody) => {
  const { data } = await axios.post(`/team`, postBody);
  return data;
};

//팀 검색하기 - 팀 목록 조회
export const fetchSearchTeam = async (searchWord) => {
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글인지 식별해주기 위한 정규표현식
  if (searchWord.match(check_kor)) {
    searchWord = encodeURI(searchWord); // 한글 인코딩
  }
  const { data } = await axios.get(`/team/list?search=${searchWord}`);
  return data;
};

//팀 가입하기
export const postJoinTeam = async (postData) => {
  const { data } = await axios.post(`/team/join/${postData.teamId}`, {
    userId: postData.userId,
  });
  return data;
};

//팀 정보 조회
export const fetchTeamInfo = async (teamId) => {
  const { data } = await axios.get(`/team/info/${teamId}`);
  return data;
};

export const fetchTeamAllInfo = async (teamId) => {
  const { data } = await axios.get(`/team/info/`);
  return data;
};
