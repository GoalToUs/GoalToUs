package com.GTTF.goal_to_the_future.domain.team.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor

public class InfoResponseDto {
    private String teamPhoto;
    private String region;
    private String teamName;
    private List<String> players;

}
