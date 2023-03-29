package com.GTTF.goal_to_the_future.domain.match.dto.response;

import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class ViewMymatchListResponseDto { //내가 생성한 경기 목록 보기
    private String teamName;//경기에 참여한 팀(team2) - 아직 없으면 null
    private Long matchId;
    private String region; //경기 지역
    private String place;
    private LocalDateTime startTime; //경기 시간
    private MatchState matchState; //경기 상태
}
