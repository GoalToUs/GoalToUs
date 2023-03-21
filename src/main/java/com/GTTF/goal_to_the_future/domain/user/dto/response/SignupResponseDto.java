package com.GTTF.goal_to_the_future.domain.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class SignupResponseDto {
    private Long userId;
    private String nickname;
    private String password;
    private String name;
    private String email;
    private Integer isCaptain;
    private String position;
    private String photo;
    private String birth;
}
