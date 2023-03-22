import { client } from './index';

// 로그인
export const postLogin = async (postBody) => {
    const { data } = await client.post(`/user/login`, postBody);
    return data;
}

// 회원가입
export const postUserInfo = async (postBody) => {
    const { data } = await client.post(`/user/signup`, postBody);
    return data;
}


// 중복확인
export const fetchUserDuplication = async (nickname) => {
    const {
        data: { data },
    } = await client.get(`/user/${nickname}/exist`);
    return data;
}