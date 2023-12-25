import React, { useState } from "react";
import { Contact } from "../../types";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
interface Props {
  id: string;
  contact: Contact;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<Props> = ({ id, contact, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <div className="card card_contact mb-3 shadow">
          <div className="card-body d-flex align-items-center p-2">
            <div>
              <img
                className="card-avatar"
                src={contact.avatar}
                alt={contact.name}
              />
            </div>
            <div>
              <h5 className="card-title">{contact.name}</h5>
            </div>
          </div>
        </div>
      </button>
      <Modal
        show={showModal}
        title="Contact information"
        onClose={() => setShowModal(false)}
      >
        <div className="modal-body d-flex align-items-center">
          <div>
            <img
              className="modal-avatar"
              src={contact.avatar}
              alt={contact.name}
            />
          </div>
          <div>
            <h1 className="mb-4">{contact.name}</h1>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-dark" onClick={() => setShowModal(false)}>
            close
          </button>
          <button
            className="btn btn-danger"
            onClick={showModal ? () => onDelete(id) : undefined}
          >
            Delete
          </button>
          <button className="btn btn-success" onClick={() => navigate("/")}>
            Edit contact
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ContactItem;
