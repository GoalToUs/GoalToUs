package com.GTTF.goal_to_the_future.domain.match.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.JoinMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.MakeMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.JoinMatchResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.MakeMatchResponseDto;
import com.GTTF.goal_to_the_future.domain.match.service.MatchService;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import com.GTTF.goal_to_the_future.domain.user.dto.response.MypageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MatchController {

    private final MatchService matchService;

    @PostMapping("/match/create")
    public BaseResponseDto<MakeMatchResponseDto> createMatch(@RequestBody MakeMatchRequestDto makeMatchRequestDto){
        return new BaseResponseDto<>(matchService.createMatch(makeMatchRequestDto));
    }

    // 1. @pathVariable - ex. /match/{matchId}
    // 2. @RequestParam - ex. /match?search="스타벅스" (?key=value)
    // 3. @RequestBody - ex. requestDto를 생성해서 postman에서 body를 전송하는 경우

    @PostMapping("/match/join")
    public BaseResponseDto<JoinMatchResponseDto> joinMatch(@RequestBody JoinMatchRequestDto joinMatchRequestDto){
        return new BaseResponseDto<>(matchService.joinMatch(joinMatchRequestDto));
    }
}