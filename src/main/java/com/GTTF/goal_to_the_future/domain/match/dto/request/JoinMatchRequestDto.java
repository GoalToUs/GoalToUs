package com.GTTF.goal_to_the_future.domain.match.dto.request;

import lombok.Getter;

@Getter
public class JoinMatchRequestDto {
    private Long teamId; //경기 참가를 신청하는 팀의 팀아이디
    private Long matchId; //어떤 경기에 참가하는 지
}
