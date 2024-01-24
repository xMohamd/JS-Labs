// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Select the button element with the class "add-btn"
  let addBtn = document.querySelector(".add-btn");

  // Define a function to attach event listeners to task actions
  function attachTaskEventListeners(taskListItem) {
    // Select the elements within the task to add event listeners
    let taskDone = taskListItem.querySelector(".task-done");
    let taskDelete = taskListItem.querySelector(".task-delete");

    // Add an event listener for marking a task as done
    taskDone.addEventListener("click", (e) => {
      e.preventDefault();
      const taskParent = taskDone.parentElement.parentElement;
      taskParent.style.backgroundColor = "#dff0d8";
    });

    // Add an event listener for deleting a task
    taskDelete.addEventListener("click", (e) => {
      e.preventDefault();
      const taskParent = taskDelete.parentElement.parentElement;
      taskParent.remove();
      updateTasksVisibility(); // Call the function to update tasks visibility after deletion
    });
  }

  // Add an event listener for the button click to add a new task
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the task name from the input field
    let taskName = document.querySelector("#add-task-name").value;

    // Check if the task name is empty and return if true
    if (!taskName) return;

    // Select the container for tasks
    const tasksContainer = document.querySelector(".tasks");

    // Create a new list item element for the task
    const taskListItem = document.createElement("li");
    taskListItem.classList.add("task");

    // Populate the list item with HTML content representing the task
    taskListItem.innerHTML = `
      <span class="task-name">${taskName}</span>
      <div class="task-actions">
        <button class="task-done">&#10003;</button>
        <button class="task-delete">&#10005;</button>
      </div>`;

    // Append the new task to the tasks container
    tasksContainer.appendChild(taskListItem);

    // Attach event listeners to the new task
    attachTaskEventListeners(taskListItem);

    // Call the function to update tasks visibility after addition
    updateTasksVisibility();

    // Clear the input field after adding the task
    document.querySelector("#add-task-name").value = "";
  });

  // Define a function to update the visibility of the tasks container
  function updateTasksVisibility() {
    const tasksContainer = document.querySelector(".tasks");

    // Select all existing task elements
    const tasks = document.querySelectorAll(".task");

    // Check if there are tasks; if true, display the container, otherwise hide it
    if (tasks.length > 0) {
      tasksContainer.style.display = "block";
    } else {
      tasksContainer.style.display = "none";
    }
  }

  // Select all existing task elements
  const existingTasks = document.querySelectorAll(".task");

  // Attach event listeners to existing tasks
  existingTasks.forEach((taskListItem) => {
    attachTaskEventListeners(taskListItem);
  });

  // Perform an initial check for tasks visibility
  updateTasksVisibility();
});
