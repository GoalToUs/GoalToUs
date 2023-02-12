package com.GTTF.goal_to_the_future.common.response;

import com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Getter;

@Getter
@JsonPropertyOrder({"status", "success", "message", "data"}) // 순서 지정
public class BaseResponseDto<T> {
    private final int status;
    private final Boolean success;
    private final String message;

    @JsonInclude(JsonInclude.Include.NON_NULL) // 요청에 실패한 경우에는 data : null 과 같이 표시되지 않게하기 위해서
    private T data;

    // 요청에 성공한 경우
    public BaseResponseDto(T result){
        this.status = 200;
        this.success = true;
        this.message = "요청에 성공하였습니다.";
        this.data = result;
    }

    // 요청에 실패한 경우
    public BaseResponseDto(ErrorMessage errorMessage){
        this.status = errorMessage.getStatus();
        this.success = errorMessage.getSuccess();
        this.message = errorMessage.getMessage();
    }
}
