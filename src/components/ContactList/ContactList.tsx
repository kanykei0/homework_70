import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectContacts, selectRenderLoading } from "../../store/contactSlice";
import { deleteContact, fecthAllContacts } from "../../store/contactThunks";
import { Spinner } from "react-bootstrap";
import ContactItem from "./Contact";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const contactsLoading = useAppSelector(selectRenderLoading);

  useEffect(() => {
    dispatch(fecthAllContacts());
  }, [dispatch]);

  const removeContact = async (id: string) => {
    await dispatch(deleteContact(id));
    await dispatch(fecthAllContacts());
    navigate("/");
  };

  return (
    <>
      {contactsLoading ? (
        <Spinner />
      ) : contacts ? (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            contact={contact}
            onDelete={removeContact}
          />
        ))
      ) : (
        <h4>Empty</h4>
      )}
    </>
  );
};

export default ContactList;
