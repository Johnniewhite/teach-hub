import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--text-color);
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  margin-bottom: 6px;
`;

const HeroSubtitle = styled.h2`
  font-size: 28px;
  line-height: 1.10722;
  font-weight: 400;
  letter-spacing: .004em;
  margin-bottom: 18px;
`;

const HeroButton = styled.a`
  margin-top: 0.8em;
`;

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <HeroContainer backgroundImage={backgroundImage || 'https://placehold.co/1600x900'}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroButton href="#learn-more" className="button">Learn more</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;