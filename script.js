document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");
    const categorySelect = document.getElementById("categorySelect");
    const dueDateInput = document.getElementById("dueDateInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task) => addTaskToDOM(task));
    };

    const saveTasks = () => {
        const tasks = Array.from(taskList.children).map((item) => ({
            text: item.querySelector(".task-text").textContent.split(" [")[0],
            priority: item.dataset.priority,
            category: item.dataset.category,
            dueDate: item.dataset.dueDate || "",
            completed: item.classList.contains("completed"),
        }));
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const addTaskToDOM = (task) => {
        const li = document.createElement("li");
        li.className = `task-item${task.completed ? " completed" : ""}`;
        li.dataset.priority = task.priority;
        li.dataset.category = task.category;
        li.dataset.dueDate = task.dueDate;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = `${task.text} [${task.priority}] [${task.category}]${
            task.dueDate ? ` [Due: ${task.dueDate}]` : ""
        }`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    };

    const addTask = () => {
        const text = taskInput.value.trim();
        const priority = prioritySelect.value;
        const category = categorySelect.value;
        const dueDate = dueDateInput.value;

        if (!text) {
            alert("Please enter a task!");
            return;
        }

        const task = { text, priority, category, dueDate, completed: false };
        addTaskToDOM(task);
        saveTasks();
        taskInput.value = "";
        dueDateInput.value = "";
    };

    if (!localStorage.getItem("tasks")) {
        const defaultTask = { text: "4", priority: "low", category: "personal", dueDate: "", completed: false };
        localStorage.setItem("tasks", JSON.stringify([defaultTask]));
    }

    addButton.addEventListener("click", addTask);
    loadTasks();
});

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const priorityFilter = document.getElementById("priorityFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const completionFilter = document.getElementById("completionFilter");

    const filterTasks = () => {
        const priority = priorityFilter.value;
        const category = categoryFilter.value;
        const completion = completionFilter.value;

        Array.from(taskList.children).forEach((task) => {
            const taskPriority = task.dataset.priority;
            const taskCategory = task.dataset.category;
            const isCompleted = task.classList.contains("completed");

            const matchesPriority = priority === "" || taskPriority === priority;
            const matchesCategory = category === "" || taskCategory === category;
            const matchesCompletion =
                completion === "" ||
                (completion === "completed" && isCompleted) ||
                (completion === "not-completed" && !isCompleted);

            if (matchesPriority && matchesCategory && matchesCompletion) {
                task.style.display = "flex";
            } else {
                task.style.display = "none";
            }
        });
    };

    priorityFilter.addEventListener("change", filterTasks);
    categoryFilter.addEventListener("change", filterTasks);
    completionFilter.addEventListener("change", filterTasks);
});