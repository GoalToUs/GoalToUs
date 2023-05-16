package com.GTTF.goal_to_the_future.domain.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginResponseDto {
    private Long id;
    private String nickname;
    private String password;
    private String email;
    private Integer captain;
    private String position;
    private String photo;
    private String birth;
}
