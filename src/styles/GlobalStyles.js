// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #000; /* ダーク背景 */
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif; /* 高級感のあるフォント */
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  a {
    color: #FFD700; /* ゴールド */
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }
`;

// framer-motionのmotionとstyled-componentsを組み合わせる場合は、
// 例えばこう書くこともできる: const MotionDiv = motion(styled.div``);

