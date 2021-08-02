package com.gmagma.mannaja.repository;

import com.gmagma.mannaja.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Optional<Group> findByName(String name);
    Optional<Group> findByLink(String link);
}
