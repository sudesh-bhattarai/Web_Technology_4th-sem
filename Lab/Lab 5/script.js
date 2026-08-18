const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const phoneno = document.getElementById("pn");
const emailInput = document.getElementById("email");
const password = document.getElementById("pw");
const registerBtn = document.getElementById("register");
const output = document.querySelector(".output");
const h1 = document.querySelector("#h1");
console.log("hehehehe");
registerBtn.addEventListener("click", function () {
    const nameRegex = /^[A-Za-z\s]+$/;          
    const emailRegex = /^\S+@\S+\.\S+$/;        
    const phoneRegex = /^[0-9]{10}$/;           
    const passwordRegex = /^[A-Za-z0-9]{8,16}$/;
    const ageRegex = /^(1[89]|[2-9][0-9])$/;   
    if (!nameRegex.test(nameInput.value)) {
        alert("Invalid name: only letters and spaces allowed.");    
        return
    }
    if (!emailRegex.test(emailInput.value)) {
        alert("Invalid email format.");return;
    }
    if (!phoneRegex.test(phoneno.value)) {
        alert("Phone number must be exactly 10 digits.");return;
    }
    if (!passwordRegex.test(password.value)) {
        alert("Password must be 8–16 characters, letters and digits only.");return;
    }
    if (!ageRegex.test(ageInput.value)) {
        alert("Age must be between 18 and 99.");return;
    }

    if (nameInput.value.trim() === "" ||ageInput.value === "" ||emailInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    output.innerHTML =
    "Name: " + nameInput.value + "<br>" +
    "Email: " + emailInput.value + "<br>" +
    "Phone No: " + phoneno.value + "<br>" +
    "Password: " + password.value + "<br>" +
    "Age: " + ageInput.value + "<br>";
h1.textContent = "Registration Successful!";
h1.style.color = "green";
});
