//import * as adata from './myScript1';

var globalvariable;

function getData(method, url) {
    const xhr = new XMLHttpRequest();
    var d;
    xhr.open(method, url);
    xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ');
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            d = xhr.response
            //console.log(d);
            if (d.length > 0) {
                var temp = "";

                d.forEach((u) => {
                    temp += "<tr>";
                    temp += "<td class='font-weight-bold font-italic'>" + u.id + "</td>";
                    temp += "<td class='a font-italic' id=n" + u.id + ">" + u.name + "</td>";
                    temp += "<td class='b font-italic' id=e" + u.id + ">" + u.expiryDate + "</td>";
                    temp += "<td class='c font-italic' id=s" + u.id + ">" + u.status + "</td><td><button class='btn-outline-warning edit font-italic' id=edit" + u.id + " value='edit' onclick='edit_row(" + u.id + ")'>Edit</button></td><td><button class='btn-danger font-italic' onclick='deleteData(" + u.id + ")'>Delete</button></td></tr>";
                });
                window.document.getElementById("data1").innerHTML = temp
            }
        }

    };
    xhr.send();

}
const url = 'http://34.71.224.0:8080/api/tasks';
getData('GET', url);
//=========================================================================================================================================================

function sendData(na,exp,st) {
    //  const xhr = new XMLHttpRequest();
    //  //xhr.withCredentials = true;

    //  xhr.open('POST', url1, true);
    //  //xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ');
    //  xhr.setRequestHeader('content-Type', 'application/json');
    //  xhr.responseType = 'JSON';
    //  xhr.onload = () => {
    //      if (xhr.status == 200 && xhr.readyState == 4) {
    //          var d = xhr.response;
    //          console.log(d);
    //          console.log(xhr.status);
    //      };
    //      xhr.onerror = () => {
    //          console.log("Error")
    //      }
    // xhr.send(JSON.stringify(body));

    //     }

     var myHeaders = new Headers();
     myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ");
     myHeaders.append("Content-Type", "application/json");

     var raw = JSON.stringify({"name":na,"expiryDate":exp,"status":st});

     var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow'
     };

 fetch("http://34.71.224.0:8080/api/tasks", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));


   const url = 'http://34.71.224.0:8080/api/tasks';
   getData('GET', url);

  


}
function DisplayTask() {
    var fdata= readFormData();
    var na=fdata.taskname;
    var exp=fdata.expiry_date;
    var st=fdata.Status;
    console.log(fdata.taskname);
    console.log(fdata.expiry_date);
    console.log(fdata.Status);
   
    //const url1 = 'http://34.71.224.0:8080/api/tasks';
    sendData(na,exp,st);
    

}

function readFormData(){
    var formData={};

    formData["taskname"]=document.myform1.taskname.value;
    formData["expiry_date"]=document.myform1.expiry_date.value;
    formData["Status"]=document.myform1.Status.value;
    return formData;

}


//---------------------------------------------------------------------------------------------------------------------


function deleteData(id) {
    const xhr = new XMLHttpRequest();
    //debugger
    xhr.open('DELETE', 'http://34.71.224.0:8080/api/tasks' + '/' + id, true);
    xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ');
    xhr.onload = function () {
        // var users = JSON.parse(xhr.response);
        // if (xhr.readyState == 4 && xhr.status == 200) {
        //     console.table(users);
        // } else {
        //     console.log("error");
        // }

        console.log('success');
        const url = 'http://34.71.224.0:8080/api/tasks';
        getData('GET', url);
    }
    xhr.send(null);
    xhr.onerror = () => {
        console.log("Error")
    }
}
//------------------------------------------------------------------------------------------------------------------------
//deleteData(69);

// function updateData(url4,id){
//     const xhr = new XMLHttpRequest();
//     xhr.open('PUT', url4+'/'+id,true);
//     xhr.setRequestHeader('Authorization','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ');
// }
//-------------------------------------------------------------------------------------------------------------------------------
function updateTask(fff,tt,ee,ss){
// var url = "http://34.71.224.0:8080/api/tasks/130";

// var data = {};
// data.name = "John2";
// data.expiryDate  = "2021-03-14T13:00:51.447Z";
// data.status="DONE"
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url, true);
// xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ');
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(json);

