document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskListElement = document.getElementById("list");

  // Add Form Behavior Here!
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value;
    if (taskText) {
      const listItem = document.createElement("li");
      listItem.className = "task-item";
      listItem.innerText = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => listItem.remove());

      listItem.appendChild(deleteBtn);

      taskListElement.appendChild(listItem);

      taskInput.value = "";
    }
  });
  renderApp()
});
