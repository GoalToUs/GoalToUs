package com.GTTF.goal_to_the_future.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
