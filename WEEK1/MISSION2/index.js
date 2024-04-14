const toDoForm = document.querySelector(".todolist_form");
const input = document.getElementById("EnterStudyPlan");
const toDoList = document.querySelector(".TodoList");
const doneList = document.querySelector(".DoneList");

const addTodoItem = (content) => {
  const li = document.createElement("li");
  li.textContent = content;

  const completeButton = document.createElement("button");
  completeButton.textContent = "완료";
  completeButton.classList.add("Button");

  completeButton.addEventListener("click", () => {
    moveItem(li);
  });

  li.appendChild(completeButton);
  toDoList.appendChild(li);
};

const moveItem = (item) => {
  item.removeChild(item.querySelector("button"));
  doneList.appendChild(item);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("Button");

  deleteButton.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(deleteButton);
};

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoContent = input.value.trim();
  if (todoContent !== "") {
    addTodoItem(todoContent);
    input.value = "";
  }
});
