package com.chatbot.backend.controller;

import com.chatbot.backend.dto.ChatRequest;
import com.chatbot.backend.dto.ChatResponse;
import com.chatbot.backend.service.GeminiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {

    private final GeminiService geminiService;

    public ChatController(
            GeminiService geminiService
    ) {
        this.geminiService = geminiService;
    }

    @PostMapping("/send")
    public ChatResponse sendMessage(
            @RequestBody ChatRequest request
    ) {

        String userMessage = request.getMessage();

        String botReply =
                geminiService.getResponse(userMessage);

        return new ChatResponse(botReply);
    }
}