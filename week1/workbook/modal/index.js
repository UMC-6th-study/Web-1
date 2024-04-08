const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", showFunc);
closeBtn.addEventListener("click", hideFunc);

// id 얘기가 없길래 굳이 className으로 처리했다.

function showFunc() {
  const [modalWrapper, ...rest] =
    document.getElementsByClassName("modal-wrapper");
  modalWrapper.style.display = "flex";
}
function hideFunc() {
  const [modalDiv, ...rest] = document.getElementsByClassName("modal-wrapper");
  modalDiv.style.display = "none";
}

// const modal = document.querySelector(".modal-wrapper");
// querySelector가 가독성이 더 좋은 것 같다.
