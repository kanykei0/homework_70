import React, { useState } from "react";
import { Contact } from "../../types";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  contact: Contact;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<Props> = ({ id, contact, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="card card_contact mb-3 shadow"
      >
        <div className="card-body d-flex align-items-center">
          <div>
            <img
              className="card-avatar"
              src={contact.avatar}
              alt={contact.name}
            />
          </div>
          <div className="ms-auto">
            <h5 className="card-title pe-5">{contact.name}</h5>
          </div>
        </div>
      </div>
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
          <Link className="btn btn-success" to={"/edit-contact/" + contact.id}>
            Edit contact
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ContactItem;
