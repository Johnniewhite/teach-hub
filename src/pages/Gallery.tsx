import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryData from "../data/galleryItems.json";

// Type definitions
interface GalleryItem {
  url: string;
  alt: string;
  caption: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

// Styled components
const GalleryWrapper = styled.div`
  padding-top: 80px;
`;

const HeroContainer = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const GalleryGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const GalleryItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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

  ${GalleryItemWrapper}:hover & {
    transform: translateY(0);
  }
`;

// Reusable components
const Hero: React.FC<HeroProps> = ({ title, subtitle }) => (
  <HeroContainer>
    <div className="container">
      <HeroTitle>{title}</HeroTitle>
      <p>{subtitle}</p>
    </div>
  </HeroContainer>
);

const Section: React.FC<SectionProps> = ({
  title,
  children,
  backgroundColor,
}) => (
  <SectionContainer style={{ backgroundColor: backgroundColor || "white" }}>
    <div className="container">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  </SectionContainer>
);

const GalleryGrid: React.FC<{
  items: GalleryItem[];
  onImageClick: (index: number) => void;
}> = ({ items, onImageClick }) => (
  <GalleryGridWrapper>
    {items.map((item, index) => (
      <GalleryItemComponent
        key={index}
        item={item}
        onClick={() => onImageClick(index)}
      />
    ))}
  </GalleryGridWrapper>
);

const GalleryItemComponent: React.FC<{
  item: GalleryItem;
  onClick: () => void;
}> = ({ item, onClick }) => {
  return (
    <GalleryItemWrapper onClick={onClick}>
      <img src={item.url} alt={item.alt} style={{ width: "100%", height: "auto" }} />
      <GalleryCaption>{item.caption}</GalleryCaption>
    </GalleryItemWrapper>
  );
};

const Gallery: React.FC = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const galleryItems = galleryData.items;

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  return (
    <GalleryWrapper>
      <Helmet>
        <title>TEACcH Gallery - Showcasing Our Impact</title>
        <meta
          name="description"
          content="Explore TEACcH's gallery of events, workshops, and impactful moments in social innovation."
        />
      </Helmet>

      <Hero
        title="Our Gallery"
        subtitle="Capturing Moments of Innovation and Impact"
      />

      <Section title="TEACcH in Action">
        <GalleryGrid items={galleryItems} onImageClick={openLightbox} />
        <Lightbox
          open={lightboxIsOpen}
          close={() => setLightboxIsOpen(false)}
          index={currentImage}
          slides={galleryItems.map((item) => ({
            src: item.url,
            alt: item.alt,
            description: item.caption,
          }))}
        />
      </Section>

      <Section
        title="Share Your TEACcH Experience"
        backgroundColor="var(--light-gray)"
      >
        <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          Have you been part of a TEACcH event or program? We'd love to see your
          photos! Share your experiences with us on social media using
          #TEACcHImpact or email your photos to gallery@teacch.org.
        </p>
      </Section>
    </GalleryWrapper>
  );
};

export default Gallery;