package com.GTTF.goal_to_the_future.domain.user.entity;


import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@Entity
public class User {
    @Id //기본키에 붙이는거
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,length = 20)//null안되는거
    private String pw;
    private String name;
    private String email;

    @ManyToOne(fetch=FetchType.LAZY) //팀 하나에 선수 여러명, 단방향
    @JoinColumn(name="team_id")
    private Team team;

    private Integer captain;
    private String position;
    private String nickname;

    private String photo;
    private String birth;


    public User(String pw, String name, String email, Integer captain,
                String position, String nickname, String photo, String birth) {
        this.pw = pw;
        this.name = name;
        this.email = email;
        this.captain = captain;
        this.position = position;
        this.nickname = nickname;
        this.photo=photo;
        this.birth=birth;
    }


    public void joinTeam(Team team){
        this.team = team;
    }
}
