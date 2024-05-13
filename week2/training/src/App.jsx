import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./comoponent/Counter";
import Modal from "./comoponent/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
    console.log("모달 꺼짐");
  };

  const openModal = () => {
    setShowModal(!showModal);
    console.log("모달 켜짐");
  };

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open-btn" onClick={openModal}>
        버튼 열기
      </button>
      {showModal ? <Modal changeParentFunc={closeModal} /> : ""}
    </>
  );
}

export default App;
