package com.GTTF.goal_to_the_future.domain.team.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@Entity
public class Team {
    @Id //기본키에 붙이는거
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String teamName;

    private Integer headCount;

    private Integer winCount;

    private Integer matchCount;

    private String region;

    @Column(columnDefinition = "TEXT")
    private String photo;

    @Column(columnDefinition = "TEXT")
    private String intro;

    public Team(String teamName, String region, String intro) {
        this.teamName = teamName;
        this.region = region;
        this.intro = intro;
    }
}
