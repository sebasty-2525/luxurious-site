// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: #000;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #222;
`;

function Footer() {
  return (
    <FooterContainer>
      © 2025 Luxurious Inc. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
