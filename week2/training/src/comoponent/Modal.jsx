import { useState } from "react";
import { useEffect } from "react";
import "./modal.css";
export default function Modal({ changeParentFunc }) {
  return (
    <>
      <div className={`modal-wrapper `}>
        <div className="modal">
          <div className="modal-content">안녕하세요</div>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="close-wrapper">
            <button id="close-btn" onClick={changeParentFunc}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
