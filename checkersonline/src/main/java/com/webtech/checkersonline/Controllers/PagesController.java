package com.webtech.checkersonline.Controllers;

import com.webtech.checkersonline.Entity.Response;
import com.webtech.checkersonline.Validations.EmailValid;
import com.webtech.checkersonline.handlers.dbHandler;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class PagesController {

    dbHandler db = new dbHandler();
    EmailValid emailValid = new EmailValid();
    List<String[]> list = new ArrayList<String[]>();


    @GetMapping(value = "/main/getUser")
    public Response getUsers() throws SQLException, ClassNotFoundException {

        list.clear();
        list = db.getUsers();

        Response result;
        if(list.size() == 0){
            result = new Response("NOT","NOT");
            return result;
        }
            result = new Response("Done",list);
        return  result;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Response Request(@RequestBody String request) throws JSONException, SQLException, ClassNotFoundException {


        JSONArray jsonArray = new JSONArray(request);
        JSONObject nicknameJSON = jsonArray.getJSONObject(0);
        JSONObject emailJson = jsonArray.getJSONObject(1);
        JSONObject passwordJson = jsonArray.getJSONObject(2);
        JSONObject matchPasswordJson = jsonArray.getJSONObject(3);

        String nickname = nicknameJSON.getString("value");
        String email = emailJson.getString("value");
        String password = passwordJson.getString("value");
        String matchPassword = matchPasswordJson.getString("value");

        if (emailValid.validateEmail(email) == false || emailValid.validatePassword(password, matchPassword) == false) {
            Response response = new Response("NOT", "ValidError");
            return response;
        }

        System.out.println(nickname);
        System.out.println(email);
        System.out.println(password);
        System.out.println(matchPassword);

        db.addUser(email, nickname, password);

        System.out.println(request);
        Response response = new Response("DONE","DONE");
        return  response;

        // "done";
    }
}


