// src/components/Gallery.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background-color: #000;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #FFD700;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

function Gallery() {
  const images = [
    "/src/assets/gallery01.jpg",
    "/src/assets/gallery02.jpg",
    "/src/assets/gallery03.jpg",
    "/src/assets/gallery04.jpg",
    "/src/assets/gallery05.jpg"
  ];

  return (
    <GallerySection id="gallery">
      <SectionTitle>Gallery</SectionTitle>
      <GalleryGrid>
        {images.map((imgSrc, i) => (
          <GalleryItem
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <GalleryImg src={imgSrc} alt={`gallery-${i}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
}

export default Gallery;
