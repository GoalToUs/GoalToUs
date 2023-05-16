package com.GTTF.goal_to_the_future.domain.user.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginRequestDto {
    private String userId; //닉네임을 아이디로 사용
    private String password;
}
