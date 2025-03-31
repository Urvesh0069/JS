let users = JSON.parse(localStorage.getItem("users")) || [];

const isExist = (email) => {
  return users.find((ele) => ele.email === email);
};

const handleSubmit = (e) => {
  e.preventDefault();

  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

//   users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));

  if (isExist(user.email)) {
    alert("User already exists");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully");
    document.getElementById("signin").reset();
  }
};

document.getElementById("signin").addEventListener("submit", handleSubmit);

