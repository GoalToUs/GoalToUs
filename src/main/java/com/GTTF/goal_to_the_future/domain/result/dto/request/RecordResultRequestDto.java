package com.GTTF.goal_to_the_future.domain.result.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RecordResultRequestDto {
    private Integer goal;
    private Integer penaltyKick;
    private Integer yellowCard;
    private Integer redCard;
    private String heatmap;
    private String ballHeatmap;
    private Long winnerTeamId;
    private Integer pass;
}
