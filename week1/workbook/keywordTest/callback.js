// callback Test

function withName(callback, name) {
  callback(name);
}

function withOutName(callback) {
  console.log("withOutName Func");
  console.log(callback);
  callback();
}

function sayMyName() {
  console.log("DAHONG!");
}

function sayYourName(name) {
  console.log(`${name}`);
}

withOutName(sayMyName);
withYourName(sayYourName("Notion"));
// () 함수가 실행되기 때문에 callback;

function withYourName(callback) {
  return callback;
}
// var과 function 선언시 호이스팅 되기 때문에 윗줄 코드가 실행된다.

let value = withYourName(sayYourName("value"));
console.log(value);
/**
 * callback 인자에는 sayMyName("TestName") return 값이 들어감
 * return값이 없기 때문에 callback undefined 처리됨
 *
 * undefined 뜬다.
 */

withYourName(sayYourName)("이름 출력 완료!");

withOutName(sayMyName("TestName"));
// err : callBack is not a function
// callback 인자에는 sayMyName("TestName") return 값이 들어감
// return값이 없기 때문에 callback undefined 처리됨 undefined() -> 에러
