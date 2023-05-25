package com.GTTF.goal_to_the_future.domain.match.dto.request;

import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import lombok.Getter;

@Getter
public class UpdateMatchRequestDto {
    private Long matchId;
    private MatchState matchState;

}
