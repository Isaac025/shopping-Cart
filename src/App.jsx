import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Desserts from "../pages/Desserts";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dessert" element={<Desserts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
