function login() {
  let username = prompt("Enter your username: ");
  let password = prompt("Enter your password: ");
  if (username == "admin" && password == "421$$") {
    alert("Welcome login success");
  } else if (username != "admin" && password != "421$$") {
    alert("Username and password are incorrect");
  } else if (username != "admin") {
    alert("Username is incorrect");
  } else {
    alert("Password is incorrect");
  }
}
login();
