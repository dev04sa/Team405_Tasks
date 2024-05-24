
function Add(){
    let inputs = document.getElementById("inp");
    let text = document.getElementById("output");
    if(inputs.value == ""){
        alert("Task cannot be Empty");
    }
    else{
        let newEle = document.createElement("li");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        btn1.classList.add("button-style1");
        btn2.classList.add("button-style2");
        newEle.classList.add("list-style");
        btn1.innerHTML = "Remove";
        btn2.innerHTML = "Edit";
        newEle.innerHTML = inputs.value;
        text.appendChild(newEle);
        newEle.appendChild(btn1);
        newEle.appendChild(btn2);
        inputs.value = "";

        btn1.addEventListener("click" , remove);
        function remove(){
            newEle.remove();
        }

        btn2.addEventListener("click" , edit);
        function edit(){
        document.getElementById("button").value = "Edit";
        let content = newEle.textContent.trim();
        content = content.replace(btn1.innerHTML,'');
        content = content.replace(btn2.innerHTML,'');
        inputs.value = content;
        newEle.remove();
        }
        document.getElementById("button").value = "Add";
    }
}