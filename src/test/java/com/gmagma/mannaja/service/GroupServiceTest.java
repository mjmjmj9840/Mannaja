package com.gmagma.mannaja.service;

import com.gmagma.mannaja.dto.GroupMemberRequestDto;
import com.gmagma.mannaja.dto.GroupRequestDto;
import com.gmagma.mannaja.dto.MemberRequestDto;
import com.gmagma.mannaja.model.Group;
import com.gmagma.mannaja.model.Member;
import com.gmagma.mannaja.repository.GroupRepository;
import com.gmagma.mannaja.repository.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GroupServiceTest {

    @Autowired
    GroupService groupService;

    @Autowired
    GroupRepository groupRepository;

    @Autowired
    MemberRepository memberRepository;

    @Transactional
    @Test
    public void 그룹생성() throws Exception {
        // given
        String name = "group1";
        String nickname = "Kim";
        String password = "1234";
        GroupMemberRequestDto requestDto = new GroupMemberRequestDto(name, nickname, password);

        // when
        Long saveId = groupService.createGroup(requestDto);

        // then
        Group findGroup = groupRepository.findById(saveId).get();
        Member findMember = memberRepository.findById(findGroup.getLeaderId()).get();
        assertEquals(requestDto.getName(), findGroup.getName());
        assertEquals(findMember.getNickname(), requestDto.getNickname());
    }

    @Transactional
    @Test
    public void 그룹이름변경() throws Exception {
        // given
        String name = "group1";
        String nickname = "Kim";
        String password = "1234";
        GroupMemberRequestDto groupMemberRequestDto = new GroupMemberRequestDto(name, nickname, password);
        Long saveId = groupService.createGroup(groupMemberRequestDto);

        String new_name = "group2";
        Group group = groupRepository.findById(saveId).get();
        GroupRequestDto groupRequestDto = new GroupRequestDto(new_name, group.getLink(), group.getLeaderId());

        // when
        groupService.updateGroup(saveId, groupRequestDto);

        // then
        assertEquals(group.getName(), new_name);
    }

    @Transactional
    @Test
    public void 그룹멤버추가() throws Exception {
        // given
        String name = "group1";
        String nickname = "Kim";
        String password = "1234";
        GroupMemberRequestDto groupMemberRequestDto = new GroupMemberRequestDto(name, nickname, password);
        Long saveId = groupService.createGroup(groupMemberRequestDto);

        MemberRequestDto memberRequestDto = new MemberRequestDto("Han", "1111");
        Member member = new Member(memberRequestDto);
        memberRepository.save(member);

        // when
        groupService.addGroupMember(saveId, member);

        // then
        Group group = groupRepository.findById(saveId).get();
        if(!group.getMembers().contains(member)) {
            throw new Exception("그룹 멤버가 추가되지 않았습니다.");
        };
    }
}