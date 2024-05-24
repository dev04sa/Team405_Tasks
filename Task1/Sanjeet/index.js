var outerContainer=document.getElementById("outer")


function addTodo(){

    let inputE=document.getElementById("input1")
    let todo=inputE.value
    console.log(todo)
    

    //checking for empty todo
    if(todo===""){
        alert("Can not add empty todo")
        return;
    }

    //inner div to contain the todos 
    let innerContainer=document.createElement("div")

    //creating edit button
    let edit=document.createElement("button")
    edit.setAttribute("class","text-yellow-500 px-5")
    edit.innerHTML="Edit"

    //creating remove button
    let remove=document.createElement("button")
    remove.setAttribute("class","text-red-600")
    remove.innerHTML="Remove"
    
    //adding the todos in container
    innerContainer.innerHTML=`<input value="${todo}" class="bg-white xl:w-96" disabled>`
    inputE.value=""
    //adding edit and remove in container
    innerContainer.appendChild(edit)
    innerContainer.appendChild(remove);
    innerContainer.setAttribute("class"," bg-white flex flex-row justify-center space-x-2 border border-slate-300  rounded-md px-2 py-3 my-2 xl:rounded-xl xl:text-xl")

    edit.addEventListener("click",editTodo)
    remove.addEventListener("click",removeTodo)
    outerContainer.appendChild(innerContainer)

    
}


//to edit a todo
function editTodo(e){
    if(e.target.innerHTML !=="Edit"){
        e.target.previousSibling.disabled=true;
        e.target.innerHTML="Edit"
        return
    }else{
        e.target.innerHTML="Save"
        let text=e.target.previousSibling
        
        text.disabled=false;
    }
    

}
//to delete a todo
function removeTodo(e){
    console.log(e.target.parentNode)
    outerContainer.removeChild(e.target.parentNode)
    console.log("removed")
}


