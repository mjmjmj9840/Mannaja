package com.gmagma.mannaja.service;

import com.gmagma.mannaja.model.Member;
import com.gmagma.mannaja.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;

    // 모든 멤버 조회
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    //
}
