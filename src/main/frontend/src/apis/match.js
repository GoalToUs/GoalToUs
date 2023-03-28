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