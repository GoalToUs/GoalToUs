package com.GTTF.goal_to_the_future.domain.team.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class CreateTeamResponseDto {
    private String teamName;

    private String photo;
    private String region;
    private String intro;
}
