package com.GTTF.goal_to_the_future.domain.team.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SearchTeamResponseDto { //팀 검색 결과로 보내주는 거
    private String teamName;
    private String teamPhoto;
    private String teamIntro;
}
