// promise Ver
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("finish");
  });
}

// clear
// async ver
async function fun() {
  return "finish";
}

async function f() {
  try {
    let response = await fetch("http://유효하지-않은-주소");
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function fw() {
  await fetch("http://유효하지-않은-주소").catch(console.log);
  //   인자가 동일하니까
  await fetch("http://유효하지-않은-주소").catch((err) => console.log(err));
}



f();

console.log(fun());
console.log(fetchUser());
