/* */



let todos=[];


function deleteTodo(i){
    todos.splice(i,1)

    displayTodos()
}


function updateTodo(i){
    let inputText=document.querySelector('.updateInput');
    let text=inputText.value;
  
  
  
    let inputDate=document.querySelector('.updateDate');
    
    todos.splice(i,1,{
        
        todoText: text,
        todoDate: inputDate.value
    })
    console.log({
        
        todoText: text,
        todoDate: inputDate.value
    })

    let update=document.querySelector('.updateTodo');
    update.innerHTML='';
    displayTodos()
   
}
function editTodo(i){
    let update=document.querySelector('.updateTodo');
    update.innerHTML=`
     
    <div class="   z-100  mt-6 ">
    
   
    <h1 class="text-center text-3xl font-bold  z-100 "> Edit Task</h1>
    <div class="flex sm:flex-row sm:justify-center flex-col sm:mt-6">
     
       <input type="text" class="px-4 py-2 border-solid border-2 rounded-md border-gray-700  sm:mx-0 mx-2  updateInput"  value="${todos[i].todoText}" placeholder="Enter Todo here">
       <input type="date" name="date" class="px-3 py-2 border-solid border-2 rounded-md border-gray-700 sm:mx-2 sm:m-0 m-2 updateDate" value="${todos[i].todoDate}" >
       <button class="p-2 bg-green-400 rounded-md  px-3 font-semibold sm:mx:0 sm:mb-0 sm:mx-0 mb-2 mx-2" onclick="updateTodo(${i})">Update</button>
  
    </div>
    </div>
    `
}

function displayTodos(){
    let allTodos=document.querySelector('.addedTodos');
    let innerHtml='';
    for(i=0;i<todos.length;i++){
       
            
            innerHtml+=`
            <div class="flex sm:flex-row sm:justify-center flex-col sm:mt-6 ">
            <input class="px-4 py-2 sm:mx-0 mx-2 text-center " value="${todos[i].todoText}" readonly>
            <input class="px-3 py-2 sm:mx-2 sm:m-0 m-2 text-center"value=" ${todos[i].todoDate}">
            <button class=" bg-pink-400  py-2 px-3 my-1 sm:my-0 sm:mx-0 rounded-md mx-2  font-semibold" onclick="deleteTodo(${i})">Delete</button> 
            <button class=" p-2 bg-pink-400 rounded-md  px-3 font-semibold sm:mx-0 sm:mb-0 sm:mx-2 mb-2 mx-2 sm:mt-0   mt-2" onclick="editTodo(${i})">Edit</button> 
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


