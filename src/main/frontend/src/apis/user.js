import { client } from './index';
import {useRecoilValue} from "recoil";
import {userState} from "../states/user";

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

// 회원 정보 조회
export const fetchUserInfo = async (userId) => {
    const {
        data: { data },
    } = await client.get(`/user/info/${userId}`);
    return data;
}