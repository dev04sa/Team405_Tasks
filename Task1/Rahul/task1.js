function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttons';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.onclick = function() {
            editTask(taskText);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            li.remove();
        };

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(taskText);
        li.appendChild(buttonContainer);

        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    }
}

function editTask(taskText) {
    const newTask = prompt('Edit task:', taskText.textContent);
    if (newTask !== null) {
        taskText.textContent = newTask.trim();
    }
}