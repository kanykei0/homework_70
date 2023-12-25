import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import NewContact from "./containers/NewContact/NewContact";

function App() {
  return (
    <>
      <Toolbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
