package com.webtech.checkersonline.Service;

import javax.transaction.Transactional;

import com.webtech.checkersonline.Dto.UserDto;
import com.webtech.checkersonline.Entity.User;
import com.webtech.checkersonline.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    private UserRepo userRepository;


    @Override
    public User registerNewUserAccount(final UserDto accountDto) {

        final User user = new User();
        user.setNickname(accountDto.getNickname());
        user.setPassword(accountDto.getPassword());
        user.setEmail(accountDto.getEmail());
        return userRepository.save(user);
    }

    @Override
    public void saveRegisteredUser(final User user) {
        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(final String email) {
        return userRepository.findByEmail(email);
    }

    private boolean emailExists(final String email) {
        return userRepository.findByEmail(email) != null;
    }

}