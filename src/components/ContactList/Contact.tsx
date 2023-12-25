import React from "react";
import { Contact } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  //   id: string;
  contact: Contact;
}

const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <Link to={`/contacts/`}>
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
    </Link>
  );
};

export default ContactItem;
