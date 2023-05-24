package com.GTTF.goal_to_the_future.domain.match.service;

import com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage;
import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.match.dto.request.DeleteMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.JoinMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.request.MakeMatchRequestDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.*;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMSListResponseDto;
import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.match.repository.MatchRepository;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.*;

@RequiredArgsConstructor
@Service
@Transactional
public class MatchService {

    private final TeamRepository teamRepository; //클래스명 필드명
    private final MatchRepository matchRepository;

    public MakeMatchResponseDto createMatch(MakeMatchRequestDto makeMatchRequestDto){ //경기 생성
        // request - teamName으로 teamRepository에서 Team 객체를 찾아와야함
        Team team = teamRepository.findByTeamName(makeMatchRequestDto.getTeamName()).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        
        // Match 엔티티 생성
        Match newMatch = new Match(team , makeMatchRequestDto.getStartTime(), makeMatchRequestDto.getPlace(),
                makeMatchRequestDto.getRegion(),MatchState.WAITING);
        //경기 새로 생성하고 매칭이 성사되지 않은 상태 WAITING
    
        matchRepository.save(newMatch);

        return new MakeMatchResponseDto(newMatch.getStartTime(), newMatch.getPlace(),
                newMatch.getTeam1().getTeamName(), newMatch.getRegion());
    }

    public JoinMatchResponseDto joinMatch(JoinMatchRequestDto joinMatchRequestDto){ //경기 참여하기
        //1.matchId로 경기 찾기
        Match match = matchRepository.findById(joinMatchRequestDto.getMatchId()).orElseThrow(() -> new BusinessException(NOT_FOUND_MATCH));

        //2. 팀 아이디로 팀 찾기
        Team team2 = teamRepository.findById(joinMatchRequestDto.getTeamId()).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));

        // 추가) 경기의 팀 2개가 같으면 에러 처리
        if(match.getTeam1().getId() == team2.getId()){
            throw new BusinessException(BAD_MATCH_JOIN);
        }

        //3. 받아온 match의 team2자리에 팀을 넣어줌
        match.joinMatch(team2);

        return new JoinMatchResponseDto(team2.getId(), match.getMatchId());
    }

    public List<ViewAllResponseDto> viewAll(Long teamId){
        Team team=teamRepository.findById(teamId).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));

        List<Match> allList=matchRepository.findByTeam1OrTeam2(team,team);

        ArrayList<ViewAllResponseDto> result=new ArrayList<>();

        for (Match match : allList) { //리스트를 돌면서 반복
            String oppoteam; //경기 마다 상대팀 찾기
            if(match.getTeam1().getTeamName() == team.getTeamName()){//team1이 경기를 생성한 팀
                oppoteam = match.getTeam2().getTeamName(); //받아온 팀이 team1이라면 상대팀은 team2
            }else{
                oppoteam = match.getTeam1().getTeamName();
            }

            result.add(new ViewAllResponseDto(match.getMatchId(), match.getRegion(), match.getPlace(),
                    match.getStartTime(),match.getMatchState()));
        }

        return result;

    }

//    public List<MatchListResponseDto> viewMatch(Long teamId){
//        Team team=teamRepository.findById(teamId).orElseThrow(()->new BusinessException(NOT_FOUND_TEAM));
//
//
//    }
    public List<MatchListResponseDto> viewMatch(){ //리파지토리의 모든 경기 목록 조회
        List<Match> matchList=matchRepository.findAll();//리스트 형태로 경기 반환
        ArrayList<MatchListResponseDto> mlist=new ArrayList<>(); //dto배열 리스트 생성

        for (Match match : matchList){ //객체 match로 구성된 리스트를 돌면서 responseDto배열로 필요한 정보 넣어줌
            mlist.add(new MatchListResponseDto(match.getMatchId(),match.getStartTime(),match.getPlace(),
                    match.getRegion(),match.getMatchState(),match.getTeam1().getId()));
        }
       return mlist;
    }

    //우리 팀의 예정 경기 or 지난 경기 목록 조회 matchState? expected이면 예정 finish면 지난 경기
    public List<ViewMSListResponseDto> viewMSList(MatchState matchState,String teamName){ //나의 팀 아이디값을 받아옴
        Team team = teamRepository.findByTeamName(teamName).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        //받아온 id값으로 팀 객체 생성, optional로 넘어오기 때문에 오류처리

        List<Match> findMSList=matchRepository.findByTeam1OrTeam2AndMatchState(team,team,matchState); //matchState 안보내는 걸로 했더니 오류
        //리스트 형태로 경기를 반환 받음, 각 객체는 Match 엔티티 타입

        ArrayList<ViewMSListResponseDto> result = new ArrayList<>();
        // result 배열리스트 생성, 배열의 각 객체 타입은 ViewMSListResponseDto

        for (Match match : findMSList) { //리스트를 돌면서 반복
            String oppoteam; //경기 마다 상대팀 찾기
            if(match.getTeam1().getTeamName() == team.getTeamName()){//team1이 경기를 생성한 팀
                oppoteam = match.getTeam2().getTeamName(); //받아온 팀이 team1이라면 상대팀은 team2
            }else{
                oppoteam = match.getTeam1().getTeamName();
            }

            result.add(new ViewMSListResponseDto(match.getMatchId(), oppoteam,
                    match.getRegion(), match.getPlace(), match.getStartTime()));
        }

        return result;
    }
    public List<ViewMymatchListResponseDto> viewMymatchList(Long teamId){//내가 생성한 경기 목록
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));

        List<Match> findMyList=matchRepository.findByTeam1(team);

        ArrayList<ViewMymatchListResponseDto> madebyme = new ArrayList<>();
        //배열리스트 생성

        for (Match match : findMyList){
            if(match.getTeam1().getTeamName()==team.getTeamName()){
                madebyme.add(new ViewMymatchListResponseDto(match.getTeam2().getTeamName(),
                        match.getMatchId(), match.getRegion(), match.getPlace(),
                        match.getStartTime(),match.getMatchState()));
            }
        }
        return madebyme;

    }
    public List<ViewWaitLIstResponseDto> viewWating(){ //매칭 대기 목록 조회
        List<Match> WaitingMatch = matchRepository.findWaiting();

        return WaitingMatch.stream().map(m -> new ViewWaitLIstResponseDto(m.getTeam1().getTeamName(),
                m.getPlace(),m.getRegion(),m.getMatchId(),m.getStartTime())).collect(Collectors.toList());
    }

    public DeleteMatchResponseDto delete(DeleteMatchRequestDto deleteMatchRequestDto){//경기 삭제
        matchRepository.deleteById(deleteMatchRequestDto.getMatchId());
        return new DeleteMatchResponseDto(deleteMatchRequestDto.getMatchId());
    }
}
