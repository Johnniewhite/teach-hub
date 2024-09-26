import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Type definitions
interface GalleryItem {
  url: string;
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

const SectionContainer = styled.section<{ backgroundColor?: string }>`
  padding: 80px 0;
  background-color: ${(props) => props.backgroundColor || "white"};
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Reusable components
const Hero: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <HeroContainer>
    <div className="container">
      <HeroTitle>{title}</HeroTitle>
      <p>{subtitle}</p>
    </div>
  </HeroContainer>
);

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ title, children, backgroundColor }) => (
  <SectionContainer backgroundColor={backgroundColor}>
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
        key={item.url}
        item={item}
        onClick={() => onImageClick(index)}
      />
    ))}
  </GalleryGridWrapper>
);

const GalleryItemComponent: React.FC<{
  item: GalleryItem;
  onClick: () => void;
}> = ({ item, onClick }) => (
  <GalleryItemWrapper>
    <a href={item.url} download={item.url.split("/").pop()} onClick={onClick}>
      <img
        src={item.url}
        alt={item.url.split("/").pop()}
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
      />
    </a>
    <GalleryCaption>
      <a href={item.url} download={item.url.split("/").pop()}>
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </GalleryCaption>
  </GalleryItemWrapper>
);

const Gallery: React.FC = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://teacch-images.vercel.app/images");

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        const processedItems: GalleryItem[] = data.images.map(
          (url: string) => ({ url })
        );

        setGalleryItems(processedItems);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching images. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginatedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openLightbox = (index: number) => {
    setCurrentImage((currentPage - 1) * itemsPerPage + index);
    setLightboxIsOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
        <GalleryGrid items={paginatedItems} onImageClick={openLightbox} />
        <Lightbox
          open={lightboxIsOpen}
          close={() => setLightboxIsOpen(false)}
          index={currentImage}
          slides={galleryItems.map((item) => ({
            src: item.url,
            alt: item.url.split("/").pop(),
          }))}
        />
        <PaginationContainer>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <span>
            {currentPage} / {totalPages}
          </span>
          <PaginationButton
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      </Section>
    </GalleryWrapper>
  );
};

export default Gallery;
