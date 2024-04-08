const joinBtn = document.getElementById("join-button");
const closeBtn = document.getElementById("close-btn");

function getTag(itemId, checkLogic) {
  this.item = document.getElementById(itemId);
  this.input = this.item.querySelector(".input");
  this.notice = this.item.querySelector(".notice");
  this.check = // checkFunc
    function checkFun() {
      if (checkLogic(this.input, this.notice) && noSpace(this.input)) {
        this.notice.style.color = "green";
        return true;
      }
      console.log(this.notice.innerText);
      this.notice.style.color = "red";
      return false;
    };

  // 수행되었는지 check 값 return
}

function submit(e) {
  e.preventDefault();
  if (checkItems()) {
    showFunc();
  }
}

function checkItems() {
  const name = new getTag("name", checkNameTypes).check();
  const email = new getTag("email", checkEmailType).check();
  const age = new getTag("age", checkAgeType).check();
  const pw = new getTag("pw", checkPWType).check();
  const pwCheck = new getTag("pw-check", doubleCheckPW).check();
  //&& pwCheck
  return name && email && age && pw && pwCheck;
}

function checkNameTypes(obj, notice) {
  // 한번더 사용,,,
  if (noSpace(obj)) {
    notice.innerText = "멋진 이름이네요!";
    return true;
  }
  notice.innerText = "필수입력 항목입니다!";
  return false;
}

function checkEmailType(obj, notice) {
  if (obj.value.includes("@")) {
    notice.innerText = "올바른 이메일 형식입니다!";
    return true;
  }
  notice.innerText = "올바른 이메일 형식이 아닙니다!";
  return false;
}

function checkAgeType(obj, notice) {
  const regex = /^[0-9]*$/;
  if (regex.exec(obj.value) && parseInt(obj.value) >= 19) {
    notice.innerText = "올바른 나이 형식입니다!";
    return true;
  }
  notice.innerText = "올바른 나이 형식이 아닙니다!";
  return false;
}

function checkPWType(obj, notice) {
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]{4,12}$/;

  if (regex.exec(obj.value)) {
    notice.innerText = "올바른 비밀번호 형식입니다.";
    console.log(notice.innerText);
    return true;
  } else notice.innerText = "올바른 비밀번호 형식이 아닙니다.";

  if (obj.value.length < 4) {
    notice.innerText = "4자리 수 이상이어야 합니다.";
    console.log(notice.innerText);
  } else if (obj.value.length > 12) {
    notice.innerText = "12자리 수 이하이어야 합니다.";
    console.log(notice.innerText);
  }
  return false;
}

function doubleCheckPW(obj, notice) {
  const pw = document.querySelector("#pw .input");
  if (obj.value === pw.value) {
    notice.innerText = "비밀번호 일치합니다.";
    return true;
  }
  notice.innerText = "비밀번호 일치하지 않습니다.";
  return false;
  // pw input창 value 같은지 확인해야함
}

function noSpace(obj) {
  // 공백사용못하게
  const str_space = /^\s+|\s+$/g;

  if (obj.value === "") return false;
  if (str_space.exec(obj.value)) {
    obj.focus();
    obj.value = obj.value.replace(/\s| /gi, ""); // 공백제거
  }
  return true;
}

function showFunc() {
  const screen = document.querySelector(".modal-wrapper");
  screen.style.display = "flex";
}
function hideFunc() {
  const screen = document.querySelector(".modal-wrapper");
  screen.style.display = "none";
}

joinBtn.addEventListener("click", submit);
closeBtn.addEventListener("click", () => {
  const screen = document.querySelector(".modal-wrapper");
  screen.style.display = "none";
});

// pw check 23!a
