package com.GTTF.goal_to_the_future.config.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class TestService {
    public Object getTest() {
        return null;
    }

    public Object getTest2() {
        return null;
    }
}
