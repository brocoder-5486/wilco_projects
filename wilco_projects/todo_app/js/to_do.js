const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
const userDetails = document.getElementById("user_details");

let todoArray = [];
displayTodo();
//add todo
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (text.value === "") {
    alert("Please add a To-Do list");
  } else {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
  }
});

//display todo
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='todo_list'>
      <p class='list_item'>${list}</p>
      <div class='btn'>
        <button onclick='edit(${ind})' class='edit_btn'>Edit</button>
        <button onclick='deleteTodo(${ind})' class='del_btn'>Delete</button>
      </div>
   </div>`;
  });
  listBox.innerHTML = htmlCode;
}

//edit todo
function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  text.value = todoArray[ind];
  addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";
}

//delete todo
function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}

//saving the todo upon editing
saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

// `<div class='flex mb-4 items-center'>
//       <p class='w-full text-grey-darkest'>${list}</p>
//       <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
//       <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
//    </div>`;
