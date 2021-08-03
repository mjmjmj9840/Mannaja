package com.gmagma.mannaja.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GroupMemberRequestDto {
    private String name;  // 그룹명
    private String nickname;  // 그룹장 닉네임
    private String password;  // 그룹장 패스워드
}
