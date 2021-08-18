package com.gmagma.mannaja.controller;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class UserController {
    private final GroupService groupService;

    @GetMapping("/user/login/{link}")
    public HashMap createLink(@PathVariable String link) {
        List<String> nicknames = groupService.findMembersByGroupLink(link);

        HashMap result = new HashMap();
        result.put("nicknames", nicknames);

        return result;
    }
}
