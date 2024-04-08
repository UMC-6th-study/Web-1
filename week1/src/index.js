document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".join_button").addEventListener("click", function () {
    // input
    var nameInput = document.getElementById("name_input").value.trim();
    var emailInput = document.getElementById("email_input").value.trim();
    var ageInput = document.getElementById("age_input").value.trim();
    var passwordInput = document.getElementById("password_input").value.trim();
    var passwordckInput = document
      .getElementById("check_password_input")
      .value.trim();

    // Message
    var nameMessage = document.getElementById("name_message");
    var emailMessage = document.getElementById("email_message");
    var ageMessage = document.getElementById("age_message");
    var passwordMessage = document.getElementById("password_message");
    var passwordckMessage = document.getElementById("check_password_message");

    if (nameInput === "") {
      nameMessage.textContent = "필수 입력 항목입니다!";
      nameMessage.style.color = "red";
    } else if (!/^[a-zA-Z]+$/.test(nameInput)) {
      nameMessage.textContent = "이름은 문자열이어야 합니다.";
      nameMessage.style.color = "red";
    } else {
      nameMessage.textContent = "멋진 이름이네요!";
      nameMessage.style.color = "green";
    }

    if (emailInput === "") {
      emailMessage.textContent = "이메일을 입력하세요";
      emailMessage.style.color = "red";
    } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
      emailMessage.textContent = "올바른 이메일 양식이어야 합니다.";
      emailMessage.style.color = "red";
    } else {
      emailMessage.textContent = "올바른 이메일 형식입니다!";
      emailMessage.style.color = "green";
    }

    if (ageInput === "") {
      ageMessage.textContent = "나이를 입력하세요";
      ageMessage.style.color = "red";
    } else if (!/^\d+$/.test(ageInput)) {
      ageMessage.textContent = "나이는 숫자여야 합니다!";
      ageMessage.style.color = "red";
    } else if (parseInt(ageInput) < 0) {
      ageMessage.textContent = "나이는 음수가 될 수 없습니다!";
      ageMessage.style.color = "red";
    } else if (parseFloat(ageInput) !== parseInt(ageInput)) {
      ageMessage.textContent = "나이는 정수로 입력해야 합니다!";
      ageMessage.style.color = "red";
    } else if (parseInt(ageInput) < 19) {
      ageMessage.textContent = "미성년자는 가입할 수 없습니다!.";
      ageMessage.style.color = "red";
    } else {
      ageMessage.textContent = "올바른 나이입니다!";
      ageMessage.style.color = "green";
    }

    if (passwordInput === "") {
      passwordMessage.textContent = "비밀번호를 입력하세요";
      passwordMessage.style.color = "red";
    } else if (passwordInput.length < 4) {
      passwordMessage.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
      passwordMessage.style.color = "red";
    } else if (passwordInput.length > 12) {
      passwordMessage.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
      passwordMessage.style.color = "red";
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,12}$/.test(
        passwordInput
      )
    ) {
      passwordMessage.textContent =
        "영어, 숫자, 특수문자를 모두 조합해서 입력하세요.";
      passwordMessage.style.color = "red";
    } else {
      passwordMessage.textContent = "올바른 비밀번호입니다!";
      passwordMessage.style.color = "green";
    }

    if (passwordckInput === "") {
      passwordckMessage.textContent = "비밀번호 확인을 입력하세요";
      passwordckMessage.style.color = "red";
    } else if (passwordckInput !== passwordInput) {
      passwordckMessage.textContent = "비밀번호가 일치하지 않습니다.";
      passwordckMessage.style.color = "red";
    } else {
      passwordckMessage.textContent = "비밀번호가 일치합니다!";
      passwordckMessage.style.color = "green";
    }
  });
});
