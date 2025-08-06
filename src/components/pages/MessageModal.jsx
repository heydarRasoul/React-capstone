import ReactModal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function MessageModal({ isOpen, onRequestClose, type }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modale-overlay"
    >
      <div className="secssess-note">
        <button onClick={onRequestClose} className="close-button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {
          (type = "contact-page" ? (
            <h1>Thanks! Your message was sent successfully!</h1>
          ) : (
            <h1> Thank you for your shopping</h1>
          ))
        }
      </div>
    </ReactModal>
  );
}
