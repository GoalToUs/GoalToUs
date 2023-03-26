package com.GTTF.goal_to_the_future.domain.result.service;

import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.repository.MatchRepository;
import com.GTTF.goal_to_the_future.domain.result.dto.request.RecordResultRequestDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.RecordResultResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewAnalysisResponseDto;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import com.GTTF.goal_to_the_future.domain.result.repository.ResultRepository;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_MATCH;
import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_TEAM;

@Transactional
@RequiredArgsConstructor
@Service
public class ResultService {
    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;
    private final ResultRepository resultRepository;

    public RecordResultResponseDto recordResult(RecordResultRequestDto recordResultRequestDto,
                                                Long matchId, Long teamId){
        // 1. matchId로 match 찾기
        Match match = matchRepository.findById(matchId).orElseThrow(() -> new BusinessException(NOT_FOUND_MATCH));
        // 2. teamId로 team 찾기 - 경기 결과의 주인
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        //3. 이긴팀 찾아오기
        Team winTeam = teamRepository.findById(recordResultRequestDto.getWinnerTeamId()).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        // 3. new Result로 새로운 Result 엔티티 생성 - 1, 2, requestDto 정보를 사용해서
        // new Result - Match와 Team엔티티 넣어줄것임

        Result result = new Result(recordResultRequestDto.getGoal(), recordResultRequestDto.getPenaltyKick(),
                recordResultRequestDto.getYellowCard(), recordResultRequestDto.getRedCard(),
                recordResultRequestDto.getHighlight(), recordResultRequestDto.getWinnerTeamId(), recordResultRequestDto.getPass(),
                recordResultRequestDto.getEffectiveShooting());

        // 4. resultRepository.save(Result 엔티티) - 저장
        resultRepository.save(result);

        // 5. responseDto 생성 & 반환
        return new RecordResultResponseDto(result.getGoal(),result.getPenaltyKick(),result.getYellowCard(),
                result.getRedCard(),result.getHighlight(),result.getWinnerTeamId() ,result.getPass(),
                result.getEffectiveShooting());
    }

    public ViewAnalysisResponseDto viewAnalysis(Long matchId){
        //1.matchId로 경기 찾기
        Match match = matchRepository.findById(matchId).get();
        //2. 경기 결과 찾기
        Result result=resultRepository.findById(matchId).get();

        return new ViewAnalysisResponseDto(result.getGoal(),result.getPenaltyKick(),
                result.getYellowCard(),result.getRedCard(), result.getHighlight(), result.getWinnerTeamId(),
                result.getPass(), result.getEffectiveShooting());
    }
}