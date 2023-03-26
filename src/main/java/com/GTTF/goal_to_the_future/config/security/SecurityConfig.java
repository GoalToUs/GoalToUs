package com.GTTF.goal_to_the_future.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity //스프링시큐리티 활성화
@EnableGlobalMethodSecurity(securedEnabled = true)//Comtroller메소드에 직접 Role 부여 가능
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private final AuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private final AccessDeniedHandler accessDeniedHandler;
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
                     .antMatchers("/user/login").permitAll() //인증이 되지 않은 요청은 403
                     .antMatchers("/**").hasRole("AUTH")
                    //해당 url에는 AUTH라는 Role이 들어있어야 통과됨

        ;
        http
                .addFilterBefore(securityAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class);

    }
}
