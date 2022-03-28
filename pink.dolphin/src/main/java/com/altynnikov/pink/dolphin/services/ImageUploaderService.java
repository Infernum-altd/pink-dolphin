package com.altynnikov.pink.dolphin.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Service;

@Service
public interface ImageUploaderService {
    String uploadImage(String image, String fileExtension) throws JsonProcessingException;
}
