
$(document).ready(function(){

    ajaxGet();

    function ajaxGet() {
        $.ajax({
            type: "GET",
            url:  "http://localhost:8080/main/getUser",
            success: function (result) {
                if(result.status == "Done"){
                    var personList = "";

                    var temp = "<table border='1'; class='table'>";
                    temp +=" <tr> <th>Игроки</th> <th>Рейтинг</th> </tr>";
                    $.each(result.data,function (i,person) {
                        temp += "<tr>";
                        for(var  i = 0; i < person.length; i++){

                            temp += "<td>" + person[i] + "</td>";
                        }
                        temp +="</tr>";
                    });

                    temp += "</table>";
                    document.getElementById('view').innerHTML = temp;
                    console.log("Success: ", result);
                }else{
                    $("#view").html("<strong>Error</strong>");
                    console.log("Fail: ", result);
                }
            },
            error : function (e) {
                $("#view").html("<strong>Error</strong>");
                console.log("ERROR",e);
            }
        });
    }
})

