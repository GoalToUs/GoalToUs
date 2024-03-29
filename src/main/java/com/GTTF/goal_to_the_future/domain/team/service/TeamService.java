package com.GTTF.goal_to_the_future.domain.team.service;

import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import com.GTTF.goal_to_the_future.domain.result.repository.ResultRepository;
import com.GTTF.goal_to_the_future.domain.team.dto.request.CreateTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.request.JoinTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.*;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import com.GTTF.goal_to_the_future.domain.user.entity.User;
import com.GTTF.goal_to_the_future.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_TEAM;
import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_USER;

@Transactional
@RequiredArgsConstructor
@Service
public class TeamService {
    @Autowired
    private final TeamRepository teamRepository; //클래스명 필드명
    @Autowired
    private final UserRepository userRepository; //클래스명 필드명


    //함수 만들기 ctrl+p 로 순서
    public CreateTeamResponseDto create(CreateTeamRequestDto createTeamRequestDto){ //팀생성하기
        Team newTeam = new Team(createTeamRequestDto.getTeamName(), createTeamRequestDto.getPhoto(),
                createTeamRequestDto.getRegion(), createTeamRequestDto.getIntro()); //ctrl+alt+v로 변수 선언

        teamRepository.save(newTeam); //insert 쿼리

        return new CreateTeamResponseDto(newTeam.getTeamName(),newTeam.getPhoto(), newTeam.getRegion(),
                newTeam.getIntro(), newTeam.getId());
    }

    public JoinTeamResponseDto join(JoinTeamRequestDto joinTeamRequestDto, Long teamId){// teamId = pk
        // teamId로 team을 조회
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));

        // userId로 user를 조회
        User user = userRepository.findById(joinTeamRequestDto.getUserId()).orElseThrow(() -> new BusinessException(NOT_FOUND_USER));

        // user의 team필드에 team을 값을 넣어줌
        user.joinTeam(team);// JPA update - 요약: 필드 값만 바꿔도 알아서 update 쿼리 날라감

        return new JoinTeamResponseDto(team.getTeamName(),user.getName());
    }

    public InfoResponseDto getTeamInfo(Long teamId){
        //1. teamName으로 팀 조회하기
        Team team=teamRepository.findById(teamId).orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));

        //2. 해당 팀의 모든 유저 조회하기
        List<String> playerNames = userRepository.findUserNamesByTeam(team);

        //3. responseDto에 담아서 보내기
        return new InfoResponseDto(team.getPhoto(), team.getRegion(), team.getTeamName(), playerNames, team.getIntro());
    }

    public ViewTeamResponseDto viewTeam(Long teamId){
        Team team=teamRepository.findById(teamId).
                orElseThrow(() -> new BusinessException(NOT_FOUND_TEAM));
        return new ViewTeamResponseDto(team.getId(),team.getTeamName(),team.getRegion());
    }

   public List<SearchTeamResponseDto> searchTeamInfo(String keyword){ //팀찾는거

        if(keyword == null){ //키워드 없으면 모든 팀 보여주기
            List<SearchTeamResponseDto> teams = teamRepository.findALLTeamInfo();
            return teams;

        }else{
            List<SearchTeamResponseDto> teams = teamRepository.findByKeyword("%" + keyword + "%");
            return teams;
        }

   }

//    public List<SearchTeamResponseDto> search(String keyword){
//        List<SearchTeamResponseDto> teams=teamRepository.findALLTeamInfo();
//        return teams;
//   }

}
