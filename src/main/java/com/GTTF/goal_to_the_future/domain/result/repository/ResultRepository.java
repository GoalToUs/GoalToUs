package com.GTTF.goal_to_the_future.domain.result.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResultRepository extends JpaRepository<Result,Long> {
    @Override
    Optional<Result> findById(Long matchId);
}
