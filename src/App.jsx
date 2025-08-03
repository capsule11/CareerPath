import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
