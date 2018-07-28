function validate(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if(username =="admin" && password == "admin")
    {
        alert("Login succesful");
    }
    else
    {
        alert("Login unsuccessful");
    }
    return false;
}