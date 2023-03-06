import styled from 'styled-components';

export const AppContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr; //navbar, main, footer
  gap: 0.5rem;
  height: 100vh;
  min-width: 100vw;
`;

export const Flex = styled.div`
  display: flex;
  background: ${({ bg }) => bg};
  border: ${({ border }) => border};
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap || 'none'};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction || 'row'};
  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX};
  padding: ${({ padding }) => padding};
  overflow: auto;
`;
