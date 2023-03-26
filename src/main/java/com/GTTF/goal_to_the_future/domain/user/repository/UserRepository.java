package com.GTTF.goal_to_the_future.domain.user.repository;

import com.GTTF.goal_to_the_future.domain.team.entity.Team;
import com.GTTF.goal_to_the_future.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

//메인 엔티티와 pk타입
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByTeam(Team team); // select * from User where User.team_id = 우리가 넘긴 Team 객체의 id
    User findByNicknameAndEmail(String nickname, String email); // select * from User where User.username = 우리가 넘긴 username and User.email = 우리가 넘긴 이메일

    @Query("select u.name from User u where u.team = :team") // jpql - jpql 문법 찾아보기

    List<String> findUserNamesByTeam(@Param("team") Team team);

    boolean existsByNickname(String nickname);

}
