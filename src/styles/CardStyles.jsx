import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 0.8rem;
  gap: ${({ gap }) => gap || 'none'};
  background: rgba(79, 79, 79, 0.131);
  align-items: center;
  overflow: hidden;
  flex-direction: ${({ direction }) => direction};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  min-height: ${({ height }) => height || '100%'};
  min-width: ${({ width }) => width || '15%'};
  border-radius: 0.2rem;
  flex-shrink: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.31);
    transition: all 300ms ease;
  }

  @media screen and (max-width: 1000px) {
    min-width: 20%;
  }

  @media screen and (max-width: 800px) {
    min-width: 25%;
  }

  @media screen and (max-width: 600px) {
    min-width: 30%;
  }

  @media screen and (max-width: 500px) {
    min-width: 35%;
  }
`;

export const TitleText = styled.h4`
  text-overflow: ellipsis;
  /* overflow-wrap: hidden; */
  /* width: fit-content; */
  overflow: hidden;
  white-space: nowrap;
`;

export const MutedText = styled.h5`
  color: #dce1ebbe;
`;
