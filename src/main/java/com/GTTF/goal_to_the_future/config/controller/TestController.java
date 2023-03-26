package com.GTTF.goal_to_the_future.config.controller;

import com.GTTF.goal_to_the_future.config.security.SecurityUser;
import com.GTTF.goal_to_the_future.config.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api/v1/test")
@RestController
public class TestController {
    private final TestService testService;

    @GetMapping("/permit-all") //api 인증을 거치지 않고 모두에게 공개되는 api
    public Object getTest() throws Exception {
        return testService.getTest();
    }

    @GetMapping("/auth") //api 인증을 거치고 사용 가능
    public Object getTest2() throws Exception {
        return testService.getTest2();
    }
}
    //메소드 Parameter 영역에 @AuthenticationPrincipal 선언하고
    // SecurityUser 타입 변수 선언하면 시큐리티 내부 객체에서 Authentication에 저장된 Principal 객체 꺼내줌


