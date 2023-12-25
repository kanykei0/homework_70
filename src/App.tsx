import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Toolbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
