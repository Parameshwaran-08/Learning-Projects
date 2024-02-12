document.getElementById("Register").onclick = function () {
    document.getElementById("table").style.display = "block";
  
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var fullname = row.insertCell(0);
    var username = row.insertCell(1);
    var email = row.insertCell(2);
    var number = row.insertCell(3);
    var password = row.insertCell(4);
    fullname.innerHTML = document.getElementById("fullname").value;
    username.innerHTML = document.getElementById("username").value;
    email.innerHTML = document.getElementById("email").value;
    number.innerHTML = document.getElementById("number").value;
    password.innerHTML = document.getElementById("password").value;
  
    return false;
  }