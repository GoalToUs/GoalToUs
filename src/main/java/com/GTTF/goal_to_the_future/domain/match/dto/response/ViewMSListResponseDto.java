package com.GTTF.goal_to_the_future.domain.match.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class ViewMSListResponseDto {

    private Long matchId;
    private String teamName;//상대팀명
    private String place;
    private LocalDateTime startTime;
}
