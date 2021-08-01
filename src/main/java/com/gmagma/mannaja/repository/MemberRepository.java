package com.gmagma.mannaja.repository;

import com.gmagma.mannaja.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByNickname(String nickname);
}
