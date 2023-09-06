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
  ProductDetails,
} from "./components/paths";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails index={""} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
