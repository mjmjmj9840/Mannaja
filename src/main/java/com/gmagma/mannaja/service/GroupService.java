package com.gmagma.mannaja.service;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.dto.GroupRequestDto;
import com.gmagma.mannaja.dto.MemberRequestDto;
import com.gmagma.mannaja.model.Group;
import com.gmagma.mannaja.model.Member;
import com.gmagma.mannaja.repository.GroupRepository;
import com.gmagma.mannaja.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class GroupService {
    private final GroupRepository groupRepository;
    private final MemberRepository memberRepository;

    // 모든 그룹 조회
    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    // 신규 그룹 생성
    @Transactional
    public Long createGroup(GroupMemberRequestDto requestDto) {
        // 그룹장 생성
        String nickname = requestDto.getNickname();
        String password = requestDto.getPassword();
        MemberRequestDto memberRequestDto = new MemberRequestDto(nickname, password);
        Member member = new Member(memberRequestDto);
        memberRepository.save(member);

        // 신규 그룹 링크 생성
        String link = generateRandomStr();
        while (validateDuplicateLink(link)) {  // 중복 링크일 경우 다시 생성
            link = generateRandomStr();
        }

        // 신규 그룹 생성
        String name = requestDto.getName();
        Long leaderId = member.getId();
        GroupRequestDto groupRequestDto = new GroupRequestDto(name, link, leaderId);
        Group group = new Group(groupRequestDto);
        group.addMember(member);
        groupRepository.save(group);

        return group.getId();  // 그룹 링크 반환
    }

    // 랜덤 링크 생성
    private String generateRandomStr() {
        int leftLimit = 48;  // 숫자 '0'
        int rightLimit = 122;  // 문자 'z'
        int targetStringLength = 6;  // 6자리 링크 생성
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }

    // 중복 링크일 경우 true 반환
    private boolean validateDuplicateLink(String link) {
        Optional<Group> group = groupRepository.findByLink(link);
        if(group.isPresent()) {
            return true;
        }
        return false;
    }

    // 그룹 정보 변경
    @Transactional
    public Long updateGroup(Long id, GroupRequestDto requestDto) {
        Group group = groupRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 그룹 id가 존재하지 않습니다.")
        );

        group.update(requestDto);
        return id;
    }

    // 그룹 멤버 추가
    @Transactional
    public Long addGroupMember(Long id, Member member) {
        Group group = groupRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 그룹 id가 존재하지 않습니다.")
        );

        group.addMember(member);
        return id;
    }
}
