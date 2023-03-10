import {useMutation, useQuery, useQueryClient} from 'react-query';
import {fetchSearchTeam, postTeamInfo, postJoinTeam} from "../apis/team";

// 팀 등록하기
export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postTeamInfo, {
        onSuccess() {
            console.log("success");
        },
    });
}

// 팀 검색하기
export const  useFetchSearchTeam = (searchWord) => {
    const {data} = useQuery(["searchWord"], () => fetchSearchTeam(searchWord));
    return data;
}

//팀 가입하기
export const usePostJoinTeam = () => {
    const queryClient = useQueryClient();
    return useMutation(postJoinTeam, {
        onSuccess() {
            console.log("success");
        },
    });
}