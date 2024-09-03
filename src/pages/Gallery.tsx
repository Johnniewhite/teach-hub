import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  padding-top: 80px; // To account for the fixed navbar
`;

const Hero = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

// Sample gallery items (replace with your actual images and captions)
const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', alt: 'Team Collaboration', caption: 'TEACcH team collaborating on a project' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', alt: 'Workshop Session', caption: 'Participants engaged in a TED Circle workshop' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2', alt: 'Conference Presentation', caption: 'Keynote speaker at the Festival of Change' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655', alt: 'Networking Event', caption: 'Networking session during a TEACcH event' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998', alt: 'Brainstorming Session', caption: 'Innovators brainstorming ideas at TEACcH' },
  { src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312', alt: 'Innovation Showcase', caption: 'Showcasing innovative projects at TEACcH' },
  // Add more gallery items as needed
];

const Gallery: React.FC = () => {
  return (
    <GalleryWrapper>
      <Helmet>
        <title>TEACcH Gallery - Showcasing Our Impact</title>
        <meta name="description" content="Explore TEACcH's gallery of events, workshops, and impactful moments in social innovation." />
      </Helmet>

      <Hero>
        <div className="container">
          <HeroTitle>Our Gallery</HeroTitle>
          <p>Capturing Moments of Innovation and Impact</p>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>TEACcH in Action</SectionTitle>
          <GalleryGrid>
            {galleryItems.map((item, index) => (
              <GalleryItem key={index}>
                <GalleryImage src={item.src} alt={item.alt} />
                <GalleryCaption>{item.caption}</GalleryCaption>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </div>
      </Section>

      <Section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <SectionTitle>Share Your TEACcH Experience</SectionTitle>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            Have you been part of a TEACcH event or program? We'd love to see your photos! Share your experiences with us on social media using #TEACcHImpact or email your photos to gallery@teacch.org.
          </p>
        </div>
      </Section>
    </GalleryWrapper>
  );
};

export default Gallery;