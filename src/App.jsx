import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Activity from "./pages/Activity.jsx";
import ToDo from "./pages/ToDo.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <main>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="main ">
            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="pages/ToDo" element={<ToDo />} />
              <Route path="pages/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
