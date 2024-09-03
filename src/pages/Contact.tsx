import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const ContactWrapper = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--light-gray);
  padding: 30px;
  border-radius: 8px;
`;

const ContactMethod = styled.div`
  margin-bottom: 20px;
`;

const ContactMethodTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <ContactWrapper>
      <Helmet>
        <title>Contact TEACcH - Get in Touch</title>
        <meta name="description" content="Contact TEACcH for inquiries about our programs, partnerships, or to learn more about how we're bridging gaps in social innovation." />
      </Helmet>

      <Hero>
        <div className="container">
          <HeroTitle>Get in Touch</HeroTitle>
          <p>We'd love to hear from you</p>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>Contact Us</SectionTitle>
          <ContactGrid>
            <ContactInfo>
              <ContactMethod>
                <ContactMethodTitle>Address</ContactMethodTitle>
                <p>Lagos, Nigeria</p>
              </ContactMethod>
              <ContactMethod>
                <ContactMethodTitle>Phone</ContactMethodTitle>
                <p>+2348085255769</p>
                <p>+2348104643834</p>
              </ContactMethod>
              <ContactMethod>
                <ContactMethodTitle>Email</ContactMethodTitle>
                <p>info@teacch.org</p>
              </ContactMethod>
              <ContactMethod>
                <ContactMethodTitle>Social Media</ContactMethodTitle>
                <p>Follow us on Twitter, Facebook, and LinkedIn</p>
              </ContactMethod>
            </ContactInfo>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactGrid>
        </div>
      </Section>
    </ContactWrapper>
  );
};

export default Contact;