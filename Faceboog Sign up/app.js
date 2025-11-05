// Function: Din generate karna month aur year ke hisaab se
function populateDays() {
  let daySelect = document.getElementById("day");
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  // Month ke number nikalna (0=Jan, 1=Feb...)
  let monthIndex = new Date(Date.parse(month + " 1, " + year)).getMonth();

  // Kitne din is month me hain (0 = last day of previous month)
  let daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Purana data clear //
  daySelect.innerHTML = "";

  // Naya data add //
  for (let i = 1; i <= daysInMonth; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }
}

// Jab bhi month ya year change ho → days update karo
document.getElementById("month").addEventListener("change", populateDays);
document.getElementById("year").addEventListener("change", populateDays);

// Page load par bhi set karo //
window.onload = populateDays;


// Form submit validation //
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // page reload rokne ke liye

  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  //  Validation
  if (!fname) { alert("Please enter First Name"); return; }
  if (!lname) { alert("Please enter Surname"); return; }
  if (!day || !month || !year) { alert("Please select complete Date of Birth"); return; }
  if (!gender) { alert("Please select Gender"); return; }
  if (!email) { alert("Please enter Mobile number or Email"); return; }
  if (!password) { alert("Please enter a Password"); return; }

  //  Console + Alert output //
  console.log("First Name:", fname);
  console.log("Last Name:", lname);
  console.log("Date of Birth:", day, month, year);
  console.log("Gender:", gender.value);
  console.log("Email/Phone:", email);
  console.log("Password:", password);

  alert(
    "Signup Successful!\n\n" +
    "First Name: " + fname + "\n" +
    "Surname: " + lname + "\n" +
    "Date of Birth: " + day + " " + month + " " + year + "\n" +
    "Gender: " + gender.value + "\n" +
    "Email/Phone: " + email + "\n" +
    "Password: " + password
  );
});
