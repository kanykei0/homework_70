import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import {
  selectContact,
  selectFetchOneContactLoading,
  selectUpdateContactLoading,
} from "../../store/contactSlice";
import { fetchOneContact, updateContact } from "../../store/contactThunks";
import { ContactMutation } from "../../types";
import { Spinner } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";

const EditContact = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const contact = useAppSelector(selectContact);
  const fetchLoading = useAppSelector(selectFetchOneContactLoading);
  const updateContactLoading = useAppSelector(selectUpdateContactLoading);

  useEffect(() => {
    dispatch(fetchOneContact(id));
  }, [dispatch, id]);

  const onSubmit = async (contact: ContactMutation) => {
    await dispatch(updateContact({ id, contact }));
    navigate("/");
  };

  const existingContact = contact
    ? {
        ...contact,
      }
    : undefined;

  let formSection = <Spinner />;

  if (!fetchLoading) {
    if (contact) {
      formSection = (
        <ContactForm
          onSubmit={onSubmit}
          existingContact={existingContact}
          isEdit
          isLoading={updateContactLoading}
        />
      );
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <div className="row mt-2">
      <div className="col">{formSection}</div>
    </div>
  );
};

export default EditContact;
