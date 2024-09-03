const inputBox = document.getElementById("input-box");
const dateBox = document.getElementById("date-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '' || dateBox.value === '') {
        alert("You have to write something and select a date!");
    } else {
        let li = document.createElement("li");

        let taskText = document.createElement("span");
        taskText.className = 'task-text';
        taskText.innerHTML = inputBox.value;

        let taskDate = document.createElement("span");
        taskDate.className = 'task-date';
        taskDate.innerHTML = dateBox.value;

        li.appendChild(taskText);
        li.appendChild(taskDate);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
    dateBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN" && e.target.className !== 'task-text' && e.target.className !== 'task-date') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();