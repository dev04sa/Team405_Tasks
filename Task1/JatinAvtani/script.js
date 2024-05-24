let todoList=[];
displayItems()


function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value
    todoList.push(todoItem);
    inputElement.value='';
    displayItems()
}

function displayItems(){


    let containerElement=document.querySelector('.todo-container');
    let newHtml='';
    
    for(let i=0; i<todoList.length; i++){
        newHtml+= ` <span> ${todoList[i]}</span> <button class="btn-delete" onclick="todoList.splice(${i},1); displayItems(); ">Delete </button> `;
        
    }
    containerElement.innerHTML=newHtml;
   
}

