package com.GTTF.goal_to_the_future.domain.result.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.request.RecordResultRequestDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.RecordResultResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewAnalysisResponseDto;
import com.GTTF.goal_to_the_future.domain.result.service.ResultService;
import com.GTTF.goal_to_the_future.domain.team.dto.response.InfoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class ResultController {

    private final ResultService resultService;

    @PostMapping("/result/match/{matchId}/{teamId}") //경기 결과 기록하기
    public BaseResponseDto<RecordResultResponseDto> recordResult(@PathVariable Long matchId,
                                                                 @PathVariable String teamName,
                                                                 @RequestBody RecordResultRequestDto recordResultRequestDto){
        return new BaseResponseDto<>(resultService.recordResult(recordResultRequestDto, matchId, teamName));
    }

    @GetMapping("/result/match/{matchId}") //경기 분석 보기
    public ViewAnalysisResponseDto viewAnalysis(@PathVariable Long matchId){
        return resultService.viewAnalysis(matchId);
    }



}