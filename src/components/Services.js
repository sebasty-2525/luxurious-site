// src/components/Services.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #111; 
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #FFD700;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background-color: #222;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

function Services() {
  const servicesData = [
    {
      title: "VIP Travel Planning",
      text: "Exclusive itineraries with top-class accommodations and experiences.",
      image: "/src/assets/service01.jpg"
    },
    {
      title: "Personal Shopping",
      text: "High-end fashion curation and concierge services.",
      image: "/src/assets/service02.jpg"
    },
    {
      title: "Fine Dining Reservations",
      text: "Access to world-renowned restaurants and private events.",
      image: "/src/assets/service03.jpg"
    },
  ];

  return (
    <ServicesSection id="services">
      <SectionTitle>Our Premium Services</SectionTitle>
      <CardsWrapper>
        {servicesData.map((service, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CardImage src={service.image} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardText>{service.text}</CardText>
          </Card>
        ))}
      </CardsWrapper>
    </ServicesSection>
  );
}

export default Services;
