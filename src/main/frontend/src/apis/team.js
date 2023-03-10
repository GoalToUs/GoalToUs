import { client } from './index';

//팀 등록하기
export const postTeamInfo = async (postBody) => {
    const { data } = await client.post(`/team`, postBody);
    return data;
}

//팀 검색하기
export const fetchSearchTeam = async (searchWord) => {
    const {
        data: { data },
    } = await client.get(`/team/list?search=${searchWord}`);
    return data;
}

//팀 가입하기
export const postJoinTeam = async (teamId) => {
    const { data } = await client.post(`/team/join/${teamId}`);
    return data;
}