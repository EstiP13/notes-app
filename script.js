document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const taskContainer = document.getElementById('tasksContainer');

    const task = document.createElement('div');
    task.className = 'task';

    task.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit" onclick="editTask(this)">✎</button>
            <button class="delete" onclick="deleteTask(this)">✖</button>
            <button class="complete" onclick="toggleComplete(this)">✓</button>
        </div>
    `;

    taskContainer.appendChild(task);
    input.value = '';
}

function deleteTask(button) {
    const task = button.closest('.task');
    task.remove();
}

function editTask(button) {
    const task = button.closest('.task');
    const span = task.querySelector('span');
    const newText = prompt('Editar tarea:', span.textContent);

    if (newText !== null) {
        span.textContent = newText.trim();
    }
}

function toggleComplete(button) {
    const task = button.closest('.task');
    task.classList.toggle('completed');
}
