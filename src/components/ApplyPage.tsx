import React, { useState } from "react";
import styled from "styled-components";
import PaymentModal from "./PaymentModal";

const ApplyContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const PayButton = styled.button`
  display: block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const BrochureButton = styled.a`
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

const FormContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ApplyPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ApplyContainer>
      <Title>Apply for TED Circle Social Innovators Programme</Title>

      <BrochureButton
        href="/assets/THE_TED_CIRCLE_INNOVATION_PROGRAMME.pdf"
        download="TED Circle Innovation Programme Brochure.pdf"
      >
        Download Program Brochure
      </BrochureButton>

      <FormContainer>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScPylmlsYKwtsaJ8IYiZyj9X451kUdkaUVGz_shrDLSdMd1AQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </FormContainer>

      <PayButton onClick={handleApply}>
        Pay for the Program
      </PayButton>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        amount={Number(process.env.REACT_APP_PROGRAM_PRICE) || 101624}
        paystackPublicKey={process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_e77955b75f34bc8a2c8d61427b8a51b2c0fb7228'}
        subaccountCode={process.env.REACT_APP_SUBACCOUNT_CODE || 'ACCT_tu2eakcs5h2k93t'}
      />
    </ApplyContainer>
  );
};

export default ApplyPage;
