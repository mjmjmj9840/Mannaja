package com.gmagma.mannaja.repository;

import com.gmagma.mannaja.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
    Group findByLink(String link);
}
