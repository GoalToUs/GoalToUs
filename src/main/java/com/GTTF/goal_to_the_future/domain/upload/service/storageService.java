package com.GTTF.goal_to_the_future.domain.upload.service;

import com.GTTF.goal_to_the_future.domain.upload.entity.FileData;
import com.GTTF.goal_to_the_future.domain.upload.repository.FileDataRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;

@RequiredArgsConstructor
@Service
@Transactional
@Log4j2
public class storageService {

    private final String FOLDER_PATH="C:\\WebStudy\\WebDevelement\\SpringBoot\\storage-service\\files\\";
    //파일 경로 지정....???
    private final FileDataRepository fileDataRepository;

    public String uploadImageToFileSystem(MultipartFile file) throws IOException {
        log.info("upload file: {}", file.getOriginalFilename());
        String filePath = FOLDER_PATH + file.getOriginalFilename();
        FileData fileData = fileDataRepository.save(
                FileData.builder()
                        .name(file.getOriginalFilename())
                        .type(file.getContentType())
                        //.filePath(filePath)
                        .build()
        );

        // 파일 경로
        file.transferTo(new File(filePath));

        if (fileData != null) {
            return "file uploaded successfully! filePath : " + filePath;
        }

        return null;
    }

}
