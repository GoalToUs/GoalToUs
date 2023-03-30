package com.GTTF.goal_to_the_future.domain.user.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.user.dto.request.SignupRequestDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.SignupResponseDto;
import com.GTTF.goal_to_the_future.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;//bean 주입 방식 3가지 알아보기

    @PostMapping("/user/signup")
    public BaseResponseDto<SignupResponseDto> signup(@RequestBody SignupRequestDto requestDto){
        SignupResponseDto signupResponseDto = userService.signup(requestDto);
        return new BaseResponseDto<>(signupResponseDto);
    }
    @GetMapping("/login")
    public String loginMember(){
        return "/member/memberLoginForm"; //로그인폼 html 경로 수정하기
    }
    @GetMapping("/login/error") //로그인 에러 출력 ->api에 추가할까 말까
    public String loginError(Model model){
        model.addAttribute("loginErrorMsg","아이디 또는 비밀번호를 확인해주세요");
        return "/member/memberLoginform";
    }



  /*  @GetMapping("/user/{nickname}/exist")
    public ResponseEntity<Boolean> checkNicknameDuplicate(@PathVariable String nickname)
    { return ResponseEntity.ok(userService.checkNicknameDuplicate(nickname));}
*/
}
