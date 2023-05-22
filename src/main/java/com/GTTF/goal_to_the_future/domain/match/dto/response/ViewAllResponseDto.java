package com.GTTF.goal_to_the_future.domain.match.dto.response;

import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class ViewAllResponseDto {
    private Long matchId;
    private String region; //경기 지역
    private String place;
    private LocalDateTime startTime; //경기 시간
    private MatchState matchState; //경기 상태

}
