import { client } from './index';

export const postUserInfo = async (postBody) => {
    const { data } = await client.post(`/user/signup`, postBody);
    return data;
}