// var read= readFormData();
// console.log(read.taskname);
// console.log(read.expiry_date);
// console.log(read.Status);
// console.log(read.id)

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzd2FwbmlsIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTYxNzQ1NDIwNH0.ibAWDOWsM3dwV4YqeXtX0pzpCjbEeQeHjWa_gPiORprzHU_iB4VD-mHNfm6kJVWhrzrT3riVvU0qsKrm22EPMQ");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id":fff,"name":tt,"expiryDate":ee,"status":ss});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.71.224.0:8080/api/tasks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  
  const url = 'http://34.71.224.0:8080/api/tasks';
  getData('GET', url);
}

//updateTask();



//-----------------------------------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------------------------
function edit_row(td)
{
    globalvariable=td;
    var e='n';
    var a=e.concat(td);
     e='e';
    var b=e.concat(td);
    e='s';
    var c=e.concat(td);
    //console.log(a,b,c);
    //console.log(document.getElementById(a).innerHTML);
    //console.log(document.getElementById(b).innerHTML);
    //console.log(document.getElementById(c).innerHTML);
 document.myform2.taskname2.value=document.getElementById(a).innerHTML;
 document.myform2.expiry_date2.value=document.getElementById(b).innerHTML;
 document.myform2.Status2.value=document.getElementById(c).innerHTML;
//  console.log(document.myform2.taskname2.value);
//  console.log(document.myform2.expiry_date2.value);
//  console.log(document.myform2.Status2.value);
   var fdata2= readeditFormData();
   console.log(fdata2.taskname2);
   console.log(fdata2.expiry_date2);
   console.log(fdata2.Status2);



}
function readeditFormData(){

    var fff=globalvariable;
    console.log(fff);
    var formData2={};
    debugger
    formData2["taskname2"]=document.myform2.taskname2.value;
    formData2["expiry_date2"]=document.myform2.expiry_date2.value;
    formData2["Status2"]=document.myform2.Status2.value;
    console.log("aaaaaaaaaaa");
   var tt=(formData2.taskname2);
    var ee=(formData2.expiry_date2);
    var ss=(formData2.Status2);
    console.log(tt);
    console.log(ee);
    console.log(ss);
    updateTask(fff,tt,ee,ss);

    return formData2;

}

//----------------------------------------------------------------------------------------------------------------------
function openuserForm() {
    document.getElementById("myuserForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myuserForm").style.display = "none";
  }


function sendUser(a,b,c,d,e){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTc0MzMzOTl9._VY8Ao2E4a4C5_3aWpRh3HzPBJPlQ4SWdzAlMObp89r3rEx2jQXs-x_Lz7ozNDZuIdxI9zuExRUFYCQaYwfRUw");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"login":a,"password":b,"email":c,"firstName":d,"lastName":e});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
     redirect: 'follow'
    };
    //debugger
    fetch("http://34.71.224.0:8080/api/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

  //  sendUser();

  function readuserFormData(){
     var userdata={};

     userdata["login"]=document.getElementById("login").value;
     userdata["password"]=document.getElementById("password").value;
     userdata["email"]=document.getElementById("email").value;
     userdata["firstname"]=document.getElementById("firstname").value;
     userdata["lastname"]=document.getElementById("lastname").value;
     console.log(userdata);
     //sendUser(userdata.login,userdata.password,userdata.email,userdata.firstname,userdata.lastname);

 }

 //---------------------------------------------------------------------------------------------------------------------------

 function authUser(){
    
        var data = JSON.stringify({"username":"Swapnil","password":"12345678"});

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var tt=this.responseText;
                console.log(tt);
                            }
                });


        xhr.open("POST", "http://34.71.224.0:8080/api/authenticate");
        //xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTc0MzMzOTl9._VY8Ao2E4a4C5_3aWpRh3HzPBJPlQ4SWdzAlMObp89r3rEx2jQXs-x_Lz7ozNDZuIdxI9zuExRUFYCQaYwfRUw");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);


}

//authUser();
