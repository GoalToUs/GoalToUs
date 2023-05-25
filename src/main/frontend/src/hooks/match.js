import {
  deleteMatch,
  fetchAllMatchList,
  fetchAllResultList,
  fetchCreatedMatchList,
  fetchFinishedMatchList,
  fetchMatchAnalysis,
  fetchPendingMatchList,
  fetchPlanMatchList,
  postCreateMatch,
  postJoinMatch,
  postWriteMatch,
} from "../apis/match";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchTeamInfo } from "../apis/team";

// 경기 만들기
export const usePostCreateMatch = () => {
  return useMutation(postCreateMatch, {
    onSuccess() {
      console.log("create match success");
    },
  });
};

//경기 분석 보기
export const useFetchMatchAnalysis = (teamId) => {
  const { data } = useQuery(["matchAnalysis"], () =>
    fetchMatchAnalysis(teamId)
  );
  return data;
};

//매칭 대기 목록 보기
export const useFetchPendingMatchList = () => {
  const { data } = useQuery(["pendingMatchList"], fetchPendingMatchList);
  return data;
};

//경기 참가하기
export const usePostJoinMatch = () => {
  const queryClient = useQueryClient();
  return useMutation(postJoinMatch, {
    onSuccess() {
      queryClient.invalidateQueries(["matchAllList"]);
    },
  });
};

// 경기 기록하기
export const usePostWriteMatchAnalysis = () => {
  return useMutation(postWriteMatch, {
    onSuccess() {
      console.log("rewrite match analysis");
    },
  });
};

//팀 예정 경기 목록 조회
export const useFetchPlanMatchList = (teamName) => {
  const { data } = useQuery(["planMatchList"], () =>
    fetchPlanMatchList(teamName)
  );
  return data;
};

//팀 지난 경기 목록 조회
export const useFetchFinishedMatchList = (teamName) => {
  const { data } = useQuery(["finishedMatchList"], () =>
    fetchFinishedMatchList(teamName)
  );
  return data;
};

//내가 생성한 경기 목록 조회
export const useFetchCreatedMatchList = (teamName) => {
  const { data } = useQuery(["createdMatchList"], () =>
    fetchCreatedMatchList(teamName)
  );
  return data;
};

export const useDeleteMatch = () => {
  return useMutation(deleteMatch, {
    onSuccess() {
      console.log("delete match");
    },
  });
};

//경기 목록 전체 조회
export const useFetchAllMatchList = () => {
  const { data } = useQuery(["matchAllList"], fetchAllMatchList);
  return data;
};

//결과 목록 전체 조회
export const useFetchAllResultList = () => {
  const { data } = useQuery(["resultAllList"], fetchAllResultList);
  return data;
};
