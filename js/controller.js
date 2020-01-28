localStorage["host"] = "http://192.168.0.3/TechnicalTestToDo/"


$('#login').submit(function () {// 

    // 
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


var dropdown = document.getElementsByClassName("active-droptown1");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


function toList() {
  
    setTimeout(() => {
      $.getJSON(localStorage["host"] + "php/list.php")
          .done(function (responseServer){
            
              if (responseServer.validation == "ok") {

               let arr = responseServer.data;
               let amount = responseServer.n;
                
               for (var i = 0; i < amount; i++) {

               let  nameTask = arr[i].nameTask;
               let  state = arr[i].state;
               let  name_responsible = arr[i].name_responsible;
              

                                    var newDiv= document.createElement("div");
                                        newDiv.setAttribute("class","card m-auto");
                                    var newDivTbody= document.createElement("div");
                                    newDivTbody.setAttribute("class","card-body"); 

                                    var newNameTask= document.createElement("h6");
                                    newNameTask.setAttribute("id","nameTask"+i); 
                                    newNameTask.innerHTML=nameTask;

                                    var nameResponsible= document.createElement("p");
                                    nameResponsible.setAttribute("id","nameResponsible"+i); 
                                    nameResponsible.innerHTML=name_responsible;                                
                                    
                                  if(state =="open"){
                                    var divOpen = document.getElementById("div-open");
                                        divOpen.appendChild(newDiv);
                                        newDiv.appendChild(newDivTbody);
                                        newDivTbody.appendChild(newNameTask);
                                        newDivTbody.appendChild(nameResponsible);

                                  }else if(state =="In-Progress"){
                                    var divOpen = document.getElementById("div-Progress");
                                        divOpen.appendChild(newDiv);
                                        newDiv.appendChild(newDivTbody);
                                        newDivTbody.appendChild(newNameTask);
                                        newDivTbody.appendChild(nameResponsible);

                                  }else if(state =="Completed"){
                                    var divOpen = document.getElementById("div-completed");
                                        divOpen.appendChild(newDiv);
                                        newDiv.appendChild(newDivTbody);
                                        newDivTbody.appendChild(newNameTask);
                                        newDivTbody.appendChild(nameResponsible);

                                  }else if(state =="Archived"){
                                    var divOpen = document.getElementById("div-Archived");
                                        divOpen.appendChild(newDiv);
                                        newDiv.appendChild(newDivTbody);
                                        newDivTbody.appendChild(newNameTask);
                                        newDivTbody.appendChild(nameResponsible);
                                  }
                                    

          }//
               
                 

              } else {

                  alert("Data entered Incorrect, enter again");
              }
          })
    }, 2000);
 
}



