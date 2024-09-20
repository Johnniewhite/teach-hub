import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = styled.main`
  min-height: 100vh;
  padding-top: 60px;
  background-color: var(--background-color);
  color: var(--text-color);
`;

interface LayoutProps {
  children: React.ReactNode;
  programPrice: number;
}

const Layout: React.FC<LayoutProps> = ({ children, programPrice }) => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar className={isScrolled ? "scrolled" : ""} />
      <Main>{children}</Main>
      <Footer />
      
    </>
  );
};

export default Layout;
