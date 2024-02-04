function addTask() {
    const taskNameInput = document.getElementById('taskName');
    const taskDescription = document.getElementById('taskDescription').value;
    const taskCategory = document.getElementById('taskCategory').value;
    const taskList = document.getElementById('taskList');

    
    const taskName = capitalizeFirstLetter(taskNameInput.value);

    if (taskName.trim() === '') {
        alert('Please enter a task name.');
        return;
    }

    const taskItem = document.createElement('li');
    const taskText = document.createElement('div');
    taskText.innerHTML = `<strong>${taskName}</strong><br>${taskDescription}<br>Category: ${taskCategory}`;
    taskItem.appendChild(taskText);

    taskItem.classList.add(taskCategory);
    taskItem.addEventListener('click', function () {
        this.classList.toggle('completed-task');
    });

    taskList.appendChild(taskItem);

   
    taskNameInput.value = '';
    document.getElementById('taskDescription').value = '';
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener("click", function () {
    var clickSound = new Audio('click.wav');
    clickSound.play();
});


function addTask() {
    const taskNameInput = document.getElementById('taskName');
    const taskDescription = document.getElementById('taskDescription').value;
    const taskCategory = document.getElementById('taskCategory').value;
    const dueDate = document.getElementById('dueDate').value;
    const taskList = document.getElementById('taskList');

   
    const taskName = capitalizeFirstLetter(taskNameInput.value);

    if (taskName.trim() === '') {
        alert('Please enter a task name.');
        return;
    }

    const taskItem = document.createElement('li');
    const taskText = document.createElement('div');
    taskText.innerHTML = `<strong>${taskName}</strong><br>${taskDescription}<br>Category: ${taskCategory}<br>Due Date: ${dueDate}`;
    taskItem.appendChild(taskText);

    taskItem.classList.add(taskCategory);
    taskItem.addEventListener('click', function () {
        this.classList.toggle('completed-task');
    });

    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

   
    taskNameInput.value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('dueDate').value = '';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener("click", function () {
    var clickSound = new Audio('click.wav');
    clickSound.play();
});
