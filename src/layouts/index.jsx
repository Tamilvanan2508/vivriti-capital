import React from "react";
import Header from "../components/Header";
import Advertisement from "../components/Advertisement";
import Products from "../screens/Products";
import Footer from "../components/Footer";
import { SearchProvider } from "../context/SearchContext";

const Layout = () => {
  return (
    <SearchProvider>
      <div className="container mx-auto px-4">
        <Header />
        <Advertisement />
        <Products />
      </div>
      <Footer />
    </SearchProvider>
  );
};

export default Layout;
