function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;

    document.getElementById("taskList").appendChild(li);
    taskInput
}