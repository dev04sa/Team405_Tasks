/* */



let todos=[];


function deleteTodo(i){
    todos.splice(i,1)

    displayTodos()
}

function displayTodos(){
    let allTodos=document.querySelector('.addedTodos');
    let innerHtml='';
    for(i=0;i<todos.length;i++){
       
            
            innerHtml+=`
            <div class="flex flex-row justify-center mt-4 items-center ">
            <p class="px-4 w-[220px]" >${todos[i].todoText}</p>
            <p  class="px-3 w-[150px] mx-2" > ${todos[i].todoDate}</p>
            <button class=" bg-pink-400 rounded-md py-2 px-3  font-semibold" onclick="deleteTodo(${i})">Delete</button> 
            </div>
           
            `
    }
    allTodos.innerHTML=innerHtml;
}
    
      
 
  


function addTodo(){

    let inputText=document.querySelector('.todoInput');
    let text=inputText.value;
    inputText.value='';
  
  
    let inputDate=document.querySelector('.todoDate');
    let todo={
        
        todoText: text,
        todoDate: inputDate.value
    }
    todos.push(todo);
    displayTodos()

    
    

   
}


