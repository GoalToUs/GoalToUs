package com.GTTF.goal_to_the_future.domain.result.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ViewRecordResponseDto {
    private Integer goal;
    private Integer penaltyKick;
    private Integer yellowCard;
    private Integer redCard;
    private String heatmap;
    private String ballHeatmap;
    private Integer pass;
    private Long teamId;
    private Long matchId;

}
