import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const AnimatedWrapper = styled(animated.div)`
  padding: 40px 0;
`;

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return <AnimatedWrapper style={props}>{children}</AnimatedWrapper>;
};

export default AnimatedSection;