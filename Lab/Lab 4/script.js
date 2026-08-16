function registerStudent(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let department=document.getElementById("department").value;
    if(name=="" || age=="" || email=="" || department==""){
        alert("Please fill all fields.");
        return;
    }
    let output=
    "<b>Full Name :</b> "+name+"<br><br>"+
    "<b>Age :</b> "+age+"<br><br>"+
    "<b>Email :</b> "+email+"<br><br>"+
    "<b>Department :</b> "+department;
    document.getElementById("output").innerHTML=output;
}
function clearData(){
    document.getElementById("output").innerHTML=
    "No student registered yet.";
}