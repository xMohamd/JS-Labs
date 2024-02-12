document.addEventListener("DOMContentLoaded", function () {
  let addBtn = document.querySelector(".add-btn");

  function attachTaskEventListeners(taskListItem) {
    let taskDone = taskListItem.querySelector(".task-done");
    let taskDelete = taskListItem.querySelector(".task-delete");

    taskDone.addEventListener("click", (e) => {
      e.preventDefault();
      const taskParent = taskDone.parentElement.parentElement;
      taskParent.style.backgroundColor = "#dff0d8";
      updateLocalStorage();
    });

    taskDelete.addEventListener("click", (e) => {
      e.preventDefault();
      const taskParent = taskDelete.parentElement.parentElement;
      taskParent.remove();
      updateLocalStorage();
      updateTasksVisibility();
    });
  }

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let taskName = document.querySelector("#add-task-name").value;
    if (!taskName) return;

    const tasksContainer = document.querySelector(".tasks");
    const taskListItem = document.createElement("li");
    taskListItem.classList.add("task");

    taskListItem.innerHTML = `
      <span class="task-name">${taskName}</span>
      <div class="task-actions">
        <button class="task-done">&#10003;</button>
        <button class="task-delete">&#10005;</button>
      </div>`;

    tasksContainer.appendChild(taskListItem);

    attachTaskEventListeners(taskListItem);
    updateLocalStorage();
    updateTasksVisibility();

    document.querySelector("#add-task-name").value = "";
  });

  function updateTasksVisibility() {
    const tasksContainer = document.querySelector(".tasks");
    const tasks = document.querySelectorAll(".task");
    if (tasks.length > 0) {
      tasksContainer.style.display = "block";
    } else {
      tasksContainer.style.display = "none";
    }
  }

  function updateLocalStorage() {
    const tasks = document.querySelectorAll(".task-name");
    const tasksArray = [];
    tasks.forEach((task) => tasksArray.push(task.innerText));
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }

  const existingTasks = document.querySelectorAll(".task");
  existingTasks.forEach((taskListItem) => {
    attachTaskEventListeners(taskListItem);
  });

  updateTasksVisibility();

  // Load tasks from local storage on page load
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    savedTasks.forEach((taskName) => {
      const tasksContainer = document.querySelector(".tasks");
      const taskListItem = document.createElement("li");
      taskListItem.classList.add("task");
      taskListItem.innerHTML = `
        <span class="task-name">${taskName}</span>
        <div class="task-actions">
          <button class="task-done">&#10003;</button>
          <button class="task-delete">&#10005;</button>
        </div>`;
      tasksContainer.appendChild(taskListItem);
      attachTaskEventListeners(taskListItem);
    });
    updateTasksVisibility();
  }
});
