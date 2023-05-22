package com.GTTF.goal_to_the_future.domain.match.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.match.entity.MatchState;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository

public interface MatchRepository extends JpaRepository<Match,Long> {
    // 함수명으로 쿼리 생성
    List<Match> findByTeam1OrTeam2AndMatchState(Team team1, Team team2, MatchState matchState);

    List<Match> findByTeam1(Team team1);

    List<Match> findByTeam1OrTeam2(Team team1,Team team2);



    // @Query로 쿼리 생성
    @Query("select m from Match m where m.team1 =: team1 or m.team2 =: team2 and m.matchState =: matchState")
    List<Match> findMatch(Team team1, Team team2, MatchState matchState);

    @Query("select m from Match m where m.team2 is null") //참가하는 팀 team2가 없는 경기
    List<Match> findWaiting();

}
