document.addEventListener("DOMContentLoaded", function () {
  fetchData();
});

function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayData(data) {
  const userDataDiv = document.getElementById("userData");

  data.data.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
                    <img src="${user.avatar}" alt="User Image">
                    <p>Email: ${user.email}</p>
                `;
    userDataDiv.appendChild(userDiv);
  });
}
