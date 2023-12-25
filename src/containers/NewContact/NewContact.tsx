import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ContactMutation } from "../../types";
import { createContact } from "../../store/contactThunks";
import { selectCreateLoading } from "../../store/contactSlice";

const NewContact = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreateLoading);

  const onSubmit = async (contact: ContactMutation) => {
    await dispatch(createContact(contact));
    navigate("/");
  };

  return <ContactForm onSubmit={onSubmit} isLoading={createLoading} />;
};

export default NewContact;
