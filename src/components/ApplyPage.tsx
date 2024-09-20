import React from "react";
import styled from "styled-components";

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

const AccountInfo = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--light-gray);
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: var(--primary-color);
`;

const ApplyPage: React.FC = () => {
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
          title="ApplyForm"
        >
          Loading…
        </iframe>
      </FormContainer>
      <AccountInfo>
        <span>
          Kindly ensure to make your payments to this account and keep your receipts for confirmation.
        </span>
        <br />
        <span>
          <strong>Account Number:</strong> 8123030830
          <br />
          <strong>Name:</strong> Erioluwa Adeyinka
          <br />
          <strong>Bank:</strong> Moniepoint
        </span>
      </AccountInfo>
    </ApplyContainer>
  );
};

export default ApplyPage;
