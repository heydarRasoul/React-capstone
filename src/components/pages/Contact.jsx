import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import MessageModal from "./MessageModal";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      toast.error("Please fill all fields!");
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setIsModalOpen(true);
    }
  };

  return (
    <div className="form-wrapper">
      <form>
        <div className="info-wrapper">
          <label>
            First Name<span className="required">*</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </label>
          <label>
            Last Name<span className="required">*</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              required
            />
          </label>
          <label>
            Email<span className="required">*</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div className="message-wrapper">
          <label>
            Message<span className="required">*</span>
            <textarea
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="20"
              cols="70"
              placeholder="Write your message here"
              required
            />
          </label>
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        <ToastContainer />
      </form>

      <MessageModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        id="contact-page"
      />
    </div>
  );
}
