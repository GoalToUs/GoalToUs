package com.GTTF.goal_to_the_future.domain.user.controller;
//로그인 회원가입

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.user.dto.request.SignupRequestDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.SignupResponseDto;
import com.GTTF.goal_to_the_future.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;//bean 주입 방식 3가지 알아보기

    @PostMapping("/user/signup")
    public BaseResponseDto<SignupResponseDto> signup(@RequestBody SignupRequestDto requestDto){
        SignupResponseDto signupResponseDto = userService.signup(requestDto);
        return new BaseResponseDto<>(signupResponseDto);
    }
}