package com.GTTF.goal_to_the_future.config.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.Arrays;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String s)
            throws UsernameNotFoundException {

        if(!s.equals("test")) throw new UsernameNotFoundException("해당 유저가 존재하지 않습니다.");

//로그인 로직 시작

        // loginId를 이용하여 DB에서 User 객체를 가져옴
        // User user = mapper.getUser(loginID);
        // User의 정보를 SecurityUser 에 담아준다.

        return new SecurityUser(s, Arrays.asList("ROLE_AUTH"));
    }

}