package com.GTTF.goal_to_the_future.common.exception;

import com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage;
import com.GTTF.goal_to_the_future.common.exception.custom.BusinessException;
import com.GTTF.goal_to_the_future.common.response.BaseResponseDto;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public BaseResponseDto<ErrorMessage> businessExceptionHandle(BusinessException e){
        ErrorMessage errorMessage = e.getErrorMessage();
        return new BaseResponseDto<>(errorMessage);
    }
}
