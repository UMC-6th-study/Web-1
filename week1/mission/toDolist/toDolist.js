const todoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo#before");
const finishedList = document.querySelector(".todo#after");

/**
 * 이후 보충할 점s
 * - DB or Local Storage에 저장해 새로고침 이후에도 목록이 남아있게하기
 * - mediaquery 사용해 모바일용 화면 설정
 */

todoInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && noGap(this)) {
    setNewToDo(event.target.value);
    event.target.value = " ";
  }
});

function setNewToDo(todoInput) {
  const newTodo = todoInput;

  paintToDo(newTodo);
}

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
  li.appendChild(span);
  li.appendChild(btn);
  btn.type = "button";

  return li;
}

/**
 * toDoInput을 해야할 일 list에 append 한다.
 */
function paintToDo(text) {
  const obj = makeObj(text);
  const btn = obj.querySelector("button");
  btn.innerText = "완료";
  btn.addEventListener("click", (e) => deleteToDo(e, true));

  toDoList.appendChild(obj);
}
/**
 * 완료한 toDo text를 해낸 일 list에 append 한다.
 */
function paintToFinished(text) {
  const obj = makeObj(text);
  const btn = obj.querySelector("button");
  btn.innerText = "삭제";
  btn.addEventListener("click", (e) => deleteToDo(e, false));
  finishedList.appendChild(obj);
}

// 공백
function noGap(obj) {
  const str = /^\s+$/g;

  if (obj.value === "" || str.exec(obj.value)) {
    console.log("there is Gap");
    return false;
  }
  return true;
}
