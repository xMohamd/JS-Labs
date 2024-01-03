let contacts = [];
function addContact() {
  let name = prompt("Enter name");
  let phone = prompt("Enter phone");
  let contact = {
    name: name,
    phone: phone,
  };
  contacts.push(contact);
}

function searchContact() {
  let search = prompt("Enter search (name or phone): ");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === search || contacts[i].phone === search) {
      alert("Name: " + contacts[i].name + "\nPhone: " + contacts[i].phone);
      return;
    }
  }
  alert("Contact not found");
}

function phoneBook() {
  let operation;
  do {
    operation = prompt("Enter operation (add, search, exit): ");
    if (operation === "add") {
      addContact();
    } else if (operation === "search") {
      searchContact();
    } else if (operation === "exit") {
      return;
    } else {
      alert("Invalid operation");
    }
  } while (operation !== "exit");
}
phoneBook();
