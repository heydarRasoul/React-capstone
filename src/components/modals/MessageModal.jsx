import ReactModal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function MessageModal({
  handleRemove,
  isOpen,
  onRequestClose,
  id,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
    >
      <div className="secssess-note">
        <button onClick={onRequestClose} className="close-button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {id === "contact-page" && (
          <h2>Thanks! Your message was sent successfully!</h2>
        )}
        {id === "checkout" && <h2>Thank you for shopping with us!</h2>}
        {id === "removing-item" && (
          <div>
            <h2>Are you sure you want to remove this item?</h2>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={onRequestClose}>Cancel</button>
          </div>
        )}
      </div>
    </ReactModal>
  );
}
