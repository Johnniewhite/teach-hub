import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionContent>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContent>
    </SectionWrapper>
  );
};

export default Section;