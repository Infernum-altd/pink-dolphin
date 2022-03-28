package com.altynnikov.pink.dolphin.services.impl;

import com.altynnikov.pink.dolphin.services.ImageUploaderService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class ImageUploaderServiceImpl implements ImageUploaderService {

    @Override
    public String uploadImage(String base64Image, String fileExtension) throws JsonProcessingException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", "application/vnd.github.v3+json");
        headers.add("authorization", "bearer " + "key");
        headers.setContentType(MediaType.APPLICATION_JSON);

        RestTemplate restTemplate = new RestTemplate();

        String fileName = UUID.randomUUID().toString();

        Map<String, String> params = new HashMap<>();
        params.put("content", base64Image);
        params.put("message", fileName);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(params, headers);

        // Send request with POST method.
        ResponseEntity<String> response = restTemplate.exchange("https://api.github.com/repos/Infernum-altd/images/contents/" + createFileName(fileName, fileExtension), HttpMethod.PUT, request, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(response.getBody());
        String accessUrl = node.get("content").get("download_url").asText();;

        return accessUrl;
    }

    private String createFileName(String fileName, String fileExtension) {
        return fileName + "." + fileExtension;
    }
}
