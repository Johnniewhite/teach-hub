import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Slider from '../components/Slider';

const HomePageWrapper = styled.div`
  // Add any specific styles for the HomePage container here
`;

const FullScreenHero = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Section = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

const SectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  width: 48%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  width: 80%;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const HeroButton = styled.a`
  background-color: var(--secondary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const sliderImages = [
  'https://images.unsplash.com/photo-1693166757401-d9b192f3a0c6?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop',
];

const Home: React.FC = () => {
  return (
    <HomePageWrapper>
      <Helmet>
        <title>TEACcH - Bridging Gaps in Social Innovation</title>
        <meta name="description" content="TEACcH is a social innovation hub dedicated to training and equipping talents to address gaps in the social innovation ecosystem." />
      </Helmet>
      <FullScreenHero>
        <Slider images={sliderImages} fullScreen={true} />
        <HeroContent>
          <HeroTitle>Bridging Gaps in Social Innovation</HeroTitle>
          <HeroSubtitle>Where Ideas Become Impactful Realities</HeroSubtitle>
          <HeroButton href="#learn-more">Learn more</HeroButton>
        </HeroContent>
      </FullScreenHero>
      <Section id="learn-more">
        <div className="container">
          <SectionTitle>About TEACcH</SectionTitle>
          <SectionContent>
            <p>
              The Erioluwa Adeyinka Co-Creation Hub (TEACcH) is a dynamic social innovation hub dedicated to nurturing and equipping talented individuals to address critical gaps in the social innovation ecosystem. By fostering skilled professionals, TEACcH ensures that emerging challenges are met with effective, specialized solutions.
            </p>
            <a href="/about" className="button">Learn more about us</a>
          </SectionContent>
          <ImageSection>
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop" alt="Teamwork" />
            </ImageContainer>
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop" alt="Innovation" />
            </ImageContainer>
          </ImageSection>
        </div>
      </Section>
      <Section style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <div className="container">
          <SectionTitle>Our Programs</SectionTitle>
          <SectionContent>
            <h3>The Education Development Circle (TED Circle)</h3>
            <p>
              TED Circle is a cohort-based mentorship program designed to equip social innovators with the essential knowledge and advanced skills needed to create sustainable solutions in the social innovation space. The program's core modules focus on building solutions driven by passion, converting purpose into sustainable outcomes, developing scalable products or projects, and understanding the policies that impact them.
            </p>
            <HeroButton href="/programs" style={{ backgroundColor: 'var(--secondary-color)' }}>Explore our programs</HeroButton>
          </SectionContent>
        </div>
      </Section>
      <Section>
        <div className="container">
          <SectionTitle>Festival of Change</SectionTitle>
          <SectionContent>
            <p>
              The Festival of Change is an annual conference that responds to global challenges threatening the stability and future of our generations. This event is a platform where bold ideas are generated to tackle these problems. Each Festival of Change is designed to spearhead solutions through keynote addresses, panel discussions, and innovative activities.
            </p>
            <a href="/events" className="button">Learn more about our events</a>
          </SectionContent>
          <ImageSection>
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1470&auto=format&fit=crop" alt="Conference" />
            </ImageContainer>
            <ImageContainer>
              <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop" alt="Workshop" />
            </ImageContainer>
          </ImageSection>
        </div>
      </Section>
    </HomePageWrapper>
  );
};

export default Home;
