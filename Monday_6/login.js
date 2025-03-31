let users = JSON.parse(localStorage.getItem("users")) || [];

const isExist = (email) => {
  return users.find((ele) => ele.email === email);
};

const handleSubmit = (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userdata = isExist(email);
  if (userdata.found) {
    if (userdata.user.password === password) {
      alert("Login successful");
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("User not found");
  }

  document.getElementById("login").reset();
};

document.getElementById("login").addEventListener("submit", handleSubmit);
