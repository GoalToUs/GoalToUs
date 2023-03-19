package com.GTTF.goal_to_the_future.config.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String loginId)
            throws UsernameNotFoundException {

        System.out.println("인증을 받습니다.");
//로그인 로직 시작

        // loginId를 이용하여 DB에서 User 객체를 가져옴
        // User user = mapper.getUser(loginID);
        // User의 정보를 SecurityUser 에 담아준다.

        return new SecurityUser();
    }

}