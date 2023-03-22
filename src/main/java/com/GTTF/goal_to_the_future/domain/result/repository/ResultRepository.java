package com.GTTF.goal_to_the_future.domain.result.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result,Long> {
}
