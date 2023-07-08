import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./components/stylesheets/layout.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Errorpage from "./components/pages/Errorpage";

// import Login from "./components/pages/Login";
// import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
            {/* <Route path="/register" exact element={<Register />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />

            {/* <Route path="/task" exact element={<Task />} /> */}

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}
