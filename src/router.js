import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from './components/Navbar';
// import Services from "./components/Services";
// import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Services from "./components/Services";



function router() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/services" element={<Services />} />
                </Routes>
            </Router>
        </div>
    )
}

export default router;