const list = document.getElementById('list');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

function createButton ( text, className, onClick) {
    const button = document.createElement("button");
    button.innerText = text ;
    button.className = `${className} text-white px-2 py-2 mr-2`;
    button.addEventListener("click", onClick);
    return button;
}

btn.addEventListener("click", addTodo);

function addTodo() { 
    const todoText = input.value;
    if(todoText === "") {
        alert("Please enter a todo");
        return;
    }

    const element = document.createElement("li");
    element.className = "mb-2 flex item-center";

    const todoSpan = document.createElement("span");
    todoSpan.innerText = todoText ; 
    todoSpan.className = "mr-4 flex";

    const editBtn = createButton("Edit", "bg-green-400", ()=> editTodo(element , todoSpan, editBtn));
    const deleteBtn = createButton("Delete" , "bg-red-400" ,()=> deleteTodo(element));

    element.appendChild(todoSpan);
    element.appendChild(editBtn);
   element.appendChild(deleteBtn);

   list.appendChild(element);
   input.value = "";

}

function editTodo(element,  todoSpan , editBtn) {
    if(editBtn.innerText === "Edit") {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value =todoSpan.innerText;
        editInput.className = "p-1 mr-2 flex border-2";

        element.insertBefore(editInput, todoSpan);
        element.removeChild(todoSpan);
        editBtn.innerText = "Save";
    } else {
        const newText = element.querySelector("input").value;
        if(newText === "") {
            alert ( "Todo item cannot be empty ");
            return;
        }

        const newSpan = document.createElement("span");
        newSpan.innerText = newText ;
        newSpan.className = "mr-4 flex";

        element.insertBefore( newSpan, element.querySelector("input"));
        element.removeChild(element.querySelector("input"));
        editBtn.innerText = "Edit";

    }
}

function deleteTodo( element ) {
    list.removeChild(element);
}