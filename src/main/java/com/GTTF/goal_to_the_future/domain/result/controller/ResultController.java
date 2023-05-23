package com.GTTF.goal_to_the_future.domain.result.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.request.RecordResultRequestDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.RecordResultResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewAnalysisResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewRecordResponseDto;
import com.GTTF.goal_to_the_future.domain.result.service.ResultService;
import com.GTTF.goal_to_the_future.domain.team.dto.response.InfoResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class ResultController {

    private final ResultService resultService;

    @PostMapping("/result/match/{matchId}") //경기 결과 기록하기 teamName?쿼리스트링
    public BaseResponseDto<RecordResultResponseDto> recordResult(@PathVariable Long matchId,
                                                                 @PathVariable String teamName,
                                                                 @RequestBody RecordResultRequestDto recordResultRequestDto){
        return new BaseResponseDto<>(resultService.recordResult(recordResultRequestDto, matchId, teamName));
    }

    @GetMapping("/result/match/{matchId}") //경기 분석 보기
    public ViewAnalysisResponseDto viewAnalysis(@PathVariable Long matchId){
        return resultService.viewAnalysis(matchId);
    }

    @GetMapping("result/{matchId}") //matchId로 경기 결과 보기
    public BaseResponseDto<ViewRecordResponseDto> viewRecord(@PathVariable Long matchId){
        return new BaseResponseDto<>(resultService.viewRecord(matchId));
    }



}