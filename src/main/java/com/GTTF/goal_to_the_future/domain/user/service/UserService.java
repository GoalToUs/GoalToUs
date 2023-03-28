package com.GTTF.goal_to_the_future.domain.user.service;

import com.GTTF.goal_to_the_future.domain.user.dto.request.SignupRequestDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.MypageResponseDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.SignupResponseDto;
import com.GTTF.goal_to_the_future.domain.user.entity.User;
import com.GTTF.goal_to_the_future.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
@RequiredArgsConstructor
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    public SignupResponseDto signup(SignupRequestDto requestDto) {
        //1. 유저 객체 생성
        User newUser = new User(requestDto.getPassword(), requestDto.getName(),
                requestDto.getEmail(), requestDto.getIsCaptain(),
                requestDto.getPosition(), requestDto.getNickname(),
                requestDto.getPhoto(), requestDto.getBirth());

        // 2. repository에 save함수 사용해서 실제로 DB에 넣기
        userRepository.save(newUser);

        SignupResponseDto signupResponseDto = new SignupResponseDto(newUser.getId(), newUser.getNickname(), newUser.getPw(),
                newUser.getName(), newUser.getEmail(), newUser.getCaptain(),
                newUser.getPosition(),newUser.getPhoto(), newUser.getBirth());

        return signupResponseDto;
    }
    public MypageResponseDto getInfo(Long userId){
        //1. 유저 아이디로 사용자 조회
        User user = userRepository.findById(userId).get();
        //2. responseDto 에 담아서 보내기
        return new MypageResponseDto(user.getName(), user.getBirth(),user.getTeam().getTeamName(),
                user.getPosition(), user.getPhoto());
    }


    public boolean checkNicknameDuplicate(String nickname){
        return userRepository.existsByNickname(nickname);}


}
