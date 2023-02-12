package com.GTTF.goal_to_the_future.domain.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SignupRequestDto {
    private String nickname;
    private String password;
    private String name;
    private String email;
    private Integer isCaptain;
    private String position;

}
