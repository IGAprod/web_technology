package com.web_tech.checkers.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagesController {

    @GetMapping(value="/")
    public String homepage(){
        return "index.html";
    }

    @GetMapping(value="/game")
    public String game(){
        return "gamePage.html";
    }

}
