package com.GTTF.goal_to_the_future.domain.match.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match,Long> {
}
