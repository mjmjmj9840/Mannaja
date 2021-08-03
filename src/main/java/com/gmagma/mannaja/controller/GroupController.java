package com.gmagma.mannaja.controller;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class GroupController {
    private final GroupService groupService;

    @PostMapping("/CreateLink")
    public String createLink(@RequestBody GroupMemberRequestDto requestDto) {
        String link = groupService.createGroup(requestDto);
        return link;
    }
}
