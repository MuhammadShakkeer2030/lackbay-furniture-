import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
// import {
//   Footer,
//   Header,
//   Home,
//   ContactUs,
//   ProductCard,
//   AboutPage,
//   GalleryPage,
//   ProductDetails,
// } from "./components/paths";

//  lazy loading

const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./components/Home"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const ProductCard = React.lazy(() => import("./components/ProductCard"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const GalleryPage = React.lazy(() => import("./pages/GalleryPage"));
const ProductDetails = React.lazy(() => import("./components/ProductDetails"));

const App: React.FC = () => {
  // const pageRestoration = ScrollRestoration
  return (
    <>
      <BrowserRouter>
        <div className=" bg-white relative">
          <Suspense fallback={<div>Loading....</div>} >
            <Header />
            <div className="">
              <Routes>
                {/* Page */}
                {/* <ScrollRestoration /> */}
                <Route path="/" element={<Home />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/galleryPage" element={<GalleryPage />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route
                  path="/productDetails/:id"
                  element={<ProductDetails index={""} />}
                />
              </Routes>
            </div>
            <Footer />
          </Suspense>

        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
