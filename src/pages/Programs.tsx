import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const ProgramsWrapper = styled.div`
  padding-top: 80px; // To account for the fixed navbar
`;

const Hero = styled.div`
  background-color: var(--secondary-color);
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

const ProgramCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 40px;
`;

const ProgramTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const Button = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Programs: React.FC = () => {
  return (
    <ProgramsWrapper>
      <Helmet>
        <title>TEACcH Programs - Empowering Social Innovators</title>
        <meta name="description" content="Explore TEACcH's innovative programs: The Education Development Circle (TED Circle) and the Festival of Change, designed to empower social innovators." />
      </Helmet>

      <Hero>
        <div className="container">
          <HeroTitle>Our Programs</HeroTitle>
          <p>Empowering the Next Generation of Social Innovators</p>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>Transformative Learning Experiences</SectionTitle>
          <Content>
            <p>
              At TEACcH, we offer cutting-edge programs designed to equip social innovators with the skills, knowledge, and resources they need to create lasting impact. Our programs focus on bridging gaps in the social innovation ecosystem and fostering collaboration among changemakers.
            </p>
          </Content>
        </div>
      </Section>

      <Section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <ProgramCard>
            <ProgramTitle>The Education Development Circle (TED Circle)</ProgramTitle>
            <p>
              TED Circle is a cohort-based mentorship program designed to equip social innovators with the essential knowledge and advanced skills needed to create sustainable solutions in the social innovation space.
            </p>
            <p>The program's core modules focus on:</p>
            <ul>
              <li>Building solutions driven by passion</li>
              <li>Converting purpose into sustainable outcomes</li>
              <li>Developing scalable products or projects</li>
              <li>Understanding the policies that impact social innovation</li>
            </ul>
            <p>
              Participants are also trained to pitch effectively, gaining access to the resources needed to accelerate their products or projects.
            </p>
            <Button href="/ted-circle">Learn More About TED Circle</Button>
          </ProgramCard>

          <ProgramCard>
            <ProgramTitle>Festival of Change</ProgramTitle>
            <p>
              The Festival of Change is an annual conference that responds to global challenges threatening the stability and future of our generations. This event is a platform where bold ideas are generated to tackle these problems.
            </p>
            <p>Key features of the Festival of Change:</p>
            <ul>
              <li>Keynote addresses from industry leaders</li>
              <li>Panel discussions on pressing global issues</li>
              <li>Innovative activities to spark creativity and collaboration</li>
              <li>Networking opportunities with like-minded innovators</li>
            </ul>
            <p>
              The ultimate goals of the conference are to inspire the creation of startups focused on solutions, foster collaborations and partnerships, and provide mentorship opportunities that grant access to resources needed to accelerate impactful initiatives.
            </p>
            <Button href="/festival-of-change">Discover the Festival of Change</Button>
          </ProgramCard>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>Join Us in Creating Change</SectionTitle>
          <Content>
            <p>
              Whether you're a budding social entrepreneur or an experienced innovator, our programs offer the perfect platform to enhance your skills, expand your network, and amplify your impact. Join us at TEACcH and be part of a community dedicated to creating positive change in the world.
            </p>
            <Button href="/apply">Apply to Our Programs</Button>
          </Content>
        </div>
      </Section>
    </ProgramsWrapper>
  );
};

export default Programs;