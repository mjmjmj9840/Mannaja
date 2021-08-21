package com.gmagma.mannaja.repository;

import com.gmagma.mannaja.model.Group;
import com.gmagma.mannaja.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByGroupAndNickname(Group group, String nickname);
}
