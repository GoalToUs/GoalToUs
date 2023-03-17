package com.GTTF.goal_to_the_future.domain.result.service;

import com.GTTF.goal_to_the_future.domain.match.repository.MatchRepository;
import com.GTTF.goal_to_the_future.domain.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class ResultService {

    private final TeamRepository teamRepository;
    private final MatchRepository matchRepository;

}
