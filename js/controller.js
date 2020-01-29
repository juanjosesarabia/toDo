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
                                    
                                  if(state =="Open"){
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


$('#createTask').submit(function () {
 
var createNameT= $("#createNameT").val();
var state = $("#createSelectState").val();
var responsible = $("#createResponsible").val();

  $.post(localStorage["host"] + "php/createTask.php", {name: createNameT, state: state, responsible: responsible},null, "json")
  .done(function (responseServer) {
   
        if (responseServer.validation == "ok") {
          alert(responseServer.message);
         // window.location.href = 'createTask.html';
        } else {
            alert(responseServer.message);
        }
    })                   
    return false; 
});

function listTask(){ //data list of name Task

  $.getJSON(localStorage["host"] + "php/listTask.php")
            .done(function (responseServer) {
                  var nameT;
                if (responseServer.validation=="ok") {
                    let arr = responseServer.data;
                    let  amount = responseServer.n;                   
                    

                     for (var i = 0; i < amount; i++) {
                       let  nameT = arr[i].nameTask;

                                    var x = document.createElement("OPTION");
                                    var t = document.createTextNode(nameT);
                                    //x.setAttribute("value", i);
                                    x.appendChild(t);
                                    document.getElementById("searchTask").appendChild(x);
          }//
                }else{
                  alert(responseServer.message);
                }
               });

            }

function searchT(){ // search Task information
 
  var task = $("#searchTas").val();

  if (task.length == 0) {
    alert("You must select a task");
       } else {
  
  $.getJSON(localStorage["host"] + "php/searchTask.php", { task: task})
    .done(function (responseServer) {
               
          if (responseServer.validation == "ok") {            
            let   data = responseServer.task;
            let   nameT = document.getElementById("searchNameT");
                  nameT.innerHTML =data[0].nameTask;
            let   state = document.getElementById("searchSelectState");
                  state.innerHTML =data[0].state;
            let   resp = document.getElementById("searchResponsible");
                  resp.innerHTML=data[0].name_responsible;
                                
          } else {
              alert(responseServer.message);
          }
      })              
       }}


 function searchStatus(){  //Validate name Task and search Status
 
  var task = $("#searchTas").val();

  if (task.length == 0) {
    alert("You must select a task");
       } else {
  
  $.getJSON(localStorage["host"] + "php/searchTask.php", { task: task})
    .done(function (responseServer) {
               
          if (responseServer.validation == "ok") {            
            let   data = responseServer.task;
            let   nameT = document.getElementById("editTaskNameT");
                  nameT.innerHTML =data[0].nameTask;
            let   state = document.getElementById("editTaskSelectState"); 
                  state.value =data[0].state;
            let   resp = document.getElementById("editTaskResponsible");
                  resp.innerHTML=data[0].name_responsible;

                  document.getElementById("editTaskSelectState").removeAttribute("disabled");
                  document.getElementById("assignStatus").removeAttribute("disabled");
                  
                                
          } else {
              alert(responseServer.message);
          }
      })              
       }}

      

      $('#editTaskStatus').submit(function () {   //Update state
      
        var task= $("#editTaskNameT").text();    
        var state = $("#editTaskSelectState").val();
         
        
        $.post(localStorage["host"] + "php/updateState.php", {task: task, state: state},null)
          .done(function (responseServer) {
              alert(responseServer);
           
                if (responseServer.validation == "ok") {
                  alert(responseServer.message);
                 
                } else {
                    alert(responseServer.message);
                }
            })                   
                   

        }); 


function listUsers(){

          $.getJSON(localStorage["host"] + "php/listUser.php")
          .done(function (responseServer) {
                
              if (responseServer.validation=="ok") {
                  let arr = responseServer.data;
                  let  amount = responseServer.n;                   
                  

                   for (var i = 0; i < amount; i++) {
                     let  nameT = arr[i].name_responsible;

                                  var x = document.createElement("p");
                                  x.setAttribute("class","border border-light"); 
                                  var t = document.createTextNode(nameT);
                                  //x.setAttribute("value", i);
                                  x.appendChild(t);
                                  document.getElementById("listUser").appendChild(x);
        }//
              }else{
                alert(responseServer.message);
              }
             });
         
        }



        function searchTaskAssign(){  //Validate name Task and Assign responsable
 
          var task = $("#searchTaskAssing").val();
        
          if (task.length == 0) {
            alert("You must select a task");
               } else {
          
          $.getJSON(localStorage["host"] + "php/searchTask.php", { task: task})//validate data Task
            .done(function (responseServer) {
                       
                  if (responseServer.validation == "ok") {            
                    let   data = responseServer.task;
                    let   nameT = document.getElementById("assignNameT");
                          nameT.innerHTML =data[0].nameTask;
                    let   state = document.getElementById("assignSelectState"); 
                          state.innerHTML =data[0].state;

                    $.getJSON(localStorage["host"] + "php/listResponsible.php")//validate select of responsible
                          .done(function (responseServer) {
                                var nameT;
                              if (responseServer.validation=="ok") {
                                  let arr = responseServer.data;
                                  let  amount = responseServer.n;                   
                                  
              
                                   for (var i = 0; i < amount; i++) {
                                     let  nameT = arr[i].nameResponsible;
              
                                                  var x = document.createElement("OPTION");
                                                  var t = document.createTextNode(nameT);
                                                  //x.setAttribute("value", i);
                                                  x.appendChild(t);
                                                  document.getElementById("assignResponsible").appendChild(x);
                        }//
                              }else{
                                alert(responseServer.message);
                              }
                             });
                  
                    let   resp = document.getElementById("assignResponsible");
                          resp.value=data[0].name_responsible;
        
                          document.getElementById("assignResponsible").removeAttribute("disabled");
                          document.getElementById("assignTaskResponsible").removeAttribute("disabled");
                          
                                        
                  } else {
                      alert(responseServer.message);
                  }
              })              
               }}
        
  $('#assignTask').submit(function () {
 
                var NameT= $("#assignNameT").text();
                var state = $("#assignSelectState").text();
                var responsible = $("#assignResponsible").val();
                
                  $.post(localStorage["host"] + "php/assignTask.php", {name: NameT, state: state, responsible: responsible},null, "json")
                  .done(function (responseServer) {
                   
                        if (responseServer.validation == "ok") {
                          alert(responseServer.message);
                          window.location.href = 'assignTask.html';
                        } else {
                            alert(responseServer.message);
                        }
                    })                   
                    return false; 
                });