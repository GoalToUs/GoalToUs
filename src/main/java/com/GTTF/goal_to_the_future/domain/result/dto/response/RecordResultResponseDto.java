package com.GTTF.goal_to_the_future.domain.result.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RecordResultResponseDto {
    private Integer goal;
    private Integer penaltyKick;
    private Integer yellowCard;
    private Integer redCard;
    private String highlight;
    private Long winnerTeamId;
    private Integer pass;
    private Integer effectiveShooting;
}
