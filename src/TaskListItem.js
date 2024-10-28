class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  render() {
    const taskItemDiv = document.createElement("div");

    const taskDescription = document.createElement("p");
    taskDescription.innerText = this.description;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItemDiv.remove();
    });

    taskItemDiv.appendChild(taskDescription);
    taskItemDiv.appendChild(deleteButton);

    return taskItemDiv;
  }
}
