package com.gmagma.mannaja.controller;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.dto.MemberRequestDto;
import com.gmagma.mannaja.service.GroupService;
import com.gmagma.mannaja.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class UserController {
    private final MemberService memberService;

    @GetMapping("/user/login/{link}")
    public HashMap createLink(@PathVariable String link) {
        HashMap result = memberService.findMembersByGroupLink(link);
        return result;
    }

    @PostMapping("/user/signup")
    public HashMap signUp(@RequestBody MemberRequestDto requestDto) {
        HashMap result = memberService.createMember(requestDto);
        return result;
    }
}
