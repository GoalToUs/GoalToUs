package com.GTTF.goal_to_the_future.domain.team.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ViewTeamResponseDto {
    private Long teamId;
    private String teamName;
    private String region;
}
