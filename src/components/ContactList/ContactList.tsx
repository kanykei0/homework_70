import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectContacts, selectRenderLoading } from "../../store/contactSlice";
import { fecthAllContacts } from "../../store/contactThunks";
import { Spinner } from "react-bootstrap";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const contactsLoading = useAppSelector(selectRenderLoading);

  useEffect(() => {
    dispatch(fecthAllContacts());
  }, [dispatch]);

  return (
    <>
      {contactsLoading ? (
        <Spinner />
      ) : contacts ? (
        contacts.map((contact, index) => <div key={index}>{contact.name}</div>)
      ) : (
        <h4>Empty</h4>
      )}
    </>
  );
};

export default ContactList;
