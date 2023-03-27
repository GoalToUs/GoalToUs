package com.GTTF.goal_to_the_future.domain.upload.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="FileData")
@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED) //기본생성자 생성
public class FileData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;

    private String filepath;

    @Builder
    public FileData(String name, String type, String filepath){
        this.name=name;
        this.type=type;
        this.filepath=filepath;
    }
}
