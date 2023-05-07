package com.GTTF.goal_to_the_future;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class GoalToTheFutureApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoalToTheFutureApplication.class, args);
	}

}
