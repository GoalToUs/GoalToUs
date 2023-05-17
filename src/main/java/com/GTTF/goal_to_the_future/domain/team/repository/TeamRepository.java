package com.GTTF.goal_to_the_future.domain.team.repository;

import com.GTTF.goal_to_the_future.domain.team.dto.response.SearchTeamResponseDto;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team,Long> {

//    @Query("select new com.GTTF.goal_to_the_future.domain.team.dto.response.SearchTeamResponseDto(t.teamName, t.photo, u.name)" +
//            " from User u join u.team t " +
//            " where u.captain=1 " +
//            " and (u.name like :keyword or t.teamName like :keyword)")
    @Query("select new com.GTTF.goal_to_the_future.domain.team.dto.response.SearchTeamResponseDto(t.teamName, t.photo, u.name)" +
            " from User u join u.team t " +
            " where t.teamName like :keyword")

    List<SearchTeamResponseDto> findByKeyword(@Param("keyword") String keyword);

    @Query("select new com.GTTF.goal_to_the_future.domain.team.dto.response.SearchTeamResponseDto(u.team.teamName, u.team.photo, u.name)" +
            " from User u " +
            " where u.captain=1 ")
    List<SearchTeamResponseDto> findALLTeamInfo();

    Optional<Team> findByTeamName(String teamName);

    @Override
    Optional<Team> findById(Long teamId);

    List<SearchTeamResponseDto> findByTeamNameContaining(String keyword);
}
