import {useMutation, useQuery, useQueryClient} from 'react-query';
import {fetchSearchTeam, postTeamInfo, postJoinTeam, fetchTeamInfo} from "../apis/team";

// 팀 등록하기
export const usePostUserInfo = () => {
    const queryClient = useQueryClient();
    return useMutation(postTeamInfo, {
        onSuccess() {
            console.log("create team success");
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
            console.log("join team success");
        },
    });
}

// 팀 정보 조회하기
export const  useFetchTeamInfo = (teamId) => {
    const {data} = useQuery(["teamInfo"], () => fetchTeamInfo(teamId));
    return data;
}