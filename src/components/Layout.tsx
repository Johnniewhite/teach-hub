import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PaymentModal from "./PaymentModal";

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
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  const subaccountCode = process.env.REACT_APP_SUBACCOUNT_CODE || "";
  const paystackPublicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || "";

  return (
    <>
      <Navbar className={isScrolled ? "scrolled" : ""} />
      <Main>{children}</Main>
      <Footer />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        amount={programPrice}
        paystackPublicKey={paystackPublicKey}
        subaccountCode={subaccountCode}
      />
    </>
  );
};

export default Layout;
