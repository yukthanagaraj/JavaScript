let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(filter = "all") {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    let filtered = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        if (filter === "uncompleted") return !todo.completed;
        return true;
    });

    filtered.forEach((todo, index) => {
        const li = document.createElement("li");
        if (todo.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${todo.text}</span>
            <div class="actions">
                <i class="fas fa-check" onclick="toggleComplete(${index})"></i>
                <i class="fas fa-trash" onclick="deleteTodo(${index})"></i>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todo-input");

    if (input.value.trim() === "") return;

    todos.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function filterTodos(type) {
    renderTodos(type);
}

// Initial load
renderTodos();