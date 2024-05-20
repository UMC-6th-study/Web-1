// join button
const join_button = document.getElementById("join_button");
join_button.addEventListener("click", function () {
  // input
  const name_input = TrimValue("name_input");
  const email_input = TrimValue("email_input");
  const age_input = TrimValue("age_input");
  const pw_input = TrimValue("pw_input");
  const pw_check_input = TrimValue("pw_check_input");

  // message
  const name_message = document.getElementById("name_message");
  const email_message = document.getElementById("email_message");
  const age_message = document.getElementById("age_message");
  const pw_message = document.getElementById("pw_message");
  const pw_check_message = document.getElementById("pw_check_message");

  // Validate input
  const isNameValid =
    RejectWhitespace(name_input, name_message) &&
    isStringInput(name_input, name_message);
  const isEmailValid =
    RejectWhitespace(email_input, email_message) &&
    isStringInput(email_input, name_message) &&
    isValidEmailFormat(email_input, email_message);
  const isAgeValid =
    RejectWhitespace(age_input, age_message) &&
    isValidAgeFormat(age_input, age_message);
  const isPwValid =
    RejectWhitespace(pw_input, pw_message) &&
    isStringInput(pw_input, name_message) &&
    isValidPwFormat(pw_input, pw_message);
  const isPwCheckValid =
    RejectWhitespace(pw_check_input, pw_check_message) &&
    isStringInput(pw_check_input, name_message) &&
    isValidPwCkFormat(pw_check_input, pw_check_message, pw_input);
});

// Trim Value
const TrimValue = (id) => document.getElementById(id).value.trim();

function RejectWhitespace(inputElement, messageElement) {
  if (inputElement.includes("")) {
    messageElement.textContent = "필수 입력 항목입니다!";
    messageElement.style.color = "red";
    return false;
  }
  return true;
}

function isStringInput(inputElement, messageElement) {
  if (typeof inputElement !== "string") {
    messageElement.textContent = "문자열이어야 합니다!";
    messageElement.style.color = "red";
    return false;
  }
  return true;
}

function isValidEmailFormat(email_input, email_message) {
  if (email_input.indexOf("@") == -1) {
    email_message.textContent = "‘@’가 있어야합니다.";
    email_message.style.color = "red";
    return false;
  }
  return true;
}

function isValidAgeFormat(age_input, age_message) {
  age_input = parseInt(age_input);
  age_input_float = parseFloat(age_input);
  if (isNaN(age_input)) {
    age_message.textContsent = "숫자를 입력하세요!";
    age_message.style.color = "red";
  }
  if (age_input !== age_input_float) {
    age_message.textContsent = "나이는, 소수가 될 수 없습니다!";
    age_message.style.color = "red";
  }
  if (age_input < 19) {
    if (age_input < 0) {
      age_message.textContent = "나이는 음수가 될 수 없습니다!";
      age_message.style.color = "red";
      return false;
    } else {
      age_message.textContent = "19살 이상만 가입이 가능합니다!";
      age_message.style.color = "red";
    }
  }
  return true;
}

function isValidPwFormat(pw_input, pw_message) {
  if (password.length < 4) {
    pw_message.textContent = "비밀번호는 최소 4자리 이상이어야 합니다!";
    pw_message.style.color = "red";
    return false;
  }
  if (password.length > 12) {
    pw_message.textContent = "비밀번호는 최대 12자리까지 가능합니다!";
    pw_message.style.color = "red";
    return false;
  }
  const hasNumber = /[0-9]/.test(pw_input);
  const hasUpperCase = /[A-Z]/.test(pw_input);
  const hasLowerCase = /[a-z]/.test(pw_input);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    password
  );

  if (!(hasNumber && hasUpperCase && hasLowerCase && hasSpecialCharacter)) {
    pw_message.textContent =
      "영어, 숫자, 특수문자를 모두 포함하여 비밀번호를 작성하세요!";
    pw_message.style.color = "red";
    return false;
  }
  return true;
}

function isValidPwCkFormat(pw_check_input, pw_check_message) {
  if (pw_check_input !== pw_input) {
    pw_check_message.textContent = "비밀번호가 일치하지 않습니다.";
    pw_check_message.style.color = "red";
    return false;
  }
  return true;
}
