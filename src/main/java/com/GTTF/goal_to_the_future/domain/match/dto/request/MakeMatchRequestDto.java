package com.GTTF.goal_to_the_future.domain.match.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
public class MakeMatchRequestDto {
    private LocalDateTime startTime;
    private String place;
    private String teamName;
    private String region;

}
