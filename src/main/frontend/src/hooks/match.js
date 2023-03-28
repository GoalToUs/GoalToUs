import {fetchMatchAnalysis, fetchPendingMatchList, postCreateMatch, postJoinMatch} from "../apis/match";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {fetchTeamInfo} from "../apis/team";

// 경기 만들기
export const usePostCreateMatch = () => {
    return useMutation(postCreateMatch
        , {
        onSuccess() {
            console.log("create match success");
        },
    });
}

//경기 분석 보기
export const  useFetchMatchAnalysis = (teamId) => {
    const {data} = useQuery(["matchAnalysis"], () => fetchMatchAnalysis(teamId));
    return data;
}

//매칭 대기 목록 보기
export const  useFetchPendingMatchList = () => {
    const {data} = useQuery(["pendingMatchList"], fetchPendingMatchList);
    return data;
}

//경기 참가하기
export const usePostJoinMatch = () => {
    return useMutation(postJoinMatch
        , {
            onSuccess() {
                console.log("create join match");
            },
        });
}