import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Forum from "./pages/Forum";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}
