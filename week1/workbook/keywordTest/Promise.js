const { reject, get } = require("lodash");

// 1.then
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("finish!"), 1000);

  // != setTimeout(resolve("finish"), 1000);
  //setTimeout 실행전 resovle 함수 즉시 실행
});

promise.then((result) => {
  console.log(result);
});

//2. catch
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});

// .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
promise2.catch(console.log); // 1초 뒤 "Error: 에러 발생!" 출력

//3. finally
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => console.log("프라미스가 준비되었습니다."))
  .catch((err) => console.log(err));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((data) => console.log(data));

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log);
