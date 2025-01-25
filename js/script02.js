const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks
function renderTasks(filter = 'all') {
    todoList.innerHTML = '';
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('draggable', true);
        li.dataset.index = index;

        li.innerHTML = `
            <span>${task.name}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Toggle completed
        li.addEventListener('click', (e) => {
            if (!e.target.classList.contains('edit-btn') && !e.target.classList.contains('delete-btn')) {
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks(filter);
            }
        });

        // Edit task
        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newTaskName = prompt('Edit task:', task.name);
            if (newTaskName) {
                tasks[index].name = newTaskName;
                saveTasks();
                renderTasks(filter);
            }
        });

        // Delete task
        li.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks(filter);
        });

        // Drag-and-drop
        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
        });

        todoList.appendChild(li);
    });
}

// Handle drag-and-drop reordering
todoList.addEventListener('dragover', (e) => e.preventDefault());
todoList.addEventListener('drop', (e) => {
    const draggedIndex = e.dataTransfer.getData('text/plain');
    const targetIndex = [...todoList.children].indexOf(e.target.closest('.todo-item'));

    if (draggedIndex !== targetIndex) {
        const [draggedTask] = tasks.splice(draggedIndex, 1);
        tasks.splice(targetIndex, 0, draggedTask);
        saveTasks();
        renderTasks();
    }
});

// Add task
addTaskBtn.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

// Filter tasks
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        renderTasks(button.dataset.filter);
    });
});

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial render
renderTasks();
