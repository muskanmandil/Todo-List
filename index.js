// Defining Elements
const inputSpace = document.getElementById("input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Function for adding Task
const addTaskDiv = () => {
    // Creating Task Div
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Creating Check/Uncheck Button
    let checkBtn = document.createElement("div");
    checkBtn.id = "checkBtn";
    checkBtn.classList.add("unchecked");
    toggle(checkBtn);

    // Creating Delete Button
    let deleteBtn = document.createElement("div");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    deleteTask(deleteBtn);

    // Storing Input from input space
    let taskContent = document.createElement("p");
    taskContent.classList.add("taskContent");
    taskContent.textContent = inputSpace.value;

    // Appending Items in Task Div
    taskDiv.appendChild(checkBtn);
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteBtn);

    // Appending Task in Task List
    taskList.appendChild(taskDiv);

    // Emptying inputSpace
    inputSpace.value = "";
}

// Event Listeners to add Task
addBtn.addEventListener("click", addTaskDiv);
inputSpace.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTaskDiv();
    }
})


// Toggle Function for Check / Uncheck
const toggle = (Btn) => {
    Btn.addEventListener("click", () => {
        if (Btn.classList.contains("checked")) {
            Btn.classList.remove("checked");
            Btn.classList.add("unchecked");
            Btn.innerHTML = "";
            Btn.nextSibling.classList.remove("linethrough");
        } else {
            Btn.classList.remove("unchecked");
            Btn.classList.add("checked");
            Btn.innerHTML = `<i class="fa-solid fa-check"></i>`
            Btn.nextSibling.classList.add("linethrough");
        }
    })

}


// Delete Function
const deleteTask = (Btn) => {
    Btn.addEventListener("click", ()=>{
        let taskToDelete = Btn.parentNode;
        taskList.removeChild(taskToDelete);
    })
    
}











