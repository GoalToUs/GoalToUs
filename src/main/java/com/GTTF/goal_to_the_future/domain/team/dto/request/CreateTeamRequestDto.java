package com.GTTF.goal_to_the_future.domain.team.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor // request에는 @Getter, @NoArgsConstructor 필수
public class CreateTeamRequestDto {
    private String teamName;
    private String region;
    private String intro;
}
