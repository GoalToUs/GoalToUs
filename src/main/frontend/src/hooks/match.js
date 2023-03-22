import {fetchMatchAnalysis, postCreateMatch} from "../apis/match";
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