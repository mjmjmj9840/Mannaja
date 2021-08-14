package com.gmagma.mannaja.controller;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class GroupController {
    private final GroupService groupService;

    @GetMapping("/test/create")
    public HashMap create() {
        HashMap result = new HashMap();
        result.put("message", "제발 돼라!!!!!!!!!!!!!!!!!!!");

        return result;
    }
//    @PostMapping("/createLink")
//    public String createLink(@RequestBody GroupMemberRequestDto requestDto) {
//        String link = groupService.createGroup(requestDto);
//        return link;
//    }
}
