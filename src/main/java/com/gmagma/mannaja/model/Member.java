package com.gmagma.mannaja.model;

import com.gmagma.mannaja.dto.MemberRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Member extends Timestamped {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    public Member(MemberRequestDto requestDto) {
        this.nickname = requestDto.getNickname();
        this.password = requestDto.getPassword();
    }

    public void update(MemberRequestDto requestDto) {
        this.nickname = requestDto.getNickname();
        this.password = requestDto.getPassword();
    }
}
