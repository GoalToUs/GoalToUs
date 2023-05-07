import { client } from './index';
import {useRecoilValue} from "recoil";
import {userState} from "../states/user";
import axios from "axios";

// 로그인
export const fetchLogin = async (postBody) => {
    const { data } = await axios.post(`login`, postBody);
    return data;
}

// 회원가입
export const postUserInfo = async (postBody) => {
    const { data } = await axios.post(`/user/signup`, postBody);
    return data;
}


// 중복확인
export const fetchUserDuplication = async (nickname) => {
    const {
        data: { data },
    } = await axios.get(`/user/${nickname}/exist`);
    return data;
}

// 회원 정보 조회
export const fetchUserInfo = async (userId) => {
    const {
        data: { data },
    } = await axios.get(`/user/info/${userId}`);
    return data;
}