package com.webtech.checkersonline.Dto;


import com.webtech.checkersonline.Validations.PasswordMatches;
import com.webtech.checkersonline.Validations.ValidEmail;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@PasswordMatches
public class UserDto {
    @NotNull
    @NotEmpty
    private String nickname;

    @NotNull
    @NotEmpty
    private String password;
    private String matchingPassword;

    @ValidEmail
    @NotNull
    @NotEmpty
    private String email;

    public UserDto(){

    }

    public UserDto(@NotNull @NotEmpty String nickname, @NotNull @NotEmpty String password, String matchingPassword, @NotNull @NotEmpty String email) {
        this.nickname = nickname;
        this.password = password;
        this.matchingPassword = matchingPassword;
        this.email = email;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
