import { useMutation, useQuery, useQueryClient } from 'react-query';
import {fetchUserInfo, postUserInfo} from "../apis/user";

export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postUserInfo, {
        onSuccess() {
            console.log("here");
        },
    });
}

export const useFetchUserInfo = () => {
    const { data } = useQuery(["userInfo"], fetchUserInfo);
    return data;
};