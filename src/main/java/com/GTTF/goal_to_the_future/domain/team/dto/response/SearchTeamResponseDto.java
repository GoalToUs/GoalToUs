package com.GTTF.goal_to_the_future.domain.team.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SearchTeamResponseDto {
    private String teamName;
    private String teamPhoto;
    //private String captainName;
    private String teamIntro;
}
