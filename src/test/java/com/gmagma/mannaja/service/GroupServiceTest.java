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
        String saveLink = groupService.createGroup(requestDto);

        // then
        Group findGroup = groupRepository.findByLink(saveLink).get();
        Member findMember = memberRepository.findById(findGroup.getLeaderId()).get();
        assertEquals(requestDto.getGroupName(), findGroup.getName());
        assertEquals(findMember.getNickname(), requestDto.getNickname());
    }
}