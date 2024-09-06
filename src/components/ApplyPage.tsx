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

const FormContainer = styled.div`
  width: 100%;
  height: 800px; // Adjust this value as needed
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ApplyPage: React.FC = () => {
  return (
    <ApplyContainer>
      <Title>Apply for TED Circle Social Innovators Programme</Title>
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
    </ApplyContainer>
  );
};

export default ApplyPage;
