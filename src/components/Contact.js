// src/components/Contact.js
import React, { useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #111;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #FFD700;
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: #FFD700;
  color: #000;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5c100;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで送信処理を行う
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Contact Us</SectionTitle>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Label>Email</Label>
          <Input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label>Message</Label>
          <TextArea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </FormWrapper>
    </ContactSection>
  );
}

export default Contact;
