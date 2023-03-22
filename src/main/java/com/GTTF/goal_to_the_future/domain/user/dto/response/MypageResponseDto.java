package com.GTTF.goal_to_the_future.domain.user.dto.response;

import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;


@Getter
@AllArgsConstructor
public class MypageResponseDto {

    private String name;
    private String birth;
    //private String teamName;
    private String position;
    private String photo;

}
