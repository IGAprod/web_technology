package com.webtech.checkersonline.Entity;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(columnDefinition = "integer auto_increment")
    private Integer id;
    @Column
    private String nickname;
    @Column
    private String email;

    @Column(length=60)
    private String password;

    @Column(length = 7)
    private Integer rating;

    public User(){
    }

    public User(String nickname, String email, String password, Integer rating) {
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.rating = rating;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}