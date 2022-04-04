import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import DetailBlog from "./components/detailBlog.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailBlog />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
