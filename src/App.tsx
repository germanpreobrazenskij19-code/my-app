import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import FranchisePage from "@/pages/FranchisePage";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/franchise" element={<FranchisePage />} />
      </Routes>
    </div>
  );
}