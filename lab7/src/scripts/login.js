// Get the submit button element
const submitBtn = document.getElementById("submit");

// Add click event listener to the submit button
submitBtn.addEventListener("click", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username is "admin" and password is "123"
  if (username === "admin" && password === "123") {
    displayMsg("Welcome,<br>Redirecting to Todo List (Part 2)..."); // Display "Welcome" message

    setTimeout(function () {
      window.location.href = "todoList.html";
    }, 2000);
  } else if (username === "admin" && password !== "123") {
    displayMsg("Incorrect password"); // Display "Incorrect password" message
  } else if (username == "" && password == "") {
    displayMsg("Please enter username and password"); // Display "Please enter username and password" message
  } else if (username !== "admin" && password === "") {
    displayMsg("Please enter password"); // Display "Please enter password" message
  } else if (username === "" && password !== "123") {
    displayMsg("Please enter username"); // Display "Please enter password" message
  } else {
    displayMsg("Not registered"); // Display "Not a valid user" message
  }
});

// Function to display the login message
function displayMsg(msg) {
  const loginMsg = document.getElementById("loginMessage"); //
  loginMsg.innerHTML = msg; // Set the message text
  loginMsg.style.display = "block"; // Show the message
}
