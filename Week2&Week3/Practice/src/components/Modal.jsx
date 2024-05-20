import React, {useState} from "react";
import './Modal.css';

function Modal() {
    // state
    const [isModalOpen, setModalOpen] = useState(false);
    // openModal
    const openModal = () => {
        setModalOpen(true);
    };
    // closeModal
    const closeModal = () => {
        setModalOpen(false);
    }
    // return
    return (
    <div>
        <h1>Practice2</h1>
        <h2>Modal</h2>
        <h3>안녕하세요!</h3>
        <p>내용내용내용</p>
        <button onClick={openModal}>버튼 열기</button>
        
        {/* Modal */}
        {isModalOpen && (
            <div className="overlay">
                <div className="modal">
                    <div className="modal-body">
                        <p>모달 내용</p>
                    </div>
                <button className="close-button" onClick={closeModal}>버튼 닫기</button>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default Modal;