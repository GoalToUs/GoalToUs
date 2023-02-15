import { client } from './index';

export const postTeamInfo = async (postBody) => {
    const { data } = await client.post(`/team`, postBody);
    return data;
}