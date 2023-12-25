import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectContacts, selectRenderLoading } from "../../store/contactSlice";
import { fecthAllContacts } from "../../store/contactThunks";
import { Spinner } from "react-bootstrap";
import ContactItem from "./Contact";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const contactsLoading = useAppSelector(selectRenderLoading);

  useEffect(() => {
    dispatch(fecthAllContacts());
  }, [dispatch]);

  console.log(contacts);

  return (
    <>
      {contactsLoading ? (
        <Spinner />
      ) : contacts ? (
        contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))
      ) : (
        <h4>Empty</h4>
      )}
    </>
  );
};

export default ContactList;
