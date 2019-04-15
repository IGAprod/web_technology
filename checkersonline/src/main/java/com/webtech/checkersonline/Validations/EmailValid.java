package com.webtech.checkersonline.Validations;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValid {
    private Pattern pattern;
    private Matcher matcher;
    private static final String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

    public boolean validateEmail(final String email) {
        pattern = Pattern.compile(EMAIL_PATTERN);
        matcher = pattern.matcher(email);
        return matcher.matches();
    }

    public boolean validatePassword(final String password, final String matchPassword){
        if(password.equals(matchPassword)){
            return true;
        }
        return false;
    }
}