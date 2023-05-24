package com.GTTF.goal_to_the_future.domain.result.service;

import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.match.dto.response.MatchListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.repository.MatchRepository;
import com.GTTF.goal_to_the_future.domain.result.dto.request.RecordResultRequestDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.RecordResultResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewAnalysisResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewRecordResponseDto;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewjointeamResponseDto;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import com.GTTF.goal_to_the_future.domain.result.repository.ResultRepository;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.View;
import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.*;

@Transactional
@RequiredArgsConstructor
@Service
public class ResultService {
    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;
    private final ResultRepository resultRepository;

    //경기 결과 기록하기
    public RecordResultResponseDto recordResult(RecordResultRequestDto recordResultRequestDto,
                                                Long matchId, String teamName){
        // 1. matchId로 match 찾기
        Match match = matchRepository.findById(matchId).orElseThrow(() -> new BusinessException(NOT_FOUND_MATCH));
        // 2. teamName으로 team 찾기 - 경기 결과의 주인
        Team team=teamRepository.findByTeamName(teamName).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        //3. 이긴팀 찾아오기
        Team winTeam = teamRepository.findById(recordResultRequestDto.getWinnerTeamId()).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        // 3. new Result로 새로운 Result 엔티티 생성 - 1, 2, requestDto 정보를 사용해서
        // new Result - Match와 Team엔티티 넣어줄것임

        Result result = new Result(recordResultRequestDto.getGoal(), recordResultRequestDto.getPenaltyKick(),
                recordResultRequestDto.getYellowCard(), recordResultRequestDto.getRedCard(),
                recordResultRequestDto.getHeatmap(),recordResultRequestDto.getBallHeatmap(),
                recordResultRequestDto.getWinnerTeamId(), recordResultRequestDto.getPass());

        // 4. resultRepository.save(Result 엔티티) - 저장
        resultRepository.save(result);

        // 5. 해당 결과를 연관된 경기와 연결
        match.recordResult(result);

        // 6. responseDto 생성 & 반환
        return new RecordResultResponseDto(result.getGoal(),result.getPenaltyKick(),result.getYellowCard(),
                result.getRedCard(),result.getHeatmap(),result.getBallHeatmap(),
                result.getWinnerTeamId() ,result.getPass());
    }

    public ViewAnalysisResponseDto viewAnalysis(Long matchId){ //경기 분석 보기
        //1.matchId로 경기 찾기
        Match match = matchRepository.findById(matchId)
                .orElseThrow(()->new BusinessException(NOT_FOUND_MATCH));

        //2. 해당 matchId에 대한 경기 결과 match엔티티의 getter에서 이긴팀 아이디도 받아옴
        Result result = match.getResult();

        //3. 팀리파지토리에서 이긴 팀의 아이디로 이긴 팀명 찾기
        Team winTeam = teamRepository.findById(result.getWinnerTeamId())
                 .orElseThrow(()->new BusinessException(NOT_FOUND_WINTEAM));

        return new ViewAnalysisResponseDto(winTeam.getTeamName(), result.getGoal(), result.getPenaltyKick(),
                result.getYellowCard(), result.getRedCard(),result.getHeatmap(), result.getBallHeatmap(),
                result.getPass());
    }

    public List<ViewRecordResponseDto> viewRecord(Long matchId){//team1의 teamId보내줌
        Match match=matchRepository.findById(matchId).orElseThrow(()->new BusinessException(NOT_FOUND_MATCH));
        //해당 아이디의 경기를 찾음
        List<ViewRecordResponseDto> records=resultRepository.findALLRecord();
        return records;
    }


//    public List<ViewjointeamResponseDto> viewJoinResult(Long matchId,Long teamId){ //team2의 아이디를 보내줌
//        Match match=matchRepository.findById(matchId).orElseThrow(()->new BusinessException(NOT_FOUND_MATCH));
//        //해당 아이디의 경기를 찾음->matchId와 teamId 둘다 일치하는 결과를 가져옴 같은 매치 아이디를 갖는데 팀 두개
//        Result result=resultRepository.findById(matchId);
//        //일단 매치 아이디로 경기 객체 가져옴
//        List<Result> results=resultRepository.findAll();//리스트 형태로 경기 반환
//        ArrayList<ViewjointeamResponseDto> Rlist=new ArrayList<>(); //dto배열 리스트 생성
//
//        if(teamId==result.get().getTeam().getId()){
//            //받아온 teamId와 matchId로 찾는 경기의 팀 아이디가 같다면
//            Rlist.add(new ViewjointeamResponseDto(result.get().getGoal(), result.get().getPenaltyKick(),
//                    result.get().getYellowCard(),result.get().getRedCard(),result.get().getHeatmap(),
//                    result.get().getBallHeatmap(),result.get().getPass(),result.get().getWinnerTeamId()));
//        }else{
//
//        }
//        return new ViewjointeamResponseDto(result.get().getGoal(),result.get().getPenaltyKick(),
//                result.get().getYellowCard(),result.get().getRedCard(), result.get().getHeatmap(),
//                result.get().getBallHeatmap(),result.get().getPass(),match.getTeam1().getId());
//
//    }
}