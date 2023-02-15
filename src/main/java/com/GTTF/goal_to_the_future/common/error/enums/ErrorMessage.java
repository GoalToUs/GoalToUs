package com.GTTF.goal_to_the_future.common.error.enums;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
public enum ErrorMessage {
    // 성공
    SUCCESS(OK, true, "요청에 성공하였습니다."),

    // 실패
    NOT_FOUND_USER(NOT_FOUND, false, "해당 유저가 없습니다."),
    NOT_FOUND_TEAM(NOT_FOUND, false, "해당 팀이 없습니다."),
    BAD_MATCH_JOIN(BAD_REQUEST, false, "본인이 속한 팀과 경기를 진행할 수 없습니다."),

    NOT_FOUND_MATCH(NOT_FOUND, false,"경기가 존재하지 않습니다.");


    public String getMessage() {
        return message;
    }

    private final int status;
    private final Boolean success;
    private final String message;

    ErrorMessage(HttpStatus status, Boolean success, String message){
        this.status = status.value();
        this.success = success;
        this.message = message;
    }
}
