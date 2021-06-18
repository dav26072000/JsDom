// get elements
let toDoList = document.querySelector("#todoList");
let addToDoList = document.querySelector("#add-todolist");
// button
let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addToList);

// add to list
function addToList(e) {
  let inputValue = e.path[1].childNodes[1].value;
  if (inputValue !== "") {
    let toDo = document.createElement("li");
    toDo.innerHTML = `<p>${inputValue}</p>
        <div>
            <button class="remove-list" onclick='removeList(this)'"><i class="fas fa-trash-alt"></i></button>
            <button class="edit-list" onclick='editList(this)'"><i class="fas fa-edit"></i></button>
            <button class="checked-list" onclick='checkedList(this)'><i class="fas fa-check-circle"></i></button>
        </div>`;
    toDoList.appendChild(toDo);
  }
}

// remove item
function removeList(e) {
  e.parentElement.parentElement.remove();
}
// edit items

function editList(e) {
  let toDoText = e.parentElement.parentElement.getElementsByTagName("p")[0];
  toDoText.innerHTML = `<input type="text" value="${toDoText.innerText}">`;
  e.innerHTML = `<i class="fas fa-save"></i>`;
  console.log("bob");
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "saveEdit(this)");
}

function saveEdit(e) {
  let toDoEditText = e.parentElement.parentElement.getElementsByTagName("p")[0];
  toDoEditText.innerHTML = `${
    toDoEditText.getElementsByTagName("input")[0].value
  }`;
  e.innerHTML = `<i class="fas fa-edit"></i>`;
  console.log("bob ok");
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "editList(this)");
}

// check todo

function checkedList(e) {
  let toDoChecked = e.parentElement.parentElement;
  e.style.color = "#5cb85c";
  toDoChecked.style.border = "2px solid #5cb85c";
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "noCheck(this)");
}

function noCheck(e) {
  let toDoNoChecked = e.parentElement.parentElement;
  e.style.color = "black";
  toDoNoChecked.style.border = "1px solid #819090";
  e.removeAttribute("onclick");
  e.setAttribute("onclick", "checkedList(this)");
}
