//del class = delete
//edit class edit
let newinputx='';
function add() {


    let inputx = document.getElementById("todo").value;
    document.getElementById('todo').value = ''
    if (inputx === "") {
        alert("Enter todo");
        return;
    }
    console.log(inputx);
    var node = document.createElement("div");
    node.setAttribute('class', "tododiv");
    //
    //
    //
    var del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener('click', function () {
        node.remove();

    })
    del.setAttribute('class', 'delete')
    //
    //
    //



    console.log('holu',newinputx)

    var textnode = document.createElement("p");
    textnode.setAttribute("id", 'todoele')
    var edit = document.createElement("button");
    edit.textContent = "Edit"
    edit.setAttribute('class', 'edit');
    edit.addEventListener('click',function () {
        editf(node,textnode);

    })
    if(newinputx == ''){
        textnode.textContent = inputx;
    }else{
        textnode.textContent= newinputx;
    }

    console.log('mew',inputx)


    textnode.addEventListener('click',function () {
        switchstrike = document.getElementById('todoele')
        switchstrike.classList.toggle("strikethr")

    })



    node.appendChild(textnode)
    node.appendChild(edit)
    node.appendChild(del)


    document.getElementById("todolists").appendChild(node)


}

function editf(node,textnode) {
    newinputx = prompt('Edit Task');
    if(newinputx===''){
        return;
    }
    console.log(newinputx)

    var textnodem = document.createElement("p");
    textnodem.setAttribute("id", 'todoele')
    textnodem.textContent= newinputx;
    node.replaceChild(textnodem,textnode)
    newinputx = ''
    textnodem.addEventListener('click',function () {
        switchstrike = document.getElementById('todoele')
        switchstrike.classList.toggle("strikethr")

    })



}








