package com.webtech.checkersonline.handlers;

import com.webtech.checkersonline.configs.dbConfig;

import java.sql.*;
import java.util.ArrayList;

public class dbHandler extends dbConfig {

    Connection connection;

    public Connection getConnection()
            throws ClassNotFoundException, SQLException {
        String connectionString = "jdbc:mysql://" + dbHost + ":" + dbPort + "/" + dbName + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
        Class.forName("com.mysql.cj.jdbc.Driver");

        connection = DriverManager.getConnection(connectionString, dbUser, dbPass);
        return connection;
    }

    public void addUser(String email, String nickname, String password) throws SQLException, ClassNotFoundException {
        String insert = "INSERT INTO user(email,nickname,password,rating) VALUES (?,?,?,?)";
        PreparedStatement ps = getConnection().prepareStatement(insert);
        ps.setString(1, email);
        ps.setString(2, nickname);
        ps.setString(3, password);
        ps.setInt(4, 1500);
        ps.executeUpdate();
    }

    public ArrayList<String[]> getUsers() throws SQLException, ClassNotFoundException {
        ArrayList<String []> list = new ArrayList<>();
        String select = "select nickname,rating from user";
        Connection connection = getConnection();
        Statement statement = null;
        ResultSet rs = null;

        try{
            statement = connection.createStatement();
            rs = statement.executeQuery(select);

            while (rs.next())
            {
                StringBuilder stringBuilder = new StringBuilder();
                int numColumns = rs.getMetaData().getColumnCount();
                String[] key_array = new String[numColumns];

                for ( int i = 1 ; i <= numColumns ; i++ ) {

                    Object obj = rs.getObject(i);
                    stringBuilder.append( (obj != null) ? obj.toString() : "null");
                    String str = stringBuilder.toString();
                    key_array[i-1] = str;
                    stringBuilder = new StringBuilder();
                }

                list.add(key_array);
            }

            statement.close();
            connection.close();
            return list;
        }
        catch (Exception e){
            System.out.println("Zdes");
            System.out.println(e.getMessage());
            return list;
        }
    }
}


