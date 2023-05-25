package com.GTTF.goal_to_the_future.domain.match.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.DeleteMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.JoinMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.MakeMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.*;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMSListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.match.service.MatchService;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import com.GTTF.goal_to_the_future.domain.user.dto.response.MypageResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Negative;
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

//    @GetMapping("team/{teamName}/matchstate")//쿼리스트링으로 matchstate 넘겨줌(예정,종료 둘다 조회가능)
//    public BaseResponseDto<List<ViewMSListResponseDto>> viewWaitMatch(@RequestParam MatchState matchState,
//                                                                      @PathVariable String teamName){
//        return new BaseResponseDto<>(matchService.viewMSList(matchState, teamName));
//    }

//    @GetMapping("match/list")
//    public

    @GetMapping("team/{teamName}")//팀명으로 경기 결과 넘겨주기
    public BaseResponseDto<List<ViewMSListResponseDto>> viewWaitMatch(@RequestParam MatchState matchState,
                                                                      @PathVariable String teamName){
        return new BaseResponseDto<>(matchService.viewMSList(matchState,teamName));
    }

    @GetMapping("team/{teamId}") //팀 아이디로 경기 결과 넘겨주기
    public BaseResponseDto<List<ViewAllResponseDto>> viewAll(@PathVariable Long teamId){
        return new BaseResponseDto<>(matchService.viewAll(teamId));
    }

    @GetMapping("team/waitlist") //매칭 대기 목록 조회
    public BaseResponseDto<ViewWaitLIstResponseDto> viewWating(){

        return new BaseResponseDto<>((ViewWaitLIstResponseDto) matchService.viewWating());
    }

    @GetMapping("match/list") //모든 경기 목록 get
    public List<MatchListResponseDto> viewMatchList(){
       return matchService.viewMatch();
    }


    @GetMapping("match/{teamId}/mylist") //내가 생성한 경기 목록 조회
    public BaseResponseDto<ViewMymatchListResponseDto> viewMymatch(@PathVariable Long teamId){
        return new BaseResponseDto<>((ViewMymatchListResponseDto) matchService.viewMymatchList(teamId));
    }

    @DeleteMapping("match/delete/{matchId}") //경기 삭제
    public BaseResponseDto<DeleteMatchResponseDto> deleteMatch(@RequestBody DeleteMatchRequestDto deleteMatchRequestDto){
        return new BaseResponseDto<>(matchService.delete(deleteMatchRequestDto));
    }
}
