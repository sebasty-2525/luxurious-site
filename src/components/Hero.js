// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: url('/src/assets/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); 
`;

const HeroContent = styled(motion.div)`
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 1;
  max-width: 600px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background-color: #FFD700;
  color: #000;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e5c100;
  }
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <HeroOverlay />
      <HeroContent
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title>Experience True Luxury</Title>
        <Subtitle>A refined taste for the finest things in life.</Subtitle>
        <HeroButton href="#services">Explore Now</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
