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