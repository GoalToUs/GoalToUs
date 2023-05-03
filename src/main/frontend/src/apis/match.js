import {client} from "./index";

//경기 만들기
export const postCreateMatch = async (postBody) => {
    const { data } = await client.post(`/match/create`, postBody);
    return data;
}

//경기 분석 보기
export const fetchMatchAnalysis = async (matchId) => {
    const {
        data: { data },
    } = await client.get(`/result/${matchId}`);
    return data;
}

//매칭 대기 목록 보기
export const fetchPendingMatchList = async () => {
    const {
        data: { data },
    } = await client.get(`/match/waitlist`);
    return data;
}

//경기 참가하기
export const postJoinMatch = async (postBody) => {
    const { data } = await client.post(`/match/join`, postBody);
    return data;
}

//경기 기록하기
export const postWriteMatch = async (props) => {
    const { data } = await client.post(`/result/match/${props.matchId}?teamName=${props.teamName}`, props.postBody);
    return data;
}

// 팀 예정 경기 목록 조회
export const fetchPlanMatchList = async (teamName) => {
    const {
        data: { data },
    } = await client.get(`/team/${teamName}/match?matchState=expected`);
    return data;
}

// 팀 지난 경기 목록 조회
export const fetchFinishedMatchList = async (teamName) => {
    const {
        data: { data },
    } = await client.get(`/team/${teamName}/match?matchState=finish`);
    return data;
}

// 내가 생성한 경기 목록 조회
export const fetchCreatedMatchList = async (teamName) => {
    const {
        data: { data },
    } = await client.get(`/match/{teamName}/mylist`);
    return data;
}