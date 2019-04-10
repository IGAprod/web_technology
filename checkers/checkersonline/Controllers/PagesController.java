package com.webtech.checkersonline.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

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
