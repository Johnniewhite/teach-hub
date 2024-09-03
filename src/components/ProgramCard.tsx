import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: var(--background-color);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const CardContent = styled.div`
  padding: 30px;
  text-align: left;
`;

const CardTitle = styled.h3`
  color: var(--text-color);
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 600;
  letter-spacing: 0.009em;
`;

const CardDescription = styled.p`
  color: var(--text-color);
  font-size: 17px;
  line-height: 1.47059;
  letter-spacing: -0.022em;
`;

interface ProgramCardProps {
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;