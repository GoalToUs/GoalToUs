package com.GTTF.goal_to_the_future.domain.result.repository;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.result.dto.response.ViewRecordResponseDto;
import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResultRepository extends JpaRepository<Result,Long> {
    @Override
    Optional<Result> findById(Long matchId);

    @Query("select new com.GTTF.goal_to_the_future.domain.result.dto.response.ViewRecordResponseDto(r.goal,r.penaltyKick,r.yellowCard,r.redCard,r.heatmap,r.ballHeatmap,r.pass,r.team.id,r.match.matchId)"
            +"from Result r")
    List<ViewRecordResponseDto> findALLRecord();
}
