package com.GTTF.goal_to_the_future.domain.team.controller;

import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import com.GTTF.goal_to_the_future.domain.match.dto.response.ViewMymatchListResponseDto;
import com.GTTF.goal_to_the_future.domain.team.dto.request.CreateTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.request.JoinTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.*;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.team.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class TeamController {
    private final TeamService teamService;

    @PostMapping("/team")
    public CreateTeamResponseDto create(@RequestBody CreateTeamRequestDto createTeamRequestDto){
        return teamService.create(createTeamRequestDto);

    }

    @PostMapping("/team/join/{teamId}")
    public JoinTeamResponseDto join(@RequestBody JoinTeamRequestDto joinTeamRequestDto,
                                    @PathVariable Long teamId){
         return teamService.join(joinTeamRequestDto, teamId);
    }

    @GetMapping("/team/info/{teamId}") //팀 정보 조회
    public InfoResponseDto getTeamInfo(@PathVariable Long teamId){

        return teamService.getTeamInfo(teamId);
    }

    @GetMapping("/team/veiwteam/{teamId}")
    public ViewTeamResponseDto viewTeam(@PathVariable Long teamId){
        return teamService.viewTeam(teamId);
    }

    @GetMapping("/team/list")//팀 검색하기
    public List<SearchTeamResponseDto> searchTeamInfo(@RequestParam(required = false) String search){
        return teamService.searchTeamInfo(search);
    }


    //    @GetMapping("/team/list")//팀 검색하기
//    public List<SearchTeamResponseDto> searchTeamInfo(@RequestParam(required = false) String search ,@RequestParam String teamName){
//        return teamService.searchTeamInfo(search);
//    }

//    @GetMapping("/team/list/{keyword}")
//    public List<SearchTeamResponseDto> searchTeam(@PathVariable String keyword){
//        return teamService.search(keyword);
//    }



}
