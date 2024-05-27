const joinBtn = document.getElementById("join-button");
const closeBtn = document.getElementById("close-btn");

/**
 *
 * @param {*} itemId HTML의 ID
 * @param {*} checkLogic 해당 태그와 관련된 유효성 체크 로직
 */
function getTag(itemId, checkLogic) {
  this.item = document.getElementById(itemId);

  this.input = this.item.querySelector(".input");
  // item 내부에 있는 input 클래스

  this.notice = this.item.querySelector(".notice");
  // item 내부에 있는 notice 클래스

  /**
   * 유효성 체크 메소드
   * 해당 태그와 관련된 checkLogin 함수와 공백을 검사한다.
   * @returns boolean
   */
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
