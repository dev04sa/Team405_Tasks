document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
  const taskText = document.getElementById("input").value;

  if (taskText === "") {
    alert("Enter some task");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.cssText = `
    width:50%;
    margin:auto;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content:space-between;
    align-items: center;
    `;

  // deletebutton
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "\u274C";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
  //editbutton
  const editButton = document.createElement("button");
  editButton.textContent = "\u270F";
  editButton.addEventListener("click", () => {
    editTask(li, taskText);
  });

  const div = document.createElement("div");
  div.style.cssText = `
  display:flex;
  gap:1rem;
  padding:0.5rem;
  `;
  li.appendChild(div);

  div.appendChild(editButton);
  div.appendChild(deleteButton);

  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
}

function editTask(li, oldTaskText) {
  li.textContent = "";
  const input = document.createElement("input");
  input.type = "text";
  input.value = oldTaskText;
  input.style.cssText = `
    padding:0.70rem;
    width:99%;
    `;

  const saveButton = document.createElement("button");
  saveButton.textContent = "\u2705";
  saveButton.style.cssText = `
    padding: 0.75rem;
    font-size: 1.25rem;
  `;
  saveButton.addEventListener("click", () => {
    const updatedText = input.value;
    if (updatedText === "") {
      alert("Please update task.");
      return;
    }

    li.textContent = updatedText;

    const editButton = document.createElement("button");
    editButton.textContent = "\u270F";
    editButton.addEventListener("click", () => {
      editTask(li, updatedText);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "\u274C";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    const div = document.createElement("div");
    div.style.cssText = `
        display:flex;
        gap:1rem;
        padding:0.5rem;
      `;

    div.appendChild(editButton);
    div.appendChild(deleteButton);

    li.appendChild(div);
  });

  li.appendChild(input);
  li.appendChild(saveButton);
  input.focus();
}
