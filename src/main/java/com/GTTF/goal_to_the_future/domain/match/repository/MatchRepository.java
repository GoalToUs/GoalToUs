package com.GTTF.goal_to_the_future.domain.match.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MatchRepository extends JpaRepository<Match,Long> {
    // 함수명으로 쿼리 생성
    Optional<Match> findByTeam1OrTeam2AnAndMatchState(Team team1, Team team2, MatchState matchState);

    // @Query로 쿼리 생성
    @Query("select m from Match m where m.team1 =: team1 or m.team2 =: team2 and m.matchState =: matchState")
    Optional<Match> findMatch(Team team1, Team team2, MatchState matchState);
}
