$( document ).ready(function() {
    $("#btn").click(
        function(){
            sendForm()
            console.log("dasdasd");
            return false;
        }
    );
});


function sendForm() {

    var obj = $('#registration').serializeArray();
    $.ajax({
        url:"http://localhost:8080/registration",
        type:"POST",
        data: JSON.stringify(obj),
        contentType: 'application/json',

        success: function(result) {
          console.log(result);
        },
        error: function (e) {
            alert("Error!")
            console.log("ERROR: ", e);
        }
    });
}