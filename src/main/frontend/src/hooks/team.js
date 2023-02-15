import { useMutation, useQuery, useQueryClient } from 'react-query';
import {postTeamInfo} from "../apis/team";

export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postTeamInfo, {
        onSuccess() {
            console.log("success");
        },
    });
}