function displayAuthdata(){
    var userdata= readauthFormData();
    console.log(userdata.login);
    console.log(userdata.password);
}

function readauthFormData(){
    var auth={};

    auth["login"]=document.authform.login.value;
    auth["password"]=document.authform.password.value;
        return auth;
}

export {displayAuthdata,readauthFormData};



