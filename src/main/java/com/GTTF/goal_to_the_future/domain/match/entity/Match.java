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

    @OneToOne(fetch = FetchType.LAZY) //경기 하나당 결과 하나 매핑
    private Result result;

    @ManyToOne(fetch = FetchType.LAZY) //팀 하나가 경기 여러개 생성 가능
    @JoinColumn(name = "team1_id")
    private Team team1; //경기를 생성한 팀
    @ManyToOne(fetch = FetchType.LAZY) //팀 하나가 경기 여러개 참가 가능
    @JoinColumn(name = "team2_id")
    private Team team2; //참가 신청한 팀
    private LocalDateTime startTime; //경기 시간
    private String place; //경기장

    private String region;//경기 지역
    @Enumerated(EnumType.STRING)
    private MatchState matchState;// 경기 상태

    public Match(Team team1,LocalDateTime startTime, String place, String region,MatchState matchState) {
        this.team1 = team1;
        this.startTime = startTime;
        this.place = place;
        this.region=region;
        this.matchState = matchState;
    }//Match 생성자

    public void joinMatch(Team team2){
        this.team2 = team2;
    }
    //팀 객체를 인자로 받아옴

    public void update(MatchState matchState) {
        this.matchState = matchState;
    }

    // 경기결과 기록하기
    public void recordResult(Result result){
        this.result = result;
    }

}
