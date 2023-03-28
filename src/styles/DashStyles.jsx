import styled from 'styled-components';

export const TopAlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ScrollRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 0.5rem;
  padding-bottom: 0.3rem;
  min-height: 40%;
`;

// issue with the scroll row container not automatically detecting height to fit all content, without it, the div collapses
