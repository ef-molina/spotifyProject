import styled from 'styled-components';

export const LibraryIcon = styled.span`
  font-size: 55px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to top right,
    rgb(223, 215, 248),
    rgb(30, 26, 255)
  );
  height: 100%;
  max-width: 90%;
  flex-shrink: 1;
  aspect-ratio: 1/1;
`;

export const LibRow = styled.div`
  display: flex;
  background: ${({ bg }) => bg};
  border: ${({ border }) => border};
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap || 'none'};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction || 'row'};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ oX }) => oX};
  padding: ${({ padding }) => padding};
  contain: content;

  &:hover {
    background: rgba(255, 255, 255, 0.31);
    transition: all 300ms ease;
  }
`;
