package com.GTTF.goal_to_the_future.domain.match.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JoinMatchResponseDto {
    private Long teamId;
    private Long matchId;
}
