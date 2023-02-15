package com.GTTF.goal_to_the_future.common.exception.custom;

import com.GTTF.goal_to_the_future.common.error.enums.ErrorMessage;
import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException{

    private final ErrorMessage errorMessage;

    public BusinessException(ErrorMessage errorMessage){
        super(errorMessage.getMessage());
        this.errorMessage = errorMessage;
    }

}
