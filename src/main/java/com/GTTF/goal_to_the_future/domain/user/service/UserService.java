package com.GTTF.goal_to_the_future.domain.user.service;

import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.domain.user.dto.request.LoginRequestDto;
import com.GTTF.goal_to_the_future.domain.user.dto.request.SignupRequestDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.LoginResponseDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.MypageResponseDto;
import com.GTTF.goal_to_the_future.domain.user.dto.response.SignupResponseDto;
import com.GTTF.goal_to_the_future.domain.user.entity.User;
import com.GTTF.goal_to_the_future.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_TEAM;
import static com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage.NOT_FOUND_USER;

@RequiredArgsConstructor
@Service
@Transactional
public class UserService  { //userService가 UserDetailsService 구현
    @Autowired
    private final UserRepository userRepository;

//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
//        User user=userRepository.findByEmail(email); //로그인 할 유저의 email을 파라미터로 전달받음
//
//        if(user==null){
//            throw new UsernameNotFoundException(email);
//        }
//
//        return org.springframework.security.core.userdetails.User.builder()
//                .username(user.getEmail())
//                .password(user.getPw())
//                //.roles(user.getRole().toString())
//                .build();
//    }
    public SignupResponseDto signup(SignupRequestDto requestDto) {//회원가입
        //1. 유저 객체 생성
        User newUser = new User(requestDto.getPassword(), requestDto.getName(),
                requestDto.getEmail(), requestDto.getIsCaptain(),
                requestDto.getPosition(), requestDto.getNickname(),
                requestDto.getPhoto(), requestDto.getBirth());

        validateDuplicateUser(newUser);

        // 2. repository에 save함수 사용해서 실제로 DB에 넣기
        userRepository.save(newUser);

        SignupResponseDto signupResponseDto = new SignupResponseDto(newUser.getId(), newUser.getNickname(), newUser.getPw(),
                newUser.getName(), newUser.getEmail(), newUser.getCaptain(),
                newUser.getPosition(),newUser.getPhoto(), newUser.getBirth());

        return signupResponseDto;

    }
    public LoginResponseDto login(LoginRequestDto loginRequestDto,Long userId){
        //유저 닉네임으로 사용자 조회
        User user=userRepository.findById(userId).orElseThrow(() -> new BusinessException(NOT_FOUND_USER));

        if(user !=null){
            throw new IllegalStateException("일치하는 회원이 존재하지 않습니다.");
        }
        //회원 정보 dto에 담아서 보내주기
        return new LoginResponseDto(user.getId(), user.getNickname(),user.getPw(), user.getEmail(),
                user.getCaptain(),user.getPosition(),user.getPhoto(),user.getBirth());
    }

    public MypageResponseDto getInfo(Long userId){ //회원 정보 조회
        //1. 유저 아이디로 사용자 조회
        User user = userRepository.findById(userId).get();
        //2. responseDto 에 담아서 보내기
        return new MypageResponseDto(user.getName(), user.getBirth(),user.getTeam().getTeamName(),
                user.getPosition(), user.getPhoto());
    }
    public void validateDuplicateUser(User user){ //회원가입 시 닉네임 중복 체크
        User findUser = userRepository.findByNickname(user.getNickname());
        if(findUser !=null){
            throw new IllegalStateException("이미 가입된 회원힙니다.");
        }
    }

    public boolean checkNicknameDuplicate(String nickname){
        return userRepository.existsByNickname(nickname);
    }


}
