package com.GTTF.goal_to_the_future.domain.match.dto.response;

import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class MatchListResponseDto {
    private Long matchId;
    private LocalDateTime startTime;
    private String place; //경기장
    private String region;//경기 지역
    private MatchState matchState;// 경기 상태
    private Long teamId; //경기에 참여한 팀 아이디
    private Long team2Id;

}
