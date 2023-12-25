import { useState } from "react";
import { Contact } from "../../types";
import ButtonSpinner from "../Spinners/ButtonSppinner";
import { Link } from "react-router-dom";

const initialState: Contact = {
  name: "",
  phone: "",
  email: "",
  avatar: "",
};

interface Props {
  onSubmit: (contact: Contact) => void;
  existingContact?: Contact;
  isEdit?: boolean;
  isLoading?: boolean;
}

const ContactForm: React.FC<Props> = ({
  onSubmit,
  existingContact = initialState,
  isEdit,
  isLoading,
}) => {
  const [contact, setContact] = useState<Contact>(existingContact);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    onSubmit({
      ...contact,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? "Edit contact" : "Add new contact"}</h4>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={contact.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={contact.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="avatar" className="form-label">
          Avatar
        </label>
        <input
          type="text"
          className="form-control"
          id="avatar"
          name="avatar"
          value={contact.avatar}
          onChange={onChange}
          required
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="btn btn-success me-3"
          disabled={isLoading}
        >
          {isLoading && <ButtonSpinner />}
          {isEdit ? "Update" : "Create"}
        </button>
        {!isLoading && (
          <Link to="/" className="btn btn-primary">
            Back to contacts
          </Link>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
