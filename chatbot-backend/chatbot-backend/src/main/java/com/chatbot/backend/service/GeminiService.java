package com.chatbot.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient;

    public GeminiService() {

        this.webClient = WebClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
    }

    public String getResponse(String message) {

        String url =
                "/v1beta/models/gemini-2.0-flash:generateContent?key="
                        + apiKey;

        Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                        Map.of(
                                "parts", List.of(
                                        Map.of("text", message)
                                )
                        )
                )
        );

        try {

            Map response = webClient.post()
                    .uri(url)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            return extractText(response);

        } catch (Exception e) {

            e.printStackTrace();

            return e.getMessage();
        }
    }

    private String extractText(Map response) {

        try {

            List<Map> candidates =
                    (List<Map>) response.get("candidates");

            Map content =
                    (Map) candidates.get(0).get("content");

            List<Map> parts =
                    (List<Map>) content.get("parts");

            return parts.get(0).get("text").toString();

        } catch (Exception e) {

            e.printStackTrace();

            return "No response from AI";
        }
    }
}