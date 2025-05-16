
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});

function addTask() {
    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-description").value.trim();
    const dueDate = document.getElementById("task-due-date").value;
    const priority = document.getElementById("task-priority").value;

    if (!title || !dueDate) {
        alert("Title and Due Date are required.");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
    };

    tasks.push(task);
    saveTasks();
    displayTasks();
    taskForm.reset();
}

function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = "";
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${task.title}</strong> - ${task.description}<br>
            <small>Due: ${task.dueDate} | Priority: ${task.priority}</small>
            <br>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = () => {
    displayTasks();
    createFilterUI();
};

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    document.getElementById("task-title").value = task.title;
    document.getElementById("task-description").value = task.description;
    document.getElementById("task-due-date").value = task.dueDate;
    document.getElementById("task-priority").value = task.priority;

    tasks = tasks.filter(t => t.id !== id);

    saveTasks();
    displayTasks();
}

function createFilterUI() {
    const container = document.getElementById("task-container");

    const filterDiv = document.createElement("div");
    filterDiv.innerHTML = `
        <label for="priority-filter">Filter by Priority:</label>
        <select id="priority-filter">
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <input type="text" id="search-input" placeholder="Search by title...">
    `;

    container.insertBefore(filterDiv, taskList);

    document.getElementById("priority-filter").addEventListener("change", filterTasks);
    document.getElementById("search-input").addEventListener("input", filterTasks);
}

function filterTasks() {
    const priorityValue = document.getElementById("priority-filter").value;
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    let filtered = tasks;

    if (priorityValue !== "all") {
        filtered = filtered.filter(task => task.priority === priorityValue);
    }

    if (searchQuery) {
        filtered = filtered.filter(task => task.title.toLowerCase().includes(searchQuery));
    }

    displayTasks(filtered);
}
