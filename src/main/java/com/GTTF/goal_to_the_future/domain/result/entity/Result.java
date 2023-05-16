package com.GTTF.goal_to_the_future.domain.result.entity;

import com.GTTF.goal_to_the_future.domain.match.entity.Match;
import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@Entity
public class Result {
    @Id @GeneratedValue
    private Long id;
    private Integer goal;
    private Integer penaltyKick;
    private Integer yellowCard;
    private Integer redCard;
    private String heatmap;
    private String ballHeatmap;
    private Long winnerTeamId;
    private Integer pass;

    @ManyToOne(fetch= FetchType.LAZY) //팀 하나에 결과 여러개
    @JoinColumn(name="team_id")
    private Team team;

    //매치 하나에 결과 2개
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="match_id")
    private Match match;


    public Result(Integer goal, Integer penaltyKick, Integer yellowCard,
                  Integer redCard, String heatmap,String ballHeatmap, Long winnerTeamId, Integer pass) {
        this.goal = goal;
        this.penaltyKick = penaltyKick;
        this.yellowCard = yellowCard;
        this.redCard = redCard;
        this.heatmap=heatmap;
        this.ballHeatmap=ballHeatmap;
        this.winnerTeamId = winnerTeamId;
        this.pass = pass;
    }
}
