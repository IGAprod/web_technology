package com.webtech.checkersonline.Service;

import com.webtech.checkersonline.Dto.UserDto;
import com.webtech.checkersonline.Entity.User;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;


public interface IUserService {

    User registerNewUserAccount(UserDto accountDto);

    void saveRegisteredUser(User user);

    User findUserByEmail(String email);

}