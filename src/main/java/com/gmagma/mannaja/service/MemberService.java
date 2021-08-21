package com.gmagma.mannaja.service;

import com.gmagma.mannaja.dto.MemberRequestDto;
import com.gmagma.mannaja.model.Group;
import com.gmagma.mannaja.model.Member;
import com.gmagma.mannaja.repository.GroupRepository;
import com.gmagma.mannaja.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MemberService {
    private final GroupRepository groupRepository;
    private final MemberRepository memberRepository;

    // 그룹 멤버 찾기
    public HashMap findMembersByGroupLink(String link) {
        HashMap result = new HashMap();

        Optional<Group> group = groupRepository.findByLink(link);
        if(!group.isPresent()) {  // 해당 그룹 링크가 존재하지 않는 경우
            return result;
        }

        List<String> nicknames = new ArrayList<>();
        List<Member> members = group.get().getMembers();
        for (Member member: members) {
            nicknames.add(member.getNickname());
        }

        result.put("nicknames", nicknames);
        return result;
    }

    // 그룹 새 멤버 생성
    @Transactional
    public HashMap createMember(MemberRequestDto requestDto) {
        HashMap result = new HashMap();

        Optional<Group> group = groupRepository.findByLink(requestDto.getGroupLink());
        if(!group.isPresent()) {
            result.put("resultCode", "1000");
            result.put("resultMessage", "해당 그룹 링크가 존재하지 않습니다.");
            return result;
        }

        Optional<Member> duplicatedNickname = memberRepository.findByGroupAndNickname(group.get(), requestDto.getNickname());
        if(duplicatedNickname.isPresent()) {
            result.put("resultCode", "2000");
            result.put("resultMessage", "해당 닉네임이 이미 존재합니다.");
            return result;
        }

        Member member = new Member(requestDto);
        memberRepository.save(member);
        group.get().addMember(member);

        result.put("resultCode", "0000");
        result.put("resultMessage", "성공");
        return result;
    }
}
