package com.GTTF.goal_to_the_future.domain.match.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class ViewWaitLIstResponseDto {
    private String teamName;//경기를 생성한 팀(team1)
    private String place;
    private String region; //경기 지역
    private Long matchId;
    private LocalDateTime startTime; //경기 시간


}
