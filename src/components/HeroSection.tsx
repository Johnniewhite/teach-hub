import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/hero.avif'; // Updated to use the correct image file

const HeroContainer = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  color: var(--background-color);
  text-align: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  max-width: 600px;
  margin: 0 auto 40px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CTAButton = styled.button`
  font-size: 18px;
  padding: 15px 30px;
  background-color: var(--secondary-color);
  color: var(--background-color);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Bridging Gaps in Social Innovation</HeroTitle>
        <HeroSubtitle>Where Ideas Become Impactful Realities</HeroSubtitle>
        <CTAButton>Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;