package com.webtech.checkersonline.Repos;

import com.webtech.checkersonline.Entity.User;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.criteria.CriteriaBuilder;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepo extends CrudRepository<User, Integer> {

    User findByEmail(String email);

    @Override
    void delete(User user);
}