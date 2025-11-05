function signUp() {
    const fullname = document.getElementById("fullname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

if (!fullname || !surname || !email || !password) {
 alert("Please fill all fields");
return;
}

    let users = JSON.parse(localStorage.getItem("users")) || [];
            
    const emailExists = users.some(user => user.email === email);
if (emailExists) {
alert("Email already exists");
return;
 }
users.push({fullname,surname,email,password});

    localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful!");
    document.getElementById("signupForm").reset();
  document.getElementById("chk").checked = true;
}

function signIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
if (!email || !password) {
 alert("Please fill all fields");
return;
}
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
            
if (user) {
alert(`Welcome back, ${users.fullname} ${users.surname}!`);
} else {
alert("Invalid email or password");
            }
document.getElementById("loginForm").reset();
alert("Kaam Hogya AB Shaat Hoja")

}