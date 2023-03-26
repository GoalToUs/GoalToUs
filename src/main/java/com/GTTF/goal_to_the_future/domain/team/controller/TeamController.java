package com.GTTF.goal_to_the_future.domain.team.controller;

import com.GTTF.goal_to_the_future.domain.team.dto.request.CreateTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.request.JoinTeamRequestDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.CreateTeamResponseDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.InfoResponseDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.JoinTeamResponseDto;
import com.GTTF.goal_to_the_future.domain.team.dto.response.SearchTeamResponseDto;
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

    @GetMapping("/team/{teamName}/info")
    public InfoResponseDto getTeamInfo(@PathVariable Long teamName){
        return teamService.getTeamInfo(teamName);
    }
    @GetMapping("/team/list")
    public List<SearchTeamResponseDto> searchTeamInfo(@RequestParam(required = false) String search){
        return teamService.searchTeamInfo(search);
    }

}
