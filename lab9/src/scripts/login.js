// Get the submit button element
const submitBtn = document.getElementById("submit");

// Add click event listener to the submit button
submitBtn.addEventListener("click", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the email and password values
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Regex for email and password
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Password regex

  if (emailRegex.test(username) && passwordRegex.test(password)) {
    // Display the login message
    displayMsg("Login successful");
  } else if (emailRegex.test(username) && !passwordRegex.test(password)) {
    // Display the login message
    displayMsg("Invalid password format");
  } else if (!emailRegex.test(username) && passwordRegex.test(password)) {
    // Display the login message
    displayMsg("Invalid email format");
  } else {
    // Display the login message
    displayMsg("Invalid email and password format");
  }
});

// Function to display the login message
function displayMsg(msg) {
  const loginMsg = document.getElementById("loginMessage"); //
  loginMsg.innerHTML = msg; // Set the message text
  loginMsg.style.display = "block"; // Show the message
}
