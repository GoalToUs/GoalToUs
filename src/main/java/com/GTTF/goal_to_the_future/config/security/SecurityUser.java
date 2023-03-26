package com.GTTF.goal_to_the_future.config.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class SecurityUser implements UserDetails {

    private String username;
    private Collection<? extends GrantedAuthority> authorities;

    public SecurityUser(String username, List<String> roles){
        //생성자로 인스턴스를 authorities 필드를 초기화
        this.username=username;
        this.authorities= Optional.ofNullable(roles)
                .orElse(Collections.emptyList())
                .stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

    }
    //field 영역

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return "test";
    }

    @Override
    public String getUsername() {
        return "test";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}