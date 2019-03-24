package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagesController {

    @GetMapping(value="/test")
    public String homepage(){
        return "idex.html";
    }

    @GetMapping(value="/")
    public String test(){
        return "gmePage.html";
    }

}
