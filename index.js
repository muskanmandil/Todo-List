// Defining Elements
const inputSpace = document.getElementById("inputSpace");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function for adding Task
const addTaskDiv = () => {

    // Creating Task Div
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Creating Check/Uncheck Button
    let checkBtn = document.createElement("div");
    checkBtn.id = "checkBtn";
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
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
    editTask(taskContent);

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

// Mouse
addBtn.addEventListener("click", () => {
    if(inputSpace.value!=""){
        addTaskDiv();
    }
});

// Keyboard
inputSpace.addEventListener("keydown", (event) => {
    if (inputSpace.value!="" && event.key == "Enter") {
        addTaskDiv();
    }
})


// Toggle Function for Check / Uncheck
const toggle = (btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("checked");
        btn.nextSibling.classList.toggle("linethrough");
    })
}


// Delete Function
const deleteTask = (btn) => {
    btn.addEventListener("click", ()=>{
        btn.parentNode.remove();
    })
}


// Edit Function
const editTask = (btn) => {
    btn.addEventListener("click", () => {
        btn.contentEditable = true;
    })
    btn.addEventListener("keydown", (event)=>{
        if(event.key=="Enter"){
            btn.contentEditable = false;
        }
    })
}