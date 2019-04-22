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
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class PagesController {

    dbHandler db = new dbHandler();
    EmailValid emailValid = new EmailValid();
    List<String[]> list = new ArrayList<String[]>();


    @GetMapping(value = "/main/getUser")
    public Response getUsers() throws SQLException, ClassNotFoundException {

        ArrayList<String> httpsList = new ArrayList<>();
        HashMap<String,String> hm = new HashMap<>();

        URL url = null;
        try {
            url = new URL("https://www.youtube.com");
            LineNumberReader reader = new LineNumberReader(new InputStreamReader(url.openStream()));
            String string = reader.readLine();

            while(string!=null){
                string = reader.readLine();
                System.out.println(string);
            }
            reader.close();

                while(string!=null){
          //      Pattern pattern = Pattern.compile("\"https://(.*?)\"");
                Pattern pattern = Pattern.compile("<img data-ytimg=\"1\" src=\"/yts/img/pixel-vfl3z5WfW.gif\" width=\"196\" height=\"110\" onload=\";window.__ytRIL &amp;&amp; __ytRIL(this)\" data-thumb=\"(.*?) alt=\"\" >");
                Pattern patternHttps = Pattern.compile("\"https://(.*?)\"");
                Matcher matcher = pattern.matcher(string);
                Matcher matHttps;
                if(matcher.find()){
                    for(int i = 0; i < matcher.groupCount(); i++) {
                        matHttps = patternHttps.matcher(matcher.group(i));
                        if(matHttps.find()){
                            for(int j = 0; j < matHttps.groupCount();i++){
                                hm.put("https://www.youtube.com",matHttps.group(j));
                            }

                        }
                  //      httpsList.add(matcher.group(i));
                        System.out.println(matcher.group(i));
                    }
                }
                matcher.reset();
                string = reader.readLine();
            }
            reader.close();

         /*   while(string!=null){
          //      Pattern pattern = Pattern.compile("\"https://(.*?)\"");
                Pattern pattern = Pattern.compile("<img data-ytimg=\"1\" src=\"/yts/img/pixel-vfl3z5WfW.gif\" width=\"196\" height=\"110\" onload=\";window.__ytRIL &amp;&amp; __ytRIL(this)\" data-thumb=\"(.*?) alt=\"\" >");
                Pattern patternHttps = Pattern.compile("\"https://(.*?)\"");
                Matcher matcher = pattern.matcher(string);
                if(matcher.find()){
                    for(int i = 0; i < matcher.groupCount(); i++) {
                        httpsList.add(matcher.group(i));
                        System.out.println(matcher.group(i));
                    }
                }
                matcher.reset();
                string = reader.readLine();
            }
            reader.close();*/

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

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


