import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogWrapper = styled.div`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const BlogPost = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px;
`;

const BlogTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  color: var(--text-color);
  margin-bottom: 15px;
`;

const BlogMeta = styled.div`
  font-size: 14px;
  color: var(--secondary-color);
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 15px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const NewsletterSection = styled.div`
  background-color: var(--light-gray);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  margin-top: 60px;
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

const NewsletterButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

// Sample blog posts (replace with your actual blog data)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Social Innovation",
    excerpt: "Exploring emerging trends and technologies shaping the landscape of social impact.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    date: "May 15, 2023",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "Success Story: TED Circle Alumni",
    excerpt: "How one TED Circle participant turned their idea into a thriving social enterprise.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "April 28, 2023",
    author: "John Smith"
  },
  {
    id: 3,
    title: "Highlights from Festival of Change 2023",
    excerpt: "Recap of the groundbreaking ideas and collaborations from our annual conference.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    date: "March 10, 2023",
    author: "Alice Johnson"
  },
  // Add more blog posts as needed
];

const Blog: React.FC = () => {
  return (
    <BlogWrapper>
      <Helmet>
        <title>TEACcH Blog - Insights on Social Innovation</title>
        <meta name="description" content="Explore bold thoughts, unconventional insights, and the latest trends in social innovation on the TEACcH blog." />
      </Helmet>

      <Hero>
        <div className="container">
          <HeroTitle>TEACcH Blog</HeroTitle>
          <p>Insights, Stories, and Innovations in Social Impact</p>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>Latest Articles</SectionTitle>
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogPost key={post.id}>
                <BlogImage src={post.image} alt={post.title} />
                <BlogContent>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogMeta>{post.date} | By {post.author}</BlogMeta>
                  <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
                </BlogContent>
              </BlogPost>
            ))}
          </BlogGrid>
        </div>
      </Section>

      <Section>
        <div className="container">
          <NewsletterSection>
            <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
            <p>Stay updated with the latest insights, opportunities, and TEACcH news.</p>
            <NewsletterForm>
              <NewsletterInput type="email" placeholder="Enter your email" required />
              <NewsletterButton type="submit">Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterSection>
        </div>
      </Section>
    </BlogWrapper>
  );
};

export default Blog;