import { useMutation, useQuery, useQueryClient } from 'react-query';
import {fetchUserInfo, postLogin, postUserInfo} from "../apis/user";
import {fetchFinishedMatchList} from "../apis/match";


export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postUserInfo, {
        onSuccess() {
            console.log("join success");
        },
    });
}

export const usePostLogin = () => {
    return useMutation(postLogin, {
        onSuccess() {
            console.log("login success");
        },
        onError(error) {
            alert(error.message);
        }
    })
}

// 회원 정보 조회
export const  useFetchUserInfo = (userId) => {
    const {data} = useQuery(["userInfo"],() => fetchUserInfo(userId));
    return data;
}
