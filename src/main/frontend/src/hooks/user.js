import { useMutation, useQuery, useQueryClient } from 'react-query';
import {fetchLogin, fetchUserInfo,  postUserInfo} from "../apis/user";


export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postUserInfo, {
        onSuccess(){
            return true;
        },
    });
}

export const useFetchLogin = (loginData) => {
    const {data} = useQuery(["login"],() => fetchLogin(loginData));
    return data;
}

// 회원 정보 조회
export const  useFetchUserInfo = (userId) => {
    const {data} = useQuery(["userInfo"],() => fetchUserInfo(userId));
    return data;
}
