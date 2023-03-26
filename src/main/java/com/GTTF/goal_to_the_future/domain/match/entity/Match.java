package com.GTTF.goal_to_the_future.domain.match.entity;

import com.GTTF.goal_to_the_future.domain.result.entity.Result;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@Entity

public class Match {
    @Id //기본키에 붙이는거
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matchId;

    @OneToOne(fetch = FetchType.LAZY)
    private Result result;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team1_id")
    private Team team1; //경기를 생성한 팀
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team2_id")
    private Team team2; //참가 신청한 팀
    private LocalDateTime startTime; //경기 시간
    private String place; //경기 장소
    @Enumerated(EnumType.STRING)
    private MatchState matchState;// 경기 상태 (0:예정,1:진행,2:종료)

    public Match(Team team1, LocalDateTime startTime, String place, MatchState matchState) {
        this.team1 = team1;
        this.startTime = startTime;
        this.place = place;
        this.matchState = matchState;
    }

    public void joinMatch(Team team2){
        this.team2 = team2;
    }

    // 경기결과 기록하기
    public void recordResult(Result result){
        this.result = result;
    }

}
