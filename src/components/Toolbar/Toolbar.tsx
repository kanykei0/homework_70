import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Contacts
        </Link>
        <Link to="/new-contact" className="btn btn-light">
          Add new contact
        </Link>
      </div>
    </nav>
  );
};

export default Toolbar;
