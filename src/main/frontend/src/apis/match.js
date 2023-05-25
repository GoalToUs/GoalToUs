import { client } from "./index";
import axios from "axios";

//경기 만들기
export const postCreateMatch = async (postBody) => {
  const { data } = await axios.post(`/match/create`, postBody);
  return data;
};

// 경기 삭제하기
export const deleteMatch = async (matchId) => {
  const { data } = await axios.delete(`/match/delete/${matchId}`, {
    matchId: matchId,
  });
  return data;
};

//경기 분석 보기
export const fetchMatchAnalysis = async (matchId) => {
  const { data } = await axios.get(`/result/match/${matchId}`);
  return data;
};

//매칭 대기 목록 보기
export const fetchPendingMatchList = async () => {
  const { data } = await axios.get(`/match/waitlist`);
  return data;
};

//경기 참가하기
export const postJoinMatch = async (postBody) => {
  const { data } = await axios.post(`/match/join`, postBody);
  return data;
};

//경기 기록하기
export const postWriteMatch = async (props) => {
  const { data } = await axios.post(
    `/result/match/${props.matchId}?teamName=${props.teamName}`,
    props.postBody
  );
  return data;
};

// 팀 예정 경기 목록 조회
export const fetchPlanMatchList = async (teamName) => {
  const { data } = await axios.get(`/team/${teamName}/`);
  return data;
};

// 팀 지난 경기 목록 조회
export const fetchFinishedMatchList = async (teamName) => {
  const { data } = await axios.get(
    `/team/${teamName}/matchstate?matchState=EXPECTED`
  );
  return data;
};

// 내가 생성한 경기 목록 조회
export const fetchCreatedMatchList = async (teamName) => {
  const { data } = await axios.get(`/match/${teamName}/mylist`);
  return data;
};

// 전체 경기 목록 조회
export const fetchAllMatchList = async () => {
  const { data } = await axios.get(`/match/list`);
  return data;
};
