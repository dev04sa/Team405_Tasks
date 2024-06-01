document.querySelector('#push').onclick = function(){
    if (document.querySelector('#task input').value.length==0){
            alert("Please enter a task");
        }
        else{
            document.getElementById('taskList').innerHTML += `
            <div class="works w-[556px] h-10 rounded-3xl border-2 border-white font-serif my-6 flex justify-between align-middle  ">
            <span class="mx-2 my-1"> ${document.querySelector('#task input').value} </span>
            <div>
            <button class="edit my-1 text-white font-serif  p-1 mx-2"> Edit </button>
            <button class="delete my-1 text-white font-serif  p-1 mx-2"> Delete </button>
            </div>
            </div>
            
            
            
            `;

    }
    document.querySelector('#task input').value = "";
    var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.parentNode.remove();
            }
        }
    var edit_tasks = document.querySelectorAll(".edit");
    for (var i = 0; i < edit_tasks.length; i++) {
        edit_tasks[i].onclick = function () {
            let taskValue= document.querySelector('.works span').innerHTML;
            document.querySelector('#task input').value= taskValue;
            this.parentNode.parentNode.remove();
        
        }
    }

}