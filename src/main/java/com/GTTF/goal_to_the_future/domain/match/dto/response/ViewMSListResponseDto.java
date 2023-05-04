package com.GTTF.goal_to_the_future.domain.match.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class ViewMSListResponseDto {

    private Long matchId;
    private String teamName;//상대팀명
   // private String photo; //상대팀 프로필
    private String region;
    private String place;
    private LocalDateTime startTime;
    //지난 경기를 줄 때는 득점수 같이 보내줘야됨. 예정 경기는 null
}
