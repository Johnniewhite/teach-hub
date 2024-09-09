import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import styled from "styled-components";
import axios from "axios"; // For sending confirmation email via API

export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  paystackPublicKey: string;
  subaccountCode: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PayButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  paystackPublicKey,
  subaccountCode,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100, // Convert to kobo
    publicKey: paystackPublicKey,
    subaccount: subaccountCode,
    metadata: {
      name,
      phone,
      custom_fields: [] // Add this empty array to satisfy the type
    },
  };

  const sendConfirmationEmail = async (reference: string) => {
    try {
      await axios.post('http://localhost:5000/api/send-confirmation-email', { 
        email, 
        name, 
        amount,
        reference
      });
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  const onSuccess = (reference: any) => {
    console.log("Payment successful. Reference:", reference);
    if (reference.status === 'success') {
      sendConfirmationEmail(reference.reference);
    }
    onClose();
  };

  const onClosePayment = () => {
    console.log("Payment modal closed");
    onClose();
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    if (!email || !name || !phone) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Initializing payment with config:", config);
    initializePayment({
      onSuccess,
      onClose: onClosePayment,
    });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Complete Your Payment</h2>
        <p>Amount: ₦{amount}</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <PayButton onClick={handlePayment}>
          Pay Now
        </PayButton>

        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PaymentModal;
