import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Home,
  ContactUs,
  ProductCard,
  AboutPage,
  GalleryPage,
} from "./components/paths";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="w-[80%] mx-auto  py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/GalleryPage" element={<GalleryPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ProductCard" element={<ProductCard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
