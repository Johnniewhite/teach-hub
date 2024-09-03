import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const AboutWrapper = styled.div`
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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 48%;
  border-radius: 8px;
`;

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Helmet>
        <title>About TEACcH - Bridging Gaps in Social Innovation</title>
        <meta name="description" content="Learn about TEACcH, a social innovation hub dedicated to training and equipping talents to address gaps in the social innovation ecosystem." />
      </Helmet>

      <Hero>
        <div className="container">
          <HeroTitle>About TEACcH</HeroTitle>
          <p>Bridging Gaps in Social Innovation</p>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <Content>
            <p>
              The Erioluwa Adeyanka Co-Creation Hub (TEACcH) is a social innovation hub dedicated to training and equipping talents to address gaps in the social innovation ecosystem. By nurturing skilled professionals, TEACcH ensures that emerging challenges are met with effective, specialized solutions.
            </p>
            <p>
              At TEACcH, we believe that the future of social innovation lies in collaboration, expertise, and the right support systems. Our mission is to bridge the gaps within the social innovation ecosystem by training and equipping talents to become the driving force behind transformative solutions.
            </p>
          </Content>
        </div>
      </Section>

      <Section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <SectionTitle>Our Vision</SectionTitle>
          <Content>
            <p>
              We envision a world where every social innovation idea, regardless of its complexity, is met with the necessary tools, resources, and professional expertise to bring it to life. TEACcH aspires to be the go-to destination for innovators seeking the systems and structures essential to executing their ideas effectively.
            </p>
          </Content>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>What We Do</SectionTitle>
          <Content>
            <p>
              TEACcH provides comprehensive support that goes beyond just ideation. We offer a one-stop shop for everything required to turn your innovative ideas into impactful realities. Whether you need cutting-edge tech solutions, strategic project planning, or dynamic marketing strategies, TEACcH has you covered.
            </p>
            <ImageSection>
              <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop" alt="Collaboration" />
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" alt="Innovation" />
            </ImageSection>
          </Content>
        </div>
      </Section>

      <Section style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <div className="container">
          <SectionTitle>Why It Matters</SectionTitle>
          <Content>
            <p>
              In the rapidly evolving landscape of social innovation, having the right support can mean the difference between an idea that fades away and one that changes the world. TEACcH is committed to empowering the next generation of social innovators by ensuring they have access to the resources and expertise necessary to address the pressing challenges of our time.
            </p>
            <p>
              By fostering a community of skilled professionals and providing robust support systems, TEACcH is paving the way for sustainable, impactful change. Join us on our journey to transform the social innovation space and create solutions that truly make a difference.
            </p>
          </Content>
        </div>
      </Section>
    </AboutWrapper>
  );
};

export default About;