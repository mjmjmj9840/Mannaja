package com.gmagma.mannaja.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MemberRequestDto {
    private String nickname;
    private String password;
}
