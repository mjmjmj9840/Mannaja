package com.gmagma.mannaja.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class GroupRequestDto {
    private String name;
    private String link;
    private Long leaderId;
}
