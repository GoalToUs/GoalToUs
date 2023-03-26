package com.GTTF.goal_to_the_future.domain.match.service;

import com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage;
import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.match.dto.request.JoinMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.MakeMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.JoinMatchResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.MakeMatchResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMSListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMSListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.match.repository.MatchRepository;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.*;

@RequiredArgsConstructor
@Service
@Transactional
public class MatchService {

    private final TeamRepository teamRepository; //클래스명 필드명
    private final MatchRepository matchRepository;

    public MakeMatchResponseDto createMatch(MakeMatchRequestDto makeMatchRequestDto){
        // request - teamName으로 teamRepository에서 Team 객체를 찾아와야함
        Team team = teamRepository.findByTeamName(makeMatchRequestDto.getTeamName()).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        
        // Match 엔티티 생성
        Match newMatch = new Match(team, makeMatchRequestDto.getStartTime(), makeMatchRequestDto.getPlace(), MatchState.EXPECTED);
    
        matchRepository.save(newMatch);

        return new MakeMatchResponseDto(newMatch.getStartTime(), newMatch.getPlace(),newMatch.getTeam1().getTeamName());
    }

    public JoinMatchResponseDto joinMatch(JoinMatchRequestDto joinMatchRequestDto){
        //1.matchId로 경기 찾기
        Match match = matchRepository.findById(joinMatchRequestDto.getMatchId()).get();

        //2. 팀 아이디로 팀 찾기
        Team team2 = teamRepository.findById(joinMatchRequestDto.getTeamId()).get();

        // 추가) 경기의 팀 2개가 같으면 에러 처리
        if(match.getTeam1().getId() == team2.getId()){
            throw new BusinessException(BAD_MATCH_JOIN);
        }

        //3. 받아온 match의 team2자리에 팀을 넣어줌
        match.joinMatch(team2);

        return new JoinMatchResponseDto(team2.getId(), match.getMatchId());
    }
    public ViewMSListResponseDto viewMSList(MatchState matchState, Long teamId){ //나의 팀 아이디값을 받아옴
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new BusinessException(BAD_MATCH_JOIN));
        //받아온 id값으로 팀 객체 생성, optional로 넘어오기 때문에 오류처리

        Match match = matchRepository.findByTeam1OrTeam2AnAndMatchState(team, team, matchState).orElseThrow(() -> new BusinessException(BAD_MATCH_JOIN));

        String oppoteam;
        if(match.getTeam1().getTeamName() == team.getTeamName()){//team1이 경기를 생성한 팀
            oppoteam = match.getTeam2().getTeamName(); //받아온 팀이 team1이라면 상대팀은 team2
        }else{
            oppoteam = match.getTeam1().getTeamName();
        }
        return new ViewMSListResponseDto(oppoteam, match.getPlace(), match.getStartTime());
    }
}
