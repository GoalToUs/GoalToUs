package com.GTTF.goal_to_the_future.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity //스프링시큐리티 활성화
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    public SecurityAuthenticationFilter securityAuthenticationFilter() {
        return new SecurityAuthenticationFilter();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .cors().and()
                .csrf().disable() //세션 사용 하지 않음
                .sessionManagement()
                     .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                     .and()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .accessDeniedHandler(accessDeniedHandler)
                .and()
                .authorizeRequests()
                     .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() //특정 URL 에 대해서 어떻게 인증처리 할 지
                     .antMatchers("/user/login").authenticated() //인증이 되지 않은 요청은 403
                     .antMatchers("/**").authenticated()
                .anyRequest().permitAll()
                .and()
                .formLogin().disable()
        ;
        http
                .addFilterBefore(securityAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class);

    }
}
