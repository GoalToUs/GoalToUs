package com.GTTF.goal_to_the_future.domain.result.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
    private String highlight;
    private Long winnerTeamId;
    private Integer pass;
    private Integer effectiveShooting;

    public Result(Integer goal, Integer penaltyKick, Integer yellowCard, Integer redCard, String highlight, Long winnerTeamId, Integer pass, Integer effectiveShooting) {
        this.goal = goal;
        this.penaltyKick = penaltyKick;
        this.yellowCard = yellowCard;
        this.redCard = redCard;
        this.highlight = highlight;
        this.winnerTeamId = winnerTeamId;
        this.pass = pass;
        this.effectiveShooting = effectiveShooting;
    }
}
