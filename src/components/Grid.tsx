import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  width: 100%;
`;

export const GridItem = styled.div<{ span?: number }>`
  grid-column: span ${props => props.span || 12};
  
  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;