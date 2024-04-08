function simulateClick() {
  // 클릭 이벤트를 발송할 요소
  const cb = document.getElementById("checkbox");

  // 인공 클릭 MouseEvent 생성
  // let evt = new MouseEvent("click", {
  //   bubbles: false,
  //   cancelable: false,
  //   view: window,
  // });

  let evt = new MouseEvent("click");
  // 체크박스 요소로 이벤트 발송
  cb.dispatchEvent(evt);
}
document.getElementById("clkBtn").addEventListener("click", simulateClick);
