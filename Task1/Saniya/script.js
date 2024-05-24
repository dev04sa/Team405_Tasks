let inputs = document.getElementById("input");
let text = document.querySelector(".text");

//function to add task
function Add() {
    if (inputs.value == "") {
        alert("Please Enter a Task");
    }
    else {
        let newElem = document.createElement("ul");
        newElem.innerHTML = `${inputs.value} <button id="edit" >Edit</button> <button id="delete">Delete</button>`;
        text.appendChild(newElem);

        // deleting the added task
        inputs.value = "";
        newElem.querySelector("#delete").addEventListener("click", remove);
        function remove() {
            newElem.remove();
        }

        newElem.querySelector("#edit").addEventListener("click", edit);

        //function to edit task
        function edit() {
            let newInput = prompt("Enter the new input ");
            if (newInput == "") {
                alert("Please enter the edited task");
            }
            else {
                newElem.innerHTML = `${newInput.valueOf()} <button id="save" >Save</button> <button id="delete">Delete</button>`;

                //deleting the edited task
                inputs.value = "";
                newElem.querySelector("#delete").addEventListener("click", remove);
                function remove() {
                    newElem.remove();
                }
                //saving the edited task
                newElem.querySelector("#save").addEventListener("click", saved);
                function saved() {
                    alert("Task saved successfully !!");
                }
            }
        }

    }
}

