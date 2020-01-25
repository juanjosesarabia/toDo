localStorage["host"] = "http://192.168.0.108/TechnicalTestToDo/"


$('#login').submit(function () {// 

    // recolecta datos ingresados por el usuario en el login
    var dataUser = $("#login-user").val();
    var dataPassword = $("#login-password").val();
      
    $.post(localStorage["host"] + "php/login.php", {user: dataUser, password: dataPassword}, null ,"json" )
          .done(function (responseServer){
            
              if (responseServer.validation == "ok") {
               
                  window.location.href = 'view/home.html';

              } else {

                  alert("Data entered Incorrect, enter again");
              }
          })
  return false;
});