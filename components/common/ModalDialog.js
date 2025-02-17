import "./modalDialog.scss";

const ModalDialog = ({ children, onClose }) => {
  const modalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={onClose} className="modal-dialog">
      <div onClick={modalContentClick} className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default ModalDialog;
