package com.webtech.checkersonline.Controllers;

import com.webtech.checkersonline.Entity.Response;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class WebController {

    @GetMapping(value = "/")
    public String mainpage() {
        return "main.html";
    }

    @GetMapping(value = "/main")
    public String homepage() {
        return "index.html";
    }

    @GetMapping(value = "/game")
    public String game() {
        return "gamePage.html";
    }

    @GetMapping(value = "/registration")
    public String registration() {
        return "registration.html";
    }


}