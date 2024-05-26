const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const form = document.getElementById('add-todo');
    let currentlyEditing = null;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const todoText = todoInput.value;

      if (currentlyEditing) {
        currentlyEditing.firstChild.textContent = todoText;
        currentlyEditing = null;
        form.querySelector('button').textContent = 'Add To-Do';
      } else {
        addTodo(todoText);
      }

      todoInput.value = ""; 
    });

    function addTodo(todoText) {
      
      const li = document.createElement('li');

      const textSpan = document.createElement('span');
      textSpan.textContent = todoText;
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.classList.add('comp');
      completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
      });

  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remo');
      removeButton.addEventListener('click', function() {
        li.remove();
        if (currentlyEditing === li) {
          currentlyEditing = null;
          todoInput.value = "";
          form.querySelector('button').textContent = 'Add To-Do';
        }
      });

 
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        todoInput.value = textSpan.textContent;
        currentlyEditing = li;
        form.querySelector('button').textContent = 'Save';
      });
      li.appendChild(textSpan);
      li.appendChild(completeButton);
      li.appendChild(removeButton);
      li.appendChild(editButton);
      todoList.appendChild(li);
    }