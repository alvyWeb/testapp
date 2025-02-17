import { useRef } from "react";
import "./bottomModal.scss";

const BottomModalDialog = ({ onClose, children }) => {
  const modalRef = useRef();
  const CloseModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div ref={modalRef} onClick={CloseModal} className="content_fixer">
      <div className="main_container">
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default BottomModalDialog;
