const todoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo#before");
const finishedList = document.querySelector(".todo#after");
let toDos = [];
let finished = [];

console.log(toDoList);

todoInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    setNewToDo();
  }
});

function setNewToDo() {
  const newToDo = todoInput.value;
  todoInput.value = " ";
  paintToDo(newToDo);
}

// 배열에서 지우고 삭제하는거
function deleteToDo(event, wasToDo) {
  const list = event.target.parentElement;
  list.remove();
  const text = list.querySelector("span");

  //finished
  if (wasToDo) {
    paintToFinished(text.innerText);
  }
}

function makeObj(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = text;
  li.append(span);
  li.appendChild(btn);
  btn.type = "button";

  return li;
}

function paintToDo(text) {
  const obj = makeObj(text);
  const btn = obj.querySelector("button");
  btn.innerText = "완료";
  btn.addEventListener("click", (e) => deleteToDo(e, true));

  console.log(obj);
  toDoList.appendChild(obj);
}

function paintToFinished(text) {
  const obj = makeObj(text);
  const btn = obj.querySelector("button");
  btn.innerText = "삭제";
  btn.addEventListener("click", deleteToDo);
  finishedList.appendChild(obj);
}
