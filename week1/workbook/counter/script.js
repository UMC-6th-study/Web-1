const upBtn = document.getElementById("increase");
const downBtn = document.getElementById("decrease");
let number = document.getElementById("number");

upBtn.onclick = () => {
  console.log("increase가 클릭됨");
};

downBtn.onclick = () => {
  console.log("decrease가 클릭됨");
};

upBtn.addEventListener("click", () => {
  const cnt = parseInt(number.innerText, 10);
  number.innerText = cnt + 1;
});

downBtn.addEventListener("click", () => {
  const cnt = parseInt(number.innerText, 10);
  number.innerText = cnt - 1;
});
