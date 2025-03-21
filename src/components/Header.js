// src/components/Header.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBar = styled(motion.nav)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const NavItem = styled.a`
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

function Header() {
  return (
    <NavBar
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <NavItem href="#hero">Home</NavItem>
      <NavItem href="#services">Services</NavItem>
      <NavItem href="#gallery">Gallery</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </NavBar>
  );
}

export default Header;
