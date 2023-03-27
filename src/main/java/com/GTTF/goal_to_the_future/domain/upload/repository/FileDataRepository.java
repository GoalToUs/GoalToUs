package com.GTTF.goal_to_the_future.domain.upload.repository;

import com.GTTF.goal_to_the_future.domain.upload.entity.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData,Long> {
    Optional<FileData> findByName(String fileName);
}
