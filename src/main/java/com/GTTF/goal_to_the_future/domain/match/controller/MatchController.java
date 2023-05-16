package com.GTTF.goal_to_the_future.domain.match.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.DeleteMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.JoinMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.MakeMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.*;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMSListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.match.service.MatchService;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import com.GTTF.goal_to_the_future.domain.user.dto.response.MypageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("team/{teamName}/")//쿼리스트링으로 matchstate 넘겨줌(예정,종료 둘다 조회가능)
    public BaseResponseDto<List<ViewMSListResponseDto>> viewWaitMatch(@RequestParam MatchState matchState,
                                                                      @PathVariable String teamName){
        return new BaseResponseDto<>(matchService.viewMSList(matchState, teamName));
    }

    @GetMapping("/team/waitlist")
    public BaseResponseDto<ViewWaitLIstResponseDto> viewWating(){

        return new BaseResponseDto<ViewWaitLIstResponseDto>((ViewWaitLIstResponseDto) matchService.viewWating());
    }

    @GetMapping("match/{teamName}/mylist")
    public BaseResponseDto<ViewMymatchListResponseDto> viewMymatch(@PathVariable String teamName){
        return new BaseResponseDto<ViewMymatchListResponseDto>((ViewMymatchListResponseDto) matchService.viewMymatchList(teamName));
    }

    @DeleteMapping("match/delete/{matchId}")
    public BaseResponseDto<DeleteMatchResponseDto> deleteMatch(@RequestBody DeleteMatchRequestDto deleteMatchRequestDto){
        return new BaseResponseDto<>(matchService.delete(deleteMatchRequestDto));
    }
}
