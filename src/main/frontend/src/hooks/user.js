import { useMutation, useQuery, useQueryClient } from 'react-query';
import {postUserInfo} from "../apis/user";

export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postUserInfo, {
        onSuccess() {
            console.log("here");
        },
    });
}