package com.GTTF.goal_to_the_future.domain.match.dto.response;

import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UpdateMatchResponseDto {
    private Long matchId;
    private MatchState matchState;
}

