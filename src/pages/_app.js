import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [showNav, setShowNav] = useState(true);
  const showNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <>
       <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        showNavbar={showNavbar}
        showNav={showNav}
      />
      <Component
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} showNav={showNav}
        {...pageProps}
      />
     
    </>
  );
}
